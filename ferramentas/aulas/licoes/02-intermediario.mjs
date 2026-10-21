// Aulas dos ranks D e C: exame-d, inverte, fib, exame-c.
export default [
  {
    id: "exame-d",
    fn: "ehPrimo",
    entrada: [11],
    variaveis: ["n", "divisor"],
    conceito: "Laço while e eficiência: testar só até a raiz",
    porque:
      "Um número primo só se divide por 1 e por ele mesmo. Para descobrir, testamos se algum divisor o divide sem sobra. Só que não precisamos testar todos: basta ir até a raiz quadrada, porque depois dela os divisores aparecem repetidos de trás para frente.",
    analogia:
      "É como procurar duas pessoas que, multiplicadas, formam um número: se uma delas for maior que a raiz, a outra obrigatoriamente é menor, e a gente já teria encontrado essa. Por isso olhar só até a raiz é suficiente.",
    ideias: [
      { titulo: "while (enquanto)", texto: "Repete um bloco enquanto uma condição for verdadeira. Ideal quando você não sabe quantas voltas serão necessárias." },
      { titulo: "Sair mais cedo", texto: "Um return dentro do laço encerra a função na hora. Achou um divisor? Já sabe que não é primo." },
      { titulo: "Atualizar o contador", texto: "No while, é você quem avança o divisor. Esquecer isso cria um laço infinito." },
    ],
    dano: ["proximo", "retornaV"],
    ritmo: 2200,
    falas: {
      def: "O Criador chama ehPrimo(11). Um primo só se divide por 1 e por ele mesmo.",
      menor2: {
        corpo: "retornaF1",
        entra: "{n} é menor que 2? Sim, então não é primo e o programa entra no bloco.",
        sai: "{n} é menor que 2? Não, então ainda pode ser primo e o programa segue para o teste.",
      },
      retornaF1: "return devolve {retorno}: 0, 1 e números negativos não são primos.",
      divisor: "Começa testando o divisor {divisor}. Se algum divisor encontrar o número sem sobra, ele não é primo.",
      enquanto: {
        corpo: "divide",
        entra: "O while continua enquanto divisor × divisor <= n. {divisor} × {divisor} <= {n}? Sim, então testa mais um divisor.",
        sai: "{divisor} × {divisor} <= {n}? Não. Já passamos da raiz quadrada de {n}, então não é preciso testar mais nenhum divisor.",
      },
      divide: {
        corpo: "retornaF2",
        entra: "{n} dividido por {divisor} sobra 0? Sim, então {divisor} divide {n} e ele não é primo.",
        sai: "{n} dividido por {divisor} sobra 0? Não, esse divisor não divide {n}.",
      },
      retornaF2: "return devolve {retorno}: encontramos um divisor, então não é primo.",
      proximo: "Passa para o próximo divisor: {divisor}.",
      retornaV: "Nenhum divisor dividiu {n} sem sobra, então return devolve {retorno}: ele é primo.",
    },
    js: {
      codigo: [
        ["function ehPrimo(n) {", "def"],
        ["  if (n < 2) {", "menor2"],
        ["    return false;", "retornaF1"],
        ["  }", null],
        ["  let divisor = 2;", "divisor"],
        ["  while (divisor * divisor <= n) {", "enquanto"],
        ["    if (n % divisor === 0) {", "divide"],
        ["      return false;", "retornaF2"],
        ["    }", null],
        ["    divisor += 1;", "proximo"],
        ["  }", null],
        ["  return true;", "retornaV"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "if (n < 2) {", explica: "Números menores que 2 (0, 1 e negativos) não são primos. O bloco devolve false e a função termina aqui." },
        { trecho: "let divisor = 2;", explica: "O primeiro divisor a testar é o 2, porque todo número é divisível por 1 e o 1 não ajuda a descobrir nada." },
        { trecho: "while (divisor * divisor <= n) {", explica: "while repete o bloco enquanto a condição for verdadeira. Diferente do for, você mesmo avança a contagem dentro do bloco. divisor * divisor <= n é o mesmo que testar até a raiz quadrada de n." },
        { trecho: "if (n % divisor === 0) {", explica: "Se o resto da divisão é 0, divisor divide n sem sobra, então n não é primo. O return false dentro do laço encerra a função na hora." },
        { trecho: "divisor += 1;", explica: "Avança para o próximo divisor. Sem esta linha, divisor nunca mudaria e o while não terminaria jamais (laço infinito)." },
        { trecho: "return true;", explica: "Fica fora do while: só roda quando o laço terminou sem encontrar nenhum divisor." },
      ],
      guiado: {
        codigo:
          "function ehPrimo(n) {\n" +
          "  if (n < ___) {                        // menores que quanto não são primos?\n" +
          "    return false;\n" +
          "  }\n" +
          "  let divisor = ___;                    // primeiro divisor a testar\n" +
          "  while (divisor * divisor <= ___) {    // até quando testar?\n" +
          "    if (n % divisor === ___) {          // quanto sobra quando divide?\n" +
          "      return false;\n" +
          "    }\n" +
          "    divisor += ___;                     // quanto avançar?\n" +
          "  }\n" +
          "  return true;\n" +
          "}\n",
        preenche: ["2", "2", "n", "0", "1"],
        testes: [{ in: [2], out: true }, { in: [9], out: false }, { in: [13], out: true }, { in: [1], out: false }],
      },
    },
    py: {
      codigo: [
        ["def ehPrimo(n):", "def"],
        ["    if n < 2:", "menor2"],
        ["        return False", "retornaF1"],
        ["    divisor = 2", "divisor"],
        ["    while divisor * divisor <= n:", "enquanto"],
        ["        if n % divisor == 0:", "divide"],
        ["            return False", "retornaF2"],
        ["        divisor += 1", "proximo"],
        ["    return True", "retornaV"],
      ],
      sintaxe: [
        { trecho: "    if n < 2:", explica: "Números menores que 2 (0, 1 e negativos) não são primos. O bloco recuado devolve False e a função termina aqui." },
        { trecho: "    divisor = 2", explica: "O primeiro divisor a testar é o 2, porque todo número é divisível por 1 e o 1 não ajuda a descobrir nada." },
        { trecho: "    while divisor * divisor <= n:", explica: "while repete o bloco recuado enquanto a condição for verdadeira. Diferente do for, você mesmo avança a contagem dentro do bloco. divisor * divisor <= n é o mesmo que testar até a raiz quadrada de n." },
        { trecho: "        if n % divisor == 0:", explica: "Se o resto da divisão é 0, divisor divide n sem sobra, então n não é primo. O return False dentro do laço encerra a função na hora." },
        { trecho: "        divisor += 1", explica: "Está no mesmo nível do if (8 espaços), então roda em toda volta. Avança para o próximo divisor. Sem esta linha o while nunca terminaria." },
        { trecho: "    return True", explica: "Só 4 espaços: fora do while. Só roda quando o laço terminou sem encontrar divisor." },
      ],
      guiado: {
        codigo:
          "def ehPrimo(n):\n" +
          "    if n < ___:                         # menores que quanto não são primos?\n" +
          "        return False\n" +
          "    divisor = ___                       # primeiro divisor a testar\n" +
          "    while divisor * divisor <= ___:     # até quando testar?\n" +
          "        if n % divisor == ___:          # quanto sobra quando divide?\n" +
          "            return False\n" +
          "        divisor += ___                  # quanto avançar?\n" +
          "    return True\n",
        preenche: ["2", "2", "n", "0", "1"],
        testes: [{ in: [2], out: true }, { in: [9], out: false }, { in: [13], out: true }, { in: [1], out: false }],
      },
    },
  },

  {
    id: "inverte",
    fn: "inverte",
    entrada: ["abc"],
    variaveis: ["texto", "resultado", "letra"],
    conceito: "Construir um texto novo, letra por letra",
    porque:
      "Textos não são alterados no lugar: para inverter um texto, você monta um texto novo. O truque é colar cada letra nova na frente do que já foi montado, e não no final. Assim a última letra a chegar fica na primeira posição.",
    analogia:
      "É como empilhar pratos: o último prato colocado fica no topo. Se você pegar um por um, o primeiro que sai é o último que entrou. Colar sempre na frente faz o mesmo com as letras.",
    ideias: [
      { titulo: "Acumulador de texto", texto: "Uma variável que começa vazia e vai ganhando pedaços. Aqui ela vai montando o texto invertido." },
      { titulo: "Concatenar (+)", texto: "Com textos, o + junta um no outro. A ordem importa: letra + resultado coloca a letra na frente." },
      { titulo: "Texto vazio", texto: 'Dois sinais de aspas sem nada dentro ("") formam um texto sem nenhuma letra, o ponto de partida.' },
    ],
    dano: ["junta"],
    falas: {
      def: 'O Criador chama inverte("abc"). Vai montar um texto novo, uma letra por vez.',
      resultado: "Cria o texto novo, ainda vazio: resultado = {resultado}.",
      laco: {
        corpo: "junta",
        entra: "O laço pega a próxima letra do texto: letra = {letra}.",
        sai: "Acabaram as letras do texto original, então o laço termina.",
      },
      junta: "Cola a letra {letra} NA FRENTE do que já existia. Agora resultado = {resultado}.",
      retorna: "return devolve o texto montado: {retorno}.",
    },
    js: {
      codigo: [
        ["function inverte(texto) {", "def"],
        ['  let resultado = "";', "resultado"],
        ["  for (const letra of texto) {", "laco"],
        ["    resultado = letra + resultado;", "junta"],
        ["  }", null],
        ["  return resultado;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'let resultado = "";', explica: "As aspas criam um texto. Sem nada entre elas, é um texto vazio: o ponto de partida do que vamos montar." },
        { trecho: "for (const letra of texto) {", explica: "O for...of percorre o texto: a cada volta, letra recebe o próximo caractere." },
        { trecho: "resultado = letra + resultado;", explica: "Com textos, o + junta (concatena). A conta é feita primeiro, com o valor antigo de resultado, e só depois o resultado novo é guardado na variável. Colocar letra antes faz a nova letra ficar na frente." },
        { trecho: "return resultado;", explica: "Fora das chaves do laço: roda depois que todas as letras foram usadas." },
      ],
      guiado: {
        codigo:
          "function inverte(texto) {\n" +
          "  let resultado = ___;                 // começa com que valor?\n" +
          "  for (const letra of ___) {           // o que percorrer?\n" +
          "    resultado = ___ + resultado;       // o que colar na frente?\n" +
          "  }\n" +
          "  return ___;                          // o que devolver?\n" +
          "}\n",
        preenche: ['""', "texto", "letra", "resultado"],
        testes: [{ in: ["abc"], out: "cba" }, { in: ["masmorra"], out: "arromsam" }, { in: ["a"], out: "a" }, { in: [""], out: "" }],
      },
    },
    py: {
      codigo: [
        ["def inverte(texto):", "def"],
        ['    resultado = ""', "resultado"],
        ["    for letra in texto:", "laco"],
        ["        resultado = letra + resultado", "junta"],
        ["    return resultado", "retorna"],
      ],
      sintaxe: [
        { trecho: '    resultado = ""', explica: "As aspas criam um texto. Sem nada entre elas, é um texto vazio: o ponto de partida do que vamos montar." },
        { trecho: "    for letra in texto:", explica: "O for...in percorre o texto: a cada volta, letra recebe o próximo caractere. Os dois-pontos abrem o corpo do laço." },
        { trecho: "        resultado = letra + resultado", explica: "Com textos, o + junta (concatena). A conta é feita primeiro, com o valor antigo de resultado, e só depois o resultado novo é guardado. Colocar letra antes faz a nova letra ficar na frente." },
        { trecho: "    return resultado", explica: "Só 4 espaços: fora do for. Roda depois que todas as letras foram usadas." },
      ],
      guiado: {
        codigo:
          "def inverte(texto):\n" +
          "    resultado = ___               # começa com que valor?\n" +
          "    for letra in ___:             # o que percorrer?\n" +
          "        resultado = ___ + resultado   # o que colar na frente?\n" +
          "    return ___                    # o que devolver?\n",
        preenche: ['""', "texto", "letra", "resultado"],
        testes: [{ in: ["abc"], out: "cba" }, { in: ["masmorra"], out: "arromsam" }, { in: ["a"], out: "a" }, { in: [""], out: "" }],
      },
    },
  },

  {
    id: "fib",
    fn: "fib",
    entrada: [5],
    variaveis: ["n", "anterior", "atual", "i", "proximo"],
    conceito: "Guardar só os dois últimos valores",
    porque:
      "Na sequência de Fibonacci, cada número é a soma dos dois anteriores: 1, 1, 2, 3, 5, 8... Para chegar no n-ésimo, não precisamos guardar a sequência toda: só lembramos dos dois últimos e andamos uma posição para a frente a cada volta.",
    analogia:
      "É como uma janela que desliza sobre a sequência, sempre mostrando dois números. A cada passo, calculamos o próximo, a janela anda uma casa e o número mais antigo sai de vista.",
    ideias: [
      { titulo: "Dois acumuladores", texto: "Duas variáveis guardam o estado: o penúltimo e o último valor. Elas são atualizadas juntas a cada volta." },
      { titulo: "Ordem importa", texto: "Primeiro calcula o próximo, depois move o anterior e só então atualiza o atual. Trocar a ordem perde um valor." },
      { titulo: "Laço com início", texto: "O laço começa na posição 3 porque as posições 1 e 2 já valem 1 de antemão." },
    ],
    dano: ["desloca2"],
    ritmo: 1900,
    falas: {
      def: "O Criador chama fib(5). Cada número da sequência é a soma dos dois anteriores: 1, 1, 2, 3, 5...",
      anterior: "Começa com os dois primeiros valores da sequência. anterior = {anterior}.",
      atual: "atual = {atual}. Essas duas variáveis guardam os dois últimos números da sequência.",
      laco: {
        corpo: "proximo",
        entra: "O laço calcula a posição {i}. Ele vai até chegar na posição {n}.",
        sai: "O laço termina: já calculamos até a posição {n}.",
      },
      proximo: "O próximo valor é a soma dos dois últimos: {anterior} + {atual} = {proximo}.",
      desloca1: "O anterior passa a valer o que atual valia: anterior = {anterior}.",
      desloca2: "O atual passa a valer o que acabou de ser calculado: atual = {atual}. A janela andou uma posição.",
      retorna: "return devolve atual: {retorno}, o {n}º número da sequência.",
    },
    js: {
      codigo: [
        ["function fib(n) {", "def"],
        ["  let anterior = 1;", "anterior"],
        ["  let atual = 1;", "atual"],
        ["  for (let i = 3; i <= n; i++) {", "laco"],
        ["    const proximo = anterior + atual;", "proximo"],
        ["    anterior = atual;", "desloca1"],
        ["    atual = proximo;", "desloca2"],
        ["  }", null],
        ["  return atual;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let anterior = 1;", explica: "let cria uma variável que vai mudar. As posições 1 e 2 da sequência valem 1, e é daí que partimos." },
        { trecho: "for (let i = 3; i <= n; i++) {", explica: "Laço com contador: let i = 3 é onde começa, i <= n é até quando continua e i++ soma 1 a i a cada volta. Começa em 3 porque as posições 1 e 2 já estão prontas." },
        { trecho: "const proximo = anterior + atual;", explica: "const guarda um valor que não muda dentro desta volta. Soma os dois últimos para achar o próximo número da sequência." },
        { trecho: "anterior = atual;", explica: "Atualiza a variável sem let (ela já existe). A ordem importa: se atualizássemos o atual antes, perderíamos o valor que o anterior precisa receber." },
        { trecho: "return atual;", explica: "Depois do laço, atual guarda o n-ésimo número. Para n = 1 ou n = 2 o laço nem roda, e o resultado já é 1." },
      ],
      guiado: {
        codigo:
          "function fib(n) {\n" +
          "  let anterior = 1;\n" +
          "  let atual = ___;                        // quanto vale a posição 2?\n" +
          "  for (let i = ___; i <= n; i++) {        // a partir de qual posição o laço calcula?\n" +
          "    const proximo = anterior + ___;       // soma dos dois últimos\n" +
          "    anterior = ___;                       // o anterior passa a valer o quê?\n" +
          "    atual = proximo;\n" +
          "  }\n" +
          "  return ___;                             // o que devolver?\n" +
          "}\n",
        preenche: ["1", "3", "atual", "atual", "atual"],
        testes: [{ in: [1], out: 1 }, { in: [2], out: 1 }, { in: [6], out: 8 }, { in: [10], out: 55 }],
      },
    },
    py: {
      codigo: [
        ["def fib(n):", "def"],
        ["    anterior = 1", "anterior"],
        ["    atual = 1", "atual"],
        ["    for i in range(3, n + 1):", "laco"],
        ["        proximo = anterior + atual", "proximo"],
        ["        anterior = atual", "desloca1"],
        ["        atual = proximo", "desloca2"],
        ["    return atual", "retorna"],
      ],
      sintaxe: [
        { trecho: "    anterior = 1", explica: "Cria a variável com o valor inicial. As posições 1 e 2 da sequência valem 1, e é daí que partimos." },
        { trecho: "    for i in range(3, n + 1):", explica: "range(3, n + 1) gera os números de 3 até n (o último, n + 1, não entra, por isso o + 1). A cada volta, i recebe o próximo. Começa em 3 porque as posições 1 e 2 já estão prontas." },
        { trecho: "        proximo = anterior + atual", explica: "Soma os dois últimos para achar o próximo número da sequência. 8 espaços: está dentro do for." },
        { trecho: "        anterior = atual", explica: "Atualiza a variável. A ordem importa: se atualizássemos o atual antes, perderíamos o valor que o anterior precisa receber." },
        { trecho: "    return atual", explica: "Só 4 espaços: fora do for. Para n = 1 ou n = 2 o range fica vazio, o laço nem roda e o resultado já é 1." },
      ],
      guiado: {
        codigo:
          "def fib(n):\n" +
          "    anterior = 1\n" +
          "    atual = ___                         # quanto vale a posição 2?\n" +
          "    for i in range(___, n + 1):         # a partir de qual posição o laço calcula?\n" +
          "        proximo = anterior + ___        # soma dos dois últimos\n" +
          "        anterior = ___                  # o anterior passa a valer o quê?\n" +
          "        atual = proximo\n" +
          "    return ___                          # o que devolver?\n",
        preenche: ["1", "3", "atual", "atual", "atual"],
        testes: [{ in: [1], out: 1 }, { in: [2], out: 1 }, { in: [6], out: 8 }, { in: [10], out: 55 }],
      },
    },
  },

  {
    id: "exame-c",
    fn: "ehPalindromo",
    entrada: ["arara"],
    variaveis: ["texto", "invertido"],
    conceito: "Comparar com o inverso",
    porque:
      "Um palíndromo é uma palavra que se lê igual de frente para trás e de trás para frente. A forma mais direta de conferir é fazer a versão invertida do texto e comparar com o original: se forem idênticos, é palíndromo.",
    analogia:
      "É como olhar uma palavra no espelho: se o reflexo é igual à palavra, ela é simétrica. Aqui o 'espelho' é o texto invertido.",
    ideias: [
      { titulo: "Simetria", texto: "Algo é simétrico quando é igual ao seu inverso. Descobrimos isso comparando as duas versões." },
      { titulo: "Comparar textos", texto: "O operador de igualdade confere se dois textos têm exatamente as mesmas letras na mesma ordem." },
      { titulo: "Devolver a comparação", texto: "A própria comparação já é true ou false. Dá para devolvê-la direto, sem precisar de um if." },
    ],
    dano: ["invertido", "retorna"],
    falas: {
      def: 'O Criador chama ehPalindromo("arara"). Palíndromo é o que se lê igual dos dois lados.',
      invertido: "Gera a versão de trás para frente do texto: {invertido}.",
      retorna: "Compara o texto original com o invertido. São iguais? A comparação devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function ehPalindromo(texto) {", "def"],
        ['  const invertido = texto.split("").reverse().join("");', "invertido"],
        ["  return texto === invertido;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'const invertido = texto.split("").reverse().join("");', explica: 'Três ferramentas em cadeia: split("") separa o texto numa lista de letras; reverse() inverte a lista; join("") junta de volta num texto.' },
        { trecho: "return texto === invertido;", explica: "=== compara se os dois textos são exatamente iguais e responde true ou false. Devolver a comparação direto é mais curto do que escrever um if." },
      ],
      guiado: {
        codigo:
          "function ehPalindromo(texto) {\n" +
          '  const invertido = ___.split("").___().join("");   // de qual texto? qual método inverte?\n' +
          "  return texto ___ invertido;                        // qual operador compara se são iguais?\n" +
          "}\n",
        preenche: ["texto", "reverse", "==="],
        testes: [{ in: ["arara"], out: true }, { in: ["casa"], out: false }, { in: ["a"], out: true }, { in: ["ab"], out: false }],
      },
    },
    py: {
      codigo: [
        ["def ehPalindromo(texto):", "def"],
        ["    invertido = texto[::-1]", "invertido"],
        ["    return texto == invertido", "retorna"],
      ],
      sintaxe: [
        { trecho: "    invertido = texto[::-1]", explica: "O fatiamento [início:fim:passo] com passo -1 percorre o texto de trás para frente. Sem início nem fim, pega o texto inteiro." },
        { trecho: "    return texto == invertido", explica: "== compara se os dois textos são exatamente iguais e responde True ou False. Devolver a comparação direto é mais curto do que escrever um if." },
      ],
      guiado: {
        codigo:
          "def ehPalindromo(texto):\n" +
          "    invertido = ___[::___]         # de qual texto? qual passo inverte?\n" +
          "    return texto ___ invertido     # qual operador compara se são iguais?\n",
        preenche: ["texto", "-1", "=="],
        testes: [{ in: ["arara"], out: true }, { in: ["casa"], out: false }, { in: ["a"], out: true }, { in: ["ab"], out: false }],
      },
    },
  },
];
