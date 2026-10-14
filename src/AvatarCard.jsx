import { useRef, useEffect } from "react";
import "./App.css";

// Desenha um SIGILO pixelado simétrico a partir de uma semente e uma cor.
// Simétrico na vertical => sempre sai um "brasão" limpo. Quando a aura é
// "chama-negra" (exclusiva do Criador), uma camada de fogo negro pixelado
// anima atrás do sigilo.
function desenhaSigilo(ctx, size, seed, cor) {
  const grid = 7;
  const cell = size / grid;
  let s = seed >>> 0 || 1;
  const rnd = () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
  ctx.clearRect(0, 0, size, size);
  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < Math.ceil(grid / 2); x++) {
      const limiar = x === 0 ? 0.35 : 0.5;
      if (rnd() > limiar) {
        ctx.fillStyle = cor;
        ctx.fillRect(Math.floor(x * cell), Math.floor(y * cell), Math.ceil(cell), Math.ceil(cell));
        ctx.fillRect(Math.floor((grid - 1 - x) * cell), Math.floor(y * cell), Math.ceil(cell), Math.ceil(cell));
      }
    }
  }
}

export default function AvatarCard({ cor, moldura, aura, titulo, rank, seed, tamanho = 120, compacto = false }) {
  const sigRef = useRef(null);
  const flameRef = useRef(null);
  const chamaNegra = aura === "chama-negra";

  useEffect(() => {
    const canvas = sigRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    desenhaSigilo(ctx, tamanho, seed, cor);
  }, [cor, seed, tamanho]);

  // fogo negro pixelado (só no modo Criador)
  useEffect(() => {
    if (!chamaNegra) return;
    const canvas = flameRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    const cell = Math.max(3, Math.round(tamanho / 16));
    const cols = Math.ceil(tamanho / cell);
    const linhas = Math.ceil(tamanho / cell);
    let t = 0, raf;
    function frame() {
      t += 0.12;
      ctx.clearRect(0, 0, tamanho, tamanho);
      for (let x = 0; x < cols; x++) {
        const altura = 3 + (Math.sin(t + x * 0.9) * 0.5 + 0.5) * (linhas - 3) + Math.random() * 1.5;
        for (let h = 0; h < altura; h++) {
          const y = linhas - 1 - h;
          const topo = h >= altura - 1.4;
          ctx.fillStyle = topo ? "#8a2be2" : h > altura - 3 ? "#2a0a3a" : "#0b0410";
          ctx.globalAlpha = 0.9 - h / (linhas * 1.3);
          ctx.fillRect(x * cell, y * cell, cell, cell);
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    frame();
    return () => cancelAnimationFrame(raf);
  }, [chamaNegra, tamanho]);

  return (
    <div className={`avcard mold-${moldura} aura-${aura}` + (compacto ? " compacto" : "")} style={{ "--cor": cor }}>
      <div className="avcard-sig" style={{ width: tamanho, height: tamanho }}>
        {chamaNegra && <canvas ref={flameRef} width={tamanho} height={tamanho} className="avcard-flame" />}
        <canvas ref={sigRef} width={tamanho} height={tamanho} className="avcard-sigcanvas" />
        <span className="avcard-rank" translate="no">{rank}</span>
      </div>
      {!compacto && <div className="avcard-titulo">{titulo}</div>}
    </div>
  );
}
