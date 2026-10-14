import { useRef, useEffect } from "react";
import "./App.css";
import { semente } from "./dados/cosmeticos";
import { falaReverente } from "./dados/criador";
import { montarSprite, paletasEquip } from "./dados/sprite";
import { ROUPA_CLASSE } from "./dados/personagem";

// Animação de batalha pixelada (estilo 80s). O herói (um sigilo pixelado, a cara
// do avatar) entra em cena e luta contra o monstro da task. Vitória: golpe,
// monstro explode em pixels, herói avança. Derrota: o monstro revida e o herói
// cai. Tudo desenhado em canvas de baixa resolução escalado (image pixelated).
const COR_NIVEL = { E: "#6be7ed", D: "#5aa0ff", C: "#9b7cff", B: "#ff9f45", A: "#ff5f6d", S: "#ffd76a" };
const RES_W = 320;
const RES_H = 180;

function prng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// matriz simétrica de células "acesas" (serve pro herói e pro monstro)
function matriz(seed, cols, linhas, limiar) {
  const r = prng(seed);
  const cells = [];
  for (let y = 0; y < linhas; y++) {
    for (let x = 0; x < Math.ceil(cols / 2); x++) {
      if (r() > limiar) {
        cells.push([x, y]);
        const esp = cols - 1 - x;
        if (esp !== x) cells.push([esp, y]);
      }
    }
  }
  return cells;
}

export default function Batalha({ resultado, corHeroi, seedHeroi, heroi: heroiCfg, monstro, fraturado, criador, onFim }) {
  const ref = useRef(null);
  const pularRef = useRef(false);
  const falaRef = useRef(criador ? falaReverente() : "");

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const corMon = fraturado ? "#ff3b47" : COR_NIVEL[monstro.nivel] || "#9b7cff";
    const heroi = matriz(seedHeroi, 5, 5, 0.42);
    // o personagem do jogador (se veio a configuração); senão cai no sigilo antigo
    const sprite = heroiCfg ? { ...heroiCfg, ...paletasEquip(heroiCfg.equip) } : null;
    const tipoArma = sprite ? (ROUPA_CLASSE[sprite.classe] || ROUPA_CLASSE["O Arquiteto"]).arma : "espada";
    const corpoACorpo = tipoArma === "espada";
    const SC = 3; // cada pixel do sprite = 3 pixels da cena
    const monMat = matriz(semente(monstro.nome), 9, 7, 0.4);

    // estrelas de fundo (fixas)
    const er = prng(12345);
    const estrelas = [];
    for (let i = 0; i < 40; i++) estrelas.push([Math.floor(er() * RES_W), Math.floor(er() * (RES_H - 40))]);

    // pixels do monstro para a explosão (vitória)
    const MCELL = 11;
    const monX = 196, monBaseY = 150;
    const estilhacos = monMat.map(([x, y]) => ({
      x: monX + x * MCELL, y: monBaseY - (7 - y) * MCELL,
      vx: (Math.random() - 0.5) * 6, vy: -Math.random() * 6 - 1,
    }));

    const vitoria = resultado === "vitoria";
    const DUR = 160;
    // atalho de desenvolvimento: ?pbat=0.4 começa a batalha num ponto da animação
    let t = Math.floor((Number(new URLSearchParams(window.location.search).get("pbat")) || 0) * DUR), raf;

    function desenhaMatriz(cells, ox, oy, cell, cor, alpha = 1) {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = cor;
      for (const [x, y] of cells) ctx.fillRect(Math.floor(ox + x * cell), Math.floor(oy + y * cell), cell, cell);
      ctx.globalAlpha = 1;
    }

    function fundo() {
      ctx.fillStyle = fraturado ? "#140407" : "#05070e";
      ctx.fillRect(0, 0, RES_W, RES_H);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      for (const [x, y] of estrelas) ctx.fillRect(x, y, 1, 1);
      // chão
      ctx.fillStyle = fraturado ? "#2a0a0f" : "#0e1830";
      ctx.fillRect(0, 150, RES_W, RES_H - 150);
      ctx.fillStyle = fraturado ? "rgba(255,95,109,0.5)" : "rgba(11,238,245,0.5)";
      for (let x = 0; x < RES_W; x += 8) ctx.fillRect(x, 150, 4, 1);
    }

    function texto(txt, cor, tam = 22) {
      ctx.fillStyle = cor;
      ctx.font = `bold ${tam}px 'Courier New', monospace`;
      ctx.textAlign = "center";
      ctx.fillText(txt, RES_W / 2, 36);
      ctx.textAlign = "left";
    }

    function draw() {
      const p = t / DUR;
      let shakeX = 0, shakeY = 0;
      if (p > 0.34 && p < 0.46) { shakeX = (Math.random() - 0.5) * 6; shakeY = (Math.random() - 0.5) * 6; }
      ctx.save();
      ctx.translate(shakeX, shakeY);
      fundo();

      // herói: entra (0-0.3), avança pro golpe (0.3-0.42)
      let heroX, heroY = sprite ? 150 - 66 : 150 - 5 * 12, heroAlpha = 1;
      if (sprite) {
        if (p < 0.3) heroX = 10 + (p / 0.3) * 60;
        else if (corpoACorpo && p < 0.42) heroX = 70 + ((p - 0.3) / 0.12) * 66;
        else heroX = corpoACorpo ? 136 : 70;
      } else if (p < 0.3) heroX = 30 + (p / 0.3) * 70;
      else if (p < 0.42) heroX = 100 + ((p - 0.3) / 0.12) * 70;
      else heroX = 170;

      if (vitoria) {
        // monstro inteiro até o golpe; depois explode
        if (p < 0.44) {
          const tremor = p > 0.34 ? Math.floor((Math.random() - 0.5) * 4) : 0;
          desenhaMatriz(monMat, monX + tremor, monBaseY - 7 * MCELL, MCELL, corMon);
        } else {
          const k = (p - 0.44) / 0.56;
          ctx.fillStyle = corMon;
          for (const e of estilhacos) {
            const ex = e.x + e.vx * k * 18;
            const ey = e.y + e.vy * k * 18 + 0.5 * 30 * k * k * 6;
            ctx.globalAlpha = Math.max(0, 1 - k);
            ctx.fillRect(Math.floor(ex), Math.floor(ey), MCELL, MCELL);
          }
          ctx.globalAlpha = 1;
        }
        // herói avança no fim (0.7-1) saindo pela direita
        if (p > 0.7) heroX = (sprite ? heroX : 170) + ((p - 0.7) / 0.3) * 180;
        if (p > 0.5) {
          if (criador) texto("O CRIADOR PREVALECE", "#a98fe0", 15);
          else texto("VITÓRIA", "#0beef5");
        }
      } else if (criador) {
        // o Criador falhou, mas os monstros o TEMEM: recuam e imploram.
        const k = Math.max(0, (p - 0.3) / 0.7);
        const fuga = k * 90;
        desenhaMatriz(monMat, monX + fuga, monBaseY - 7 * MCELL, MCELL, corMon, Math.max(0.2, 1 - k));
        if (p > 0.5) texto("ELES O TEMEM", "#a98fe0", 15);
      } else {
        // derrota: monstro pisca no golpe e revida; herói é jogado pra trás e cai
        const tremor = p > 0.34 && p < 0.5 ? Math.floor((Math.random() - 0.5) * 4) : 0;
        const flash = p > 0.4 && p < 0.47 && Math.floor(t) % 2 === 0;
        desenhaMatriz(monMat, monX + tremor, monBaseY - 7 * MCELL, MCELL, flash ? "#ffffff" : corMon);
        if (p >= 0.46) {
          const k = (p - 0.46) / 0.54;
          heroX = (sprite ? heroX : 170) - k * 90; // empurrado pra trás
          heroY = (sprite ? 150 - 66 : 150 - 5 * 12) + k * 80; // cai
          heroAlpha = Math.max(0, 1 - k);
        }
        if (p > 0.5) texto("VOCÊ CAIU", "#ff5f6d");
      }

      if (sprite) {
        // ação da arma entre 0.28 e 0.5 (golpe, flecha, magia, grimório)
        const agindo = p > 0.28 && p < 0.5;
        const ph = agindo ? (p - 0.28) / 0.22 : -1;
        const dy = Math.floor(t / 14) % 2;
        const { grid } = montarSprite({ cfg: sprite.cfg, classe: sprite.classe, dy, piscar: false, pal: sprite.pal, crista: sprite.crista, acao: agindo, ph });
        ctx.globalAlpha = heroAlpha;
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(Math.round(heroX) + 18, 150, 24, 2);
        for (let y = 0; y < 24; y++) for (let x = 0; x < 20; x++) {
          const c = grid[y * 20 + x];
          if (c) { ctx.fillStyle = c; ctx.fillRect(Math.round(heroX) + x * SC, Math.round(heroY) + y * SC, SC, SC); }
        }
        ctx.globalAlpha = 1;
        // projétil dos ataques à distância
        if (!corpoACorpo && p > 0.33 && p < 0.43) {
          const k = (p - 0.33) / 0.1;
          const px0 = heroX + 57, py0 = 126, px1 = monX + 10, py1 = 118;
          const xx = px0 + (px1 - px0) * k, yy = py0 + (py1 - py0) * k;
          if (tipoArma === "arco") {
            ctx.fillStyle = "#c8b090"; ctx.fillRect(Math.round(xx) - 10, Math.round(yy), 10, 2);
            ctx.fillStyle = "#dfe4ec"; ctx.fillRect(Math.round(xx), Math.round(yy) - 1, 3, 4);
          } else {
            const cor = tipoArma === "cajado" ? "#6be7ed" : "#c9a0f0";
            for (let r = 0; r < 5; r++) {
              ctx.globalAlpha = 0.25 + r * 0.15;
              ctx.fillStyle = cor;
              ctx.fillRect(Math.round(xx - (5 - r) * 6), Math.round(yy + Math.sin(t + r) * 2), 4, 4);
            }
            ctx.globalAlpha = 1;
            ctx.fillStyle = "#ffffff"; ctx.fillRect(Math.round(xx), Math.round(yy) - 1, 6, 6);
          }
        }
      } else {
        desenhaMatriz(heroi, heroX, heroY, 12, corHeroi, heroAlpha);
      }
      // impacto: estrela de faíscas no monstro (em vez de um clarão chapado)
      if (p > 0.4 && p < 0.5) {
        const k = (p - 0.4) / 0.1;
        const cx = monX + 48, cy = 112;
        for (let i = 0; i < 14; i++) {
          const an = (i / 14) * Math.PI * 2;
          const r0 = 6 + k * 10, r1 = r0 + 6 + k * 14;
          ctx.globalAlpha = 1 - k;
          ctx.fillStyle = i % 2 ? "#ffffff" : "#ffcf5c";
          for (let rr = r0; rr < r1; rr += 3) {
            ctx.fillRect(Math.round(cx + Math.cos(an) * rr), Math.round(cy + Math.sin(an) * rr), 3, 3);
          }
        }
        ctx.globalAlpha = 1;
      }
      ctx.restore();
    }

    function frame() {
      t++;
      draw();
      if (t < DUR && !pularRef.current) raf = requestAnimationFrame(frame);
      else onFim();
    }
    frame();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="batalha" onClick={() => (pularRef.current = true)}>
      <canvas ref={ref} width={RES_W} height={RES_H} className="batalha-canvas" />
      {criador && resultado === "derrota" && <div className="batalha-fala">"{falaRef.current}"</div>}
      <div className="batalha-pular">clique para pular</div>
    </div>
  );
}
