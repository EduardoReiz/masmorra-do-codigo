// Aulas dos ranks B e A: primos, raiz, exame-b, palavras, anagrama, exame-a.
const PRIMO_JS = `function ehPrimo(n) {
  if (n < 2) {
    return false;
  }
  let divisor = 2;
  while (divisor * divisor <= n) {
    if (n % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
}`;
const PRIMO_PY = `def ehPrimo(n):
    if n < 2:
        return False
    divisor = 2
    while divisor * divisor <= n:
        if n % divisor == 0:
            return False
        divisor += 1
    return True
`;

export default [
  {
    id: "primos",
    fn: "contaPrimos",
    entrada: [5],
    variaveis: ["n", "contador", "numero"],
    conceito: "Reaproveitar uma função dentro de um laço",
    porque:
      "Contar quantos primos existem até n é testar cada número de 2 a n e anotar os que passam. A parte difícil, saber se um número é primo, você já resolveu: é a função ehPrimo. Funções são peças reutilizáveis, e uma peça pode chamar outra.",
    analogia:
      "É como uma linha de montagem com um inspetor: o inspetor (ehPrimo) já sabe aprovar ou reprovar uma peça. O laço só entrega uma peça por vez e conta quantas foram aprovadas.",
    ideias: [
      { titulo: "Chamar uma função", texto: "Escrever o nome dela com os valores entre parênteses. Ela devolve uma resposta que você pode usar numa condição." },
      { titulo: "Dividir para conquistar", texto: "Cada função resolve um problema pequeno. Problemas grandes viram combinações de funções pequenas." },
      { titulo: "Uma função precisa existir", texto: "O programa só conhece as funções que estão escritas nele. No combate, a ehPrimo também precisa estar no seu código." },
    ],
    dano: ["soma"],
    ritmo: 2000,
    falas: {
      def: "O Criador chama contaPrimos(5). Para cada número de 2 até 5, vai usar o detector que já existe: ehPrimo.",
      contador: "Cria o contador em {contador}: ainda não achou nenhum primo.",
      laco: {
        corpo: "se",
        entra: "O laço passa para o próximo número: numero = {numero}.",
        sai: "Chegou ao fim da contagem, então o laço termina.",
      },
      se: {
        corpo: "soma",
        entra: "ehPrimo({numero}) devolve verdadeiro? Sim, {numero} é primo, então entra no bloco.",
        sai: "ehPrimo({numero}) devolve verdadeiro? Não, {numero} não é primo, então pula o bloco.",
      },
      soma: "Achou um primo! O contador agora vale {contador}.",
      retorna: "return devolve o contador: {retorno} primos até o número pedido.",
    },
    js: {
      preambulo: PRIMO_JS,
      codigo: [
        ["function contaPrimos(n) {", "def"],
        ["  let contador = 0;", "contador"],
        ["  for (let numero = 2; numero <= n; numero++) {", "laco"],
        ["    if (ehPrimo(numero)) {", "se"],
        ["      contador += 1;", "soma"],
        ["    }", null],
        ["  }", null],
        ["  return contador;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "for (let numero = 2; numero <= n; numero++) {", explica: "O for tem três partes entre os parênteses: onde começa (let numero = 2), até quando continua (numero <= n) e o que muda a cada volta (numero++ soma 1). Começa no 2 porque é o primeiro primo." },
        { trecho: "if (ehPrimo(numero)) {", explica: "Chama a função ehPrimo (a do monstro anterior) passando numero. Ela devolve true ou false, e o if usa essa resposta direto como condição. Esta função precisa estar escrita também no seu código." },
        { trecho: "contador += 1;", explica: "Soma 1 ao contador cada vez que aparece um primo." },
        { trecho: "return contador;", explica: "Depois que o laço percorre todos os números, devolve a contagem." },
      ],
      guiado: {
        codigo:
          PRIMO_JS +
          "\n\n// a ehPrimo acima já está pronta; complete a contaPrimos\n" +
          "function contaPrimos(n) {\n" +
          "  let contador = ___;                          // começa em quanto?\n" +
          "  for (let numero = ___; numero <= n; numero++) {   // o primeiro primo\n" +
          "    if (___(numero)) {                         // qual função diz se é primo?\n" +
          "      contador += 1;\n" +
          "    }\n" +
          "  }\n" +
          "  return ___;                                  // o que devolver?\n" +
          "}\n",
        preenche: ["0", "2", "ehPrimo", "contador"],
        testes: [{ in: [1], out: 0 }, { in: [2], out: 1 }, { in: [10], out: 4 }, { in: [20], out: 8 }],
      },
    },
    py: {
      preambulo: PRIMO_PY,
      codigo: [
        ["def contaPrimos(n):", "def"],
        ["    contador = 0", "contador"],
        ["    for numero in range(2, n + 1):", "laco"],
        ["        if ehPrimo(numero):", "se"],
        ["            contador += 1", "soma"],
        ["    return contador", "retorna"],
      ],
      sintaxe: [
        { trecho: "    for numero in range(2, n + 1):", explica: "range(2, n + 1) gera os números de 2 até n (o último, n + 1, não entra, por isso o + 1). A cada volta, numero recebe o próximo. Começa no 2 porque é o primeiro primo." },
        { trecho: "        if ehPrimo(numero):", explica: "Chama a função ehPrimo (a do monstro anterior) passando numero. Ela devolve True ou False, e o if usa essa resposta direto como condição. Esta função precisa estar escrita também no seu código." },
        { trecho: "            contador += 1", explica: "Soma 1 ao contador cada vez que aparece um primo. 12 espaços: dentro do if, dentro do for." },
        { trecho: "    return contador", explica: "Só 4 espaços: fora do for. Depois que o laço percorre todos os números, devolve a contagem." },
      ],
      guiado: {
        codigo:
          PRIMO_PY +
          "\n# a ehPrimo acima já está pronta; complete a contaPrimos\n" +
          "def contaPrimos(n):\n" +
          "    contador = ___                         # começa em quanto?\n" +
          "    for numero in range(___, n + 1):       # o primeiro primo\n" +
          "        if ___(numero):                    # qual função diz se é primo?\n" +
          "            contador += 1\n" +
          "    return ___                             # o que devolver?\n",
        preenche: ["0", "2", "ehPrimo", "contador"],
        testes: [{ in: [1], out: 0 }, { in: [2], out: 1 }, { in: [10], out: 4 }, { in: [20], out: 8 }],
      },
    },
  },

  {
    id: "raiz",
    fn: "somaDigitos",
    entrada: [38],
    variaveis: ["n", "soma"],
    conceito: "Laço dentro de laço",
    porque:
      "Para somar os dígitos de um número, você precisa separá-los: o resto da divisão por 10 dá o último dígito, e dividir por 10 (sem casas decimais) joga o último fora. Fazer isso até acabar é um laço. Repetir a soma até sobrar um só dígito é outro laço, por fora do primeiro.",
    analogia:
      "É como dobrar uma folha de papel: cada rodada de soma é uma dobra. Dentro de cada dobra, você vai destacando os dígitos um a um, de trás para frente, e somando. Você repete a dobra até a folha não dobrar mais.",
    ideias: [
      { titulo: "Último dígito", texto: "n % 10 devolve o último dígito de n. 38 % 10 dá 8." },
      { titulo: "Descartar o último", texto: "Dividir por 10 sem casas decimais remove o último dígito. 38 vira 3." },
      { titulo: "Laço dentro de laço", texto: "O laço de dentro roda inteiro a cada volta do de fora. Cada um tem a sua própria condição de parada." },
    ],
    dano: ["recebe"],
    ritmo: 1500,
    falas: {
      def: "O Criador chama somaDigitos(38). Vai somar os dígitos várias vezes, até sobrar um só.",
      enquanto1: {
        corpo: "zera",
        entra: "{n} ainda tem mais de um dígito (n >= 10)? Sim, então faz mais uma rodada de soma.",
        sai: "{n} tem só um dígito (n < 10). Acabaram as rodadas.",
      },
      zera: "Zera a soma desta rodada: soma = {soma}.",
      enquanto2: {
        corpo: "acumula",
        entra: "Ainda restam dígitos em n? {n} > 0? Sim, então pega o último dígito.",
        sai: "n chegou a {n}: não restam dígitos. Esta rodada terminou.",
      },
      acumula: "n % 10 é o último dígito de {n}. A soma desta rodada agora é {soma}.",
      corta: "Dividir por 10 (sem casas decimais) descarta o último dígito: n passa a valer {n}.",
      recebe: "A soma desta rodada vira o novo n: n = {n}.",
      retorna: "Sobrou um único dígito. return devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function somaDigitos(n) {", "def"],
        ["  while (n >= 10) {", "enquanto1"],
        ["    let soma = 0;", "zera"],
        ["    while (n > 0) {", "enquanto2"],
        ["      soma += n % 10;", "acumula"],
        ["      n = Math.floor(n / 10);", "corta"],
        ["    }", null],
        ["    n = soma;", "recebe"],
        ["  }", null],
        ["  return n;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "while (n >= 10) {", explica: "O laço de fora: repete enquanto n tiver dois ou mais dígitos (n >= 10). Quando sobrar um dígito só, ele para." },
        { trecho: "let soma = 0;", explica: "A soma é criada de novo a cada rodada, porque cada rodada começa do zero. Está dentro do laço de fora." },
        { trecho: "while (n > 0) {", explica: "O laço de dentro: repete enquanto ainda houver dígitos em n (n > 0). Ele termina quando n chega a 0." },
        { trecho: "soma += n % 10;", explica: "n % 10 é o resto da divisão por 10, que é o último dígito (38 % 10 = 8). += soma esse dígito ao que já estava em soma." },
        { trecho: "n = Math.floor(n / 10);", explica: "n / 10 tem casas decimais (38 / 10 = 3.8). Math.floor arredonda para baixo (3), o que descarta o último dígito." },
        { trecho: "n = soma;", explica: "Fim da rodada: a soma vira o novo n. Está no laço de fora, depois do laço de dentro." },
      ],
      guiado: {
        codigo:
          "function somaDigitos(n) {\n" +
          "  while (n >= ___) {                   // quando ainda tem mais de um dígito?\n" +
          "    let soma = 0;\n" +
          "    while (n > 0) {\n" +
          "      soma += n % ___;                 // qual divisor dá o último dígito?\n" +
          "      n = Math.floor(n / ___);         // qual divisor descarta o último dígito?\n" +
          "    }\n" +
          "    n = ___;                           // o que vira o novo n?\n" +
          "  }\n" +
          "  return n;\n" +
          "}\n",
        preenche: ["10", "10", "10", "soma"],
        testes: [{ in: [38], out: 2 }, { in: [5], out: 5 }, { in: [99], out: 9 }, { in: [19], out: 1 }],
      },
    },
    py: {
      codigo: [
        ["def somaDigitos(n):", "def"],
        ["    while n >= 10:", "enquanto1"],
        ["        soma = 0", "zera"],
        ["        while n > 0:", "enquanto2"],
        ["            soma += n % 10", "acumula"],
        ["            n = n // 10", "corta"],
        ["        n = soma", "recebe"],
        ["    return n", "retorna"],
      ],
      sintaxe: [
        { trecho: "    while n >= 10:", explica: "O laço de fora: repete enquanto n tiver dois ou mais dígitos (n >= 10). Quando sobrar um dígito só, ele para." },
        { trecho: "        soma = 0", explica: "A soma é criada de novo a cada rodada, porque cada rodada começa do zero. Está dentro do laço de fora (8 espaços)." },
        { trecho: "        while n > 0:", explica: "O laço de dentro: repete enquanto ainda houver dígitos em n (n > 0). O corpo dele fica ainda mais recuado (12 espaços)." },
        { trecho: "            soma += n % 10", explica: "n % 10 é o resto da divisão por 10, que é o último dígito (38 % 10 = 8). += soma esse dígito ao que já estava em soma." },
        { trecho: "            n = n // 10", explica: "// é a divisão inteira, sem casas decimais: 38 // 10 dá 3. Isso descarta o último dígito." },
        { trecho: "        n = soma", explica: "Fim da rodada: a soma vira o novo n. Com 8 espaços, está no laço de fora e depois do laço de dentro." },
      ],
      guiado: {
        codigo:
          "def somaDigitos(n):\n" +
          "    while n >= ___:                   # quando ainda tem mais de um dígito?\n" +
          "        soma = 0\n" +
          "        while n > 0:\n" +
          "            soma += n % ___           # qual divisor dá o último dígito?\n" +
          "            n = n // ___              # qual divisor descarta o último dígito?\n" +
          "        n = ___                       # o que vira o novo n?\n" +
          "    return n\n",
        preenche: ["10", "10", "10", "soma"],
        testes: [{ in: [38], out: 2 }, { in: [5], out: 5 }, { in: [99], out: 9 }, { in: [19], out: 1 }],
      },
    },
  },

  {
    id: "exame-b",
    fn: "segundoMaior",
    entrada: [[9, 5, 5, 7]],
    variaveis: ["lista", "distintos", "ordenados"],
    conceito: "Valores distintos e ordenação",
    porque:
      "O segundo maior não é simplesmente 'o penúltimo': se o maior aparece repetido, as repetições não contam como segundo lugar. Então primeiro eliminamos os repetidos, depois ordenamos do maior para o menor e pegamos quem está em segundo.",
    analogia:
      "É como um pódio de corrida: se duas pessoas empatam em primeiro, não existe 'segundo lugar' no sentido de ser a mesma pessoa. Primeiro você junta os empates numa só posição, depois olha quem veio logo atrás.",
    ideias: [
      { titulo: "Conjunto (Set)", texto: "Uma coleção que não guarda repetidos. Transformar a lista em conjunto elimina os valores duplicados." },
      { titulo: "Ordenar", texto: "Colocar em ordem do maior para o menor. Depois disso, a posição de cada valor diz o seu lugar no ranking." },
      { titulo: "Posição 1", texto: "A contagem das posições começa no zero: a posição 0 é a primeira, e a posição 1 é a segunda." },
    ],
    dano: ["distintos", "ordenados", "retorna"],
    falas: {
      def: "O Criador chama segundoMaior([9, 5, 5, 7]). Valores repetidos não contam duas vezes.",
      distintos: "Remove os repetidos. O 5 aparecia duas vezes e agora aparece uma: {distintos}.",
      ordenados: "Ordena do maior para o menor: {ordenados}.",
      retorna: "return devolve o item da posição 1, o segundo (a contagem começa no 0): {retorno}.",
    },
    js: {
      codigo: [
        ["function segundoMaior(lista) {", "def"],
        ["  const distintos = [...new Set(lista)];", "distintos"],
        ["  const ordenados = [...distintos].sort((a, b) => b - a);", "ordenados"],
        ["  return ordenados[1];", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const distintos = [...new Set(lista)];", explica: "new Set(lista) cria um conjunto, que não guarda repetidos. Os três pontos (...) espalham os itens dele dentro de uma lista nova entre colchetes []." },
        { trecho: "const ordenados = [...distintos].sort((a, b) => b - a);", explica: "sort ordena a lista. A função (a, b) => b - a ensina como comparar dois itens: quando b - a é positivo, b vem antes, o que dá ordem do maior para o menor. Os três pontos copiam a lista antes, para não alterar a original." },
        { trecho: "return ordenados[1];", explica: "ordenados[1] pega o item na posição 1, a segunda (a contagem começa no zero)." },
      ],
      guiado: {
        codigo:
          "function segundoMaior(lista) {\n" +
          "  const distintos = [...new ___(lista)];                  // qual coleção descarta repetidos?\n" +
          "  const ordenados = [...distintos].sort((a, b) => ___ - ___);   // maior para o menor\n" +
          "  return ordenados[___];                                  // qual posição é a segunda?\n" +
          "}\n",
        preenche: ["Set", "b", "a", "1"],
        testes: [{ in: [[3, 9, 2]], out: 3 }, { in: [[1, 2, 3, 4]], out: 3 }, { in: [[7, 7, 5]], out: 5 }, { in: [[10, 10, 9, 9]], out: 9 }],
      },
    },
    py: {
      codigo: [
        ["def segundoMaior(lista):", "def"],
        ["    distintos = list(set(lista))", "distintos"],
        ["    ordenados = sorted(distintos, reverse=True)", "ordenados"],
        ["    return ordenados[1]", "retorna"],
      ],
      sintaxe: [
        { trecho: "    distintos = list(set(lista))", explica: "set(lista) cria um conjunto, que não guarda repetidos. list(...) converte o conjunto de volta numa lista." },
        { trecho: "    ordenados = sorted(distintos, reverse=True)", explica: "sorted devolve uma lista nova, ordenada. reverse=True pede do maior para o menor (sem isso seria do menor para o maior)." },
        { trecho: "    return ordenados[1]", explica: "ordenados[1] pega o item na posição 1, a segunda (a contagem começa no zero)." },
      ],
      guiado: {
        codigo:
          "def segundoMaior(lista):\n" +
          "    distintos = list(___(lista))             # qual função descarta repetidos?\n" +
          "    ordenados = sorted(distintos, reverse=___)   # do maior para o menor: True ou False?\n" +
          "    return ordenados[___]                    # qual posição é a segunda?\n",
        preenche: ["set", "True", "1"],
        testes: [{ in: [[3, 9, 2]], out: 3 }, { in: [[1, 2, 3, 4]], out: 3 }, { in: [[7, 7, 5]], out: 5 }, { in: [[10, 10, 9, 9]], out: 9 }],
      },
    },
  },

  {
    id: "palavras",
    fn: "contaPalavras",
    entrada: ["  ola   mundo  "],
    variaveis: ["frase", "pedacos"],
    conceito: "Dividir um texto e descartar o vazio",
    porque:
      "Para contar palavras, dividimos a frase nos espaços. O problema é que espaços sobrando (no começo, no fim ou dobrados no meio) criam pedaços vazios, que não são palavras. Então dividimos e depois jogamos fora o que ficou vazio.",
    analogia:
      "É como cortar um colar nas contas: se o fio tem pedaços de linha sem conta nenhuma entre elas, você descarta os pedaços vazios antes de contar quantas contas existem.",
    ideias: [
      { titulo: "Dividir (split)", texto: "Corta um texto em pedaços sempre que encontra um separador, como o espaço. O resultado é uma lista." },
      { titulo: "Pedaço vazio", texto: "Dois espaços seguidos cortam um pedaço sem nenhuma letra. Ele aparece na lista, mas não é uma palavra." },
      { titulo: "Tamanho da lista", texto: "Depois de limpar, o número de itens da lista é o número de palavras." },
    ],
    dano: ["pedacos", "retorna"],
    falas: {
      def: 'O Criador chama contaPalavras("  ola   mundo  "). Tem espaços sobrando no começo, no meio e no fim.',
      pedacos: "Divide a frase nos espaços e descarta os pedaços vazios que sobraram: {pedacos}.",
      retorna: "return devolve a quantidade de pedaços que sobraram: {retorno} palavras.",
    },
    js: {
      codigo: [
        ["function contaPalavras(frase) {", "def"],
        ['  const pedacos = frase.trim().split(" ").filter((p) => p !== "");', "pedacos"],
        ["  return pedacos.length;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'const pedacos = frase.trim().split(" ").filter((p) => p !== "");', explica: 'Três ferramentas em cadeia. trim() tira os espaços das pontas. split(" ") corta o texto em cada espaço (espaços dobrados geram pedaços vazios ""). filter mantém só os itens para os quais a função devolve true: (p) => p !== "" é uma função curta que diz "o pedaço p não é vazio".' },
        { trecho: "return pedacos.length;", explica: "length é o tamanho da lista, ou seja, quantos itens ela tem. Aqui, o número de palavras." },
      ],
      guiado: {
        codigo:
          "function contaPalavras(frase) {\n" +
          '  const pedacos = frase.___().split(" ").filter((p) => p !== ___);   // qual método tira espaços das pontas? como é o pedaço vazio?\n' +
          "  return pedacos.___;                                                  // qual propriedade dá o tamanho?\n" +
          "}\n",
        preenche: ["trim", '""', "length"],
        testes: [{ in: ["ola mundo"], out: 2 }, { in: ["um"], out: 1 }, { in: [""], out: 0 }, { in: ["  a   b  "], out: 2 }],
      },
    },
    py: {
      codigo: [
        ["def contaPalavras(frase):", "def"],
        ["    pedacos = frase.split()", "pedacos"],
        ["    return len(pedacos)", "retorna"],
      ],
      sintaxe: [
        { trecho: "    pedacos = frase.split()", explica: "Sem nada entre os parênteses, split() corta o texto em qualquer quantidade de espaços e ignora os das pontas, então já não sobra nenhum pedaço vazio. Em Python, esse é o jeito mais curto." },
        { trecho: "    return len(pedacos)", explica: "len devolve o tamanho de uma lista, ou seja, quantos itens ela tem. Aqui, o número de palavras." },
      ],
      guiado: {
        codigo:
          "def contaPalavras(frase):\n" +
          "    pedacos = frase.___()          # qual método divide o texto em palavras?\n" +
          "    return ___(pedacos)            # qual função dá o tamanho da lista?\n",
        preenche: ["split", "len"],
        testes: [{ in: ["ola mundo"], out: 2 }, { in: ["um"], out: 1 }, { in: [""], out: 0 }, { in: ["  a   b  "], out: 2 }],
      },
    },
  },

  {
    id: "anagrama",
    fn: "anagrama",
    entrada: ["amor", "roma"],
    variaveis: ["a", "b", "letrasA", "letrasB"],
    conceito: "Dar a mesma 'impressão digital' às duas palavras",
    porque:
      "Duas palavras são anagramas quando usam exatamente as mesmas letras, só em outra ordem. Comparar letra por letra na ordem original não funciona. O truque é colocar as letras de cada palavra em ordem alfabética: se forem anagramas, as duas versões ficam idênticas.",
    analogia:
      "É como separar duas caixas de letras de brinquedo em ordem alfabética sobre a mesa. Se tinham as mesmas letras, as duas fileiras ficam exatamente iguais, mesmo que as palavras originais fossem diferentes.",
    ideias: [
      { titulo: "Ordenar letras", texto: "Colocar as letras de um texto em ordem alfabética descarta a ordem original e deixa só o 'conteúdo'." },
      { titulo: "Mesma assinatura", texto: "Se duas coisas têm o mesmo conteúdo, a versão ordenada delas é igual. Isso permite comparar sem olhar a ordem." },
      { titulo: "Comparar o resultado", texto: "Depois de ordenar, um simples teste de igualdade responde se são anagramas." },
    ],
    dano: ["letrasA", "letrasB", "retorna"],
    falas: {
      def: 'O Criador chama anagrama("amor", "roma"). Anagramas têm as mesmas letras, em outra ordem.',
      letrasA: "Coloca as letras da primeira palavra em ordem alfabética: {letrasA}.",
      letrasB: "Faz o mesmo com a segunda palavra: {letrasB}. Se forem anagramas, as duas versões ordenadas ficam idênticas.",
      retorna: "Compara as duas versões ordenadas. São iguais? return devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function anagrama(a, b) {", "def"],
        ['  const letrasA = a.split("").sort().join("");', "letrasA"],
        ['  const letrasB = b.split("").sort().join("");', "letrasB"],
        ["  return letrasA === letrasB;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'const letrasA = a.split("").sort().join("");', explica: 'Três ferramentas em cadeia: split("") separa o texto numa lista de letras; sort() coloca a lista em ordem alfabética; join("") junta de volta num texto.' },
        { trecho: "return letrasA === letrasB;", explica: "=== compara se os dois textos são exatamente iguais e responde true ou false. Devolver a comparação direto dispensa o if." },
      ],
      guiado: {
        codigo:
          "function anagrama(a, b) {\n" +
          '  const letrasA = a.split("").___().join("");      // qual método ordena?\n' +
          '  const letrasB = ___.split("").sort().join("");   // qual palavra ordenar aqui?\n' +
          "  return letrasA ___ letrasB;                        // qual operador compara se são iguais?\n" +
          "}\n",
        preenche: ["sort", "b", "==="],
        testes: [{ in: ["amor", "roma"], out: true }, { in: ["abc", "abd"], out: false }, { in: ["listen", "silent"], out: true }, { in: ["a", "aa"], out: false }],
      },
    },
    py: {
      codigo: [
        ["def anagrama(a, b):", "def"],
        ['    letrasA = "".join(sorted(a))', "letrasA"],
        ['    letrasB = "".join(sorted(b))', "letrasB"],
        ["    return letrasA == letrasB", "retorna"],
      ],
      sintaxe: [
        { trecho: '    letrasA = "".join(sorted(a))', explica: 'sorted(a) devolve uma lista com as letras em ordem alfabética. "".join(...) junta os itens dessa lista num texto usando o texto vazio como "cola".' },
        { trecho: "    return letrasA == letrasB", explica: "== compara se os dois textos são exatamente iguais e responde True ou False. Devolver a comparação direto dispensa o if." },
      ],
      guiado: {
        codigo:
          "def anagrama(a, b):\n" +
          '    letrasA = "".join(___(a))        # qual função ordena as letras?\n' +
          '    letrasB = "".join(sorted(___))   # qual palavra ordenar aqui?\n' +
          "    return letrasA ___ letrasB       # qual operador compara se são iguais?\n",
        preenche: ["sorted", "b", "=="],
        testes: [{ in: ["amor", "roma"], out: true }, { in: ["abc", "abd"], out: false }, { in: ["listen", "silent"], out: true }, { in: ["a", "aa"], out: false }],
      },
    },
  },

  {
    id: "exame-a",
    fn: "primeiroUnico",
    entrada: ["aabc"],
    variaveis: ["texto", "contagem", "letra"],
    conceito: "Contar a frequência com um dicionário",
    porque:
      "Para achar o primeiro caractere que não se repete, é preciso saber quantas vezes cada um aparece. Isso exige duas passadas pelo texto: na primeira, você conta; na segunda, volta ao começo e pega o primeiro que foi contado uma vez só.",
    analogia:
      "É como achar a única pessoa de camisa vermelha numa fila: primeiro você conta quantas camisas de cada cor existem (anotando numa folha) e depois percorre a fila do começo, parando na primeira pessoa cuja cor aparece uma vez só.",
    ideias: [
      { titulo: "Dicionário", texto: "Uma coleção de pares chave: valor. Aqui, cada letra é uma chave e o valor é quantas vezes ela apareceu." },
      { titulo: "Duas passadas", texto: "A primeira passada junta a informação (a contagem). A segunda usa essa informação para decidir, na ordem original." },
      { titulo: "Valor padrão", texto: "Quando a letra ainda não está no dicionário, ela vale 0: a primeira vez que aparece vira 1." },
    ],
    dano: ["conta", "retornaLetra"],
    ritmo: 1700,
    falas: {
      def: 'O Criador chama primeiroUnico("aabc"). Procura o primeiro caractere que não se repete.',
      contagem: "Cria um dicionário vazio para anotar quantas vezes cada letra aparece: {contagem}.",
      laco1: {
        corpo: "conta",
        entra: "Primeira passada: pega a próxima letra do texto, letra = {letra}.",
        sai: "Terminou a primeira passada. O dicionário já sabe quantas vezes cada letra aparece.",
      },
      conta: "Soma 1 à contagem da letra {letra}. Agora o dicionário é {contagem}.",
      laco2: {
        corpo: "se",
        entra: "Segunda passada, de novo desde o começo: letra = {letra}.",
        sai: "Acabaram as letras e nenhuma apareceu uma vez só.",
      },
      se: {
        corpo: "retornaLetra",
        entra: "A letra {letra} aparece uma vez só? Sim, é a primeira que não se repete.",
        sai: "A letra {letra} aparece uma vez só? Não, ela se repete. Segue para a próxima.",
      },
      retornaLetra: "return devolve {retorno}: a primeira letra com contagem 1.",
      retornaVazio: "Todas as letras se repetem, então devolve um texto vazio.",
    },
    js: {
      codigo: [
        ["function primeiroUnico(texto) {", "def"],
        ["  const contagem = {};", "contagem"],
        ["  for (const letra of texto) {", "laco1"],
        ["    contagem[letra] = (contagem[letra] || 0) + 1;", "conta"],
        ["  }", null],
        ["  for (const letra of texto) {", "laco2"],
        ["    if (contagem[letra] === 1) {", "se"],
        ["      return letra;", "retornaLetra"],
        ["    }", null],
        ["  }", null],
        ['  return "";', "retornaVazio"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const contagem = {};", explica: "As chaves { } vazias criam um objeto vazio, uma coleção de pares chave: valor. Aqui, cada letra será uma chave e o valor será quantas vezes ela apareceu." },
        { trecho: "contagem[letra] = (contagem[letra] || 0) + 1;", explica: "contagem[letra] lê o valor da chave. Se a letra ainda não existe, o resultado é undefined, e o || 0 troca por 0. Soma 1 e guarda de volta na mesma chave." },
        { trecho: "for (const letra of texto) {", explica: "O segundo laço percorre o texto de novo, desde o começo, para respeitar a ordem original." },
        { trecho: "if (contagem[letra] === 1) {", explica: "Confere se a letra apareceu uma única vez. O primeiro que passar é a resposta, e o return dentro do laço encerra a função." },
        { trecho: 'return "";', explica: "Se o laço terminou sem achar nenhuma, devolve um texto vazio." },
      ],
      guiado: {
        codigo:
          "function primeiroUnico(texto) {\n" +
          "  const contagem = {};\n" +
          "  for (const letra of texto) {\n" +
          "    contagem[letra] = (contagem[letra] || ___) + ___;   // valor padrão? quanto somar?\n" +
          "  }\n" +
          "  for (const letra of ___) {                            // o que percorrer de novo?\n" +
          "    if (contagem[letra] === ___) {                      // aparece quantas vezes?\n" +
          "      return letra;\n" +
          "    }\n" +
          "  }\n" +
          "  return ___;                                           // se todas se repetem?\n" +
          "}\n",
        preenche: ["0", "1", "texto", "1", '""'],
        testes: [{ in: ["aabbc"], out: "c" }, { in: ["abc"], out: "a" }, { in: ["swiss"], out: "w" }, { in: ["aabb"], out: "" }],
      },
    },
    py: {
      codigo: [
        ["def primeiroUnico(texto):", "def"],
        ["    contagem = {}", "contagem"],
        ["    for letra in texto:", "laco1"],
        ["        contagem[letra] = contagem.get(letra, 0) + 1", "conta"],
        ["    for letra in texto:", "laco2"],
        ["        if contagem[letra] == 1:", "se"],
        ["            return letra", "retornaLetra"],
        ['    return ""', "retornaVazio"],
      ],
      sintaxe: [
        { trecho: "    contagem = {}", explica: "As chaves { } vazias criam um dicionário vazio, uma coleção de pares chave: valor. Aqui, cada letra será uma chave e o valor será quantas vezes ela apareceu." },
        { trecho: "        contagem[letra] = contagem.get(letra, 0) + 1", explica: "get(letra, 0) devolve o valor da chave, ou 0 se a letra ainda não existe. Soma 1 e guarda de volta na mesma chave." },
        { trecho: "    for letra in texto:", explica: "O segundo laço percorre o texto de novo, desde o começo, para respeitar a ordem original. Está no mesmo nível do primeiro (4 espaços), e não dentro dele." },
        { trecho: "        if contagem[letra] == 1:", explica: "Confere se a letra apareceu uma única vez. O primeiro que passar é a resposta, e o return dentro do laço encerra a função." },
        { trecho: '    return ""', explica: "Só 4 espaços: fora dos laços. Se terminaram sem achar nenhuma, devolve um texto vazio." },
      ],
      guiado: {
        codigo:
          "def primeiroUnico(texto):\n" +
          "    contagem = {}\n" +
          "    for letra in texto:\n" +
          "        contagem[letra] = contagem.get(letra, ___) + ___   # valor padrão? quanto somar?\n" +
          "    for letra in ___:                                      # o que percorrer de novo?\n" +
          "        if contagem[letra] == ___:                         # aparece quantas vezes?\n" +
          "            return letra\n" +
          "    return ___                                             # se todas se repetem?\n",
        preenche: ["0", "1", "texto", "1", '""'],
        testes: [{ in: ["aabbc"], out: "c" }, { in: ["abc"], out: "a" }, { in: ["swiss"], out: "w" }, { in: ["aabb"], out: "" }],
      },
    },
  },
];
