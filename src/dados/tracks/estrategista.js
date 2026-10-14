// Track do ESTRATEGISTA (Análise e Dados). tipo: "dados" — o jogador escreve
// uma função que recebe uma BASE (lista de objetos) e devolve o resultado da
// análise. Corrigido pelo mesmo motor de código, comparando a saída. Sem SQL
// nem dependência: ensina filtrar, agrupar e agregar (o núcleo de ADS).

// base de exemplo usada nas tasks (vendas de uma loja)
const V = [
  { produto: "Espada", categoria: "arma", preco: 100, qtd: 2 },
  { produto: "Escudo", categoria: "defesa", preco: 80, qtd: 1 },
  { produto: "Poção", categoria: "consumivel", preco: 20, qtd: 5 },
  { produto: "Arco", categoria: "arma", preco: 120, qtd: 1 },
  { produto: "Elmo", categoria: "defesa", preco: 60, qtd: 3 },
];

export const ESTRATEGISTA = [
  {
    id: "dat-total", fn: "totalVendas", nivel: "E", xp: 150, tipo: "dados", base: V,
    titulo: "Espectro das Planilhas", fraqueza: "Agregação (soma)", tempo: "~12 min",
    enunciado:
      "Escreva totalVendas(vendas) que recebe a base e devolve a receita total: a soma de preco × qtd " +
      "de todos os itens.",
    starter: "function totalVendas(vendas) {\n  // some preco * qtd de cada item\n\n}\n",
    testes: [
      { in: [V], out: 680, publico: true },
      { in: [[{ produto: "X", categoria: "a", preco: 10, qtd: 3 }]], out: 30, publico: true },
      { in: [[]], out: 0, publico: true },
      { in: [[{ produto: "A", categoria: "a", preco: 5, qtd: 5 }, { produto: "B", categoria: "a", preco: 5, qtd: 5 }]], out: 50, publico: false },
      { in: [[{ produto: "Z", categoria: "a", preco: 0, qtd: 9 }]], out: 0, publico: false },
    ],
  },
  {
    id: "dat-conta", fn: "contaPorCategoria", nivel: "E", xp: 150, tipo: "dados", base: V,
    titulo: "Névoa dos Filtros", fraqueza: "Filtrar", tempo: "~10 min",
    enunciado:
      "Escreva contaPorCategoria(vendas, categoria) que devolve quantos itens pertencem àquela categoria.",
    starter: "function contaPorCategoria(vendas, categoria) {\n  // conte os itens da categoria\n\n}\n",
    testes: [
      { in: [V, "arma"], out: 2, publico: true },
      { in: [V, "defesa"], out: 2, publico: true },
      { in: [V, "consumivel"], out: 1, publico: true },
      { in: [V, "magia"], out: 0, publico: false },
      { in: [[], "arma"], out: 0, publico: false },
    ],
  },
  {
    id: "dat-exame-e", fn: "maisCaro", nivel: "E", xp: 320, tipo: "dados", base: V, chefe: true, promoveA: "D",
    titulo: "Oráculo das Métricas", fraqueza: "Máximo por campo", tempo: "~16 min",
    enunciado:
      "EXAME DE ASCENSÃO. Escreva maisCaro(vendas) que devolve o NOME do produto com o maior preço. " +
      "Em caso de empate, devolva o primeiro.",
    starter: "function maisCaro(vendas) {\n  // devolva o produto de maior preço\n\n}\n",
    testes: [
      { in: [V], out: "Arco", publico: true },
      { in: [[{ produto: "A", categoria: "a", preco: 5, qtd: 1 }]], out: "A", publico: true },
      { in: [[{ produto: "X", categoria: "a", preco: 1, qtd: 1 }, { produto: "Y", categoria: "a", preco: 9, qtd: 1 }, { produto: "Z", categoria: "a", preco: 9, qtd: 1 }]], out: "Y", publico: false },
      { in: [[{ produto: "Barato", categoria: "a", preco: 2, qtd: 1 }, { produto: "Caro", categoria: "a", preco: 50, qtd: 1 }]], out: "Caro", publico: false },
    ],
  },
  {
    id: "dat-filtra", fn: "filtraAcima", nivel: "D", xp: 200, tipo: "dados", base: V,
    titulo: "Golem do Recorte", fraqueza: "Filtrar + projetar", tempo: "~14 min",
    enunciado:
      "Escreva filtraAcima(vendas, limite) que devolve a LISTA DE NOMES dos produtos com preço maior que " +
      "o limite, na ordem em que aparecem.",
    starter: "function filtraAcima(vendas, limite) {\n  // nomes dos produtos com preco > limite\n\n}\n",
    testes: [
      { in: [V, 90], out: ["Espada", "Arco"], publico: true },
      { in: [V, 200], out: [], publico: true },
      { in: [V, 0], out: ["Espada", "Escudo", "Poção", "Arco", "Elmo"], publico: true },
      { in: [V, 100], out: ["Arco"], publico: false },
      { in: [[], 10], out: [], publico: false },
    ],
  },
  {
    id: "dat-media", fn: "mediaPreco", nivel: "D", xp: 200, tipo: "dados", base: V,
    titulo: "Quimera da Média", fraqueza: "Média (arredondada)", tempo: "~14 min",
    enunciado:
      "Escreva mediaPreco(vendas) que devolve a média dos preços, ARREDONDADA para o inteiro mais próximo. " +
      "Com a base vazia, devolva 0.",
    starter: "function mediaPreco(vendas) {\n  // média dos precos, arredondada; base vazia = 0\n\n}\n",
    testes: [
      { in: [V], out: 76, publico: true },
      { in: [[{ produto: "A", categoria: "a", preco: 10, qtd: 1 }, { produto: "B", categoria: "a", preco: 20, qtd: 1 }]], out: 15, publico: true },
      { in: [[{ produto: "C", categoria: "a", preco: 7, qtd: 1 }]], out: 7, publico: true },
      { in: [[{ produto: "D", categoria: "a", preco: 1, qtd: 1 }, { produto: "E", categoria: "a", preco: 2, qtd: 1 }]], out: 2, publico: false },
      { in: [[]], out: 0, publico: false },
    ],
  },
  {
    id: "dat-exame-d", fn: "topProduto", nivel: "D", xp: 440, tipo: "dados", base: V, chefe: true, promoveA: "C",
    titulo: "Senhor dos Relatórios", fraqueza: "Agregar + ranquear", tempo: "~20 min",
    enunciado:
      "EXAME DE ASCENSÃO. Escreva topProduto(vendas) que devolve o NOME do produto com a maior RECEITA " +
      "(preco × qtd). Em caso de empate, o primeiro.",
    starter: "function topProduto(vendas) {\n  // produto com maior preco*qtd\n\n}\n",
    testes: [
      { in: [V], out: "Espada", publico: true },
      { in: [[{ produto: "A", categoria: "a", preco: 10, qtd: 1 }, { produto: "B", categoria: "a", preco: 2, qtd: 10 }]], out: "B", publico: true },
      { in: [[{ produto: "Só", categoria: "a", preco: 1, qtd: 1 }]], out: "Só", publico: false },
      { in: [[{ produto: "X", categoria: "a", preco: 5, qtd: 4 }, { produto: "Y", categoria: "a", preco: 4, qtd: 5 }]], out: "X", publico: false },
    ],
  },
];
