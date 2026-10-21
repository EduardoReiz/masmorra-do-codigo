// Aulas do caminho do Estrategista (análise de dados). Só JavaScript. A "base" é uma lista de objetos (as vendas).
const COMUM = {
  objeto: { titulo: "Objeto", texto: "Um registro com campos nomeados, como { produto: 'Espada', preco: 100 }. Para ler um campo, use o ponto: venda.preco." },
  base: { titulo: "Base (lista de objetos)", texto: "Uma tabela em código: cada item da lista é uma linha, e cada campo do objeto é uma coluna." },
};

export default [
  {
    id: "dat-total",
    fn: "totalVendas",
    entrada: [[{ produto: "Espada", preco: 100, qtd: 2 }, { produto: "Escudo", preco: 80, qtd: 3 }]],
    variaveis: ["vendas", "total", "venda"],
    rotulos: { vendas: "a base (2 vendas)" },
    conceito: "Somar uma coluna de uma base de dados",
    porque:
      "Dados quase sempre chegam como uma lista de registros, como linhas de uma planilha. Para responder 'quanto vendemos no total?', você percorre as linhas, calcula o valor de cada uma (preço × quantidade) e vai somando num total.",
    analogia:
      "É como somar a nota fiscal de uma compra: você passa linha por linha, multiplica o preço pela quantidade e acumula o resultado no fim da conta.",
    ideias: [COMUM.base, COMUM.objeto, { titulo: "Acumulador", texto: "Uma variável que começa em 0 e vai crescendo a cada linha." }],
    dano: ["soma"],
    falas: {
      def: "O Criador chama totalVendas com uma base de 2 vendas. Cada venda é um objeto com produto, preço e quantidade.",
      total: "Cria o total começando em {total}.",
      laco: { corpo: "soma", entra: "O laço pega a próxima venda da base: venda = {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      soma: "Calcula preco × qtd desta venda e soma ao total. Agora total = {total}.",
      retorna: "return devolve a receita total: {retorno}.",
    },
    js: {
      codigo: [
        ["function totalVendas(vendas) {", "def"],
        ["  let total = 0;", "total"],
        ["  for (const venda of vendas) {", "laco"],
        ["    total += venda.preco * venda.qtd;", "soma"],
        ["  }", null],
        ["  return total;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "for (const venda of vendas) {", explica: "Percorre a base: a cada volta, venda recebe a próxima linha, que é um objeto com os campos da venda." },
        { trecho: "total += venda.preco * venda.qtd;", explica: "venda.preco lê o campo preco do objeto (o ponto acessa um campo). O * multiplica. O += soma o resultado ao que já estava em total." },
        { trecho: "return total;", explica: "Fora do laço: devolve a soma depois que todas as linhas foram visitadas." },
      ],
      guiado: {
        codigo:
          "function totalVendas(vendas) {\n" +
          "  let total = ___;                              // começa em quanto?\n" +
          "  for (const venda of ___) {                    // o que percorrer?\n" +
          "    total += venda.preco * venda.___;           // qual campo multiplica o preço?\n" +
          "  }\n" +
          "  return ___;                                   // o que devolver?\n" +
          "}\n",
        preenche: ["0", "vendas", "qtd", "total"],
        testes: [{ in: [[{ produto: "X", preco: 10, qtd: 3 }]], out: 30 }, { in: [[]], out: 0 }, { in: [[{ produto: "A", preco: 5, qtd: 2 }, { produto: "B", preco: 1, qtd: 4 }]], out: 14 }],
      },
    },
  },

  {
    id: "dat-conta",
    fn: "contaPorCategoria",
    entrada: [[{ produto: "Espada", categoria: "arma" }, { produto: "Escudo", categoria: "defesa" }, { produto: "Arco", categoria: "arma" }], "arma"],
    variaveis: ["vendas", "categoria", "contador", "venda"],
    rotulos: { vendas: "a base (3 vendas)" },
    conceito: "Filtrar e contar",
    porque:
      "Para responder 'quantos itens são desta categoria?', você percorre a base e, em cada linha, pergunta se o campo categoria é a que procuramos. Só as linhas que passam no teste entram na contagem. É o jeito de transformar uma tabela grande numa resposta pequena.",
    analogia:
      "É como separar as meias por cor: você passa por todas, olha a cor de cada uma e só marca um risquinho quando é a cor pedida. No fim, os risquinhos são a resposta.",
    ideias: [COMUM.base, { titulo: "Condição sobre um campo", texto: "Comparar venda.categoria com o valor procurado dá true ou false." }, { titulo: "Contador condicional", texto: "Só aumenta nas voltas em que a condição é verdadeira." }],
    dano: ["soma"],
    falas: {
      def: 'O Criador chama contaPorCategoria com uma base de 3 vendas e a categoria "arma".',
      contador: "Cria o contador em {contador}.",
      laco: { corpo: "se", entra: "O laço pega a próxima venda: venda = {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      se: {
        corpo: "soma",
        entra: "A categoria desta venda é igual a {categoria}? Sim, então entra no bloco.",
        sai: "A categoria desta venda é igual a {categoria}? Não, então o programa pula o bloco.",
      },
      soma: "Achou uma venda da categoria! O contador agora vale {contador}.",
      retorna: "return devolve o contador: {retorno} itens.",
    },
    js: {
      codigo: [
        ["function contaPorCategoria(vendas, categoria) {", "def"],
        ["  let contador = 0;", "contador"],
        ["  for (const venda of vendas) {", "laco"],
        ["    if (venda.categoria === categoria) {", "se"],
        ["      contador += 1;", "soma"],
        ["    }", null],
        ["  }", null],
        ["  return contador;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "function contaPorCategoria(vendas, categoria) {", explica: "A função recebe dois parâmetros, separados por vírgula: a base e o valor que estamos procurando." },
        { trecho: "if (venda.categoria === categoria) {", explica: "venda.categoria lê o campo do objeto. O === compara se os dois valores são exatamente iguais. O bloco só roda para as linhas que combinam." },
        { trecho: "contador += 1;", explica: "Soma 1 ao contador. Fica dentro do if, por isso só conta as vendas da categoria." },
      ],
      guiado: {
        codigo:
          "function contaPorCategoria(vendas, categoria) {\n" +
          "  let contador = 0;\n" +
          "  for (const venda of vendas) {\n" +
          "    if (venda.___ === categoria) {        // qual campo comparar?\n" +
          "      contador += ___;                    // quanto somar?\n" +
          "    }\n" +
          "  }\n" +
          "  return ___;                             // o que devolver?\n" +
          "}\n",
        preenche: ["categoria", "1", "contador"],
        testes: [{ in: [[{ produto: "A", categoria: "x" }, { produto: "B", categoria: "y" }, { produto: "C", categoria: "x" }], "x"], out: 2 }, { in: [[], "x"], out: 0 }],
      },
    },
  },

  {
    id: "dat-exame-e",
    fn: "maisCaro",
    entrada: [[{ produto: "Espada", preco: 100 }, { produto: "Arco", preco: 140 }, { produto: "Elmo", preco: 90 }]],
    variaveis: ["vendas", "campeao", "venda"],
    rotulos: { vendas: "a base (3 vendas)" },
    conceito: "Achar o maior valor e devolver outro campo",
    porque:
      "Achar o produto mais caro é o mesmo raciocínio de achar o maior número, mas agora cada item é um objeto. Guardamos o objeto campeão inteiro e comparamos os preços; no fim, devolvemos o NOME dele, e não o preço.",
    analogia:
      "É como um torneio: o primeiro competidor é o campeão, e cada novo é comparado com ele pelo preço. Quem ganhar assume o título. No fim, você anuncia o nome do campeão.",
    ideias: [COMUM.objeto, { titulo: "Campeão é um objeto", texto: "Guardamos o registro inteiro, e não só o número, para poder devolver outro campo depois." }, { titulo: "Devolver um campo", texto: "campeao.produto devolve só o nome." }],
    dano: ["troca", "retorna"],
    falas: {
      def: "O Criador chama maisCaro com uma base de 3 vendas.",
      campeao: "Elege a primeira venda como campeã por enquanto: campeao = {campeao}.",
      laco: { corpo: "se", entra: "O laço pega a próxima venda: venda = {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      se: {
        corpo: "troca",
        entra: "O preço desta venda é maior que o do campeão? Sim, então entra no bloco.",
        sai: "O preço desta venda é maior que o do campeão? Não, o campeão continua o mesmo.",
      },
      troca: "O novo campeão é {campeao}.",
      retorna: "return devolve o NOME do campeão, e não o objeto inteiro: {retorno}.",
    },
    js: {
      codigo: [
        ["function maisCaro(vendas) {", "def"],
        ["  let campeao = vendas[0];", "campeao"],
        ["  for (const venda of vendas) {", "laco"],
        ["    if (venda.preco > campeao.preco) {", "se"],
        ["      campeao = venda;", "troca"],
        ["    }", null],
        ["  }", null],
        ["  return campeao.produto;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let campeao = vendas[0];", explica: "vendas[0] é o primeiro objeto da lista (as posições começam em 0). Guardamos o objeto inteiro." },
        { trecho: "if (venda.preco > campeao.preco) {", explica: "Compara o campo preco dos dois objetos. O > pergunta se o da esquerda é maior. Em caso de empate a condição é falsa, e o primeiro continua campeão, como o enunciado pede." },
        { trecho: "return campeao.produto;", explica: "Devolve apenas o campo produto do campeão, o nome." },
      ],
      guiado: {
        codigo:
          "function maisCaro(vendas) {\n" +
          "  let campeao = vendas[___];                 // qual posição é a primeira?\n" +
          "  for (const venda of vendas) {\n" +
          "    if (venda.preco ___ campeao.preco) {     // quando o campeão é trocado?\n" +
          "      campeao = ___;                         // quem vira o campeão?\n" +
          "    }\n" +
          "  }\n" +
          "  return campeao.___;                        // qual campo devolver?\n" +
          "}\n",
        preenche: ["0", ">", "venda", "produto"],
        testes: [{ in: [[{ produto: "A", preco: 5 }]], out: "A" }, { in: [[{ produto: "X", preco: 1 }, { produto: "Y", preco: 3 }, { produto: "Z", preco: 3 }]], out: "Y" }],
      },
    },
  },

  {
    id: "dat-filtra",
    fn: "filtraAcima",
    entrada: [[{ produto: "Espada", preco: 100 }, { produto: "Escudo", preco: 80 }, { produto: "Arco", preco: 140 }], 90],
    variaveis: ["vendas", "limite", "nomes", "venda"],
    rotulos: { vendas: "a base (3 vendas)" },
    conceito: "Filtrar uma base e montar uma lista nova",
    porque:
      "Às vezes a resposta não é um número, e sim uma lista: quais produtos custam mais que um limite? Você percorre a base, testa cada linha e, quando passa, coloca o nome numa lista nova, preservando a ordem em que aparecem.",
    analogia:
      "É como uma peneira: passa por ela só o que atende à regra, e o que sobra no prato é a sua lista.",
    ideias: [COMUM.base, { titulo: "Lista nova", texto: "Começa vazia ([]) e ganha itens com push, um por vez." }, { titulo: "Mesma ordem", texto: "Como percorremos a base do começo ao fim, os nomes saem na ordem original." }],
    dano: ["adiciona"],
    falas: {
      def: "O Criador chama filtraAcima com uma base de 3 vendas e o limite 90.",
      nomes: "Cria a lista de resultados, ainda vazia: nomes = {nomes}.",
      laco: { corpo: "se", entra: "O laço pega a próxima venda: venda = {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      se: {
        corpo: "adiciona",
        entra: "O preço é maior que o limite ({limite})? Sim, então entra no bloco.",
        sai: "O preço é maior que o limite ({limite})? Não, então o programa pula o bloco.",
      },
      adiciona: "Coloca o nome do produto no fim da lista: nomes = {nomes}.",
      retorna: "return devolve a lista de nomes: {retorno}.",
    },
    js: {
      codigo: [
        ["function filtraAcima(vendas, limite) {", "def"],
        ["  const nomes = [];", "nomes"],
        ["  for (const venda of vendas) {", "laco"],
        ["    if (venda.preco > limite) {", "se"],
        ["      nomes.push(venda.produto);", "adiciona"],
        ["    }", null],
        ["  }", null],
        ["  return nomes;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const nomes = [];", explica: "Os colchetes vazios [] criam uma lista vazia. Usamos const porque a variável continua apontando para a mesma lista (o conteúdo dela é que muda)." },
        { trecho: "nomes.push(venda.produto);", explica: "push coloca um item no fim da lista. Aqui entra o nome do produto, não o objeto inteiro." },
        { trecho: "return nomes;", explica: "Devolve a lista montada, na ordem em que os itens foram adicionados." },
      ],
      guiado: {
        codigo:
          "function filtraAcima(vendas, limite) {\n" +
          "  const nomes = ___;                         // como criar uma lista vazia?\n" +
          "  for (const venda of vendas) {\n" +
          "    if (venda.preco ___ limite) {            // quando o produto entra na lista?\n" +
          "      nomes.___(venda.produto);              // qual método coloca no fim da lista?\n" +
          "    }\n" +
          "  }\n" +
          "  return ___;                                // o que devolver?\n" +
          "}\n",
        preenche: ["[]", ">", "push", "nomes"],
        testes: [{ in: [[{ produto: "A", preco: 10 }, { produto: "B", preco: 50 }, { produto: "C", preco: 70 }], 20], out: ["B", "C"] }, { in: [[{ produto: "A", preco: 10 }], 20], out: [] }],
      },
    },
  },

  {
    id: "dat-media",
    fn: "mediaPreco",
    entrada: [[{ produto: "A", preco: 10 }, { produto: "B", preco: 20 }, { produto: "C", preco: 35 }]],
    variaveis: ["vendas", "soma", "venda"],
    rotulos: { vendas: "a base (3 vendas)" },
    conceito: "Média: somar e dividir, com cuidado",
    porque:
      "A média é a soma dos valores dividida pela quantidade. Dois cuidados: com a base vazia não dá para dividir (a resposta combinada é 0), e o resultado precisa ser arredondado para o inteiro mais próximo.",
    analogia:
      "É como dividir a conta do restaurante: soma tudo e divide pelo número de pessoas. Se ninguém foi, não há o que dividir.",
    ideias: [{ titulo: "Caso especial", texto: "Base vazia é tratada logo no começo, antes de qualquer divisão." }, { titulo: "Média", texto: "soma ÷ quantidade. A quantidade é o tamanho da lista (vendas.length)." }, { titulo: "Arredondar", texto: "Math.round leva ao inteiro mais próximo: 21,67 vira 22." }],
    dano: ["soma", "retorna"],
    falas: {
      def: "O Criador chama mediaPreco com uma base de 3 vendas.",
      vazia: { corpo: "retornaZero", entra: "A base está vazia? Sim, então entra no bloco.", sai: "A base está vazia? Não, então dá para calcular a média e o programa pula o bloco." },
      retornaZero: "return devolve 0: não há média de uma base vazia.",
      zera: "Cria a soma dos preços começando em {soma}.",
      laco: { corpo: "soma", entra: "O laço pega a próxima venda: venda = {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      soma: "Soma o preço desta venda: soma = {soma}.",
      retorna: "Divide a soma pela quantidade de vendas e arredonda para o inteiro mais próximo. return devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function mediaPreco(vendas) {", "def"],
        ["  if (vendas.length === 0) {", "vazia"],
        ["    return 0;", "retornaZero"],
        ["  }", null],
        ["  let soma = 0;", "zera"],
        ["  for (const venda of vendas) {", "laco"],
        ["    soma += venda.preco;", "soma"],
        ["  }", null],
        ["  return Math.round(soma / vendas.length);", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "if (vendas.length === 0) {", explica: "length é o tamanho da lista. Com 0 itens, devolvemos 0 antes de tentar dividir." },
        { trecho: "soma += venda.preco;", explica: "Acumula só o preço de cada venda (aqui a quantidade não entra)." },
        { trecho: "return Math.round(soma / vendas.length);", explica: "soma / vendas.length é a média, que pode ter casas decimais (21,666...). Math.round arredonda para o inteiro mais próximo." },
      ],
      guiado: {
        codigo:
          "function mediaPreco(vendas) {\n" +
          "  if (vendas.length === ___) {                 // quando a base está vazia?\n" +
          "    return 0;\n" +
          "  }\n" +
          "  let soma = 0;\n" +
          "  for (const venda of vendas) {\n" +
          "    soma += venda.___;                         // qual campo somar?\n" +
          "  }\n" +
          "  return Math.___(soma / vendas.length);       // qual método arredonda para o mais próximo?\n" +
          "}\n",
        preenche: ["0", "preco", "round"],
        testes: [{ in: [[{ produto: "A", preco: 10 }, { produto: "B", preco: 20 }]], out: 15 }, { in: [[]], out: 0 }, { in: [[{ produto: "C", preco: 7 }]], out: 7 }],
      },
    },
  },

  {
    id: "dat-exame-d",
    fn: "topProduto",
    entrada: [[{ produto: "Espada", preco: 100, qtd: 2 }, { produto: "Escudo", preco: 80, qtd: 3 }, { produto: "Arco", preco: 140, qtd: 1 }]],
    variaveis: ["vendas", "melhor", "venda"],
    rotulos: { vendas: "a base (3 vendas)" },
    conceito: "Comparar pelo valor calculado",
    porque:
      "O produto mais caro não é, necessariamente, o que mais rendeu: a receita é preço × quantidade. Para achar o maior, calculamos esse valor para cada linha e comparamos, guardando sempre o melhor visto até agora.",
    analogia:
      "É um ranking de faturamento: cada produto entra com a sua receita (o que cobra vezes o que vendeu), e quem faturou mais assume o topo.",
    ideias: [{ titulo: "Valor calculado", texto: "O critério de comparação não é um campo pronto, e sim uma conta com dois campos." }, { titulo: "Melhor até agora", texto: "Guardamos o objeto vencedor e o trocamos quando aparece um que fatura mais." }, { titulo: "Empate", texto: "Com >, quem chegou primeiro permanece. Isso resolve o empate como o enunciado pede." }],
    dano: ["troca", "retorna"],
    falas: {
      def: "O Criador chama topProduto com uma base de 3 vendas. O melhor é quem tem a maior receita (preço × quantidade).",
      melhor: "Elege a primeira venda como a melhor por enquanto: melhor = {melhor}.",
      laco: { corpo: "se", entra: "O laço pega a próxima venda: venda = {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      se: {
        corpo: "troca",
        entra: "A receita desta venda é maior que a da melhor até agora? Sim, então entra no bloco.",
        sai: "A receita desta venda é maior que a da melhor até agora? Não, a melhor continua a mesma.",
      },
      troca: "A nova melhor é {melhor}.",
      retorna: "return devolve o NOME do produto vencedor: {retorno}.",
    },
    js: {
      codigo: [
        ["function topProduto(vendas) {", "def"],
        ["  let melhor = vendas[0];", "melhor"],
        ["  for (const venda of vendas) {", "laco"],
        ["    if (venda.preco * venda.qtd > melhor.preco * melhor.qtd) {", "se"],
        ["      melhor = venda;", "troca"],
        ["    }", null],
        ["  }", null],
        ["  return melhor.produto;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "if (venda.preco * venda.qtd > melhor.preco * melhor.qtd) {", explica: "Os dois lados do > são contas: a receita desta venda contra a receita da melhor até agora. A multiplicação é feita antes da comparação." },
        { trecho: "melhor = venda;", explica: "Troca a melhor guardando o objeto inteiro da venda atual." },
        { trecho: "return melhor.produto;", explica: "Devolve só o nome do produto vencedor." },
      ],
      guiado: {
        codigo:
          "function topProduto(vendas) {\n" +
          "  let melhor = vendas[0];\n" +
          "  for (const venda of vendas) {\n" +
          "    if (venda.preco * venda.___ > melhor.preco * melhor.qtd) {   // qual campo completa a receita?\n" +
          "      melhor = ___;                                              // quem vira a melhor?\n" +
          "    }\n" +
          "  }\n" +
          "  return melhor.___;                                             // qual campo devolver?\n" +
          "}\n",
        preenche: ["qtd", "venda", "produto"],
        testes: [{ in: [[{ produto: "A", preco: 10, qtd: 1 }, { produto: "B", preco: 5, qtd: 4 }]], out: "B" }, { in: [[{ produto: "S", preco: 1, qtd: 1 }]], out: "S" }],
      },
    },
  },
];
