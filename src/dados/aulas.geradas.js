// GERADO por ferramentas/aulas/gerar.mjs a partir de ferramentas/aulas/licoes/*.mjs. Não edite à mão.
// As demonstrações vêm da execução real do código (valores das variáveis a cada linha), e as
// soluções foram conferidas contra os testes oficiais dos monstros, em JavaScript e em Python.
export const AULAS_GERADAS = {
  "oi": {
    "conceito": "Mostrar um texto na tela: o seu primeiro programa",
    "porque": "Todo programa é uma lista de ordens que o computador executa uma por vez, de cima para baixo. A primeira ordem que quase todo mundo aprende é mostrar uma mensagem na tela. É o famoso 'Olá, mundo' da programação, e aqui ele vira 'Oi, Criador!'.",
    "analogia": "Programar é dar instruções a um robô muito obediente e muito literal: ele faz exatamente o que você escreve, nem mais nem menos. Se você mandar 'diga Oi, Criador!', ele diz exatamente isso, com a mesma vírgula e a mesma exclamação.",
    "ideias": [
      {
        "titulo": "Instrução",
        "texto": "Uma ordem para o computador. O programa é uma lista de instruções, executadas de cima para baixo."
      },
      {
        "titulo": "Texto entre aspas",
        "texto": "O que está entre aspas é um texto e aparece igualzinho na tela. As aspas em si não aparecem."
      },
      {
        "titulo": "Parênteses",
        "texto": "O comando recebe, entre parênteses, aquilo que deve mostrar."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "console.log",
            "explica": "É o comando que escreve algo na tela. Pense nele como 'mostrar'. O console é a tela de saída do programa, e log quer dizer registrar, mostrar."
          },
          {
            "trecho": "( )",
            "explica": "Os parênteses recebem aquilo que o comando deve mostrar. Tudo que estiver dentro deles é entregue ao comando."
          },
          {
            "trecho": "\"Oi, Criador!\"",
            "explica": "As aspas avisam o computador de que isso é um texto. Tudo entre elas aparece igualzinho na tela, com maiúsculas, vírgula e exclamação. As aspas em si não aparecem."
          },
          {
            "trecho": ";",
            "explica": "O ponto e vírgula encerra a instrução, como o ponto final de uma frase. Em JavaScript ele costuma ser opcional, mas é um bom hábito."
          }
        ],
        "demo": {
          "entrada": "o programa",
          "codigo": [
            "console.log(\"Oi, Criador!\");"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "saida": "",
              "fala": "O programa começa. A tela ainda está vazia."
            },
            {
              "linha": 0,
              "vars": [],
              "saida": "Oi, Criador!",
              "fala": "O Criador manda o computador mostrar o texto que está entre aspas. Pronto: ele apareceu na tela, igualzinho ao que foi escrito.",
              "dano": true
            },
            {
              "linha": 0,
              "vars": [],
              "saida": "Oi, Criador!",
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "console.log(___);   // o texto vai entre aspas\n"
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "print",
            "explica": "É o comando que escreve algo na tela. Pense nele como 'mostrar'. Em inglês, print quer dizer imprimir."
          },
          {
            "trecho": "( )",
            "explica": "Os parênteses recebem aquilo que o comando deve mostrar. Tudo que estiver dentro deles é entregue ao comando."
          },
          {
            "trecho": "\"Oi, Criador!\"",
            "explica": "As aspas avisam o computador de que isso é um texto. Tudo entre elas aparece igualzinho na tela, com maiúsculas, vírgula e exclamação. As aspas em si não aparecem."
          },
          {
            "trecho": "(sem ponto e vírgula)",
            "explica": "Em Python não se usa ponto e vírgula: o fim da linha já encerra a instrução."
          }
        ],
        "demo": {
          "entrada": "o programa",
          "codigo": [
            "print(\"Oi, Criador!\")"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "saida": "",
              "fala": "O programa começa. A tela ainda está vazia."
            },
            {
              "linha": 0,
              "vars": [],
              "saida": "Oi, Criador!",
              "fala": "O Criador manda o computador mostrar o texto que está entre aspas. Pronto: ele apareceu na tela, igualzinho ao que foi escrito.",
              "dano": true
            },
            {
              "linha": 0,
              "vars": [],
              "saida": "Oi, Criador!",
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "print(___)   # o texto vai entre aspas\n"
        }
      }
    }
  },
  "nome": {
    "conceito": "Variáveis: caixinhas com nome",
    "porque": "Se você escrever o nome direto dentro do texto, cada mudança exige reescrever tudo. Guardando o nome numa variável, você muda o valor num só lugar e a mensagem acompanha. Variáveis são a memória do programa.",
    "analogia": "Uma variável é como uma caixinha com uma etiqueta: a etiqueta é o nome da variável e o que está dentro é o valor. Sempre que você disser o nome da etiqueta, o computador abre a caixinha e usa o que está dentro.",
    "ideias": [
      {
        "titulo": "Variável",
        "texto": "Um espaço na memória com um nome, onde você guarda um valor para usar depois."
      },
      {
        "titulo": "Guardar com =",
        "texto": "O sinal de igual não compara: ele GUARDA o valor da direita na caixinha da esquerda."
      },
      {
        "titulo": "Juntar textos com +",
        "texto": "Com textos, o + cola um pedaço no outro. Espaços e pontuação fazem parte do texto."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const nome = \"Criador\";",
            "explica": "const cria uma variável cujo valor não vai mudar (se precisar mudar depois, use let). nome é o nome escolhido para a caixinha, e o = guarda nela o valor da direita."
          },
          {
            "trecho": "console.log(\"Oi, \" + nome + \"!\");",
            "explica": "O + junta textos. Repare no espaço depois da vírgula em \"Oi, \": sem ele sairia \"Oi,Criador!\". O nome da variável fica SEM aspas: com aspas, apareceria a palavra \"nome\" em vez do valor guardado."
          }
        ],
        "demo": {
          "entrada": "o programa",
          "codigo": [
            "const nome = \"Criador\";",
            "console.log(\"Oi, \" + nome + \"!\");"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "saida": "",
              "fala": "O programa começa. A tela está vazia e ainda não existe nenhuma variável."
            },
            {
              "linha": 0,
              "vars": [
                [
                  "nome",
                  "\"Criador\""
                ]
              ],
              "saida": "",
              "fala": "Cria a variável nome e guarda nela o texto \"Criador\". Agora o computador 'lembra' desse valor.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "nome",
                  "\"Criador\""
                ]
              ],
              "saida": "Oi, Criador!",
              "fala": "Monta a mensagem juntando três pedaços com +: \"Oi, \", o valor da variável nome (\"Criador\") e \"!\". O resultado aparece na tela.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "nome",
                  "\"Criador\""
                ]
              ],
              "saida": "Oi, Criador!",
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "const nome = ___;                       // qual texto guardar?\nconsole.log(\"Oi, \" + ___ + \"!\");        // qual variável usar?\n"
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "nome = \"Criador\"",
            "explica": "Em Python você cria a variável só escrevendo o nome, o = e o valor. Não precisa de const nem let, nem de ponto e vírgula. O = guarda na caixinha da esquerda o valor da direita."
          },
          {
            "trecho": "print(\"Oi, \" + nome + \"!\")",
            "explica": "O + junta textos. Repare no espaço depois da vírgula em \"Oi, \": sem ele sairia \"Oi,Criador!\". O nome da variável fica SEM aspas: com aspas, apareceria a palavra \"nome\" em vez do valor guardado."
          }
        ],
        "demo": {
          "entrada": "o programa",
          "codigo": [
            "nome = \"Criador\"",
            "print(\"Oi, \" + nome + \"!\")"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "saida": "",
              "fala": "O programa começa. A tela está vazia e ainda não existe nenhuma variável."
            },
            {
              "linha": 0,
              "vars": [
                [
                  "nome",
                  "'Criador'"
                ]
              ],
              "saida": "",
              "fala": "Cria a variável nome e guarda nela o texto 'Criador'. Agora o computador 'lembra' desse valor.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "nome",
                  "'Criador'"
                ]
              ],
              "saida": "Oi, Criador!",
              "fala": "Monta a mensagem juntando três pedaços com +: \"Oi, \", o valor da variável nome ('Criador') e \"!\". O resultado aparece na tela.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "nome",
                  "'Criador'"
                ]
              ],
              "saida": "Oi, Criador!",
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "nome = ___                       # qual texto guardar?\nprint(\"Oi, \" + ___ + \"!\")        # qual variável usar?\n"
        }
      }
    }
  },
  "contas": {
    "conceito": "Contas com números: + e *",
    "porque": "O computador é uma calculadora muito rápida. Números não vão entre aspas: sem aspas, o computador entende como conta, faz o cálculo e mostra o resultado. Com aspas, ele trataria tudo como texto e mostraria a conta escrita, sem calcular.",
    "analogia": "Dentro do comando de mostrar você pode escrever uma conta, e ele mostra a resposta, como uma calculadora que escreve o resultado na tela em vez de no visor.",
    "ideias": [
      {
        "titulo": "Operadores",
        "texto": "+ soma, - subtrai, * multiplica e / divide. É o * que multiplica; o x do teclado não funciona."
      },
      {
        "titulo": "Número x texto",
        "texto": "8 + 4 sem aspas é uma conta que dá 12. Com aspas, seria o texto 8 + 4."
      },
      {
        "titulo": "Uma linha por comando",
        "texto": "Cada comando de mostrar escreve numa linha nova da tela."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "console.log(8 + 4);",
            "explica": "Sem aspas, o computador entende como conta: calcula 8 + 4 e mostra 12. Se fosse \"8 + 4\" entre aspas, mostraria o texto 8 + 4."
          },
          {
            "trecho": "console.log(6 * 7);",
            "explica": "O asterisco * é a multiplicação. Cada console.log escreve numa linha nova, por isso o 42 aparece abaixo do 12."
          }
        ],
        "demo": {
          "entrada": "o programa",
          "codigo": [
            "console.log(8 + 4);",
            "console.log(6 * 7);"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "saida": "",
              "fala": "O programa começa. A tela ainda está vazia."
            },
            {
              "linha": 0,
              "vars": [],
              "saida": "12",
              "fala": "Calcula 8 + 4 e mostra o resultado na tela: 12.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [],
              "saida": "12\n42",
              "fala": "Calcula 6 * 7 (o * é a multiplicação) e mostra: 42. Cada comando escreve numa linha nova.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [],
              "saida": "12\n42",
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "console.log(___);   // some 8 com 4\nconsole.log(___);   // multiplique 6 por 7\n"
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "print(8 + 4)",
            "explica": "Sem aspas, o computador entende como conta: calcula 8 + 4 e mostra 12. Se fosse \"8 + 4\" entre aspas, mostraria o texto 8 + 4."
          },
          {
            "trecho": "print(6 * 7)",
            "explica": "O asterisco * é a multiplicação. Cada print escreve numa linha nova, por isso o 42 aparece abaixo do 12."
          }
        ],
        "demo": {
          "entrada": "o programa",
          "codigo": [
            "print(8 + 4)",
            "print(6 * 7)"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "saida": "",
              "fala": "O programa começa. A tela ainda está vazia."
            },
            {
              "linha": 0,
              "vars": [],
              "saida": "",
              "fala": "Calcula 8 + 4 e mostra o resultado na tela: 12.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [],
              "saida": "12\n42",
              "fala": "Calcula 6 * 7 (o * é a multiplicação) e mostra: 42. Cada comando escreve numa linha nova.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [],
              "saida": "12\n42",
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "print(___)   # some 8 com 4\nprint(___)   # multiplique 6 por 7\n"
        }
      }
    }
  },
  "dobro": {
    "conceito": "Funções: uma receita que recebe e devolve",
    "porque": "Em vez de repetir o mesmo cálculo toda hora, você dá um nome a ele e o chama quando precisar. Você entrega um valor (o parâmetro), a função faz o trabalho e devolve o resultado (o return). Quase tudo que você vai escrever daqui para frente é uma função.",
    "analogia": "É como uma máquina de suco: você coloca a fruta (a entrada), a máquina trabalha e devolve o suco (a saída). Não precisa saber como ela funciona por dentro toda vez, só usar.",
    "ideias": [
      {
        "titulo": "Parâmetro",
        "texto": "O valor que a função recebe. Aqui é n, e a cada chamada ele tem um valor diferente."
      },
      {
        "titulo": "Retorno",
        "texto": "O resultado que a função devolve com return. Quem chamou a função recebe esse valor de volta."
      },
      {
        "titulo": "Chamar a função",
        "texto": "Escrever o nome dela com o valor entre parênteses, como dobro(4). É assim que ela entra em ação."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "function dobro(n) {",
            "explica": "function cria uma função. dobro é o nome dela e (n) é o parâmetro: o valor que ela recebe quando é chamada. As chaves { } delimitam o corpo da função, o que ela faz."
          },
          {
            "trecho": "const resultado = n * 2;",
            "explica": "Faz a conta com o valor recebido e guarda numa variável. O * multiplica."
          },
          {
            "trecho": "return resultado;",
            "explica": "return devolve o resultado para quem chamou a função e encerra ela. Sem return, a função não devolve nada."
          }
        ],
        "demo": {
          "entrada": "dobro(4)",
          "codigo": [
            "function dobro(n) {",
            "  const resultado = n * 2;",
            "  return resultado;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "4"
                ]
              ],
              "fala": "O Criador chama dobro(4). A função recebe o 4 e guarda no parâmetro n."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "4"
                ],
                [
                  "resultado",
                  "8"
                ]
              ],
              "fala": "Calcula n * 2, ou seja, 4 vezes 2. O resultado, 8, fica guardado numa variável.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "4"
                ],
                [
                  "resultado",
                  "8"
                ]
              ],
              "fala": "return devolve 8 para quem chamou a função.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "4"
                ],
                [
                  "resultado",
                  "8"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function dobro(n) {\n  const resultado = n * ___;   // multiplica por quanto?\n  return ___;                  // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                4
              ],
              "out": 8
            },
            {
              "in": [
                0
              ],
              "out": 0
            },
            {
              "in": [
                -3
              ],
              "out": -6
            },
            {
              "in": [
                10
              ],
              "out": 20
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "def dobro(n):",
            "explica": "def cria uma função. dobro é o nome dela e (n) é o parâmetro: o valor que ela recebe quando é chamada. Os dois-pontos : abrem o corpo da função, que vem logo abaixo, recuado."
          },
          {
            "trecho": "    resultado = n * 2",
            "explica": "Com 4 espaços, a linha pertence à função. Faz a conta com o valor recebido e guarda numa variável. O * multiplica."
          },
          {
            "trecho": "    return resultado",
            "explica": "return devolve o resultado para quem chamou a função e encerra ela. Sem return, a função não devolve nada."
          }
        ],
        "demo": {
          "entrada": "dobro(4)",
          "codigo": [
            "def dobro(n):",
            "    resultado = n * 2",
            "    return resultado"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "4"
                ]
              ],
              "fala": "O Criador chama dobro(4). A função recebe o 4 e guarda no parâmetro n."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "4"
                ],
                [
                  "resultado",
                  "8"
                ]
              ],
              "fala": "Calcula n * 2, ou seja, 4 vezes 2. O resultado, 8, fica guardado numa variável.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "4"
                ],
                [
                  "resultado",
                  "8"
                ]
              ],
              "fala": "return devolve 8 para quem chamou a função.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "4"
                ],
                [
                  "resultado",
                  "8"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def dobro(n):\n    resultado = n * ___   # multiplica por quanto?\n    return ___            # o que devolver?\n",
          "testes": [
            {
              "in": [
                4
              ],
              "out": 8
            },
            {
              "in": [
                0
              ],
              "out": 0
            },
            {
              "in": [
                -3
              ],
              "out": -6
            },
            {
              "in": [
                10
              ],
              "out": 20
            }
          ]
        }
      }
    }
  },
  "portao": {
    "conceito": "Decisão e repetição juntas",
    "porque": "Aqui você usa tudo que aprendeu até agora. O laço visita cada número, o if decide se o número entra na soma e a variável total guarda o resultado. Nenhuma peça é nova: o desafio é encaixar uma dentro da outra.",
    "analogia": "É como um fiscal numa fila: ele passa por cada pessoa (o laço), confere se ela atende à regra, no caso ser par (o if), e só então anota (a soma).",
    "ideias": [
      {
        "titulo": "if dentro do laço",
        "texto": "A decisão é tomada de novo a cada volta, para cada número que o laço visita."
      },
      {
        "titulo": "Acumulador condicional",
        "texto": "O total só muda nas voltas em que a condição é verdadeira. Nas outras, ele continua igual."
      },
      {
        "titulo": "Blocos dentro de blocos",
        "texto": "Cada bloco dentro de outro fica mais para dentro (recuado). Esse recuo mostra o que pertence a quê."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let total = 0;",
            "explica": "A variável que vai acumulando a soma, começando em 0."
          },
          {
            "trecho": "for (let i = 1; i <= n; i++) {",
            "explica": "O laço visita os números de 1 até n: começa em 1 (let i = 1), continua enquanto i <= n e soma 1 a i a cada volta (i++)."
          },
          {
            "trecho": "if (i % 2 === 0) {",
            "explica": "O if fica dentro do for, então é avaliado a cada volta. i % 2 === 0 é a pergunta 'é par?': o resto da divisão por 2 é zero."
          },
          {
            "trecho": "total += i;",
            "explica": "Está dentro do if (duas chaves para dentro), então só soma quando o número é par."
          },
          {
            "trecho": "return total;",
            "explica": "Fora do laço: devolve o total depois que todos os números foram visitados."
          }
        ],
        "demo": {
          "entrada": "somaPares(5)",
          "codigo": [
            "function somaPares(n) {",
            "  let total = 0;",
            "  for (let i = 1; i <= n; i++) {",
            "    if (i % 2 === 0) {",
            "      total += i;",
            "    }",
            "  }",
            "  return total;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "5"
                ]
              ],
              "fala": "O Criador chama somaPares(5). Só os números pares de 1 até 5 entram na soma: o 2 e o 4."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ]
              ],
              "fala": "Cria o total começando em 0."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "1"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 1."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "1"
                ]
              ],
              "fala": "1 dividido por 2 sobra 0? Não, 1 é ímpar, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "2"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 2."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "2"
                ]
              ],
              "fala": "2 dividido por 2 sobra 0? Sim, então 2 é par e o programa entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "2"
                ]
              ],
              "fala": "Soma o par ao total: agora total vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "3 dividido por 2 sobra 0? Não, 3 é ímpar, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 4."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "4 dividido por 2 sobra 0? Sim, então 4 é par e o programa entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "Soma o par ao total: agora total vale 6.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 5."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "5 dividido por 2 sobra 0? Não, 5 é ímpar, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ]
              ],
              "fala": "Acabaram os números, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ]
              ],
              "fala": "return devolve o total: 6, que é 2 + 4."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1700
        },
        "guiado": {
          "starter": "function somaPares(n) {\n  let total = ___;                      // começa em quanto?\n  for (let i = 1; i <= ___; i++) {      // até onde vai o laço?\n    if (i % ___ === 0) {                // dividido por quanto, sem sobra, é par?\n      total += ___;                     // o que somar ao total?\n    }\n  }\n  return ___;                           // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                6
              ],
              "out": 12
            },
            {
              "in": [
                10
              ],
              "out": 30
            },
            {
              "in": [
                1
              ],
              "out": 0
            },
            {
              "in": [
                7
              ],
              "out": 12
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    total = 0",
            "explica": "A variável que vai acumulando a soma, começando em 0."
          },
          {
            "trecho": "    for i in range(1, n + 1):",
            "explica": "range(1, n + 1) gera os números de 1 até n (o último, n + 1, não entra). A cada volta, i recebe o próximo."
          },
          {
            "trecho": "        if i % 2 == 0:",
            "explica": "O if fica dentro do for (8 espaços), então é avaliado a cada volta. i % 2 == 0 é a pergunta 'é par?': o resto da divisão por 2 é zero."
          },
          {
            "trecho": "            total += i",
            "explica": "Com 12 espaços, está dentro do if, que está dentro do for. Só soma quando o número é par."
          },
          {
            "trecho": "    return total",
            "explica": "Só 4 espaços: fora do laço. Devolve o total depois que todos os números foram visitados."
          }
        ],
        "demo": {
          "entrada": "somaPares(5)",
          "codigo": [
            "def somaPares(n):",
            "    total = 0",
            "    for i in range(1, n + 1):",
            "        if i % 2 == 0:",
            "            total += i",
            "    return total"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "5"
                ]
              ],
              "fala": "O Criador chama somaPares(5). Só os números pares de 1 até 5 entram na soma: o 2 e o 4."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ]
              ],
              "fala": "Cria o total começando em 0."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "1"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 1."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "1"
                ]
              ],
              "fala": "1 dividido por 2 sobra 0? Não, 1 é ímpar, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "2"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 2."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "i",
                  "2"
                ]
              ],
              "fala": "2 dividido por 2 sobra 0? Sim, então 2 é par e o programa entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "2"
                ]
              ],
              "fala": "Soma o par ao total: agora total vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "3 dividido por 2 sobra 0? Não, 3 é ímpar, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 4."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "2"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "4 dividido por 2 sobra 0? Sim, então 4 é par e o programa entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "Soma o par ao total: agora total vale 6.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "O laço pega o próximo número: i = 5."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "5 dividido por 2 sobra 0? Não, 5 é ímpar, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "Acabaram os números, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "return devolve o total: 6, que é 2 + 4."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "total",
                  "6"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1700
        },
        "guiado": {
          "starter": "def somaPares(n):\n    total = ___                         # começa em quanto?\n    for i in range(1, ___ + 1):         # até onde vai o laço?\n        if i % ___ == 0:                # dividido por quanto, sem sobra, é par?\n            total += ___                # o que somar ao total?\n    return ___                          # o que devolver?\n",
          "testes": [
            {
              "in": [
                6
              ],
              "out": 12
            },
            {
              "in": [
                10
              ],
              "out": 30
            },
            {
              "in": [
                1
              ],
              "out": 0
            },
            {
              "in": [
                7
              ],
              "out": 12
            }
          ]
        }
      }
    }
  },
  "par": {
    "conceito": "Resto da divisão e decisão com if",
    "porque": "Muitas vezes o programa precisa escolher um caminho: se algo é verdade, faz uma coisa; senão, faz outra. Para descobrir se um número é par, usamos o resto da divisão por 2: se não sobra nada, o número é par.",
    "analogia": "É como separar meias em duplas. Se todas formam par e nenhuma sobra, a quantidade é par. Se sobra uma meia solta, é ímpar. O resto da divisão é exatamente essa meia que sobrou.",
    "ideias": [
      {
        "titulo": "Resto (%)",
        "texto": "O operador % devolve o que sobra de uma divisão. 7 % 2 dá 1, porque 7 = 3 × 2 + 1."
      },
      {
        "titulo": "Condição",
        "texto": "Uma pergunta de sim ou não. O resultado é sempre verdadeiro (true) ou falso (false)."
      },
      {
        "titulo": "if (se)",
        "texto": "Executa um bloco de código somente quando a condição é verdadeira. Se for falsa, o bloco é pulado."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const resto = n % 2;",
            "explica": "const cria uma variável que não vai mudar depois. O % devolve o resto da divisão (7 % 2 dá 1). O ponto e vírgula ; encerra a instrução."
          },
          {
            "trecho": "if (resto === 0) {",
            "explica": "if (se) executa o bloco entre chaves só quando a condição entre parênteses for verdadeira. === compara se os dois lados são iguais. Um = sozinho serve para guardar valor, não para comparar."
          },
          {
            "trecho": "return true;",
            "explica": "return devolve o resultado e encerra a função na hora. true e false são os valores lógicos (verdadeiro e falso), escritos em minúsculas."
          },
          {
            "trecho": "return false;",
            "explica": "Se o if não rodou, a função segue em frente e chega aqui. Esta linha está fora do bloco do if."
          }
        ],
        "demo": {
          "entrada": "ehPar(7)",
          "codigo": [
            "function ehPar(n) {",
            "  const resto = n % 2;",
            "  if (resto === 0) {",
            "    return true;",
            "  }",
            "  return false;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "7"
                ]
              ],
              "fala": "O Criador chama ehPar(7). A função recebe o 7 e guarda na variável n."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "n % 2 é o resto da divisão de 7 por 2. Sobrou 1."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "O resto (1) é igual a 0? Não. A condição é falsa, então o programa pula o bloco do if."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "Como o if não rodou, a função continua até este return e devolve false: o número é ímpar.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function ehPar(n) {\n  const resto = n % ___;      // divide por quanto?\n  if (resto === ___) {        // quanto sobra quando é par?\n    return ___;               // então devolve o quê?\n  }\n  return ___;                 // senão, devolve o quê?\n}\n",
          "testes": [
            {
              "in": [
                4
              ],
              "out": true
            },
            {
              "in": [
                7
              ],
              "out": false
            },
            {
              "in": [
                0
              ],
              "out": true
            },
            {
              "in": [
                -3
              ],
              "out": false
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    resto = n % 2",
            "explica": "Cria a variável resto guardando o resto da divisão (7 % 2 dá 1). Em Python não precisa de const nem de ponto e vírgula."
          },
          {
            "trecho": "    if resto == 0:",
            "explica": "if (se) executa o bloco recuado só se a condição for verdadeira. == compara se os dois lados são iguais (um = sozinho guarda valor). Os dois-pontos : abrem o bloco."
          },
          {
            "trecho": "        return True",
            "explica": "Com 8 espaços, esta linha pertence ao bloco do if. return devolve o resultado e encerra a função. Em Python, True e False começam com letra maiúscula."
          },
          {
            "trecho": "    return False",
            "explica": "Com apenas 4 espaços, esta linha está fora do if: só roda quando o bloco do if não rodou."
          }
        ],
        "demo": {
          "entrada": "ehPar(7)",
          "codigo": [
            "def ehPar(n):",
            "    resto = n % 2",
            "    if resto == 0:",
            "        return True",
            "    return False"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "7"
                ]
              ],
              "fala": "O Criador chama ehPar(7). A função recebe o 7 e guarda na variável n."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "n % 2 é o resto da divisão de 7 por 2. Sobrou 1."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "O resto (1) é igual a 0? Não. A condição é falsa, então o programa pula o bloco do if."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "Como o if não rodou, a função continua até este return e devolve False: o número é ímpar.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "7"
                ],
                [
                  "resto",
                  "1"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def ehPar(n):\n    resto = n % ___        # divide por quanto?\n    if resto == ___:       # quanto sobra quando é par?\n        return ___         # então devolve o quê?\n    return ___             # senão, devolve o quê?\n",
          "testes": [
            {
              "in": [
                4
              ],
              "out": true
            },
            {
              "in": [
                7
              ],
              "out": false
            },
            {
              "in": [
                0
              ],
              "out": true
            },
            {
              "in": [
                -3
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "exame-e": {
    "conceito": "Número como texto e o cuidado com o sinal",
    "porque": "Um número não se deixa ler de trás para frente, mas um texto sim. Então o truque é trocar de tipo: transformar o número em texto, inverter o texto e voltar para número. O sinal negativo atrapalha, por isso ele é guardado à parte.",
    "analogia": "É como ler um cartaz de trás para frente: você primeiro tira a moldura (o sinal), lê as letras do fim para o começo e depois recoloca a moldura no lugar.",
    "ideias": [
      {
        "titulo": "Tipos",
        "texto": "Número e texto são coisas diferentes. Dá para converter de um para o outro, e cada tipo tem as suas ferramentas."
      },
      {
        "titulo": "Sinal à parte",
        "texto": "Guardamos se o número é negativo antes de mexer nos dígitos, e recolocamos o sinal no final."
      },
      {
        "titulo": "Zeros à esquerda",
        "texto": "Ao voltar para número, os zeros do começo somem sozinhos: 021 vira 21."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const sinal = n < 0 ? -1 : 1;",
            "explica": "O operador ternário ? : escolhe entre dois valores: se n < 0 for verdadeiro, o resultado é -1; senão, é 1."
          },
          {
            "trecho": "const texto = String(Math.abs(n));",
            "explica": "Math.abs(n) devolve o valor absoluto (sem o sinal). String(...) transforma o número em texto, uma sequência de caracteres que dá para percorrer."
          },
          {
            "trecho": "const invertido = texto.split(\"\").reverse().join(\"\");",
            "explica": "Três ferramentas em cadeia, e a saída de cada uma entra na seguinte: split(\"\") separa o texto numa lista de caracteres; reverse() inverte a lista; join(\"\") junta tudo de volta num texto."
          },
          {
            "trecho": "return sinal * Number(invertido);",
            "explica": "Number(...) transforma o texto de volta em número (Number(\"021\") dá 21, sem o zero). Multiplicar pelo sinal recoloca o negativo, se houver."
          }
        ],
        "demo": {
          "entrada": "inverteNumero(-120)",
          "codigo": [
            "function inverteNumero(n) {",
            "  const sinal = n < 0 ? -1 : 1;",
            "  const texto = String(Math.abs(n));",
            "  const invertido = texto.split(\"\").reverse().join(\"\");",
            "  return sinal * Number(invertido);",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "-120"
                ]
              ],
              "fala": "O Criador chama inverteNumero(-120). O número é negativo e termina em zero: dois cuidados."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ]
              ],
              "fala": "Antes de mexer nos dígitos, ele guarda o sinal: -1 (-1 se o número for negativo, 1 se for positivo)."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "\"120\""
                ]
              ],
              "fala": "Tira o sinal do número e transforma em texto: \"120\". Agora dá para ler de trás para frente."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "\"120\""
                ],
                [
                  "invertido",
                  "\"021\""
                ]
              ],
              "fala": "Lê o texto de trás para frente: \"021\". Os zeros que foram para a frente somem no próximo passo.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "\"120\""
                ],
                [
                  "invertido",
                  "\"021\""
                ]
              ],
              "fala": "Converte \"021\" de volta em número (os zeros da frente somem) e multiplica pelo sinal -1. O resultado é -21.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "\"120\""
                ],
                [
                  "invertido",
                  "\"021\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function inverteNumero(n) {\n  const sinal = n < 0 ? ___ : 1;                         // qual o sinal quando é negativo?\n  const texto = String(Math.abs(n));\n  const invertido = texto.split(\"\").___().join(\"\");      // qual método inverte a lista?\n  return sinal * Number(___);                            // o que converter de volta?\n}\n",
          "testes": [
            {
              "in": [
                123
              ],
              "out": 321
            },
            {
              "in": [
                -45
              ],
              "out": -54
            },
            {
              "in": [
                120
              ],
              "out": 21
            },
            {
              "in": [
                5
              ],
              "out": 5
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    sinal = -1 if n < 0 else 1",
            "explica": "Expressão condicional: o valor é -1 se n < 0 for verdadeiro, senão é 1. Lê-se quase como português."
          },
          {
            "trecho": "    texto = str(abs(n))",
            "explica": "abs(n) devolve o valor absoluto (sem o sinal) e str(...) transforma o número em texto, uma sequência de caracteres que dá para percorrer."
          },
          {
            "trecho": "    invertido = texto[::-1]",
            "explica": "O fatiamento [início:fim:passo] com passo -1 percorre o texto de trás para frente. Sem início nem fim, ele pega o texto inteiro."
          },
          {
            "trecho": "    return sinal * int(invertido)",
            "explica": "int(...) transforma o texto de volta em número inteiro (int('021') dá 21, sem o zero). Multiplicar pelo sinal recoloca o negativo, se houver."
          }
        ],
        "demo": {
          "entrada": "inverteNumero(-120)",
          "codigo": [
            "def inverteNumero(n):",
            "    sinal = -1 if n < 0 else 1",
            "    texto = str(abs(n))",
            "    invertido = texto[::-1]",
            "    return sinal * int(invertido)"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "-120"
                ]
              ],
              "fala": "O Criador chama inverteNumero(-120). O número é negativo e termina em zero: dois cuidados."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ]
              ],
              "fala": "Antes de mexer nos dígitos, ele guarda o sinal: -1 (-1 se o número for negativo, 1 se for positivo)."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "'120'"
                ]
              ],
              "fala": "Tira o sinal do número e transforma em texto: '120'. Agora dá para ler de trás para frente."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "'120'"
                ],
                [
                  "invertido",
                  "'021'"
                ]
              ],
              "fala": "Lê o texto de trás para frente: '021'. Os zeros que foram para a frente somem no próximo passo.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "'120'"
                ],
                [
                  "invertido",
                  "'021'"
                ]
              ],
              "fala": "Converte '021' de volta em número (os zeros da frente somem) e multiplica pelo sinal -1. O resultado é -21.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "-120"
                ],
                [
                  "sinal",
                  "-1"
                ],
                [
                  "texto",
                  "'120'"
                ],
                [
                  "invertido",
                  "'021'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def inverteNumero(n):\n    sinal = ___ if n < 0 else 1       # qual o sinal quando é negativo?\n    texto = str(abs(n))\n    invertido = texto[::___]          # qual passo percorre de trás para frente?\n    return sinal * int(___)           # o que converter de volta?\n",
          "testes": [
            {
              "in": [
                123
              ],
              "out": 321
            },
            {
              "in": [
                -45
              ],
              "out": -54
            },
            {
              "in": [
                120
              ],
              "out": 21
            },
            {
              "in": [
                5
              ],
              "out": 5
            }
          ]
        }
      }
    }
  },
  "maior": {
    "conceito": "Percorrer uma lista guardando o campeão",
    "porque": "Listas guardam vários valores juntos. Para achar o maior, o computador não consegue 'bater o olho': ele olha um item por vez. A solução é guardar o maior visto até agora e trocá-lo quando aparece um maior.",
    "analogia": "É como um campeonato de reis da colina: o primeiro competidor começa no topo. Cada novo competidor desafia o campeão atual; se for maior, toma o lugar. No fim, quem está no topo é o maior de todos.",
    "ideias": [
      {
        "titulo": "Lista",
        "texto": "Vários valores em ordem, cada um com uma posição. A primeira posição é a 0, e não a 1."
      },
      {
        "titulo": "Laço sobre lista",
        "texto": "Repete o bloco uma vez para cada item da lista, entregando o item atual numa variável."
      },
      {
        "titulo": "Campeão",
        "texto": "Uma variável que guarda o melhor valor encontrado até agora e é atualizada quando surge um melhor."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let campeao = lista[0];",
            "explica": "lista[0] pega o item na posição 0, a primeira (a contagem começa no zero). let cria uma variável que vai mudar ao longo do programa."
          },
          {
            "trecho": "for (const numero of lista) {",
            "explica": "for...of percorre a lista: a cada volta, numero recebe o próximo item. As chaves { } marcam o corpo do laço, o que se repete."
          },
          {
            "trecho": "if (numero > campeao) {",
            "explica": "if executa o bloco só quando a condição for verdadeira. O sinal > pergunta se o da esquerda é maior que o da direita."
          },
          {
            "trecho": "campeao = numero;",
            "explica": "Troca o campeão: guarda o novo valor na variável que já existe. Sem let, porque ela já foi criada."
          },
          {
            "trecho": "return campeao;",
            "explica": "Está depois das chaves do laço, então só roda quando o laço termina: devolve o campeão."
          }
        ],
        "demo": {
          "entrada": "maior([3, 9, 2])",
          "codigo": [
            "function maior(lista) {",
            "  let campeao = lista[0];",
            "  for (const numero of lista) {",
            "    if (numero > campeao) {",
            "      campeao = numero;",
            "    }",
            "  }",
            "  return campeao;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ]
              ],
              "fala": "O Criador chama maior([3, 9, 2]). A lista inteira fica guardada na variável lista."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ]
              ],
              "fala": "Elege o primeiro item da lista como campeão por enquanto: campeao = 3."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "O laço pega o próximo item da lista: numero = 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "3 é maior que o campeão (3)? Não, o campeão continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "9"
                ]
              ],
              "fala": "O laço pega o próximo item da lista: numero = 9."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "9"
                ]
              ],
              "fala": "9 é maior que o campeão (3)? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "9"
                ]
              ],
              "fala": "O novo campeão é 9: o valor foi trocado na mesma variável.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "O laço pega o próximo item da lista: numero = 2."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "2 é maior que o campeão (9)? Não, o campeão continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ]
              ],
              "fala": "Acabaram os itens da lista, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ]
              ],
              "fala": "return devolve o campeão: 9."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function maior(lista) {\n  let campeao = lista[___];        // qual posição é a primeira?\n  for (const numero of ___) {      // o que percorrer?\n    if (numero ___ campeao) {      // quando o campeão é trocado?\n      campeao = ___;               // quem vira o novo campeão?\n    }\n  }\n  return campeao;\n}\n",
          "testes": [
            {
              "in": [
                [
                  3,
                  9,
                  2
                ]
              ],
              "out": 9
            },
            {
              "in": [
                [
                  5
                ]
              ],
              "out": 5
            },
            {
              "in": [
                [
                  -4,
                  -1,
                  -9
                ]
              ],
              "out": -1
            },
            {
              "in": [
                [
                  1,
                  2,
                  3,
                  4
                ]
              ],
              "out": 4
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    campeao = lista[0]",
            "explica": "lista[0] pega o item na posição 0, a primeira (a contagem começa no zero). Cria a variável campeao com esse valor."
          },
          {
            "trecho": "    for numero in lista:",
            "explica": "for...in percorre a lista: a cada volta, numero recebe o próximo item. Os dois-pontos : abrem o corpo do laço, que fica recuado."
          },
          {
            "trecho": "        if numero > campeao:",
            "explica": "if executa o bloco recuado só quando a condição for verdadeira. O sinal > pergunta se o da esquerda é maior. Já está dentro do for (8 espaços)."
          },
          {
            "trecho": "            campeao = numero",
            "explica": "Com 12 espaços, está dentro do if, que está dentro do for. Troca o campeão guardando o novo valor."
          },
          {
            "trecho": "    return campeao",
            "explica": "Só 4 espaços: está fora do for. Roda depois que o laço termina e devolve o campeão."
          }
        ],
        "demo": {
          "entrada": "maior([3, 9, 2])",
          "codigo": [
            "def maior(lista):",
            "    campeao = lista[0]",
            "    for numero in lista:",
            "        if numero > campeao:",
            "            campeao = numero",
            "    return campeao"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ]
              ],
              "fala": "O Criador chama maior([3, 9, 2]). A lista inteira fica guardada na variável lista."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ]
              ],
              "fala": "Elege o primeiro item da lista como campeão por enquanto: campeao = 3."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "O laço pega o próximo item da lista: numero = 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "3 é maior que o campeão (3)? Não, o campeão continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "9"
                ]
              ],
              "fala": "O laço pega o próximo item da lista: numero = 9."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "3"
                ],
                [
                  "numero",
                  "9"
                ]
              ],
              "fala": "9 é maior que o campeão (3)? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "9"
                ]
              ],
              "fala": "O novo campeão é 9: o valor foi trocado na mesma variável.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "O laço pega o próximo item da lista: numero = 2."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "2 é maior que o campeão (9)? Não, o campeão continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "Acabaram os itens da lista, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "return devolve o campeão: 9."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "lista",
                  "[3, 9, 2]"
                ],
                [
                  "campeao",
                  "9"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def maior(lista):\n    campeao = lista[___]        # qual posição é a primeira?\n    for numero in ___:          # o que percorrer?\n        if numero ___ campeao:  # quando o campeão é trocado?\n            campeao = ___       # quem vira o novo campeão?\n    return campeao\n",
          "testes": [
            {
              "in": [
                [
                  3,
                  9,
                  2
                ]
              ],
              "out": 9
            },
            {
              "in": [
                [
                  5
                ]
              ],
              "out": 5
            },
            {
              "in": [
                [
                  -4,
                  -1,
                  -9
                ]
              ],
              "out": -1
            },
            {
              "in": [
                [
                  1,
                  2,
                  3,
                  4
                ]
              ],
              "out": 4
            }
          ]
        }
      }
    }
  },
  "vogais": {
    "conceito": "Percorrer um texto e contar o que importa",
    "porque": "Um texto é uma sequência de letras, e dá para percorrer uma por uma, como numa lista. Para contar só as vogais, a gente passa por todas as letras e, a cada uma, pergunta: 'você é uma vogal?'. Se for, soma um no contador.",
    "analogia": "É como passar o dedo por uma frase fazendo um risquinho no caderno cada vez que aparece uma vogal. No fim, o número de risquinhos é a resposta.",
    "ideias": [
      {
        "titulo": "Texto percorrível",
        "texto": "Um texto funciona como uma lista de caracteres: o laço entrega uma letra por vez."
      },
      {
        "titulo": "Pertencer a um conjunto",
        "texto": "Perguntar se um valor está dentro de um grupo (as vogais). A resposta é verdadeiro ou falso."
      },
      {
        "titulo": "Contador",
        "texto": "Uma variável que começa em 0 e ganha +1 cada vez que o evento que interessa acontece."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let contador = 0;",
            "explica": "let cria a variável contador, que vai mudar, começando em 0. O ponto e vírgula encerra a instrução."
          },
          {
            "trecho": "for (const letra of texto) {",
            "explica": "O mesmo for...of das listas funciona com texto: a cada volta, letra recebe o próximo caractere."
          },
          {
            "trecho": "if (\"aeiou\".includes(letra)) {",
            "explica": "includes pergunta se o texto \"aeiou\" contém a letra e responde true ou false. O if usa essa resposta para decidir se entra no bloco."
          },
          {
            "trecho": "contador += 1;",
            "explica": "+= soma ao valor que já estava na variável. É o mesmo que contador = contador + 1."
          },
          {
            "trecho": "return contador;",
            "explica": "Fora das chaves do for: só roda quando o laço termina."
          }
        ],
        "demo": {
          "entrada": "contaVogais(\"casa\")",
          "codigo": [
            "function contaVogais(texto) {",
            "  let contador = 0;",
            "  for (const letra of texto) {",
            "    if (\"aeiou\".includes(letra)) {",
            "      contador += 1;",
            "    }",
            "  }",
            "  return contador;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ]
              ],
              "fala": "O Criador chama contaVogais(\"casa\"). O texto fica guardado na variável texto."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "0"
                ]
              ],
              "fala": "Cria o contador começando em 0: ainda não contou nenhuma vogal."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "\"c\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"c\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "\"c\""
                ]
              ],
              "fala": "\"c\" está entre as vogais? Não, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"a\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "\"a\" está entre as vogais? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "contador += 1 soma um ao contador, que agora vale 1.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "\"s\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"s\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "\"s\""
                ]
              ],
              "fala": "\"s\" está entre as vogais? Não, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"a\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "\"a\" está entre as vogais? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "contador += 1 soma um ao contador, que agora vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "2"
                ]
              ],
              "fala": "Acabaram as letras do texto, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "2"
                ]
              ],
              "fala": "return devolve o contador: 2 vogais."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "texto",
                  "\"casa\""
                ],
                [
                  "contador",
                  "2"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function contaVogais(texto) {\n  let contador = ___;                  // começa em quanto?\n  for (const letra of ___) {           // o que percorrer?\n    if (\"aeiou\".___(letra)) {          // qual método pergunta se contém?\n      contador += ___;                 // quanto somar?\n    }\n  }\n  return contador;\n}\n",
          "testes": [
            {
              "in": [
                "banana"
              ],
              "out": 3
            },
            {
              "in": [
                "xyz"
              ],
              "out": 0
            },
            {
              "in": [
                "aeiou"
              ],
              "out": 5
            },
            {
              "in": [
                ""
              ],
              "out": 0
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    contador = 0",
            "explica": "Cria a variável contador começando em 0. Sem ponto e vírgula."
          },
          {
            "trecho": "    for letra in texto:",
            "explica": "O mesmo for...in das listas funciona com texto: a cada volta, letra recebe o próximo caractere. Os dois-pontos abrem o corpo."
          },
          {
            "trecho": "        if letra in \"aeiou\":",
            "explica": "in pergunta se a letra está dentro do texto \"aeiou\" e responde True ou False. O if usa essa resposta para decidir se entra no bloco."
          },
          {
            "trecho": "            contador += 1",
            "explica": "+= soma ao valor que já estava na variável. É o mesmo que contador = contador + 1. Está dentro do if (12 espaços)."
          },
          {
            "trecho": "    return contador",
            "explica": "Só 4 espaços: fora do for. Roda quando o laço termina."
          }
        ],
        "demo": {
          "entrada": "contaVogais('casa')",
          "codigo": [
            "def contaVogais(texto):",
            "    contador = 0",
            "    for letra in texto:",
            "        if letra in \"aeiou\":",
            "            contador += 1",
            "    return contador"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ]
              ],
              "fala": "O Criador chama contaVogais(\"casa\"). O texto fica guardado na variável texto."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "0"
                ]
              ],
              "fala": "Cria o contador começando em 0: ainda não contou nenhuma vogal."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 'c'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "'c' está entre as vogais? Não, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 'a'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "'a' está entre as vogais? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "contador += 1 soma um ao contador, que agora vale 1.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "'s'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 's'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "'s'"
                ]
              ],
              "fala": "'s' está entre as vogais? Não, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 'a'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "'a' está entre as vogais? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "contador += 1 soma um ao contador, que agora vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Acabaram as letras do texto, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "return devolve o contador: 2 vogais."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "'casa'"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def contaVogais(texto):\n    contador = ___                  # começa em quanto?\n    for letra in ___:               # o que percorrer?\n        if letra ___ \"aeiou\":       # qual palavra pergunta se está dentro?\n            contador += ___         # quanto somar?\n    return contador\n",
          "testes": [
            {
              "in": [
                "banana"
              ],
              "out": 3
            },
            {
              "in": [
                "xyz"
              ],
              "out": 0
            },
            {
              "in": [
                "aeiou"
              ],
              "out": 5
            },
            {
              "in": [
                ""
              ],
              "out": 0
            }
          ]
        }
      }
    }
  },
  "exame-d": {
    "conceito": "Laço while e eficiência: testar só até a raiz",
    "porque": "Um número primo só se divide por 1 e por ele mesmo. Para descobrir, testamos se algum divisor o divide sem sobra. Só que não precisamos testar todos: basta ir até a raiz quadrada, porque depois dela os divisores aparecem repetidos de trás para frente.",
    "analogia": "É como procurar duas pessoas que, multiplicadas, formam um número: se uma delas for maior que a raiz, a outra obrigatoriamente é menor, e a gente já teria encontrado essa. Por isso olhar só até a raiz é suficiente.",
    "ideias": [
      {
        "titulo": "while (enquanto)",
        "texto": "Repete um bloco enquanto uma condição for verdadeira. Ideal quando você não sabe quantas voltas serão necessárias."
      },
      {
        "titulo": "Sair mais cedo",
        "texto": "Um return dentro do laço encerra a função na hora. Achou um divisor? Já sabe que não é primo."
      },
      {
        "titulo": "Atualizar o contador",
        "texto": "No while, é você quem avança o divisor. Esquecer isso cria um laço infinito."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "if (n < 2) {",
            "explica": "Números menores que 2 (0, 1 e negativos) não são primos. O bloco devolve false e a função termina aqui."
          },
          {
            "trecho": "let divisor = 2;",
            "explica": "O primeiro divisor a testar é o 2, porque todo número é divisível por 1 e o 1 não ajuda a descobrir nada."
          },
          {
            "trecho": "while (divisor * divisor <= n) {",
            "explica": "while repete o bloco enquanto a condição for verdadeira. Diferente do for, você mesmo avança a contagem dentro do bloco. divisor * divisor <= n é o mesmo que testar até a raiz quadrada de n."
          },
          {
            "trecho": "if (n % divisor === 0) {",
            "explica": "Se o resto da divisão é 0, divisor divide n sem sobra, então n não é primo. O return false dentro do laço encerra a função na hora."
          },
          {
            "trecho": "divisor += 1;",
            "explica": "Avança para o próximo divisor. Sem esta linha, divisor nunca mudaria e o while não terminaria jamais (laço infinito)."
          },
          {
            "trecho": "return true;",
            "explica": "Fica fora do while: só roda quando o laço terminou sem encontrar nenhum divisor."
          }
        ],
        "demo": {
          "entrada": "ehPrimo(11)",
          "codigo": [
            "function ehPrimo(n) {",
            "  if (n < 2) {",
            "    return false;",
            "  }",
            "  let divisor = 2;",
            "  while (divisor * divisor <= n) {",
            "    if (n % divisor === 0) {",
            "      return false;",
            "    }",
            "    divisor += 1;",
            "  }",
            "  return true;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "11"
                ]
              ],
              "fala": "O Criador chama ehPrimo(11). Um primo só se divide por 1 e por ele mesmo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "11"
                ]
              ],
              "fala": "11 é menor que 2? Não, então ainda pode ser primo e o programa segue para o teste."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "2"
                ]
              ],
              "fala": "Começa testando o divisor 2. Se algum divisor encontrar o número sem sobra, ele não é primo."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "2"
                ]
              ],
              "fala": "O while continua enquanto divisor × divisor <= n. 2 × 2 <= 11? Sim, então testa mais um divisor."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "2"
                ]
              ],
              "fala": "11 dividido por 2 sobra 0? Não, esse divisor não divide 11."
            },
            {
              "linha": 9,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "3"
                ]
              ],
              "fala": "Passa para o próximo divisor: 3.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "3"
                ]
              ],
              "fala": "O while continua enquanto divisor × divisor <= n. 3 × 3 <= 11? Sim, então testa mais um divisor."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "3"
                ]
              ],
              "fala": "11 dividido por 3 sobra 0? Não, esse divisor não divide 11."
            },
            {
              "linha": 9,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "Passa para o próximo divisor: 4.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "4 × 4 <= 11? Não. Já passamos da raiz quadrada de 11, então não é preciso testar mais nenhum divisor."
            },
            {
              "linha": 11,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "Nenhum divisor dividiu 11 sem sobra, então return devolve true: ele é primo.",
              "dano": true
            },
            {
              "linha": 11,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 2200
        },
        "guiado": {
          "starter": "function ehPrimo(n) {\n  if (n < ___) {                        // menores que quanto não são primos?\n    return false;\n  }\n  let divisor = ___;                    // primeiro divisor a testar\n  while (divisor * divisor <= ___) {    // até quando testar?\n    if (n % divisor === ___) {          // quanto sobra quando divide?\n      return false;\n    }\n    divisor += ___;                     // quanto avançar?\n  }\n  return true;\n}\n",
          "testes": [
            {
              "in": [
                2
              ],
              "out": true
            },
            {
              "in": [
                9
              ],
              "out": false
            },
            {
              "in": [
                13
              ],
              "out": true
            },
            {
              "in": [
                1
              ],
              "out": false
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    if n < 2:",
            "explica": "Números menores que 2 (0, 1 e negativos) não são primos. O bloco recuado devolve False e a função termina aqui."
          },
          {
            "trecho": "    divisor = 2",
            "explica": "O primeiro divisor a testar é o 2, porque todo número é divisível por 1 e o 1 não ajuda a descobrir nada."
          },
          {
            "trecho": "    while divisor * divisor <= n:",
            "explica": "while repete o bloco recuado enquanto a condição for verdadeira. Diferente do for, você mesmo avança a contagem dentro do bloco. divisor * divisor <= n é o mesmo que testar até a raiz quadrada de n."
          },
          {
            "trecho": "        if n % divisor == 0:",
            "explica": "Se o resto da divisão é 0, divisor divide n sem sobra, então n não é primo. O return False dentro do laço encerra a função na hora."
          },
          {
            "trecho": "        divisor += 1",
            "explica": "Está no mesmo nível do if (8 espaços), então roda em toda volta. Avança para o próximo divisor. Sem esta linha o while nunca terminaria."
          },
          {
            "trecho": "    return True",
            "explica": "Só 4 espaços: fora do while. Só roda quando o laço terminou sem encontrar divisor."
          }
        ],
        "demo": {
          "entrada": "ehPrimo(11)",
          "codigo": [
            "def ehPrimo(n):",
            "    if n < 2:",
            "        return False",
            "    divisor = 2",
            "    while divisor * divisor <= n:",
            "        if n % divisor == 0:",
            "            return False",
            "        divisor += 1",
            "    return True"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "11"
                ]
              ],
              "fala": "O Criador chama ehPrimo(11). Um primo só se divide por 1 e por ele mesmo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "11"
                ]
              ],
              "fala": "11 é menor que 2? Não, então ainda pode ser primo e o programa segue para o teste."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "2"
                ]
              ],
              "fala": "Começa testando o divisor 2. Se algum divisor encontrar o número sem sobra, ele não é primo."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "2"
                ]
              ],
              "fala": "O while continua enquanto divisor × divisor <= n. 2 × 2 <= 11? Sim, então testa mais um divisor."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "2"
                ]
              ],
              "fala": "11 dividido por 2 sobra 0? Não, esse divisor não divide 11."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "3"
                ]
              ],
              "fala": "Passa para o próximo divisor: 3.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "3"
                ]
              ],
              "fala": "O while continua enquanto divisor × divisor <= n. 3 × 3 <= 11? Sim, então testa mais um divisor."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "3"
                ]
              ],
              "fala": "11 dividido por 3 sobra 0? Não, esse divisor não divide 11."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "Passa para o próximo divisor: 4.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "4 × 4 <= 11? Não. Já passamos da raiz quadrada de 11, então não é preciso testar mais nenhum divisor."
            },
            {
              "linha": 8,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "Nenhum divisor dividiu 11 sem sobra, então return devolve True: ele é primo.",
              "dano": true
            },
            {
              "linha": 8,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "divisor",
                  "4"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 2200
        },
        "guiado": {
          "starter": "def ehPrimo(n):\n    if n < ___:                         # menores que quanto não são primos?\n        return False\n    divisor = ___                       # primeiro divisor a testar\n    while divisor * divisor <= ___:     # até quando testar?\n        if n % divisor == ___:          # quanto sobra quando divide?\n            return False\n        divisor += ___                  # quanto avançar?\n    return True\n",
          "testes": [
            {
              "in": [
                2
              ],
              "out": true
            },
            {
              "in": [
                9
              ],
              "out": false
            },
            {
              "in": [
                13
              ],
              "out": true
            },
            {
              "in": [
                1
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "inverte": {
    "conceito": "Construir um texto novo, letra por letra",
    "porque": "Textos não são alterados no lugar: para inverter um texto, você monta um texto novo. O truque é colar cada letra nova na frente do que já foi montado, e não no final. Assim a última letra a chegar fica na primeira posição.",
    "analogia": "É como empilhar pratos: o último prato colocado fica no topo. Se você pegar um por um, o primeiro que sai é o último que entrou. Colar sempre na frente faz o mesmo com as letras.",
    "ideias": [
      {
        "titulo": "Acumulador de texto",
        "texto": "Uma variável que começa vazia e vai ganhando pedaços. Aqui ela vai montando o texto invertido."
      },
      {
        "titulo": "Concatenar (+)",
        "texto": "Com textos, o + junta um no outro. A ordem importa: letra + resultado coloca a letra na frente."
      },
      {
        "titulo": "Texto vazio",
        "texto": "Dois sinais de aspas sem nada dentro (\"\") formam um texto sem nenhuma letra, o ponto de partida."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let resultado = \"\";",
            "explica": "As aspas criam um texto. Sem nada entre elas, é um texto vazio: o ponto de partida do que vamos montar."
          },
          {
            "trecho": "for (const letra of texto) {",
            "explica": "O for...of percorre o texto: a cada volta, letra recebe o próximo caractere."
          },
          {
            "trecho": "resultado = letra + resultado;",
            "explica": "Com textos, o + junta (concatena). A conta é feita primeiro, com o valor antigo de resultado, e só depois o resultado novo é guardado na variável. Colocar letra antes faz a nova letra ficar na frente."
          },
          {
            "trecho": "return resultado;",
            "explica": "Fora das chaves do laço: roda depois que todas as letras foram usadas."
          }
        ],
        "demo": {
          "entrada": "inverte(\"abc\")",
          "codigo": [
            "function inverte(texto) {",
            "  let resultado = \"\";",
            "  for (const letra of texto) {",
            "    resultado = letra + resultado;",
            "  }",
            "  return resultado;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ]
              ],
              "fala": "O Criador chama inverte(\"abc\"). Vai montar um texto novo, uma letra por vez."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"\""
                ]
              ],
              "fala": "Cria o texto novo, ainda vazio: resultado = \"\"."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"\""
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"a\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"a\""
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Cola a letra \"a\" NA FRENTE do que já existia. Agora resultado = \"a\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"a\""
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"b\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"ba\""
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "Cola a letra \"b\" NA FRENTE do que já existia. Agora resultado = \"ba\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"ba\""
                ],
                [
                  "letra",
                  "\"c\""
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = \"c\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"cba\""
                ],
                [
                  "letra",
                  "\"c\""
                ]
              ],
              "fala": "Cola a letra \"c\" NA FRENTE do que já existia. Agora resultado = \"cba\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"cba\""
                ]
              ],
              "fala": "Acabaram as letras do texto original, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"cba\""
                ]
              ],
              "fala": "return devolve o texto montado: \"cba\"."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "\"abc\""
                ],
                [
                  "resultado",
                  "\"cba\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function inverte(texto) {\n  let resultado = ___;                 // começa com que valor?\n  for (const letra of ___) {           // o que percorrer?\n    resultado = ___ + resultado;       // o que colar na frente?\n  }\n  return ___;                          // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                "abc"
              ],
              "out": "cba"
            },
            {
              "in": [
                "masmorra"
              ],
              "out": "arromsam"
            },
            {
              "in": [
                "a"
              ],
              "out": "a"
            },
            {
              "in": [
                ""
              ],
              "out": ""
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    resultado = \"\"",
            "explica": "As aspas criam um texto. Sem nada entre elas, é um texto vazio: o ponto de partida do que vamos montar."
          },
          {
            "trecho": "    for letra in texto:",
            "explica": "O for...in percorre o texto: a cada volta, letra recebe o próximo caractere. Os dois-pontos abrem o corpo do laço."
          },
          {
            "trecho": "        resultado = letra + resultado",
            "explica": "Com textos, o + junta (concatena). A conta é feita primeiro, com o valor antigo de resultado, e só depois o resultado novo é guardado. Colocar letra antes faz a nova letra ficar na frente."
          },
          {
            "trecho": "    return resultado",
            "explica": "Só 4 espaços: fora do for. Roda depois que todas as letras foram usadas."
          }
        ],
        "demo": {
          "entrada": "inverte('abc')",
          "codigo": [
            "def inverte(texto):",
            "    resultado = \"\"",
            "    for letra in texto:",
            "        resultado = letra + resultado",
            "    return resultado"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ]
              ],
              "fala": "O Criador chama inverte(\"abc\"). Vai montar um texto novo, uma letra por vez."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "''"
                ]
              ],
              "fala": "Cria o texto novo, ainda vazio: resultado = ''."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "''"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 'a'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'a'"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Cola a letra 'a' NA FRENTE do que já existia. Agora resultado = 'a'.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'a'"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 'b'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'ba'"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "Cola a letra 'b' NA FRENTE do que já existia. Agora resultado = 'ba'.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'ba'"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "O laço pega a próxima letra do texto: letra = 'c'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'cba'"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "Cola a letra 'c' NA FRENTE do que já existia. Agora resultado = 'cba'.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'cba'"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "Acabaram as letras do texto original, então o laço termina."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'cba'"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "return devolve o texto montado: 'cba'."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'abc'"
                ],
                [
                  "resultado",
                  "'cba'"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def inverte(texto):\n    resultado = ___               # começa com que valor?\n    for letra in ___:             # o que percorrer?\n        resultado = ___ + resultado   # o que colar na frente?\n    return ___                    # o que devolver?\n",
          "testes": [
            {
              "in": [
                "abc"
              ],
              "out": "cba"
            },
            {
              "in": [
                "masmorra"
              ],
              "out": "arromsam"
            },
            {
              "in": [
                "a"
              ],
              "out": "a"
            },
            {
              "in": [
                ""
              ],
              "out": ""
            }
          ]
        }
      }
    }
  },
  "fib": {
    "conceito": "Guardar só os dois últimos valores",
    "porque": "Na sequência de Fibonacci, cada número é a soma dos dois anteriores: 1, 1, 2, 3, 5, 8... Para chegar no n-ésimo, não precisamos guardar a sequência toda: só lembramos dos dois últimos e andamos uma posição para a frente a cada volta.",
    "analogia": "É como uma janela que desliza sobre a sequência, sempre mostrando dois números. A cada passo, calculamos o próximo, a janela anda uma casa e o número mais antigo sai de vista.",
    "ideias": [
      {
        "titulo": "Dois acumuladores",
        "texto": "Duas variáveis guardam o estado: o penúltimo e o último valor. Elas são atualizadas juntas a cada volta."
      },
      {
        "titulo": "Ordem importa",
        "texto": "Primeiro calcula o próximo, depois move o anterior e só então atualiza o atual. Trocar a ordem perde um valor."
      },
      {
        "titulo": "Laço com início",
        "texto": "O laço começa na posição 3 porque as posições 1 e 2 já valem 1 de antemão."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let anterior = 1;",
            "explica": "let cria uma variável que vai mudar. As posições 1 e 2 da sequência valem 1, e é daí que partimos."
          },
          {
            "trecho": "for (let i = 3; i <= n; i++) {",
            "explica": "Laço com contador: let i = 3 é onde começa, i <= n é até quando continua e i++ soma 1 a i a cada volta. Começa em 3 porque as posições 1 e 2 já estão prontas."
          },
          {
            "trecho": "const proximo = anterior + atual;",
            "explica": "const guarda um valor que não muda dentro desta volta. Soma os dois últimos para achar o próximo número da sequência."
          },
          {
            "trecho": "anterior = atual;",
            "explica": "Atualiza a variável sem let (ela já existe). A ordem importa: se atualizássemos o atual antes, perderíamos o valor que o anterior precisa receber."
          },
          {
            "trecho": "return atual;",
            "explica": "Depois do laço, atual guarda o n-ésimo número. Para n = 1 ou n = 2 o laço nem roda, e o resultado já é 1."
          }
        ],
        "demo": {
          "entrada": "fib(5)",
          "codigo": [
            "function fib(n) {",
            "  let anterior = 1;",
            "  let atual = 1;",
            "  for (let i = 3; i <= n; i++) {",
            "    const proximo = anterior + atual;",
            "    anterior = atual;",
            "    atual = proximo;",
            "  }",
            "  return atual;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "5"
                ]
              ],
              "fala": "O Criador chama fib(5). Cada número da sequência é a soma dos dois anteriores: 1, 1, 2, 3, 5..."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ]
              ],
              "fala": "Começa com os dois primeiros valores da sequência. anterior = 1."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ]
              ],
              "fala": "atual = 1. Essas duas variáveis guardam os dois últimos números da sequência."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "O laço calcula a posição 3. Ele vai até chegar na posição 5."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ],
                [
                  "i",
                  "3"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O próximo valor é a soma dos dois últimos: 1 + 1 = 2."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ],
                [
                  "i",
                  "3"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O anterior passa a valer o que atual valia: anterior = 1."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "O atual passa a valer o que acabou de ser calculado: atual = 2. A janela andou uma posição.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O laço calcula a posição 4. Ele vai até chegar na posição 5."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O próximo valor é a soma dos dois últimos: 1 + 2 = 3."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O anterior passa a valer o que atual valia: anterior = 2."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "4"
                ]
              ],
              "fala": "O atual passa a valer o que acabou de ser calculado: atual = 3. A janela andou uma posição.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O laço calcula a posição 5. Ele vai até chegar na posição 5."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "O próximo valor é a soma dos dois últimos: 2 + 3 = 5."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "O anterior passa a valer o que atual valia: anterior = 3."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ],
                [
                  "i",
                  "5"
                ]
              ],
              "fala": "O atual passa a valer o que acabou de ser calculado: atual = 5. A janela andou uma posição.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ]
              ],
              "fala": "O laço termina: já calculamos até a posição 5."
            },
            {
              "linha": 8,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ]
              ],
              "fala": "return devolve atual: 5, o 5º número da sequência."
            },
            {
              "linha": 8,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1900
        },
        "guiado": {
          "starter": "function fib(n) {\n  let anterior = 1;\n  let atual = ___;                        // quanto vale a posição 2?\n  for (let i = ___; i <= n; i++) {        // a partir de qual posição o laço calcula?\n    const proximo = anterior + ___;       // soma dos dois últimos\n    anterior = ___;                       // o anterior passa a valer o quê?\n    atual = proximo;\n  }\n  return ___;                             // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                1
              ],
              "out": 1
            },
            {
              "in": [
                2
              ],
              "out": 1
            },
            {
              "in": [
                6
              ],
              "out": 8
            },
            {
              "in": [
                10
              ],
              "out": 55
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    anterior = 1",
            "explica": "Cria a variável com o valor inicial. As posições 1 e 2 da sequência valem 1, e é daí que partimos."
          },
          {
            "trecho": "    for i in range(3, n + 1):",
            "explica": "range(3, n + 1) gera os números de 3 até n (o último, n + 1, não entra, por isso o + 1). A cada volta, i recebe o próximo. Começa em 3 porque as posições 1 e 2 já estão prontas."
          },
          {
            "trecho": "        proximo = anterior + atual",
            "explica": "Soma os dois últimos para achar o próximo número da sequência. 8 espaços: está dentro do for."
          },
          {
            "trecho": "        anterior = atual",
            "explica": "Atualiza a variável. A ordem importa: se atualizássemos o atual antes, perderíamos o valor que o anterior precisa receber."
          },
          {
            "trecho": "    return atual",
            "explica": "Só 4 espaços: fora do for. Para n = 1 ou n = 2 o range fica vazio, o laço nem roda e o resultado já é 1."
          }
        ],
        "demo": {
          "entrada": "fib(5)",
          "codigo": [
            "def fib(n):",
            "    anterior = 1",
            "    atual = 1",
            "    for i in range(3, n + 1):",
            "        proximo = anterior + atual",
            "        anterior = atual",
            "        atual = proximo",
            "    return atual"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "5"
                ]
              ],
              "fala": "O Criador chama fib(5). Cada número da sequência é a soma dos dois anteriores: 1, 1, 2, 3, 5..."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ]
              ],
              "fala": "Começa com os dois primeiros valores da sequência. anterior = 1."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ]
              ],
              "fala": "atual = 1. Essas duas variáveis guardam os dois últimos números da sequência."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ],
                [
                  "i",
                  "3"
                ]
              ],
              "fala": "O laço calcula a posição 3. Ele vai até chegar na posição 5."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ],
                [
                  "i",
                  "3"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O próximo valor é a soma dos dois últimos: 1 + 1 = 2."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "1"
                ],
                [
                  "i",
                  "3"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O anterior passa a valer o que atual valia: anterior = 1."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "3"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O atual passa a valer o que acabou de ser calculado: atual = 2. A janela andou uma posição.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "2"
                ]
              ],
              "fala": "O laço calcula a posição 4. Ele vai até chegar na posição 5."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "1"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O próximo valor é a soma dos dois últimos: 1 + 2 = 3."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "2"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O anterior passa a valer o que atual valia: anterior = 2."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "4"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O atual passa a valer o que acabou de ser calculado: atual = 3. A janela andou uma posição.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "3"
                ]
              ],
              "fala": "O laço calcula a posição 5. Ele vai até chegar na posição 5."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "2"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "O próximo valor é a soma dos dois últimos: 2 + 3 = 5."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "3"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "O anterior passa a valer o que atual valia: anterior = 3."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "O atual passa a valer o que acabou de ser calculado: atual = 5. A janela andou uma posição.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "O laço termina: já calculamos até a posição 5."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "return devolve atual: 5, o 5º número da sequência."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "anterior",
                  "3"
                ],
                [
                  "atual",
                  "5"
                ],
                [
                  "i",
                  "5"
                ],
                [
                  "proximo",
                  "5"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1900
        },
        "guiado": {
          "starter": "def fib(n):\n    anterior = 1\n    atual = ___                         # quanto vale a posição 2?\n    for i in range(___, n + 1):         # a partir de qual posição o laço calcula?\n        proximo = anterior + ___        # soma dos dois últimos\n        anterior = ___                  # o anterior passa a valer o quê?\n        atual = proximo\n    return ___                          # o que devolver?\n",
          "testes": [
            {
              "in": [
                1
              ],
              "out": 1
            },
            {
              "in": [
                2
              ],
              "out": 1
            },
            {
              "in": [
                6
              ],
              "out": 8
            },
            {
              "in": [
                10
              ],
              "out": 55
            }
          ]
        }
      }
    }
  },
  "exame-c": {
    "conceito": "Comparar com o inverso",
    "porque": "Um palíndromo é uma palavra que se lê igual de frente para trás e de trás para frente. A forma mais direta de conferir é fazer a versão invertida do texto e comparar com o original: se forem idênticos, é palíndromo.",
    "analogia": "É como olhar uma palavra no espelho: se o reflexo é igual à palavra, ela é simétrica. Aqui o 'espelho' é o texto invertido.",
    "ideias": [
      {
        "titulo": "Simetria",
        "texto": "Algo é simétrico quando é igual ao seu inverso. Descobrimos isso comparando as duas versões."
      },
      {
        "titulo": "Comparar textos",
        "texto": "O operador de igualdade confere se dois textos têm exatamente as mesmas letras na mesma ordem."
      },
      {
        "titulo": "Devolver a comparação",
        "texto": "A própria comparação já é true ou false. Dá para devolvê-la direto, sem precisar de um if."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const invertido = texto.split(\"\").reverse().join(\"\");",
            "explica": "Três ferramentas em cadeia: split(\"\") separa o texto numa lista de letras; reverse() inverte a lista; join(\"\") junta de volta num texto."
          },
          {
            "trecho": "return texto === invertido;",
            "explica": "=== compara se os dois textos são exatamente iguais e responde true ou false. Devolver a comparação direto é mais curto do que escrever um if."
          }
        ],
        "demo": {
          "entrada": "ehPalindromo(\"arara\")",
          "codigo": [
            "function ehPalindromo(texto) {",
            "  const invertido = texto.split(\"\").reverse().join(\"\");",
            "  return texto === invertido;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "\"arara\""
                ]
              ],
              "fala": "O Criador chama ehPalindromo(\"arara\"). Palíndromo é o que se lê igual dos dois lados."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "\"arara\""
                ],
                [
                  "invertido",
                  "\"arara\""
                ]
              ],
              "fala": "Gera a versão de trás para frente do texto: \"arara\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"arara\""
                ],
                [
                  "invertido",
                  "\"arara\""
                ]
              ],
              "fala": "Compara o texto original com o invertido. São iguais? A comparação devolve true.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"arara\""
                ],
                [
                  "invertido",
                  "\"arara\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function ehPalindromo(texto) {\n  const invertido = ___.split(\"\").___().join(\"\");   // de qual texto? qual método inverte?\n  return texto ___ invertido;                        // qual operador compara se são iguais?\n}\n",
          "testes": [
            {
              "in": [
                "arara"
              ],
              "out": true
            },
            {
              "in": [
                "casa"
              ],
              "out": false
            },
            {
              "in": [
                "a"
              ],
              "out": true
            },
            {
              "in": [
                "ab"
              ],
              "out": false
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    invertido = texto[::-1]",
            "explica": "O fatiamento [início:fim:passo] com passo -1 percorre o texto de trás para frente. Sem início nem fim, pega o texto inteiro."
          },
          {
            "trecho": "    return texto == invertido",
            "explica": "== compara se os dois textos são exatamente iguais e responde True ou False. Devolver a comparação direto é mais curto do que escrever um if."
          }
        ],
        "demo": {
          "entrada": "ehPalindromo('arara')",
          "codigo": [
            "def ehPalindromo(texto):",
            "    invertido = texto[::-1]",
            "    return texto == invertido"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "'arara'"
                ]
              ],
              "fala": "O Criador chama ehPalindromo(\"arara\"). Palíndromo é o que se lê igual dos dois lados."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "'arara'"
                ],
                [
                  "invertido",
                  "'arara'"
                ]
              ],
              "fala": "Gera a versão de trás para frente do texto: 'arara'.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'arara'"
                ],
                [
                  "invertido",
                  "'arara'"
                ]
              ],
              "fala": "Compara o texto original com o invertido. São iguais? A comparação devolve True.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'arara'"
                ],
                [
                  "invertido",
                  "'arara'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def ehPalindromo(texto):\n    invertido = ___[::___]         # de qual texto? qual passo inverte?\n    return texto ___ invertido     # qual operador compara se são iguais?\n",
          "testes": [
            {
              "in": [
                "arara"
              ],
              "out": true
            },
            {
              "in": [
                "casa"
              ],
              "out": false
            },
            {
              "in": [
                "a"
              ],
              "out": true
            },
            {
              "in": [
                "ab"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "primos": {
    "conceito": "Reaproveitar uma função dentro de um laço",
    "porque": "Contar quantos primos existem até n é testar cada número de 2 a n e anotar os que passam. A parte difícil, saber se um número é primo, você já resolveu: é a função ehPrimo. Funções são peças reutilizáveis, e uma peça pode chamar outra.",
    "analogia": "É como uma linha de montagem com um inspetor: o inspetor (ehPrimo) já sabe aprovar ou reprovar uma peça. O laço só entrega uma peça por vez e conta quantas foram aprovadas.",
    "ideias": [
      {
        "titulo": "Chamar uma função",
        "texto": "Escrever o nome dela com os valores entre parênteses. Ela devolve uma resposta que você pode usar numa condição."
      },
      {
        "titulo": "Dividir para conquistar",
        "texto": "Cada função resolve um problema pequeno. Problemas grandes viram combinações de funções pequenas."
      },
      {
        "titulo": "Uma função precisa existir",
        "texto": "O programa só conhece as funções que estão escritas nele. No combate, a ehPrimo também precisa estar no seu código."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "for (let numero = 2; numero <= n; numero++) {",
            "explica": "O for tem três partes entre os parênteses: onde começa (let numero = 2), até quando continua (numero <= n) e o que muda a cada volta (numero++ soma 1). Começa no 2 porque é o primeiro primo."
          },
          {
            "trecho": "if (ehPrimo(numero)) {",
            "explica": "Chama a função ehPrimo (a do monstro anterior) passando numero. Ela devolve true ou false, e o if usa essa resposta direto como condição. Esta função precisa estar escrita também no seu código."
          },
          {
            "trecho": "contador += 1;",
            "explica": "Soma 1 ao contador cada vez que aparece um primo."
          },
          {
            "trecho": "return contador;",
            "explica": "Depois que o laço percorre todos os números, devolve a contagem."
          }
        ],
        "demo": {
          "entrada": "contaPrimos(5)",
          "codigo": [
            "function contaPrimos(n) {",
            "  let contador = 0;",
            "  for (let numero = 2; numero <= n; numero++) {",
            "    if (ehPrimo(numero)) {",
            "      contador += 1;",
            "    }",
            "  }",
            "  return contador;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "5"
                ]
              ],
              "fala": "O Criador chama contaPrimos(5). Para cada número de 2 até 5, vai usar o detector que já existe: ehPrimo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "0"
                ]
              ],
              "fala": "Cria o contador em 0: ainda não achou nenhum primo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 2."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "ehPrimo(2) devolve verdadeiro? Sim, 2 é primo, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "Achou um primo! O contador agora vale 1.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "ehPrimo(3) devolve verdadeiro? Sim, 3 é primo, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "Achou um primo! O contador agora vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "4"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 4."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "4"
                ]
              ],
              "fala": "ehPrimo(4) devolve verdadeiro? Não, 4 não é primo, então pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 5."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "ehPrimo(5) devolve verdadeiro? Sim, 5 é primo, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "Achou um primo! O contador agora vale 3.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ]
              ],
              "fala": "Chegou ao fim da contagem, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ]
              ],
              "fala": "return devolve o contador: 3 primos até o número pedido."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 2000
        },
        "guiado": {
          "starter": "function ehPrimo(n) {\n  if (n < 2) {\n    return false;\n  }\n  let divisor = 2;\n  while (divisor * divisor <= n) {\n    if (n % divisor === 0) {\n      return false;\n    }\n    divisor += 1;\n  }\n  return true;\n}\n\n// a ehPrimo acima já está pronta; complete a contaPrimos\nfunction contaPrimos(n) {\n  let contador = ___;                          // começa em quanto?\n  for (let numero = ___; numero <= n; numero++) {   // o primeiro primo\n    if (___(numero)) {                         // qual função diz se é primo?\n      contador += 1;\n    }\n  }\n  return ___;                                  // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                1
              ],
              "out": 0
            },
            {
              "in": [
                2
              ],
              "out": 1
            },
            {
              "in": [
                10
              ],
              "out": 4
            },
            {
              "in": [
                20
              ],
              "out": 8
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    for numero in range(2, n + 1):",
            "explica": "range(2, n + 1) gera os números de 2 até n (o último, n + 1, não entra, por isso o + 1). A cada volta, numero recebe o próximo. Começa no 2 porque é o primeiro primo."
          },
          {
            "trecho": "        if ehPrimo(numero):",
            "explica": "Chama a função ehPrimo (a do monstro anterior) passando numero. Ela devolve True ou False, e o if usa essa resposta direto como condição. Esta função precisa estar escrita também no seu código."
          },
          {
            "trecho": "            contador += 1",
            "explica": "Soma 1 ao contador cada vez que aparece um primo. 12 espaços: dentro do if, dentro do for."
          },
          {
            "trecho": "    return contador",
            "explica": "Só 4 espaços: fora do for. Depois que o laço percorre todos os números, devolve a contagem."
          }
        ],
        "demo": {
          "entrada": "contaPrimos(5)",
          "codigo": [
            "def contaPrimos(n):",
            "    contador = 0",
            "    for numero in range(2, n + 1):",
            "        if ehPrimo(numero):",
            "            contador += 1",
            "    return contador"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "5"
                ]
              ],
              "fala": "O Criador chama contaPrimos(5). Para cada número de 2 até 5, vai usar o detector que já existe: ehPrimo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "0"
                ]
              ],
              "fala": "Cria o contador em 0: ainda não achou nenhum primo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 2."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "ehPrimo(2) devolve verdadeiro? Sim, 2 é primo, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "numero",
                  "2"
                ]
              ],
              "fala": "Achou um primo! O contador agora vale 1.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "ehPrimo(3) devolve verdadeiro? Sim, 3 é primo, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "3"
                ]
              ],
              "fala": "Achou um primo! O contador agora vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "4"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 4."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "4"
                ]
              ],
              "fala": "ehPrimo(4) devolve verdadeiro? Não, 4 não é primo, então pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "O laço passa para o próximo número: numero = 5."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "ehPrimo(5) devolve verdadeiro? Sim, 5 é primo, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "Achou um primo! O contador agora vale 3.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "Chegou ao fim da contagem, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "return devolve o contador: 3 primos até o número pedido."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "5"
                ],
                [
                  "contador",
                  "3"
                ],
                [
                  "numero",
                  "5"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 2000
        },
        "guiado": {
          "starter": "def ehPrimo(n):\n    if n < 2:\n        return False\n    divisor = 2\n    while divisor * divisor <= n:\n        if n % divisor == 0:\n            return False\n        divisor += 1\n    return True\n\n# a ehPrimo acima já está pronta; complete a contaPrimos\ndef contaPrimos(n):\n    contador = ___                         # começa em quanto?\n    for numero in range(___, n + 1):       # o primeiro primo\n        if ___(numero):                    # qual função diz se é primo?\n            contador += 1\n    return ___                             # o que devolver?\n",
          "testes": [
            {
              "in": [
                1
              ],
              "out": 0
            },
            {
              "in": [
                2
              ],
              "out": 1
            },
            {
              "in": [
                10
              ],
              "out": 4
            },
            {
              "in": [
                20
              ],
              "out": 8
            }
          ]
        }
      }
    }
  },
  "raiz": {
    "conceito": "Laço dentro de laço",
    "porque": "Para somar os dígitos de um número, você precisa separá-los: o resto da divisão por 10 dá o último dígito, e dividir por 10 (sem casas decimais) joga o último fora. Fazer isso até acabar é um laço. Repetir a soma até sobrar um só dígito é outro laço, por fora do primeiro.",
    "analogia": "É como dobrar uma folha de papel: cada rodada de soma é uma dobra. Dentro de cada dobra, você vai destacando os dígitos um a um, de trás para frente, e somando. Você repete a dobra até a folha não dobrar mais.",
    "ideias": [
      {
        "titulo": "Último dígito",
        "texto": "n % 10 devolve o último dígito de n. 38 % 10 dá 8."
      },
      {
        "titulo": "Descartar o último",
        "texto": "Dividir por 10 sem casas decimais remove o último dígito. 38 vira 3."
      },
      {
        "titulo": "Laço dentro de laço",
        "texto": "O laço de dentro roda inteiro a cada volta do de fora. Cada um tem a sua própria condição de parada."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "while (n >= 10) {",
            "explica": "O laço de fora: repete enquanto n tiver dois ou mais dígitos (n >= 10). Quando sobrar um dígito só, ele para."
          },
          {
            "trecho": "let soma = 0;",
            "explica": "A soma é criada de novo a cada rodada, porque cada rodada começa do zero. Está dentro do laço de fora."
          },
          {
            "trecho": "while (n > 0) {",
            "explica": "O laço de dentro: repete enquanto ainda houver dígitos em n (n > 0). Ele termina quando n chega a 0."
          },
          {
            "trecho": "soma += n % 10;",
            "explica": "n % 10 é o resto da divisão por 10, que é o último dígito (38 % 10 = 8). += soma esse dígito ao que já estava em soma."
          },
          {
            "trecho": "n = Math.floor(n / 10);",
            "explica": "n / 10 tem casas decimais (38 / 10 = 3.8). Math.floor arredonda para baixo (3), o que descarta o último dígito."
          },
          {
            "trecho": "n = soma;",
            "explica": "Fim da rodada: a soma vira o novo n. Está no laço de fora, depois do laço de dentro."
          }
        ],
        "demo": {
          "entrada": "somaDigitos(38)",
          "codigo": [
            "function somaDigitos(n) {",
            "  while (n >= 10) {",
            "    let soma = 0;",
            "    while (n > 0) {",
            "      soma += n % 10;",
            "      n = Math.floor(n / 10);",
            "    }",
            "    n = soma;",
            "  }",
            "  return n;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "38"
                ]
              ],
              "fala": "O Criador chama somaDigitos(38). Vai somar os dígitos várias vezes, até sobrar um só."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "38"
                ]
              ],
              "fala": "38 ainda tem mais de um dígito (n >= 10)? Sim, então faz mais uma rodada de soma."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "38"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Zera a soma desta rodada: soma = 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "38"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 38 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "38"
                ],
                [
                  "soma",
                  "8"
                ]
              ],
              "fala": "n % 10 é o último dígito de 38. A soma desta rodada agora é 8."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "3"
                ],
                [
                  "soma",
                  "8"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "3"
                ],
                [
                  "soma",
                  "8"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 3 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "3"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "n % 10 é o último dígito de 3. A soma desta rodada agora é 11."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "n chegou a 0: não restam dígitos. Esta rodada terminou."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "11"
                ]
              ],
              "fala": "A soma desta rodada vira o novo n: n = 11.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "11 ainda tem mais de um dígito (n >= 10)? Sim, então faz mais uma rodada de soma."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Zera a soma desta rodada: soma = 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 11 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "1"
                ]
              ],
              "fala": "n % 10 é o último dígito de 11. A soma desta rodada agora é 1."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "1"
                ],
                [
                  "soma",
                  "1"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 1."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "1"
                ],
                [
                  "soma",
                  "1"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 1 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "1"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "n % 10 é o último dígito de 1. A soma desta rodada agora é 2."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "n chegou a 0: não restam dígitos. Esta rodada terminou."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "2"
                ]
              ],
              "fala": "A soma desta rodada vira o novo n: n = 2.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "2"
                ]
              ],
              "fala": "2 tem só um dígito (n < 10). Acabaram as rodadas."
            },
            {
              "linha": 9,
              "vars": [
                [
                  "n",
                  "2"
                ]
              ],
              "fala": "Sobrou um único dígito. return devolve 2."
            },
            {
              "linha": 9,
              "vars": [
                [
                  "n",
                  "2"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1500
        },
        "guiado": {
          "starter": "function somaDigitos(n) {\n  while (n >= ___) {                   // quando ainda tem mais de um dígito?\n    let soma = 0;\n    while (n > 0) {\n      soma += n % ___;                 // qual divisor dá o último dígito?\n      n = Math.floor(n / ___);         // qual divisor descarta o último dígito?\n    }\n    n = ___;                           // o que vira o novo n?\n  }\n  return n;\n}\n",
          "testes": [
            {
              "in": [
                38
              ],
              "out": 2
            },
            {
              "in": [
                5
              ],
              "out": 5
            },
            {
              "in": [
                99
              ],
              "out": 9
            },
            {
              "in": [
                19
              ],
              "out": 1
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    while n >= 10:",
            "explica": "O laço de fora: repete enquanto n tiver dois ou mais dígitos (n >= 10). Quando sobrar um dígito só, ele para."
          },
          {
            "trecho": "        soma = 0",
            "explica": "A soma é criada de novo a cada rodada, porque cada rodada começa do zero. Está dentro do laço de fora (8 espaços)."
          },
          {
            "trecho": "        while n > 0:",
            "explica": "O laço de dentro: repete enquanto ainda houver dígitos em n (n > 0). O corpo dele fica ainda mais recuado (12 espaços)."
          },
          {
            "trecho": "            soma += n % 10",
            "explica": "n % 10 é o resto da divisão por 10, que é o último dígito (38 % 10 = 8). += soma esse dígito ao que já estava em soma."
          },
          {
            "trecho": "            n = n // 10",
            "explica": "// é a divisão inteira, sem casas decimais: 38 // 10 dá 3. Isso descarta o último dígito."
          },
          {
            "trecho": "        n = soma",
            "explica": "Fim da rodada: a soma vira o novo n. Com 8 espaços, está no laço de fora e depois do laço de dentro."
          }
        ],
        "demo": {
          "entrada": "somaDigitos(38)",
          "codigo": [
            "def somaDigitos(n):",
            "    while n >= 10:",
            "        soma = 0",
            "        while n > 0:",
            "            soma += n % 10",
            "            n = n // 10",
            "        n = soma",
            "    return n"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "n",
                  "38"
                ]
              ],
              "fala": "O Criador chama somaDigitos(38). Vai somar os dígitos várias vezes, até sobrar um só."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "38"
                ]
              ],
              "fala": "38 ainda tem mais de um dígito (n >= 10)? Sim, então faz mais uma rodada de soma."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "38"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Zera a soma desta rodada: soma = 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "38"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 38 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "38"
                ],
                [
                  "soma",
                  "8"
                ]
              ],
              "fala": "n % 10 é o último dígito de 38. A soma desta rodada agora é 8."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "3"
                ],
                [
                  "soma",
                  "8"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 3."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "3"
                ],
                [
                  "soma",
                  "8"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 3 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "3"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "n % 10 é o último dígito de 3. A soma desta rodada agora é 11."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "n chegou a 0: não restam dígitos. Esta rodada terminou."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "A soma desta rodada vira o novo n: n = 11.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "11"
                ]
              ],
              "fala": "11 ainda tem mais de um dígito (n >= 10)? Sim, então faz mais uma rodada de soma."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Zera a soma desta rodada: soma = 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 11 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "11"
                ],
                [
                  "soma",
                  "1"
                ]
              ],
              "fala": "n % 10 é o último dígito de 11. A soma desta rodada agora é 1."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "1"
                ],
                [
                  "soma",
                  "1"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 1."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "1"
                ],
                [
                  "soma",
                  "1"
                ]
              ],
              "fala": "Ainda restam dígitos em n? 1 > 0? Sim, então pega o último dígito."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "n",
                  "1"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "n % 10 é o último dígito de 1. A soma desta rodada agora é 2."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer 0."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "n",
                  "0"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "n chegou a 0: não restam dígitos. Esta rodada terminou."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "n",
                  "2"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "A soma desta rodada vira o novo n: n = 2.",
              "dano": true
            },
            {
              "linha": 1,
              "vars": [
                [
                  "n",
                  "2"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "2 tem só um dígito (n < 10). Acabaram as rodadas."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "2"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "Sobrou um único dígito. return devolve 2."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "n",
                  "2"
                ],
                [
                  "soma",
                  "2"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1500
        },
        "guiado": {
          "starter": "def somaDigitos(n):\n    while n >= ___:                   # quando ainda tem mais de um dígito?\n        soma = 0\n        while n > 0:\n            soma += n % ___           # qual divisor dá o último dígito?\n            n = n // ___              # qual divisor descarta o último dígito?\n        n = ___                       # o que vira o novo n?\n    return n\n",
          "testes": [
            {
              "in": [
                38
              ],
              "out": 2
            },
            {
              "in": [
                5
              ],
              "out": 5
            },
            {
              "in": [
                99
              ],
              "out": 9
            },
            {
              "in": [
                19
              ],
              "out": 1
            }
          ]
        }
      }
    }
  },
  "exame-b": {
    "conceito": "Valores distintos e ordenação",
    "porque": "O segundo maior não é simplesmente 'o penúltimo': se o maior aparece repetido, as repetições não contam como segundo lugar. Então primeiro eliminamos os repetidos, depois ordenamos do maior para o menor e pegamos quem está em segundo.",
    "analogia": "É como um pódio de corrida: se duas pessoas empatam em primeiro, não existe 'segundo lugar' no sentido de ser a mesma pessoa. Primeiro você junta os empates numa só posição, depois olha quem veio logo atrás.",
    "ideias": [
      {
        "titulo": "Conjunto (Set)",
        "texto": "Uma coleção que não guarda repetidos. Transformar a lista em conjunto elimina os valores duplicados."
      },
      {
        "titulo": "Ordenar",
        "texto": "Colocar em ordem do maior para o menor. Depois disso, a posição de cada valor diz o seu lugar no ranking."
      },
      {
        "titulo": "Posição 1",
        "texto": "A contagem das posições começa no zero: a posição 0 é a primeira, e a posição 1 é a segunda."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const distintos = [...new Set(lista)];",
            "explica": "new Set(lista) cria um conjunto, que não guarda repetidos. Os três pontos (...) espalham os itens dele dentro de uma lista nova entre colchetes []."
          },
          {
            "trecho": "const ordenados = [...distintos].sort((a, b) => b - a);",
            "explica": "sort ordena a lista. A função (a, b) => b - a ensina como comparar dois itens: quando b - a é positivo, b vem antes, o que dá ordem do maior para o menor. Os três pontos copiam a lista antes, para não alterar a original."
          },
          {
            "trecho": "return ordenados[1];",
            "explica": "ordenados[1] pega o item na posição 1, a segunda (a contagem começa no zero)."
          }
        ],
        "demo": {
          "entrada": "segundoMaior([9, 5, 5, 7])",
          "codigo": [
            "function segundoMaior(lista) {",
            "  const distintos = [...new Set(lista)];",
            "  const ordenados = [...distintos].sort((a, b) => b - a);",
            "  return ordenados[1];",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ]
              ],
              "fala": "O Criador chama segundoMaior([9, 5, 5, 7]). Valores repetidos não contam duas vezes."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ]
              ],
              "fala": "Remove os repetidos. O 5 aparecia duas vezes e agora aparece uma: [9, 5, 7].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ],
                [
                  "ordenados",
                  "[9, 7, 5]"
                ]
              ],
              "fala": "Ordena do maior para o menor: [9, 7, 5].",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ],
                [
                  "ordenados",
                  "[9, 7, 5]"
                ]
              ],
              "fala": "return devolve o item da posição 1, o segundo (a contagem começa no 0): 7.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ],
                [
                  "ordenados",
                  "[9, 7, 5]"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function segundoMaior(lista) {\n  const distintos = [...new ___(lista)];                  // qual coleção descarta repetidos?\n  const ordenados = [...distintos].sort((a, b) => ___ - ___);   // maior para o menor\n  return ordenados[___];                                  // qual posição é a segunda?\n}\n",
          "testes": [
            {
              "in": [
                [
                  3,
                  9,
                  2
                ]
              ],
              "out": 3
            },
            {
              "in": [
                [
                  1,
                  2,
                  3,
                  4
                ]
              ],
              "out": 3
            },
            {
              "in": [
                [
                  7,
                  7,
                  5
                ]
              ],
              "out": 5
            },
            {
              "in": [
                [
                  10,
                  10,
                  9,
                  9
                ]
              ],
              "out": 9
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    distintos = list(set(lista))",
            "explica": "set(lista) cria um conjunto, que não guarda repetidos. list(...) converte o conjunto de volta numa lista."
          },
          {
            "trecho": "    ordenados = sorted(distintos, reverse=True)",
            "explica": "sorted devolve uma lista nova, ordenada. reverse=True pede do maior para o menor (sem isso seria do menor para o maior)."
          },
          {
            "trecho": "    return ordenados[1]",
            "explica": "ordenados[1] pega o item na posição 1, a segunda (a contagem começa no zero)."
          }
        ],
        "demo": {
          "entrada": "segundoMaior([9, 5, 5, 7])",
          "codigo": [
            "def segundoMaior(lista):",
            "    distintos = list(set(lista))",
            "    ordenados = sorted(distintos, reverse=True)",
            "    return ordenados[1]"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ]
              ],
              "fala": "O Criador chama segundoMaior([9, 5, 5, 7]). Valores repetidos não contam duas vezes."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ]
              ],
              "fala": "Remove os repetidos. O 5 aparecia duas vezes e agora aparece uma: [9, 5, 7].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ],
                [
                  "ordenados",
                  "[9, 7, 5]"
                ]
              ],
              "fala": "Ordena do maior para o menor: [9, 7, 5].",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ],
                [
                  "ordenados",
                  "[9, 7, 5]"
                ]
              ],
              "fala": "return devolve o item da posição 1, o segundo (a contagem começa no 0): 7.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "lista",
                  "[9, 5, 5, 7]"
                ],
                [
                  "distintos",
                  "[9, 5, 7]"
                ],
                [
                  "ordenados",
                  "[9, 7, 5]"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def segundoMaior(lista):\n    distintos = list(___(lista))             # qual função descarta repetidos?\n    ordenados = sorted(distintos, reverse=___)   # do maior para o menor: True ou False?\n    return ordenados[___]                    # qual posição é a segunda?\n",
          "testes": [
            {
              "in": [
                [
                  3,
                  9,
                  2
                ]
              ],
              "out": 3
            },
            {
              "in": [
                [
                  1,
                  2,
                  3,
                  4
                ]
              ],
              "out": 3
            },
            {
              "in": [
                [
                  7,
                  7,
                  5
                ]
              ],
              "out": 5
            },
            {
              "in": [
                [
                  10,
                  10,
                  9,
                  9
                ]
              ],
              "out": 9
            }
          ]
        }
      }
    }
  },
  "palavras": {
    "conceito": "Dividir um texto e descartar o vazio",
    "porque": "Para contar palavras, dividimos a frase nos espaços. O problema é que espaços sobrando (no começo, no fim ou dobrados no meio) criam pedaços vazios, que não são palavras. Então dividimos e depois jogamos fora o que ficou vazio.",
    "analogia": "É como cortar um colar nas contas: se o fio tem pedaços de linha sem conta nenhuma entre elas, você descarta os pedaços vazios antes de contar quantas contas existem.",
    "ideias": [
      {
        "titulo": "Dividir (split)",
        "texto": "Corta um texto em pedaços sempre que encontra um separador, como o espaço. O resultado é uma lista."
      },
      {
        "titulo": "Pedaço vazio",
        "texto": "Dois espaços seguidos cortam um pedaço sem nenhuma letra. Ele aparece na lista, mas não é uma palavra."
      },
      {
        "titulo": "Tamanho da lista",
        "texto": "Depois de limpar, o número de itens da lista é o número de palavras."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const pedacos = frase.trim().split(\" \").filter((p) => p !== \"\");",
            "explica": "Três ferramentas em cadeia. trim() tira os espaços das pontas. split(\" \") corta o texto em cada espaço (espaços dobrados geram pedaços vazios \"\"). filter mantém só os itens para os quais a função devolve true: (p) => p !== \"\" é uma função curta que diz \"o pedaço p não é vazio\"."
          },
          {
            "trecho": "return pedacos.length;",
            "explica": "length é o tamanho da lista, ou seja, quantos itens ela tem. Aqui, o número de palavras."
          }
        ],
        "demo": {
          "entrada": "contaPalavras(\"  ola   mundo  \")",
          "codigo": [
            "function contaPalavras(frase) {",
            "  const pedacos = frase.trim().split(\" \").filter((p) => p !== \"\");",
            "  return pedacos.length;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "frase",
                  "\"  ola   mundo  \""
                ]
              ],
              "fala": "O Criador chama contaPalavras(\"  ola   mundo  \"). Tem espaços sobrando no começo, no meio e no fim."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "frase",
                  "\"  ola   mundo  \""
                ],
                [
                  "pedacos",
                  "[\"ola\", \"mundo\"]"
                ]
              ],
              "fala": "Divide a frase nos espaços e descarta os pedaços vazios que sobraram: [\"ola\", \"mundo\"].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "frase",
                  "\"  ola   mundo  \""
                ],
                [
                  "pedacos",
                  "[\"ola\", \"mundo\"]"
                ]
              ],
              "fala": "return devolve a quantidade de pedaços que sobraram: 2 palavras.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "frase",
                  "\"  ola   mundo  \""
                ],
                [
                  "pedacos",
                  "[\"ola\", \"mundo\"]"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function contaPalavras(frase) {\n  const pedacos = frase.___().split(\" \").filter((p) => p !== ___);   // qual método tira espaços das pontas? como é o pedaço vazio?\n  return pedacos.___;                                                  // qual propriedade dá o tamanho?\n}\n",
          "testes": [
            {
              "in": [
                "ola mundo"
              ],
              "out": 2
            },
            {
              "in": [
                "um"
              ],
              "out": 1
            },
            {
              "in": [
                ""
              ],
              "out": 0
            },
            {
              "in": [
                "  a   b  "
              ],
              "out": 2
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    pedacos = frase.split()",
            "explica": "Sem nada entre os parênteses, split() corta o texto em qualquer quantidade de espaços e ignora os das pontas, então já não sobra nenhum pedaço vazio. Em Python, esse é o jeito mais curto."
          },
          {
            "trecho": "    return len(pedacos)",
            "explica": "len devolve o tamanho de uma lista, ou seja, quantos itens ela tem. Aqui, o número de palavras."
          }
        ],
        "demo": {
          "entrada": "contaPalavras('  ola   mundo  ')",
          "codigo": [
            "def contaPalavras(frase):",
            "    pedacos = frase.split()",
            "    return len(pedacos)"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "frase",
                  "'  ola   mundo  '"
                ]
              ],
              "fala": "O Criador chama contaPalavras(\"  ola   mundo  \"). Tem espaços sobrando no começo, no meio e no fim."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "frase",
                  "'  ola   mundo  '"
                ],
                [
                  "pedacos",
                  "['ola', 'mundo']"
                ]
              ],
              "fala": "Divide a frase nos espaços e descarta os pedaços vazios que sobraram: ['ola', 'mundo'].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "frase",
                  "'  ola   mundo  '"
                ],
                [
                  "pedacos",
                  "['ola', 'mundo']"
                ]
              ],
              "fala": "return devolve a quantidade de pedaços que sobraram: 2 palavras.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "frase",
                  "'  ola   mundo  '"
                ],
                [
                  "pedacos",
                  "['ola', 'mundo']"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def contaPalavras(frase):\n    pedacos = frase.___()          # qual método divide o texto em palavras?\n    return ___(pedacos)            # qual função dá o tamanho da lista?\n",
          "testes": [
            {
              "in": [
                "ola mundo"
              ],
              "out": 2
            },
            {
              "in": [
                "um"
              ],
              "out": 1
            },
            {
              "in": [
                ""
              ],
              "out": 0
            },
            {
              "in": [
                "  a   b  "
              ],
              "out": 2
            }
          ]
        }
      }
    }
  },
  "anagrama": {
    "conceito": "Dar a mesma 'impressão digital' às duas palavras",
    "porque": "Duas palavras são anagramas quando usam exatamente as mesmas letras, só em outra ordem. Comparar letra por letra na ordem original não funciona. O truque é colocar as letras de cada palavra em ordem alfabética: se forem anagramas, as duas versões ficam idênticas.",
    "analogia": "É como separar duas caixas de letras de brinquedo em ordem alfabética sobre a mesa. Se tinham as mesmas letras, as duas fileiras ficam exatamente iguais, mesmo que as palavras originais fossem diferentes.",
    "ideias": [
      {
        "titulo": "Ordenar letras",
        "texto": "Colocar as letras de um texto em ordem alfabética descarta a ordem original e deixa só o 'conteúdo'."
      },
      {
        "titulo": "Mesma assinatura",
        "texto": "Se duas coisas têm o mesmo conteúdo, a versão ordenada delas é igual. Isso permite comparar sem olhar a ordem."
      },
      {
        "titulo": "Comparar o resultado",
        "texto": "Depois de ordenar, um simples teste de igualdade responde se são anagramas."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const letrasA = a.split(\"\").sort().join(\"\");",
            "explica": "Três ferramentas em cadeia: split(\"\") separa o texto numa lista de letras; sort() coloca a lista em ordem alfabética; join(\"\") junta de volta num texto."
          },
          {
            "trecho": "return letrasA === letrasB;",
            "explica": "=== compara se os dois textos são exatamente iguais e responde true ou false. Devolver a comparação direto dispensa o if."
          }
        ],
        "demo": {
          "entrada": "anagrama(\"amor\", \"roma\")",
          "codigo": [
            "function anagrama(a, b) {",
            "  const letrasA = a.split(\"\").sort().join(\"\");",
            "  const letrasB = b.split(\"\").sort().join(\"\");",
            "  return letrasA === letrasB;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "a",
                  "\"amor\""
                ],
                [
                  "b",
                  "\"roma\""
                ]
              ],
              "fala": "O Criador chama anagrama(\"amor\", \"roma\"). Anagramas têm as mesmas letras, em outra ordem."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "a",
                  "\"amor\""
                ],
                [
                  "b",
                  "\"roma\""
                ],
                [
                  "letrasA",
                  "\"amor\""
                ]
              ],
              "fala": "Coloca as letras da primeira palavra em ordem alfabética: \"amor\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "a",
                  "\"amor\""
                ],
                [
                  "b",
                  "\"roma\""
                ],
                [
                  "letrasA",
                  "\"amor\""
                ],
                [
                  "letrasB",
                  "\"amor\""
                ]
              ],
              "fala": "Faz o mesmo com a segunda palavra: \"amor\". Se forem anagramas, as duas versões ordenadas ficam idênticas.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "a",
                  "\"amor\""
                ],
                [
                  "b",
                  "\"roma\""
                ],
                [
                  "letrasA",
                  "\"amor\""
                ],
                [
                  "letrasB",
                  "\"amor\""
                ]
              ],
              "fala": "Compara as duas versões ordenadas. São iguais? return devolve true.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "a",
                  "\"amor\""
                ],
                [
                  "b",
                  "\"roma\""
                ],
                [
                  "letrasA",
                  "\"amor\""
                ],
                [
                  "letrasB",
                  "\"amor\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function anagrama(a, b) {\n  const letrasA = a.split(\"\").___().join(\"\");      // qual método ordena?\n  const letrasB = ___.split(\"\").sort().join(\"\");   // qual palavra ordenar aqui?\n  return letrasA ___ letrasB;                        // qual operador compara se são iguais?\n}\n",
          "testes": [
            {
              "in": [
                "amor",
                "roma"
              ],
              "out": true
            },
            {
              "in": [
                "abc",
                "abd"
              ],
              "out": false
            },
            {
              "in": [
                "listen",
                "silent"
              ],
              "out": true
            },
            {
              "in": [
                "a",
                "aa"
              ],
              "out": false
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    letrasA = \"\".join(sorted(a))",
            "explica": "sorted(a) devolve uma lista com as letras em ordem alfabética. \"\".join(...) junta os itens dessa lista num texto usando o texto vazio como \"cola\"."
          },
          {
            "trecho": "    return letrasA == letrasB",
            "explica": "== compara se os dois textos são exatamente iguais e responde True ou False. Devolver a comparação direto dispensa o if."
          }
        ],
        "demo": {
          "entrada": "anagrama('amor', 'roma')",
          "codigo": [
            "def anagrama(a, b):",
            "    letrasA = \"\".join(sorted(a))",
            "    letrasB = \"\".join(sorted(b))",
            "    return letrasA == letrasB"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "a",
                  "'amor'"
                ],
                [
                  "b",
                  "'roma'"
                ]
              ],
              "fala": "O Criador chama anagrama(\"amor\", \"roma\"). Anagramas têm as mesmas letras, em outra ordem."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "a",
                  "'amor'"
                ],
                [
                  "b",
                  "'roma'"
                ],
                [
                  "letrasA",
                  "'amor'"
                ]
              ],
              "fala": "Coloca as letras da primeira palavra em ordem alfabética: 'amor'.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "a",
                  "'amor'"
                ],
                [
                  "b",
                  "'roma'"
                ],
                [
                  "letrasA",
                  "'amor'"
                ],
                [
                  "letrasB",
                  "'amor'"
                ]
              ],
              "fala": "Faz o mesmo com a segunda palavra: 'amor'. Se forem anagramas, as duas versões ordenadas ficam idênticas.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "a",
                  "'amor'"
                ],
                [
                  "b",
                  "'roma'"
                ],
                [
                  "letrasA",
                  "'amor'"
                ],
                [
                  "letrasB",
                  "'amor'"
                ]
              ],
              "fala": "Compara as duas versões ordenadas. São iguais? return devolve True.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "a",
                  "'amor'"
                ],
                [
                  "b",
                  "'roma'"
                ],
                [
                  "letrasA",
                  "'amor'"
                ],
                [
                  "letrasB",
                  "'amor'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def anagrama(a, b):\n    letrasA = \"\".join(___(a))        # qual função ordena as letras?\n    letrasB = \"\".join(sorted(___))   # qual palavra ordenar aqui?\n    return letrasA ___ letrasB       # qual operador compara se são iguais?\n",
          "testes": [
            {
              "in": [
                "amor",
                "roma"
              ],
              "out": true
            },
            {
              "in": [
                "abc",
                "abd"
              ],
              "out": false
            },
            {
              "in": [
                "listen",
                "silent"
              ],
              "out": true
            },
            {
              "in": [
                "a",
                "aa"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "exame-a": {
    "conceito": "Contar a frequência com um dicionário",
    "porque": "Para achar o primeiro caractere que não se repete, é preciso saber quantas vezes cada um aparece. Isso exige duas passadas pelo texto: na primeira, você conta; na segunda, volta ao começo e pega o primeiro que foi contado uma vez só.",
    "analogia": "É como achar a única pessoa de camisa vermelha numa fila: primeiro você conta quantas camisas de cada cor existem (anotando numa folha) e depois percorre a fila do começo, parando na primeira pessoa cuja cor aparece uma vez só.",
    "ideias": [
      {
        "titulo": "Dicionário",
        "texto": "Uma coleção de pares chave: valor. Aqui, cada letra é uma chave e o valor é quantas vezes ela apareceu."
      },
      {
        "titulo": "Duas passadas",
        "texto": "A primeira passada junta a informação (a contagem). A segunda usa essa informação para decidir, na ordem original."
      },
      {
        "titulo": "Valor padrão",
        "texto": "Quando a letra ainda não está no dicionário, ela vale 0: a primeira vez que aparece vira 1."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const contagem = {};",
            "explica": "As chaves { } vazias criam um objeto vazio, uma coleção de pares chave: valor. Aqui, cada letra será uma chave e o valor será quantas vezes ela apareceu."
          },
          {
            "trecho": "contagem[letra] = (contagem[letra] || 0) + 1;",
            "explica": "contagem[letra] lê o valor da chave. Se a letra ainda não existe, o resultado é undefined, e o || 0 troca por 0. Soma 1 e guarda de volta na mesma chave."
          },
          {
            "trecho": "for (const letra of texto) {",
            "explica": "O segundo laço percorre o texto de novo, desde o começo, para respeitar a ordem original."
          },
          {
            "trecho": "if (contagem[letra] === 1) {",
            "explica": "Confere se a letra apareceu uma única vez. O primeiro que passar é a resposta, e o return dentro do laço encerra a função."
          },
          {
            "trecho": "return \"\";",
            "explica": "Se o laço terminou sem achar nenhuma, devolve um texto vazio."
          }
        ],
        "demo": {
          "entrada": "primeiroUnico(\"aabc\")",
          "codigo": [
            "function primeiroUnico(texto) {",
            "  const contagem = {};",
            "  for (const letra of texto) {",
            "    contagem[letra] = (contagem[letra] || 0) + 1;",
            "  }",
            "  for (const letra of texto) {",
            "    if (contagem[letra] === 1) {",
            "      return letra;",
            "    }",
            "  }",
            "  return \"\";",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ]
              ],
              "fala": "O Criador chama primeiroUnico(\"aabc\"). Procura o primeiro caractere que não se repete."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{}"
                ]
              ],
              "fala": "Cria um dicionário vazio para anotar quantas vezes cada letra aparece: {}."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = \"a\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 1}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Soma 1 à contagem da letra \"a\". Agora o dicionário é {a: 1}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 1}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = \"a\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Soma 1 à contagem da letra \"a\". Agora o dicionário é {a: 2}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2}"
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = \"b\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1}"
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "Soma 1 à contagem da letra \"b\". Agora o dicionário é {a: 2, b: 1}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1}"
                ],
                [
                  "letra",
                  "\"c\""
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = \"c\"."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"c\""
                ]
              ],
              "fala": "Soma 1 à contagem da letra \"c\". Agora o dicionário é {a: 2, b: 1, c: 1}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ]
              ],
              "fala": "Terminou a primeira passada. O dicionário já sabe quantas vezes cada letra aparece."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Segunda passada, de novo desde o começo: letra = \"a\"."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "A letra \"a\" aparece uma vez só? Não, ela se repete. Segue para a próxima."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "Segunda passada, de novo desde o começo: letra = \"a\"."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"a\""
                ]
              ],
              "fala": "A letra \"a\" aparece uma vez só? Não, ela se repete. Segue para a próxima."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "Segunda passada, de novo desde o começo: letra = \"b\"."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "A letra \"b\" aparece uma vez só? Sim, é a primeira que não se repete."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "return devolve \"b\": a primeira letra com contagem 1.",
              "dano": true
            },
            {
              "linha": 7,
              "vars": [
                [
                  "texto",
                  "\"aabc\""
                ],
                [
                  "contagem",
                  "{a: 2, b: 1, c: 1}"
                ],
                [
                  "letra",
                  "\"b\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1700
        },
        "guiado": {
          "starter": "function primeiroUnico(texto) {\n  const contagem = {};\n  for (const letra of texto) {\n    contagem[letra] = (contagem[letra] || ___) + ___;   // valor padrão? quanto somar?\n  }\n  for (const letra of ___) {                            // o que percorrer de novo?\n    if (contagem[letra] === ___) {                      // aparece quantas vezes?\n      return letra;\n    }\n  }\n  return ___;                                           // se todas se repetem?\n}\n",
          "testes": [
            {
              "in": [
                "aabbc"
              ],
              "out": "c"
            },
            {
              "in": [
                "abc"
              ],
              "out": "a"
            },
            {
              "in": [
                "swiss"
              ],
              "out": "w"
            },
            {
              "in": [
                "aabb"
              ],
              "out": ""
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    contagem = {}",
            "explica": "As chaves { } vazias criam um dicionário vazio, uma coleção de pares chave: valor. Aqui, cada letra será uma chave e o valor será quantas vezes ela apareceu."
          },
          {
            "trecho": "        contagem[letra] = contagem.get(letra, 0) + 1",
            "explica": "get(letra, 0) devolve o valor da chave, ou 0 se a letra ainda não existe. Soma 1 e guarda de volta na mesma chave."
          },
          {
            "trecho": "    for letra in texto:",
            "explica": "O segundo laço percorre o texto de novo, desde o começo, para respeitar a ordem original. Está no mesmo nível do primeiro (4 espaços), e não dentro dele."
          },
          {
            "trecho": "        if contagem[letra] == 1:",
            "explica": "Confere se a letra apareceu uma única vez. O primeiro que passar é a resposta, e o return dentro do laço encerra a função."
          },
          {
            "trecho": "    return \"\"",
            "explica": "Só 4 espaços: fora dos laços. Se terminaram sem achar nenhuma, devolve um texto vazio."
          }
        ],
        "demo": {
          "entrada": "primeiroUnico('aabc')",
          "codigo": [
            "def primeiroUnico(texto):",
            "    contagem = {}",
            "    for letra in texto:",
            "        contagem[letra] = contagem.get(letra, 0) + 1",
            "    for letra in texto:",
            "        if contagem[letra] == 1:",
            "            return letra",
            "    return \"\""
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ]
              ],
              "fala": "O Criador chama primeiroUnico(\"aabc\"). Procura o primeiro caractere que não se repete."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{}"
                ]
              ],
              "fala": "Cria um dicionário vazio para anotar quantas vezes cada letra aparece: {}."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = 'a'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 1}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Soma 1 à contagem da letra 'a'. Agora o dicionário é {'a': 1}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 1}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = 'a'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Soma 1 à contagem da letra 'a'. Agora o dicionário é {'a': 2}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2}"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = 'b'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1}"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "Soma 1 à contagem da letra 'b'. Agora o dicionário é {'a': 2, 'b': 1}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1}"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "Primeira passada: pega a próxima letra do texto, letra = 'c'."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "Soma 1 à contagem da letra 'c'. Agora o dicionário é {'a': 2, 'b': 1, 'c': 1}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'c'"
                ]
              ],
              "fala": "Terminou a primeira passada. O dicionário já sabe quantas vezes cada letra aparece."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Segunda passada, de novo desde o começo: letra = 'a'."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "A letra 'a' aparece uma vez só? Não, ela se repete. Segue para a próxima."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "Segunda passada, de novo desde o começo: letra = 'a'."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'a'"
                ]
              ],
              "fala": "A letra 'a' aparece uma vez só? Não, ela se repete. Segue para a próxima."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "Segunda passada, de novo desde o começo: letra = 'b'."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "A letra 'b' aparece uma vez só? Sim, é a primeira que não se repete."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "return devolve 'b': a primeira letra com contagem 1.",
              "dano": true
            },
            {
              "linha": 6,
              "vars": [
                [
                  "texto",
                  "'aabc'"
                ],
                [
                  "contagem",
                  "{'a': 2, 'b': 1, 'c': 1}"
                ],
                [
                  "letra",
                  "'b'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 1700
        },
        "guiado": {
          "starter": "def primeiroUnico(texto):\n    contagem = {}\n    for letra in texto:\n        contagem[letra] = contagem.get(letra, ___) + ___   # valor padrão? quanto somar?\n    for letra in ___:                                      # o que percorrer de novo?\n        if contagem[letra] == ___:                         # aparece quantas vezes?\n            return letra\n    return ___                                             # se todas se repetem?\n",
          "testes": [
            {
              "in": [
                "aabbc"
              ],
              "out": "c"
            },
            {
              "in": [
                "abc"
              ],
              "out": "a"
            },
            {
              "in": [
                "swiss"
              ],
              "out": "w"
            },
            {
              "in": [
                "aabb"
              ],
              "out": ""
            }
          ]
        }
      }
    }
  },
  "sec-xss": {
    "conceito": "Nunca confie na entrada: escape o que é perigoso",
    "porque": "Quando um site mostra um texto digitado por alguém, o navegador pode entender partes dele como código. Um atacante escreve <script> num comentário e, se o site não tratar, o código roda no navegador de quem ler. A defesa é escapar: trocar os caracteres especiais por versões inofensivas, que aparecem como texto.",
    "analogia": "É como passar a correspondência por um detector antes de abrir: carta é carta, mas o que parecer uma ordem escondida é neutralizado. Aqui, os símbolos que dariam ordens ao navegador viram símbolos que só aparecem na tela.",
    "ideias": [
      {
        "titulo": "XSS",
        "texto": "Ataque em que um texto malicioso vira código na página de outras pessoas. Nasce de confiar no que o usuário digita."
      },
      {
        "titulo": "Escapar",
        "texto": "Trocar < por &lt;, > por &gt; e & por &amp;. O navegador mostra o símbolo, mas não o interpreta como comando."
      },
      {
        "titulo": "A ordem importa",
        "texto": "O & vem primeiro: se ele fosse trocado depois, o & dos códigos novos (&lt;, &gt;) também seria alterado e tudo quebraria."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let seguro = texto.replaceAll(\"&\", \"&amp;\");",
            "explica": "replaceAll(procurar, trocarPor) devolve um texto novo com TODAS as ocorrências trocadas. O texto original não muda, por isso guardamos o resultado numa variável (let, porque ela vai mudar nas próximas linhas)."
          },
          {
            "trecho": "seguro = seguro.replaceAll(\"<\", \"&lt;\");",
            "explica": "Aqui a variável já existe (sem let) e recebe o resultado da nova troca, partindo do que já tinha sido trocado. Cada linha corrige mais um caractere perigoso."
          },
          {
            "trecho": "return seguro;",
            "explica": "Devolve o texto já tratado. Quem chamar a função usa essa versão na página, nunca a original."
          }
        ],
        "demo": {
          "entrada": "sanitizarHtml(\"<b>E&M</b>\")",
          "codigo": [
            "function sanitizarHtml(texto) {",
            "  let seguro = texto.replaceAll(\"&\", \"&amp;\");",
            "  seguro = seguro.replaceAll(\"<\", \"&lt;\");",
            "  seguro = seguro.replaceAll(\">\", \"&gt;\");",
            "  return seguro;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "\"<b>E&M</b>\""
                ]
              ],
              "fala": "O Criador chama sanitizarHtml(\"<b>E&M</b>\"). Se esse texto fosse direto para a página, o navegador leria o <b> como código."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "\"<b>E&M</b>\""
                ],
                [
                  "seguro",
                  "\"<b>E&amp;M</b>\""
                ]
              ],
              "fala": "Primeiro troca o & por &amp;. Se trocasse o < e o > antes, o & dos códigos novos (&lt; e &gt;) seria trocado de novo. Agora: \"<b>E&amp;M</b>\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"<b>E&M</b>\""
                ],
                [
                  "seguro",
                  "\"&lt;b>E&amp;M&lt;/b>\""
                ]
              ],
              "fala": "Troca cada < por &lt;. Agora: \"&lt;b>E&amp;M&lt;/b>\".",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "texto",
                  "\"<b>E&M</b>\""
                ],
                [
                  "seguro",
                  "\"&lt;b&gt;E&amp;M&lt;/b&gt;\""
                ]
              ],
              "fala": "Troca cada > por &gt;. Agora: \"&lt;b&gt;E&amp;M&lt;/b&gt;\". Não sobrou nenhum < ou > cru.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "\"<b>E&M</b>\""
                ],
                [
                  "seguro",
                  "\"&lt;b&gt;E&amp;M&lt;/b&gt;\""
                ]
              ],
              "fala": "return devolve o texto seguro: \"&lt;b&gt;E&amp;M&lt;/b&gt;\". O navegador mostra isso como texto, em vez de executar como código."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "texto",
                  "\"<b>E&M</b>\""
                ],
                [
                  "seguro",
                  "\"&lt;b&gt;E&amp;M&lt;/b&gt;\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function sanitizarHtml(texto) {\n  let seguro = texto.replaceAll(\"&\", ___);     // por qual código trocar o &? (comece sempre por ele)\n  seguro = seguro.replaceAll(___, \"&lt;\");     // qual símbolo vira &lt;?\n  seguro = seguro.replaceAll(\">\", ___);        // por qual código trocar o >?\n  return ___;                                  // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                "<script>"
              ],
              "out": "&lt;script&gt;"
            },
            {
              "in": [
                "a & b"
              ],
              "out": "a &amp; b"
            },
            {
              "in": [
                "ola"
              ],
              "out": "ola"
            }
          ]
        }
      }
    }
  },
  "sec-senha": {
    "conceito": "Validar a entrada com regras claras",
    "porque": "Senha curta ou só de números é fácil de adivinhar. Em vez de confiar que o usuário escolheu bem, o programa confere regras objetivas: tamanho mínimo, pelo menos uma letra e pelo menos um número. Cada regra vira uma pergunta de sim ou não, e a senha só passa se todas as respostas forem sim.",
    "analogia": "É como o segurança de uma festa conferindo três itens na entrada: convite, documento e pulseira. Se faltar um deles, não entra. Cada item é uma pergunta de sim ou não, e todos precisam ser sim.",
    "ideias": [
      {
        "titulo": "Regra = pergunta de sim ou não",
        "texto": "Cada exigência da senha vira uma condição que dá true ou false."
      },
      {
        "titulo": "Expressão regular",
        "texto": "Um padrão que descreve que tipo de texto procurar, como 'alguma letra' ou 'algum número'."
      },
      {
        "titulo": "E lógico (&&)",
        "texto": "Só dá true quando TODAS as condições ligadas por ele são verdadeiras."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const compridaAbastante = senha.length >= 8;",
            "explica": "length é o tamanho do texto. O sinal >= pergunta 'é maior ou igual a'. O resultado é true ou false e fica guardado na variável."
          },
          {
            "trecho": "const temLetra = /[a-zA-Z]/.test(senha);",
            "explica": "Entre as barras / / fica um padrão (expressão regular). [a-zA-Z] significa 'qualquer letra de a até z, minúscula ou maiúscula'. O .test(senha) pergunta se o padrão aparece em algum lugar da senha e responde true ou false."
          },
          {
            "trecho": "const temNumero = /[0-9]/.test(senha);",
            "explica": "Mesma ideia: [0-9] é 'qualquer dígito de 0 a 9'."
          },
          {
            "trecho": "return compridaAbastante && temLetra && temNumero;",
            "explica": "&& é o E lógico: só é true quando as três respostas são true. Se uma falhar, a senha é recusada."
          }
        ],
        "demo": {
          "entrada": "senhaForte(\"abcd1234\")",
          "codigo": [
            "function senhaForte(senha) {",
            "  const compridaAbastante = senha.length >= 8;",
            "  const temLetra = /[a-zA-Z]/.test(senha);",
            "  const temNumero = /[0-9]/.test(senha);",
            "  return compridaAbastante && temLetra && temNumero;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "senha",
                  "\"abcd1234\""
                ]
              ],
              "fala": "O Criador chama senhaForte(\"abcd1234\"). Vai conferir três regras, uma por vez."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "senha",
                  "\"abcd1234\""
                ],
                [
                  "compridaAbastante",
                  "true"
                ]
              ],
              "fala": "A senha tem pelo menos 8 caracteres? A resposta é true.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "senha",
                  "\"abcd1234\""
                ],
                [
                  "compridaAbastante",
                  "true"
                ],
                [
                  "temLetra",
                  "true"
                ]
              ],
              "fala": "Tem pelo menos uma letra? O padrão [a-zA-Z] procura qualquer letra. Resposta: true.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "senha",
                  "\"abcd1234\""
                ],
                [
                  "compridaAbastante",
                  "true"
                ],
                [
                  "temLetra",
                  "true"
                ],
                [
                  "temNumero",
                  "true"
                ]
              ],
              "fala": "Tem pelo menos um número? O padrão [0-9] procura qualquer dígito. Resposta: true.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "senha",
                  "\"abcd1234\""
                ],
                [
                  "compridaAbastante",
                  "true"
                ],
                [
                  "temLetra",
                  "true"
                ],
                [
                  "temNumero",
                  "true"
                ]
              ],
              "fala": "O && só dá true se as três respostas forem true. Aqui o resultado é true: a senha é forte."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "senha",
                  "\"abcd1234\""
                ],
                [
                  "compridaAbastante",
                  "true"
                ],
                [
                  "temLetra",
                  "true"
                ],
                [
                  "temNumero",
                  "true"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function senhaForte(senha) {\n  const compridaAbastante = senha.length >= ___;      // quantos caracteres no mínimo?\n  const temLetra = /[a-zA-Z]/.test(___);             // o que testar?\n  const temNumero = /[0-9]/.___(senha);              // qual método testa o padrão?\n  return compridaAbastante ___ temLetra && temNumero;   // qual operador exige as duas?\n}\n",
          "testes": [
            {
              "in": [
                "abc"
              ],
              "out": false
            },
            {
              "in": [
                "abcd1234"
              ],
              "out": true
            },
            {
              "in": [
                "12345678"
              ],
              "out": false
            },
            {
              "in": [
                "abcdefgh"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "sec-exame-e": {
    "conceito": "Validar o formato com uma expressão regular",
    "porque": "Um e-mail precisa ter a forma algo@algo.algo, sem espaços. Em vez de escrever várias comparações à mão, descrevemos essa forma num padrão e perguntamos se o texto combina com ele. Validar o formato antes de usar a informação é uma defesa básica contra entradas malformadas e maliciosas.",
    "analogia": "É como um gabarito furado: você encosta o gabarito na folha e só passa se cada parte do texto encaixar nos buracos, na ordem certa: nome, arroba, domínio, ponto, final.",
    "ideias": [
      {
        "titulo": "Padrão de formato",
        "texto": "A expressão regular descreve a 'forma' do texto: o que vem antes e depois do @ e onde precisa haver um ponto."
      },
      {
        "titulo": "Âncoras ^ e $",
        "texto": "^ marca o começo e $ marca o fim: o texto INTEIRO precisa combinar, e não só um pedaço."
      },
      {
        "titulo": "Várias regras",
        "texto": "Uma regra simples (sem espaços) e uma de formato, ligadas por &&."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const semEspaco = !email.includes(\" \");",
            "explica": "includes(\" \") pergunta se o e-mail contém um espaço. O ! na frente inverte a resposta: queremos true quando NÃO tem espaço."
          },
          {
            "trecho": "const formato = /^[^@]+@[^@]+\\.[^@]+$/.test(email);",
            "explica": "Leia por partes: ^ começo; [^@]+ um ou mais caracteres que não são @ (o usuário); @ a arroba; [^@]+ o domínio; \\. um ponto de verdade (a barra tira o poder especial do ponto); [^@]+ o final; $ fim. Se o texto não encaixar, .test devolve false."
          },
          {
            "trecho": "return semEspaco && formato;",
            "explica": "Só é válido se as duas regras forem verdadeiras ao mesmo tempo."
          }
        ],
        "demo": {
          "entrada": "ehEmailValido(\"user@site.com\")",
          "codigo": [
            "function ehEmailValido(email) {",
            "  const semEspaco = !email.includes(\" \");",
            "  const formato = /^[^@]+@[^@]+\\.[^@]+$/.test(email);",
            "  return semEspaco && formato;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "email",
                  "\"user@site.com\""
                ]
              ],
              "fala": "O Criador chama ehEmailValido(\"user@site.com\"). Duas regras: sem espaços e no formato certo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "email",
                  "\"user@site.com\""
                ],
                [
                  "semEspaco",
                  "true"
                ]
              ],
              "fala": "Confere que não há espaço no e-mail. O resultado é true.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "email",
                  "\"user@site.com\""
                ],
                [
                  "semEspaco",
                  "true"
                ],
                [
                  "formato",
                  "true"
                ]
              ],
              "fala": "O padrão exige: algo, um @, algo, um ponto e algo no final. O e-mail combina? true.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "email",
                  "\"user@site.com\""
                ],
                [
                  "semEspaco",
                  "true"
                ],
                [
                  "formato",
                  "true"
                ]
              ],
              "fala": "As duas regras precisam ser verdadeiras: return devolve true.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "email",
                  "\"user@site.com\""
                ],
                [
                  "semEspaco",
                  "true"
                ],
                [
                  "formato",
                  "true"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function ehEmailValido(email) {\n  const semEspaco = ___email.includes(\" \");           // qual símbolo inverte a resposta?\n  const formato = /^[^@]+@[^@]+\\.[^@]+$/.___(email);   // qual método testa o padrão?\n  return semEspaco ___ formato;                      // qual operador exige as duas?\n}\n",
          "testes": [
            {
              "in": [
                "user@site.com"
              ],
              "out": true
            },
            {
              "in": [
                "a@b"
              ],
              "out": false
            },
            {
              "in": [
                "semarroba.com"
              ],
              "out": false
            },
            {
              "in": [
                "a b@c.com"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "sec-cartao": {
    "conceito": "Mostrar só o necessário",
    "porque": "Dados sensíveis, como o número do cartão, nunca devem aparecer inteiros na tela, em logs ou em e-mails. A regra é mostrar só o suficiente para a pessoa se reconhecer, como os quatro últimos dígitos, e esconder o resto com asteriscos.",
    "analogia": "É como o recibo da loja: ele mostra '**** 5678' e não o cartão inteiro. Quem lê consegue conferir se é o seu cartão, mas ninguém consegue copiar o número.",
    "ideias": [
      {
        "titulo": "Mínimo necessário",
        "texto": "Mostre o menor pedaço de informação que resolve o problema. O resto fica escondido."
      },
      {
        "titulo": "Cortar o texto",
        "texto": "slice(-4) pega os quatro últimos caracteres, contando a partir do fim."
      },
      {
        "titulo": "Repetir um símbolo",
        "texto": "\"*\".repeat(n) cria um texto com n asteriscos."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const ultimos = numero.slice(-4);",
            "explica": "slice corta um pedaço do texto. Com um número negativo, a contagem começa do fim: slice(-4) devolve os 4 últimos caracteres."
          },
          {
            "trecho": "const escondidos = \"*\".repeat(numero.length - ultimos.length);",
            "explica": "repeat(n) repete o texto n vezes: \"*\".repeat(3) dá \"***\". A quantidade é o tamanho do número menos o tamanho do pedaço que vai aparecer."
          },
          {
            "trecho": "return escondidos + ultimos;",
            "explica": "O + junta os dois textos: primeiro os asteriscos, depois os dígitos que podem aparecer."
          }
        ],
        "demo": {
          "entrada": "mascaraCartao(\"1234567812345678\")",
          "codigo": [
            "function mascaraCartao(numero) {",
            "  const ultimos = numero.slice(-4);",
            "  const escondidos = \"*\".repeat(numero.length - ultimos.length);",
            "  return escondidos + ultimos;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "numero",
                  "\"1234567812345678\""
                ]
              ],
              "fala": "O Criador chama mascaraCartao(\"1234567812345678\"). O número inteiro nunca pode aparecer."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "numero",
                  "\"1234567812345678\""
                ],
                [
                  "ultimos",
                  "\"5678\""
                ]
              ],
              "fala": "Guarda só os quatro últimos dígitos, que são o que pode ser mostrado: \"5678\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "numero",
                  "\"1234567812345678\""
                ],
                [
                  "ultimos",
                  "\"5678\""
                ],
                [
                  "escondidos",
                  "\"************\""
                ]
              ],
              "fala": "Calcula quantos dígitos precisam ser escondidos (o tamanho do número menos 4) e cria essa quantidade de asteriscos: \"************\".",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "numero",
                  "\"1234567812345678\""
                ],
                [
                  "ultimos",
                  "\"5678\""
                ],
                [
                  "escondidos",
                  "\"************\""
                ]
              ],
              "fala": "Junta os asteriscos com os quatro últimos dígitos. return devolve \"************5678\".",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "numero",
                  "\"1234567812345678\""
                ],
                [
                  "ultimos",
                  "\"5678\""
                ],
                [
                  "escondidos",
                  "\"************\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function mascaraCartao(numero) {\n  const ultimos = numero.slice(___);                                   // como pegar os 4 últimos?\n  const escondidos = \"*\".___(numero.length - ultimos.length);          // qual método repete o texto?\n  return escondidos ___ ultimos;                                       // qual operador junta textos?\n}\n",
          "testes": [
            {
              "in": [
                "1234567812345678"
              ],
              "out": "************5678"
            },
            {
              "in": [
                "4111111111111111"
              ],
              "out": "************1111"
            },
            {
              "in": [
                "1234"
              ],
              "out": "1234"
            }
          ]
        }
      }
    }
  },
  "sec-idade": {
    "conceito": "Validar antes de converter",
    "porque": "Formulários mandam tudo como texto, e o texto pode ser qualquer coisa: letras, número negativo, decimal. Antes de usar como número, é preciso conferir que o texto é mesmo um inteiro e que está numa faixa razoável. Só depois se converte. Quem converte primeiro e confere depois deixa passar lixo.",
    "analogia": "É como o guichê de um banco que confere o documento antes de abrir a conta: primeiro olha se é um documento de verdade, depois se os dados fazem sentido. Só então aceita.",
    "ideias": [
      {
        "titulo": "Entrada é texto",
        "texto": "Tudo que vem de um formulário chega como texto, mesmo que pareça número."
      },
      {
        "titulo": "Validar primeiro",
        "texto": "Confira o formato antes de converter, e a faixa antes de aceitar."
      },
      {
        "titulo": "null = recusado",
        "texto": "Devolver null é o jeito de dizer 'esse valor não serve'."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "if (!/^\\d+$/.test(valor)) {",
            "explica": "O padrão ^\\d+$ significa 'do começo ao fim, só dígitos (\\d), um ou mais (+)'. O ! inverte: o if entra quando o texto NÃO é só dígitos. Isso já recusa letras, sinal de menos e decimais."
          },
          {
            "trecho": "return null;",
            "explica": "null quer dizer 'nada, valor recusado'. O return encerra a função na hora."
          },
          {
            "trecho": "const idade = Number(valor);",
            "explica": "Só agora, com o formato garantido, convertemos o texto em número com Number(...)."
          },
          {
            "trecho": "if (idade > 120) {",
            "explica": "Segunda defesa: mesmo sendo inteiro, precisa estar na faixa. Como o formato já exclui negativos, só falta o limite de cima."
          }
        ],
        "demo": {
          "entrada": "validaIdade(\"25\")",
          "codigo": [
            "function validaIdade(valor) {",
            "  if (!/^\\d+$/.test(valor)) {",
            "    return null;",
            "  }",
            "  const idade = Number(valor);",
            "  if (idade > 120) {",
            "    return null;",
            "  }",
            "  return idade;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "valor",
                  "\"25\""
                ]
              ],
              "fala": "O Criador chama validaIdade(\"25\"). Chega como texto, e precisa ser conferido antes de virar número."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "valor",
                  "\"25\""
                ]
              ],
              "fala": "O texto \"25\" é só dígitos? Sim, passou da primeira checagem e o programa pula o bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "valor",
                  "\"25\""
                ],
                [
                  "idade",
                  "25"
                ]
              ],
              "fala": "Agora que é seguro, converte o texto em número: idade = 25.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "valor",
                  "\"25\""
                ],
                [
                  "idade",
                  "25"
                ]
              ],
              "fala": "25 é maior que 120? Não, está dentro da faixa e o programa pula o bloco."
            },
            {
              "linha": 8,
              "vars": [
                [
                  "valor",
                  "\"25\""
                ],
                [
                  "idade",
                  "25"
                ]
              ],
              "fala": "Passou nas duas checagens, então return devolve a idade: 25.",
              "dano": true
            },
            {
              "linha": 8,
              "vars": [
                [
                  "valor",
                  "\"25\""
                ],
                [
                  "idade",
                  "25"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function validaIdade(valor) {\n  if (!/^\\d+$/.___(valor)) {      // qual método testa o padrão?\n    return ___;                   // o que devolver quando o formato é inválido?\n  }\n  const idade = ___(valor);       // qual função converte texto em número?\n  if (idade > ___) {              // qual o limite de cima?\n    return null;\n  }\n  return idade;\n}\n",
          "testes": [
            {
              "in": [
                "25"
              ],
              "out": 25
            },
            {
              "in": [
                "abc"
              ],
              "out": null
            },
            {
              "in": [
                "-5"
              ],
              "out": null
            },
            {
              "in": [
                "121"
              ],
              "out": null
            },
            {
              "in": [
                "0"
              ],
              "out": 0
            }
          ]
        }
      }
    }
  },
  "sec-exame-d": {
    "conceito": "Injeção de SQL e o escape de aspas",
    "porque": "Se um programa monta um comando de banco de dados juntando texto digitado pelo usuário, uma aspa simples no meio do texto pode fechar o texto e permitir que o atacante escreva comandos seus. Uma primeira defesa é dobrar cada aspa simples, para que ela seja lida como parte do texto. (No mundo real, o ideal é usar consultas parametrizadas.)",
    "analogia": "É como uma frase entre aspas num livro: se o texto tiver uma aspa dentro, você a duplica para o leitor entender que a citação continua. Sem isso, a citação seria encerrada no lugar errado.",
    "ideias": [
      {
        "titulo": "Injeção de SQL",
        "texto": "O atacante escreve comandos de banco de dados dentro de um campo que deveria ter só um nome ou número."
      },
      {
        "titulo": "Dobrar a aspa",
        "texto": "Trocar ' por '' faz o banco entender a aspa como parte do texto."
      },
      {
        "titulo": "Defesa em camadas",
        "texto": "O escape ajuda, mas o mais seguro é nunca montar SQL juntando textos: use parâmetros."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const escapado = valor.replaceAll(\"'\", \"''\");",
            "explica": "replaceAll troca TODAS as ocorrências. O primeiro texto é o que se procura (uma aspa simples, entre aspas duplas) e o segundo é o que entra no lugar (duas aspas simples)."
          },
          {
            "trecho": "return escapado;",
            "explica": "Devolve a versão tratada, que é a única que pode ser usada no comando."
          }
        ],
        "demo": {
          "entrada": "escapaSql(\"O'Brien\")",
          "codigo": [
            "function escapaSql(valor) {",
            "  const escapado = valor.replaceAll(\"'\", \"''\");",
            "  return escapado;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "valor",
                  "\"O'Brien\""
                ]
              ],
              "fala": "O Criador chama escapaSql(\"O'Brien\"). A aspa simples no meio do nome é o perigo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "valor",
                  "\"O'Brien\""
                ],
                [
                  "escapado",
                  "\"O''Brien\""
                ]
              ],
              "fala": "Troca cada aspa simples por duas. O banco passa a entender as duas como uma só aspa dentro do texto: \"O''Brien\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "valor",
                  "\"O'Brien\""
                ],
                [
                  "escapado",
                  "\"O''Brien\""
                ]
              ],
              "fala": "return devolve o texto tratado: \"O''Brien\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "valor",
                  "\"O'Brien\""
                ],
                [
                  "escapado",
                  "\"O''Brien\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function escapaSql(valor) {\n  const escapado = valor.replaceAll(___, \"''\");   // qual caractere procurar?\n  return ___;                                     // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                "O'Brien"
              ],
              "out": "O''Brien"
            },
            {
              "in": [
                "normal"
              ],
              "out": "normal"
            },
            {
              "in": [
                "'"
              ],
              "out": "''"
            }
          ]
        }
      }
    }
  },
  "dat-total": {
    "conceito": "Somar uma coluna de uma base de dados",
    "porque": "Dados quase sempre chegam como uma lista de registros, como linhas de uma planilha. Para responder 'quanto vendemos no total?', você percorre as linhas, calcula o valor de cada uma (preço × quantidade) e vai somando num total.",
    "analogia": "É como somar a nota fiscal de uma compra: você passa linha por linha, multiplica o preço pela quantidade e acumula o resultado no fim da conta.",
    "ideias": [
      {
        "titulo": "Base (lista de objetos)",
        "texto": "Uma tabela em código: cada item da lista é uma linha, e cada campo do objeto é uma coluna."
      },
      {
        "titulo": "Objeto",
        "texto": "Um registro com campos nomeados, como { produto: 'Espada', preco: 100 }. Para ler um campo, use o ponto: venda.preco."
      },
      {
        "titulo": "Acumulador",
        "texto": "Uma variável que começa em 0 e vai crescendo a cada linha."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "for (const venda of vendas) {",
            "explica": "Percorre a base: a cada volta, venda recebe a próxima linha, que é um objeto com os campos da venda."
          },
          {
            "trecho": "total += venda.preco * venda.qtd;",
            "explica": "venda.preco lê o campo preco do objeto (o ponto acessa um campo). O * multiplica. O += soma o resultado ao que já estava em total."
          },
          {
            "trecho": "return total;",
            "explica": "Fora do laço: devolve a soma depois que todas as linhas foram visitadas."
          }
        ],
        "demo": {
          "entrada": "totalVendas([{produto: \"Espada\", preco: 100, qtd: 2}, {produto: \"Escudo\", preco: 80, qtd: 3}])",
          "codigo": [
            "function totalVendas(vendas) {",
            "  let total = 0;",
            "  for (const venda of vendas) {",
            "    total += venda.preco * venda.qtd;",
            "  }",
            "  return total;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ]
              ],
              "fala": "O Criador chama totalVendas com uma base de 2 vendas. Cada venda é um objeto com produto, preço e quantidade."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "0"
                ]
              ],
              "fala": "Cria o total começando em 0."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ]
              ],
              "fala": "O laço pega a próxima venda da base: venda = {produto: \"Espada\", preco: 100, qtd: 2}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "200"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ]
              ],
              "fala": "Calcula preco × qtd desta venda e soma ao total. Agora total = 200.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "200"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "O laço pega a próxima venda da base: venda = {produto: \"Escudo\", preco: 80, qtd: 3}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "440"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "Calcula preco × qtd desta venda e soma ao total. Agora total = 440.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "440"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "440"
                ]
              ],
              "fala": "return devolve a receita total: 440."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "a base (2 vendas)"
                ],
                [
                  "total",
                  "440"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function totalVendas(vendas) {\n  let total = ___;                              // começa em quanto?\n  for (const venda of ___) {                    // o que percorrer?\n    total += venda.preco * venda.___;           // qual campo multiplica o preço?\n  }\n  return ___;                                   // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "X",
                    "preco": 10,
                    "qtd": 3
                  }
                ]
              ],
              "out": 30
            },
            {
              "in": [
                []
              ],
              "out": 0
            },
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 5,
                    "qtd": 2
                  },
                  {
                    "produto": "B",
                    "preco": 1,
                    "qtd": 4
                  }
                ]
              ],
              "out": 14
            }
          ]
        }
      }
    }
  },
  "dat-conta": {
    "conceito": "Filtrar e contar",
    "porque": "Para responder 'quantos itens são desta categoria?', você percorre a base e, em cada linha, pergunta se o campo categoria é a que procuramos. Só as linhas que passam no teste entram na contagem. É o jeito de transformar uma tabela grande numa resposta pequena.",
    "analogia": "É como separar as meias por cor: você passa por todas, olha a cor de cada uma e só marca um risquinho quando é a cor pedida. No fim, os risquinhos são a resposta.",
    "ideias": [
      {
        "titulo": "Base (lista de objetos)",
        "texto": "Uma tabela em código: cada item da lista é uma linha, e cada campo do objeto é uma coluna."
      },
      {
        "titulo": "Condição sobre um campo",
        "texto": "Comparar venda.categoria com o valor procurado dá true ou false."
      },
      {
        "titulo": "Contador condicional",
        "texto": "Só aumenta nas voltas em que a condição é verdadeira."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "function contaPorCategoria(vendas, categoria) {",
            "explica": "A função recebe dois parâmetros, separados por vírgula: a base e o valor que estamos procurando."
          },
          {
            "trecho": "if (venda.categoria === categoria) {",
            "explica": "venda.categoria lê o campo do objeto. O === compara se os dois valores são exatamente iguais. O bloco só roda para as linhas que combinam."
          },
          {
            "trecho": "contador += 1;",
            "explica": "Soma 1 ao contador. Fica dentro do if, por isso só conta as vendas da categoria."
          }
        ],
        "demo": {
          "entrada": "contaPorCategoria([{produto: \"Espada\", categoria: \"arma\"}, {produto: \"Escudo\", categoria: \"defesa\"}, {produto: \"Arco\", categoria: \"arma\"}], \"arma\")",
          "codigo": [
            "function contaPorCategoria(vendas, categoria) {",
            "  let contador = 0;",
            "  for (const venda of vendas) {",
            "    if (venda.categoria === categoria) {",
            "      contador += 1;",
            "    }",
            "  }",
            "  return contador;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ]
              ],
              "fala": "O Criador chama contaPorCategoria com uma base de 3 vendas e a categoria \"arma\"."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "0"
                ]
              ],
              "fala": "Cria o contador em 0."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", categoria: \"arma\"}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Espada\", categoria: \"arma\"}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "0"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", categoria: \"arma\"}"
                ]
              ],
              "fala": "A categoria desta venda é igual a \"arma\"? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", categoria: \"arma\"}"
                ]
              ],
              "fala": "Achou uma venda da categoria! O contador agora vale 1.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", categoria: \"defesa\"}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Escudo\", categoria: \"defesa\"}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", categoria: \"defesa\"}"
                ]
              ],
              "fala": "A categoria desta venda é igual a \"arma\"? Não, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", categoria: \"arma\"}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Arco\", categoria: \"arma\"}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "1"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", categoria: \"arma\"}"
                ]
              ],
              "fala": "A categoria desta venda é igual a \"arma\"? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "2"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", categoria: \"arma\"}"
                ]
              ],
              "fala": "Achou uma venda da categoria! O contador agora vale 2.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "2"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "2"
                ]
              ],
              "fala": "return devolve o contador: 2 itens."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "categoria",
                  "\"arma\""
                ],
                [
                  "contador",
                  "2"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function contaPorCategoria(vendas, categoria) {\n  let contador = 0;\n  for (const venda of vendas) {\n    if (venda.___ === categoria) {        // qual campo comparar?\n      contador += ___;                    // quanto somar?\n    }\n  }\n  return ___;                             // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "categoria": "x"
                  },
                  {
                    "produto": "B",
                    "categoria": "y"
                  },
                  {
                    "produto": "C",
                    "categoria": "x"
                  }
                ],
                "x"
              ],
              "out": 2
            },
            {
              "in": [
                [],
                "x"
              ],
              "out": 0
            }
          ]
        }
      }
    }
  },
  "dat-exame-e": {
    "conceito": "Achar o maior valor e devolver outro campo",
    "porque": "Achar o produto mais caro é o mesmo raciocínio de achar o maior número, mas agora cada item é um objeto. Guardamos o objeto campeão inteiro e comparamos os preços; no fim, devolvemos o NOME dele, e não o preço.",
    "analogia": "É como um torneio: o primeiro competidor é o campeão, e cada novo é comparado com ele pelo preço. Quem ganhar assume o título. No fim, você anuncia o nome do campeão.",
    "ideias": [
      {
        "titulo": "Objeto",
        "texto": "Um registro com campos nomeados, como { produto: 'Espada', preco: 100 }. Para ler um campo, use o ponto: venda.preco."
      },
      {
        "titulo": "Campeão é um objeto",
        "texto": "Guardamos o registro inteiro, e não só o número, para poder devolver outro campo depois."
      },
      {
        "titulo": "Devolver um campo",
        "texto": "campeao.produto devolve só o nome."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let campeao = vendas[0];",
            "explica": "vendas[0] é o primeiro objeto da lista (as posições começam em 0). Guardamos o objeto inteiro."
          },
          {
            "trecho": "if (venda.preco > campeao.preco) {",
            "explica": "Compara o campo preco dos dois objetos. O > pergunta se o da esquerda é maior. Em caso de empate a condição é falsa, e o primeiro continua campeão, como o enunciado pede."
          },
          {
            "trecho": "return campeao.produto;",
            "explica": "Devolve apenas o campo produto do campeão, o nome."
          }
        ],
        "demo": {
          "entrada": "maisCaro([{produto: \"Espada\", preco: 100}, {produto: \"Arco\", preco: 140}, {produto: \"Elmo\", preco: 90}])",
          "codigo": [
            "function maisCaro(vendas) {",
            "  let campeao = vendas[0];",
            "  for (const venda of vendas) {",
            "    if (venda.preco > campeao.preco) {",
            "      campeao = venda;",
            "    }",
            "  }",
            "  return campeao.produto;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ]
              ],
              "fala": "O Criador chama maisCaro com uma base de 3 vendas."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "Elege a primeira venda como campeã por enquanto: campeao = {produto: \"Espada\", preco: 100}."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Espada\", preco: 100}"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Espada\", preco: 100}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Espada\", preco: 100}"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "O preço desta venda é maior que o do campeão? Não, o campeão continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Espada\", preco: 100}"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Arco\", preco: 140}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Espada\", preco: 100}"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "O preço desta venda é maior que o do campeão? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Arco\", preco: 140}"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "O novo campeão é {produto: \"Arco\", preco: 140}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Arco\", preco: 140}"
                ],
                [
                  "venda",
                  "{produto: \"Elmo\", preco: 90}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Elmo\", preco: 90}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Arco\", preco: 140}"
                ],
                [
                  "venda",
                  "{produto: \"Elmo\", preco: 90}"
                ]
              ],
              "fala": "O preço desta venda é maior que o do campeão? Não, o campeão continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "return devolve o NOME do campeão, e não o objeto inteiro: \"Arco\".",
              "dano": true
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "campeao",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function maisCaro(vendas) {\n  let campeao = vendas[___];                 // qual posição é a primeira?\n  for (const venda of vendas) {\n    if (venda.preco ___ campeao.preco) {     // quando o campeão é trocado?\n      campeao = ___;                         // quem vira o campeão?\n    }\n  }\n  return campeao.___;                        // qual campo devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 5
                  }
                ]
              ],
              "out": "A"
            },
            {
              "in": [
                [
                  {
                    "produto": "X",
                    "preco": 1
                  },
                  {
                    "produto": "Y",
                    "preco": 3
                  },
                  {
                    "produto": "Z",
                    "preco": 3
                  }
                ]
              ],
              "out": "Y"
            }
          ]
        }
      }
    }
  },
  "dat-filtra": {
    "conceito": "Filtrar uma base e montar uma lista nova",
    "porque": "Às vezes a resposta não é um número, e sim uma lista: quais produtos custam mais que um limite? Você percorre a base, testa cada linha e, quando passa, coloca o nome numa lista nova, preservando a ordem em que aparecem.",
    "analogia": "É como uma peneira: passa por ela só o que atende à regra, e o que sobra no prato é a sua lista.",
    "ideias": [
      {
        "titulo": "Base (lista de objetos)",
        "texto": "Uma tabela em código: cada item da lista é uma linha, e cada campo do objeto é uma coluna."
      },
      {
        "titulo": "Lista nova",
        "texto": "Começa vazia ([]) e ganha itens com push, um por vez."
      },
      {
        "titulo": "Mesma ordem",
        "texto": "Como percorremos a base do começo ao fim, os nomes saem na ordem original."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const nomes = [];",
            "explica": "Os colchetes vazios [] criam uma lista vazia. Usamos const porque a variável continua apontando para a mesma lista (o conteúdo dela é que muda)."
          },
          {
            "trecho": "nomes.push(venda.produto);",
            "explica": "push coloca um item no fim da lista. Aqui entra o nome do produto, não o objeto inteiro."
          },
          {
            "trecho": "return nomes;",
            "explica": "Devolve a lista montada, na ordem em que os itens foram adicionados."
          }
        ],
        "demo": {
          "entrada": "filtraAcima([{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 140}], 90)",
          "codigo": [
            "function filtraAcima(vendas, limite) {",
            "  const nomes = [];",
            "  for (const venda of vendas) {",
            "    if (venda.preco > limite) {",
            "      nomes.push(venda.produto);",
            "    }",
            "  }",
            "  return nomes;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ]
              ],
              "fala": "O Criador chama filtraAcima com uma base de 3 vendas e o limite 90."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[]"
                ]
              ],
              "fala": "Cria a lista de resultados, ainda vazia: nomes = []."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[]"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Espada\", preco: 100}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[]"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "O preço é maior que o limite (90)? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "Coloca o nome do produto no fim da lista: nomes = [\"Espada\"].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Escudo\", preco: 80}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80}"
                ]
              ],
              "fala": "O preço é maior que o limite (90)? Não, então o programa pula o bloco."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Arco\", preco: 140}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "O preço é maior que o limite (90)? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Arco\"]"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140}"
                ]
              ],
              "fala": "Coloca o nome do produto no fim da lista: nomes = [\"Espada\", \"Arco\"].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Arco\"]"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Arco\"]"
                ]
              ],
              "fala": "return devolve a lista de nomes: [\"Espada\", \"Arco\"]."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "limite",
                  "90"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Arco\"]"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function filtraAcima(vendas, limite) {\n  const nomes = ___;                         // como criar uma lista vazia?\n  for (const venda of vendas) {\n    if (venda.preco ___ limite) {            // quando o produto entra na lista?\n      nomes.___(venda.produto);              // qual método coloca no fim da lista?\n    }\n  }\n  return ___;                                // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 10
                  },
                  {
                    "produto": "B",
                    "preco": 50
                  },
                  {
                    "produto": "C",
                    "preco": 70
                  }
                ],
                20
              ],
              "out": [
                "B",
                "C"
              ]
            },
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 10
                  }
                ],
                20
              ],
              "out": []
            }
          ]
        }
      }
    }
  },
  "dat-media": {
    "conceito": "Média: somar e dividir, com cuidado",
    "porque": "A média é a soma dos valores dividida pela quantidade. Dois cuidados: com a base vazia não dá para dividir (a resposta combinada é 0), e o resultado precisa ser arredondado para o inteiro mais próximo.",
    "analogia": "É como dividir a conta do restaurante: soma tudo e divide pelo número de pessoas. Se ninguém foi, não há o que dividir.",
    "ideias": [
      {
        "titulo": "Caso especial",
        "texto": "Base vazia é tratada logo no começo, antes de qualquer divisão."
      },
      {
        "titulo": "Média",
        "texto": "soma ÷ quantidade. A quantidade é o tamanho da lista (vendas.length)."
      },
      {
        "titulo": "Arredondar",
        "texto": "Math.round leva ao inteiro mais próximo: 21,67 vira 22."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "if (vendas.length === 0) {",
            "explica": "length é o tamanho da lista. Com 0 itens, devolvemos 0 antes de tentar dividir."
          },
          {
            "trecho": "soma += venda.preco;",
            "explica": "Acumula só o preço de cada venda (aqui a quantidade não entra)."
          },
          {
            "trecho": "return Math.round(soma / vendas.length);",
            "explica": "soma / vendas.length é a média, que pode ter casas decimais (21,666...). Math.round arredonda para o inteiro mais próximo."
          }
        ],
        "demo": {
          "entrada": "mediaPreco([{produto: \"A\", preco: 10}, {produto: \"B\", preco: 20}, {produto: \"C\", preco: 35}])",
          "codigo": [
            "function mediaPreco(vendas) {",
            "  if (vendas.length === 0) {",
            "    return 0;",
            "  }",
            "  let soma = 0;",
            "  for (const venda of vendas) {",
            "    soma += venda.preco;",
            "  }",
            "  return Math.round(soma / vendas.length);",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ]
              ],
              "fala": "O Criador chama mediaPreco com uma base de 3 vendas."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ]
              ],
              "fala": "A base está vazia? Não, então dá para calcular a média e o programa pula o bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "0"
                ]
              ],
              "fala": "Cria a soma dos preços começando em 0."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "0"
                ],
                [
                  "venda",
                  "{produto: \"A\", preco: 10}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"A\", preco: 10}."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "10"
                ],
                [
                  "venda",
                  "{produto: \"A\", preco: 10}"
                ]
              ],
              "fala": "Soma o preço desta venda: soma = 10.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "10"
                ],
                [
                  "venda",
                  "{produto: \"B\", preco: 20}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"B\", preco: 20}."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "30"
                ],
                [
                  "venda",
                  "{produto: \"B\", preco: 20}"
                ]
              ],
              "fala": "Soma o preço desta venda: soma = 30.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "30"
                ],
                [
                  "venda",
                  "{produto: \"C\", preco: 35}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"C\", preco: 35}."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "65"
                ],
                [
                  "venda",
                  "{produto: \"C\", preco: 35}"
                ]
              ],
              "fala": "Soma o preço desta venda: soma = 65.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "65"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 8,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "65"
                ]
              ],
              "fala": "Divide a soma pela quantidade de vendas e arredonda para o inteiro mais próximo. return devolve 22.",
              "dano": true
            },
            {
              "linha": 8,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "soma",
                  "65"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function mediaPreco(vendas) {\n  if (vendas.length === ___) {                 // quando a base está vazia?\n    return 0;\n  }\n  let soma = 0;\n  for (const venda of vendas) {\n    soma += venda.___;                         // qual campo somar?\n  }\n  return Math.___(soma / vendas.length);       // qual método arredonda para o mais próximo?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 10
                  },
                  {
                    "produto": "B",
                    "preco": 20
                  }
                ]
              ],
              "out": 15
            },
            {
              "in": [
                []
              ],
              "out": 0
            },
            {
              "in": [
                [
                  {
                    "produto": "C",
                    "preco": 7
                  }
                ]
              ],
              "out": 7
            }
          ]
        }
      }
    }
  },
  "dat-exame-d": {
    "conceito": "Comparar pelo valor calculado",
    "porque": "O produto mais caro não é, necessariamente, o que mais rendeu: a receita é preço × quantidade. Para achar o maior, calculamos esse valor para cada linha e comparamos, guardando sempre o melhor visto até agora.",
    "analogia": "É um ranking de faturamento: cada produto entra com a sua receita (o que cobra vezes o que vendeu), e quem faturou mais assume o topo.",
    "ideias": [
      {
        "titulo": "Valor calculado",
        "texto": "O critério de comparação não é um campo pronto, e sim uma conta com dois campos."
      },
      {
        "titulo": "Melhor até agora",
        "texto": "Guardamos o objeto vencedor e o trocamos quando aparece um que fatura mais."
      },
      {
        "titulo": "Empate",
        "texto": "Com >, quem chegou primeiro permanece. Isso resolve o empate como o enunciado pede."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "if (venda.preco * venda.qtd > melhor.preco * melhor.qtd) {",
            "explica": "Os dois lados do > são contas: a receita desta venda contra a receita da melhor até agora. A multiplicação é feita antes da comparação."
          },
          {
            "trecho": "melhor = venda;",
            "explica": "Troca a melhor guardando o objeto inteiro da venda atual."
          },
          {
            "trecho": "return melhor.produto;",
            "explica": "Devolve só o nome do produto vencedor."
          }
        ],
        "demo": {
          "entrada": "topProduto([{produto: \"Espada\", preco: 100, qtd: 2}, {produto: \"Escudo\", preco: 80, qtd: 3}, {produto: \"Arco\", preco: 140, qtd: 1}])",
          "codigo": [
            "function topProduto(vendas) {",
            "  let melhor = vendas[0];",
            "  for (const venda of vendas) {",
            "    if (venda.preco * venda.qtd > melhor.preco * melhor.qtd) {",
            "      melhor = venda;",
            "    }",
            "  }",
            "  return melhor.produto;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ]
              ],
              "fala": "O Criador chama topProduto com uma base de 3 vendas. O melhor é quem tem a maior receita (preço × quantidade)."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ]
              ],
              "fala": "Elege a primeira venda como a melhor por enquanto: melhor = {produto: \"Espada\", preco: 100, qtd: 2}."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Espada\", preco: 100, qtd: 2}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ]
              ],
              "fala": "A receita desta venda é maior que a da melhor até agora? Não, a melhor continua a mesma."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Escudo\", preco: 80, qtd: 3}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Espada\", preco: 100, qtd: 2}"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "A receita desta venda é maior que a da melhor até agora? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "A nova melhor é {produto: \"Escudo\", preco: 80, qtd: 3}.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140, qtd: 1}"
                ]
              ],
              "fala": "O laço pega a próxima venda: venda = {produto: \"Arco\", preco: 140, qtd: 1}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 140, qtd: 1}"
                ]
              ],
              "fala": "A receita desta venda é maior que a da melhor até agora? Não, a melhor continua a mesma."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "return devolve o NOME do produto vencedor: \"Escudo\".",
              "dano": true
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "a base (3 vendas)"
                ],
                [
                  "melhor",
                  "{produto: \"Escudo\", preco: 80, qtd: 3}"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function topProduto(vendas) {\n  let melhor = vendas[0];\n  for (const venda of vendas) {\n    if (venda.preco * venda.___ > melhor.preco * melhor.qtd) {   // qual campo completa a receita?\n      melhor = ___;                                              // quem vira a melhor?\n    }\n  }\n  return melhor.___;                                             // qual campo devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 10,
                    "qtd": 1
                  },
                  {
                    "produto": "B",
                    "preco": 5,
                    "qtd": 4
                  }
                ]
              ],
              "out": "B"
            },
            {
              "in": [
                [
                  {
                    "produto": "S",
                    "preco": 1,
                    "qtd": 1
                  }
                ]
              ],
              "out": "S"
            }
          ]
        }
      }
    }
  },
  "orac-explica": {
    "conceito": "Um bom prompt diz o quê, para quem e como",
    "porque": "A IA responde ao que você escreveu, e não ao que você pensou. Um pedido vago ('o que é variável?') recebe uma resposta genérica. Quando você diz a tarefa, para quem é a resposta e como quer receber, ela acerta muito mais.",
    "analogia": "É como pedir um prato a um cozinheiro: 'faça comida' resulta numa surpresa. 'Faça um macarrão simples, sem pimenta, para uma criança' resulta no prato certo.",
    "ideias": [
      {
        "titulo": "Tarefa clara",
        "texto": "Comece pelo verbo e pelo assunto: explique, resuma, compare."
      },
      {
        "titulo": "Público",
        "texto": "Dizer para quem é a resposta muda o vocabulário e o nível de detalhe."
      },
      {
        "titulo": "Exemplo ou analogia",
        "texto": "Pedir uma analogia faz o conceito ficar fácil de lembrar."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Diga o que quer",
            "explica": "Comece pela tarefa: 'Explique o que é uma variável'. Sem tarefa clara, a IA adivinha."
          },
          {
            "trecho": "Diga para quem é",
            "explica": "A mesma explicação muda conforme o leitor. 'Para quem nunca programou' faz a IA evitar termos técnicos."
          },
          {
            "trecho": "Peça uma analogia",
            "explica": "Uma comparação com o dia a dia ajuda o iniciante a entender sem decorar."
          },
          {
            "trecho": "Dê detalhe",
            "explica": "Pedido de meia frase deixa a IA adivinhar. Um pouco mais de contexto já melhora a resposta."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Define o público (iniciante/leigo)",
            "Pede explicação clara do conceito",
            "Pede uma analogia ou exemplo",
            "Tem detalhe suficiente (não é vago)"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. O Criador vai montá-lo por partes, e cada parte cumpre um requisito."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Explique o que é uma variável em programação.",
              "novo": "Explique o que é uma variável em programação.",
              "atende": [
                false,
                true,
                false,
                false
              ],
              "fala": "Primeiro a tarefa, bem direta: explicar um conceito. Isso já cumpre o requisito de pedir a explicação.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Explique o que é uma variável em programação. A explicação é para alguém que nunca programou.",
              "novo": " A explicação é para alguém que nunca programou.",
              "atende": [
                true,
                true,
                false,
                true
              ],
              "fala": "Agora diz para quem é. Com o público definido, a IA escolhe palavras simples. O prompt também já tem detalhe suficiente.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Explique o que é uma variável em programação. A explicação é para alguém que nunca programou. Use uma analogia do dia a dia, como se a variável fosse uma caixinha com etiqueta.",
              "novo": " Use uma analogia do dia a dia, como se a variável fosse uma caixinha com etiqueta.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "Por fim, pede uma analogia, e até sugere uma. Quanto mais específico o pedido, melhor a resposta.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Explique o que é uma variável em programação. A explicação é para alguém que nunca programou. Use uma analogia do dia a dia, como se a variável fosse uma caixinha com etiqueta.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "Explique o que é uma ___ em programação. A explicação é para alguém que ___. Use uma ___ do dia a dia para ilustrar."
        }
      }
    }
  },
  "orac-resumo": {
    "conceito": "Tamanho e formato: tire a ambiguidade",
    "porque": "'Resuma isso' é um pedido ambíguo: um resumo pode ter uma frase ou uma página, em parágrafo ou em lista. Quando você define o tamanho e o formato, a IA entrega exatamente o que cabe no seu uso.",
    "analogia": "É como pedir ao motorista de aplicativo: 'me leve para lá' não funciona. Com endereço e horário, ele chega ao lugar certo na hora certa.",
    "ideias": [
      {
        "titulo": "Limite de tamanho",
        "texto": "Diga quanto: no máximo 3 frases, 50 palavras, 5 tópicos."
      },
      {
        "titulo": "Formato da saída",
        "texto": "Diga como: em tópicos, em tabela, em um parágrafo."
      },
      {
        "titulo": "Menos retrabalho",
        "texto": "Definir antes evita pedir para refazer depois."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Peça a ação",
            "explica": "O verbo importa: 'resuma' e 'sintetize' deixam claro o que fazer com o texto."
          },
          {
            "trecho": "Defina o tamanho",
            "explica": "Limites como 'no máximo 3 frases' ou 'em até 50 palavras' impedem respostas longas demais."
          },
          {
            "trecho": "Defina o formato",
            "explica": "Tópicos, tabela e parágrafo são formatos diferentes. Escolha o que você vai usar."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Pede o resumo explicitamente",
            "Define tamanho/limite",
            "Define o formato da saída",
            "Tem detalhe suficiente"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Repare como cada parte tira uma dúvida da IA."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Resuma o texto abaixo.",
              "novo": "Resuma o texto abaixo.",
              "atende": [
                true,
                false,
                false,
                false
              ],
              "fala": "A tarefa: resumir. Mas ainda não diz quanto nem como, e a IA teria que adivinhar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Resuma o texto abaixo. O resumo deve ter no máximo 3 frases.",
              "novo": " O resumo deve ter no máximo 3 frases.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "Agora o tamanho está definido: no máximo 3 frases. Isso também começa a fixar o formato.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Resuma o texto abaixo. O resumo deve ter no máximo 3 frases. Escreva o resumo em tópicos curtos, um por ideia principal.",
              "novo": " Escreva o resumo em tópicos curtos, um por ideia principal.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "E o formato fica explícito: tópicos curtos, um para cada ideia. A resposta vem pronta para usar."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Resuma o texto abaixo. O resumo deve ter no máximo 3 frases. Escreva o resumo em tópicos curtos, um por ideia principal.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ o texto abaixo em, no máximo, ___ frases. Entregue o resultado em ___, um por ideia principal."
        }
      }
    }
  },
  "orac-exame-e": {
    "conceito": "As cinco partes de um prompt forte",
    "porque": "Para tarefas maiores, um prompt forte combina cinco partes: um papel para a IA, o contexto da situação, as restrições, o formato da resposta e um exemplo do que você espera. Faltando uma, a IA preenche o espaço com suposições.",
    "analogia": "É como um briefing para uma agência: quem vai fazer o trabalho (papel), para quem e por quê (contexto), o que não pode (restrições), como entregar (formato) e uma referência do que você gosta (exemplo).",
    "ideias": [
      {
        "titulo": "Papel",
        "texto": "'Aja como um designer web' muda o jeito de a IA pensar e responder."
      },
      {
        "titulo": "Contexto e restrições",
        "texto": "Quanto mais claro o cenário e os limites, menos suposição."
      },
      {
        "titulo": "Formato e exemplo",
        "texto": "Mostrar a forma da resposta quase elimina mal-entendidos."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Papel",
            "explica": "Comece com 'Aja como...' ou 'Você é um...' e diga a especialidade."
          },
          {
            "trecho": "Contexto",
            "explica": "Quem é a pessoa, o que quer conseguir e para quem a página se destina."
          },
          {
            "trecho": "Restrições",
            "explica": "O que usar e o que evitar: tecnologias, idioma, tamanho."
          },
          {
            "trecho": "Formato da saída",
            "explica": "Como você quer receber: um arquivo, uma lista, blocos de código."
          },
          {
            "trecho": "Exemplo",
            "explica": "Uma amostra curta da estrutura esperada alinha a IA com o que você imagina."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Dá um papel/persona à IA",
            "Dá contexto suficiente",
            "Define restrições",
            "Define o formato da saída",
            "Inclui um exemplo"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Vamos construir as cinco partes, uma de cada vez."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um designer web experiente.",
              "novo": "Aja como um designer web experiente.",
              "atende": [
                true,
                false,
                false,
                false,
                false
              ],
              "fala": "Parte 1, o papel. Isso coloca a IA no ponto de vista de quem entende do assunto.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um designer web experiente. Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato.",
              "novo": " Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato.",
              "atende": [
                true,
                true,
                false,
                false,
                false
              ],
              "fala": "Parte 2, o contexto: quem é a pessoa, o que ela quer e quem vai ler. Agora a IA sabe o objetivo da página.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um designer web experiente. Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato. Restrições: use apenas HTML e CSS, sem JavaScript, e escreva os textos em português.",
              "novo": " Restrições: use apenas HTML e CSS, sem JavaScript, e escreva os textos em português.",
              "atende": [
                true,
                true,
                true,
                false,
                false
              ],
              "fala": "Parte 3, as restrições: o que pode e o que não pode. Isso evita surpresas na entrega.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um designer web experiente. Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato. Restrições: use apenas HTML e CSS, sem JavaScript, e escreva os textos em português. Entregue o resultado em um único arquivo, com o código em um bloco e comentários em cada seção.",
              "novo": " Entregue o resultado em um único arquivo, com o código em um bloco e comentários em cada seção.",
              "atende": [
                true,
                true,
                true,
                true,
                false
              ],
              "fala": "Parte 4, o formato: como você quer receber a resposta.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um designer web experiente. Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato. Restrições: use apenas HTML e CSS, sem JavaScript, e escreva os textos em português. Entregue o resultado em um único arquivo, com o código em um bloco e comentários em cada seção. Exemplo da estrutura esperada: cabeçalho com nome, lista de projetos e rodapé com contatos.",
              "novo": " Exemplo da estrutura esperada: cabeçalho com nome, lista de projetos e rodapé com contatos.",
              "atende": [
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "Parte 5, o exemplo: uma amostra da estrutura que você imagina. Agora as cinco partes estão no prompt.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um designer web experiente. Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato. Restrições: use apenas HTML e CSS, sem JavaScript, e escreva os textos em português. Entregue o resultado em um único arquivo, com o código em um bloco e comentários em cada seção. Exemplo da estrutura esperada: cabeçalho com nome, lista de projetos e rodapé com contatos.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ como um designer web experiente.\nCrie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato.\nRestrições: use ___ HTML e CSS, sem JavaScript, e escreva os textos em português.\nEntregue o resultado em um único arquivo, com o código separado por ___.\n___ da estrutura esperada: cabeçalho com nome, lista de projetos e rodapé com contatos."
        }
      }
    }
  },
  "orac-imagem": {
    "conceito": "Prompt de imagem: assunto, estilo, cores e enquadramento",
    "porque": "IAs de imagem precisam de mais descrição visual do que de texto: sem estilo, cores e enquadramento, cada tentativa sai diferente. Um bom prompt de imagem funciona como direção de arte.",
    "analogia": "É como encomendar uma ilustração a um artista: você diz o que quer ver (assunto), em que estilo, com que cores e como a cena é vista. Sem isso, o artista escolhe tudo sozinho.",
    "ideias": [
      {
        "titulo": "Assunto",
        "texto": "O que aparece na imagem, descrito com detalhes concretos."
      },
      {
        "titulo": "Estilo e cores",
        "texto": "Pixel art, 16 bits, paleta escura, tons de azul. Palavras visuais guiam o resultado."
      },
      {
        "titulo": "Enquadramento e fundo",
        "texto": "De frente, corpo inteiro, fundo transparente: facilita usar a arte depois."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Assunto",
            "explica": "Quem ou o quê, e o que está fazendo. Quanto mais concreto, melhor."
          },
          {
            "trecho": "Estilo",
            "explica": "Nomeie o estilo: pixel art, 16 bits, aquarela, desenho de quadrinhos."
          },
          {
            "trecho": "Cores",
            "explica": "Cite a paleta e os tons dominantes. 'Neon ciano' diz mais que 'colorido'."
          },
          {
            "trecho": "Enquadramento e fundo",
            "explica": "Como a cena é vista e o que há atrás do personagem."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Descreve o assunto da imagem",
            "Define o estilo (pixel art/8-bit etc.)",
            "Fala de cores/paleta",
            "Define enquadramento ou fundo"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Numa imagem, cada detalhe visual precisa ser dito."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra.",
              "novo": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra.",
              "atende": [
                true,
                false,
                false,
                false
              ],
              "fala": "O assunto, com detalhes concretos: de pedra, olhos brilhantes, guardando uma entrada.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra. Estilo pixel art de 16 bits, como em jogos de RPG clássicos.",
              "novo": " Estilo pixel art de 16 bits, como em jogos de RPG clássicos.",
              "atende": [
                true,
                true,
                false,
                false
              ],
              "fala": "O estilo nomeado. Sem isso, a IA escolheria um estilo qualquer.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra. Estilo pixel art de 16 bits, como em jogos de RPG clássicos. Paleta de cores escura, com tons de azul e detalhes em neon ciano.",
              "novo": " Paleta de cores escura, com tons de azul e detalhes em neon ciano.",
              "atende": [
                true,
                true,
                true,
                false
              ],
              "fala": "As cores: paleta escura e um detalhe em neon que chama a atenção.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra. Estilo pixel art de 16 bits, como em jogos de RPG clássicos. Paleta de cores escura, com tons de azul e detalhes em neon ciano. Vista de frente, corpo inteiro, sobre fundo transparente.",
              "novo": " Vista de frente, corpo inteiro, sobre fundo transparente.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O enquadramento e o fundo. O fundo transparente deixa usar a arte em qualquer cenário.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra. Estilo pixel art de 16 bits, como em jogos de RPG clássicos. Paleta de cores escura, com tons de azul e detalhes em neon ciano. Vista de frente, corpo inteiro, sobre fundo transparente.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra. ___ pixel art de 16 bits. Paleta de ___ escura, com detalhes em neon. ___ de frente, corpo inteiro, sobre fundo transparente."
        }
      }
    }
  },
  "orac-persona": {
    "conceito": "Persona: quem a IA é, como fala e o que evita",
    "porque": "Dar uma personalidade à IA muda o jeito como ela ajuda. Uma persona bem definida diz quem ela é, em que tom fala e o que ela não deve fazer. Para um tutor, o mais importante é evitar entregar a resposta pronta.",
    "analogia": "É como contratar um professor: você diz a matéria (quem é), pede que seja paciente e bem-humorado (como fala) e combina que ele ajude o aluno a pensar, em vez de dar a resposta (limite).",
    "ideias": [
      {
        "titulo": "Quem é",
        "texto": "A identidade e a especialidade da IA."
      },
      {
        "titulo": "Como fala",
        "texto": "O tom: amigável, formal, paciente, bem-humorado."
      },
      {
        "titulo": "O que evita",
        "texto": "Uma restrição de comportamento, para ela não sair do papel."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Quem é",
            "explica": "'Você é um tutor de programação chamado Zé.' Dê nome e função."
          },
          {
            "trecho": "Tom de voz",
            "explica": "Escolha como a persona fala: amigável, paciente, com bom humor."
          },
          {
            "trecho": "Restrição",
            "explica": "Diga o que evitar. Num tutor: não entregar a resposta pronta."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Define o papel/persona",
            "Define o tom/estilo de fala",
            "Define uma restrição de comportamento",
            "Tem detalhe suficiente"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Vamos criar um personagem para a IA interpretar."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Zé.",
              "novo": "Você é um tutor de programação chamado Zé.",
              "atende": [
                true,
                false,
                false,
                false
              ],
              "fala": "A identidade: um tutor com nome. Isso dá um papel claro à IA.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Zé. Fale num tom amigável e paciente, com bom humor, usando exemplos do dia a dia.",
              "novo": " Fale num tom amigável e paciente, com bom humor, usando exemplos do dia a dia.",
              "atende": [
                true,
                true,
                false,
                true
              ],
              "fala": "O tom de voz. Agora ela sabe como se comunicar, e o prompt já tem corpo suficiente.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Zé. Fale num tom amigável e paciente, com bom humor, usando exemplos do dia a dia. Evite entregar a resposta pronta: faça perguntas que levem o aluno a descobrir sozinho.",
              "novo": " Evite entregar a resposta pronta: faça perguntas que levem o aluno a descobrir sozinho.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "A restrição de comportamento. É ela que mantém o tutor útil para quem está aprendendo.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Zé. Fale num tom amigável e paciente, com bom humor, usando exemplos do dia a dia. Evite entregar a resposta pronta: faça perguntas que levem o aluno a descobrir sozinho.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ um tutor de programação chamado Zé. Fale num ___ amigável e paciente, com bom humor. ___ entregar a resposta pronta: faça perguntas que levem o aluno a descobrir sozinho."
        }
      }
    }
  },
  "orac-exame-d": {
    "conceito": "Blindar o prompt contra respostas erradas",
    "porque": "Quando o prompt é frouxo, a IA 'alucina': inventa regras, bibliotecas ou resultados que parecem certos. Para código, a defesa é ser específico: dizer o algoritmo, proibir invenções, pedir um formato conferível e mostrar um exemplo de entrada e saída para ela se testar.",
    "analogia": "É como passar uma tarefa a um estagiário esperto, mas que nunca admite que não sabe: você precisa dizer exatamente a regra, o que não pode fazer e mostrar um caso resolvido, para ele não inventar.",
    "ideias": [
      {
        "titulo": "Alucinação",
        "texto": "Resposta que parece confiável, mas foi inventada. Cresce quando o pedido é vago."
      },
      {
        "titulo": "Regras explícitas",
        "texto": "Cite o algoritmo e proíba inventar o que não foi pedido."
      },
      {
        "titulo": "Exemplo de entrada e saída",
        "texto": "Dois casos conhecidos permitem conferir se a resposta está certa."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Papel",
            "explica": "Um especialista na área: 'engenheiro de software sênior em validação de dados'."
          },
          {
            "trecho": "Contexto técnico",
            "explica": "Linguagem, o que a função deve conferir, casos a rejeitar e o algoritmo a seguir."
          },
          {
            "trecho": "Restrições",
            "explica": "Sem bibliotecas externas, sem inventar regras, idioma da resposta."
          },
          {
            "trecho": "Formato",
            "explica": "Como entregar: primeiro o código, depois uma lista explicando cada passo."
          },
          {
            "trecho": "Exemplo",
            "explica": "Um valor válido e um inválido, com o resultado esperado de cada um."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Dá um papel/persona à IA",
            "Dá contexto técnico claro",
            "Define restrições/regras",
            "Define o formato da saída",
            "Inclui exemplo de entrada/saída"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Cada parte fecha uma porta para a alucinação."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um engenheiro de software sênior especialista em validação de dados.",
              "novo": "Aja como um engenheiro de software sênior especialista em validação de dados.",
              "atende": [
                true,
                false,
                false,
                true,
                false
              ],
              "fala": "O papel: um especialista. Isso ancora a IA num jeito rigoroso de trabalhar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um engenheiro de software sênior especialista em validação de dados. Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial.",
              "novo": " Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial.",
              "atende": [
                true,
                true,
                false,
                true,
                false
              ],
              "fala": "O contexto técnico: linguagem, o que conferir e qual algoritmo usar. Quanto mais exato, menos espaço para inventar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um engenheiro de software sênior especialista em validação de dados. Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial. Restrições: não use bibliotecas externas, não invente regras além das do algoritmo e responda em português.",
              "novo": " Restrições: não use bibliotecas externas, não invente regras além das do algoritmo e responda em português.",
              "atende": [
                true,
                true,
                true,
                true,
                false
              ],
              "fala": "As restrições fecham a porta para invenções: nada de bibliotecas misteriosas nem regras novas.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um engenheiro de software sênior especialista em validação de dados. Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial. Restrições: não use bibliotecas externas, não invente regras além das do algoritmo e responda em português. Formato da saída: primeiro o código da função e depois uma lista curta explicando cada passo.",
              "novo": " Formato da saída: primeiro o código da função e depois uma lista curta explicando cada passo.",
              "atende": [
                true,
                true,
                true,
                true,
                false
              ],
              "fala": "O formato facilita conferir: o código separado da explicação."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um engenheiro de software sênior especialista em validação de dados. Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial. Restrições: não use bibliotecas externas, não invente regras além das do algoritmo e responda em português. Formato da saída: primeiro o código da função e depois uma lista curta explicando cada passo. Exemplo de entrada e saída: validaCpf('529.982.247-25') devolve true e validaCpf('111.111.111-11') devolve false.",
              "novo": " Exemplo de entrada e saída: validaCpf('529.982.247-25') devolve true e validaCpf('111.111.111-11') devolve false.",
              "atende": [
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "O exemplo com entrada e saída é o teste que a IA pode aplicar na própria resposta.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um engenheiro de software sênior especialista em validação de dados. Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial. Restrições: não use bibliotecas externas, não invente regras além das do algoritmo e responda em português. Formato da saída: primeiro o código da função e depois uma lista curta explicando cada passo. Exemplo de entrada e saída: validaCpf('529.982.247-25') devolve true e validaCpf('111.111.111-11') devolve false.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ como um engenheiro de software sênior especialista em validação de dados.\nEscreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial.\nRestrições: ___ use bibliotecas externas e não invente regras além das do algoritmo.\nFormato da saída: primeiro o código da função e depois uma ___ curta explicando cada passo.\n___ de entrada e saída: validaCpf('529.982.247-25') devolve true e validaCpf('111.111.111-11') devolve false."
        }
      }
    }
  },
  "orac-cot": {
    "conceito": "Pedir o raciocínio passo a passo",
    "porque": "Em problemas de lógica ou de conta, a IA erra menos quando é levada a raciocinar antes de responder. Pedir o passo a passo faz com que cada etapa apoie a próxima, e pedir a resposta final separada deixa fácil encontrar o resultado.",
    "analogia": "É como pedir a um aluno que mostre os cálculos na prova: ao escrever cada etapa, ele percebe erros no meio do caminho. A resposta final destacada é só o fechamento.",
    "ideias": [
      {
        "titulo": "Raciocínio explícito",
        "texto": "Pedir etapas faz a IA 'pensar em voz alta' e errar menos."
      },
      {
        "titulo": "Resposta final separada",
        "texto": "Uma linha fixa, como 'Resposta:', facilita achar e conferir o resultado."
      },
      {
        "titulo": "Tarefa clara",
        "texto": "O problema precisa estar completo, com todos os números e a pergunta."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Descreva o problema",
            "explica": "Inclua todos os dados e a pergunta exata. Faltando algo, a IA completa por conta própria."
          },
          {
            "trecho": "Peça o passo a passo",
            "explica": "'Pense passo a passo, escrevendo cada etapa antes de responder.'"
          },
          {
            "trecho": "Separe a resposta final",
            "explica": "Peça que a conclusão apareça à parte, numa linha reconhecível."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Pede raciocínio passo a passo",
            "Pede a resposta final separada",
            "Descreve a tarefa com clareza"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Vamos descrever o problema e depois guiar o raciocínio."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram?",
              "novo": "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram?",
              "atende": [
                false,
                false,
                true
              ],
              "fala": "Primeiro o problema, completo: todos os números e a pergunta. A tarefa está clara.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram? Pense passo a passo, escrevendo cada etapa do raciocínio antes de responder.",
              "novo": " Pense passo a passo, escrevendo cada etapa do raciocínio antes de responder.",
              "atende": [
                true,
                false,
                true
              ],
              "fala": "Agora pede o raciocínio por etapas. É isso que reduz os erros de conta.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram? Pense passo a passo, escrevendo cada etapa do raciocínio antes de responder. No final, dê a resposta final separada, em uma linha começando com 'Resposta:'.",
              "novo": " No final, dê a resposta final separada, em uma linha começando com 'Resposta:'.",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "E pede a conclusão separada, numa linha fácil de achar e conferir.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram? Pense passo a passo, escrevendo cada etapa do raciocínio antes de responder. No final, dê a resposta final separada, em uma linha começando com 'Resposta:'.",
              "novo": "",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram?\n___ passo a passo, escrevendo cada etapa do raciocínio antes de responder.\nNo ___, dê a resposta final separada, em uma linha começando com 'Resposta:'."
        }
      }
    }
  },
  "orac-exame-c": {
    "conceito": "Saída estruturada: quando um sistema lê a resposta",
    "porque": "Quando um programa vai ler a resposta da IA, ela precisa vir num formato exato, como JSON com campos definidos. Qualquer texto a mais ('Claro! Aqui está...') quebra a leitura. Por isso o prompt exige a estrutura e proíbe tudo além dela.",
    "analogia": "É como preencher um formulário de sistema: cada campo no seu lugar, sem comentários nas margens. Se alguém escreve um recado no meio, o sistema recusa o formulário.",
    "ideias": [
      {
        "titulo": "Formato estruturado",
        "texto": "JSON com campos nomeados que um programa consegue ler."
      },
      {
        "titulo": "Só a estrutura",
        "texto": "Proibir textos antes e depois evita erros de leitura."
      },
      {
        "titulo": "Exemplo da estrutura",
        "texto": "Mostrar o JSON esperado fixa nomes e tipos dos campos."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Papel",
            "explica": "Algo como 'gerador de dados', que reforça o tom técnico."
          },
          {
            "trecho": "Contexto",
            "explica": "O que gerar e com quais informações."
          },
          {
            "trecho": "Formato estruturado",
            "explica": "Peça JSON e liste os campos, com os nomes exatos."
          },
          {
            "trecho": "Restrições",
            "explica": "'Responda apenas com o JSON, sem texto antes ou depois.'"
          },
          {
            "trecho": "Exemplo da estrutura",
            "explica": "Um JSON de amostra, com os nomes e os tipos de cada campo."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Dá um papel/persona à IA",
            "Exige formato estruturado (JSON/campos)",
            "Define restrições (só o formato, nada além)",
            "Dá contexto suficiente",
            "Mostra um exemplo da estrutura"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Aqui a resposta vai ser lida por um programa, então precisa ser exata."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um gerador de dados para um jogo de RPG.",
              "novo": "Você é um gerador de dados para um jogo de RPG.",
              "atende": [
                true,
                false,
                false,
                false,
                false
              ],
              "fala": "O papel: um gerador, e não um conversador. Isso empurra a IA para respostas diretas.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um gerador de dados para um jogo de RPG. Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval.",
              "novo": " Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval.",
              "atende": [
                true,
                false,
                false,
                true,
                false
              ],
              "fala": "O contexto: o que gerar e com quais informações.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um gerador de dados para um jogo de RPG. Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval. Responda em JSON com os campos nome, classe, nivel e frase.",
              "novo": " Responda em JSON com os campos nome, classe, nivel e frase.",
              "atende": [
                true,
                true,
                false,
                true,
                false
              ],
              "fala": "O formato estruturado: JSON e os nomes exatos dos campos.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um gerador de dados para um jogo de RPG. Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval. Responda em JSON com os campos nome, classe, nivel e frase. Restrições: responda apenas com o JSON, sem nenhum texto antes ou depois.",
              "novo": " Restrições: responda apenas com o JSON, sem nenhum texto antes ou depois.",
              "atende": [
                true,
                true,
                true,
                true,
                false
              ],
              "fala": "A restrição que protege o sistema: nada além da estrutura.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um gerador de dados para um jogo de RPG. Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval. Responda em JSON com os campos nome, classe, nivel e frase. Restrições: responda apenas com o JSON, sem nenhum texto antes ou depois. Exemplo da estrutura: {\"nome\": \"Aria\", \"classe\": \"Maga\", \"nivel\": 3, \"frase\": \"A magia mora nos detalhes.\"}",
              "novo": " Exemplo da estrutura: {\"nome\": \"Aria\", \"classe\": \"Maga\", \"nivel\": 3, \"frase\": \"A magia mora nos detalhes.\"}",
              "atende": [
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "O exemplo da estrutura fixa nomes e tipos. Agora o sistema pode ler a resposta sem surpresas.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um gerador de dados para um jogo de RPG. Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval. Responda em JSON com os campos nome, classe, nivel e frase. Restrições: responda apenas com o JSON, sem nenhum texto antes ou depois. Exemplo da estrutura: {\"nome\": \"Aria\", \"classe\": \"Maga\", \"nivel\": 3, \"frase\": \"A magia mora nos detalhes.\"}",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ um gerador de dados para um jogo de RPG.\nCrie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval.\nResponda em ___ com os campos nome, classe, nivel e frase.\nRestrições: responda ___ com o JSON, sem nenhum texto antes ou depois.\n___ da estrutura: {\"nome\": \"Aria\", \"classe\": \"Maga\", \"nivel\": 3, \"frase\": \"A magia mora nos detalhes.\"}"
        }
      }
    }
  },
  "orac-refino": {
    "conceito": "Pedir para a IA criticar e melhorar a própria resposta",
    "porque": "A primeira resposta raramente é a melhor. Você pode pedir que a IA escreva, avalie o próprio texto segundo um critério e entregue uma versão melhorada. É uma revisão automática dentro do mesmo pedido.",
    "analogia": "É como escrever um trabalho e reler antes de entregar, com uma lista de conferência na mão: claro? conciso? correto? Corrigido o que falhou, só então você entrega.",
    "ideias": [
      {
        "titulo": "Refinar",
        "texto": "Pedir 'avalie e melhore' transforma um rascunho numa versão final."
      },
      {
        "titulo": "Critério de qualidade",
        "texto": "Sem critério, melhorar é vago. Diga o que conta: claro, conciso, correto."
      },
      {
        "titulo": "Entregar só a versão final",
        "texto": "Peça apenas o texto melhorado, para não receber os dois."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Descreva a tarefa",
            "explica": "O que escrever e para quem, com detalhe suficiente."
          },
          {
            "trecho": "Defina o critério",
            "explica": "Diga pelo que a resposta será julgada: clareza, concisão, correção."
          },
          {
            "trecho": "Peça o refinamento",
            "explica": "'Em seguida, melhore o texto' faz a IA aplicar a própria crítica."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Pede para refinar/melhorar a própria resposta",
            "Define um critério de qualidade",
            "Descreve a tarefa com clareza"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. A ideia é pedir uma resposta, a crítica e a versão melhor, tudo de uma vez."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período.",
              "novo": "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período.",
              "atende": [
                false,
                false,
                true
              ],
              "fala": "A tarefa, descrita com clareza: o que explicar e para quem.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período. Depois de escrever, avalie a própria resposta segundo este critério: ela está clara e concisa?",
              "novo": " Depois de escrever, avalie a própria resposta segundo este critério: ela está clara e concisa?",
              "atende": [
                false,
                true,
                true
              ],
              "fala": "O critério de qualidade: clara e concisa. Agora a IA sabe pelo que a sua resposta vai ser julgada.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período. Depois de escrever, avalie a própria resposta segundo este critério: ela está clara e concisa? Em seguida, melhore o texto corrigindo o que estiver confuso e entregue só a versão melhorada.",
              "novo": " Em seguida, melhore o texto corrigindo o que estiver confuso e entregue só a versão melhorada.",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "O refinamento: a IA aplica a própria crítica e devolve só a versão final.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período. Depois de escrever, avalie a própria resposta segundo este critério: ela está clara e concisa? Em seguida, melhore o texto corrigindo o que estiver confuso e entregue só a versão melhorada.",
              "novo": "",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período. Depois, ___ a própria resposta segundo o critério: ela está ___ e concisa? Em seguida, ___ o texto e entregue só a versão final."
        }
      }
    }
  },
  "orac-exame-b": {
    "conceito": "Ensinar por exemplos (few-shot)",
    "porque": "Mostrar à IA exemplos de entrada e saída ensina o padrão melhor que descrever com palavras. Com dois ou mais exemplos, ela percebe o formato e o critério e passa a responder do mesmo jeito. Essa técnica se chama few-shot.",
    "analogia": "É como treinar alguém no trabalho: em vez de explicar a regra em teoria, você mostra dois casos resolvidos. A pessoa entende o padrão e repete nos casos novos.",
    "ideias": [
      {
        "titulo": "Few-shot",
        "texto": "Dar poucos exemplos para a IA aprender o padrão da resposta."
      },
      {
        "titulo": "Exemplos variados",
        "texto": "Ao menos dois, de classes diferentes, mostram o contraste."
      },
      {
        "titulo": "Formato fixo",
        "texto": "Combinar a forma da resposta (Sentimento: ...) facilita ler o resultado."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Tarefa clara",
            "explica": "Comece dizendo o que fazer: 'Classifique o sentimento de cada frase'."
          },
          {
            "trecho": "Dois exemplos",
            "explica": "Mostre entrada e saída em pelo menos dois casos diferentes."
          },
          {
            "trecho": "Formato da resposta",
            "explica": "Diga exatamente como responder, por exemplo 'Sentimento: positivo'."
          },
          {
            "trecho": "Contexto",
            "explica": "De onde vêm as frases e para que o resultado será usado."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Dá um papel ou tarefa clara",
            "Traz pelo menos DOIS exemplos",
            "Define o formato da resposta",
            "Tem contexto suficiente"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Em vez de explicar demais, o Criador vai mostrar casos resolvidos."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Classifique o sentimento de cada frase como positivo, negativo ou neutro.",
              "novo": "Classifique o sentimento de cada frase como positivo, negativo ou neutro.",
              "atende": [
                true,
                false,
                false,
                false
              ],
              "fala": "A tarefa e as opções de resposta, bem claras.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Classifique o sentimento de cada frase como positivo, negativo ou neutro. Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo.",
              "novo": " Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo.",
              "atende": [
                true,
                false,
                false,
                true
              ],
              "fala": "O primeiro exemplo, com a entrada e a resposta esperada.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Classifique o sentimento de cada frase como positivo, negativo ou neutro. Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo. Exemplo 2: 'A entrega atrasou e o produto veio quebrado.' → negativo.",
              "novo": " Exemplo 2: 'A entrega atrasou e o produto veio quebrado.' → negativo.",
              "atende": [
                true,
                true,
                false,
                true
              ],
              "fala": "O segundo exemplo, de outra classe. Com dois, a IA já percebe o padrão.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Classifique o sentimento de cada frase como positivo, negativo ou neutro. Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo. Exemplo 2: 'A entrega atrasou e o produto veio quebrado.' → negativo. Responda no formato: Sentimento: <positivo|negativo|neutro>, sem explicações adicionais.",
              "novo": " Responda no formato: Sentimento: <positivo|negativo|neutro>, sem explicações adicionais.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O formato da resposta fica fixo, fácil de ler e de processar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Classifique o sentimento de cada frase como positivo, negativo ou neutro. Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo. Exemplo 2: 'A entrega atrasou e o produto veio quebrado.' → negativo. Responda no formato: Sentimento: <positivo|negativo|neutro>, sem explicações adicionais. Contexto: as frases são avaliações reais de clientes de uma loja online de eletrônicos.",
              "novo": " Contexto: as frases são avaliações reais de clientes de uma loja online de eletrônicos.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "E o contexto: de onde vêm as frases. Isso ajuda a IA a interpretar gírias e ironias."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Classifique o sentimento de cada frase como positivo, negativo ou neutro. Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo. Exemplo 2: 'A entrega atrasou e o produto veio quebrado.' → negativo. Responda no formato: Sentimento: <positivo|negativo|neutro>, sem explicações adicionais. Contexto: as frases são avaliações reais de clientes de uma loja online de eletrônicos.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ o sentimento de cada frase como positivo, negativo ou neutro.\nExemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo.\n___: 'A entrega atrasou e o produto veio quebrado.' → negativo.\nResponda no ___: Sentimento: <positivo|negativo|neutro>.\nContexto: as frases são avaliações reais de clientes de uma loja online de eletrônicos."
        }
      }
    }
  },
  "orac-sistema": {
    "conceito": "O prompt de sistema define o comportamento de um assistente",
    "porque": "O prompt de sistema é a instrução permanente de um assistente: vale para todas as conversas. Ele define quem o assistente é, como fala e as regras do que sempre e nunca fazer. É o lugar certo para as regras que não podem ser esquecidas.",
    "analogia": "É como o manual de conduta de um funcionário: define a função, o tom de atendimento e os limites, antes de qualquer cliente chegar.",
    "ideias": [
      {
        "titulo": "Identidade",
        "texto": "Quem o assistente é e qual é a sua função."
      },
      {
        "titulo": "Tom",
        "texto": "Como ele fala: paciente, objetivo, amigável."
      },
      {
        "titulo": "Regras permanentes",
        "texto": "O que sempre faz e o que evita, em qualquer conversa."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Identidade",
            "explica": "Nome, função e ambiente: 'tutor de programação da Masmorra do Código'."
          },
          {
            "trecho": "Tom",
            "explica": "Descreva a voz do assistente em poucas palavras."
          },
          {
            "trecho": "Sempre",
            "explica": "Comportamentos fixos: explicar o conceito antes do código, terminar com uma pergunta."
          },
          {
            "trecho": "Nunca",
            "explica": "Limites que nunca podem ser quebrados: não entregar a solução completa."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Define o papel/identidade",
            "Define o tom/estilo",
            "Define regras do que sempre/nunca fazer",
            "Tem detalhe suficiente"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Ele vai valer para todas as conversas do assistente."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Mentor, da Masmorra do Código.",
              "novo": "Você é um tutor de programação chamado Mentor, da Masmorra do Código.",
              "atende": [
                true,
                false,
                false,
                false
              ],
              "fala": "A identidade: nome, função e lugar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Mentor, da Masmorra do Código. Fale com tom paciente e objetivo, sem dar sermão.",
              "novo": " Fale com tom paciente e objetivo, sem dar sermão.",
              "atende": [
                true,
                true,
                false,
                false
              ],
              "fala": "O tom de voz. Agora o assistente sabe como se comunicar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Mentor, da Masmorra do Código. Fale com tom paciente e objetivo, sem dar sermão. Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento.",
              "novo": " Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento.",
              "atende": [
                true,
                true,
                false,
                true
              ],
              "fala": "As regras do que sempre fazer. Elas moldam toda resposta, e o prompt já tem detalhe de sobra.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Mentor, da Masmorra do Código. Fale com tom paciente e objetivo, sem dar sermão. Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento. Evite entregar a solução completa: prefira dar dicas.",
              "novo": " Evite entregar a solução completa: prefira dar dicas.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "E a regra do que evitar, para o assistente nunca virar um 'copiador de respostas'.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Você é um tutor de programação chamado Mentor, da Masmorra do Código. Fale com tom paciente e objetivo, sem dar sermão. Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento. Evite entregar a solução completa: prefira dar dicas.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "Você é um tutor de programação chamado Mentor, da Masmorra do Código. Fale com ___ paciente e objetivo, sem dar sermão. Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento. ___ entregar a solução completa: prefira dar dicas."
        }
      }
    }
  },
  "orac-exame-a": {
    "conceito": "O prompt mestre: tudo junto",
    "porque": "Aqui você reúne todas as técnicas num único prompt: papel, contexto rico, restrições, formato estruturado, um exemplo e raciocínio passo a passo. Cada parte resolve um problema diferente, e juntas elas dão o resultado mais confiável.",
    "analogia": "É como um projeto bem briefado: o especialista certo, o contexto completo, os limites combinados, a forma de entrega, uma referência e a ordem de trabalho. Nada fica para a sorte.",
    "ideias": [
      {
        "titulo": "Camadas que se somam",
        "texto": "Cada técnica cobre uma falha: papel foca, contexto situa, restrição limita, formato organiza."
      },
      {
        "titulo": "Contexto rico",
        "texto": "Quanto mais a IA sabe sobre a pessoa e o objetivo, mais personalizado o resultado."
      },
      {
        "titulo": "Raciocinar antes de montar",
        "texto": "Pedir a análise antes da resposta melhora a qualidade do plano."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Papel",
            "explica": "Um mentor de carreira com experiência relevante."
          },
          {
            "trecho": "Contexto rico",
            "explica": "Perfil da pessoa, tempo disponível e objetivo concreto."
          },
          {
            "trecho": "Restrições",
            "explica": "Tipo de material, idioma e limite de tópicos por semana."
          },
          {
            "trecho": "Formato estruturado",
            "explica": "Uma tabela com colunas definidas."
          },
          {
            "trecho": "Exemplo",
            "explica": "Uma linha de amostra da tabela."
          },
          {
            "trecho": "Passo a passo",
            "explica": "Peça para analisar antes de responder."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Dá um papel/persona à IA",
            "Dá contexto rico",
            "Define restrições",
            "Exige formato estruturado",
            "Inclui um exemplo",
            "Pede raciocínio passo a passo"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Aqui entram as seis técnicas juntas."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência.",
              "novo": "Aja como um mentor de carreira em programação com 15 anos de experiência.",
              "atende": [
                true,
                false,
                false,
                false,
                false,
                false
              ],
              "fala": "O papel: um mentor experiente.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência. Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web.",
              "novo": " Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web.",
              "atende": [
                true,
                true,
                false,
                false,
                false,
                false
              ],
              "fala": "O contexto rico: perfil, tempo disponível e objetivo. Com isso o plano deixa de ser genérico.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência. Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web. Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana.",
              "novo": " Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana.",
              "atende": [
                true,
                true,
                true,
                false,
                false,
                false
              ],
              "fala": "As restrições mantêm o plano realista e acessível.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência. Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web. Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana. Entregue em formato de tabela, com as colunas semana, tópicos, prática e entrega.",
              "novo": " Entregue em formato de tabela, com as colunas semana, tópicos, prática e entrega.",
              "atende": [
                true,
                true,
                true,
                true,
                false,
                false
              ],
              "fala": "O formato estruturado: uma tabela com colunas definidas.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência. Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web. Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana. Entregue em formato de tabela, com as colunas semana, tópicos, prática e entrega. Exemplo de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório.",
              "novo": " Exemplo de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório.",
              "atende": [
                true,
                true,
                true,
                true,
                true,
                false
              ],
              "fala": "O exemplo de uma linha fixa o nível de detalhe esperado.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência. Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web. Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana. Entregue em formato de tabela, com as colunas semana, tópicos, prática e entrega. Exemplo de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório. Antes de responder, pense passo a passo: avalie o nível da estudante, priorize o essencial e só então monte a tabela.",
              "novo": " Antes de responder, pense passo a passo: avalie o nível da estudante, priorize o essencial e só então monte a tabela.",
              "atende": [
                true,
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "E o raciocínio por etapas, para a IA analisar antes de montar. Estão todas as seis camadas.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Aja como um mentor de carreira em programação com 15 anos de experiência. Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web. Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana. Entregue em formato de tabela, com as colunas semana, tópicos, prática e entrega. Exemplo de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório. Antes de responder, pense passo a passo: avalie o nível da estudante, priorize o essencial e só então monte a tabela.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ],
          "ritmo": 2600
        },
        "guiado": {
          "starter": "___ como um mentor de carreira em programação com 15 anos de experiência.\nMonte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web.\nRestrições: use ___ materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana.\nEntregue em formato de ___, com as colunas semana, tópicos, prática e entrega.\n___ de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório.\nAntes de responder, pense ___: avalie o nível da estudante, priorize o essencial e só então monte a tabela."
        }
      }
    }
  },
  "dano": {
    "conceito": "Funções com mais de um valor",
    "porque": "Até agora a função recebia um valor só. Muita coisa precisa de dois ou mais: o dano de um golpe depende da força do ataque E da defesa de quem apanha. Você lista os parâmetros separados por vírgula, e a função usa todos eles na conta.",
    "analogia": "É como uma receita que pede dois ingredientes: sem um deles, o prato não sai. Cada parâmetro é um ingrediente, e a ordem em que você entrega os valores é a ordem da lista.",
    "ideias": [
      {
        "titulo": "Vários parâmetros",
        "texto": "Separados por vírgula: danoFinal(ataque, defesa). Quem chama entrega os valores na mesma ordem."
      },
      {
        "titulo": "Ordem importa",
        "texto": "danoFinal(30, 12) é diferente de danoFinal(12, 30): o primeiro valor vai para o primeiro parâmetro."
      },
      {
        "titulo": "Conta com os dois",
        "texto": "Dentro da função, os parâmetros são variáveis comuns. Aqui, ataque - defesa."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "function danoFinal(ataque, defesa) {",
            "explica": "Os parâmetros ficam entre os parênteses, separados por vírgula. Aqui a função recebe dois valores e dá um nome a cada um."
          },
          {
            "trecho": "const perda = ataque - defesa;",
            "explica": "O - subtrai. O resultado é guardado numa variável chamada perda."
          },
          {
            "trecho": "return perda;",
            "explica": "Devolve o resultado para quem chamou a função."
          }
        ],
        "demo": {
          "entrada": "danoFinal(30, 12)",
          "codigo": [
            "function danoFinal(ataque, defesa) {",
            "  const perda = ataque - defesa;",
            "  return perda;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ]
              ],
              "fala": "O Criador chama danoFinal(30, 12). O 30 vai para ataque e o 12 vai para defesa, na ordem."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ],
                [
                  "perda",
                  "18"
                ]
              ],
              "fala": "A armadura absorve parte do golpe: 30 - 12 = 18. É a vida que se perde.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ],
                [
                  "perda",
                  "18"
                ]
              ],
              "fala": "return devolve 18 para quem chamou.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ],
                [
                  "perda",
                  "18"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function danoFinal(ataque, defesa) {\n  const perda = ataque ___ defesa;   // qual operação?\n  return ___;                        // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                30,
                12
              ],
              "out": 18
            },
            {
              "in": [
                50,
                50
              ],
              "out": 0
            },
            {
              "in": [
                100,
                1
              ],
              "out": 99
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "def danoFinal(ataque, defesa):",
            "explica": "Os parâmetros ficam entre os parênteses, separados por vírgula. Aqui a função recebe dois valores e dá um nome a cada um."
          },
          {
            "trecho": "    perda = ataque - defesa",
            "explica": "O - subtrai. O resultado é guardado numa variável chamada perda."
          },
          {
            "trecho": "    return perda",
            "explica": "Devolve o resultado para quem chamou a função."
          }
        ],
        "demo": {
          "entrada": "danoFinal(30, 12)",
          "codigo": [
            "def danoFinal(ataque, defesa):",
            "    perda = ataque - defesa",
            "    return perda"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ]
              ],
              "fala": "O Criador chama danoFinal(30, 12). O 30 vai para ataque e o 12 vai para defesa, na ordem."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ],
                [
                  "perda",
                  "18"
                ]
              ],
              "fala": "A armadura absorve parte do golpe: 30 - 12 = 18. É a vida que se perde.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ],
                [
                  "perda",
                  "18"
                ]
              ],
              "fala": "return devolve 18 para quem chamou.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "ataque",
                  "30"
                ],
                [
                  "defesa",
                  "12"
                ],
                [
                  "perda",
                  "18"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def danoFinal(ataque, defesa):\n    perda = ataque ___ defesa   # qual operação?\n    return ___                  # o que devolver?\n",
          "testes": [
            {
              "in": [
                30,
                12
              ],
              "out": 18
            },
            {
              "in": [
                50,
                50
              ],
              "out": 0
            },
            {
              "in": [
                100,
                1
              ],
              "out": 99
            }
          ]
        }
      }
    }
  },
  "cura": {
    "conceito": "Decisões: o if muda o caminho do programa",
    "porque": "Até aqui o programa sempre fazia a mesma coisa, de cima para baixo. Com o if, ele passa a decidir: se uma condição for verdadeira, executa um bloco extra; se não for, pula. É assim que o programa reage a situações diferentes, como uma poção que não pode curar além do máximo.",
    "analogia": "É como um semáforo para o seu código: se o sinal está verde, passa; se não, espera. A condição é a pergunta 'o sinal está verde?', e só a resposta 'sim' libera o bloco.",
    "ideias": [
      {
        "titulo": "Condição",
        "texto": "Uma pergunta que só tem duas respostas: verdadeiro ou falso. Por exemplo, total > 100."
      },
      {
        "titulo": "if",
        "texto": "Executa o bloco só quando a condição for verdadeira. Se for falsa, o bloco é pulado."
      },
      {
        "titulo": "Limite",
        "texto": "Um uso clássico: se passou do máximo, volte ao máximo. A vida nunca passa de 100."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let total = vida + pocao;",
            "explica": "let cria uma variável que vai poder mudar depois. Aqui ela começa com a soma da vida com a poção."
          },
          {
            "trecho": "if (total > 100) {",
            "explica": "if executa o bloco entre chaves só quando a condição entre parênteses for verdadeira. O > pergunta se o da esquerda é maior que o da direita."
          },
          {
            "trecho": "total = 100;",
            "explica": "Está dentro do if, então só roda quando passou do máximo. Sem let, porque a variável já existe: aqui só trocamos o valor dela."
          },
          {
            "trecho": "return total;",
            "explica": "Está depois do if, então roda sempre: devolve o total, corrigido ou não."
          }
        ],
        "demo": {
          "entrada": "curar(90, 30)",
          "codigo": [
            "function curar(vida, pocao) {",
            "  let total = vida + pocao;",
            "  if (total > 100) {",
            "    total = 100;",
            "  }",
            "  return total;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ]
              ],
              "fala": "O Criador chama curar(90, 30). A vida atual é 90 e a poção cura 30."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "120"
                ]
              ],
              "fala": "Soma a vida com a poção: 90 + 30 = 120. Mas atenção: o máximo é 100.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "120"
                ]
              ],
              "fala": "120 é maior que 100? Sim! Então o bloco roda para corrigir."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "100"
                ]
              ],
              "fala": "Passou do máximo, então o total volta para 100: total = 100.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "100"
                ]
              ],
              "fala": "return devolve a vida final: 100."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "100"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function curar(vida, pocao) {\n  let total = vida ___ pocao;   // como juntar a vida e a poção?\n  if (total > ___) {            // qual é o máximo?\n    total = 100;\n  }\n  return ___;                   // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                60,
                30
              ],
              "out": 90
            },
            {
              "in": [
                90,
                30
              ],
              "out": 100
            },
            {
              "in": [
                100,
                0
              ],
              "out": 100
            },
            {
              "in": [
                0,
                100
              ],
              "out": 100
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    total = vida + pocao",
            "explica": "Cria a variável total com a soma da vida com a poção."
          },
          {
            "trecho": "    if total > 100:",
            "explica": "if executa o bloco de baixo só quando a condição for verdadeira. O > pergunta se o da esquerda é maior. Os dois-pontos abrem o bloco."
          },
          {
            "trecho": "        total = 100",
            "explica": "Com 8 espaços, está dentro do if: só roda quando passou do máximo."
          },
          {
            "trecho": "    return total",
            "explica": "Com 4 espaços, está fora do if: roda sempre e devolve o total, corrigido ou não."
          }
        ],
        "demo": {
          "entrada": "curar(90, 30)",
          "codigo": [
            "def curar(vida, pocao):",
            "    total = vida + pocao",
            "    if total > 100:",
            "        total = 100",
            "    return total"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ]
              ],
              "fala": "O Criador chama curar(90, 30). A vida atual é 90 e a poção cura 30."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "120"
                ]
              ],
              "fala": "Soma a vida com a poção: 90 + 30 = 120. Mas atenção: o máximo é 100.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "120"
                ]
              ],
              "fala": "120 é maior que 100? Sim! Então o bloco roda para corrigir."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "100"
                ]
              ],
              "fala": "Passou do máximo, então o total volta para 100: total = 100.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "100"
                ]
              ],
              "fala": "return devolve a vida final: 100."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vida",
                  "90"
                ],
                [
                  "pocao",
                  "30"
                ],
                [
                  "total",
                  "100"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def curar(vida, pocao):\n    total = vida ___ pocao   # como juntar a vida e a poção?\n    if total > ___:          # qual é o máximo?\n        total = 100\n    return ___               # o que devolver?\n",
          "testes": [
            {
              "in": [
                60,
                30
              ],
              "out": 90
            },
            {
              "in": [
                90,
                30
              ],
              "out": 100
            },
            {
              "in": [
                100,
                0
              ],
              "out": 100
            },
            {
              "in": [
                0,
                100
              ],
              "out": 100
            }
          ]
        }
      }
    }
  },
  "critico": {
    "conceito": "Condições com >= e o dobro do dano",
    "porque": "Muitas regras de jogo e de sistemas são do tipo 'se isto, então aquilo'. A condição compara valores e decide. Os sinais de comparação (>, <, >=, <=, ===) são as perguntas que o programa sabe fazer. Um golpe crítico é um exemplo perfeito: só acontece com sorte alta.",
    "analogia": "É como um dado num jogo de tabuleiro: se tirar 90 ou mais, o golpe é crítico. A regra tem sempre a mesma forma: uma pergunta e uma consequência.",
    "ideias": [
      {
        "titulo": ">=",
        "texto": "Lê-se 'maior ou igual'. sorte >= 90 vale para 90, 91, 92... e não para 89."
      },
      {
        "titulo": "Valor padrão",
        "texto": "Comece com o caso comum (dano = base) e só mude se a condição pedir. O if fica curto."
      },
      {
        "titulo": "Teste os limites",
        "texto": "89 e 90 são os valores perigosos: um erro de >= para > só aparece neles."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let dano = base;",
            "explica": "Guarda o caso normal numa variável. Se nada especial acontecer, é esse valor que sai."
          },
          {
            "trecho": "if (sorte >= 90) {",
            "explica": "O >= pergunta 'maior ou igual?'. O bloco só roda se a resposta for sim."
          },
          {
            "trecho": "dano = base * 2;",
            "explica": "Troca o valor da variável pelo dobro. O * multiplica."
          },
          {
            "trecho": "return dano;",
            "explica": "Devolve o dano, crítico ou normal."
          }
        ],
        "demo": {
          "entrada": "ataqueFinal(20, 95)",
          "codigo": [
            "function ataqueFinal(base, sorte) {",
            "  let dano = base;",
            "  if (sorte >= 90) {",
            "    dano = base * 2;",
            "  }",
            "  return dano;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ]
              ],
              "fala": "O Criador chama ataqueFinal(20, 95). O dano base é 20 e a sorte do dado foi 95."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "20"
                ]
              ],
              "fala": "Começa com o caso normal: o dano é igual ao dano base, 20.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "20"
                ]
              ],
              "fala": "A sorte (95) é maior ou igual a 90? Sim: é um golpe crítico!"
            },
            {
              "linha": 3,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "40"
                ]
              ],
              "fala": "Golpe crítico: o dano dobra. 20 * 2 = 40.",
              "dano": true
            },
            {
              "linha": 5,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "40"
                ]
              ],
              "fala": "return devolve o dano final: 40."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "40"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function ataqueFinal(base, sorte) {\n  let dano = base;\n  if (sorte ___ 90) {     // qual comparação? (90 ou mais)\n    dano = base * ___;    // dobra\n  }\n  return ___;             // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                20,
                95
              ],
              "out": 40
            },
            {
              "in": [
                20,
                50
              ],
              "out": 20
            },
            {
              "in": [
                35,
                90
              ],
              "out": 70
            },
            {
              "in": [
                35,
                89
              ],
              "out": 35
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    dano = base",
            "explica": "Guarda o caso normal numa variável. Se nada especial acontecer, é esse valor que sai."
          },
          {
            "trecho": "    if sorte >= 90:",
            "explica": "O >= pergunta 'maior ou igual?'. O bloco de baixo só roda se a resposta for sim."
          },
          {
            "trecho": "        dano = base * 2",
            "explica": "Com 8 espaços, está dentro do if. Troca o valor da variável pelo dobro."
          },
          {
            "trecho": "    return dano",
            "explica": "Fora do if (4 espaços): devolve o dano, crítico ou normal."
          }
        ],
        "demo": {
          "entrada": "ataqueFinal(20, 95)",
          "codigo": [
            "def ataqueFinal(base, sorte):",
            "    dano = base",
            "    if sorte >= 90:",
            "        dano = base * 2",
            "    return dano"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ]
              ],
              "fala": "O Criador chama ataqueFinal(20, 95). O dano base é 20 e a sorte do dado foi 95."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "20"
                ]
              ],
              "fala": "Começa com o caso normal: o dano é igual ao dano base, 20.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "20"
                ]
              ],
              "fala": "A sorte (95) é maior ou igual a 90? Sim: é um golpe crítico!"
            },
            {
              "linha": 3,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "40"
                ]
              ],
              "fala": "Golpe crítico: o dano dobra. 20 * 2 = 40.",
              "dano": true
            },
            {
              "linha": 4,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "40"
                ]
              ],
              "fala": "return devolve o dano final: 40."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "base",
                  "20"
                ],
                [
                  "sorte",
                  "95"
                ],
                [
                  "dano",
                  "40"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def ataqueFinal(base, sorte):\n    dano = base\n    if sorte ___ 90:     # qual comparação? (90 ou mais)\n        dano = base * ___   # dobra\n    return ___           # o que devolver?\n",
          "testes": [
            {
              "in": [
                20,
                95
              ],
              "out": 40
            },
            {
              "in": [
                20,
                50
              ],
              "out": 20
            },
            {
              "in": [
                35,
                90
              ],
              "out": 70
            },
            {
              "in": [
                35,
                89
              ],
              "out": 35
            }
          ]
        }
      }
    }
  },
  "ouro": {
    "conceito": "Somar os itens de uma lista",
    "porque": "Um baú tem uma quantia de ouro; uma masmorra tem vários. Em vez de uma variável para cada baú, o programa guarda todos numa lista e percorre um por vez, acumulando o resultado. Esse padrão (começar em zero e ir somando) aparece em quase todo programa.",
    "analogia": "É como contar o dinheiro de um cofrinho: você pega moeda por moeda e vai somando de cabeça. A cabeça é a variável total, que cresce a cada moeda.",
    "ideias": [
      {
        "titulo": "Lista",
        "texto": "Vários valores guardados juntos, em ordem: [10, 25, 5]."
      },
      {
        "titulo": "Acumulador",
        "texto": "Uma variável que começa em 0 e recebe cada valor novo: total += ouro."
      },
      {
        "titulo": "Lista vazia",
        "texto": "Se não há baús, o laço não roda nenhuma vez e o total continua 0. Por isso o zero inicial está certo."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let total = 0;",
            "explica": "O acumulador começa em 0. Ele é let porque o valor muda a cada volta."
          },
          {
            "trecho": "for (const ouro of baus) {",
            "explica": "Percorre a lista: a cada volta, ouro recebe o próximo valor de baus."
          },
          {
            "trecho": "total += ouro;",
            "explica": "+= soma o valor ao que já estava na variável. É o mesmo que total = total + ouro."
          },
          {
            "trecho": "return total;",
            "explica": "Está depois do laço: roda só quando todos os baús foram somados."
          }
        ],
        "demo": {
          "entrada": "ouroTotal([10, 25, 5])",
          "codigo": [
            "function ouroTotal(baus) {",
            "  let total = 0;",
            "  for (const ouro of baus) {",
            "    total += ouro;",
            "  }",
            "  return total;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ]
              ],
              "fala": "O Criador chama ouroTotal([10, 25, 5]). A lista com o ouro de cada baú fica em baus."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "0"
                ]
              ],
              "fala": "Cria o acumulador total em 0: antes de abrir o primeiro baú, não há ouro nenhum."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "ouro",
                  "10"
                ]
              ],
              "fala": "O laço abre o próximo baú: ouro = 10."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "10"
                ],
                [
                  "ouro",
                  "10"
                ]
              ],
              "fala": "Soma o ouro do baú ao total. Agora total = 10.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "10"
                ],
                [
                  "ouro",
                  "25"
                ]
              ],
              "fala": "O laço abre o próximo baú: ouro = 25."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "35"
                ],
                [
                  "ouro",
                  "25"
                ]
              ],
              "fala": "Soma o ouro do baú ao total. Agora total = 35.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "35"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "O laço abre o próximo baú: ouro = 5."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "Soma o ouro do baú ao total. Agora total = 40.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ]
              ],
              "fala": "Não há mais baús, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ]
              ],
              "fala": "return devolve a soma de todos os baús: 40."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function ouroTotal(baus) {\n  let total = ___;              // começa em quanto?\n  for (const ouro of ___) {     // o que percorrer?\n    total += ___;               // o que somar a cada volta?\n  }\n  return total;\n}\n",
          "testes": [
            {
              "in": [
                [
                  10,
                  25,
                  5
                ]
              ],
              "out": 40
            },
            {
              "in": [
                []
              ],
              "out": 0
            },
            {
              "in": [
                [
                  100
                ]
              ],
              "out": 100
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    total = 0",
            "explica": "O acumulador começa em 0."
          },
          {
            "trecho": "    for ouro in baus:",
            "explica": "Percorre a lista: a cada volta, ouro recebe o próximo valor de baus. Os dois-pontos abrem o corpo do laço."
          },
          {
            "trecho": "        total += ouro",
            "explica": "Com 8 espaços, está dentro do for. += soma o valor ao que já estava em total."
          },
          {
            "trecho": "    return total",
            "explica": "Com 4 espaços, está fora do for: roda só quando todos os baús foram somados."
          }
        ],
        "demo": {
          "entrada": "ouroTotal([10, 25, 5])",
          "codigo": [
            "def ouroTotal(baus):",
            "    total = 0",
            "    for ouro in baus:",
            "        total += ouro",
            "    return total"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ]
              ],
              "fala": "O Criador chama ouroTotal([10, 25, 5]). A lista com o ouro de cada baú fica em baus."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "0"
                ]
              ],
              "fala": "Cria o acumulador total em 0: antes de abrir o primeiro baú, não há ouro nenhum."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "0"
                ],
                [
                  "ouro",
                  "10"
                ]
              ],
              "fala": "O laço abre o próximo baú: ouro = 10."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "10"
                ],
                [
                  "ouro",
                  "10"
                ]
              ],
              "fala": "Soma o ouro do baú ao total. Agora total = 10.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "10"
                ],
                [
                  "ouro",
                  "25"
                ]
              ],
              "fala": "O laço abre o próximo baú: ouro = 25."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "35"
                ],
                [
                  "ouro",
                  "25"
                ]
              ],
              "fala": "Soma o ouro do baú ao total. Agora total = 35.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "35"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "O laço abre o próximo baú: ouro = 5."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "Soma o ouro do baú ao total. Agora total = 40.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "Não há mais baús, então o laço termina."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "return devolve a soma de todos os baús: 40."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "baus",
                  "[10, 25, 5]"
                ],
                [
                  "total",
                  "40"
                ],
                [
                  "ouro",
                  "5"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def ouroTotal(baus):\n    total = ___           # começa em quanto?\n    for ouro in ___:      # o que percorrer?\n        total += ___      # o que somar a cada volta?\n    return total\n",
          "testes": [
            {
              "in": [
                [
                  10,
                  25,
                  5
                ]
              ],
              "out": 40
            },
            {
              "in": [
                []
              ],
              "out": 0
            },
            {
              "in": [
                [
                  100
                ]
              ],
              "out": 100
            }
          ]
        }
      }
    }
  },
  "rank": {
    "conceito": "Várias decisões em sequência",
    "porque": "Às vezes há mais de duas saídas: o rank pode ser E, D, C ou B. Você faz as perguntas em ordem, da mais restrita à mais ampla. Na primeira resposta 'sim', a função devolve o resultado e para; se nenhuma deu certo, o que sobra é o último caso.",
    "analogia": "É como uma fila de portões, do menor para o maior. Você tenta o primeiro; se não passar, tenta o segundo, e assim por diante. Quem não passa em nenhum cai no portão final.",
    "ideias": [
      {
        "titulo": "Ordem das perguntas",
        "texto": "Pergunte primeiro o menor limite: xp < 100, depois xp < 300... A ordem faz cada pergunta já saber que as anteriores falharam."
      },
      {
        "titulo": "return dentro do if",
        "texto": "Ao devolver um valor, a função termina na hora. Nada depois dele roda."
      },
      {
        "titulo": "Caso final",
        "texto": "O último return, sem if, cobre tudo que sobrou: de 600 para cima."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "if (xp < 100) {",
            "explica": "O < pergunta 'menor que?'. Se for verdadeiro, o bloco roda."
          },
          {
            "trecho": "return \"E\";",
            "explica": "Devolve o texto \"E\" e encerra a função. As aspas mostram que é um texto."
          },
          {
            "trecho": "if (xp < 300) {",
            "explica": "Só chega aqui quem NÃO foi menor que 100. Por isso basta perguntar o próximo limite."
          },
          {
            "trecho": "return \"B\";",
            "explica": "Sem if: é o caso final, para tudo que passou pelas perguntas anteriores."
          }
        ],
        "demo": {
          "entrada": "rankDoXp(450)",
          "codigo": [
            "function rankDoXp(xp) {",
            "  if (xp < 100) {",
            "    return \"E\";",
            "  }",
            "  if (xp < 300) {",
            "    return \"D\";",
            "  }",
            "  if (xp < 600) {",
            "    return \"C\";",
            "  }",
            "  return \"B\";",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "O Criador chama rankDoXp(450). Vai perguntar do menor limite para o maior."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "450 é menor que 100? Não. Passa para a próxima pergunta."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "450 é menor que 300? Não. Passa para a próxima pergunta."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "450 é menor que 600? Sim, então é rank C."
            },
            {
              "linha": 8,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "return devolve \"C\" e a função termina aqui. As próximas linhas nem chegam a rodar.",
              "dano": true
            },
            {
              "linha": 8,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function rankDoXp(xp) {\n  if (xp < 100) {\n    return \"E\";\n  }\n  if (xp < ___) {      // próximo limite\n    return \"D\";\n  }\n  if (xp < 600) {\n    return ___;        // o rank deste grupo\n  }\n  return \"B\";\n}\n",
          "testes": [
            {
              "in": [
                50
              ],
              "out": "E"
            },
            {
              "in": [
                100
              ],
              "out": "D"
            },
            {
              "in": [
                450
              ],
              "out": "C"
            },
            {
              "in": [
                600
              ],
              "out": "B"
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    if xp < 100:",
            "explica": "O < pergunta 'menor que?'. Se for verdadeiro, o bloco recuado roda."
          },
          {
            "trecho": "        return \"E\"",
            "explica": "Devolve o texto \"E\" e encerra a função. Com 8 espaços, está dentro do if."
          },
          {
            "trecho": "    if xp < 300:",
            "explica": "Só chega aqui quem NÃO foi menor que 100. Por isso basta perguntar o próximo limite."
          },
          {
            "trecho": "    return \"B\"",
            "explica": "Com 4 espaços, fora dos if: é o caso final, para tudo que passou pelas perguntas anteriores."
          }
        ],
        "demo": {
          "entrada": "rankDoXp(450)",
          "codigo": [
            "def rankDoXp(xp):",
            "    if xp < 100:",
            "        return \"E\"",
            "    if xp < 300:",
            "        return \"D\"",
            "    if xp < 600:",
            "        return \"C\"",
            "    return \"B\""
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "O Criador chama rankDoXp(450). Vai perguntar do menor limite para o maior."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "450 é menor que 100? Não. Passa para a próxima pergunta."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "450 é menor que 300? Não. Passa para a próxima pergunta."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "450 é menor que 600? Sim, então é rank C."
            },
            {
              "linha": 6,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "return devolve 'C' e a função termina aqui. As próximas linhas nem chegam a rodar.",
              "dano": true
            },
            {
              "linha": 6,
              "vars": [
                [
                  "xp",
                  "450"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def rankDoXp(xp):\n    if xp < 100:\n        return \"E\"\n    if xp < ___:      # próximo limite\n        return \"D\"\n    if xp < 600:\n        return ___    # o rank deste grupo\n    return \"B\"\n",
          "testes": [
            {
              "in": [
                50
              ],
              "out": "E"
            },
            {
              "in": [
                100
              ],
              "out": "D"
            },
            {
              "in": [
                450
              ],
              "out": "C"
            },
            {
              "in": [
                600
              ],
              "out": "B"
            }
          ]
        }
      }
    }
  },
  "inventario": {
    "conceito": "Procurar um valor numa lista",
    "porque": "Procurar é uma das coisas mais comuns em programas: o item está na mochila? O usuário já existe? O programa olha um por um e, ao achar, já responde sim e para. Se chegar ao fim sem achar, a resposta é não.",
    "analogia": "É como procurar um livro numa pilha: você olha o título de cada um. Se achar, para na hora e diz 'achei!'. Só depois de olhar todos é que pode dizer 'não tem'.",
    "ideias": [
      {
        "titulo": "Comparar com ===",
        "texto": "=== pergunta se os dois valores são iguais. O sinal = sozinho guarda valor; não compara."
      },
      {
        "titulo": "Parar ao achar",
        "texto": "O return true dentro do if encerra a função assim que o item aparece."
      },
      {
        "titulo": "Não achou",
        "texto": "O return false fica depois do laço: só roda se nenhum item foi igual."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "for (const guardado of mochila) {",
            "explica": "A cada volta, guardado recebe o próximo item da mochila."
          },
          {
            "trecho": "if (guardado === item) {",
            "explica": "=== compara os dois valores e dá true se forem iguais. Letras maiúsculas e minúsculas contam: 'Espada' é diferente de 'espada'."
          },
          {
            "trecho": "return true;",
            "explica": "Achou! Devolve true e encerra a função na hora."
          },
          {
            "trecho": "return false;",
            "explica": "Está fora do laço: só roda se o laço terminou sem achar nada."
          }
        ],
        "demo": {
          "entrada": "temItem([\"espada\", \"escudo\", \"poção\"], \"escudo\")",
          "codigo": [
            "function temItem(mochila, item) {",
            "  for (const guardado of mochila) {",
            "    if (guardado === item) {",
            "      return true;",
            "    }",
            "  }",
            "  return false;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ]
              ],
              "fala": "O Criador chama temItem([\"espada\", \"escudo\", \"poção\"], \"escudo\"). Quer saber se o escudo está na mochila."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ],
                [
                  "guardado",
                  "\"espada\""
                ]
              ],
              "fala": "O laço pega o próximo item da mochila: guardado = \"espada\"."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ],
                [
                  "guardado",
                  "\"espada\""
                ]
              ],
              "fala": "\"espada\" é igual a \"escudo\"? Não. Segue para o próximo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ],
                [
                  "guardado",
                  "\"escudo\""
                ]
              ],
              "fala": "O laço pega o próximo item da mochila: guardado = \"escudo\"."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ],
                [
                  "guardado",
                  "\"escudo\""
                ]
              ],
              "fala": "\"escudo\" é igual a \"escudo\"? Sim! Achou."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ],
                [
                  "guardado",
                  "\"escudo\""
                ]
              ],
              "fala": "return true devolve true e encerra a função. Não precisa olhar o resto da mochila.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "mochila",
                  "[\"espada\", \"escudo\", \"poção\"]"
                ],
                [
                  "item",
                  "\"escudo\""
                ],
                [
                  "guardado",
                  "\"escudo\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function temItem(mochila, item) {\n  for (const guardado of ___) {   // o que percorrer?\n    if (guardado ___ item) {      // como comparar?\n      return ___;                 // achou: devolve o quê?\n    }\n  }\n  return false;\n}\n",
          "testes": [
            {
              "in": [
                [
                  "espada",
                  "escudo"
                ],
                "escudo"
              ],
              "out": true
            },
            {
              "in": [
                [
                  "espada"
                ],
                "arco"
              ],
              "out": false
            },
            {
              "in": [
                [],
                "espada"
              ],
              "out": false
            }
          ]
        }
      },
      "py": {
        "sintaxe": [
          {
            "trecho": "    for guardado in mochila:",
            "explica": "A cada volta, guardado recebe o próximo item da mochila."
          },
          {
            "trecho": "        if guardado == item:",
            "explica": "== compara os dois valores e dá True se forem iguais. Maiúsculas e minúsculas contam. Um = só guarda valor."
          },
          {
            "trecho": "            return True",
            "explica": "Achou! Devolve True (com T maiúsculo) e encerra a função na hora."
          },
          {
            "trecho": "    return False",
            "explica": "Fora do for (4 espaços): só roda se o laço terminou sem achar nada."
          }
        ],
        "demo": {
          "entrada": "temItem(['espada', 'escudo', 'poção'], 'escudo')",
          "codigo": [
            "def temItem(mochila, item):",
            "    for guardado in mochila:",
            "        if guardado == item:",
            "            return True",
            "    return False"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ]
              ],
              "fala": "O Criador chama temItem([\"espada\", \"escudo\", \"poção\"], \"escudo\"). Quer saber se o escudo está na mochila."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ],
                [
                  "guardado",
                  "'espada'"
                ]
              ],
              "fala": "O laço pega o próximo item da mochila: guardado = 'espada'."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ],
                [
                  "guardado",
                  "'espada'"
                ]
              ],
              "fala": "'espada' é igual a 'escudo'? Não. Segue para o próximo."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ],
                [
                  "guardado",
                  "'escudo'"
                ]
              ],
              "fala": "O laço pega o próximo item da mochila: guardado = 'escudo'."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ],
                [
                  "guardado",
                  "'escudo'"
                ]
              ],
              "fala": "'escudo' é igual a 'escudo'? Sim! Achou."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ],
                [
                  "guardado",
                  "'escudo'"
                ]
              ],
              "fala": "return true devolve True e encerra a função. Não precisa olhar o resto da mochila.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "mochila",
                  "['espada', 'escudo', 'poção']"
                ],
                [
                  "item",
                  "'escudo'"
                ],
                [
                  "guardado",
                  "'escudo'"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "def temItem(mochila, item):\n    for guardado in ___:   # o que percorrer?\n        if guardado ___ item:   # como comparar?\n            return ___         # achou: devolve o quê?\n    return False\n",
          "testes": [
            {
              "in": [
                [
                  "espada",
                  "escudo"
                ],
                "escudo"
              ],
              "out": true
            },
            {
              "in": [
                [
                  "espada"
                ],
                "arco"
              ],
              "out": false
            },
            {
              "in": [
                [],
                "espada"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "sec-vazio": {
    "conceito": "A primeira defesa: não confiar na entrada",
    "porque": "Quase todo ataque a um site começa em um campo que o programa não conferiu. A defesa mais básica é recusar o que veio vazio. E 'vazio' engana: três espaços parecem vazio na tela, mas para o computador é um texto com três caracteres. Por isso, antes de conferir, tiramos os espaços das pontas.",
    "analogia": "É como o porteiro que confere o crachá: um papel em branco não vale como crachá, mesmo parecendo papel. Ele olha o que há de verdade escrito nele.",
    "ideias": [
      {
        "titulo": "Entrada",
        "texto": "Tudo que vem de fora do programa: formulário, URL, arquivo. Nada disso é confiável até ser conferido."
      },
      {
        "titulo": "trim()",
        "texto": "Remove os espaços do começo e do fim do texto. '   oi  ' vira 'oi', e '   ' vira ''."
      },
      {
        "titulo": "Texto vazio",
        "texto": "É o texto sem nenhum caractere: ''. Comparamos com === para saber se é ele."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const limpo = texto.trim();",
            "explica": "texto.trim() devolve uma cópia do texto sem os espaços do começo e do fim. O texto original não muda; por isso guardamos o resultado numa variável."
          },
          {
            "trecho": "return limpo === \"\";",
            "explica": "=== compara os dois lados e dá true quando são iguais. \"\" são aspas sem nada dentro: o texto vazio. O return devolve true ou false."
          }
        ],
        "demo": {
          "entrada": "campoVazio(\"   \")",
          "codigo": [
            "function campoVazio(texto) {",
            "  const limpo = texto.trim();",
            "  return limpo === \"\";",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "texto",
                  "\"   \""
                ]
              ],
              "fala": "O Criador chama campoVazio(\"   \"). O texto parece vazio, mas tem 3 espaços."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "texto",
                  "\"   \""
                ],
                [
                  "limpo",
                  "\"\""
                ]
              ],
              "fala": "trim() tira os espaços das pontas. Sobrou um texto sem caracteres: \"\"\"\".",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"   \""
                ],
                [
                  "limpo",
                  "\"\""
                ]
              ],
              "fala": "O texto limpo é igual a vazio ('')? O resultado é true: o campo está vazio e deve ser recusado.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "texto",
                  "\"   \""
                ],
                [
                  "limpo",
                  "\"\""
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function campoVazio(texto) {\n  const limpo = texto.___();     // qual método tira os espaços das pontas?\n  return limpo ___ \"\";           // como comparar?\n}\n",
          "testes": [
            {
              "in": [
                ""
              ],
              "out": true
            },
            {
              "in": [
                "   "
              ],
              "out": true
            },
            {
              "in": [
                "oi"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "sec-tamanho": {
    "conceito": "Medir o tamanho de um texto",
    "porque": "Quanto mais curta a senha, mais rápido um atacante testa todas as possibilidades. Por isso sistemas exigem um tamanho mínimo. O computador mede o tamanho de um texto com length e compara com o limite.",
    "analogia": "É como a altura mínima de um brinquedo de parque: uma régua mede quem chega, e quem está abaixo da marca não entra. Aqui, a régua é o length e a marca é o 8.",
    "ideias": [
      {
        "titulo": "length",
        "texto": "O número de caracteres de um texto. 'abc123'.length vale 6."
      },
      {
        "titulo": "Comparação",
        "texto": "tamanho < 8 pergunta se é menor que 8. O resultado é true ou false."
      },
      {
        "titulo": "Limite exato",
        "texto": "Com 8 caracteres a senha NÃO é curta. Teste sempre o valor do limite."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const tamanho = senha.length;",
            "explica": "length (sem parênteses) é o número de caracteres do texto. Guardamos numa variável para comparar depois."
          },
          {
            "trecho": "return tamanho < 8;",
            "explica": "O < pergunta 'menor que?'. A comparação dá true ou false, e o return devolve exatamente isso."
          }
        ],
        "demo": {
          "entrada": "senhaCurta(\"abc123\")",
          "codigo": [
            "function senhaCurta(senha) {",
            "  const tamanho = senha.length;",
            "  return tamanho < 8;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "senha",
                  "\"abc123\""
                ]
              ],
              "fala": "O Criador chama senhaCurta(\"abc123\"). Vai medir o tamanho da senha."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "senha",
                  "\"abc123\""
                ],
                [
                  "tamanho",
                  "6"
                ]
              ],
              "fala": "senha.length conta os caracteres: 6.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "senha",
                  "\"abc123\""
                ],
                [
                  "tamanho",
                  "6"
                ]
              ],
              "fala": "6 é menor que 8? O resultado é true.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "senha",
                  "\"abc123\""
                ],
                [
                  "tamanho",
                  "6"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function senhaCurta(senha) {\n  const tamanho = senha.___;     // qual propriedade dá o tamanho?\n  return tamanho ___ 8;          // menor que 8?\n}\n",
          "testes": [
            {
              "in": [
                "abc123"
              ],
              "out": true
            },
            {
              "in": [
                "abcdefgh"
              ],
              "out": false
            },
            {
              "in": [
                ""
              ],
              "out": true
            }
          ]
        }
      }
    }
  },
  "sec-papel": {
    "conceito": "Controle de acesso: quem pode entrar?",
    "porque": "Um sistema seguro não deixa todo mundo fazer tudo. Cada pessoa tem um papel, e cada sala exige certos papéis. O programa confere o papel antes de abrir a porta. Quando há mais de um papel permitido, usamos o OU lógico (||): basta um ser verdadeiro.",
    "analogia": "É como a entrada de um prédio: o porteiro deixa passar o síndico OU o morador. Basta ser um dos dois. Quem é visitante fica de fora.",
    "ideias": [
      {
        "titulo": "Papel",
        "texto": "O tipo de acesso de cada usuário: admin, moderador, visitante."
      },
      {
        "titulo": "Mínimo necessário",
        "texto": "Liste só os papéis que realmente precisam entrar. O que não foi liberado, é negado."
      },
      {
        "titulo": "OU lógico (||)",
        "texto": "Dá true quando pelo menos um dos lados é true. Só dá false se os dois forem false."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const ehAdmin = papel === \"admin\";",
            "explica": "=== compara e dá true se forem iguais. Letras maiúsculas contam: \"Admin\" não é \"admin\". O resultado (true ou false) fica guardado."
          },
          {
            "trecho": "return ehAdmin || ehModerador;",
            "explica": "|| é o OU lógico: dá true se pelo menos um dos lados for true. É a regra 'admin OU moderador'."
          }
        ],
        "demo": {
          "entrada": "podeEntrar(\"moderador\")",
          "codigo": [
            "function podeEntrar(papel) {",
            "  const ehAdmin = papel === \"admin\";",
            "  const ehModerador = papel === \"moderador\";",
            "  return ehAdmin || ehModerador;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "papel",
                  "\"moderador\""
                ]
              ],
              "fala": "O Criador chama podeEntrar(\"moderador\"). Vai conferir cada papel permitido."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "papel",
                  "\"moderador\""
                ],
                [
                  "ehAdmin",
                  "false"
                ]
              ],
              "fala": "O papel é igual a \"admin\"? Resposta: false.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "papel",
                  "\"moderador\""
                ],
                [
                  "ehAdmin",
                  "false"
                ],
                [
                  "ehModerador",
                  "true"
                ]
              ],
              "fala": "O papel é igual a \"moderador\"? Resposta: true.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "papel",
                  "\"moderador\""
                ],
                [
                  "ehAdmin",
                  "false"
                ],
                [
                  "ehModerador",
                  "true"
                ]
              ],
              "fala": "O || dá true se pelo menos uma das respostas for true. Resultado: true. A porta abre.",
              "dano": true
            },
            {
              "linha": 3,
              "vars": [
                [
                  "papel",
                  "\"moderador\""
                ],
                [
                  "ehAdmin",
                  "false"
                ],
                [
                  "ehModerador",
                  "true"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function podeEntrar(papel) {\n  const ehAdmin = papel === \"admin\";\n  const ehModerador = papel === ___;     // qual papel é o segundo permitido?\n  return ehAdmin ___ ehModerador;        // qual operador significa OU?\n}\n",
          "testes": [
            {
              "in": [
                "admin"
              ],
              "out": true
            },
            {
              "in": [
                "moderador"
              ],
              "out": true
            },
            {
              "in": [
                "visitante"
              ],
              "out": false
            }
          ]
        }
      }
    }
  },
  "dat-quantos": {
    "conceito": "Toda análise começa contando",
    "porque": "Antes de somar, filtrar ou comparar, você precisa saber o tamanho do que tem na mão: quantas vendas, quantos clientes, quantos erros. Uma lista sabe o próprio tamanho, e você só pergunta.",
    "analogia": "É como contar as prateleiras de um estoque antes de começar o inventário. Você ainda não sabe o que há em cada uma, mas já sabe o tamanho do trabalho.",
    "ideias": [
      {
        "titulo": "Lista",
        "texto": "Uma coleção de itens em ordem. A base de vendas é uma lista com um item por venda."
      },
      {
        "titulo": "length",
        "texto": "O número de itens da lista. Uma lista vazia tem length 0."
      },
      {
        "titulo": "Primeira métrica",
        "texto": "Contagem é a métrica mais simples e já responde perguntas reais: 'quantas vendas tivemos?'."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const quantos = vendas.length;",
            "explica": "length (sem parênteses) devolve o número de itens da lista. Guardamos numa variável com um nome claro."
          },
          {
            "trecho": "return quantos;",
            "explica": "Devolve a contagem para quem chamou a função."
          }
        ],
        "demo": {
          "entrada": "quantosItens([{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}])",
          "codigo": [
            "function quantosItens(vendas) {",
            "  const quantos = vendas.length;",
            "  return quantos;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ]
              ],
              "fala": "O Criador chama quantosItens com uma base de 3 vendas."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "quantos",
                  "3"
                ]
              ],
              "fala": "vendas.length pergunta à lista quantos itens ela tem: 3.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "quantos",
                  "3"
                ]
              ],
              "fala": "return devolve 3.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "quantos",
                  "3"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function quantosItens(vendas) {\n  const quantos = vendas.___;     // qual propriedade dá o tamanho?\n  return ___;                     // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A"
                  },
                  {
                    "produto": "B"
                  }
                ]
              ],
              "out": 2
            },
            {
              "in": [
                []
              ],
              "out": 0
            }
          ]
        }
      }
    }
  },
  "dat-caro": {
    "conceito": "Achar o maior valor de uma coluna",
    "porque": "Qual produto custa mais? Qual venda foi a maior? Para responder, você percorre a lista guardando o maior valor visto até agora. Cada item novo desafia o recordista: se for maior, toma o lugar.",
    "analogia": "É um campeonato de levantamento de peso: o recorde começa em zero, cada atleta tenta, e se passar do recorde atual, o recorde é atualizado. No fim, o recorde é o maior de todos.",
    "ideias": [
      {
        "titulo": "Objeto",
        "texto": "Um registro com campos nomeados: { produto: 'Espada', preco: 100 }. O ponto lê um campo: venda.preco."
      },
      {
        "titulo": "Recordista",
        "texto": "Uma variável que guarda o maior valor visto até agora e só muda quando aparece um maior."
      },
      {
        "titulo": "Lista vazia",
        "texto": "Se não há itens, o recorde continua 0, que é o que o monstro pede."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "let maior = 0;",
            "explica": "O recorde começa em 0. É let porque vai ser trocado."
          },
          {
            "trecho": "for (const venda of vendas) {",
            "explica": "A cada volta, venda recebe o próximo item da lista."
          },
          {
            "trecho": "if (venda.preco > maior) {",
            "explica": "venda.preco lê o campo preco do item. O > pergunta se ele é maior que o recorde."
          },
          {
            "trecho": "maior = venda.preco;",
            "explica": "Troca o recorde pelo novo preço."
          }
        ],
        "demo": {
          "entrada": "maisCaro([{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}])",
          "codigo": [
            "function maisCaro(vendas) {",
            "  let maior = 0;",
            "  for (const venda of vendas) {",
            "    if (venda.preco > maior) {",
            "      maior = venda.preco;",
            "    }",
            "  }",
            "  return maior;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ]
              ],
              "fala": "O Criador chama maisCaro com 3 itens: Espada, Escudo e Arco."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "0"
                ]
              ],
              "fala": "O recorde começa em 0: ainda ninguém foi visto."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "0"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "O laço pega a próxima venda. O preço dela é {produto: \"Espada\", preco: 100}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "0"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "Esse preço é maior que o recorde (0)? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "100"
                ],
                [
                  "venda",
                  "{produto: \"Espada\", preco: 100}"
                ]
              ],
              "fala": "O novo recorde é 100.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "100"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80}"
                ]
              ],
              "fala": "O laço pega a próxima venda. O preço dela é {produto: \"Escudo\", preco: 80}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "100"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\", preco: 80}"
                ]
              ],
              "fala": "Esse preço é maior que o recorde (100)? Não, o recorde continua o mesmo."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "100"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 120}"
                ]
              ],
              "fala": "O laço pega a próxima venda. O preço dela é {produto: \"Arco\", preco: 120}."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "100"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 120}"
                ]
              ],
              "fala": "Esse preço é maior que o recorde (100)? Sim, então entra no bloco."
            },
            {
              "linha": 4,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "120"
                ],
                [
                  "venda",
                  "{produto: \"Arco\", preco: 120}"
                ]
              ],
              "fala": "O novo recorde é 120.",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "120"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "120"
                ]
              ],
              "fala": "return devolve o maior preço encontrado: 120."
            },
            {
              "linha": 7,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\", preco: 100}, {produto: \"Escudo\", preco: 80}, {produto: \"Arco\", preco: 120}]"
                ],
                [
                  "maior",
                  "120"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function maisCaro(vendas) {\n  let maior = 0;\n  for (const venda of ___) {          // o que percorrer?\n    if (venda.preco ___ maior) {      // quando troca o recorde?\n      maior = venda.___;              // qual campo guardar?\n    }\n  }\n  return maior;\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "A",
                    "preco": 5
                  },
                  {
                    "produto": "B",
                    "preco": 9
                  }
                ]
              ],
              "out": 9
            },
            {
              "in": [
                []
              ],
              "out": 0
            }
          ]
        }
      }
    }
  },
  "dat-nomes": {
    "conceito": "Pegar uma coluna da base",
    "porque": "Uma base é como uma tabela: cada item é uma linha e cada campo é uma coluna. Muitas vezes você só quer uma coluna, como a lista de nomes. Você percorre as linhas e vai juntando o campo que interessa numa lista nova.",
    "analogia": "É como copiar só a coluna 'Nome' de uma planilha para uma folha nova: você desce linha por linha e anota apenas aquele campo.",
    "ideias": [
      {
        "titulo": "Lista nova",
        "texto": "const nomes = [] cria uma lista vazia, pronta para receber itens."
      },
      {
        "titulo": "push",
        "texto": "nomes.push(x) coloca x no fim da lista. A ordem de chegada é mantida."
      },
      {
        "titulo": "Campo",
        "texto": "venda.produto lê só o campo produto da linha atual."
      }
    ],
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "const nomes = [];",
            "explica": "[] é uma lista vazia. É const porque a variável sempre aponta para a mesma lista, que só vai crescendo."
          },
          {
            "trecho": "for (const venda of vendas) {",
            "explica": "A cada volta, venda recebe o próximo item da base."
          },
          {
            "trecho": "nomes.push(venda.produto);",
            "explica": "venda.produto lê o campo produto. push coloca esse valor no fim da lista nomes."
          },
          {
            "trecho": "return nomes;",
            "explica": "Roda depois do laço: devolve a lista completa."
          }
        ],
        "demo": {
          "entrada": "nomesDosItens([{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}])",
          "codigo": [
            "function nomesDosItens(vendas) {",
            "  const nomes = [];",
            "  for (const venda of vendas) {",
            "    nomes.push(venda.produto);",
            "  }",
            "  return nomes;",
            "}"
          ],
          "passos": [
            {
              "linha": 0,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ]
              ],
              "fala": "O Criador chama nomesDosItens com 3 vendas."
            },
            {
              "linha": 1,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[]"
                ]
              ],
              "fala": "Cria a lista nomes, vazia por enquanto."
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[]"
                ],
                [
                  "venda",
                  "{produto: \"Espada\"}"
                ]
              ],
              "fala": "O laço pega a próxima venda."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Espada\"}"
                ]
              ],
              "fala": "push coloca o produto desta venda no fim da lista. Agora nomes = [\"Espada\"].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\"]"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\"}"
                ]
              ],
              "fala": "O laço pega a próxima venda."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Escudo\"]"
                ],
                [
                  "venda",
                  "{produto: \"Escudo\"}"
                ]
              ],
              "fala": "push coloca o produto desta venda no fim da lista. Agora nomes = [\"Espada\", \"Escudo\"].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Escudo\"]"
                ],
                [
                  "venda",
                  "{produto: \"Arco\"}"
                ]
              ],
              "fala": "O laço pega a próxima venda."
            },
            {
              "linha": 3,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Escudo\", \"Arco\"]"
                ],
                [
                  "venda",
                  "{produto: \"Arco\"}"
                ]
              ],
              "fala": "push coloca o produto desta venda no fim da lista. Agora nomes = [\"Espada\", \"Escudo\", \"Arco\"].",
              "dano": true
            },
            {
              "linha": 2,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Escudo\", \"Arco\"]"
                ]
              ],
              "fala": "Acabaram as vendas, então o laço termina."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Escudo\", \"Arco\"]"
                ]
              ],
              "fala": "return devolve a lista completa: [\"Espada\", \"Escudo\", \"Arco\"]."
            },
            {
              "linha": 5,
              "vars": [
                [
                  "vendas",
                  "[{produto: \"Espada\"}, {produto: \"Escudo\"}, {produto: \"Arco\"}]"
                ],
                [
                  "nomes",
                  "[\"Espada\", \"Escudo\", \"Arco\"]"
                ]
              ],
              "fala": "Os testes passaram. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "function nomesDosItens(vendas) {\n  const nomes = ___;                // como criar uma lista vazia?\n  for (const venda of vendas) {\n    nomes.___(venda.produto);       // qual método coloca no fim?\n  }\n  return ___;                       // o que devolver?\n}\n",
          "testes": [
            {
              "in": [
                [
                  {
                    "produto": "X"
                  },
                  {
                    "produto": "Y"
                  }
                ]
              ],
              "out": [
                "X",
                "Y"
              ]
            },
            {
              "in": [
                []
              ],
              "out": []
            }
          ]
        }
      }
    }
  },
  "orac-pedido": {
    "conceito": "Seu primeiro prompt: peça direto",
    "porque": "Prompt é o texto que você entrega à IA. A IA não lê pensamento: ela só tem as palavras que você escreveu. O primeiro passo é pedir com clareza, começando por um verbo (escreva, crie, me dê) e dizendo qual é o assunto.",
    "analogia": "É como pedir um lanche no balcão: 'quero um sanduíche de queijo'. O verbo diz o que você quer fazer e o assunto diz sobre o quê. Falar só 'comida' deixa o atendente sem saber o que servir.",
    "ideias": [
      {
        "titulo": "Verbo de ação",
        "texto": "Comece com o que a IA deve fazer: escreva, crie, ensine, me dê."
      },
      {
        "titulo": "Assunto claro",
        "texto": "Diga sobre o quê: 'receita de bolo de chocolate' em vez de só 'receita'."
      },
      {
        "titulo": "Frase completa",
        "texto": "Uma frase inteira dá contexto. Duas palavras soltas obrigam a IA a adivinhar."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Comece com um verbo",
            "explica": "'Me dê', 'escreva', 'crie'... O verbo é o pedido."
          },
          {
            "trecho": "Diga o assunto",
            "explica": "Aqui: uma receita de bolo de chocolate."
          },
          {
            "trecho": "Faça uma frase completa",
            "explica": "Um pouco mais de detalhe já melhora a resposta."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Começa com um pedido claro (escreva, crie, me dê, ensine...)",
            "Diz o assunto (receita de bolo de chocolate)",
            "Tem pelo menos uma frase completa"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Vamos montar o primeiro pedido, uma peça de cada vez."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê uma receita",
              "novo": "Me dê uma receita",
              "atende": [
                true,
                false,
                false
              ],
              "fala": "Primeiro o verbo: 'me dê'. Já mostra o que você quer, mas ainda falta dizer de quê.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê uma receita de bolo de chocolate",
              "novo": " de bolo de chocolate",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "Agora o assunto, com detalhe: bolo de chocolate. Sem isso a IA poderia mandar qualquer receita.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê uma receita de bolo de chocolate bem fofinho, com a lista de ingredientes e o modo de preparo.",
              "novo": " bem fofinho, com a lista de ingredientes e o modo de preparo.",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "E um detalhe final do que você espera receber. Quanto mais claro, melhor a resposta."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê uma receita de bolo de chocolate bem fofinho, com a lista de ingredientes e o modo de preparo.",
              "novo": "",
              "atende": [
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "___ uma receita de ___ de chocolate, bem fofinho, com a lista de ingredientes e o modo de preparo."
        }
      }
    }
  },
  "orac-contexto": {
    "conceito": "Contexto: quanto mais a IA sabe, melhor ela ajuda",
    "porque": "Pedir 'ideias de presente' sem mais nada rende uma lista genérica. Quando você diz para quem é e quanto pode gastar, a IA descarta o que não serve e sugere o que combina. Contexto é a informação que a IA não tem e só você sabe.",
    "analogia": "É como pedir ajuda a um vendedor de loja: 'quero um presente' o deixa perdido. 'É para minha mãe, ela gosta de livros e posso gastar até 80 reais' o faz ir direto na prateleira certa.",
    "ideias": [
      {
        "titulo": "Para quem",
        "texto": "A pessoa ou o público muda a resposta: o que agrada uma mãe não é o que agrada um amigo de 10 anos."
      },
      {
        "titulo": "Limite",
        "texto": "Orçamento, prazo e tamanho filtram as opções antes de a IA sugerir."
      },
      {
        "titulo": "Preferências",
        "texto": "Gostos e detalhes ('adora jardinagem') deixam a resposta com a cara da pessoa."
      }
    ],
    "tituloSintaxe": "O que um bom prompt precisa ter",
    "linguagens": {
      "js": {
        "sintaxe": [
          {
            "trecho": "Peça as ideias",
            "explica": "Diga o que quer: ideias de presente de aniversário."
          },
          {
            "trecho": "Para quem é",
            "explica": "Diga quem vai receber e do que ela gosta."
          },
          {
            "trecho": "Quanto gastar",
            "explica": "Informe o orçamento em reais."
          },
          {
            "trecho": "Formato",
            "explica": "Diga quantas opções quer e como quer receber."
          }
        ],
        "demo": {
          "tipo": "prompt",
          "entrada": "o prompt",
          "codigo": [],
          "requisitos": [
            "Pede ideias ou sugestões de presente",
            "Diz para quem é (mãe, amigo, irmã, colega...)",
            "Diz quanto pode gastar (orçamento)",
            "Tem detalhe suficiente (não é vago)"
          ],
          "passos": [
            {
              "linha": -1,
              "vars": [],
              "texto": "",
              "novo": "",
              "atende": [
                false,
                false,
                false,
                false
              ],
              "fala": "O prompt começa em branco. Veja como cada informação de contexto melhora o pedido."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê ideias de presente de aniversário.",
              "novo": "Me dê ideias de presente de aniversário.",
              "atende": [
                true,
                false,
                false,
                false
              ],
              "fala": "O pedido básico. Funciona, mas a IA ainda não sabe para quem é nem quanto pode custar.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê ideias de presente de aniversário. O presente é para a minha mãe, que adora jardinagem e livros.",
              "novo": " O presente é para a minha mãe, que adora jardinagem e livros.",
              "atende": [
                true,
                true,
                false,
                true
              ],
              "fala": "Agora a IA sabe quem vai receber e os gostos dela. Já dá para sugerir algo pessoal.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê ideias de presente de aniversário. O presente é para a minha mãe, que adora jardinagem e livros. Posso gastar até 80 reais.",
              "novo": " Posso gastar até 80 reais.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O orçamento corta as opções caras demais. A IA só vai sugerir o que cabe no bolso.",
              "dano": true
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê ideias de presente de aniversário. O presente é para a minha mãe, que adora jardinagem e livros. Posso gastar até 80 reais. Liste 5 opções, cada uma com uma frase explicando por que combina com ela.",
              "novo": " Liste 5 opções, cada uma com uma frase explicando por que combina com ela.",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "E o formato da resposta: cinco opções, cada uma justificada. Pronto para decidir."
            },
            {
              "linha": -1,
              "vars": [],
              "texto": "Me dê ideias de presente de aniversário. O presente é para a minha mãe, que adora jardinagem e livros. Posso gastar até 80 reais. Liste 5 opções, cada uma com uma frase explicando por que combina com ela.",
              "novo": "",
              "atende": [
                true,
                true,
                true,
                true
              ],
              "fala": "O prompt atende a tudo. O monstro caiu.",
              "fim": true
            }
          ]
        },
        "guiado": {
          "starter": "Me dê ideias de ___ de aniversário. O presente é para a minha ___, que adora jardinagem e livros. Posso ___ até 80 reais. Liste 5 opções, cada uma com uma frase explicando por que combina com ela."
        }
      }
    }
  }
};
