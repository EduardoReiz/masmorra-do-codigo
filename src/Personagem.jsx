import { useRef, useEffect } from "react";
import { configPersonagem } from "./dados/personagem";
import { W, H, montarSprite, paletasEquip } from "./dados/sprite";

// Motor do personagem pixelado. Monta o sprite numa grade 40x48 em camadas
// (pernas, botas, tronco, braços, cabeça, cabelo/capacete, arma), passa um
// contorno escuro estilo "sticker" e anima: respiração, piscada e uma AÇÃO
// periódica por classe — espada golpeia, arco atira flecha, cajado solta
// magia, grimório faz coisas surgirem do nada.
// quadros da chama negra (public/criador/chama); até carregarem, a
// chama é desenhada pixel a pixel
const CHAMA = [1, 2, 3, 4].map((n) => {
  const im = new Image();
  im.src = `/criador/chama/chama-${n}.png`;
  return im;
});

const AURAS = { leve: "#0beef5", intensa: "#0beef5", fratura: "#ff3b47", "chama-negra": "#8a2be2" };

// ---------- componente ----------
export default function Personagem({ progresso, classe, cfg, equip, aura = "nenhuma", tamanho = 192, animado = true, acoes = true }) {
  const ref = useRef(null);
  const cls = classe || progresso?.classe || "O Arquiteto";
  const conf = cfg || configPersonagem(progresso);
  const eq = equip || progresso?.equip || {};
  const P = Math.max(1, Math.round(tamanho / H)); // tamanho de cada pixel no canvas; o CSS ajusta ao tamanho pedido
  const chave = JSON.stringify([cls, conf, eq, aura, P, animado, acoes]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    canvas.width = W * P;
    canvas.height = H * P;
    ctx.imageSmoothingEnabled = false;
    const { pal, crista, ids } = paletasEquip(eq);
    const ciclo = 3.6, dur = 1.1, off = Math.random() * ciclo;
    let parts = [], ultimaFase = -1, raf;
    const corAcao = pal.arma ? pal.arma[2] : null;

    function particulas(arma, ph, ponta) {
      if (!ponta) return;
      if (arma === "espada" && ph >= 0.3 && ph < 0.55) {
        parts.push({ x: ponta.x, y: ponta.y, vx: 0, vy: 0, vida: 0.35, max: 0.35, cor: "#ffffff" });
      }
      if (arma === "arco" && ultimaFase < 0.55 && ph >= 0.55) {
        parts.push({ x: 38, y: ponta.y, vx: 80, vy: 0, vida: 0.6, max: 0.6, cor: "#c8b090", flecha: true });
      }
      if (arma === "cajado" && ph >= 0.25 && ph < 0.8 && Math.random() < 0.6) {
        const a = Math.random() * Math.PI * 2, v = 6 + Math.random() * 12;
        parts.push({ x: ponta.x, y: ponta.y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 6, vida: 0.7, max: 0.7, cor: Math.random() < 0.5 ? "#ffffff" : corAcao || "#6be7ed" });
      }
      if (arma === "grimorio" && ph >= 0.2 && ph < 0.8 && Math.random() < 0.12) {
        const formas = ["cubo", "estrela", "runa"];
        parts.push({ x: 4 + Math.random() * 32, y: 2 + Math.random() * 20, vx: 0, vy: -2.4, vida: 1.1, max: 1.1, cor: corAcao || "#c9a0f0", forma: formas[(Math.random() * 3) | 0] });
      }
    }

    function desenha(t, dt) {
      const fase = (t + off) % ciclo;
      const agindo = acoes && fase > ciclo - dur;
      const ph = agindo ? (fase - (ciclo - dur)) / dur : -1;
      const dy = Math.sin(t * 3.2) > 0.35 ? 1 : 0;
      const piscar = t % 3.7 < 0.13;
      const { grid, ponta, arma } = montarSprite({ cfg: conf, classe: cls, dy, piscar, pal, ids, crista, acao: agindo, ph });
      if (agindo) particulas(arma, ph, ponta);
      ultimaFase = agindo ? ph : -1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const corAura = AURAS[aura];
      if (corAura) {
        const pulso = aura === "intensa" || aura === "fratura" ? 0.5 + 0.5 * Math.sin(t * 4) : 0.6;
        const gr = ctx.createRadialGradient(20 * P, 26 * P, 4 * P, 20 * P, 26 * P, 24 * P);
        gr.addColorStop(0, corAura + (aura === "leve" ? "33" : "66"));
        gr.addColorStop(1, corAura + "00");
        ctx.globalAlpha = 0.6 + 0.4 * pulso;
        ctx.fillStyle = gr;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        if (aura === "chama-negra" && CHAMA.every((im) => im.complete && im.naturalWidth)) {
          // fileira de labaredas, cada uma num quadro diferente do ciclo
          const q = Math.floor(t * 9);
          for (let i = 0; i < 5; i++) {
            const im = CHAMA[(q + i * 3) % 4];
            const lado = (i % 2 ? 12 : 16) * P;
            ctx.globalAlpha = i % 2 ? 0.75 : 0.95;
            ctx.drawImage(im, Math.round((2 + i * 7.2) * P), Math.round(46 * P - lado), lado, lado);
          }
          ctx.globalAlpha = 1;
        } else if (aura === "chama-negra") {
          for (let x = 4; x < 36; x++) {
            const alt = 8 + (Math.sin(t * 6 + x * 0.65) * 0.5 + 0.5) * 18;
            for (let h = 0; h < alt; h++) {
              ctx.fillStyle = h > alt - 1.5 ? "#8a2be2" : h > alt - 3 ? "#2a0a3a" : "#0b0410";
              ctx.globalAlpha = Math.max(0, 0.85 - h / 36);
              ctx.fillRect(x * P, (44 - h) * P, P, P);
            }
          }
          ctx.globalAlpha = 1;
        }
      }
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(11 * P, 46 * P, 18 * P, P);
      ctx.fillRect(13 * P, 47 * P, 14 * P, Math.max(1, P * 0.6));
      for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
        const c = grid[y * W + x];
        if (c) { ctx.fillStyle = c; ctx.fillRect(x * P, y * P, P, P); }
      }
      parts = parts.filter((p) => (p.vida -= dt) > 0);
      for (const p of parts) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        ctx.globalAlpha = Math.max(0, Math.min(1, (p.vida / p.max) * 1.6));
        ctx.fillStyle = p.cor;
        const x = Math.round(p.x) * P, y = Math.round(p.y) * P;
        if (p.flecha) { ctx.fillRect(x - 6 * P, y, 8 * P, P); ctx.fillStyle = "#dfe4ec"; ctx.fillRect(x + 2 * P, y, 2 * P, P); }
        else if (p.forma === "cubo") { ctx.fillRect(x, y, 4 * P, 4 * P); ctx.fillStyle = "#ffffff"; ctx.fillRect(x, y, 2 * P, 2 * P); }
        else if (p.forma === "estrela") { ctx.fillRect(x, y - 2 * P, 2 * P, 6 * P); ctx.fillRect(x - 2 * P, y, 6 * P, 2 * P); }
        else if (p.forma === "runa") { ctx.fillRect(x, y, 2 * P, 6 * P); ctx.fillRect(x, y + 4 * P, 4 * P, 2 * P); ctx.fillRect(x + 2 * P, y, 2 * P, 2 * P); }
        else ctx.fillRect(x, y, 2 * P, 2 * P);
      }
      ctx.globalAlpha = 1;
    }

    if (!animado) {
      desenha(0.4, 0);
      return undefined;
    }
    const t0 = performance.now();
    let ant = t0;
    function quadro(agora) {
      const dt = Math.min(0.05, (agora - ant) / 1000);
      ant = agora;
      desenha((agora - t0) / 1000, dt);
      raf = requestAnimationFrame(quadro);
    }
    raf = requestAnimationFrame(quadro);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);

  return <canvas ref={ref} className="personagem" style={{ width: Math.round((W / H) * tamanho), height: tamanho }} />;
}
