import { useRef, useEffect } from "react";
import "./App.css";
import { semente } from "./dados/cosmeticos";
import { falaReverente } from "./dados/criador";
import { montarSprite, paletasEquip } from "./dados/sprite";
import { ROUPA_CLASSE } from "./dados/personagem";

// Batalha pixelada. O herói (avatar do jogador) enfrenta o MONSTRO da task, agora
// desenhado com a arte real (public/monstros/<id>.png). Coreografia: entrada ->
// o monstro ataca e o herói esquiva -> o herói contra-ataca. Se o jogador acertou
// a questão (vitória), o golpe conecta e o monstro é derrotado; se errou (derrota),
// o monstro esquiva e revida, e o herói cai. Sem arte, cai no desenho procedural.
const COR_NIVEL = { E: "#6be7ed", D: "#5aa0ff", C: "#9b7cff", B: "#ff9f45", A: "#ff5f6d", S: "#ffd76a" };
const RES_W = 320;
const RES_H = 180;
const GROUND = 150;
const MON_H = 116; // altura da arte do monstro na cena

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const bump = (t) => Math.sin(clamp(t, 0, 1) * Math.PI); // 0 -> 1 -> 0

function prng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// matriz simétrica de células "acesas" (herói-sigilo e fallback do monstro)
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

export default function Batalha({ resultado, corHeroi, seedHeroi, heroi: heroiCfg, monstro, fraturado, criador, medo, onFim }) {
  const ref = useRef(null);
  const pularRef = useRef(false);
  const falaRef = useRef(medo ? falaReverente() : "");

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    const corMon = fraturado ? "#ff3b47" : COR_NIVEL[monstro.nivel] || "#9b7cff";
    const heroiSigilo = matriz(seedHeroi, 5, 5, 0.42);
    const sprite = heroiCfg ? { ...heroiCfg, ...paletasEquip(heroiCfg.equip) } : null;
    const tipoArma = sprite ? (ROUPA_CLASSE[sprite.classe] || ROUPA_CLASSE["O Arquiteto"]).arma : "espada";
    const corpoACorpo = tipoArma === "espada";
    const SC = 3;
    const MCELL = 11;
    const monMat = matriz(semente(monstro.nome), 9, 7, 0.4);

    // arte real do monstro (se existir)
    const monImg = new Image();
    let monPronto = false;
    monImg.onload = () => { monPronto = true; };
    if (monstro.id) monImg.src = `/monstros/${monstro.id}.png`;

    // cenário de fundo da classe (se existir e não for fratura)
    const CENA = {
      "O Arquiteto": "cenario-arquiteto", "O Estrategista": "cenario-estrategista",
      "O Sentinela": "cenario-sentinela", "O Oráculo": "cenario-oraculo",
    };
    // o Criador luta com a arte própria (quadros do jogo em public/criador)
    const QUADROS_CRIADOR = ["criador-heroi", "criador-heroi-idle2", "criador-heroi-ataque", "criador-heroi-magia", "criador-heroi-vitoria"];
    const quadroCri = {};
    let estatico = null; // roupa ou armadura escolhida (quando a arte existe): vale para todas as poses
    if (criador && heroiCfg?.criadorQuadro && heroiCfg.criadorQuadro !== "criador-armadura-1") {
      const im0 = new Image();
      im0.onload = () => { estatico = im0; };
      im0.src = `/criador/${heroiCfg.criadorQuadro}.png`;
    }
    if (criador) {
      for (const n of QUADROS_CRIADOR) {
        const im = new Image();
        im.onload = () => { quadroCri[n] = im; };
        im.src = `/criador/${n}.png`;
      }
    }

    const cenaImg = new Image();
    let cenaPronto = false;
    cenaImg.onload = () => { cenaPronto = true; };
    const cenaId = sprite && CENA[sprite.classe];
    if (cenaId && !fraturado) cenaImg.src = `/cenarios/${cenaId}.png`;

    const er = prng(12345);
    const estrelas = [];
    for (let i = 0; i < 40; i++) estrelas.push([Math.floor(er() * RES_W), Math.floor(er() * (RES_H - 40))]);

    const vitoria = resultado === "vitoria";
    const DUR = 170;
    let t = Math.floor((Number(new URLSearchParams(window.location.search).get("pbat")) || 0) * DUR), raf;

    function desenhaMatriz(cells, ox, oy, cell, cor, alpha = 1) {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = cor;
      for (const [x, y] of cells) ctx.fillRect(Math.floor(ox + x * cell), Math.floor(oy + y * cell), cell, cell);
      ctx.globalAlpha = 1;
    }

    function fundo() {
      if (cenaPronto && !fraturado) {
        ctx.drawImage(cenaImg, 0, 0, RES_W, RES_H);
        // escurece um pouco pra os sprites se destacarem
        ctx.fillStyle = "rgba(5,7,14,0.42)";
        ctx.fillRect(0, 0, RES_W, RES_H);
      } else {
        ctx.fillStyle = fraturado ? "#140407" : "#05070e";
        ctx.fillRect(0, 0, RES_W, RES_H);
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        for (const [x, y] of estrelas) ctx.fillRect(x, y, 1, 1);
        ctx.fillStyle = fraturado ? "#2a0a0f" : "#0e1830";
        ctx.fillRect(0, GROUND, RES_W, RES_H - GROUND);
      }
      ctx.fillStyle = fraturado ? "rgba(255,95,109,0.5)" : "rgba(11,238,245,0.5)";
      for (let x = 0; x < RES_W; x += 8) ctx.fillRect(x, GROUND, 4, 1);
    }

    function texto(txt, cor, tam = 22) {
      ctx.fillStyle = cor;
      ctx.font = `bold ${tam}px 'Courier New', monospace`;
      ctx.textAlign = "center";
      ctx.fillText(txt, RES_W / 2, 36);
      ctx.textAlign = "left";
    }

    function faiscas(cx, cy, k) {
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

    function drawMonstro(cx, offY, flash, alpha, scale) {
      if (alpha <= 0) return;
      if (!monPronto || !monImg.width) {
        const ox = cx - (9 * MCELL) / 2, oy = GROUND - 7 * MCELL + offY;
        desenhaMatriz(monMat, ox, oy, MCELL, flash ? "#ffffff" : corMon, alpha);
        return;
      }
      const aspect = monImg.width / monImg.height;
      let h = MON_H * scale, w = aspect * h;
      const WMAX = 152 * scale; // não deixa monstro largo vazar da cena
      if (w > WMAX) { w = WMAX; h = w / aspect; }
      const dx = Math.round(cx - w / 2), dy = Math.round(GROUND - h + offY);
      ctx.globalAlpha = 0.28 * alpha;
      ctx.fillStyle = "#000";
      ctx.fillRect(Math.round(cx - w * 0.28), GROUND, Math.round(w * 0.56), 2);
      ctx.globalAlpha = alpha;
      ctx.drawImage(monImg, dx, dy, Math.round(w), Math.round(h));
      if (flash) {
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.7 * alpha;
        ctx.drawImage(monImg, dx, dy, Math.round(w), Math.round(h));
        ctx.drawImage(monImg, dx, dy, Math.round(w), Math.round(h));
        ctx.globalCompositeOperation = "source-over";
      }
      ctx.globalAlpha = 1;
    }

    function drawHeroi(heroX, heroY, alpha, acting, ph, pose) {
      if (alpha <= 0) return;
      const poseAtual = pose || (criador && acting ? "criador-heroi-ataque" : null);
      const qc = criador && (estatico || quadroCri[poseAtual] || quadroCri[Math.floor(t / 14) % 2 ? "criador-heroi-idle2" : "criador-heroi"]);
      if (qc) {
        const h = 80, w = Math.round((qc.width / qc.height) * h);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(Math.round(heroX) + 12, GROUND, 40, 2);
        ctx.drawImage(qc, Math.round(heroX) + 30 - Math.round(h * 0.42), Math.round(GROUND - h + Math.sin(t * 0.22) * 1.2), w, h);
        ctx.globalAlpha = 1;
      } else if (sprite) {
        const dy = Math.floor(t / 14) % 2;
        const { grid } = montarSprite({ cfg: sprite.cfg, classe: sprite.classe, dy, piscar: false, pal: sprite.pal, ids: sprite.ids, crista: sprite.crista, acao: acting, ph });
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(Math.round(heroX) + 18, GROUND, 24, 2);
        for (let y = 0; y < 24; y++) for (let x = 0; x < 20; x++) {
          const c = grid[y * 20 + x];
          if (c) { ctx.fillStyle = c; ctx.fillRect(Math.round(heroX) + x * SC, Math.round(heroY) + y * SC, SC, SC); }
        }
        ctx.globalAlpha = 1;
      } else {
        desenhaMatriz(heroiSigilo, heroX, heroY, 12, corHeroi, alpha);
      }
    }

    function draw() {
      const p = t / DUR;
      const heroYbase = sprite ? 84 : 90;
      const bobH = Math.sin(t * 0.22) * 1.2;
      const bobM = Math.sin(t * 0.22 + 1.2) * 1.4;

      let heroX = 70, heroYoff = bobH, heroAlpha = 1, acting = false, ph = 0;
      let monCx = 238, monOffY = bobM, monFlash = false, monAlpha = 1, monScale = 1;
      let spark = null;
      let pose = null; // quadro do Criador fora do idle

      // entrada (0 - 0.12)
      if (p < 0.12) {
        const e = p / 0.12;
        heroX = -24 + e * 94;
        monCx = 324 - e * 86;
      } else if (medo) {
        // os monstros TEMEM o Criador: ele ergue a chama negra, eles recuam e somem
        const k = clamp((p - 0.3) / 0.7, 0, 1);
        if (p > 0.2 && p < 0.55) pose = "criador-heroi-magia";
        else if (p >= 0.62 && vitoria) pose = "criador-heroi-vitoria";
        monCx = 238 + k * 92;
        monOffY = bobM * (1 - k);
        monAlpha = Math.max(0.12, 1 - k);
      } else if (p < 0.30) {
        // A: o monstro ataca; o herói esquiva
        const a = (p - 0.12) / 0.18;
        monCx = 238 - bump(a) * 80;
        const dg = bump(clamp((a - 0.3) / 0.5, 0, 1));
        heroX = 70 - dg * 30;
        heroYoff = -dg * 22 + bobH * (1 - dg);
      } else if (p < 0.52) {
        // B: o herói ataca
        const b = (p - 0.30) / 0.22;
        acting = true;
        ph = clamp(b / 0.8, 0, 1);
        if (corpoACorpo) heroX = 70 + bump(b) * 80;
        if (vitoria) {
          if (b >= 0.5) {
            const kk = clamp((b - 0.5) / 0.5, 0, 1);
            monFlash = t % 2 === 0 && b < 0.74;
            monCx = 238 + kk * 36;
            spark = { x: 214, y: 108, k: clamp((b - 0.5) / 0.3, 0, 1) };
          }
        } else {
          // derrota: o monstro esquiva do golpe
          const d = clamp((b - 0.4) / 0.5, 0, 1);
          monOffY = -bump(d) * 26 + bobM * (1 - d);
          monCx = 238 + bump(d) * 28;
        }
      } else if (p < 0.80) {
        const c = (p - 0.52) / 0.28;
        if (vitoria) {
          // monstro derrotado: recua, encolhe e some
          monCx = 238 + 36 + c * 26;
          monAlpha = Math.max(0, 1 - c * 1.1);
          monScale = 1 - c * 0.25;
          monFlash = c < 0.12 && t % 2 === 0;
        } else {
          // derrota: o monstro revida e acerta o herói
          const cc = clamp((p - 0.52) / 0.2, 0, 1);
          monCx = 238 - bump(cc) * 88;
          if (p >= 0.63) {
            const k = (p - 0.63) / 0.17;
            heroX = 70 - k * 72;
            heroYoff = k * 74;
            heroAlpha = Math.max(0, 1 - k);
          }
          if (p > 0.6 && p < 0.72) spark = { x: 120, y: 112, k: clamp((p - 0.6) / 0.1, 0, 1) };
        }
      } else {
        const e = (p - 0.80) / 0.20;
        if (vitoria) {
          monAlpha = 0;
          heroX = 70 + e * 190;
        } else {
          heroX = 70 - 72;
          heroYoff = 74;
          heroAlpha = 0;
        }
      }

      // tremor no momento do impacto
      let sx = 0, sy = 0;
      if (spark && spark.k > 0 && spark.k < 0.6) { sx = (Math.random() - 0.5) * 6; sy = (Math.random() - 0.5) * 6; }
      ctx.save();
      ctx.translate(sx, sy);
      fundo();
      drawMonstro(monCx, monOffY, monFlash, monAlpha, monScale);
      drawHeroi(heroX, heroYbase + heroYoff, heroAlpha, acting, ph, pose);

      // projétil dos ataques à distância (durante o ataque do herói)
      if (sprite && !corpoACorpo && p >= 0.33 && p < 0.47 && (vitoria || p < 0.42)) {
        const k = (p - 0.33) / 0.14;
        const px0 = heroX + 57, py0 = 126, px1 = monCx - 10, py1 = 118;
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

      if (spark) faiscas(spark.x, spark.y, spark.k);

      if (medo) {
        if (p > 0.5) texto(vitoria ? "O CRIADOR PREVALECE" : "ELES O TEMEM", "#a98fe0", 15);
      } else if (vitoria) {
        if (p > 0.58) texto("VITÓRIA", "#0beef5");
      } else {
        if (p > 0.68) texto("VOCÊ CAIU", "#ff5f6d");
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
      {medo && resultado === "derrota" && <div className="batalha-fala">"{falaRef.current}"</div>}
      <div className="batalha-pular">clique para pular</div>
    </div>
  );
}
