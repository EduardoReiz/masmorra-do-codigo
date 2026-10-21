// Gera src/dados/aulas.arquiteto.js a partir de licoes/*.mjs.
//
//   node ferramentas/aulas/gerar.mjs
//
// Cada lição traz o código em JavaScript e em Python (linha a linha, com uma "chave" por
// linha), os textos e as falas. O gerador EXECUTA o código de verdade para montar a
// demonstração (valor das variáveis a cada passo) e confere:
//   1. a solução completa passa nos testes oficiais do monstro, nas duas linguagens;
//   2. o guiado, com as lacunas preenchidas, também passa.
// Se algo falhar, ele para e diz o quê. Nada é gravado com erro.
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { rastreiaPy, rastreiaJs } from "./rastreia.mjs";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.join(aqui, "..", "..");

// ---- testes oficiais dos monstros (o código do jogo, empacotado pelo esbuild) ----
const tmp = mkdtempSync(path.join(tmpdir(), "oficiais-"));
const entrada = path.join(tmp, "entrada.mjs");
writeFileSync(entrada, `export { EXERCICIOS } from ${JSON.stringify(path.join(raiz, "src/dados/exercicios.js"))};\nexport { instanciar } from ${JSON.stringify(path.join(raiz, "src/dados/gerador.js"))};\n`);
const pacote = path.join(tmp, "oficiais.mjs");
execFileSync("npx", ["--yes", "esbuild", entrada, "--bundle", "--platform=node", "--format=esm", `--outfile=${pacote}`, "--log-level=error"], { cwd: raiz });
const { EXERCICIOS, instanciar } = await import(pathToFileURL(pacote).href);
const oficiais = (id) => {
  const ex = EXERCICIOS.find((e) => e.id === id);
  if (!ex) throw new Error(`monstro desconhecido: ${id}`);
  const inst = instanciar(ex, 20261021);
  return [...inst.testes, ...(inst.fratura || [])].map((t) => ({ in: t.in, out: t.out }));
};

// ---- execução e conferência --------------------------------------------------
function rodaJs(codigo, preambulo, fn, testes) {
  const f = new Function(`${codigo}\n${preambulo}\nreturn ${fn};`)();
  return testes.filter((t) => JSON.stringify(f(...structuredClone(t.in))) !== JSON.stringify(t.out)).map((t) => ({ ...t, got: f(...structuredClone(t.in)) }));
}
function rodaPy(codigo, preambulo, fn, testes) {
  const prog = `
import json, sys
ns = {}
exec(sys.argv[1], ns)
exec(sys.argv[2], ns)
f = ns[sys.argv[3]]
falhas = []
for t in json.loads(sys.argv[4]):
    got = f(*t["in"])
    if json.dumps(got) != json.dumps(t["out"]):
        falhas.append({"in": t["in"], "out": t["out"], "got": got})
print(json.dumps(falhas))
`;
  const r = spawnSync("python3", ["-c", prog, preambulo || "", codigo, fn, JSON.stringify(testes)], { encoding: "utf8" });
  if (r.status !== 0) throw new Error("Python falhou:\n" + r.stderr);
  return JSON.parse(r.stdout);
}
function rodaProgramaJs(codigo, esperado, exige = []) {
  const linhas = [];
  new Function("console", codigo)({ log: (...a) => linhas.push(a.map((x) => (typeof x === "string" ? x : JSON.stringify(x))).join(" ")) });
  return conferePrograma(codigo, linhas.join("\n"), esperado, exige);
}
function rodaProgramaPy(codigo, esperado, exige = []) {
  const prog = `
import sys, io, contextlib
buf = io.StringIO()
with contextlib.redirect_stdout(buf):
    exec(compile(sys.argv[1], "<aula>", "exec"), {"__name__": "__main__"})
print(buf.getvalue(), end="")
`;
  const r = spawnSync("python3", ["-c", prog, codigo], { encoding: "utf8" });
  if (r.status !== 0) throw new Error("Python falhou:\n" + r.stderr);
  return conferePrograma(codigo, r.stdout, esperado, exige);
}
const norm = (t) => String(t).split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
function conferePrograma(codigo, got, esperado, exige) {
  const falhas = [];
  if (norm(got) !== norm(esperado)) falhas.push({ got: norm(got), esperado: norm(esperado) });
  const sem = codigo.replace(/\/\/.*$/gm, "").replace(/#.*$/gm, "");
  for (const e of exige) if ((sem.match(new RegExp(e.re, "g")) || []).length < (e.min || 1)) falhas.push({ exige: e.nome });
  return falhas;
}
function confere(nome, falhas) {
  if (falhas.length) throw new Error(`${nome}: ${falhas.length} teste(s) falharam, ex.: ${JSON.stringify(falhas[0])}`);
}

// ---- formatação dos valores --------------------------------------------------
const fmtJs = (v) =>
  Array.isArray(v)
    ? "[" + v.map(fmtJs).join(", ") + "]"
    : v === null
      ? "null"
      : typeof v === "string"
        ? JSON.stringify(v)
        : typeof v === "object"
          ? "{" + Object.entries(v).map(([k, x]) => `${k}: ${fmtJs(x)}`).join(", ") + "}"
          : String(v);
const fmtPyArg = (v) =>
  Array.isArray(v) ? "[" + v.map(fmtPyArg).join(", ") + "]" : v === null ? "None" : v === true ? "True" : v === false ? "False" : typeof v === "string" ? `'${v}'` : String(v);

// ---- montagem da demonstração -------------------------------------------------
function monta(licao, lang, dados, eventosBrutos, retornoFmt) {
  const programa = licao.modo === "programa";
  const codigo = dados.codigo.map(([t]) => t);
  const chaves = dados.codigo.map(([, k]) => k);
  // 1º evento = a linha do "function"/"def": só os parâmetros recebidos (programas não têm essa linha)
  let eventos = eventosBrutos.filter((e) => e.linha !== null || e.retorno !== undefined);
  const retornoEv = lang === "py" ? eventos.find((e) => e.linha === null) : null;
  eventos = eventos.filter((e) => e.linha !== null);
  if (lang === "js" && !programa) eventos = [{ linha: 0, vars: eventos[0].vars }, ...eventos];
  const fmt = (v) => (lang === "py" ? v : fmtJs(v));
  const finais = lang === "py" ? retornoEv.vars : eventos[eventos.length - 1].vars;
  const ordem = [];
  for (const e of [...eventos, { vars: finais }]) for (const k of Object.keys(e.vars)) if (k !== "__saida" && !ordem.includes(k)) ordem.push(k);

  const passos = [];
  // programa: abre com a tela vazia, antes da primeira linha
  if (programa) passos.push({ linha: -1, vars: [], saida: "", fala: licao.abertura || "O programa começa. A tela ainda está vazia." });
  eventos.forEach((e, k) => {
    const chave = chaves[e.linha];
    if (!chave) throw new Error(`${licao.id}/${lang}: a linha ${e.linha} ("${codigo[e.linha]}") foi executada mas não tem chave`);
    const primeiraDeFuncao = k === 0 && !programa;
    const depois = primeiraDeFuncao ? e.vars : k + 1 < eventos.length ? eventos[k + 1].vars : finais;
    const antes = primeiraDeFuncao ? {} : e.vars;
    const proxima = k + 1 < eventos.length ? chaves[eventos[k + 1].linha] : "__fim__";
    let tpl = licao.falas[chave];
    if (tpl === undefined) throw new Error(`${licao.id}: falta a fala da chave "${chave}"`);
    if (typeof tpl === "object") tpl = proxima === tpl.corpo ? tpl.entra : tpl.sai;
    const fala = tpl.replace(/\{(\w+?)(_antes)?\}/g, (_, nome, ant) => {
      if (nome === "retorno") return retornoFmt;
      const fonte = ant ? antes : depois;
      if (!(nome in fonte)) throw new Error(`${licao.id}/${lang}: a fala da chave "${chave}" usa {${nome}${ant || ""}} que não existe nesse passo`);
      return fmt(fonte[nome]);
    });
    passos.push({
      linha: e.linha,
      vars: ordem.filter((n) => n in depois).map((n) => [n, fmt(depois[n])]),
      // na última linha a saída é a completa (já conferida contra licao.saida); antes, a que o rastreio viu
      ...(programa ? { saida: (k + 1 >= eventos.length ? licao.saida : String(depois.__saida ?? "")).replace(/\n$/, "") } : {}),
      fala,
      ...(licao.dano?.includes(chave) ? { dano: true } : {}),
    });
  });
  // passo final: os testes passam, o monstro cai
  const ultimo = passos[passos.length - 1];
  passos.push({ linha: ultimo.linha, vars: ultimo.vars, ...(programa ? { saida: ultimo.saida } : {}), fala: licao.fimFala || "Os testes passaram. O monstro caiu.", fim: true });
  if (!passos.some((p) => p.dano)) throw new Error(`${licao.id}/${lang}: nenhuma chave "dano" foi executada na demonstração`);
  return { codigo, passos };
}

// ---- principal ------------------------------------------------------------------
const arquivos = readdirSync(path.join(aqui, "licoes")).filter((f) => f.endsWith(".mjs")).sort();
const licoes = [];
for (const a of arquivos) licoes.push(...(await import(pathToFileURL(path.join(aqui, "licoes", a)).href)).default);

const saida = {};
for (const licao of licoes) {
  const testesOficiais = licao.modo === "programa" ? [] : oficiais(licao.id);
  const linguagens = {};
  for (const lang of ["js", "py"]) {
    const d = licao[lang];
    const codigoTexto = d.codigo.map(([t]) => t).join("\n");
    const pre = d.preambulo || "";
    const programa = licao.modo === "programa";
    // 1) a solução completa passa nos testes oficiais (ou, em programas, escreve a saída certa)
    if (programa) confere(`${licao.id}/${lang} solução`, (lang === "js" ? rodaProgramaJs : rodaProgramaPy)(codigoTexto, licao.saida, licao.exige));
    else confere(`${licao.id}/${lang} solução`, (lang === "js" ? rodaJs : rodaPy)(codigoTexto, pre, licao.fn, testesOficiais));
    // 2) o guiado, preenchido, também passa
    let i = 0;
    const preenchido = d.guiado.codigo.replace(/___/g, () => d.guiado.preenche[i++]);
    if (i !== d.guiado.preenche.length) throw new Error(`${licao.id}/${lang}: o guiado tem ${i} lacunas e ${d.guiado.preenche.length} respostas`);
    if (programa) confere(`${licao.id}/${lang} guiado`, (lang === "js" ? rodaProgramaJs : rodaProgramaPy)(preenchido, licao.saida, licao.exige));
    else confere(`${licao.id}/${lang} guiado`, (lang === "js" ? rodaJs : rodaPy)(preenchido, pre, licao.fn, [...testesOficiais, ...d.guiado.testes]));
    // 3) a demonstração, rastreada de verdade
    let eventos, retornoFmt;
    if (lang === "py") {
      eventos = rastreiaPy({ codigo: codigoTexto, preambulo: pre, fn: licao.fn, args: licao.entrada, modo: licao.modo, nomes: licao.variaveis });
      retornoFmt = eventos.find((e) => e.retorno !== undefined).retorno;
    } else {
      const nomesVars = licao.variaveis;
      for (let tentativa = 1; ; tentativa++) {
        try {
          eventos = await rastreiaJs({ codigo: codigoTexto, preambulo: pre, fn: licao.fn, args: licao.entrada, nomes: nomesVars, modo: licao.modo });
          break;
        } catch (e) {
          if (tentativa === 3) throw e;
          console.error(`  (rastreio JS de ${licao.id} falhou: ${e.message}; tentando de novo)`);
        }
      }
      if (!programa) {
        const f = new Function(`${codigoTexto}\n${pre}\nreturn ${licao.fn};`)();
        retornoFmt = fmtJs(f(...structuredClone(licao.entrada)));
      }
    }
    const demo = monta(licao, lang, d, eventos, retornoFmt);
    const rotulo = programa ? licao.rotulo || "o programa" : `${licao.fn}(${licao.entrada.map(lang === "py" ? fmtPyArg : fmtJs).join(", ")})`;
    linguagens[lang] = {
      sintaxe: d.sintaxe,
      demo: { entrada: rotulo, codigo: demo.codigo, passos: demo.passos, ...(licao.ritmo ? { ritmo: licao.ritmo } : {}) },
      guiado: { starter: d.guiado.codigo, ...(d.guiado.testes ? { testes: d.guiado.testes } : {}) },
    };
    console.log(`ok  ${licao.id.padEnd(10)} ${lang}  ${demo.passos.length} passos`);
  }
  saida[licao.id] = { conceito: licao.conceito, porque: licao.porque, analogia: licao.analogia, ideias: licao.ideias, linguagens };
}

const alvo = path.join(raiz, "src/dados/aulas.arquiteto.js");
writeFileSync(
  alvo,
  `// GERADO por ferramentas/aulas/gerar.mjs a partir de ferramentas/aulas/licoes/*.mjs. Não edite à mão.\n` +
    `// As demonstrações vêm da execução real do código (valores das variáveis a cada linha), e as\n` +
    `// soluções foram conferidas contra os testes oficiais dos monstros, em JavaScript e em Python.\n` +
    `export const AULAS_ARQUITETO = ${JSON.stringify(saida, null, 2)};\n`
);
console.log(`\n${Object.keys(saida).length} aulas gravadas em src/dados/aulas.arquiteto.js`);
