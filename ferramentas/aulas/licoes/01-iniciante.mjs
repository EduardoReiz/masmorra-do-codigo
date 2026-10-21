// Aulas do rank E e D (parte 1): par, exame-e, maior, vogais.
// Formato: veja ../gerar.mjs. Cada linha de código é [texto, chave]; a chave liga a linha à fala.
export default [
  {
    id: "par",
    fn: "ehPar",
    entrada: [7],
    variaveis: ["n", "resto"],
    conceito: "Resto da divisão e decisão com if",
    porque:
      "Muitas vezes o programa precisa escolher um caminho: se algo é verdade, faz uma coisa; senão, faz outra. Para descobrir se um número é par, usamos o resto da divisão por 2: se não sobra nada, o número é par.",
    analogia:
      "É como separar meias em duplas. Se todas formam par e nenhuma sobra, a quantidade é par. Se sobra uma meia solta, é ímpar. O resto da divisão é exatamente essa meia que sobrou.",
    ideias: [
      { titulo: "Resto (%)", texto: "O operador % devolve o que sobra de uma divisão. 7 % 2 dá 1, porque 7 = 3 × 2 + 1." },
      { titulo: "Condição", texto: "Uma pergunta de sim ou não. O resultado é sempre verdadeiro (true) ou falso (false)." },
      { titulo: "if (se)", texto: "Executa um bloco de código somente quando a condição é verdadeira. Se for falsa, o bloco é pulado." },
    ],
    dano: ["retornaV", "retornaF"],
    falas: {
      def: "O Criador chama ehPar(7). A função recebe o 7 e guarda na variável n.",
      resto: "n % 2 é o resto da divisão de {n} por 2. Sobrou {resto}.",
      se: {
        corpo: "retornaV",
        entra: "O resto ({resto}) é igual a 0? Sim, então o número é par e o programa entra no bloco do if.",
        sai: "O resto ({resto}) é igual a 0? Não. A condição é falsa, então o programa pula o bloco do if.",
      },
      retornaV: "return devolve {retorno} e encerra a função: o número é par.",
      retornaF: "Como o if não rodou, a função continua até este return e devolve {retorno}: o número é ímpar.",
    },
    js: {
      codigo: [
        ["function ehPar(n) {", "def"],
        ["  const resto = n % 2;", "resto"],
        ["  if (resto === 0) {", "se"],
        ["    return true;", "retornaV"],
        ["  }", null],
        ["  return false;", "retornaF"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const resto = n % 2;", explica: "const cria uma variável que não vai mudar depois. O % devolve o resto da divisão (7 % 2 dá 1). O ponto e vírgula ; encerra a instrução." },
        { trecho: "if (resto === 0) {", explica: "if (se) executa o bloco entre chaves só quando a condição entre parênteses for verdadeira. === compara se os dois lados são iguais. Um = sozinho serve para guardar valor, não para comparar." },
        { trecho: "return true;", explica: "return devolve o resultado e encerra a função na hora. true e false são os valores lógicos (verdadeiro e falso), escritos em minúsculas." },
        { trecho: "return false;", explica: "Se o if não rodou, a função segue em frente e chega aqui. Esta linha está fora do bloco do if." },
      ],
      guiado: {
        codigo:
          "function ehPar(n) {\n" +
          "  const resto = n % ___;      // divide por quanto?\n" +
          "  if (resto === ___) {        // quanto sobra quando é par?\n" +
          "    return ___;               // então devolve o quê?\n" +
          "  }\n" +
          "  return ___;                 // senão, devolve o quê?\n" +
          "}\n",
        preenche: ["2", "0", "true", "false"],
        testes: [{ in: [4], out: true }, { in: [7], out: false }, { in: [0], out: true }, { in: [-3], out: false }],
      },
    },
    py: {
      codigo: [
        ["def ehPar(n):", "def"],
        ["    resto = n % 2", "resto"],
        ["    if resto == 0:", "se"],
        ["        return True", "retornaV"],
        ["    return False", "retornaF"],
      ],
      sintaxe: [
        { trecho: "    resto = n % 2", explica: "Cria a variável resto guardando o resto da divisão (7 % 2 dá 1). Em Python não precisa de const nem de ponto e vírgula." },
        { trecho: "    if resto == 0:", explica: "if (se) executa o bloco recuado só se a condição for verdadeira. == compara se os dois lados são iguais (um = sozinho guarda valor). Os dois-pontos : abrem o bloco." },
        { trecho: "        return True", explica: "Com 8 espaços, esta linha pertence ao bloco do if. return devolve o resultado e encerra a função. Em Python, True e False começam com letra maiúscula." },
        { trecho: "    return False", explica: "Com apenas 4 espaços, esta linha está fora do if: só roda quando o bloco do if não rodou." },
      ],
      guiado: {
        codigo:
          "def ehPar(n):\n" +
          "    resto = n % ___        # divide por quanto?\n" +
          "    if resto == ___:       # quanto sobra quando é par?\n" +
          "        return ___         # então devolve o quê?\n" +
          "    return ___             # senão, devolve o quê?\n",
        preenche: ["2", "0", "True", "False"],
        testes: [{ in: [4], out: true }, { in: [7], out: false }, { in: [0], out: true }, { in: [-3], out: false }],
      },
    },
  },

  {
    id: "exame-e",
    fn: "inverteNumero",
    entrada: [-120],
    variaveis: ["n", "sinal", "texto", "invertido"],
    conceito: "Número como texto e o cuidado com o sinal",
    porque:
      "Um número não se deixa ler de trás para frente, mas um texto sim. Então o truque é trocar de tipo: transformar o número em texto, inverter o texto e voltar para número. O sinal negativo atrapalha, por isso ele é guardado à parte.",
    analogia:
      "É como ler um cartaz de trás para frente: você primeiro tira a moldura (o sinal), lê as letras do fim para o começo e depois recoloca a moldura no lugar.",
    ideias: [
      { titulo: "Tipos", texto: "Número e texto são coisas diferentes. Dá para converter de um para o outro, e cada tipo tem as suas ferramentas." },
      { titulo: "Sinal à parte", texto: "Guardamos se o número é negativo antes de mexer nos dígitos, e recolocamos o sinal no final." },
      { titulo: "Zeros à esquerda", texto: "Ao voltar para número, os zeros do começo somem sozinhos: 021 vira 21." },
    ],
    dano: ["invertido", "retorna"],
    falas: {
      def: "O Criador chama inverteNumero(-120). O número é negativo e termina em zero: dois cuidados.",
      sinal: "Antes de mexer nos dígitos, ele guarda o sinal: {sinal} (-1 se o número for negativo, 1 se for positivo).",
      texto: "Tira o sinal do número e transforma em texto: {texto}. Agora dá para ler de trás para frente.",
      invertido: "Lê o texto de trás para frente: {invertido}. Os zeros que foram para a frente somem no próximo passo.",
      retorna: "Converte {invertido} de volta em número (os zeros da frente somem) e multiplica pelo sinal {sinal}. O resultado é {retorno}.",
    },
    js: {
      codigo: [
        ["function inverteNumero(n) {", "def"],
        ["  const sinal = n < 0 ? -1 : 1;", "sinal"],
        ["  const texto = String(Math.abs(n));", "texto"],
        ['  const invertido = texto.split("").reverse().join("");', "invertido"],
        ["  return sinal * Number(invertido);", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const sinal = n < 0 ? -1 : 1;", explica: "O operador ternário ? : escolhe entre dois valores: se n < 0 for verdadeiro, o resultado é -1; senão, é 1." },
        { trecho: "const texto = String(Math.abs(n));", explica: "Math.abs(n) devolve o valor absoluto (sem o sinal). String(...) transforma o número em texto, uma sequência de caracteres que dá para percorrer." },
        { trecho: 'const invertido = texto.split("").reverse().join("");', explica: 'Três ferramentas em cadeia, e a saída de cada uma entra na seguinte: split("") separa o texto numa lista de caracteres; reverse() inverte a lista; join("") junta tudo de volta num texto.' },
        { trecho: "return sinal * Number(invertido);", explica: 'Number(...) transforma o texto de volta em número (Number("021") dá 21, sem o zero). Multiplicar pelo sinal recoloca o negativo, se houver.' },
      ],
      guiado: {
        codigo:
          "function inverteNumero(n) {\n" +
          "  const sinal = n < 0 ? ___ : 1;                         // qual o sinal quando é negativo?\n" +
          "  const texto = String(Math.abs(n));\n" +
          '  const invertido = texto.split("").___().join("");      // qual método inverte a lista?\n' +
          "  return sinal * Number(___);                            // o que converter de volta?\n" +
          "}\n",
        preenche: ["-1", "reverse", "invertido"],
        testes: [{ in: [123], out: 321 }, { in: [-45], out: -54 }, { in: [120], out: 21 }, { in: [5], out: 5 }],
      },
    },
    py: {
      codigo: [
        ["def inverteNumero(n):", "def"],
        ["    sinal = -1 if n < 0 else 1", "sinal"],
        ["    texto = str(abs(n))", "texto"],
        ["    invertido = texto[::-1]", "invertido"],
        ["    return sinal * int(invertido)", "retorna"],
      ],
      sintaxe: [
        { trecho: "    sinal = -1 if n < 0 else 1", explica: "Expressão condicional: o valor é -1 se n < 0 for verdadeiro, senão é 1. Lê-se quase como português." },
        { trecho: "    texto = str(abs(n))", explica: "abs(n) devolve o valor absoluto (sem o sinal) e str(...) transforma o número em texto, uma sequência de caracteres que dá para percorrer." },
        { trecho: "    invertido = texto[::-1]", explica: "O fatiamento [início:fim:passo] com passo -1 percorre o texto de trás para frente. Sem início nem fim, ele pega o texto inteiro." },
        { trecho: "    return sinal * int(invertido)", explica: "int(...) transforma o texto de volta em número inteiro (int('021') dá 21, sem o zero). Multiplicar pelo sinal recoloca o negativo, se houver." },
      ],
      guiado: {
        codigo:
          "def inverteNumero(n):\n" +
          "    sinal = ___ if n < 0 else 1       # qual o sinal quando é negativo?\n" +
          "    texto = str(abs(n))\n" +
          "    invertido = texto[::___]          # qual passo percorre de trás para frente?\n" +
          "    return sinal * int(___)           # o que converter de volta?\n",
        preenche: ["-1", "-1", "invertido"],
        testes: [{ in: [123], out: 321 }, { in: [-45], out: -54 }, { in: [120], out: 21 }, { in: [5], out: 5 }],
      },
    },
  },

  {
    id: "maior",
    fn: "maior",
    entrada: [[3, 9, 2]],
    variaveis: ["lista", "campeao", "numero"],
    conceito: "Percorrer uma lista guardando o campeão",
    porque:
      "Listas guardam vários valores juntos. Para achar o maior, o computador não consegue 'bater o olho': ele olha um item por vez. A solução é guardar o maior visto até agora e trocá-lo quando aparece um maior.",
    analogia:
      "É como um campeonato de reis da colina: o primeiro competidor começa no topo. Cada novo competidor desafia o campeão atual; se for maior, toma o lugar. No fim, quem está no topo é o maior de todos.",
    ideias: [
      { titulo: "Lista", texto: "Vários valores em ordem, cada um com uma posição. A primeira posição é a 0, e não a 1." },
      { titulo: "Laço sobre lista", texto: "Repete o bloco uma vez para cada item da lista, entregando o item atual numa variável." },
      { titulo: "Campeão", texto: "Uma variável que guarda o melhor valor encontrado até agora e é atualizada quando surge um melhor." },
    ],
    dano: ["troca"],
    falas: {
      def: "O Criador chama maior([3, 9, 2]). A lista inteira fica guardada na variável lista.",
      campeao: "Elege o primeiro item da lista como campeão por enquanto: campeao = {campeao}.",
      laco: {
        corpo: "se",
        entra: "O laço pega o próximo item da lista: numero = {numero}.",
        sai: "Acabaram os itens da lista, então o laço termina.",
      },
      se: {
        corpo: "troca",
        entra: "{numero} é maior que o campeão ({campeao})? Sim, então entra no bloco.",
        sai: "{numero} é maior que o campeão ({campeao})? Não, o campeão continua o mesmo.",
      },
      troca: "O novo campeão é {campeao}: o valor foi trocado na mesma variável.",
      retorna: "return devolve o campeão: {retorno}.",
    },
    js: {
      codigo: [
        ["function maior(lista) {", "def"],
        ["  let campeao = lista[0];", "campeao"],
        ["  for (const numero of lista) {", "laco"],
        ["    if (numero > campeao) {", "se"],
        ["      campeao = numero;", "troca"],
        ["    }", null],
        ["  }", null],
        ["  return campeao;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let campeao = lista[0];", explica: "lista[0] pega o item na posição 0, a primeira (a contagem começa no zero). let cria uma variável que vai mudar ao longo do programa." },
        { trecho: "for (const numero of lista) {", explica: "for...of percorre a lista: a cada volta, numero recebe o próximo item. As chaves { } marcam o corpo do laço, o que se repete." },
        { trecho: "if (numero > campeao) {", explica: "if executa o bloco só quando a condição for verdadeira. O sinal > pergunta se o da esquerda é maior que o da direita." },
        { trecho: "campeao = numero;", explica: "Troca o campeão: guarda o novo valor na variável que já existe. Sem let, porque ela já foi criada." },
        { trecho: "return campeao;", explica: "Está depois das chaves do laço, então só roda quando o laço termina: devolve o campeão." },
      ],
      guiado: {
        codigo:
          "function maior(lista) {\n" +
          "  let campeao = lista[___];        // qual posição é a primeira?\n" +
          "  for (const numero of ___) {      // o que percorrer?\n" +
          "    if (numero ___ campeao) {      // quando o campeão é trocado?\n" +
          "      campeao = ___;               // quem vira o novo campeão?\n" +
          "    }\n" +
          "  }\n" +
          "  return campeao;\n" +
          "}\n",
        preenche: ["0", "lista", ">", "numero"],
        testes: [{ in: [[3, 9, 2]], out: 9 }, { in: [[5]], out: 5 }, { in: [[-4, -1, -9]], out: -1 }, { in: [[1, 2, 3, 4]], out: 4 }],
      },
    },
    py: {
      codigo: [
        ["def maior(lista):", "def"],
        ["    campeao = lista[0]", "campeao"],
        ["    for numero in lista:", "laco"],
        ["        if numero > campeao:", "se"],
        ["            campeao = numero", "troca"],
        ["    return campeao", "retorna"],
      ],
      sintaxe: [
        { trecho: "    campeao = lista[0]", explica: "lista[0] pega o item na posição 0, a primeira (a contagem começa no zero). Cria a variável campeao com esse valor." },
        { trecho: "    for numero in lista:", explica: "for...in percorre a lista: a cada volta, numero recebe o próximo item. Os dois-pontos : abrem o corpo do laço, que fica recuado." },
        { trecho: "        if numero > campeao:", explica: "if executa o bloco recuado só quando a condição for verdadeira. O sinal > pergunta se o da esquerda é maior. Já está dentro do for (8 espaços)." },
        { trecho: "            campeao = numero", explica: "Com 12 espaços, está dentro do if, que está dentro do for. Troca o campeão guardando o novo valor." },
        { trecho: "    return campeao", explica: "Só 4 espaços: está fora do for. Roda depois que o laço termina e devolve o campeão." },
      ],
      guiado: {
        codigo:
          "def maior(lista):\n" +
          "    campeao = lista[___]        # qual posição é a primeira?\n" +
          "    for numero in ___:          # o que percorrer?\n" +
          "        if numero ___ campeao:  # quando o campeão é trocado?\n" +
          "            campeao = ___       # quem vira o novo campeão?\n" +
          "    return campeao\n",
        preenche: ["0", "lista", ">", "numero"],
        testes: [{ in: [[3, 9, 2]], out: 9 }, { in: [[5]], out: 5 }, { in: [[-4, -1, -9]], out: -1 }, { in: [[1, 2, 3, 4]], out: 4 }],
      },
    },
  },

  {
    id: "vogais",
    fn: "contaVogais",
    entrada: ["casa"],
    variaveis: ["texto", "contador", "letra"],
    conceito: "Percorrer um texto e contar o que importa",
    porque:
      "Um texto é uma sequência de letras, e dá para percorrer uma por uma, como numa lista. Para contar só as vogais, a gente passa por todas as letras e, a cada uma, pergunta: 'você é uma vogal?'. Se for, soma um no contador.",
    analogia:
      "É como passar o dedo por uma frase fazendo um risquinho no caderno cada vez que aparece uma vogal. No fim, o número de risquinhos é a resposta.",
    ideias: [
      { titulo: "Texto percorrível", texto: "Um texto funciona como uma lista de caracteres: o laço entrega uma letra por vez." },
      { titulo: "Pertencer a um conjunto", texto: "Perguntar se um valor está dentro de um grupo (as vogais). A resposta é verdadeiro ou falso." },
      { titulo: "Contador", texto: "Uma variável que começa em 0 e ganha +1 cada vez que o evento que interessa acontece." },
    ],
    dano: ["soma"],
    falas: {
      def: 'O Criador chama contaVogais("casa"). O texto fica guardado na variável texto.',
      contador: "Cria o contador começando em {contador}: ainda não contou nenhuma vogal.",
      laco: {
        corpo: "se",
        entra: "O laço pega a próxima letra do texto: letra = {letra}.",
        sai: "Acabaram as letras do texto, então o laço termina.",
      },
      se: {
        corpo: "soma",
        entra: "{letra} está entre as vogais? Sim, então entra no bloco.",
        sai: "{letra} está entre as vogais? Não, então o programa pula o bloco.",
      },
      soma: "contador += 1 soma um ao contador, que agora vale {contador}.",
      retorna: "return devolve o contador: {retorno} vogais.",
    },
    js: {
      codigo: [
        ["function contaVogais(texto) {", "def"],
        ["  let contador = 0;", "contador"],
        ["  for (const letra of texto) {", "laco"],
        ['    if ("aeiou".includes(letra)) {', "se"],
        ["      contador += 1;", "soma"],
        ["    }", null],
        ["  }", null],
        ["  return contador;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let contador = 0;", explica: "let cria a variável contador, que vai mudar, começando em 0. O ponto e vírgula encerra a instrução." },
        { trecho: "for (const letra of texto) {", explica: "O mesmo for...of das listas funciona com texto: a cada volta, letra recebe o próximo caractere." },
        { trecho: 'if ("aeiou".includes(letra)) {', explica: 'includes pergunta se o texto "aeiou" contém a letra e responde true ou false. O if usa essa resposta para decidir se entra no bloco.' },
        { trecho: "contador += 1;", explica: "+= soma ao valor que já estava na variável. É o mesmo que contador = contador + 1." },
        { trecho: "return contador;", explica: "Fora das chaves do for: só roda quando o laço termina." },
      ],
      guiado: {
        codigo:
          "function contaVogais(texto) {\n" +
          "  let contador = ___;                  // começa em quanto?\n" +
          "  for (const letra of ___) {           // o que percorrer?\n" +
          '    if ("aeiou".___(letra)) {          // qual método pergunta se contém?\n' +
          "      contador += ___;                 // quanto somar?\n" +
          "    }\n" +
          "  }\n" +
          "  return contador;\n" +
          "}\n",
        preenche: ["0", "texto", "includes", "1"],
        testes: [{ in: ["banana"], out: 3 }, { in: ["xyz"], out: 0 }, { in: ["aeiou"], out: 5 }, { in: [""], out: 0 }],
      },
    },
    py: {
      codigo: [
        ["def contaVogais(texto):", "def"],
        ["    contador = 0", "contador"],
        ["    for letra in texto:", "laco"],
        ['        if letra in "aeiou":', "se"],
        ["            contador += 1", "soma"],
        ["    return contador", "retorna"],
      ],
      sintaxe: [
        { trecho: "    contador = 0", explica: "Cria a variável contador começando em 0. Sem ponto e vírgula." },
        { trecho: "    for letra in texto:", explica: "O mesmo for...in das listas funciona com texto: a cada volta, letra recebe o próximo caractere. Os dois-pontos abrem o corpo." },
        { trecho: '        if letra in "aeiou":', explica: 'in pergunta se a letra está dentro do texto "aeiou" e responde True ou False. O if usa essa resposta para decidir se entra no bloco.' },
        { trecho: "            contador += 1", explica: "+= soma ao valor que já estava na variável. É o mesmo que contador = contador + 1. Está dentro do if (12 espaços)." },
        { trecho: "    return contador", explica: "Só 4 espaços: fora do for. Roda quando o laço termina." },
      ],
      guiado: {
        codigo:
          "def contaVogais(texto):\n" +
          "    contador = ___                  # começa em quanto?\n" +
          "    for letra in ___:               # o que percorrer?\n" +
          '        if letra ___ "aeiou":       # qual palavra pergunta se está dentro?\n' +
          "            contador += ___         # quanto somar?\n" +
          "    return contador\n",
        preenche: ["0", "texto", "in", "1"],
        testes: [{ in: ["banana"], out: 3 }, { in: ["xyz"], out: 0 }, { in: ["aeiou"], out: 5 }, { in: [""], out: 0 }],
      },
    },
  },
];
