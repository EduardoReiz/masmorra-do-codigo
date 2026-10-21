import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import "./App.css";
import BotaoVoltar from "./BotaoVoltar";
import { NIVELAMENTO } from "./dados/nivelamento";
import { executar, chamada } from "./executa";
import { starterDe } from "./dados/linguagens";

// Teste de Nivelamento adaptativo: o jogador sobe enquanto acerta. Acertar uma
// questão avança para a próxima (mais difícil); o rank final é o da última
// questão vencida. Encerrar a qualquer momento classifica pelo que já provou.
export default function Nivelamento({ linguagem, onConcluir, onSair }) {
  const lang = linguagem || { id: "js", nome: "JavaScript", monaco: "javascript" };
  const [idx, setIdx] = useState(0);
  const [codigo, setCodigo] = useState(() => starterDe(NIVELAMENTO[0], lang.id));
  const [saida, setSaida] = useState(null);
  const [passouAte, setPassouAte] = useState("E"); // rank já provado
  const [fim, setFim] = useState(false);
  const [rankFinal, setRankFinal] = useState("E");

  const q = NIVELAMENTO[idx];

  useEffect(() => {
    setCodigo(starterDe(q, lang.id));
    setSaida(null);
  }, [idx, q, lang.id]);

  function encerrar(rank) {
    setRankFinal(rank);
    setFim(true);
  }

  async function enviar() {
    const r = await executar(lang.id, codigo, q.fn, q.testes);
    setSaida(r);
    if (!r.erro && r.resultados.length && r.resultados.every((x) => x.ok)) {
      const novo = q.classificaEm;
      setPassouAte(novo);
      if (idx === NIVELAMENTO.length - 1) encerrar(novo);
      else setIdx((i) => i + 1);
    }
  }

  const totalOk = saida?.resultados.filter((x) => x.ok).length ?? 0;

  if (fim) {
    const doZero = rankFinal === "E";
    return (
      <div className="niv">
        <div className="niv-fim">
          <div className="niv-fim-tag" translate="no">NIVELAMENTO CONCLUÍDO</div>
          <div className="niv-fim-selo" translate="no">{rankFinal}</div>
          <h2>Você foi classificado no Rank {rankFinal}.</h2>
          <p>
            {doZero
              ? "Sem problema nenhum — todo Monarca já foi Rank E um dia. Você começa do início, com tudo pela frente."
              : `O Sistema reconhece o que você já sabe. Você entra direto no Rank ${rankFinal}, e o exame final continua sendo seu para conquistar.`}
          </p>
          <button className="botao" onClick={() => onConcluir(rankFinal)}>Entrar na masmorra</button>
        </div>
      </div>
    );
  }

  return (
    <div className="niv">
      <header className="ex-top">
        <BotaoVoltar onClick={onSair} />
        <div className="ex-tag" translate="no">NIVELAMENTO · QUESTÃO {idx + 1}/{NIVELAMENTO.length} · {q.nivel}</div>
        <div style={{ width: 90 }} />
      </header>

      <div className="niv-barra">
        {NIVELAMENTO.map((_, i) => (
          <span key={i} className={"niv-passo" + (i < idx ? " feito" : i === idx ? " atual" : "")} />
        ))}
      </div>

      <div className="ex-grid">
        <section className="ex-enunciado">
          <div className="ex-sec">{q.nivel}</div>
          <p className="ex-texto">{q.enunciado}</p>
          <div className="ex-sec">Casos de teste</div>
          <ul className="ex-casos" translate="no">
            {q.testes.map((t, i) => {
              const res = saida?.resultados?.[i];
              const avaliado = res && "ok" in res;
              return (
                <li key={i} className={avaliado ? (res.ok ? "ok" : "fail") : ""}>
                  {avaliado && <b>{res.ok ? "✓ " : "✗ "}</b>}
                  <code>{chamada(q.fn, t.in)}</code> → <code>{JSON.stringify(t.out)}</code>
                  {avaliado && !res.ok && <> · veio <code>{JSON.stringify(res.got)}</code></>}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="ex-editor">
          <div className="ex-editor-top" translate="no">{lang.nome}</div>
          <div className="ex-monaco">
            <Editor
              height="100%"
              language={lang.monaco}
              theme="vs-dark"
              value={codigo}
              onChange={(v) => setCodigo(v ?? "")}
              options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false, padding: { top: 12 } }}
            />
          </div>
          <div className="ex-acoes niv-acoes">
            <button className="botao" onClick={enviar}>Enviar resposta</button>
            <button className="niv-encerrar" onClick={() => encerrar(passouAte)}>
              Não sei esta — encerrar teste
            </button>
          </div>
          {saida?.erro && <div className="ex-erro">{saida.erro}</div>}
          {saida && !saida.erro && totalOk < saida.resultados.length && (
            <div className="ex-resultado fail">
              {totalOk} de {saida.resultados.length} testes passaram — tente de novo ou encerre.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
