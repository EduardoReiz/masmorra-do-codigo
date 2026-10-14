// Motor de execução do protótipo: roda o código do jogador no próprio navegador
// (new Function) contra uma lista de testes. No produto real isso é substituído
// pelo sandbox do servidor. Usado tanto pelo combate quanto pelo nivelamento.
export function rodar(codigo, fn, testes) {
  let f;
  try {
    f = new Function(codigo + "\n;return typeof " + fn + " === 'function' ? " + fn + " : null;")();
  } catch (e) {
    return { erro: "Seu código não compilou: " + (e.message || e), resultados: [] };
  }
  if (!f) return { erro: "Não encontrei a função '" + fn + "'. O nome está certo?", resultados: [] };
  const resultados = testes.map((t) => {
    try {
      const got = f(...t.in);
      return { ...t, got, ok: JSON.stringify(got) === JSON.stringify(t.out) };
    } catch (e) {
      return { ...t, got: "erro em tempo de execução", ok: false, msg: e.message };
    }
  });
  return { resultados };
}

// mostra a chamada de forma legível: fn([3,9,2]), fn("banana"), fn(5)
export const chamada = (fn, entrada) =>
  fn + "(" + entrada.map((a) => JSON.stringify(a)).join(", ") + ")";

// Corretor por RUBRICA (tasks de prompt do Oráculo). Verifica cada requisito
// sobre o texto do prompt. Mesma forma de retorno do rodar() para a UI reusar.
export function avaliarPrompt(texto, requisitos) {
  const t = (texto || "").trim();
  if (t.length < 15) {
    return { erro: "Seu prompt está curto demais. Diga à IA, com detalhe, o que você quer.", resultados: [] };
  }
  const resultados = requisitos.map((r) => ({ nome: r.nome, ok: !!r.ok(t), publico: true }));
  return { resultados };
}
