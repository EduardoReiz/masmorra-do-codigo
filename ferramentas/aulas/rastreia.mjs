// Executa o código da aula de verdade e grava, linha a linha, o valor das variáveis.
// Python: sys.settrace. JavaScript: depurador do Node (Chrome DevTools Protocol).
// Assim as demonstrações nunca mostram um valor inventado.
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

// ---- Python ----------------------------------------------------------------
const PY_RASTREADOR = `
import sys, json, io
spec = json.loads(sys.argv[1])
ns = {}
eventos = []
if spec.get("modo") == "programa":
    nomes = set(spec.get("nomes", []))
    buf = io.StringIO()
    def tracer(frame, event, arg):
        if frame.f_code.co_filename != "<aula>":
            return None
        if event == "line":
            eventos.append({"linha": frame.f_lineno - 1, "vars": {k: repr(v) for k, v in frame.f_locals.items() if k in nomes}, "saida": buf.getvalue()})
        return tracer
    antigo = sys.stdout
    sys.stdout = buf
    sys.settrace(tracer)
    try:
        exec(compile(spec["codigo"], "<aula>", "exec"), ns)
    finally:
        sys.settrace(None)
        sys.stdout = antigo
    eventos.append({"linha": None, "vars": {k: repr(v) for k, v in ns.items() if k in nomes}, "saida": buf.getvalue(), "retorno": "None"})
    print(json.dumps(eventos))
    sys.exit(0)
if spec.get("preambulo"):
    exec(compile(spec["preambulo"], "<preambulo>", "exec"), ns)
exec(compile(spec["codigo"], "<aula>", "exec"), ns)
f = ns[spec["fn"]]
def tracer(frame, event, arg):
    if frame.f_code is not f.__code__:
        return None
    vars_ = {k: repr(v) for k, v in frame.f_locals.items()}
    if event == "call":
        eventos.append({"linha": 0, "vars": vars_})
    elif event == "line":
        eventos.append({"linha": frame.f_lineno - 1, "vars": vars_})
    elif event == "return":
        eventos.append({"linha": None, "vars": vars_, "retorno": repr(arg)})
    return tracer
sys.settrace(tracer)
f(*spec["args"])
sys.settrace(None)
print(json.dumps(eventos))
`;

export function rastreiaPy({ codigo, preambulo = "", fn, args, modo, nomes }) {
  const r = spawnSync("python3", ["-c", PY_RASTREADOR, JSON.stringify({ codigo, preambulo, fn, args, modo, nomes })], { encoding: "utf8" });
  if (r.status !== 0) throw new Error("rastreio Python falhou:\n" + r.stderr);
  return JSON.parse(r.stdout);
}

// ---- JavaScript (CDP) -------------------------------------------------------
const tenta = (nome) =>
  `(()=>{try{const v=JSON.stringify(${nome});return v===undefined?"__nada__":v}catch(e){return "__nada__"}})()`;

export async function rastreiaJs({ codigo, preambulo = "", fn, args, nomes, modo }) {
  const programa = modo === "programa";
  const linhas = codigo.split("\n").length;
  const pasta = mkdtempSync(path.join(tmpdir(), "aula-"));
  const arq = path.join(pasta, "alvo.cjs");
  // o código da aula fica nas primeiras linhas; o resto (apoio e chamada) vem depois
  // programa solto: a 1ª linha liga a captura da tela e o resto é o código, que roda no nível de cima
  const conteudo = programa
    ? `globalThis.__saida=[];console.log=(...a)=>{__saida.push(a.map((x)=>typeof x==="string"?x:JSON.stringify(x)).join(" "))};debugger;\n${codigo}\n`
    : `${codigo}\n${preambulo}\ndebugger;\n${fn}(...${JSON.stringify(args)});\n`;
  writeFileSync(arq, conteudo);

  const filho = spawn(process.execPath, ["--inspect-brk=0", arq], { stdio: ["ignore", "ignore", "pipe"] });
  const url = await new Promise((resolve, reject) => {
    let buf = "";
    filho.stderr.on("data", (d) => {
      buf += d;
      const m = /ws:\/\/\S+/.exec(buf);
      if (m) resolve(m[0]);
    });
    filho.on("exit", () => reject(new Error("o Node saiu antes de abrir o depurador: " + buf)));
  });

  const ws = new WebSocket(url);
  await new Promise((ok, erro) => { ws.onopen = ok; ws.onerror = erro; });
  let id = 0;
  const pend = new Map();
  const fila = []; // pausas que chegaram antes de alguém esperar por elas
  let espera = null;
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); }
    else if (d.method === "Debugger.paused") {
      if (espera) { const r = espera; espera = null; r(d.params); } else fila.push(d.params);
    }
  };
  const cmd = (method, params = {}) => new Promise((res) => { const i = ++id; pend.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  const limite = (p, ms, onde) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`tempo esgotado em ${onde}`)), ms))]);
  filho.on("exit", () => { if (espera) { const r = espera; espera = null; r({ fim: true }); } else fila.push({ fim: true }); });
  const proximaPausa = () => (fila.length ? Promise.resolve(fila.shift()) : new Promise((res) => { espera = res; }));

  const eventos = [];
  try {
    await limite(cmd("Runtime.enable"), 8000, "Runtime.enable");
    await limite(cmd("Debugger.enable"), 8000, "Debugger.enable");
    await limite(cmd("Runtime.runIfWaitingForDebugger"), 8000, "runIfWaiting");
    await limite(proximaPausa(), 8000, "parada inicial"); // cai no "debugger;" (as funções são içadas)
    fila.length = 0;
    let p;
    if (programa) {
      await limite(cmd("Debugger.stepOver"), 8000, "stepOver inicial");
      p = await limite(proximaPausa(), 8000, "pausa na primeira linha");
    } else {
      await limite(cmd("Debugger.stepInto"), 8000, "stepInto 1");
      await limite(proximaPausa(), 8000, "pausa na chamada");
      await limite(cmd("Debugger.stepInto"), 8000, "stepInto 2");
      p = await limite(proximaPausa(), 8000, "pausa dentro da função");
    }

    let ultima = -1;
    for (let passo = 0; passo < 400; passo++) {
      if (p.fim) break; // o programa terminou
      const topo = p.callFrames[0];
      const bruta = topo.location.lineNumber;
      const linha = programa ? bruta - 1 : bruta;
      if (linha >= linhas) break; // saiu da função (ou o programa acabou)
      const nosso = programa ? topo.functionName === "" && linha >= 0 : topo.functionName === fn;
      if (nosso) {
        if (linha !== ultima) {
          const vars = {};
          for (const nome of nomes) {
            const r = await limite(cmd("Debugger.evaluateOnCallFrame", { callFrameId: topo.callFrameId, expression: tenta(nome) }), 8000, "evaluate");
            const v = r.result?.result?.value;
            if (typeof v === "string" && v !== "__nada__") vars[nome] = JSON.parse(v);
          }
          if (programa) {
            const r = await limite(cmd("Debugger.evaluateOnCallFrame", { callFrameId: topo.callFrameId, expression: tenta("__saida.join('\\n')") }), 8000, "evaluate saída");
            const v = r.result?.result?.value;
            vars.__saida = typeof v === "string" && v !== "__nada__" ? JSON.parse(v) : "";
          }
          eventos.push({ linha, vars });
          ultima = linha;
        }
        await limite(cmd("Debugger.stepOver"), 8000, "stepOver");
      } else {
        await limite(cmd(programa ? "Debugger.stepOver" : "Debugger.stepOut"), 8000, "passo fora do alvo");
      }
      try {
        p = await limite(proximaPausa(), 8000, "pausa do passo");
      } catch (e) {
        // saiu de uma função que retornou de dentro de um laço e o programa acabou: não há mais pausa
        const ult = eventos.length ? codigo.split("\n")[eventos[eventos.length - 1].linha].trim() : "";
        if (ult.startsWith("return")) break; // o último passo foi um return
        throw e;
      }
    }
    await limite(cmd("Debugger.resume"), 8000, "resume");
  } finally {
    ws.close();
    filho.kill();
  }
  // primeira linha da função (o "function ...") = parâmetros recebidos
  return eventos;
}
