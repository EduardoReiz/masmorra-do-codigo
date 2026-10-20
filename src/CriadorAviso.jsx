import { useEffect } from "react";
import "./App.css";

// Intervenção do CRIADOR quando o sistema detecta trapaça. A tela corrompe em
// glitch, O Criador surge (chama negra) e fala em voz grave (síntese de voz).
// tipo "warn" = 1º aviso; tipo "demote" = ele cumpriu a ameaça e tirou um rank.
// A arte alterna dois quadros (boca fechada/aberta) enquanto ele fala.
const FALAS = {
  warn: "Acha mesmo que pode enganar O Criador? Faça isso outra vez e tirarei um rank seu!",
  demote: "Eu avisei. Agora um rank seu me pertence.",
};

export default function CriadorAviso({ tipo, onFechar }) {
  const linha = FALAS[tipo] || FALAS.warn;
  const [quadroA, quadroB] = tipo === "demote" ? ["criador-furia", "criador-punicao"] : ["criador-base", "criador-fala"];

  useEffect(() => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      synth.cancel();
      const u = new SpeechSynthesisUtterance(linha);
      u.lang = "pt-BR";
      u.pitch = 0.1; // bem grave
      u.rate = 0.82;
      u.volume = 1;
      const vozes = synth.getVoices();
      const ptbr = vozes.find((v) => /pt[-_]?BR/i.test(v.lang)) || vozes.find((v) => /pt/i.test(v.lang));
      if (ptbr) u.voice = ptbr;
      synth.speak(u);
      return () => synth.cancel();
    } catch {
      // sem síntese de voz: segue só no texto
    }
  }, [linha]);

  return (
    <div className="craviso">
      <div className="craviso-scan" />
      <div className="craviso-glitchbars" />
      <div className="craviso-conteudo">
        <div className={"craviso-arte" + (tipo === "demote" ? " furia" : "")} aria-hidden="true">
          <img src={`/criador/${quadroA}.png`} alt="" draggable="false" />
          <img className="fala" src={`/criador/${quadroB}.png`} alt="" draggable="false" />
        </div>
        <div className="craviso-tag" data-txt="O CRIADOR TE OBSERVA">O CRIADOR TE OBSERVA</div>
        <p className="craviso-fala">{linha}</p>
        {tipo === "demote" && <div className="craviso-penalidade" translate="no">− 1 RANK</div>}
        <button className="botao craviso-btn" onClick={onFechar}>
          {tipo === "demote" ? "Aceitar o castigo" : "Não farei de novo"}
        </button>
      </div>
    </div>
  );
}
