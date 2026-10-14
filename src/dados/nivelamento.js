// Teste de Nivelamento: bateria do básico ao avançado para quem já tem
// experiência e não quer começar do zero. É ADAPTATIVO — o jogador sobe
// enquanto acerta; no primeiro erro (ou desistência) para, e o rank é o do
// último nível provado. As questões são DIFERENTES das da masmorra, de
// propósito, para não entregar as respostas dos exames.
// "classificaEm" = rank em que o jogador entra se passar nesta questão.
export const NIVELAMENTO = [
  {
    nivel: "Básico", classificaEm: "D", fn: "somaLista",
    enunciado: "Escreva somaLista(lista) que devolve a soma de todos os números da lista.",
    starter: "function somaLista(lista) {\n  \n}\n",
    testes: [
      { in: [[1, 2, 3]], out: 6 },
      { in: [[]], out: 0 },
      { in: [[-1, 1]], out: 0 },
      { in: [[10]], out: 10 },
      { in: [[5, 5, 5]], out: 15 },
    ],
  },
  {
    nivel: "Intermediário", classificaEm: "C", fn: "quantosPares",
    enunciado: "Escreva quantosPares(lista) que devolve quantos números pares existem na lista.",
    starter: "function quantosPares(lista) {\n  \n}\n",
    testes: [
      { in: [[1, 2, 3, 4]], out: 2 },
      { in: [[]], out: 0 },
      { in: [[2, 4, 6]], out: 3 },
      { in: [[1, 3, 5]], out: 0 },
      { in: [[0, -2, 3]], out: 2 },
    ],
  },
  {
    nivel: "Avançado", classificaEm: "B", fn: "mdc",
    enunciado:
      "Escreva mdc(a, b) que devolve o Máximo Divisor Comum de a e b. " +
      "Ex: mdc(12, 8) = 4. (Dica: algoritmo de Euclides.)",
    starter: "function mdc(a, b) {\n  \n}\n",
    testes: [
      { in: [12, 8], out: 4 },
      { in: [7, 5], out: 1 },
      { in: [100, 10], out: 10 },
      { in: [0, 5], out: 5 },
      { in: [21, 14], out: 7 },
    ],
  },
  {
    nivel: "Especialista", classificaEm: "A", fn: "maiorPalavra",
    enunciado:
      "Escreva maiorPalavra(frase) que devolve a maior palavra da frase. " +
      "Em caso de empate, devolva a primeira. Trate espaços extras.",
    starter: "function maiorPalavra(frase) {\n  \n}\n",
    testes: [
      { in: ["o gato preto"], out: "preto" },
      { in: ["casa"], out: "casa" },
      { in: ["a bb ccc"], out: "ccc" },
      { in: ["um dois tres"], out: "dois" },
      { in: ["sol"], out: "sol" },
    ],
  },
];
