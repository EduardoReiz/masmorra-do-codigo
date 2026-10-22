import { useEffect, useRef, useState } from "react";
import "./App.css";

// Cena em tela cheia (quebra de portal, maldição). Toca o vídeo de /public/animacoes se ele
// existir; se não existir (ainda não foi renderizado), mostra uma versão simples feita em CSS.
// Um toque pula.
const CENAS = {
  portal: { src: "/animacoes/portal-quebra.mp4", dur: 3200, titulo: "O PORTAL SE ROMPEU", sub: "recompensa em dobro, perigo em dobro", classe: "cinema-portal" },
  maldicao: { src: "/animacoes/maldicao.mp4", dur: 3000, titulo: "MALDIÇÃO", sub: "−20% de XP nos próximos 3 monstros", classe: "cinema-maldicao" },
};

function Cena({ cena, onFim }) {
  const c = CENAS[cena];
  const [video, setVideo] = useState(true);
  const fim = useRef(onFim);
  fim.current = onFim;
  useEffect(() => {
    if (video) return undefined; // com vídeo, o fim vem do próprio vídeo
    const t = setTimeout(() => fim.current(), c.dur);
    return () => clearTimeout(t);
  }, [video, c.dur]);
  return (
    <div className={"cinema " + c.classe} onClick={() => fim.current()} role="dialog" aria-label={c.titulo}>
      {video ? (
        <video className="cinema-video" src={c.src} autoPlay muted playsInline onEnded={() => fim.current()} onError={() => setVideo(false)} />
      ) : (
        <div className="cinema-css">
          <div className="cinema-aura" aria-hidden="true" />
          <div className="cinema-titulo" translate="no">{c.titulo}</div>
          <div className="cinema-sub">{c.sub}</div>
        </div>
      )}
      <span className="cinema-pular">toque para pular</span>
    </div>
  );
}

// Fica montado uma vez só, por cima do app inteiro; o App pede a cena com abreCinema("portal").
export function abreCinema(cena) {
  window.dispatchEvent(new CustomEvent("masmorra:cinema", { detail: cena }));
}
export default function CinemaHost() {
  const [cena, setCena] = useState(null);
  useEffect(() => {
    const ouve = (e) => setCena(e.detail);
    window.addEventListener("masmorra:cinema", ouve);
    return () => window.removeEventListener("masmorra:cinema", ouve);
  }, []);
  return cena ? <Cena cena={cena} onFim={() => setCena(null)} /> : null;
}
