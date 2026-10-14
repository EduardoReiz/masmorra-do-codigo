// Detector de "técnica além do nível". Não tenta adivinhar se foi IA (isso é
// impossível com confiança) — detecta recursos AVANÇADOS num exercício de nível
// INICIANTE (E/D), onde quem está de fato aprendendo ainda não usaria. É um
// SINAL, não uma acusação: dispara um portão de entendimento (explique a
// técnica), nunca uma punição direta — para não castigar quem já sabe mais.
const TECNICAS = [
  {
    id: "reduce",
    re: /\.reduce\s*\(/,
    pergunta: { p: "Seu código usou .reduce(). O que esse método faz?", opcoes: ["Percorre o array acumulando tudo em um único valor", "Remove o último item do array", "Ordena o array em ordem crescente"], correta: 0 },
  },
  {
    id: "regex",
    re: /\.(test|match|matchAll|replace)\s*\(\s*\/|new RegExp/,
    pergunta: { p: "Você usou uma expressão regular (regex). Para que ela serve?", opcoes: ["Descrever e encontrar padrões dentro de um texto", "Fazer operações matemáticas", "Declarar variáveis mais rápido"], correta: 0 },
  },
  {
    id: "spread",
    re: /\.\.\./,
    pergunta: { p: "Seu código usou '...' (spread). O que ele faz?", opcoes: ["Espalha os elementos de um array ou objeto", "Divide o número por três", "Transforma a linha em comentário"], correta: 0 },
  },
  {
    id: "arrayfrom",
    re: /Array\s*\.\s*from|\bArray\s*\(/,
    pergunta: { p: "Você usou Array.from / Array(). Para que serve?", opcoes: ["Criar um novo array (por tamanho ou a partir de algo iterável)", "Apagar um array existente", "Somar dois números"], correta: 0 },
  },
  {
    id: "chain",
    re: /\.(map|filter)\s*\([^)]*\)\s*\.\s*(map|filter|reduce|sort|forEach)/,
    pergunta: { p: "Você encadeou métodos (ex.: .map().filter()). Como isso funciona?", opcoes: ["Cada método transforma o resultado do anterior, em sequência", "Todos rodam de trás para frente", "Só o último método da linha roda"], correta: 0 },
  },
  {
    id: "opcional",
    re: /\?\.|\?\?/,
    pergunta: { p: "Você usou ?. ou ??. Para que servem?", opcoes: ["Lidar com valores que podem ser nulos/indefinidos com segurança", "Fazer perguntas ao usuário", "Comentar o código"], correta: 0 },
  },
];

// Só analisa nos níveis iniciais (E/D); em C+ esses recursos já são esperados.
export function analisarEstilo(codigo, nivel) {
  if (nivel !== "E" && nivel !== "D") return [];
  const txt = codigo || "";
  return TECNICAS.filter((t) => t.re.test(txt)).map((t) => t.pergunta);
}
