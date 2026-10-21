// GERADO por ferramentas/aulas/gerar.mjs a partir de ferramentas/aulas/licoes/*.mjs. Não edite à mão.
// As demonstrações vêm da execução real do código (valores das variáveis a cada linha), e as
// soluções foram conferidas contra os testes oficiais dos monstros, em JavaScript e em Python.
export const AULAS_ARQUITETO = {
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
  }
};
