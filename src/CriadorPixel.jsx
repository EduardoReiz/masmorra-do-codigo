import { useEffect, useRef } from "react";

// A arte do Criador reduzida para poucos pixels e ampliada sem suavizar,
// para ele ficar no mesmo pixel art do resto do jogo em vez de uma imagem lisa.
export default function CriadorPixel({ tamanho = 72, quadro = "criador-heroi", linhas = 64, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const im = new Image();
    let vivo = true;
    im.onload = () => {
      if (!vivo || !ref.current) return;
      const h = linhas, w = Math.max(1, Math.round((im.naturalWidth / im.naturalHeight) * h));
      const c = ref.current;
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d");
      ctx.imageSmoothingEnabled = true; // reduzir com média; depois a ampliação é seca (CSS pixelated)
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(im, 0, 0, w, h);
      // fecha o meio-tom das bordas: pixel quase transparente some, o resto fica sólido
      const d = ctx.getImageData(0, 0, w, h);
      for (let i = 0; i < d.data.length; i += 4) d.data[i + 3] = d.data[i + 3] < 110 ? 0 : 255;
      ctx.putImageData(d, 0, 0);
      c.style.width = Math.round((w / h) * tamanho) + "px";
    };
    im.src = `/criador/${quadro}.png`;
    return () => { vivo = false; };
  }, [quadro, linhas, tamanho]);
  return <canvas ref={ref} className={"criador-pixel " + className} style={{ height: tamanho }} aria-hidden="true" />;
}
