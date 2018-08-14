/* eslint-disable prefer-promise-reject-errors */
import db from '../utils/database'
import * as formatar from '../utils/formatar'
import candidaturas from '../candidaturas'
import camara from '../camara'

const sqlExpandido = idCandidato => `
  SELECT
    candidato.id,
    candidato.nome as nome,
    candidato.data_nascimento,
    candidato.cpf,
    candidato.titulo_eleitoral,
    candidato.email,
    cidade.nome as cidade_natal,
    estado.nome as estado_origem,
    grau_instrucao.descricao as grau_instrucao,
    ocupacao.descricao as ocupacao,
    nacionalidade.nome as nacionalidade
  FROM
    candidato
      LEFT JOIN grau_instrucao on candidato.grau_instrucao_id = grau_instrucao.id
      LEFT JOIN ocupacao on candidato.ocupacao_id = ocupacao.id
      LEFT JOIN nacionalidade on candidato.nacionalidade_id = nacionalidade.id,
    cidade
      INNER JOIN estado on cidade.estado_id = estado.id
  WHERE
    candidato.id = ${idCandidato} AND
    cidade.id = candidato.cidade_id;`

const formatarRetorno = candidato => ({
  id: candidato.id,
  nome: formatar.nomeProprio(candidato.nome),
  dataNascimento: formatar.data(candidato.data_nascimento),
  cpf: formatar.cpf(candidato.cpf),
  tituloEleitoral: formatar.tituloEleitoral(candidato.titulo_eleitoral),
  email: formatar.email(candidato.email),
  cidadeNatal: formatar.nomeProprio(candidato.cidade_natal),
  estadoOrigem: formatar.nomeProprio(candidato.estado_origem),
  grauInstrucao: formatar.nomeProprio(candidato.grau_instrucao),
  ocupacao: formatar.nomeProprio(candidato.ocupacao),
  nacionalidade: formatar.nomeProprio(candidato.nacionalidade),
})

const candidatosPorId = ({ idCandidato }) => (
  new Promise((resolve, reject) => {
    if (!idCandidato) {
      reject({ statusCode: 400, erro: 'É preciso enviar o nome de um candidato' })
    }

    const sql = sqlExpandido(parseInt(idCandidato, 10))

    db.query(sql)
      .then((resultados) => {
        if (resultados.length === 0) {
          resolve([])
        }

        const candidato = formatarRetorno(resultados[0])
        Promise.all([
          candidaturas({ idCandidato: candidato.id }),
          camara({ idCandidato: candidato.id }),
        ])
          .then(outrasInformacoes => (
            resolve({
              ...candidato,
              candidaturas: outrasInformacoes[0],
              mandatos: {
                camara: outrasInformacoes[1],
              },
            })
          ))
          .catch((erroOutrasInformacoes) => {
            reject({ statusCode: 500, erro: `Erro inesperado: ${erroOutrasInformacoes}` })
          })
      })
      .catch((error) => {
        reject({ statusCode: 500, erro: `Erro inesperado: ${error}` })
      })
  })
)

export default candidatosPorId