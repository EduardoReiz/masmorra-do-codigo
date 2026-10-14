import { intEntre, listaInts } from "./gerador";

// Prova de Ascensão: trava o rank-up num exame. Dois tipos de questão:
// - mc: múltipla escolha conceitual (entende o porquê).
// - prever: "preveja a saída" de uma ENTRADA SORTEADA da sua partida, resposta
//   DIGITADA (sem chute). A resposta é calculada pela solução de referência, e
//   é única da sua instância — jogar a pergunta numa IA não resolve, porque ela
//   não sabe qual valor caiu pra você; o que resolve é raciocinar.
// (No servidor: tempo, variação no servidor e juiz-IA em texto livre.)

const pick = (r, arr, n) => {
  const c = [...arr];
  const out = [];
  for (let i = 0; i < n && c.length; i++) out.push(c.splice(Math.floor(r() * c.length), 1)[0]);
  return out;
};

// referências (as mesmas já verificadas) usadas para calcular a resposta certa
const ref = {
  inverteNumero: (n) => Math.sign(n) * parseInt(String(Math.abs(n)).split("").reverse().join(""), 10),
  ehPrimo: (n) => { if (n < 2) return false; for (let i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; },
  ehPalindromo: (t) => t === t.split("").reverse().join(""),
  segundoMaior: (l) => [...new Set(l)].sort((a, b) => b - a)[1],
  primeiroUnico: (t) => { for (const c of t) if (t.indexOf(c) === t.lastIndexOf(c)) return c; return ""; },
  ehEmailValido: (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),
  escapaSql: (v) => v.replace(/'/g, "''"),
};

export const PROVAS = {
  // ---- Arquiteto ----
  "exame-e": {
    mc: [
      { p: "Por que guardamos o sinal (+/-) antes de inverter os dígitos?", opcoes: ["Porque o '-' não é um dígito e atrapalharia a inversão", "Porque números negativos não podem ser invertidos", "Só por organização, não muda nada"], correta: 0 },
      { p: "Ao inverter 1200, o resultado é:", opcoes: ["21 (os zeros que iriam para a frente somem)", "0021", "2100"], correta: 0 },
    ],
    prever: { fn: "inverteNumero", solucao: ref.inverteNumero, dica: "um número inteiro", gera: (r) => [[intEntre(r, 10, 99)], [-intEntre(r, 10, 999)], [intEntre(r, 100, 9999)], [intEntre(r, 1, 9)], [-intEntre(r, 100, 900)]] },
  },
  "exame-d": {
    mc: [
      { p: "Por que basta testar divisores até a raiz quadrada de n?", opcoes: ["Se existisse um divisor maior que a raiz, haveria um par menor já testado", "Porque acima da raiz nenhum número divide", "Para o código ficar mais curto, sem motivo real"], correta: 0 },
      { p: "O número 1 é primo?", opcoes: ["Não — primo tem exatamente dois divisores distintos", "Sim", "Depende do contexto"], correta: 0 },
    ],
    prever: { fn: "ehPrimo", solucao: ref.ehPrimo, dica: "true ou false", gera: (r) => [[intEntre(r, 2, 40)], [intEntre(r, 2, 40)], [1], [intEntre(r, 40, 120)], [intEntre(r, 2, 20)]] },
  },
  "exame-c": {
    mc: [
      { p: "Qual é a ideia central para detectar um palíndromo?", opcoes: ["Comparar o texto com ele mesmo invertido", "Contar quantas vogais ele tem", "Ordenar as letras em ordem alfabética"], correta: 0 },
      { p: "Uma string vazia (\"\") é um palíndromo?", opcoes: ["Sim — ela é igual à sua própria inversão", "Não", "Isso causa um erro"], correta: 0 },
    ],
    prever: { fn: "ehPalindromo", solucao: ref.ehPalindromo, dica: "true ou false", gera: (r) => pick(r, ["arara", "casa", "osso", "reviver", "amor", "level", "nave", "radar", "teste"], 5).map((w) => [w]) },
  },
  "exame-b": {
    mc: [
      { p: "Por que removemos os valores repetidos antes de pegar o segundo maior?", opcoes: ["Para o 'segundo maior' não ser só uma cópia do maior", "Para a lista ocupar menos memória", "Não é necessário remover"], correta: 0 },
      { p: "Em [9, 9, 5], qual é o segundo maior valor distinto?", opcoes: ["5", "9", "Não existe"], correta: 0 },
    ],
    prever: { fn: "segundoMaior", solucao: ref.segundoMaior, dica: "um número", gera: (r) => Array.from({ length: 5 }, () => { const a = intEntre(r, 1, 20); return [[a, a + intEntre(r, 1, 5), ...listaInts(r, 2, 1, 25)]]; }) },
  },
  "exame-a": {
    mc: [
      { p: "Por que contamos a frequência antes de procurar o caractere único?", opcoes: ["Para saber quantas vezes cada um aparece e achar o de contagem 1", "Para ordenar o texto", "Não é preciso contar nada"], correta: 0 },
      { p: "Em 'aabb', qual é o primeiro caractere que não se repete?", opcoes: ["Nenhum — a resposta é vazio", "a", "b"], correta: 0 },
    ],
    prever: { fn: "primeiroUnico", solucao: ref.primeiroUnico, dica: "um caractere (ou vazio)", gera: (r) => pick(r, ["swiss", "aabbc", "banana", "teste", "ovo", "abcabd", "sucesso", "arara"], 5).map((w) => [w]) },
  },

  // ---- Oráculo (sem execução: conceitual/aplicado) ----
  "orac-exame-e": {
    mc: [
      { p: "Qual destes NÃO é um pilar de um bom prompt?", opcoes: ["A cor da tela do usuário", "O papel/persona da IA", "O formato da saída"], correta: 0 },
      { p: "Para que serve incluir um exemplo no prompt?", opcoes: ["Mostrar concretamente o formato e o estilo esperados", "Deixar o prompt mais comprido", "Confundir a IA de propósito"], correta: 0 },
      { p: "Dizer 'faça um site' em vez de descrever seções, estilo e restrições tende a gerar:", opcoes: ["Um resultado genérico e provavelmente fora do que você queria", "Sempre o resultado perfeito", "Um erro da IA"], correta: 0 },
      { p: "Definir o PAPEL ('aja como um dev sênior') serve para:", opcoes: ["Ajustar o tom, a profundidade e o foco da resposta", "Nada, é decoração", "Deixar a IA mais lenta"], correta: 0 },
      { p: "Qual a melhor forma de pedir o formato?", opcoes: ["Ser explícito: 'responda em tópicos, no máximo 5'", "Deixar a IA escolher sempre", "Pedir 'bem formatado'"], correta: 0 },
    ],
  },
  "orac-exame-d": {
    mc: [
      { p: "Por que a IA 'alucina' (inventa respostas)?", opcoes: ["Quando o prompt deixa brechas, ela preenche o vazio adivinhando", "Porque ela é burra", "Porque o computador está lento"], correta: 0 },
      { p: "O que mais reduz alucinação?", opcoes: ["Restrições claras e um exemplo de entrada e saída", "Escrever 'não alucine' no fim", "Usar letras maiúsculas"], correta: 0 },
      { p: "Um exemplo de entrada → saída no prompt ajuda porque:", opcoes: ["Ancora o formato e remove ambiguidade do que você espera", "Deixa o prompt bonito", "Obriga a IA a copiar o exemplo e nada mais"], correta: 0 },
      { p: "Se a IA erra sempre do mesmo jeito, o melhor é:", opcoes: ["Adicionar uma regra explícita proibindo aquele erro", "Repetir o mesmo prompt mais alto", "Desistir"], correta: 0 },
      { p: "Pedir a fonte/raciocínio da IA tende a:", opcoes: ["Reduzir invenções, pois força ela a se justificar", "Aumentar a alucinação", "Não mudar nada"], correta: 0 },
    ],
  },
  "orac-exame-c": {
    mc: [
      { p: "Por que exigir saída em JSON/estrutura exata?", opcoes: ["Para outro sistema conseguir ler e usar automaticamente", "Para ficar bonito", "Para a IA responder mais rápido"], correta: 0 },
      { p: "O que mais ajuda a IA a acertar o formato?", opcoes: ["Mostrar um exemplo da estrutura e proibir texto fora dela", "Pedir 'bem formatado'", "Escrever em maiúsculas"], correta: 0 },
      { p: "Se a IA devolve texto extra além do JSON, o melhor é:", opcoes: ["Instruir explicitamente: responda SOMENTE o JSON", "Aceitar assim mesmo", "Desistir do formato"], correta: 0 },
      { p: "Formato estruturado importa porque software consome dados:", opcoes: ["De forma previsível, campo por campo", "Lendo parágrafos soltos", "Adivinhando o que é cada parte"], correta: 0 },
      { p: "Um exemplo da estrutura no prompt serve para:", opcoes: ["Ancorar exatamente o formato esperado", "Encompridar o prompt", "Confundir a IA"], correta: 0 },
    ],
  },
  "orac-exame-b": {
    mc: [
      { p: "O que é few-shot prompting?", opcoes: ["Dar alguns exemplos de entrada → saída para a IA seguir o padrão", "Pedir para a IA ser rápida", "Usar o mínimo de palavras"], correta: 0 },
      { p: "Por que dois ou mais exemplos ajudam?", opcoes: ["Mostram o padrão com mais clareza que a explicação sozinha", "Deixam o prompt bonito", "Não fazem diferença"], correta: 0 },
      { p: "Num classificador de sentimento, um bom exemplo mostra:", opcoes: ["Uma frase e o rótulo esperado dela", "Só a frase", "Só o rótulo"], correta: 0 },
      { p: "Few-shot costuma superar zero-shot porque:", opcoes: ["A IA capta o formato e o critério pelos exemplos", "Usa menos tokens", "É uma técnica mais antiga"], correta: 0 },
      { p: "Depois dos exemplos, o prompt deve:", opcoes: ["Apresentar o caso novo a ser resolvido", "Encerrar sem pedir nada", "Repetir os exemplos de novo"], correta: 0 },
    ],
  },
  "orac-exame-a": {
    mc: [
      { p: "Um prompt mestre combina:", opcoes: ["Papel, contexto, restrições, formato, exemplo e raciocínio", "Apenas o pedido direto", "Somente exemplos"], correta: 0 },
      { p: "Pedir raciocínio passo a passo tende a:", opcoes: ["Melhorar respostas em tarefas que exigem lógica", "Piorar sempre a resposta", "Não mudar nada"], correta: 0 },
      { p: "Contexto rico serve para:", opcoes: ["A IA personalizar a resposta ao caso real", "Gastar tokens à toa", "Nada de útil"], correta: 0 },
      { p: "O melhor prompt é aquele que:", opcoes: ["Remove a ambiguidade e deixa claro o que se espera", "É sempre o mais curto possível", "Usa as palavras mais difíceis"], correta: 0 },
      { p: "As restrições no prompt servem para:", opcoes: ["Delimitar o que a IA pode e não pode fazer", "Decorar o texto", "Atrasar a resposta"], correta: 0 },
    ],
  },

  // ---- Sentinela ----
  "sec-exame-e": {
    mc: [
      { p: "Por que nunca devemos confiar na entrada do usuário?", opcoes: ["Porque ela pode vir inválida ou maliciosa", "Porque o usuário erra sempre de propósito", "Na verdade podemos confiar"], correta: 0 },
      { p: "Pela nossa regra, 'a@b' é um e-mail válido?", opcoes: ["Não — falta o ponto e algo depois no domínio", "Sim", "Depende do navegador"], correta: 0 },
    ],
    prever: { fn: "ehEmailValido", solucao: ref.ehEmailValido, dica: "true ou false", gera: (r) => pick(r, ["user@site.com", "a@b", "x@y.co", "semarroba.com", "a b@c.com", "a@@b.com", "nome@dom.com.br", "@x.com"], 5).map((e) => [e]) },
  },
  "sec-exame-d": {
    mc: [
      { p: "O que causa um SQL Injection?", opcoes: ["Concatenar a entrada do usuário direto no comando SQL", "Usar um banco de dados", "Ter muitas tabelas"], correta: 0 },
      { p: "Qual é a defesa definitiva (melhor que escapar aspas)?", opcoes: ["Queries parametrizadas, que separam comando de dado", "Escrever o SQL em maiúsculas", "Esconder o nome do banco"], correta: 0 },
    ],
    prever: { fn: "escapaSql", solucao: ref.escapaSql, dica: "o texto com as aspas dobradas", gera: (r) => pick(r, ["O'Brien", "normal", "a'b'c", "d'agua", "sem aspas", "x'"], 5).map((v) => [v]) },
  },

  // ---- Estrategista (sem execução de lista no prova: conceitual) ----
  "dat-exame-e": {
    mc: [
      { p: "Como achar o item de maior preço numa lista?", opcoes: ["Guardar um campeão e comparar o preço item a item", "Ordenar pela ordem alfabética do nome", "Somar todos os preços"], correta: 0 },
      { p: "A função deve devolver o quê?", opcoes: ["O nome do produto", "O objeto inteiro", "Apenas o preço"], correta: 0 },
      { p: "Se dois itens têm o maior preço empatado, a regra pede:", opcoes: ["Devolver o primeiro encontrado", "Devolver os dois", "Dar erro"], correta: 0 },
      { p: "Para achar o máximo, você precisa percorrer:", opcoes: ["A lista inteira ao menos uma vez", "Só o primeiro item", "Só o último item"], correta: 0 },
      { p: "Começar o 'campeão' com o primeiro item é melhor do que começar com 0 porque:", opcoes: ["A lista pode ter só valores negativos", "0 é mais rápido", "Não faz diferença nunca"], correta: 0 },
    ],
  },
  "dat-exame-d": {
    mc: [
      { p: "A receita de um item é calculada como:", opcoes: ["preço × quantidade", "apenas o preço", "apenas a quantidade"], correta: 0 },
      { p: "Por que o maior em receita pode não ser o de maior preço?", opcoes: ["Um item barato vendido em grande quantidade pode render mais", "Eles são sempre o mesmo", "Porque o preço não importa"], correta: 0 },
      { p: "Para rankear por receita, você primeiro precisa:", opcoes: ["Calcular a métrica derivada (preço × qtd) de cada item", "Ordenar por nome", "Remover os itens baratos"], correta: 0 },
      { p: "Um produto de R$10 vendido 100x rende mais que um de R$500 vendido 1x?", opcoes: ["Sim — 1000 contra 500", "Não", "São iguais"], correta: 0 },
      { p: "A função devolve:", opcoes: ["O nome do produto de maior receita", "A receita total da loja", "A lista ordenada"], correta: 0 },
    ],
  },
};
