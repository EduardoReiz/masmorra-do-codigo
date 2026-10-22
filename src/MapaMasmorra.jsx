import { useRef, useEffect } from "react";
import "./App.css";
import Personagem from "./Personagem";
import CriadorPixel from "./CriadorPixel";
import { ehCriador, quadroDoCriador } from "./dados/criador";

// Mapa da masmorra em pixel art, desenhado em canvas de baixa resolução e
// ampliado (pixelated). Cada monstro da trilha da classe é um ponto do caminho:
// vencido (bandeira verde), atual (anel pulsando + o personagem parado nele +
// o monstro ao lado), bloqueado (cadeado) e Exames (pontos maiores com tochas).
// A parte ainda não explorada fica coberta de névoa.
const COR_NIVEL = { E: "#6be7ed", D: "#5aa0ff", C: "#9b7cff", B: "#ff9f45", A: "#ff5f6d", S: "#ffd76a" };

function rng(seed) {
  let a = seed >>> 0 || 1;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

// Posições (em pixels lógicos) da trilha e dos nós. "largo" = tela larga: a
// trilha fica à esquerda para deixar espaço ao painel da frente.
export function layoutTrilha(n, W, H, largo) {
  const esq = Math.max(14, W * 0.07);
  const dir = largo ? W * 0.56 : W - 14;
  const cx = (esq + dir) / 2, amp = Math.max(8, (dir - esq) / 2 - 12);
  const y0 = H - 30, y1 = 34;
  const ponto = (t) => ({ x: cx + Math.sin(t * Math.PI * 3 + 0.6) * amp, y: y0 - t * (y0 - y1) });
  const caminho = [];
  for (let i = 0; i <= 260; i++) caminho.push(ponto(i / 260));
  const nos = [];
  for (let i = 0; i < n; i++) nos.push(ponto(n === 1 ? 0 : i / (n - 1)));
  return { caminho, nos };
}

function circulo(ctx, x, y, r, cor) {
  ctx.fillStyle = cor;
  for (let dy = -r; dy <= r; dy++) {
    const w = Math.floor(Math.sqrt(r * r - dy * dy));
    ctx.fillRect(Math.round(x - w), Math.round(y + dy), w * 2 + 1, 1);
  }
}

// Artes do jogo (public/mapa). Carregam uma vez; até chegarem, o mapa usa o
// desenho procedural. Cada arte é reduzida para a escala do canvas (que é
// ampliado com pixelated), assim os pixels da arte casam com os do mapa.
const DECOR = ["dec-pinheiro", "dec-carvalho", "dec-arvore-morta", "dec-arbusto", "dec-pedras", "dec-tumba", "dec-cog-ciano", "dec-cog-violeta"];
const PONTOS = ["ponto-atual", "ponto-bloqueado", "ponto-vencido", "ponto-chefe", "ponto-chefe-vencido"];
let arteMapa = null;
function carregaImg(src) {
  return new Promise((ok) => {
    const im = new Image();
    im.onload = () => ok(im);
    im.onerror = () => ok(null);
    im.src = src;
  });
}
function carregarArteMapa() {
  if (!arteMapa) {
    arteMapa = Promise.all([
      ...DECOR.map((n) => carregaImg(`/mapa/decoracao/${n}.png`)),
      ...PONTOS.map((n) => carregaImg(`/mapa/pontos/${n}.png`)),
    ]).then((ims) => {
      const arte = {};
      [...DECOR, ...PONTOS].forEach((n, i) => { if (ims[i]) arte[n] = ims[i]; });
      return arte;
    });
  }
  return arteMapa;
}
// recorta a sobra transparente e reduz para `alto` pixels lógicos
function reduz(im, alto) {
  const larg = Math.max(1, Math.round((im.width / im.height) * alto));
  const c = document.createElement("canvas");
  c.width = larg; c.height = alto;
  const ctx = c.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(im, 0, 0, larg, alto);
  // endurece a borda: semitransparente vira cheio ou vazio
  const d = ctx.getImageData(0, 0, larg, alto);
  for (let i = 3; i < d.data.length; i += 4) d.data[i] = d.data[i] > 110 ? 255 : 0;
  ctx.putImageData(d, 0, 0);
  return c;
}

function camadaEstatica(W, H, seed, layout, arte) {
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const ctx = c.getContext("2d");
  const r = rng(seed);
  ctx.fillStyle = "#0b1611";
  ctx.fillRect(0, 0, W, H);
  const ruido = ["#0e1c15", "#09130e", "#10221a", "#0c1813"];
  for (let i = 0; i < W * H * 0.12; i++) {
    ctx.fillStyle = ruido[(r() * ruido.length) | 0];
    ctx.fillRect((r() * W) | 0, (r() * H) | 0, 1, 1);
  }
  for (let i = 0; i < W * H * 0.006; i++) {
    const x = (r() * W) | 0, y = (r() * H) | 0;
    ctx.fillStyle = "#17331f"; ctx.fillRect(x, y, 1, 2); ctx.fillRect(x + 1, y + 1, 1, 1);
  }
  // trilha: borda, depois o chão de terra
  for (const p of layout.caminho) circulo(ctx, p.x, p.y, 6, "#1d150e");
  for (const p of layout.caminho) circulo(ctx, p.x, p.y, 5, "#3a2d21");
  const terra = ["#46372a", "#2f251b", "#3f3125"];
  for (const p of layout.caminho) {
    if (r() < 0.5) { ctx.fillStyle = terra[(r() * 3) | 0]; ctx.fillRect(Math.round(p.x + (r() - 0.5) * 8), Math.round(p.y + (r() - 0.5) * 8), 1, 1); }
  }
  const perto = (x, y, d) => layout.caminho.some((p) => (p.x - x) ** 2 + (p.y - y) ** 2 < d * d);
  // pedras
  for (let i = 0; i < (W * H) / 1400; i++) {
    const x = r() * W, y = r() * H;
    if (perto(x, y, 9)) continue;
    ctx.fillStyle = "#2a2e36"; ctx.fillRect(x | 0, y | 0, 3, 2);
    ctx.fillStyle = "#3d434e"; ctx.fillRect(x | 0, y | 0, 2, 1);
  }
  if (arte && arte["dec-pinheiro"]) {
    // decoração com a arte do jogo (de trás para frente para sobrepor direito)
    const TIPOS = [
      ["dec-pinheiro", 22, 5], ["dec-carvalho", 20, 4], ["dec-arvore-morta", 19, 2], ["dec-arbusto", 9, 3],
      ["dec-pedras", 8, 2], ["dec-tumba", 9, 1], ["dec-cog-ciano", 6, 1], ["dec-cog-violeta", 6, 1],
    ].filter(([n]) => arte[n]);
    const peso = TIPOS.reduce((a, t) => a + t[2], 0);
    const cache = {};
    const spr = (n, h) => (cache[n + h] ||= reduz(arte[n], h));
    const itens = [];
    for (let i = 0; i < (W * H) / 900; i++) {
      const x = r() * W, y = r() * (H + 20);
      let k = r() * peso, tipo = TIPOS[0];
      for (const t of TIPOS) { k -= t[2]; if (k <= 0) { tipo = t; break; } }
      const h = Math.round(tipo[1] * (0.8 + r() * 0.4));
      if (perto(x, y - h / 2, h / 2 + 8)) continue;
      itens.push({ x, y, n: tipo[0], h });
    }
    itens.sort((a, b) => a.y - b.y);
    for (const it of itens) {
      const im = spr(it.n, it.h);
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(Math.round(it.x - im.width * 0.3), Math.round(it.y - 1), Math.round(im.width * 0.6), 2);
      ctx.drawImage(im, Math.round(it.x - im.width / 2), Math.round(it.y - im.height));
    }
    return { canvas: c, cogumelos: [] };
  }
  // árvores (de trás para frente para sobrepor direito)
  const arvores = [];
  for (let i = 0; i < (W * H) / 520; i++) {
    const x = r() * W, y = r() * H;
    if (perto(x, y, 12)) continue;
    arvores.push({ x, y, s: 4 + ((r() * 3) | 0) });
  }
  arvores.sort((a, b) => a.y - b.y);
  for (const a of arvores) {
    const { x, y, s } = a;
    ctx.fillStyle = "rgba(0,0,0,0.35)"; ctx.fillRect(Math.round(x - s + 1), Math.round(y + s + 2), s * 2, 2);
    ctx.fillStyle = "#2a1a10"; ctx.fillRect(Math.round(x - 1), Math.round(y + s - 1), 2, 4);
    circulo(ctx, x, y, s + 1, "#06100a");
    circulo(ctx, x, y, s, "#11301d");
    circulo(ctx, x + 1, y + 1, s - 2, "#0c2214");
    circulo(ctx, x - 1, y - 1, Math.max(1, s - 3), "#1b4a2b");
    ctx.fillStyle = "#2a6a3c"; ctx.fillRect(Math.round(x - s / 2), Math.round(y - s / 2), 1, 1);
  }
  // cogumelos (o brilho é animado na camada dinâmica)
  const cogumelos = [];
  for (let i = 0; i < (W * H) / 2600; i++) {
    const x = r() * W, y = r() * H;
    if (perto(x, y, 8)) continue;
    cogumelos.push({ x: x | 0, y: y | 0, cor: r() < 0.5 ? "#0beef5" : "#a04dff", fase: r() * 6 });
  }
  return { canvas: c, cogumelos };
}

export default function MapaMasmorra({ progresso, track, idxAtual, focoRef, oculto }) {
  const ref = useRef(null);
  const heroiRef = useRef(null);
  const derrotados = progresso.derrotados;
  const chave = JSON.stringify([progresso.classe, derrotados.length, idxAtual, track.length]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    let raf, estatico, W, H, S, layout, arte = null, vivo = true;
    const spr = {};
    const vencidos = new Set(derrotados);
    const alvo = idxAtual === -1 ? track.length - 1 : idxAtual;

    function montar() {
      const vw = window.innerWidth, vh = window.innerHeight;
      S = vw < 700 ? 3 : 4;
      W = Math.ceil(vw / S); H = Math.ceil(vh / S);
      canvas.width = W; canvas.height = H;
      canvas.style.width = W * S + "px"; canvas.style.height = H * S + "px";
      ctx.imageSmoothingEnabled = false;
      layout = layoutTrilha(track.length, W, H, vw >= 900);
      estatico = camadaEstatica(W, H, hash(progresso.classe || "x"), layout, arte);
      const no = layout.nos[alvo];
      if (focoRef) focoRef.current = { x: no.x * S, y: no.y * S };
      // o herói é posicionado direto no DOM, no mesmo passo do layout
      if (heroiRef.current) {
        heroiRef.current.style.left = no.x * S - 30 + "px";
        heroiRef.current.style.top = no.y * S - 69 + "px";
      }
    }
    montar();
    window.addEventListener("resize", montar);
    carregarArteMapa().then((a) => {
      if (!vivo || !a["ponto-atual"]) return;
      arte = a;
      for (const n of PONTOS) if (a[n]) { spr[n] = reduz(a[n], 13); spr[n + "-chefe"] = reduz(a[n], 17); }
      montar();
    });
    // arte do monstro do nó atual (a mesma da batalha)
    const exAtual = idxAtual !== -1 ? track[idxAtual] : null;
    if (exAtual) carregaImg(`/monstros/${exAtual.arte || exAtual.id}.png`).then((im) => { if (vivo && im) spr.monstro = reduz(im, 18); });

    const monstros = track.map((ex) => {
      const r = rng(hash(ex.titulo));
      const cel = [];
      const cols = ex.chefe ? 11 : 9, lin = ex.chefe ? 9 : 7;
      for (let y = 0; y < lin; y++) for (let x = 0; x < Math.ceil(cols / 2); x++) {
        if (r() > 0.42) { cel.push([x, y]); if (cols - 1 - x !== x) cel.push([cols - 1 - x, y]); }
      }
      return { cel, cols, lin };
    });

    function desenha(t) {
      ctx.drawImage(estatico.canvas, 0, 0);
      // cogumelos brilhando
      for (const c of estatico.cogumelos) {
        const b = 0.45 + 0.55 * (Math.sin(t * 2 + c.fase) * 0.5 + 0.5);
        ctx.globalAlpha = b * 0.35;
        circulo(ctx, c.x + 0.5, c.y, 2, c.cor);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#d8d0c0"; ctx.fillRect(c.x, c.y + 1, 1, 1);
        ctx.fillStyle = c.cor; ctx.fillRect(c.x - 1, c.y, 3, 1);
      }
      // nós
      layout.nos.forEach((p, i) => {
        const ex = track[i];
        const vencido = vencidos.has(ex.id);
        const atual = i === idxAtual;
        const r = ex.chefe ? 6 : 4;
        if (spr["ponto-atual"]) {
          const nome = ex.chefe ? (vencido ? "ponto-chefe-vencido" : "ponto-chefe") : vencido ? "ponto-vencido" : atual ? "ponto-atual" : "ponto-bloqueado";
          const im = spr[nome + (ex.chefe ? "-chefe" : "")] || spr[nome];
          if (atual) { // anel pulsando
            const pul = (t * 1.4) % 1;
            ctx.globalAlpha = 1 - pul;
            const rr = Math.round(im.width / 2 + pul * 6);
            ctx.fillStyle = "#0beef5";
            for (let a = 0; a < 48; a++) {
              const an = (a / 48) * Math.PI * 2;
              ctx.fillRect(Math.round(p.x + Math.cos(an) * rr), Math.round(p.y + 2 + Math.sin(an) * rr * 0.5), 1, 1);
            }
            ctx.globalAlpha = 1;
          }
          ctx.drawImage(im, Math.round(p.x - im.width / 2), Math.round(p.y - im.height / 2));
          return;
        }
        if (ex.chefe) { // tochas dos exames
          for (const lado of [-1, 1]) {
            const tx = Math.round(p.x + lado * (r + 4)), ty = Math.round(p.y - 2);
            ctx.fillStyle = "#3a2a1c"; ctx.fillRect(tx, ty, 1, 4);
            const f = Math.sin(t * 13 + i + lado) > 0;
            ctx.fillStyle = f ? "#ffcf5c" : "#ff7a2a"; ctx.fillRect(tx, ty - 1, 1, 1);
            ctx.fillStyle = "#ff5a1a"; ctx.fillRect(tx, ty - (f ? 2 : 1), 1, 1);
            ctx.globalAlpha = 0.18; circulo(ctx, tx, ty - 1, 4, "#ff9f45"); ctx.globalAlpha = 1;
          }
        }
        const borda = vencido ? "#35e08a" : atual ? "#0beef5" : ex.chefe ? "#ffcf5c" : "#3a3a4a";
        const miolo = vencido ? "#123d28" : atual ? "#0b3540" : ex.chefe ? "#3a2a10" : "#15151e";
        circulo(ctx, p.x, p.y + 1, r + 1, "#05070a");
        circulo(ctx, p.x, p.y, r + 1, borda);
        circulo(ctx, p.x, p.y, r, miolo);
        if (atual) {
          const pul = (t * 1.4) % 1;
          ctx.globalAlpha = 1 - pul;
          const rr = Math.round(r + 2 + pul * 6);
          for (let a = 0; a < 40; a++) {
            const an = (a / 40) * Math.PI * 2;
            ctx.fillStyle = "#0beef5";
            ctx.fillRect(Math.round(p.x + Math.cos(an) * rr), Math.round(p.y + Math.sin(an) * rr * 0.7), 1, 1);
          }
          ctx.globalAlpha = 1;
        }
        if (vencido) { // bandeira
          ctx.fillStyle = "#c8b090"; ctx.fillRect(Math.round(p.x), Math.round(p.y - r - 6), 1, 6);
          const onda = Math.sin(t * 5 + i) > 0 ? 0 : 1;
          ctx.fillStyle = "#35e08a"; ctx.fillRect(Math.round(p.x + 1), Math.round(p.y - r - 6), 3, 2 + onda);
        } else if (!atual) { // cadeado
          ctx.fillStyle = ex.chefe ? "#ffcf5c" : "#6a6a7a";
          ctx.fillRect(Math.round(p.x - 1), Math.round(p.y - 1), 3, 2);
          ctx.fillRect(Math.round(p.x - 1), Math.round(p.y - 2), 1, 1); ctx.fillRect(Math.round(p.x + 1), Math.round(p.y - 2), 1, 1);
        }
        if (ex.chefe && !vencido) { // chifres do chefe
          ctx.fillStyle = "#ffcf5c";
          ctx.fillRect(Math.round(p.x - r), Math.round(p.y - r - 1), 1, 2);
          ctx.fillRect(Math.round(p.x + r), Math.round(p.y - r - 1), 1, 2);
        }
      });
      // monstro ao lado do nó atual
      if (idxAtual !== -1) {
        const p = layout.nos[idxAtual], m = monstros[idxAtual], ex = track[idxAtual];
        const bob = Math.sin(t * 3) > 0 ? 0 : 1;
        if (spr.monstro) {
          const im = spr.monstro;
          const x0 = Math.round(p.x + 8), y0 = Math.round(p.y + 3 - im.height + bob);
          ctx.fillStyle = "rgba(0,0,0,0.4)"; ctx.fillRect(x0 + 2, Math.round(p.y + 3), im.width - 4, 1);
          ctx.drawImage(im, x0, y0);
        } else {
          const mx = Math.round(p.x + 9), my = Math.round(p.y - m.lin - 2 + bob);
          ctx.fillStyle = "rgba(0,0,0,0.4)"; ctx.fillRect(mx, my + m.lin + 1, m.cols, 1);
          for (const [x, y] of m.cel) { ctx.fillStyle = "#05070a"; ctx.fillRect(mx + x, my + y + 1, 1, 1); }
          ctx.fillStyle = COR_NIVEL[ex.nivel] || "#9b7cff";
          for (const [x, y] of m.cel) ctx.fillRect(mx + x, my + y, 1, 1);
          const olho = Math.sin(t * 0.9) > -0.95;
          if (olho) {
            ctx.fillStyle = "#ff2d3c";
            ctx.fillRect(mx + Math.floor(m.cols / 2) - 2, my + 2, 1, 1);
            ctx.fillRect(mx + Math.floor(m.cols / 2) + 2, my + 2, 1, 1);
          }
        }
      }
      // névoa sobre o que ainda não foi explorado
      const ny = layout.nos[Math.min(track.length - 1, Math.max(0, (idxAtual === -1 ? track.length : idxAtual) + 1))].y;
      const g = ctx.createLinearGradient(0, ny + 8, 0, 0);
      g.addColorStop(0, "rgba(6,4,12,0)");
      g.addColorStop(0.35, "rgba(6,4,12,0.55)");
      g.addColorStop(1, "rgba(6,4,12,0.85)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, ny + 8);
      // vinheta
      const v = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
      v.addColorStop(0, "rgba(0,0,0,0)");
      v.addColorStop(1, "rgba(0,0,0,0.6)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, W, H);
    }

    const t0 = performance.now();
    function quadro(agora) {
      desenha((agora - t0) / 1000);
      raf = requestAnimationFrame(quadro);
    }
    raf = requestAnimationFrame(quadro);
    return () => { vivo = false; cancelAnimationFrame(raf); window.removeEventListener("resize", montar); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);

  return (
    <div className={"mapa-fundo" + (oculto ? " oculto" : "")} aria-hidden="true">
      <canvas ref={ref} className="mapa-canvas" />
      <div ref={heroiRef} className="mapa-heroi">
        {ehCriador(progresso)
          ? <CriadorPixel quadro={quadroDoCriador(progresso)} tamanho={78} linhas={52} className="mapa-criador" />
          : <Personagem progresso={progresso} tamanho={72} />}
      </div>
    </div>
  );
}
