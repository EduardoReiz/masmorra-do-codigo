// Linguagens que o aluno pode escolher no caminho do Arquiteto. A lógica é a
// mesma em todas: os testes dos monstros são só entrada e saída (JSON), então um
// monstro vale para qualquer linguagem. O que muda é o código inicial, a aula de
// sintaxe e o motor que roda o código.
// "disponivel: false" aparece na tela de escolha como "em breve" — Java, C e C++
// precisam do sandbox no servidor (RF-017).
export const LINGUAGENS = [
  {
    id: "js", nome: "JavaScript", monaco: "javascript", disponivel: true,
    desc: "Roda direto no navegador. Boa para ver resultado rápido e para quem quer ir para a web.",
  },
  {
    id: "py", nome: "Python", monaco: "python", disponivel: true,
    desc: "Sintaxe limpa e fácil de ler. Uma das mais usadas para começar a programar.",
  },
  { id: "ts", nome: "TypeScript", disponivel: false, desc: "JavaScript com tipos. Depende da etapa de servidor." },
  { id: "java", nome: "Java", disponivel: false, desc: "Orientada a objetos, muito usada em empresas. Depende do servidor." },
  { id: "c", nome: "C", disponivel: false, desc: "Perto da máquina; ensina como o computador funciona. Depende do servidor." },
  { id: "cpp", nome: "C++", disponivel: false, desc: "C com orientação a objetos. Depende do servidor." },
];

export const LINGUAGEM_PADRAO = "js";

export function linguagemDe(id) {
  return LINGUAGENS.find((l) => l.id === id && l.disponivel) || LINGUAGENS[0];
}

// Só o Arquiteto escolhe a linguagem; os outros caminhos usam JavaScript.
export function linguagemDoJogador(progresso) {
  if (progresso?.classe !== "O Arquiteto") return linguagemDe("js");
  return linguagemDe(progresso.linguagem);
}

// Traduz o código inicial (escrito em JavaScript) para a linguagem escolhida.
// Um exercício pode trazer o seu próprio starter em ex.porLinguagem[id].starter.
export function starterDe(ex, lang) {
  const proprio = ex?.porLinguagem?.[lang]?.starter;
  if (proprio) return proprio;
  const js = ex?.starter ?? "";
  if (lang !== "py") return js;
  const linhas = js.split("\n");
  const cab = /^function\s+(\w+)\s*\(([^)]*)\)\s*\{/.exec(linhas[0] || "");
  if (!cab) return js;
  const corpo = linhas
    .slice(1)
    .filter((l) => l.trim() !== "}")
    .map((l) => {
      const t = l.trim();
      if (t.startsWith("//")) return "    # " + t.replace(/^\/\/\s?/, "");
      return t ? "    " + t : "";
    })
    .filter((l, i, a) => !(l === "" && (i === 0 || i === a.length - 1)));
  return `def ${cab[1]}(${cab[2]}):\n${corpo.join("\n")}\n    pass  # troque pelo seu código\n`;
}
