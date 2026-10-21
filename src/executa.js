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

// ---- Python no navegador (Pyodide) ----------------------------------------
// O Python roda em WebAssembly, também dentro do navegador; baixa uma vez (alguns
// MB) e fica em cache. No produto real isso também sai para o sandbox do servidor.
const PYODIDE = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/";
let pyPronto = null;

export function carregarPython() {
  if (!pyPronto) {
    pyPronto = import(/* @vite-ignore */ PYODIDE + "pyodide.mjs")
      .then((m) => m.loadPyodide({ indexURL: PYODIDE }))
      .then((py) => {
        // chama a função do jogador com os argumentos em JSON e devolve o resultado em JSON
        py.runPython(
          "import json, io, contextlib\n" +
            "def __chama(f, args_json):\n" +
            "    return json.dumps(f(*json.loads(args_json)))\n" +
            // roda um programa inteiro (sem função) e devolve o que ele escreveu na tela
            "def __programa(codigo):\n" +
            "    buf = io.StringIO()\n" +
            "    with contextlib.redirect_stdout(buf):\n" +
            "        exec(compile(codigo, '<seu código>', 'exec'), {'__name__': '__main__'})\n" +
            "    return buf.getvalue()\n"
        );
        return py;
      })
      .catch((e) => {
        pyPronto = null; // permite tentar de novo
        throw e;
      });
  }
  return pyPronto;
}

const ultimaLinha = (e) => String(e?.message || e).trim().split("\n").filter(Boolean).pop();

export async function rodarPy(codigo, fn, testes) {
  let py;
  try {
    py = await carregarPython();
  } catch {
    return { erro: "Não consegui carregar o Python. Ele precisa de internet na primeira vez.", resultados: [] };
  }
  const ns = py.globals.get("dict")();
  try {
    py.runPython(codigo, { globals: ns });
  } catch (e) {
    return { erro: "Seu código não compilou: " + ultimaLinha(e), resultados: [] };
  }
  const f = ns.get(fn);
  if (!f) return { erro: "Não encontrei a função '" + fn + "'. O nome está certo?", resultados: [] };
  const chama = py.globals.get("__chama");
  const resultados = testes.map((t) => {
    try {
      const got = JSON.parse(chama(f, JSON.stringify(t.in)));
      return { ...t, got, ok: JSON.stringify(got) === JSON.stringify(t.out) };
    } catch (e) {
      return { ...t, got: "erro em tempo de execução", ok: false, msg: ultimaLinha(e) };
    }
  });
  return { resultados };
}

// Roda na linguagem escolhida. Sempre assíncrono, porque o Python carrega sob demanda.
export async function executar(lang, codigo, fn, testes) {
  return lang === "py" ? rodarPy(codigo, fn, testes) : rodar(codigo, fn, testes);
}

// ---- Programas que escrevem na tela (o "Oi, Criador!") --------------------------
// O monstro não pede uma função: pede um programa. O jogo confere o que ele ESCREVEU na tela
// (console.log em JavaScript, print em Python) e, se o monstro pedir, se o código usa certas
// construções (por exemplo, uma variável). "exige" = [{ nome, re, min }].
const normalizaSaida = (t) =>
  String(t ?? "")
    .split("\n")
    .map((l) => l.replace(/\s+$/, ""))
    .join("\n")
    .replace(/\n+$/, "");

function conferePrograma(codigo, got, esperado, exige = []) {
  const certa = normalizaSaida(got) === normalizaSaida(esperado);
  const resultados = [{ nome: "A saída na tela está certa", ok: certa, publico: true }];
  const semComentarios = codigo.replace(/\/\/.*$/gm, "").replace(/#.*$/gm, "");
  for (const e of exige) {
    const achados = semComentarios.match(new RegExp(e.re, "g")) || [];
    resultados.push({ nome: e.nome, ok: achados.length >= (e.min || 1), publico: true });
  }
  return { resultados, got: normalizaSaida(got), esperado: normalizaSaida(esperado), programa: true };
}

export function rodarProgramaJs(codigo, esperado, exige) {
  const linhas = [];
  const tela = { log: (...a) => linhas.push(a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" ")) };
  try {
    new Function("console", codigo)(tela);
  } catch (e) {
    return { erro: "Seu código deu erro: " + (e.message || e), resultados: [], programa: true };
  }
  return conferePrograma(codigo, linhas.join("\n"), esperado, exige);
}

export async function rodarProgramaPy(codigo, esperado, exige) {
  let py;
  try {
    py = await carregarPython();
  } catch {
    return { erro: "Não consegui carregar o Python. Ele precisa de internet na primeira vez.", resultados: [], programa: true };
  }
  try {
    const got = py.globals.get("__programa")(codigo);
    return conferePrograma(codigo, got, esperado, exige);
  } catch (e) {
    return { erro: "Seu código deu erro: " + ultimaLinha(e), resultados: [], programa: true };
  }
}

export async function executarPrograma(lang, codigo, esperado, exige) {
  return lang === "py" ? rodarProgramaPy(codigo, esperado, exige) : rodarProgramaJs(codigo, esperado, exige);
}
