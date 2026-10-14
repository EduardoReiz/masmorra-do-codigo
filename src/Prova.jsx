import { useState, useMemo } from "react";
import "./App.css";
import { rng } from "./dados/gerador";

// Prova de Ascensão: conceituais (múltipla escolha) + "preveja a saída"
// (digitada, sobre uma entrada sorteada desta partida). Passa quem erra no
// máximo 1. Sem retry na hora: errou, enfrenta o exame de novo.
const esperadoTexto = (v) => (v === "" ? "vazio" : String(v));
const normaliza = (s) => (s || "").trim();
const confere = (typed, esperado) => {
  const t = normaliza(typed);
  if (["true", "false", "vazio"].includes(esperado)) return t.toLowerCase() === esperado;
  return t === esperado;
};

export default function Prova({ prova, onAprovado, onReprovado, onColar }) {
  const [seed] = useState(() => (Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0);

  const questoes = useMemo(() => {
    const qs = (prova.mc || []).map((q) => ({ tipo: "mc", ...q }));
    if (prova.prever) {
      const r = rng(seed);
      for (const args of prova.prever.gera(r)) {
        qs.push({
          tipo: "prever",
          fn: prova.prever.fn,
          args,
          dica: prova.prever.dica,
          correta: esperadoTexto(prova.prever.solucao(...args)),
        });
      }
    }
    return qs;
  }, [prova, seed]);

  const [resp, setResp] = useState(() => questoes.map((q) => (q.tipo === "mc" ? null : "")));
  const [enviado, setEnviado] = useState(false);

  const respondidas = resp.every((v, i) => (questoes[i].tipo === "mc" ? v !== null : normaliza(v) !== ""));
  const acertos = questoes.reduce((n, q, i) => n + (q.tipo === "mc" ? resp[i] === q.correta : confere(resp[i], q.correta) ? 1 : 0), 0);
  const minimo = Math.max(1, questoes.length - 1);
  const aprovado = acertos >= minimo;

  const setMc = (qi, oi) => !enviado && setResp((a) => a.map((v, i) => (i === qi ? oi : v)));
  const setTxt = (qi, val) => !enviado && setResp((a) => a.map((v, i) => (i === qi ? val : v)));

  return (
    <div className="prova">
      <div className="prova-card">
        <div className="prova-tag" translate="no">PROVA DE ASCENSÃO</div>

        {!enviado ? (
          <>
            <p className="prova-intro">
              Você derrotou o monstro. Agora prove que entendeu — não basta vencer os testes.
              Precisa acertar pelo menos {minimo} de {questoes.length}.
            </p>
            <div className="prova-questoes">
              {questoes.map((q, qi) => (
                <div className="prova-q" key={qi}>
                  {q.tipo === "mc" ? (
                    <>
                      <div className="prova-pergunta">{qi + 1}. {q.p}</div>
                      <div className="prova-opcoes">
                        {q.opcoes.map((op, oi) => (
                          <button key={oi} className={"prova-op" + (resp[qi] === oi ? " sel" : "")} onClick={() => setMc(qi, oi)}>
                            {op}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="prova-pergunta">
                        {qi + 1}. Preveja a saída (de cabeça, sem rodar):
                        <code className="prova-call" translate="no"> {q.fn}({q.args.map((a) => JSON.stringify(a)).join(", ")})</code>
                      </div>
                      <input
                        className="prova-input"
                        value={resp[qi]}
                        onChange={(e) => setTxt(qi, e.target.value)}
                        onPaste={(e) => { e.preventDefault(); onColar && onColar(); }}
                        onDrop={(e) => { e.preventDefault(); onColar && onColar(); }}
                        placeholder={`resposta exata (${q.dica})`}
                        spellCheck={false}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
            <button className="botao prova-enviar" disabled={!respondidas} onClick={() => setEnviado(true)}>
              Entregar a prova
            </button>
          </>
        ) : aprovado ? (
          <div className="prova-resultado ok">
            <div className="prova-selo" translate="no">APROVADO</div>
            <h2>Você provou domínio.</h2>
            <p>Acertou {acertos} de {questoes.length}. Mente e código em harmonia — o rank é seu por direito.</p>
            <button className="botao" onClick={onAprovado}>Reivindicar o rank</button>
          </div>
        ) : (
          <div className="prova-resultado fail">
            <div className="prova-selo ruim" translate="no">REPROVADO</div>
            <h2>Você venceu o corpo, não a mente.</h2>
            <p>
              Acertou {acertos} de {questoes.length} (precisava de {minimo}). Passar nos testes não é
              dominar o conceito — o rank não é seu ainda. Estude e enfrente o Exame de novo.
            </p>
            <button className="botao" onClick={onReprovado}>Voltar à masmorra</button>
          </div>
        )}
      </div>
    </div>
  );
}
