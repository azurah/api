# Laddres - Laboratório de Análise de Desempenho Dos REpresentantes da Sociedade

## API

 API pública para consulta dos dados armazenados no banco de dados do projeto. Responsável, principalmente, por fornecer os dados que serão exibidos no website e no aplicativo móvel.

## Docs (temporário)

<details>
  <summary>
    <code>/candidatos</code>
  </summary>

  Retorna todos os candidatos divididos por cargo (ex.: presidente, governador etc)

  `https://api.caueira.com.br/candidatos`

  ```json
  {
    "presidente": ["..."],
    "governador": ["..."],
    "senador": ["..."],
    "deputadoFederal": [
      {
          "id": 322184,
          "nome": "Samarone",
          "foto": "http://divulgacandcontas.tse.jus.br/candidaturas/oficial/.../foto.jpg",
          "numero": 2311,
          "partido": "PPS"
      },
      {
          "id": 323437,
          "nome": "Titó",
          "foto": "http://divulgacandcontas.tse.jus.br/candidaturas/oficial/.../foto.jpg",
          "numero": 1212,
          "partido": "PDT"
      },
      {
          "id": 966554,
          "nome": "Marcos Luiz",
          "foto": "http://divulgacandcontas.tse.jus.br/candidaturas/oficial/.../foto.jpg",
          "numero": 5412,
          "partido": "PPL"
      },
    ],
    "deputadoEstadual": ["..."],
  }
  ```
</details>

<details>
  <summary>
    <code>/candidatos?estado={sigla do estado}</code>
  </summary>

  Retorna todos os candidatos divididos por cargo do estado indicado. Caso nenhum estado seja indicado, o padrão será 'SE'

  `https://api.caueira.com.br/candidatos?estado=SE`

  ```json
  {
    "presidente": ["..."],
    "governador": ["..."],
    "senador": ["..."],
    "deputadoFederal": ["..."],
    "deputadoEstadual": ["..."],
  }
  ```
</details>

<details>
  <summary>
    <code>/candidatos/{id}</code>
  </summary>

  Retorna as informações pessoais do candidato e os detalhes de sua atual candidatura

  `https://api.caueira.com.br/candidatos/322328`

  ```json
  {
    "id": 322328,
    "nome": "José Iran Barbosa Filho",
    "nomeUrna": "Iran Barbosa",
    "foto": "http://divulgacandcontas.tse.jus.br/candidaturas/oficial/.../foto.jpg",
    "dataNascimento": "21/06/1966",
    "idade": "52 anos",
    "cidadeNatal": "Aracaju",
    "estadoNatal": "Sergipe",
    "partido": "PT",
    "numero": 1390,
    "cargo": "Deputado Federal",
    "grauInstrucao": "Superior Completo",
    "ocupacao": "Servidor Público Estadual"
  }
  ```
</details>

<details>
  <summary>
    <code>/candidatos/{id}/candidaturas</code>
  </summary>

  Retorna todas as candidatuas a partir do id de um candidato

  `https://api.caueira.com.br/candidatos/322328/candidaturas`

  ```json
  [
    {
        "id": 1740218,
        "idCandidato": 322328,
        "cargo": "Vereador",
        "partido": "PT",
        "anoEleicao": 2016,
        "descricaoEleicao": "Eleições Municipais 2016",
        "cidade": "Aracaju",
        "siglaEstado": "SE",
        "estado": "Sergipe",
        "nomeLegenda": "Aracaju Vai Ser Feliz de Novo",
        "composicaoLegenda": "PT / PC do B / PSD",
        "resultado": "Eleito por QP"
    },
    {
        "id": 1335522,
        "idCandidato": 322328,
        "cargo": "Deputado Federal",
        "partido": "PT",
        "anoEleicao": 2014,
        "descricaoEleicao": "Eleições Gerais 2014",
        "cidade": null,
        "siglaEstado": "SE",
        "estado": "Sergipe",
        "nomeLegenda": "Agora É a Vez do Povo",
        "composicaoLegenda": "PT / PDT / PSB / PMDB / PC do B / PRP / PROS / PSD / PRB / PSDC",
        "resultado": "Suplente"
    },
    {
        "id": 1219543,
        "idCandidato": 322328,
        "cargo": "Vereador",
        "partido": "PT",
        "anoEleicao": 2012,
        "descricaoEleicao": "ELEIÇÃO MUNICIPAL 2012",
        "cidade": "Aracaju",
        "siglaEstado": "SE",
        "estado": "Sergipe",
        "nomeLegenda": "Aracaju Seguindo Em Frente",
        "composicaoLegenda": "PT / PMDB / PSDC / PHS",
        "resultado": "Eleito por QP"
    },
    {
        "id": 825856,
        "idCandidato": 322328,
        "cargo": "Deputado Federal",
        "partido": "PT",
        "anoEleicao": 2010,
        "descricaoEleicao": "ELEIÇÕES 2010",
        "cidade": null,
        "siglaEstado": "SE",
        "estado": "Sergipe",
        "nomeLegenda": "Para Sergipe Continuar Seguindo Em Frente",
        "composicaoLegenda": null,
        "resultado": "Eleito por QP"
    },
    {
        "id": 418888,
        "idCandidato": 322328,
        "cargo": "Deputado Federal",
        "partido": "PT",
        "anoEleicao": 2006,
        "descricaoEleicao": "ELEICOES 2006",
        "cidade": null,
        "siglaEstado": "SE",
        "estado": "Sergipe",
        "nomeLegenda": "Sergipe Vai Mudar",
        "composicaoLegenda": null,
        "resultado": "Eleito"
    },
    {
        "id": 322890,
        "idCandidato": 322328,
        "cargo": "Vereador",
        "partido": "PT",
        "anoEleicao": 2004,
        "descricaoEleicao": "ELEICOES 2004",
        "cidade": "Aracaju",
        "siglaEstado": "SE",
        "estado": "Sergipe",
        "nomeLegenda": "Coligação Aracaju Orgulho de Todos Nós",
        "composicaoLegenda": "PT / PCB / PC do B",
        "resultado": "Eleito"
    }
  ]
  ```
</details>

<details>
  <summary>
    <code>/candidatos/{id}/mandatos?anoEleicao={ano da eleição vencida}&cargo={nome do cargo}</code>
  </summary>

  - **Deputado Fedaral**: Retorna o número total de proposições apresentadas durante o mandato, número total de projetos (PL, PEC, PFC, PLP, PDC) e detalhes sobre estes projetos

  `https://api.caueira.com.br/candidatos/322328/mandatos?anoEleicao=2006&cargo=deputado federal`

  ```json
  {
    "projetos": [
        {
            "id": 484493,
            "sigla": "PL",
            "numero": 7739,
            "ano": 2010,
            "ementa": "Altera a Lei nº 8.989, de 24 de fevereiro de 1995, para isentar a aquisição de veículos destinados ao transporte coletivo de escolares do Imposto sobre Produtos Industrializados (IPI) ",
            "keywords": "Alteração, Lei de Isenção do IPI para Compra de Automóveis, isenção, (IPI), aquisição, veículo, transporte escolar.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=792946"
        },
        {
            "id": 467183,
            "sigla": "PL",
            "numero": 6850,
            "ano": 2010,
            "ementa": "Altera dispositivos da Lei nº 11.494, de 20 de junho de 2007, que \"regulamenta o Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação - FUNDEB\".",
            "keywords": "Alteração, Lei do FUNDEB, competência, conselho, fundo, recebimento, análise, prestação de contas, salário educação, requisição, informações, folha de pagamento, profissional da educação, detalhamento, valor, salário, discriminação, nível, modalidade, aplicação de recursos, destinação, manutenção, desenvolvimento, ensino.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=736790"
        },
        {
            "id": 457860,
            "sigla": "PL",
            "numero": 6330,
            "ano": 2009,
            "ementa": "Altera dispositivos da Lei Complementar nº 101, de 04 de maio de 2000, a fim de limitar as nomeações para Cargos em Comissão e Funções de Confiança e de dar publicidade às despesas com essas nomeações e com as dos servidores titulares de cargos efetivos.",
            "keywords": "Alteração, Lei de Responsabilidade Fiscal, limitação, percentual, despesa pública,   pessoal, nomeação, Cargo em Comissão, Função Comissionada, nulidade, ato administrativo, pleno direito, excesso, limite legal, restrição, Poder Público, órgão público,  recebimento, transferência  voluntária, fiscalização, Tribunal de Contas, Estados, prazo determinado, enquadramento, despesas de exercícios anteriores, relatório, gestão fiscal, especificação, contratação, penalidade, infrator.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=709373"
        },
        {
            "id": 454852,
            "sigla": "PL",
            "numero": 6209,
            "ano": 2009,
            "ementa": "Assegura aos profissionais da educação básica, no exercício da profissão, o pagamento da meia-entrada em estabelecimentos culturais e de lazer e define outras providências.",
            "keywords": "Concessão, meia-entrada, desconto, ingresso, profissional da educação, professor, educação básica, escola pública, escola particular, acesso,  atividade cultural, lazer, cinema, teatro, museu, circo, espetáculo, estabelecimento, cartaz, direitos, desconto, penalidade, infrator.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=701610"
        },
        {
            "id": 453428,
            "sigla": "PL",
            "numero": 6138,
            "ano": 2009,
            "ementa": "Insere o art. 64-A e o art. 64-B no Decreto-Lei nº 5.452, de 1° de maio de 1943 - Consolidação das Leis do Trabalho - criando a licença retribuição para o trabalhador que possui vínculo empregatício.",
            "keywords": "Alteração, Legislação Trabalhista, (CLT), criação, licença remunerada, concessão, empregado, vínculo empregatício, tempo de serviço, estabelecimento, grupo econômico,  duração, mês, direitos, remuneração, intervalo.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=697749"
        },
        {
            "id": 440927,
            "sigla": "PL",
            "numero": 5556,
            "ano": 2009,
            "ementa": "Insere o § 3° no art. 244-A da Lei nº 8.069, de 13 de julho de 1990 - Estatuto da Criança e do Adolescente.",
            "keywords": "Alteração, Estatuto da Criança e do Adolescente, extensão, penalidade, exploração sexual, prostituição infantil, agente, conjunção carnal, ato libidinoso, criança, adolescente.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=669826"
        },
        {
            "id": 438021,
            "sigla": "PL",
            "numero": 5385,
            "ano": 2009,
            "ementa": "Altera dispositivos da Lei nº 8.036, de 11 de maio de 1990, a fim de aumentar os percentuais previstos nos §§ 1º e 2º do art. 18 da referida Lei.",
            "keywords": "Alteração, Lei do FGTS, aumento, percentual, depósito, conta vinculada, fundo de garantia, trabalhador, ocorrência, despedida injusta, culpa recíproca, força maior.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=663371"
        },
        {
            "id": 431542,
            "sigla": "PL",
            "numero": 5093,
            "ano": 2009,
            "ementa": "Altera o \"caput\" e o § 2º do art. 39 da Lei nº 10.741, de 1º de outubro de 2003 (Estatuto do Idoso) e suprime o seu § 3º.",
            "keywords": "Alteração, Estatuto do Idoso, redução, limite de idade, idoso, gratuidade, passagem, transporte coletivo urbano, transporte semiurbano, obrigatoriedade, reserva, percentual, assento, ônibus, placa, identificação, garantia, auxílio, embarque, desembarque.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=649287"
        },
        {
            "id": 428853,
            "sigla": "PL",
            "numero": 4982,
            "ano": 2009,
            "ementa": "Regulamenta o art. 7º inciso X da Constituição Federal, tipificando como crime a conduta do chefe da Administração Pública dos entes políticos da federação que não cumpre a contraprestação do Pacto Laboral efetuado com seus Agentes Públicos no mês devido, estabelecendo a conduta e a respectiva penalidade a ser aplicada, inserindo o inciso VIII no art. 11 e o art. 19 na Lei nº 8.429, de 2 de junho de 1992, renumerando-se os demais e dá outras providências.",
            "keywords": "Regulamentação, Constituição Federal, Direitos Sociais, alteração, Lei da Improbidade Administrativa, tipicidade, crime, improbidade administrativa, chefe, Executivo, União Federal, Presidente da República, estados, (DF), Governador, municípios, Prefeito, descumprimento, acordo, política salarial, dolo, retenção, salário, subsídio, remuneração, gratificação, proventos, prestação pecuniária, agente público, servidor público, obrigação, Administração Pública, pena de reclusão, multa.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=643906"
        },
        {
            "id": 460402,
            "sigla": "PLP",
            "numero": 539,
            "ano": 2009,
            "ementa": "Altera dispositivos da Lei Complementar nº 101, de 04 de maio de 2000, a fim de limitar as nomeações para Cargos em Comissão e Funções de Confiança e de dar publicidade às despesas com essas nomeações e com as dos servidores titulares de cargos efetivos.",
            "keywords": "Alteração, Lei de Responsabilidade Fiscal, fixação, percentual, limitação, nomeação, cargo em comissão, cargo de confiança, prazo, obrigatoriedade, órgão público, enquadramento, limite máximo.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=715374"
        },
        {
            "id": 436861,
            "sigla": "PEC",
            "numero": 369,
            "ano": 2009,
            "ementa": "Insere o § 2° no art. 7° da Constituição Federal para determinar a criação do Sistema Nacional de Proteção ao Salário e demais Direitos dos Trabalhadores, renumerando o parágrafo único do mesmo artigo. ",
            "keywords": "Alteração, Constituição Federal, Direitos Sociais, lei federal, criação, sistema nacional, proteção, salário, direitos trabalhistas, trabalhador, criação, cadastro nacional,  empregador, infrator, penalidade, restrição, benefício, poder público.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=661171"
        },
        {
            "id": 397357,
            "sigla": "PL",
            "numero": 3479,
            "ano": 2008,
            "ementa": "Altera o art. 8º da Lei nº 9.250, de 26 de dezembro de 1995, para incluir as despesas com aparelhos de audição entre as deduções permitidas para efeito da apuração da base de cálculo do Imposto de Renda das Pessoas Físicas.",
            "keywords": "Alteração, legislação tributária federal, imposto de renda, pessoa física, autorização, dedução, desconto, despesa, contribuinte, aquisição, aparelho auditivo, audição.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=569933"
        },
        {
            "id": 353957,
            "sigla": "PL",
            "numero": 1223,
            "ano": 2007,
            "ementa": "Altera dispositivos da Lei nº 6.494, de 7 de dezembro de 1977, a fim de dispor sobre a seleção de estagiários por órgãos públicos, bem como sobre a jornada no contrato de estágio. ",
            "keywords": "Alteração, Lei do Estágio, obrigatoriedade, Administração Pública, realização, processo seletivo, contratação, estagiário, fixação, limite máximo, carga horária, jornada de trabalho, estudante.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=465833"
        },
        {
            "id": 343917,
            "sigla": "PL",
            "numero": 321,
            "ano": 2007,
            "ementa": "Altera o caput do art. 62 da Lei nº 9.504, de 30 de setembro de 1997, para permitir o voto em separado, quando em serviço, aos agentes de segurança pública.",
            "keywords": "Alteração, Lei das Eleições, autorização, voto em separado, Policial, membros, Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícia Civil, Polícia Militar, Corpo de Bombeiros Militar,serviço.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=440067"
        },
        {
            "id": 348797,
            "sigla": "PEC",
            "numero": 49,
            "ano": 2007,
            "ementa": "Dá nova redação ao art. 6º da Constituição Federal.",
            "keywords": "Direitos e Garantias Fundamentais, inclusão, Direitos Sociais, cultura, atividade cultural.",
            "url": "http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=453245"
        }
    ],
    "totalProjetos": 15,
    "totalProposicoes": 98
  }
  ```
</details>
