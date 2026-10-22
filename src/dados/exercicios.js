import { ORACULO } from "./tracks/oraculo";
import { SENTINELA } from "./tracks/sentinela";
import { ESTRATEGISTA } from "./tracks/estrategista";
import { intEntre, listaInts } from "./gerador";

// Os monstros da masmorra, em ordem. Alguns são CHEFES (Exame de Ascensão):
// vencer um chefe é o que promove o jogador de rank — não basta acumular XP.
// "fratura" = testes extras, bem mais duros, usados quando o portal fratura.
export const EXERCICIOS = [
  // ---- A rampa do básico: os primeiros passos de quem nunca programou ----
  // "modo: programa" = o monstro pede um programa, e o jogo confere o que ele escreve na tela.
  // "arte" = imagem provisória de outro monstro, até a arte própria ficar pronta.
  {
    id: "oi", modo: "programa", nivel: "E", xp: 60, semLimiteDeTempo: true,
    titulo: "Fantasma do Silêncio", fraqueza: "Mostrar na tela", tempo: "~3 min", arte: "orac-explica",
    enunciado: "Escreva um programa que mostra na tela exatamente isto: Oi, Criador!",
    saida: "Oi, Criador!",
    exige: [],
    starter: "// escreva o seu programa aqui\n",
    porLinguagem: { py: { starter: "# escreva o seu programa aqui\n" } },
  },
  {
    id: "nome", modo: "programa", nivel: "E", xp: 60, semLimiteDeTempo: true,
    titulo: "Escrivão do Nome", fraqueza: "Variáveis", tempo: "~5 min", arte: "sec-idade",
    enunciado:
      'Crie uma variável chamada nome guardando o texto "Criador" e use essa variável para mostrar na tela: Oi, Criador!',
    saida: "Oi, Criador!",
    exige: [
      { nome: "Cria a variável nome", re: "\\bnome\\s*=(?!=)" },
      { nome: "Usa a variável nome na mensagem", re: "\\bnome\\b", min: 2 },
    ],
    starter: "// crie a variável nome e mostre a mensagem\n",
    porLinguagem: { py: { starter: "# crie a variável nome e mostre a mensagem\n" } },
  },
  {
    id: "contas", modo: "programa", nivel: "E", xp: 80, semLimiteDeTempo: true,
    titulo: "Calculadora Amaldiçoada", fraqueza: "Contas com números", tempo: "~5 min", arte: "dat-conta",
    enunciado: "Mostre na tela, uma por linha, o resultado de 8 + 4 e o resultado de 6 × 7. A tela deve mostrar 12 e depois 42.",
    saida: "12\n42",
    exige: [
      { nome: "Faz a conta de somar com +", re: "\\d+\\s*\\+\\s*\\d+" },
      { nome: "Faz a conta de multiplicar com *", re: "\\d+\\s*\\*\\s*\\d+" },
    ],
    starter: "// mostre o resultado das duas contas\n",
    porLinguagem: { py: { starter: "# mostre o resultado das duas contas\n" } },
  },
  {
    id: "dobro", fn: "dobro", nivel: "E", xp: 100,
    titulo: "Duplicador Travesso", fraqueza: "Funções", tempo: "~6 min", arte: "dat-total",
    enunciado: "Escreva a função dobro(n) que devolve o dobro do número n. Ex: dobro(4) devolve 8.",
    starter: "function dobro(n) {\n  // devolva o dobro de n\n\n}\n",
    molde: true,
    solucao: (n) => n * 2,
    gerarEntradas: (r) => ({
      publicas: [[4], [10], [intEntre(r, 1, 30)]],
      ocultas: [[0], [-3], [intEntre(r, 100, 900)]],
      fratura: [[intEntre(r, -500, 500)], [intEntre(r, 1000, 9999)], [1]],
    }),
  },
  {
    id: "dano", fn: "danoFinal", nivel: "E", xp: 100,
    titulo: "Goblin Esmagador", fraqueza: "Funções com dois valores", tempo: "~6 min", arte: "soma",
    enunciado:
      "O goblin ataca com uma força (ataque) e a sua armadura absorve parte do golpe (defesa). " +
      "Escreva danoFinal(ataque, defesa) que devolve quanta vida você perde: o ataque menos a defesa. Ex: danoFinal(30, 12) devolve 18.",
    starter: "function danoFinal(ataque, defesa) {\n  // ataque menos defesa\n\n}\n",
    molde: true,
    solucao: (a, d) => a - d,
    gerarEntradas: (r) => ({
      publicas: [[30, 12], [50, 50], [intEntre(r, 20, 60), intEntre(r, 1, 19)]],
      ocultas: [[100, 1], [intEntre(r, 70, 99), intEntre(r, 10, 69)]],
      fratura: [[intEntre(r, 500, 999), intEntre(r, 1, 499)], [7, 3], [40, 40]],
    }),
  },
  {
    id: "par", fn: "ehPar", nivel: "E", xp: 120,
    titulo: "Slime da Paridade", fraqueza: "Resto da divisão", tempo: "~8 min",
    enunciado: "Escreva ehPar(n) que devolve true se n for par e false se for ímpar.",
    starter: "function ehPar(n) {\n  // true se par, false se ímpar\n\n}\n",
    molde: true,
    solucao: (n) => n % 2 === 0,
    gerarEntradas: (r) => ({
      publicas: [[4], [7], [intEntre(r, 0, 40)]],
      ocultas: [[0], [-2], [2 * intEntre(r, 1, 500) + 1]],
      fratura: [[intEntre(r, -300, 300)], [2 * intEntre(r, 100, 5000)], [2 * intEntre(r, 1, 999) + 1]],
    }),
  },
  {
    id: "cura", fn: "curar", nivel: "E", xp: 120,
    titulo: "Frasco Transbordante", fraqueza: "Decisões com if", tempo: "~8 min", arte: "par",
    enunciado:
      "Uma poção devolve vida, mas a vida nunca passa de 100. Escreva curar(vida, pocao) que devolve a vida depois de beber a poção, " +
      "com no máximo 100. Ex: curar(60, 30) devolve 90 e curar(90, 30) devolve 100.",
    starter: "function curar(vida, pocao) {\n  // vida + pocao, mas nunca mais que 100\n\n}\n",
    molde: true,
    solucao: (v, p) => Math.min(100, v + p),
    gerarEntradas: (r) => ({
      publicas: [[60, 30], [90, 30], [intEntre(r, 10, 50), intEntre(r, 10, 30)]],
      ocultas: [[100, 20], [0, 100], [intEntre(r, 70, 99), intEntre(r, 30, 60)]],
      fratura: [[intEntre(r, 1, 40), intEntre(r, 1, 30)], [99, 1], [50, 50], [100, 0]],
    }),
  },
  {
    id: "critico", fn: "ataqueFinal", nivel: "E", xp: 120,
    titulo: "Dragão da Sorte", fraqueza: "Decisões com if e else", tempo: "~8 min", arte: "fib",
    enunciado:
      "Um golpe pode ser crítico. Escreva ataqueFinal(base, sorte): se a sorte (de 1 a 100) for 90 ou mais, o golpe é crítico " +
      "e causa o DOBRO do dano base; senão, causa o dano base. Ex: ataqueFinal(20, 95) devolve 40 e ataqueFinal(20, 50) devolve 20.",
    starter: "function ataqueFinal(base, sorte) {\n  // crítico (sorte >= 90) dobra o dano\n\n}\n",
    molde: true,
    solucao: (b, s) => (s >= 90 ? b * 2 : b),
    gerarEntradas: (r) => ({
      publicas: [[20, 95], [20, 50], [intEntre(r, 10, 40), intEntre(r, 1, 80)]],
      ocultas: [[35, 90], [35, 89], [intEntre(r, 10, 60), intEntre(r, 91, 100)]],
      fratura: [[intEntre(r, 50, 200), 100], [intEntre(r, 50, 200), 1], [1, 90], [80, 89]],
    }),
  },
  {
    id: "soma", fn: "soma", nivel: "E", xp: 120,
    titulo: "Goblin do Loop Infinito", fraqueza: "Repetição", tempo: "~10 min",
    enunciado: "Escreva soma(n) que devolve a soma de todos os números de 1 até n.",
    starter: "function soma(n) {\n  // some de 1 até n\n\n}\n",
    molde: true,
    solucao: (n) => (n * (n + 1)) / 2,
    gerarEntradas: (r) => ({
      publicas: [[3], [5], [intEntre(r, 2, 12)]],
      ocultas: [[0], [1], [intEntre(r, 80, 300)]],
      fratura: [[intEntre(r, 800, 3000)], [intEntre(r, 5000, 9999)], [2]],
    }),
  },
  {
    id: "portao", fn: "somaPares", nivel: "E", xp: 300,
    chefe: true, promoveA: "D", arte: "exame-e",
    titulo: "Portão de Bronze", fraqueza: "Decisão e repetição juntas", tempo: "~12 min",
    enunciado:
      "EXAME DE ASCENSÃO. Escreva somaPares(n) que devolve a soma de todos os números pares de 1 até n. " +
      "Ex: somaPares(6) = 2 + 4 + 6 = 12.",
    starter: "function somaPares(n) {\n  // some só os pares de 1 até n\n\n}\n",
    testes: [
      { in: [6], out: 12, publico: true },
      { in: [10], out: 30, publico: true },
      { in: [1], out: 0, publico: true },
      { in: [0], out: 0, publico: false },
      { in: [2], out: 2, publico: false },
      { in: [7], out: 12, publico: false },
      { in: [100], out: 2550, publico: false },
      { in: [51], out: 650, publico: false },
    ],
  },
  {
    id: "maior", fn: "maior", nivel: "D", xp: 180,
    titulo: "Hidra das Três Cabeças", fraqueza: "Percorrer listas", tempo: "~12 min",
    enunciado: "Escreva maior(lista) que devolve o maior número de uma lista.",
    starter: "function maior(lista) {\n  // devolva o maior número\n\n}\n",
    molde: true,
    solucao: (l) => Math.max(...l),
    gerarEntradas: (r) => ({
      publicas: [[listaInts(r, 3, 1, 30)], [[intEntre(r, -5, 9)]], [listaInts(r, 4, -20, -1)]],
      ocultas: [[listaInts(r, 6, -50, 50)], [listaInts(r, 5, 0, 100)]],
      fratura: [[listaInts(r, 8, -99, 99)], [(() => { const x = intEntre(r, 10, 40); return [x, x, x]; })()], [listaInts(r, 10, -5, 5)]],
    }),
  },
  {
    id: "ouro", fn: "ouroTotal", nivel: "D", xp: 180,
    titulo: "Baú do Avarento", fraqueza: "Somar uma lista", tempo: "~10 min", arte: "maior",
    enunciado:
      "Cada baú da masmorra tem uma quantia de ouro. Escreva ouroTotal(baus) que recebe a lista com o ouro de cada baú e devolve a soma. " +
      "Ex: ouroTotal([10, 25, 5]) devolve 40.",
    starter: "function ouroTotal(baus) {\n  // some o ouro de todos os baús\n\n}\n",
    molde: true,
    solucao: (l) => l.reduce((a, b) => a + b, 0),
    gerarEntradas: (r) => ({
      publicas: [[[10, 25, 5]], [listaInts(r, 4, 1, 50)], [[]]],
      ocultas: [[[100]], [listaInts(r, 6, 0, 100)]],
      fratura: [[listaInts(r, 10, 1, 500)], [[0, 0, 0]], [listaInts(r, 3, 100, 999)]],
    }),
  },
  {
    id: "vogais", fn: "contaVogais", nivel: "D", xp: 180,
    titulo: "Espectro das Palavras", fraqueza: "Percorrer texto", tempo: "~12 min",
    enunciado:
      "Escreva contaVogais(texto) que conta quantas vogais (a,e,i,o,u) há no texto. " +
      "Pode assumir texto minúsculo.",
    starter: "function contaVogais(texto) {\n  // conte as vogais a,e,i,o,u\n\n}\n",
    testes: [
      { in: ["banana"], out: 3, publico: true },
      { in: ["xyz"], out: 0, publico: true },
      { in: ["aeiou"], out: 5, publico: true },
      { in: ["javascript"], out: 3, publico: false },
      { in: [""], out: 0, publico: false },
    ],
    fratura: [
      { in: ["aeiouaeiou"], out: 10, publico: false },
      { in: ["bcdfg"], out: 0, publico: false },
      { in: ["programacao"], out: 5, publico: false },
    ],
  },
  {
    id: "rank", fn: "rankDoXp", nivel: "D", xp: 200,
    titulo: "Escriba dos Ranks", fraqueza: "Várias decisões em sequência", tempo: "~10 min", arte: "vogais",
    enunciado:
      "O Sistema define o seu rank pelo XP. Escreva rankDoXp(xp) que devolve a letra do rank: " +
      '"E" se o xp for menor que 100, "D" se for menor que 300, "C" se for menor que 600 e "B" de 600 para cima.',
    starter: "function rankDoXp(xp) {\n  // devolva \"E\", \"D\", \"C\" ou \"B\"\n\n}\n",
    testes: [
      { in: [50], out: "E", publico: true },
      { in: [100], out: "D", publico: true },
      { in: [450], out: "C", publico: true },
      { in: [0], out: "E", publico: false },
      { in: [299], out: "D", publico: false },
      { in: [300], out: "C", publico: false },
      { in: [599], out: "C", publico: false },
      { in: [600], out: "B", publico: false },
      { in: [5000], out: "B", publico: false },
    ],
    fratura: [
      { in: [99], out: "E", publico: false },
      { in: [301], out: "C", publico: false },
      { in: [601], out: "B", publico: false },
    ],
  },
  {
    id: "inventario", fn: "temItem", nivel: "D", xp: 200,
    titulo: "Mochila Sem Fundo", fraqueza: "Procurar em uma lista", tempo: "~10 min", arte: "palavras",
    enunciado:
      "Antes de entrar na batalha, você confere a mochila. Escreva temItem(mochila, item) que devolve true se o item estiver na lista " +
      'e false se não estiver. Ex: temItem(["espada", "poção"], "poção") devolve true.',
    starter: "function temItem(mochila, item) {\n  // true se o item está na mochila\n\n}\n",
    testes: [
      { in: [["espada", "escudo", "poção"], "escudo"], out: true, publico: true },
      { in: [["espada", "escudo"], "arco"], out: false, publico: true },
      { in: [[], "espada"], out: false, publico: true },
      { in: [["poção"], "poção"], out: true, publico: false },
      { in: [["Espada"], "espada"], out: false, publico: false },
      { in: [["a", "b", "c", "d"], "d"], out: true, publico: false },
    ],
    fratura: [
      { in: [["elmo", "bota", "capa"], "capa"], out: true, publico: false },
      { in: [["elmo", "bota", "capa"], "cap"], out: false, publico: false },
    ],
  },
  {
    id: "exame-e", fn: "inverteNumero", nivel: "D", xp: 220, arte: "inverte",
    titulo: "Espelho Numérico", fraqueza: "Dígitos e sinal", tempo: "~15 min",
    enunciado:
      "Escreva inverteNumero(n) que inverte os dígitos de n, " +
      "mantendo o sinal e sem zeros à esquerda. Ex: 120 vira 21, -45 vira -54.",
    starter: "function inverteNumero(n) {\n  // inverte os dígitos, mantém o sinal\n\n}\n",
    testes: [
      { in: [123], out: 321, publico: true },
      { in: [-45], out: -54, publico: true },
      { in: [120], out: 21, publico: true },
      { in: [5], out: 5, publico: false },
      { in: [0], out: 0, publico: false },
      { in: [1000], out: 1, publico: false },
      { in: [-100], out: -1, publico: false },
      { in: [2100], out: 12, publico: false },
    ],
  },
  {
    id: "exame-d", fn: "ehPrimo", nivel: "D", xp: 420,
    chefe: true, promoveA: "C",
    titulo: "Guardião de Ferro", fraqueza: "Divisores", tempo: "~18 min",
    enunciado:
      "EXAME DE ASCENSÃO. Escreva ehPrimo(n) que devolve true se n for primo. " +
      "Lembre: 0, 1 e negativos não são primos.",
    starter: "function ehPrimo(n) {\n  // true se n for primo\n\n}\n",
    testes: [
      { in: [2], out: true, publico: true },
      { in: [3], out: true, publico: true },
      { in: [4], out: false, publico: true },
      { in: [1], out: false, publico: false },
      { in: [0], out: false, publico: false },
      { in: [17], out: true, publico: false },
      { in: [97], out: true, publico: false },
      { in: [100], out: false, publico: false },
      { in: [-7], out: false, publico: false },
      { in: [9973], out: true, publico: false },
    ],
  },
  {
    id: "inverte", fn: "inverte", nivel: "C", xp: 240,
    titulo: "Golem do Espelho", fraqueza: "Strings", tempo: "~15 min",
    enunciado: 'Escreva inverte(texto) que devolve o texto de trás para frente. Ex: inverte("abc") = "cba".',
    starter: "function inverte(texto) {\n  // devolva o texto invertido\n\n}\n",
    testes: [
      { in: ["abc"], out: "cba", publico: true },
      { in: ["masmorra"], out: "arromsam", publico: true },
      { in: ["a"], out: "a", publico: true },
      { in: [""], out: "", publico: false },
      { in: ["1234"], out: "4321", publico: false },
    ],
    fratura: [
      { in: ["Monarca"], out: "acranoM", publico: false },
      { in: ["ab cd"], out: "dc ba", publico: false },
      { in: ["12 3"], out: "3 21", publico: false },
    ],
  },
  {
    id: "fib", fn: "fib", nivel: "C", xp: 240,
    titulo: "Dragão de Fibonacci", fraqueza: "Acumuladores", tempo: "~18 min",
    enunciado: "Escreva fib(n) que devolve o n-ésimo Fibonacci, com fib(1)=1 e fib(2)=1.",
    starter: "function fib(n) {\n  // n-ésimo Fibonacci (fib(1)=1, fib(2)=1)\n\n}\n",
    molde: true,
    solucao: (n) => { let a = 1, b = 1; for (let i = 3; i <= n; i++) { [a, b] = [b, a + b]; } return n <= 2 ? 1 : b; },
    gerarEntradas: (r) => ({
      publicas: [[1], [2], [7]],
      ocultas: [[3], [intEntre(r, 8, 15)], [intEntre(r, 16, 25)]],
      fratura: [[intEntre(r, 25, 35)], [intEntre(r, 36, 45)], [12]],
    }),
  },
  {
    id: "exame-c", fn: "ehPalindromo", nivel: "C", xp: 560,
    chefe: true, promoveA: "B",
    titulo: "Golem Rúnico", fraqueza: "Simetria", tempo: "~20 min",
    enunciado:
      "EXAME DE ASCENSÃO. Escreva ehPalindromo(texto) que devolve true se o texto " +
      "for igual de trás para frente. Pode assumir texto minúsculo e sem espaços.",
    starter: "function ehPalindromo(texto) {\n  // true se for palíndromo\n\n}\n",
    testes: [
      { in: ["arara"], out: true, publico: true },
      { in: ["casa"], out: false, publico: true },
      { in: ["a"], out: true, publico: true },
      { in: [""], out: true, publico: false },
      { in: ["osso"], out: true, publico: false },
      { in: ["abc"], out: false, publico: false },
      { in: ["reviver"], out: true, publico: false },
      { in: ["amorroma"], out: true, publico: false },
    ],
  },
  {
    id: "primos", fn: "contaPrimos", nivel: "B", xp: 320,
    titulo: "Enxame Aritmético", fraqueza: "Primos", tempo: "~20 min",
    enunciado: "Escreva contaPrimos(n) que devolve quantos números primos existem de 2 até n (inclusive).",
    starter: "function contaPrimos(n) {\n  // quantos primos de 2 até n\n\n}\n",
    molde: true,
    solucao: (n) => { const p = (x) => { if (x < 2) return false; for (let i = 2; i * i <= x; i++) if (x % i === 0) return false; return true; }; let c = 0; for (let k = 2; k <= n; k++) if (p(k)) c++; return c; },
    gerarEntradas: (r) => ({
      publicas: [[10], [2], [intEntre(r, 0, 15)]],
      ocultas: [[1], [0], [intEntre(r, 20, 60)]],
      fratura: [[intEntre(r, 80, 200)], [intEntre(r, 200, 400)], [3]],
    }),
  },
  {
    id: "raiz", fn: "somaDigitos", nivel: "B", xp: 320,
    titulo: "Quimera dos Dígitos", fraqueza: "Laço dentro de laço", tempo: "~20 min",
    enunciado:
      "Escreva somaDigitos(n) que soma os dígitos de n repetidamente até sobrar um único dígito. " +
      "Ex: 38 -> 3+8=11 -> 1+1=2.",
    starter: "function somaDigitos(n) {\n  // some os dígitos até sobrar um só\n\n}\n",
    molde: true,
    solucao: (n) => { n = Math.abs(n); while (n >= 10) { let s = 0; while (n > 0) { s += n % 10; n = Math.floor(n / 10); } n = s; } return n; },
    gerarEntradas: (r) => ({
      publicas: [[38], [5], [intEntre(r, 0, 9)]],
      ocultas: [[0], [intEntre(r, 100, 9999)], [intEntre(r, 10000, 99999)]],
      fratura: [[intEntre(r, 100000, 999999)], [intEntre(r, 1000000, 9999999)], [intEntre(r, 10, 99)]],
    }),
  },
  {
    id: "exame-b", fn: "segundoMaior", nivel: "B", xp: 720,
    chefe: true, promoveA: "A",
    titulo: "Senhor das Chaves", fraqueza: "Valores distintos", tempo: "~25 min",
    enunciado:
      "EXAME DE ASCENSÃO. Escreva segundoMaior(lista) que devolve o segundo maior valor " +
      "DISTINTO da lista. Pode assumir que existem pelo menos dois valores diferentes.",
    starter: "function segundoMaior(lista) {\n  // o segundo maior valor distinto\n\n}\n",
    testes: [
      { in: [[3, 9, 2]], out: 3, publico: true },
      { in: [[1, 2, 3, 4]], out: 3, publico: true },
      { in: [[7, 7, 5]], out: 5, publico: true },
      { in: [[-1, -2, -3]], out: -2, publico: false },
      { in: [[100, 50, 100, 99]], out: 99, publico: false },
      { in: [[5, 3, 5, 3]], out: 3, publico: false },
      { in: [[0, -1, -2]], out: -1, publico: false },
      { in: [[8, 8, 8, 7]], out: 7, publico: false },
    ],
  },
  {
    id: "palavras", fn: "contaPalavras", nivel: "A", xp: 420,
    titulo: "Legião de Letras", fraqueza: "Divisão de texto", tempo: "~22 min",
    enunciado:
      "Escreva contaPalavras(frase) que conta quantas palavras há na frase. " +
      "Trate espaços extras no começo, no fim e no meio.",
    starter: "function contaPalavras(frase) {\n  // conte as palavras\n\n}\n",
    testes: [
      { in: ["ola mundo"], out: 2, publico: true },
      { in: ["um"], out: 1, publico: true },
      { in: [""], out: 0, publico: true },
      { in: ["a b c"], out: 3, publico: false },
      { in: ["  dois   espacos "], out: 2, publico: false },
    ],
    fratura: [
      { in: ["o rato roeu a roupa"], out: 5, publico: false },
      { in: ["   "], out: 0, publico: false },
      { in: ["palavra"], out: 1, publico: false },
    ],
  },
  {
    id: "anagrama", fn: "anagrama", nivel: "A", xp: 420,
    titulo: "Doppelgänger", fraqueza: "Contagem de letras", tempo: "~22 min",
    enunciado:
      'Escreva anagrama(a, b) que devolve true se as duas palavras tiverem exatamente as mesmas letras. ' +
      'Ex: anagrama("amor","roma") = true.',
    starter: "function anagrama(a, b) {\n  // true se forem anagramas\n\n}\n",
    testes: [
      { in: ["amor", "roma"], out: true, publico: true },
      { in: ["abc", "abd"], out: false, publico: true },
      { in: ["listen", "silent"], out: true, publico: true },
      { in: ["a", "a"], out: true, publico: false },
      { in: ["aab", "abb"], out: false, publico: false },
    ],
    fratura: [
      { in: ["", ""], out: true, publico: false },
      { in: ["abc", "cba"], out: true, publico: false },
      { in: ["aabb", "abab"], out: true, publico: false },
    ],
  },
  {
    id: "exame-a", fn: "primeiroUnico", nivel: "A", xp: 900,
    chefe: true, promoveA: "S",
    titulo: "Monarca em Vigília", fraqueza: "Frequência", tempo: "~30 min",
    enunciado:
      "EXAME FINAL. Escreva primeiroUnico(texto) que devolve o primeiro caractere que NÃO se " +
      'repete no texto. Se todos repetem, devolva "". Ex: primeiroUnico("swiss") = "w".',
    starter: 'function primeiroUnico(texto) {\n  // primeiro caractere que não repete, ou ""\n\n}\n',
    testes: [
      { in: ["aabbc"], out: "c", publico: true },
      { in: ["abc"], out: "a", publico: true },
      { in: ["swiss"], out: "w", publico: true },
      { in: ["aabb"], out: "", publico: false },
      { in: ["x"], out: "x", publico: false },
      { in: ["aabbccd"], out: "d", publico: false },
      { in: [""], out: "", publico: false },
      { in: ["aa"], out: "", publico: false },
    ],
  },
];

// ---- Tracks por classe. Cada classe tem a SUA lista de monstros. ----
// Exercícios sem "tipo" são de código (comportamento padrão).
export const RANKS = ["E", "D", "C", "B", "A", "S"];

// A classe de Programação (O Arquiteto) usa a lista acima.
export function trackDe(classe) {
  if (classe === "O Oráculo") return ORACULO;
  if (classe === "O Sentinela") return SENTINELA;
  if (classe === "O Estrategista") return ESTRATEGISTA;
  return EXERCICIOS;
}

// Rank por COMPETÊNCIA: cada chefe (Exame) vencido promove de rank, dentro da
// track da classe do jogador.
// Rank do jogador na trilha da classe dele (atalho para não errar a chamada).
export function rankDoJogador(p) {
  return rankDe(trackDe(p.classe), p.derrotados || []);
}

export function rankDe(track, derrotados) {
  const d = new Set(derrotados);
  let rank = "E";
  for (const ex of track) if (ex.chefe && d.has(ex.id)) rank = ex.promoveA;
  return rank;
}

// Próximo exame (chefe) ainda não vencido, e se já está liberado (todos os
// monstros antes dele caíram).
export function proximoExame(track, derrotados) {
  const d = new Set(derrotados);
  const idx = track.findIndex((ex) => ex.chefe && !d.has(ex.id));
  if (idx === -1) return null;
  const liberado = track.slice(0, idx).every((ex) => d.has(ex.id));
  return { boss: track[idx], liberado };
}

// Estado de ascensão para a HUD: rank atual, próximo rank e o quanto da faixa
// atual (monstros + chefe) já foi vencido.
export function ascensao(track, derrotados) {
  const d = new Set(derrotados);
  const rank = rankDe(track, derrotados);
  const px = proximoExame(track, derrotados);
  if (!px) return { rank, proximo: null, pct: 100, boss: null, liberado: false };
  const idx = track.indexOf(px.boss);
  let ini = 0;
  for (let k = idx - 1; k >= 0; k--) if (track[k].chefe) { ini = k + 1; break; }
  const faixa = track.slice(ini, idx + 1);
  const feitos = faixa.filter((ex) => d.has(ex.id)).length;
  return {
    rank,
    proximo: px.boss.promoveA,
    pct: Math.round((feitos / faixa.length) * 100),
    boss: px.boss,
    liberado: px.liberado,
  };
}

// Dado um rank de entrada (vindo do nivelamento), devolve os ids de tudo que
// deve contar como já vencido para começar ali, na track dada.
export function idsParaComecarEm(track, rank) {
  if (rank === "E") return [];
  const idx = track.findIndex((e) => e.chefe && e.promoveA === rank);
  if (idx === -1) return [];
  return track.slice(0, idx + 1).map((e) => e.id);
}
