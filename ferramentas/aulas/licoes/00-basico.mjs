// Aulas do começo do Rank E, para quem nunca programou: oi, nome, contas, dobro e o exame (portao).
// "modo: programa" = o monstro pede um programa solto que escreve na tela (sem função).
export default [
  {
    id: "oi",
    modo: "programa",
    saida: "Oi, Criador!",
    exige: [],
    rotulo: "o programa",
    variaveis: [],
    conceito: "Mostrar um texto na tela: o seu primeiro programa",
    porque:
      "Todo programa é uma lista de ordens que o computador executa uma por vez, de cima para baixo. A primeira ordem que quase todo mundo aprende é mostrar uma mensagem na tela. É o famoso 'Olá, mundo' da programação, e aqui ele vira 'Oi, Criador!'.",
    analogia:
      "Programar é dar instruções a um robô muito obediente e muito literal: ele faz exatamente o que você escreve, nem mais nem menos. Se você mandar 'diga Oi, Criador!', ele diz exatamente isso, com a mesma vírgula e a mesma exclamação.",
    ideias: [
      { titulo: "Instrução", texto: "Uma ordem para o computador. O programa é uma lista de instruções, executadas de cima para baixo." },
      { titulo: "Texto entre aspas", texto: "O que está entre aspas é um texto e aparece igualzinho na tela. As aspas em si não aparecem." },
      { titulo: "Parênteses", texto: "O comando recebe, entre parênteses, aquilo que deve mostrar." },
    ],
    dano: ["mostra"],
    abertura: "O programa começa. A tela ainda está vazia.",
    falas: { mostra: "O Criador manda o computador mostrar o texto que está entre aspas. Pronto: ele apareceu na tela, igualzinho ao que foi escrito." },
    js: {
      codigo: [['console.log("Oi, Criador!");', "mostra"]],
      sintaxe: [
        { trecho: "console.log", explica: "É o comando que escreve algo na tela. Pense nele como 'mostrar'. O console é a tela de saída do programa, e log quer dizer registrar, mostrar." },
        { trecho: "( )", explica: "Os parênteses recebem aquilo que o comando deve mostrar. Tudo que estiver dentro deles é entregue ao comando." },
        { trecho: '"Oi, Criador!"', explica: "As aspas avisam o computador de que isso é um texto. Tudo entre elas aparece igualzinho na tela, com maiúsculas, vírgula e exclamação. As aspas em si não aparecem." },
        { trecho: ";", explica: "O ponto e vírgula encerra a instrução, como o ponto final de uma frase. Em JavaScript ele costuma ser opcional, mas é um bom hábito." },
      ],
      guiado: { codigo: "console.log(___);   // o texto vai entre aspas\n", preenche: ['"Oi, Criador!"'] },
    },
    py: {
      codigo: [['print("Oi, Criador!")', "mostra"]],
      sintaxe: [
        { trecho: "print", explica: "É o comando que escreve algo na tela. Pense nele como 'mostrar'. Em inglês, print quer dizer imprimir." },
        { trecho: "( )", explica: "Os parênteses recebem aquilo que o comando deve mostrar. Tudo que estiver dentro deles é entregue ao comando." },
        { trecho: '"Oi, Criador!"', explica: "As aspas avisam o computador de que isso é um texto. Tudo entre elas aparece igualzinho na tela, com maiúsculas, vírgula e exclamação. As aspas em si não aparecem." },
        { trecho: "(sem ponto e vírgula)", explica: "Em Python não se usa ponto e vírgula: o fim da linha já encerra a instrução." },
      ],
      guiado: { codigo: "print(___)   # o texto vai entre aspas\n", preenche: ['"Oi, Criador!"'] },
    },
  },

  {
    id: "nome",
    modo: "programa",
    saida: "Oi, Criador!",
    exige: [
      { nome: "Cria a variável nome", re: "\\bnome\\s*=(?!=)" },
      { nome: "Usa a variável nome na mensagem", re: "\\bnome\\b", min: 2 },
    ],
    rotulo: "o programa",
    variaveis: ["nome"],
    conceito: "Variáveis: caixinhas com nome",
    porque:
      "Se você escrever o nome direto dentro do texto, cada mudança exige reescrever tudo. Guardando o nome numa variável, você muda o valor num só lugar e a mensagem acompanha. Variáveis são a memória do programa.",
    analogia:
      "Uma variável é como uma caixinha com uma etiqueta: a etiqueta é o nome da variável e o que está dentro é o valor. Sempre que você disser o nome da etiqueta, o computador abre a caixinha e usa o que está dentro.",
    ideias: [
      { titulo: "Variável", texto: "Um espaço na memória com um nome, onde você guarda um valor para usar depois." },
      { titulo: "Guardar com =", texto: "O sinal de igual não compara: ele GUARDA o valor da direita na caixinha da esquerda." },
      { titulo: "Juntar textos com +", texto: "Com textos, o + cola um pedaço no outro. Espaços e pontuação fazem parte do texto." },
    ],
    dano: ["guarda", "mostra"],
    abertura: "O programa começa. A tela está vazia e ainda não existe nenhuma variável.",
    falas: {
      guarda: "Cria a variável nome e guarda nela o texto {nome}. Agora o computador 'lembra' desse valor.",
      mostra: 'Monta a mensagem juntando três pedaços com +: "Oi, ", o valor da variável nome ({nome}) e "!". O resultado aparece na tela.',
    },
    js: {
      codigo: [
        ['const nome = "Criador";', "guarda"],
        ['console.log("Oi, " + nome + "!");', "mostra"],
      ],
      sintaxe: [
        { trecho: 'const nome = "Criador";', explica: "const cria uma variável cujo valor não vai mudar (se precisar mudar depois, use let). nome é o nome escolhido para a caixinha, e o = guarda nela o valor da direita." },
        { trecho: 'console.log("Oi, " + nome + "!");', explica: 'O + junta textos. Repare no espaço depois da vírgula em "Oi, ": sem ele sairia "Oi,Criador!". O nome da variável fica SEM aspas: com aspas, apareceria a palavra "nome" em vez do valor guardado.' },
      ],
      guiado: {
        codigo: 'const nome = ___;                       // qual texto guardar?\nconsole.log("Oi, " + ___ + "!");        // qual variável usar?\n',
        preenche: ['"Criador"', "nome"],
      },
    },
    py: {
      codigo: [
        ['nome = "Criador"', "guarda"],
        ['print("Oi, " + nome + "!")', "mostra"],
      ],
      sintaxe: [
        { trecho: 'nome = "Criador"', explica: "Em Python você cria a variável só escrevendo o nome, o = e o valor. Não precisa de const nem let, nem de ponto e vírgula. O = guarda na caixinha da esquerda o valor da direita." },
        { trecho: 'print("Oi, " + nome + "!")', explica: 'O + junta textos. Repare no espaço depois da vírgula em "Oi, ": sem ele sairia "Oi,Criador!". O nome da variável fica SEM aspas: com aspas, apareceria a palavra "nome" em vez do valor guardado.' },
      ],
      guiado: {
        codigo: 'nome = ___                       # qual texto guardar?\nprint("Oi, " + ___ + "!")        # qual variável usar?\n',
        preenche: ['"Criador"', "nome"],
      },
    },
  },

  {
    id: "contas",
    modo: "programa",
    saida: "12\n42",
    exige: [
      { nome: "Faz a conta de somar com +", re: "\\d+\\s*\\+\\s*\\d+" },
      { nome: "Faz a conta de multiplicar com *", re: "\\d+\\s*\\*\\s*\\d+" },
    ],
    rotulo: "o programa",
    variaveis: [],
    conceito: "Contas com números: + e *",
    porque:
      "O computador é uma calculadora muito rápida. Números não vão entre aspas: sem aspas, o computador entende como conta, faz o cálculo e mostra o resultado. Com aspas, ele trataria tudo como texto e mostraria a conta escrita, sem calcular.",
    analogia:
      "Dentro do comando de mostrar você pode escrever uma conta, e ele mostra a resposta, como uma calculadora que escreve o resultado na tela em vez de no visor.",
    ideias: [
      { titulo: "Operadores", texto: "+ soma, - subtrai, * multiplica e / divide. É o * que multiplica; o x do teclado não funciona." },
      { titulo: "Número x texto", texto: "8 + 4 sem aspas é uma conta que dá 12. Com aspas, seria o texto 8 + 4." },
      { titulo: "Uma linha por comando", texto: "Cada comando de mostrar escreve numa linha nova da tela." },
    ],
    dano: ["soma", "mult"],
    abertura: "O programa começa. A tela ainda está vazia.",
    falas: {
      soma: "Calcula 8 + 4 e mostra o resultado na tela: 12.",
      mult: "Calcula 6 * 7 (o * é a multiplicação) e mostra: 42. Cada comando escreve numa linha nova.",
    },
    js: {
      codigo: [
        ["console.log(8 + 4);", "soma"],
        ["console.log(6 * 7);", "mult"],
      ],
      sintaxe: [
        { trecho: "console.log(8 + 4);", explica: 'Sem aspas, o computador entende como conta: calcula 8 + 4 e mostra 12. Se fosse "8 + 4" entre aspas, mostraria o texto 8 + 4.' },
        { trecho: "console.log(6 * 7);", explica: "O asterisco * é a multiplicação. Cada console.log escreve numa linha nova, por isso o 42 aparece abaixo do 12." },
      ],
      guiado: { codigo: "console.log(___);   // some 8 com 4\nconsole.log(___);   // multiplique 6 por 7\n", preenche: ["8 + 4", "6 * 7"] },
    },
    py: {
      codigo: [
        ["print(8 + 4)", "soma"],
        ["print(6 * 7)", "mult"],
      ],
      sintaxe: [
        { trecho: "print(8 + 4)", explica: 'Sem aspas, o computador entende como conta: calcula 8 + 4 e mostra 12. Se fosse "8 + 4" entre aspas, mostraria o texto 8 + 4.' },
        { trecho: "print(6 * 7)", explica: "O asterisco * é a multiplicação. Cada print escreve numa linha nova, por isso o 42 aparece abaixo do 12." },
      ],
      guiado: { codigo: "print(___)   # some 8 com 4\nprint(___)   # multiplique 6 por 7\n", preenche: ["8 + 4", "6 * 7"] },
    },
  },

  {
    id: "dobro",
    fn: "dobro",
    entrada: [4],
    variaveis: ["n", "resultado"],
    conceito: "Funções: uma receita que recebe e devolve",
    porque:
      "Em vez de repetir o mesmo cálculo toda hora, você dá um nome a ele e o chama quando precisar. Você entrega um valor (o parâmetro), a função faz o trabalho e devolve o resultado (o return). Quase tudo que você vai escrever daqui para frente é uma função.",
    analogia:
      "É como uma máquina de suco: você coloca a fruta (a entrada), a máquina trabalha e devolve o suco (a saída). Não precisa saber como ela funciona por dentro toda vez, só usar.",
    ideias: [
      { titulo: "Parâmetro", texto: "O valor que a função recebe. Aqui é n, e a cada chamada ele tem um valor diferente." },
      { titulo: "Retorno", texto: "O resultado que a função devolve com return. Quem chamou a função recebe esse valor de volta." },
      { titulo: "Chamar a função", texto: "Escrever o nome dela com o valor entre parênteses, como dobro(4). É assim que ela entra em ação." },
    ],
    dano: ["calcula", "retorna"],
    falas: {
      def: "O Criador chama dobro(4). A função recebe o 4 e guarda no parâmetro n.",
      calcula: "Calcula n * 2, ou seja, {n} vezes 2. O resultado, {resultado}, fica guardado numa variável.",
      retorna: "return devolve {retorno} para quem chamou a função.",
    },
    js: {
      codigo: [
        ["function dobro(n) {", "def"],
        ["  const resultado = n * 2;", "calcula"],
        ["  return resultado;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "function dobro(n) {", explica: "function cria uma função. dobro é o nome dela e (n) é o parâmetro: o valor que ela recebe quando é chamada. As chaves { } delimitam o corpo da função, o que ela faz." },
        { trecho: "const resultado = n * 2;", explica: "Faz a conta com o valor recebido e guarda numa variável. O * multiplica." },
        { trecho: "return resultado;", explica: "return devolve o resultado para quem chamou a função e encerra ela. Sem return, a função não devolve nada." },
      ],
      guiado: {
        codigo: "function dobro(n) {\n  const resultado = n * ___;   // multiplica por quanto?\n  return ___;                  // o que devolver?\n}\n",
        preenche: ["2", "resultado"],
        testes: [{ in: [4], out: 8 }, { in: [0], out: 0 }, { in: [-3], out: -6 }, { in: [10], out: 20 }],
      },
    },
    py: {
      codigo: [
        ["def dobro(n):", "def"],
        ["    resultado = n * 2", "calcula"],
        ["    return resultado", "retorna"],
      ],
      sintaxe: [
        { trecho: "def dobro(n):", explica: "def cria uma função. dobro é o nome dela e (n) é o parâmetro: o valor que ela recebe quando é chamada. Os dois-pontos : abrem o corpo da função, que vem logo abaixo, recuado." },
        { trecho: "    resultado = n * 2", explica: "Com 4 espaços, a linha pertence à função. Faz a conta com o valor recebido e guarda numa variável. O * multiplica." },
        { trecho: "    return resultado", explica: "return devolve o resultado para quem chamou a função e encerra ela. Sem return, a função não devolve nada." },
      ],
      guiado: {
        codigo: "def dobro(n):\n    resultado = n * ___   # multiplica por quanto?\n    return ___            # o que devolver?\n",
        preenche: ["2", "resultado"],
        testes: [{ in: [4], out: 8 }, { in: [0], out: 0 }, { in: [-3], out: -6 }, { in: [10], out: 20 }],
      },
    },
  },

  {
    id: "portao",
    fn: "somaPares",
    entrada: [5],
    variaveis: ["n", "total", "i"],
    conceito: "Decisão e repetição juntas",
    porque:
      "Aqui você usa tudo que aprendeu até agora. O laço visita cada número, o if decide se o número entra na soma e a variável total guarda o resultado. Nenhuma peça é nova: o desafio é encaixar uma dentro da outra.",
    analogia:
      "É como um fiscal numa fila: ele passa por cada pessoa (o laço), confere se ela atende à regra, no caso ser par (o if), e só então anota (a soma).",
    ideias: [
      { titulo: "if dentro do laço", texto: "A decisão é tomada de novo a cada volta, para cada número que o laço visita." },
      { titulo: "Acumulador condicional", texto: "O total só muda nas voltas em que a condição é verdadeira. Nas outras, ele continua igual." },
      { titulo: "Blocos dentro de blocos", texto: "Cada bloco dentro de outro fica mais para dentro (recuado). Esse recuo mostra o que pertence a quê." },
    ],
    dano: ["soma"],
    ritmo: 1700,
    falas: {
      def: "O Criador chama somaPares(5). Só os números pares de 1 até 5 entram na soma: o 2 e o 4.",
      total: "Cria o total começando em {total}.",
      laco: {
        corpo: "se",
        entra: "O laço pega o próximo número: i = {i}.",
        sai: "Acabaram os números, então o laço termina.",
      },
      se: {
        corpo: "soma",
        entra: "{i} dividido por 2 sobra 0? Sim, então {i} é par e o programa entra no bloco.",
        sai: "{i} dividido por 2 sobra 0? Não, {i} é ímpar, então o programa pula o bloco.",
      },
      soma: "Soma o par ao total: agora total vale {total}.",
      retorna: "return devolve o total: {retorno}, que é 2 + 4.",
    },
    js: {
      codigo: [
        ["function somaPares(n) {", "def"],
        ["  let total = 0;", "total"],
        ["  for (let i = 1; i <= n; i++) {", "laco"],
        ["    if (i % 2 === 0) {", "se"],
        ["      total += i;", "soma"],
        ["    }", null],
        ["  }", null],
        ["  return total;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let total = 0;", explica: "A variável que vai acumulando a soma, começando em 0." },
        { trecho: "for (let i = 1; i <= n; i++) {", explica: "O laço visita os números de 1 até n: começa em 1 (let i = 1), continua enquanto i <= n e soma 1 a i a cada volta (i++)." },
        { trecho: "if (i % 2 === 0) {", explica: "O if fica dentro do for, então é avaliado a cada volta. i % 2 === 0 é a pergunta 'é par?': o resto da divisão por 2 é zero." },
        { trecho: "total += i;", explica: "Está dentro do if (duas chaves para dentro), então só soma quando o número é par." },
        { trecho: "return total;", explica: "Fora do laço: devolve o total depois que todos os números foram visitados." },
      ],
      guiado: {
        codigo:
          "function somaPares(n) {\n" +
          "  let total = ___;                      // começa em quanto?\n" +
          "  for (let i = 1; i <= ___; i++) {      // até onde vai o laço?\n" +
          "    if (i % ___ === 0) {                // dividido por quanto, sem sobra, é par?\n" +
          "      total += ___;                     // o que somar ao total?\n" +
          "    }\n" +
          "  }\n" +
          "  return ___;                           // o que devolver?\n" +
          "}\n",
        preenche: ["0", "n", "2", "i", "total"],
        testes: [{ in: [6], out: 12 }, { in: [10], out: 30 }, { in: [1], out: 0 }, { in: [7], out: 12 }],
      },
    },
    py: {
      codigo: [
        ["def somaPares(n):", "def"],
        ["    total = 0", "total"],
        ["    for i in range(1, n + 1):", "laco"],
        ["        if i % 2 == 0:", "se"],
        ["            total += i", "soma"],
        ["    return total", "retorna"],
      ],
      sintaxe: [
        { trecho: "    total = 0", explica: "A variável que vai acumulando a soma, começando em 0." },
        { trecho: "    for i in range(1, n + 1):", explica: "range(1, n + 1) gera os números de 1 até n (o último, n + 1, não entra). A cada volta, i recebe o próximo." },
        { trecho: "        if i % 2 == 0:", explica: "O if fica dentro do for (8 espaços), então é avaliado a cada volta. i % 2 == 0 é a pergunta 'é par?': o resto da divisão por 2 é zero." },
        { trecho: "            total += i", explica: "Com 12 espaços, está dentro do if, que está dentro do for. Só soma quando o número é par." },
        { trecho: "    return total", explica: "Só 4 espaços: fora do laço. Devolve o total depois que todos os números foram visitados." },
      ],
      guiado: {
        codigo:
          "def somaPares(n):\n" +
          "    total = ___                         # começa em quanto?\n" +
          "    for i in range(1, ___ + 1):         # até onde vai o laço?\n" +
          "        if i % ___ == 0:                # dividido por quanto, sem sobra, é par?\n" +
          "            total += ___                # o que somar ao total?\n" +
          "    return ___                          # o que devolver?\n",
        preenche: ["0", "n", "2", "i", "total"],
        testes: [{ in: [6], out: 12 }, { in: [10], out: 30 }, { in: [1], out: 0 }, { in: [7], out: 12 }],
      },
    },
  },
];
