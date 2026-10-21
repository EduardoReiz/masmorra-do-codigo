// Aulas dos monstros: o que o aluno vê ANTES de enfrentar. O ciclo é
// "eu faço, nós fazemos, você faz":
//   1. conceito  — o que é, POR QUE existe e uma analogia do dia a dia;
//   2. sintaxe   — linha a linha, como se escreve na linguagem que o aluno escolheu
//                  (para quê serve cada símbolo: chaves, ponto e vírgula, dois-pontos...);
//   3. demo      — O Criador resolve na frente do aluno; a cada passo mostramos a
//                  linha em execução e o valor das variáveis, e o Servo explica;
//   4. guiado    — o mesmo problema com lacunas (___) para o aluno completar.
// A aula é obrigatória na primeira vez que o aluno enfrenta o monstro. Só existe
// aula escrita para os monstros listados aqui; os demais ainda abrem direto no combate.
//
// Formato de cada aula (veja "soma" como modelo):
//   conceito, porque, analogia, ideias[{titulo,texto}]
//   linguagens: { js|py: { sintaxe[{trecho,explica}],
//                          demo:{ entrada, codigo[], passos[{linha,vars,fala,dano?,fim?}] },
//                          guiado:{ starter, lacunas[], testes[{in,out}] } } }
import { AULAS_ARQUITETO } from "./aulas.arquiteto";

export const AULAS = {
  ...AULAS_ARQUITETO, // geradas por ferramentas/aulas/gerar.mjs (execução real do código)
  soma: {
    conceito: "Repetir uma tarefa sem copiar e colar: o laço",
    porque:
      "Para somar de 1 até 100 você não vai escrever 1 + 2 + 3 + ... cem vezes. O computador é ótimo em repetir. Você escreve a instrução uma vez e diz quantas vezes ela roda. Isso se chama laço, e quase todo programa usa algum.",
    analogia:
      "É como subir uma escada: você repete a mesma ação (subir um degrau) até chegar no topo, e vai guardando na cabeça quantos degraus já subiu. Esse número que vai crescendo é a nossa variável acumuladora.",
    ideias: [
      { titulo: "Variável", texto: "Uma caixinha com nome onde você guarda um valor. Aqui, a caixinha total começa com 0 e vai crescendo." },
      { titulo: "Laço", texto: "Repete um trecho de código. O laço diz de onde começa, até quando continua e o que muda a cada volta." },
      { titulo: "Retorno", texto: "O resultado que a função devolve para quem a chamou. Sem o retorno, o cálculo se perde." },
    ],
    linguagens: {
      js: {
        sintaxe: [
          { trecho: "function soma(n) {", explica: "function cria uma função: um bloco de código com nome, que você chama quando precisar. (n) é o que ela recebe. As chaves { } marcam onde ela começa e termina." },
          { trecho: "let total = 0;", explica: "let cria uma variável (a caixinha). O = guarda o valor 0 dentro dela. O ponto e vírgula ; encerra a instrução, como o ponto final de uma frase." },
          { trecho: "for (let i = 1; i <= n; i++) {", explica: "O for repete o que está entre as chaves. Dentro dos parênteses há três partes separadas por ;: onde começa (i = 1), até quando continua (i <= n) e o que muda a cada volta (i++ soma 1 em i)." },
          { trecho: "total += i;", explica: "+= soma o valor de i ao que já estava em total. É o mesmo que escrever total = total + i." },
          { trecho: "return total;", explica: "return devolve o resultado para quem chamou a função e encerra ela." },
        ],
        demo: {
          entrada: "soma(3)",
          codigo: [
            "function soma(n) {",
            "  let total = 0;",
            "  for (let i = 1; i <= n; i++) {",
            "    total += i;",
            "  }",
            "  return total;",
            "}",
          ],
          passos: [
            { linha: 0, vars: [["n", 3]], fala: "O Criador chama soma(3). A função recebe o 3 e guarda na variável n." },
            { linha: 1, vars: [["n", 3], ["total", 0]], fala: "Cria a caixinha total com 0 dentro. Ainda não somou nada." },
            { linha: 2, vars: [["n", 3], ["total", 0], ["i", 1]], fala: "O for começa com i = 1. A pergunta é: 1 <= 3? Sim, então entra no bloco." },
            { linha: 3, vars: [["n", 3], ["total", 1], ["i", 1]], fala: "total += i quer dizer total = 0 + 1. Agora total vale 1.", dano: true },
            { linha: 2, vars: [["n", 3], ["total", 1], ["i", 2]], fala: "Volta pro for. O i++ faz i virar 2. 2 <= 3? Sim, entra de novo." },
            { linha: 3, vars: [["n", 3], ["total", 3], ["i", 2]], fala: "total = 1 + 2 = 3. A caixinha foi crescendo.", dano: true },
            { linha: 2, vars: [["n", 3], ["total", 3], ["i", 3]], fala: "i vira 3. 3 <= 3? Sim. Última volta." },
            { linha: 3, vars: [["n", 3], ["total", 6], ["i", 3]], fala: "total = 3 + 3 = 6.", dano: true },
            { linha: 2, vars: [["n", 3], ["total", 6], ["i", 4]], fala: "i vira 4. 4 <= 3? Não! A condição falhou, então o laço termina e o programa sai do for." },
            { linha: 5, vars: [["n", 3], ["total", 6]], fala: "return total devolve o 6, que é 1 + 2 + 3." },
            { linha: 5, vars: [["n", 3], ["total", 6]], fala: "Os testes passaram. O monstro caiu.", fim: true },
          ],
        },
        guiado: {
          starter:
            "function soma(n) {\n" +
            "  let total = ___;          // começa em quanto?\n" +
            "  for (let i = 1; i <= ___; i++) {   // até quando?\n" +
            "    total += ___;           // o que somar a cada volta?\n" +
            "  }\n" +
            "  return ___;               // o que devolver?\n" +
            "}\n",
          testes: [{ in: [3], out: 6 }, { in: [1], out: 1 }, { in: [0], out: 0 }, { in: [10], out: 55 }],
        },
      },
      py: {
        sintaxe: [
          { trecho: "def soma(n):", explica: "def cria uma função: um bloco de código com nome, que você chama quando precisar. (n) é o que ela recebe. Os dois-pontos : dizem que o bloco começa na linha de baixo." },
          { trecho: "    total = 0", explica: "Aqui você cria a variável (a caixinha) só escrevendo o nome e o =. Não precisa de ponto e vírgula. Os 4 espaços no começo (indentação) mostram que a linha está dentro da função." },
          { trecho: "    for i in range(1, n + 1):", explica: "O for repete o bloco de baixo. range(1, n + 1) gera os números de 1 até n (o último, n + 1, não entra, por isso o + 1). A cada volta, i recebe o próximo número. Os dois-pontos abrem o bloco." },
          { trecho: "        total += i", explica: "Mais 4 espaços: esta linha está dentro do for. += soma o valor de i ao que já estava em total, o mesmo que total = total + i." },
          { trecho: "    return total", explica: "return devolve o resultado para quem chamou a função e encerra ela." },
        ],
        demo: {
          entrada: "soma(3)",
          codigo: [
            "def soma(n):",
            "    total = 0",
            "    for i in range(1, n + 1):",
            "        total += i",
            "    return total",
          ],
          passos: [
            { linha: 0, vars: [["n", 3]], fala: "O Criador chama soma(3). A função recebe o 3 e guarda na variável n." },
            { linha: 1, vars: [["n", 3], ["total", 0]], fala: "Cria a caixinha total com 0 dentro. Ainda não somou nada." },
            { linha: 2, vars: [["n", 3], ["total", 0], ["i", 1]], fala: "range(1, 4) gera 1, 2 e 3. O for pega o primeiro: i = 1." },
            { linha: 3, vars: [["n", 3], ["total", 1], ["i", 1]], fala: "total += i quer dizer total = 0 + 1. Agora total vale 1.", dano: true },
            { linha: 2, vars: [["n", 3], ["total", 1], ["i", 2]], fala: "O for pega o próximo número: i = 2." },
            { linha: 3, vars: [["n", 3], ["total", 3], ["i", 2]], fala: "total = 1 + 2 = 3. A caixinha foi crescendo.", dano: true },
            { linha: 2, vars: [["n", 3], ["total", 3], ["i", 3]], fala: "Último número: i = 3." },
            { linha: 3, vars: [["n", 3], ["total", 6], ["i", 3]], fala: "total = 3 + 3 = 6.", dano: true },
            { linha: 2, vars: [["n", 3], ["total", 6], ["i", 3]], fala: "Acabaram os números do range, então o for termina e o programa sai do bloco." },
            { linha: 4, vars: [["n", 3], ["total", 6]], fala: "return total devolve o 6, que é 1 + 2 + 3." },
            { linha: 4, vars: [["n", 3], ["total", 6]], fala: "Os testes passaram. O monstro caiu.", fim: true },
          ],
        },
        guiado: {
          starter:
            "def soma(n):\n" +
            "    total = ___          # começa em quanto?\n" +
            "    for i in range(1, ___ + 1):   # até quando? (o último não entra, por isso + 1)\n" +
            "        total += ___     # o que somar a cada volta?\n" +
            "    return ___           # o que devolver?\n",
          testes: [{ in: [3], out: 6 }, { in: [1], out: 1 }, { in: [0], out: 0 }, { in: [10], out: 55 }],
        },
      },
    },
  },
};

export const aulaDe = (id, lang) => {
  const a = AULAS[id];
  return a && a.linguagens[lang] ? { ...a, ...a.linguagens[lang] } : null;
};
