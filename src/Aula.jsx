import { useState, useEffect, useMemo, useRef } from "react";
import Editor from "@monaco-editor/react";
import "./App.css";
import BotaoVoltar from "./BotaoVoltar";
import Servo from "./Servo";
import { aulaDe } from "./dados/aulas";
import { fala } from "./dados/servo";
import { executar, chamada } from "./executa";

// A aula que vem ANTES do combate: conceito -> demonstração do Criador -> guiado.
// É obrigatória: só dá para enfrentar o monstro depois de completar o guiado.
// O Servo do Criador conversa com o aluno do começo ao fim.
const ETAPAS = ["Conceito", "O Criador faz", "Sua vez"];
const PASSO_MS = 2400;

export default function Aula({ exercicio, linguagem, onConcluir, onSair }) {
  const aula = useMemo(() => aulaDe(exercicio.id, linguagem.id), [exercicio.id, linguagem.id]);
  const [etapa, setEtapa] = useState(0);
  const [humor, setHumor] = useState("neutro");
  const [fraseServo, setFraseServo] = useState(() => fala("conceito"));

  function ir(n, tipo, humorNovo = "neutro") {
    setEtapa(n);
    setHumor(humorNovo);
    setFraseServo(fala(tipo));
  }

  return (
    <div className="aula" data-etapa={etapa}>
      <header className="ex-top">
        <BotaoVoltar onClick={onSair} />
        <div className="ex-tag" translate="no">AULA · {exercicio.titulo.toUpperCase()} · {linguagem.nome.toUpperCase()}</div>
        <div style={{ width: 90 }} />
      </header>

      <ol className="aula-etapas">
        {ETAPAS.map((nome, i) => (
          <li key={nome} className={i < etapa ? "feita" : i === etapa ? "atual" : ""}>
            <span>{i + 1}</span> {nome}
          </li>
        ))}
      </ol>

      <div className="aula-corpo">
        <aside className="aula-servo">
          <Servo tamanho={120} humor={humor} className="servo-pulo" />
          <p className="aula-balao" role="status">{fraseServo}</p>
        </aside>

        <main className="aula-principal">
          {etapa === 0 && (
            <Conceito
              aula={aula}
              linguagem={linguagem}
              onSeguir={() => ir(1, "demo", "neutro")}
            />
          )}
          {etapa === 1 && (
            <Demonstracao
              aula={aula}
              exercicio={exercicio}
              onFala={(texto, h) => { setFraseServo(texto); setHumor(h || "neutro"); }}
              onVoltar={() => ir(0, "conceito")}
              onSeguir={() => ir(2, "guiado", "neutro")}
            />
          )}
          {etapa === 2 && (
            <Guiado
              aula={aula}
              exercicio={exercicio}
              linguagem={linguagem}
              onFala={(tipo, h) => { setFraseServo(fala(tipo)); setHumor(h); }}
              onVoltar={() => ir(1, "demo")}
              onConcluir={onConcluir}
            />
          )}
        </main>
      </div>
    </div>
  );
}

// ---- 1. Conceito ---------------------------------------------------------
function Conceito({ aula, linguagem, onSeguir }) {
  return (
    <div className="aula-cartao">
      <div className="aula-sub" translate="no">O CONCEITO</div>
      <h1 className="aula-titulo">{aula.conceito}</h1>

      <h2 className="aula-h2">Por que isso existe</h2>
      <p className="aula-texto">{aula.porque}</p>

      <h2 className="aula-h2">Uma analogia</h2>
      <p className="aula-texto aula-analogia">{aula.analogia}</p>

      <div className="aula-ideias">
        {aula.ideias.map((i) => (
          <div key={i.titulo} className="aula-ideia">
            <b>{i.titulo}</b>
            <span>{i.texto}</span>
          </div>
        ))}
      </div>

      <h2 className="aula-h2">Como se escreve em {linguagem.nome}</h2>
      <ul className="aula-sintaxe">
        {aula.sintaxe.map((s) => (
          <li key={s.trecho}>
            <code translate="no">{s.trecho}</code>
            <span>{s.explica}</span>
          </li>
        ))}
      </ul>

      <button className="botao aula-btn" onClick={onSeguir}>Ver O Criador resolver</button>
    </div>
  );
}

// ---- 2. Demonstração: o Criador resolve, passo a passo --------------------
function Demonstracao({ aula, exercicio, onFala, onVoltar, onSeguir }) {
  const { codigo, passos, entrada } = aula.demo;
  const [i, setI] = useState(0);
  const [tocando, setTocando] = useState(true);
  const [terminou, setTerminou] = useState(false); // já chegou ao último passo
  const passo = passos[i];
  const totalDanos = passos.filter((p) => p.dano).length;
  const danos = passos.slice(0, i + 1).filter((p) => p.dano).length;
  const hp = Math.round(((totalDanos - danos) / totalDanos) * 100);
  const caiu = !!passo.fim;
  const ultimo = passos.length - 1;
  const onFalaRef = useRef(onFala);
  useEffect(() => { onFalaRef.current = onFala; });

  // o Servo comenta o passo atual
  useEffect(() => {
    onFalaRef.current(passo.fala, passo.fim ? "feliz" : "neutro");
  }, [passo]);

  // vai para um passo; chegar ao último para a reprodução e libera o botão
  function irPara(n, seguirTocando = false) {
    const alvo = Math.max(0, Math.min(ultimo, n));
    setI(alvo);
    setTocando(seguirTocando && alvo < ultimo);
    if (alvo === ultimo) setTerminou(true);
  }

  // reprodução automática
  useEffect(() => {
    if (!tocando || i >= ultimo) return undefined;
    const t = setTimeout(() => irPara(i + 1, true), PASSO_MS);
    return () => clearTimeout(t);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  function reiniciar() {
    irPara(0, true);
  }

  return (
    <div className="aula-cartao aula-demo">
      <div className="aula-sub" translate="no">O CRIADOR RESOLVE · {entrada}</div>

      <div className="aula-demo-grid">
        <div className="aula-codigo" translate="no">
          {codigo.map((linha, n) => (
            <div key={n} className={"aula-linha" + (n === passo.linha ? " ativa" : "")}>
              <span className="aula-num">{n + 1}</span>
              <pre>{linha || " "}</pre>
            </div>
          ))}
        </div>

        <div className="aula-palco">
          <div className="aula-palco-cena">
            <img className="aula-criador" src="/criador/criador-heroi.png" alt="O Criador" draggable="false" />
            <div className={"aula-monstro" + (caiu ? " caiu" : "")}>
              <img
                src={`/monstros/${exercicio.id}.png`}
                alt={exercicio.titulo}
                draggable="false"
                key={danos}
                className={danos > 0 && !caiu ? "levou-dano" : ""}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div className="aula-hp"><span style={{ width: hp + "%" }} /></div>
            </div>
          </div>

          <div className="aula-vars" translate="no">
            <div className="aula-vars-titulo">VARIÁVEIS</div>
            {passo.vars.map(([nome, valor]) => (
              <div key={nome} className="aula-var"><span>{nome}</span><b>{valor}</b></div>
            ))}
          </div>
        </div>
      </div>

      <div className="aula-controles">
        <button className="aula-ctl" onClick={() => irPara(i - 1)} disabled={i === 0}>◀ voltar</button>
        <button className="aula-ctl" onClick={() => (i >= ultimo ? reiniciar() : setTocando((v) => !v))}>
          {i >= ultimo ? "↻ rever" : tocando ? "❚❚ pausar" : "▶ continuar"}
        </button>
        <button className="aula-ctl" onClick={() => irPara(i + 1)} disabled={i >= ultimo}>passo ▶</button>
        <span className="aula-passo" translate="no">passo {i + 1}/{passos.length}</span>
      </div>

      <div className="aula-nav">
        <button className="aula-ctl" onClick={onVoltar}>◀ voltar ao conceito</button>
        <button className="botao aula-btn" onClick={onSeguir} disabled={!terminou}>
          {terminou ? "Agora é a minha vez" : "Assista até o fim"}
        </button>
      </div>
    </div>
  );
}

// ---- 3. Guiado: o mesmo problema, com lacunas -----------------------------
function Guiado({ aula, exercicio, linguagem, onFala, onVoltar, onConcluir }) {
  const [codigo, setCodigo] = useState(aula.guiado.starter);
  const [saida, setSaida] = useState(null);
  const [rodando, setRodando] = useState(false);
  const [passou, setPassou] = useState(false);
  const testes = aula.guiado.testes;

  useEffect(() => { onFala("guiado", "neutro"); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function enviar() {
    if (codigo.includes("___")) {
      onFala("guiadoLacuna", "aflito");
      setSaida({ erro: "Ainda há lacunas (___) para preencher.", resultados: [] });
      return;
    }
    setRodando(true);
    const r = await executar(linguagem.id, codigo, exercicio.fn, testes);
    setRodando(false);
    setSaida(r);
    const ok = !r.erro && r.resultados.length && r.resultados.every((x) => x.ok);
    if (ok) {
      setPassou(true);
      onFala("guiadoOk", "feliz");
    } else {
      onFala("guiadoErro", "aflito");
    }
  }

  const totalOk = saida?.resultados?.filter((x) => x.ok).length ?? 0;

  return (
    <div className="aula-cartao aula-guiado">
      <div className="aula-sub" translate="no">SUA VEZ · PREENCHA AS LACUNAS</div>
      <p className="aula-texto">
        É a mesma solução que o Criador fez. Troque cada <code>___</code> pelo que falta e envie.
      </p>

      <div className="aula-editor">
        <Editor
          height="260px"
          language={linguagem.monaco}
          theme="vs-dark"
          value={codigo}
          onChange={(v) => setCodigo(v ?? "")}
          options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false, padding: { top: 12 } }}
        />
      </div>

      <ul className="ex-casos aula-casos" translate="no">
        {testes.map((t, n) => {
          const res = saida?.resultados?.[n];
          const avaliado = res && "ok" in res;
          return (
            <li key={n} className={avaliado ? (res.ok ? "ok" : "fail") : ""}>
              {avaliado && <b>{res.ok ? "✓ " : "✗ "}</b>}
              <code>{chamada(exercicio.fn, t.in)}</code> → <code>{JSON.stringify(t.out)}</code>
              {avaliado && !res.ok && <> · veio <code>{JSON.stringify(res.got)}</code></>}
            </li>
          );
        })}
      </ul>

      {saida?.erro && <div className="ex-erro">{saida.erro}</div>}
      {saida && !saida.erro && (
        <div className={"ex-resultado " + (totalOk === saida.resultados.length ? "ok" : "fail")}>
          {totalOk} de {saida.resultados.length} testes passaram
        </div>
      )}

      <div className="aula-nav">
        <button className="aula-ctl" onClick={onVoltar}>◀ rever a demonstração</button>
        {passou ? (
          <button className="botao aula-btn" onClick={onConcluir}>Enfrentar o monstro</button>
        ) : (
          <button className="botao aula-btn" onClick={enviar} disabled={rodando}>
            {rodando ? "Rodando..." : "Enviar"}
          </button>
        )}
      </div>
    </div>
  );
}
