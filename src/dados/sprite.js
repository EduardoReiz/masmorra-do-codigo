import { PELES, CORES_CABELO, ROUPA_CLASSE, PALETA_RARIDADE } from "./personagem";
import { item as itemEquip } from "./equipamento";

// Motor do sprite do personagem (JS puro, sem React): monta a grade 40x48 em
// camadas (cabelo de trás, pernas, botas, tronco, braços, cabeça, rosto, cabelo
// ou capacete, arma) e passa o contorno. Cada superfície tem 3 tons (base,
// sombra, luz) com a luz vindo de cima à esquerda. Usado pelo componente
// Personagem, pela cena de batalha e por testes.
export const W = 40;
export const H = 48;
const CONTORNO = "#120e18";
const CX = 19.5; // eixo de simetria

const novoGrid = () => new Array(W * H).fill(null);
function px(g, x, y, c) {
  x = Math.round(x);
  y = Math.round(y);
  if (c && x >= 0 && x < W && y >= 0 && y < H) g[y * W + x] = c;
}
function ret(g, x0, y0, x1, y1, c) {
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) px(g, x, y, c);
}
function apaga(g, x, y) {
  if (x >= 0 && x < W && y >= 0 && y < H) g[y * W + x] = null;
}
function linha(g, x0, y0, x1, y1, c) {
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0), sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx + dy;
  for (let n = 0; n < 120; n++) {
    px(g, x0, y0, c);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}
const lerp = (a, b, t) => a + (b - a) * t;
const suave = (t) => t * t * (3 - 2 * t);

// ---------- cores ----------
function rgb(h) { const n = parseInt(h.slice(1, 7), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function hex(r, g, b) { return "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join(""); }
function mistura(a, b, t) { const A = rgb(a), B = rgb(b); return hex(lerp(A[0], B[0], t), lerp(A[1], B[1], t), lerp(A[2], B[2], t)); }
const clareia = (c, t = 0.28) => mistura(c, "#ffffff", t);
const escurece = (c, t = 0.3) => mistura(c, "#0a0612", t);
const tons = (base, sombra) => [base, sombra || escurece(base), clareia(base)]; // [base, sombra, luz]

// elipse preenchida com 3 tons (luz de cima à esquerda)
function elip(g, cx, cy, rx, ry, t, so = 0.5) {
  for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++) for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
    const u = (x - cx) / rx, v = (y - cy) / ry;
    if (u * u + v * v > 1) continue;
    const s = -0.55 * u - 0.55 * v;
    px(g, x, y, s > so + 0.05 ? t[2] : s < -so ? t[1] : t[0]);
  }
}
// retângulo com sombra na coluna da direita e luz na da esquerda
function bloco(g, x0, y0, x1, y1, t, luz = true) {
  ret(g, x0, y0, x1, y1, t[0]);
  ret(g, x1, y0, x1, y1, t[1]);
  if (luz && x1 - x0 >= 2) ret(g, x0, y0, x0, y1, t[2]);
}

// ---------- cabelo ----------
// última linha de cabelo de cada coluna (x = 9..30): franja irregular e costeletas nas pontas
const FRANJA = {
  curto: [17, 16, 13, 11, 10, 9, 9, 10, 11, 10, 9, 8, 8, 9, 10, 11, 10, 9, 10, 12, 16, 17],
  espetado: [15, 14, 11, 9, 9, 8, 8, 9, 9, 9, 8, 8, 8, 9, 9, 9, 9, 8, 9, 11, 14, 15],
  longo: [20, 19, 15, 12, 11, 10, 9, 10, 11, 10, 9, 8, 8, 9, 10, 11, 10, 9, 10, 13, 19, 20],
};
function cabeloDeTras(g, estilo, c, dy) {
  if (estilo !== "longo") return;
  const t = [c.base, c.sombra, clareia(c.base, 0.2)];
  bloco(g, 8, 12 + dy, 11, 31 + dy, t, false);
  bloco(g, 28, 12 + dy, 31, 31 + dy, t, false);
}
function cabelo(g, estilo, c, pele, dy) {
  const t = [c.base, c.sombra, clareia(c.base, 0.22)];
  if (estilo === "careca") { // só um brilho na cabeça raspada
    for (const [x, y] of [[13, 4], [14, 3], [15, 3], [12, 5]]) px(g, x, y + dy, clareia(pele.base, 0.45));
    return;
  }
  const fr = FRANJA[estilo] || FRANJA.curto;
  const cy = 12 + dy;
  for (let x = 8; x <= 31; x++) {
    const f = fr[Math.min(21, Math.max(0, x - 9))] + dy;
    for (let y = 1 + dy; y <= f; y++) {
      const u = (x - CX) / 11.8, v = (y - cy) / 10.8;
      if (u * u + v * v > 1) continue;
      const s = -0.55 * u - 0.55 * v;
      let cor = s > 0.5 ? t[2] : s < -0.42 ? t[1] : t[0];
      if (y === f) cor = t[1]; // sombra da franja sobre a testa
      px(g, x, y, cor);
    }
  }
  // fios de brilho
  for (const [x, y] of [[13, 5], [14, 4], [16, 3], [15, 6]]) px(g, x, y + dy, t[2]);
  if (estilo === "espetado") {
    for (const [x, h] of [[11, 3], [15, 4], [19, 5], [23, 4], [27, 3]]) {
      for (let i = 0; i < h; i++) {
        const y = 3 + dy - i;
        px(g, x - (i < 2 ? 1 : 0), y, t[0]); px(g, x, y, i === 0 ? t[0] : t[0]); px(g, x + 1, y, t[1]);
        if (i === h - 1) { px(g, x, y, t[2]); }
      }
    }
  }
}

// ---------- capacetes ----------
function cupula(g, p, dy, so = 0.5) {
  // calota do elmo (acima da linha do rosto) + protetores laterais
  const cy = 12 + dy;
  for (let y = 0 + dy; y <= 11 + dy; y++) for (let x = 7; x <= 32; x++) {
    const u = (x - CX) / 12.2, v = (y - cy) / 11.2;
    if (u * u + v * v > 1) continue;
    const s = -0.55 * u - 0.55 * v;
    px(g, x, y, s > so + 0.1 ? p[2] : s < -so ? p[1] : p[0]);
  }
  bloco(g, 8, 11 + dy, 11, 20 + dy, [p[0], p[1], p[2]], false);
  bloco(g, 28, 11 + dy, 31, 20 + dy, [p[0], p[1], p[2]], false);
  ret(g, 8, 11 + dy, 31, 12 + dy, p[1]); // aro da testa
  ret(g, 9, 11 + dy, 15, 11 + dy, p[0]);
}
function capaceteDoItem(g, id, p, dy, crista) {
  switch (id) {
    case "cap-couro": { // capuz: só o rosto à mostra
      const cy = 13 + dy;
      for (let y = 0 + dy; y <= 25 + dy; y++) for (let x = 6; x <= 33; x++) {
        const u = (x - CX) / 13.6, v = (y - cy) / 12.8;
        if (u * u + v * v > 1) continue;
        const ou = (x - CX) / 8.8, ov = (y - (14 + dy)) / 8.6; // abertura do rosto
        if (ou * ou + ov * ov <= 1) continue;
        const s = -0.55 * u - 0.55 * v;
        px(g, x, y, s > 0.55 ? p[2] : s < -0.3 ? p[1] : p[0]);
      }
      // contorno interno da abertura
      for (let y = 4 + dy; y <= 23 + dy; y++) for (let x = 9; x <= 30; x++) {
        const ou = (x - CX) / 8.8, ov = (y - (14 + dy)) / 8.6;
        const d = ou * ou + ov * ov;
        if (d > 1 && d < 1.28 && (g[y * W + x] || "") !== "") px(g, x, y, p[1]);
      }
      ret(g, 15, 1 + dy, 18, 1 + dy, p[2]);
      px(g, 31, 22 + dy, p[1]); px(g, 8, 22 + dy, p[1]);
      return;
    }
    case "cap-bronze": // elmo com aro e runa dourados
      cupula(g, p, dy);
      ret(g, 8, 11 + dy, 31, 11 + dy, p[2]);
      ret(g, 18, 5 + dy, 21, 5 + dy, p[2]); ret(g, 19, 6 + dy, 20, 8 + dy, p[2]);
      ret(g, 19, 12 + dy, 20, 16 + dy, p[1]); // proteção do nariz
      ret(g, 8, 17 + dy, 11, 17 + dy, p[2]); ret(g, 28, 17 + dy, 31, 17 + dy, p[2]);
      return;
    case "cap-tempestade": { // elmo alado
      cupula(g, p, dy);
      ret(g, 19, 12 + dy, 20, 16 + dy, p[1]);
      const asa = [[2, 3, 4], [3, 2, 5], [4, 2, 6], [5, 3, 7], [6, 4, 7], [7, 5, 7], [8, 6, 7]];
      for (const [y, x0, x1] of asa) for (let x = x0; x <= x1; x++) {
        const cor = y <= 3 ? p[2] : (y + x) % 3 === 0 ? p[1] : y >= 6 ? p[1] : p[0];
        px(g, x, y + dy, cor); px(g, 39 - x, y + dy, cor);
      }
      ret(g, 18, 3 + dy, 21, 4 + dy, p[2]);
      return;
    }
    case "cap-portal": { // elmo com chifres
      cupula(g, p, dy);
      ret(g, 19, 12 + dy, 20, 16 + dy, p[1]);
      const chifre = [[1, 2, 3], [2, 3, 4], [3, 3, 5], [4, 4, 6], [5, 4, 7], [6, 5, 8], [7, 6, 9]];
      for (const [y, x0, x1] of chifre) for (let x = x0; x <= x1; x++) {
        const cor = y <= 2 ? p[2] : x === x1 ? p[1] : p[0];
        px(g, x, y + dy, cor); px(g, 39 - x, y + dy, cor);
      }
      for (const x of [14, 25]) px(g, x, 9 + dy, p[2]);
      return;
    }
    default: // cap-ferro e qualquer outro: elmo liso
      cupula(g, p, dy);
      ret(g, 19, 12 + dy, 20, 17 + dy, p[1]); // nasal
      ret(g, 12, 4 + dy, 15, 4 + dy, p[2]); px(g, 11, 5 + dy, p[2]); px(g, 11, 6 + dy, p[2]);
      ret(g, 8, 15 + dy, 11, 15 + dy, p[1]); ret(g, 28, 15 + dy, 31, 15 + dy, p[1]);
      if (crista) { for (let x = 15; x <= 24; x++) { const h = 2 + Math.round(2 * Math.sin(((x - 15) / 9) * Math.PI)); ret(g, x, -1 + dy - 0, x, 1 + dy + 0, "#d83a3a"); px(g, x, -2 + dy + 1 - h + 1, "#ff6a5a"); } }
  }
}
const CAPACETES_COROA = new Set(["cap-monarca", "cri-coroa"]);
function coroaDoItem(g, id, p, dy) {
  if (id === "cri-coroa") { // coroa de espinhos negros
    ret(g, 10, 3 + dy, 29, 4 + dy, p[0]); ret(g, 10, 4 + dy, 29, 4 + dy, p[1]);
    for (const x of [10, 13, 16, 19, 22, 25, 28]) {
      const h = x === 19 || x === 22 ? 5 : 3;
      for (let i = 0; i < h; i++) { px(g, x, 2 + dy - i, p[0]); px(g, x + 1, 2 + dy - i, p[1]); }
      px(g, x, 2 + dy - h + 1, p[2]);
    }
    px(g, 14, 3 + dy, p[2]); px(g, 24, 3 + dy, p[2]);
    return;
  }
  // coroa do Monarca (ouro, com joias)
  ret(g, 11, 3 + dy, 28, 6 + dy, p[0]); ret(g, 11, 6 + dy, 28, 6 + dy, p[1]); ret(g, 27, 3 + dy, 28, 5 + dy, p[1]);
  ret(g, 11, 3 + dy, 28, 3 + dy, p[2]);
  for (const x of [11, 16, 21, 26]) { ret(g, x, 0 + dy, x + 2, 2 + dy, p[0]); px(g, x + 1, -0 + dy, p[2]); px(g, x + 2, 1 + dy, p[1]); }
  px(g, 14, 4 + dy, "#d83a3a"); px(g, 19, 4 + dy, "#3a8ad8"); px(g, 20, 4 + dy, "#3a8ad8"); px(g, 25, 4 + dy, "#d83a3a");
}

// ---------- armas ----------
function anguloEspada(ph) {
  const idle = -Math.PI / 2 + 0.25, atras = -Math.PI / 2 - 1.0, frente = 0.9;
  if (ph < 0) return idle;
  if (ph < 0.3) return lerp(idle, atras, suave(ph / 0.3));
  if (ph < 0.5) return lerp(atras, frente, suave((ph - 0.3) / 0.2));
  if (ph < 0.75) return frente;
  return lerp(frente, idle, suave((ph - 0.75) / 0.25));
}
const COMPRIMENTO_ESPADA = { "esp-enferrujada": 13, "esp-aco": 15, "esp-rubra": 17, "esp-monarca": 17, "cri-lamina": 19 };
function espada(g, r, dy, ph, id) {
  let lamina = r ? r[2] : "#dfe4ec", fio = r ? r[0] : "#9aa3b2", guarda = r ? r[0] : "#a07a3a";
  if (id === "esp-enferrujada") { lamina = "#b08458"; fio = "#7a5230"; guarda = "#6a4a2a"; }
  if (id === "esp-aco") { lamina = "#e8edf5"; fio = "#8e98ab"; guarda = "#b48a3a"; }
  const ox = 28, oy = 31 + dy, a = anguloEspada(ph), L = COMPRIMENTO_ESPADA[id] || 15;
  const cx = Math.cos(a), cy = Math.sin(a);
  const nx = -cy, ny = cx; // normal da lâmina
  for (let i = 3; i <= L; i++) {
    const x = ox + cx * i, y = oy + cy * i;
    const fino = i > L - 3; // a ponta afina
    px(g, x, y, lamina); px(g, x + nx, y + ny, fio);
    if (!fino) { px(g, x - nx, y - ny, clareia(lamina, 0.3)); px(g, x + nx * 2, y + ny * 2, fio); }
    if (i < L - 2 && i > 5) px(g, x, y, id === "esp-rubra" ? "#ff6a5a" : id === "esp-monarca" ? "#ffe9a0" : "#c4ccd8"); // fuller
  }
  const px2 = ox + cx * L, py2 = oy + cy * L;
  px(g, px2, py2, "#ffffff"); px(g, px2 + nx * 0.5, py2 + ny * 0.5, lamina);
  linha(g, ox + nx * 3.2, oy + ny * 3.2, ox - nx * 3.2, oy - ny * 3.2, guarda);
  linha(g, ox + nx * 3.2 + cx, oy + ny * 3.2 + cy, ox - nx * 3.2 + cx, oy - ny * 3.2 + cy, clareia(guarda, 0.3));
  linha(g, ox, oy, ox - cx * 3, oy - cy * 3, "#5a3a24");
  px(g, ox - cx * 3.6, oy - cy * 3.6, "#e0b84a");
  if (id === "esp-monarca") { px(g, ox + nx * 3.2, oy + ny * 3.2, "#ffe9a0"); px(g, ox - nx * 3.2, oy - ny * 3.2, "#ffe9a0"); px(g, ox + cx * 3, oy + cy * 3, "#d83a3a"); }
  return { x: px2, y: py2 };
}

function arco(g, r, dy, ph, id) {
  const madeira = r ? r[0] : "#8a5a2a", sombra = r ? r[1] : "#5e3c1a", luz = r ? clareia(r[0], 0.35) : "#b98a4e", corda = "#ece4d4";
  const cy = 32 + dy;
  for (let y = 14; y <= 50; y++) {
    const d = Math.abs(y - cy);
    if (d > 17) continue;
    const x = d <= 6 ? 34 : d <= 10 ? 33 : d <= 13 ? 32 : d <= 15 ? 31 : 30;
    px(g, x, y + dy - 0, madeira); px(g, x + 1, y + dy - 0, sombra); px(g, x - 1, y + dy - 0, d <= 6 ? luz : madeira);
  }
  let puxa = 0;
  if (ph >= 0 && ph < 0.5) puxa = suave(ph / 0.5) * 6;
  else if (ph >= 0.5 && ph < 0.55) puxa = 6;
  if (id === "arc-recurvo" || id === "arc-tempestade" || id === "arc-monarca") { px(g, 29, 15 + dy, madeira); px(g, 28, 14 + dy, sombra); px(g, 29, 49 + dy - 0 - 17 + 17 - 1 - 0, madeira); px(g, 28, cy + 17 + 0, sombra); }
  if (id === "arc-tempestade") { ret(g, 33, cy - 1, 34, cy + 1, "#6ad8ff"); px(g, 33, cy, "#ffffff"); }
  if (id === "arc-monarca") { for (const yy of [cy - 4, cy, cy + 4]) ret(g, 33, yy, 34, yy, "#ffe9a0"); px(g, 31, cy - 15, "#ffe9a0"); px(g, 31, cy + 15, "#ffe9a0"); }
  if (id === "arc-caca") { px(g, 33, cy - 8, "#c8b090"); px(g, 33, cy + 8, "#c8b090"); }
  const xm = 30 - puxa;
  linha(g, 30, cy - 17, xm, cy, corda);
  linha(g, xm, cy, 30, cy + 17, corda);
  ret(g, 33, cy - 1, 35, cy + 1, "#3a2a1c"); // empunhadura
  if (ph >= 0 && ph < 0.55) {
    linha(g, xm, cy, 38, cy, "#c8b090");
    px(g, 38, cy, "#dfe4ec"); px(g, 39, cy, "#ffffff");
    px(g, xm, cy - 1, "#d84a4a"); px(g, xm + 1, cy - 2, "#d84a4a"); px(g, xm, cy + 1, "#d84a4a"); px(g, xm + 1, cy + 2, "#d84a4a");
  }
  return { x: 38, y: cy };
}

function cajado(g, r, dy, ph, id) {
  const gema = r ? r[0] : "#3ab8d8", brilho = r ? r[2] : "#bff6ff";
  const sobe = ph >= 0 && ph < 0.8 ? Math.round(suave(Math.min(1, ph / 0.25)) * 4) : 0;
  const topo = 10 + dy - sobe;
  ret(g, 31, topo, 32, 46, "#6a4a2a"); ret(g, 33, topo + 4, 33, 46, "#4a3218"); ret(g, 31, topo + 2, 31, 46, "#8a6a40");
  for (const y of [22, 30, 38]) ret(g, 31, y, 33, y, "#3e2a16"); // anéis de couro
  ret(g, 29, topo, 34, topo, "#6a4a2a"); px(g, 29, topo - 1, "#6a4a2a"); px(g, 34, topo - 1, "#4a3218");
  const ativo = ph >= 0.25 && ph < 0.8;
  const cor = ativo ? brilho : gema, esc = escurece(gema, 0.35);
  const gx = 31.5, gy = topo - 4;
  if (id === "caj-cristal") { for (let i = 0; i < 6; i++) { const w = i < 3 ? i : 5 - i; ret(g, 31 - w, topo - 1 - i, 32 + w, topo - 1 - i, cor); px(g, 32 + w, topo - 1 - i, esc); } px(g, 30, topo - 4, "#ffffff"); }
  else if (id === "caj-arcano") { elip(g, gx, gy, 3.2, 3.2, [cor, esc, clareia(cor, 0.5)]); for (const [dx, dyy] of [[-5, 0], [5, 0], [0, -5]]) px(g, gx + dx, gy + dyy, brilho); px(g, gx - 1, gy - 1, "#ffffff"); }
  else if (id === "caj-monarca") { elip(g, gx, gy, 3.2, 3.2, [cor, esc, clareia(cor, 0.5)]); for (const dx of [-4, -2, 0, 2, 4]) px(g, gx + dx, gy - 5 + (Math.abs(dx) === 4 ? 2 : Math.abs(dx) === 2 ? 1 : 0), "#ffe9a0"); px(g, gx - 1, gy - 1, "#ffffff"); }
  else if (id === "caj-aprendiz") { elip(g, gx, gy + 1, 2.2, 2.2, [cor, esc, clareia(cor, 0.5)]); px(g, 29, topo - 2, "#6a4a2a"); px(g, 34, topo - 2, "#4a3218"); px(g, gx - 1, gy, "#ffffff"); }
  else { elip(g, gx, gy, 2.8, 2.8, [cor, esc, clareia(cor, 0.5)]); px(g, gx - 1, gy - 1, "#ffffff"); }
  return { x: gx, y: gy };
}

function grimorio(g, r, dy, ph, id) {
  const capa = r ? r[0] : "#7a2a3a", lombada = r ? r[1] : "#4e1a26", luz = r ? r[2] : "#c06070";
  const aberto = ph >= 0.1 && ph < 0.9;
  if (aberto) {
    ret(g, 20, 27 + dy, 35, 33 + dy, "#f0e6c8"); ret(g, 26, 27 + dy, 29, 33 + dy, "#c8bc98");
    ret(g, 27, 27 + dy, 28, 33 + dy, "#a89c78");
    ret(g, 20, 34 + dy, 35, 35 + dy, capa); ret(g, 35, 27 + dy, 35, 35 + dy, lombada);
    for (const y of [29, 31]) { ret(g, 22, y + dy, 25, y + dy, "#8a7a5a"); ret(g, 30, y + dy, 33, y + dy, "#8a7a5a"); }
  } else {
    bloco(g, 23, 26 + dy, 32, 35 + dy, [capa, lombada, luz]);
    ret(g, 23, 26 + dy, 24, 35 + dy, lombada);
    ret(g, 31, 28 + dy, 32, 34 + dy, "#f0e6c8");
    elip(g, 27.5, 30.5 + dy, 2, 2, ["#e0b84a", "#a8782a", "#fff0b0"]);
  }
  if (id === "gri-rascunho") { px(g, 33, 25 + dy, "#f0e6c8"); px(g, 34, 24 + dy, "#f0e6c8"); px(g, 22, 25 + dy, "#f0e6c8"); ret(g, 21, 26 + dy, 22, 26 + dy, "#f0e6c8"); }
  if (id === "gri-cifra") { ret(g, aberto ? 26 : 25, 35 + dy, aberto ? 29 : 29, 35 + dy, "#c0c8d8"); ret(g, 26, 33 + dy, 28, 33 + dy, aberto ? "#8a7a5a" : "#c0c8d8"); }
  if (id === "gri-eco") { for (const [x, y] of aberto ? [[23, 30], [31, 28], [32, 32]] : [[25, 28], [30, 33], [26, 33]]) { px(g, x, y + dy, "#bff6ff"); px(g, x + 1, y + dy, "#7fe0f0"); } }
  if (id === "gri-monarca") { for (const [x, y] of aberto ? [[20, 35], [35, 35], [20, 27], [35, 27]] : [[23, 26], [32, 26], [23, 35], [32, 35]]) ret(g, x - 1, y - 0 + dy, x, y + dy, "#ffe9a0"); }
  return { x: 27.5, y: 24 + dy };
}

// ---------- peças do corpo por item ----------
function ombreira(g, p, lado, dy, id) {
  const cx = lado < 0 ? 11.5 : 27.5;
  elip(g, cx, 25 + dy, 4.4, 3.4, p);
  if (id === "col-dragao") { for (let i = 0; i < 4; i++) px(g, cx + lado * (1 + i * 0.4), 21 + dy - i, p[2]), px(g, cx + lado * (2 + i * 0.4), 22 + dy - i, p[1]); }
  if (id === "col-monarca") { ret(g, Math.round(cx) - 3, 27 + dy, Math.round(cx) + 3, 27 + dy, "#ffe9a0"); px(g, cx, 24 + dy, "#d83a3a"); }
}
function estiloColete(g, id, p, dy) {
  if (!p) return;
  switch (id) {
    case "col-couro": { // tiras cruzadas com costura e fivela
      linha(g, 14, 24 + dy, 25, 32 + dy, p[1]); linha(g, 25, 24 + dy, 14, 32 + dy, p[1]);
      linha(g, 14, 25 + dy, 24, 32 + dy, p[2]); linha(g, 24, 25 + dy, 14, 32 + dy, p[2]);
      elip(g, 19.5, 28 + dy, 1.8, 1.8, ["#e0b84a", "#a8782a", "#fff0b0"]);
      break;
    }
    case "col-malha": // anéis de malha
      for (let y = 24; y <= 32; y++) for (let x = 14; x <= 25; x++) if ((x + y) % 2 === 0) px(g, x, y + dy, (x + y) % 4 === 0 ? p[2] : p[1]);
      ret(g, 13, 32 + dy, 26, 32 + dy, p[1]);
      break;
    case "col-dragao": // escamas
      for (let y = 24; y <= 32; y += 2) for (let x = 14 + ((y / 2) % 2); x <= 25; x += 2) { px(g, x, y + dy, p[2]); px(g, x, y + 1 + dy, p[1]); px(g, x + 1, y + 1 + dy, p[1]); }
      break;
    case "col-monarca": // gola e peitoral de ouro
      ret(g, 16, 23 + dy, 23, 24 + dy, p[2]); ret(g, 17, 25 + dy, 22, 25 + dy, p[1]);
      elip(g, 19.5, 29 + dy, 3, 3, [p[2], p[1], "#ffffff"]); px(g, 19, 29 + dy, "#d83a3a"); px(g, 20, 29 + dy, "#d83a3a");
      ret(g, 13, 32 + dy, 26, 32 + dy, p[2]);
      break;
    case "col-portal": // núcleo de portal brilhando
      for (let i = 0; i < 4; i++) { ret(g, 19 - i, 26 + dy + i, 20 + i, 26 + dy + i, i === 3 ? p[1] : p[2]); }
      for (let i = 0; i < 3; i++) ret(g, 17 + i, 30 + dy + i, 22 - i, 30 + dy + i, p[2]);
      px(g, 19, 29 + dy, "#ffffff"); px(g, 20, 29 + dy, "#ffffff");
      break;
    case "cri-manto": // manto longo que desce até as pernas
      ret(g, 11, 33, 28, 44, p[0]); ret(g, 24, 33, 28, 44, p[1]); ret(g, 11, 33, 12, 44, p[2]);
      ret(g, 11, 44, 28, 44, p[1]);
      for (const x of [15, 19, 23]) ret(g, x, 36, x, 43, p[1]);
      elip(g, 19.5, 24 + dy, 2, 1.6, [p[2], p[1], "#ffffff"]);
      break;
    default:
  }
}
function estiloCalca(g, id, p) {
  if (!p) return;
  switch (id) {
    case "cal-couro": ret(g, 14, 39, 18, 39, p[1]); ret(g, 21, 39, 25, 39, p[1]); px(g, 16, 39, p[2]); px(g, 23, 39, p[2]); break; // tira no joelho
    case "cal-malha": for (let y = 35; y <= 42; y++) for (const x0 of [14, 21]) for (let x = x0; x <= x0 + 4; x++) if ((x + y) % 2 === 0) px(g, x, y, p[2]); break;
    case "cal-runica": for (const [x, y] of [[16, 37], [23, 37], [16, 40], [23, 40]]) { px(g, x, y, p[2]); px(g, x, y + 1, p[2]); px(g, x + 1, y, p[2]); } break;
    case "cal-monarca": ret(g, 14, 35, 14, 42, p[2]); ret(g, 25, 35, 25, 42, p[2]); ret(g, 14, 41, 18, 41, p[2]); ret(g, 21, 41, 25, 41, p[2]); break; // faixas douradas
    case "cal-portal": ret(g, 16, 36, 17, 37, p[2]); ret(g, 22, 36, 23, 37, p[2]); px(g, 15, 41, p[2]); px(g, 24, 41, p[2]); break;
    case "cri-grevas": ret(g, 14, 38, 18, 40, p[1]); ret(g, 21, 38, 25, 40, p[1]); ret(g, 14, 38, 18, 38, p[2]); ret(g, 21, 38, 25, 38, p[2]); px(g, 16, 39, p[2]); px(g, 23, 39, p[2]); break;
    default:
  }
}
function estiloSapato(g, id, p) {
  if (!p) return;
  switch (id) {
    case "sap-couro": ret(g, 13, 41, 19, 42, p[0]); ret(g, 20, 41, 26, 42, p[0]); ret(g, 13, 41, 19, 41, p[2]); ret(g, 20, 41, 26, 41, p[2]); break; // cano alto com bainha
    case "sap-ferro": ret(g, 13, 41, 19, 43, p[1]); ret(g, 20, 41, 26, 43, p[1]); ret(g, 13, 41, 19, 41, p[2]); ret(g, 20, 41, 26, 41, p[2]); px(g, 14, 44, p[2]); px(g, 25, 44, p[2]); px(g, 16, 43, p[2]); px(g, 23, 43, p[2]); break;
    case "sap-vento": // asinhas
      for (const lado of [-1, 1]) { const x0 = lado < 0 ? 11 : 28; for (let i = 0; i < 4; i++) { px(g, x0 + lado * i * 0.8, 43 - i, p[2]); px(g, x0 + lado * i * 0.8, 44 - i, p[0]); px(g, x0 + lado * (i * 0.8 + 1), 44 - i, p[1]); } }
      break;
    case "sap-monarca": ret(g, 12, 44, 19, 44, p[2]); ret(g, 20, 44, 27, 44, p[2]); px(g, 16, 43, "#d83a3a"); px(g, 23, 43, "#d83a3a"); break;
    case "sap-portal": for (const x of [13, 19, 20, 26]) px(g, x, 43, p[2]); ret(g, 14, 45, 17, 45, p[2]); ret(g, 22, 45, 25, 45, p[2]); break;
    case "cri-botas": ret(g, 13, 41, 19, 42, p[0]); ret(g, 20, 41, 26, 42, p[0]); px(g, 15, 44, p[2]); px(g, 24, 44, p[2]); px(g, 11, 45, p[2]); px(g, 28, 45, p[2]); ret(g, 13, 41, 19, 41, p[2]); ret(g, 20, 41, 26, 41, p[2]); break;
    default:
  }
}

// Monta o sprite completo de um quadro.
export function montarSprite(e) {
  const g = novoGrid();
  const pele = { ...(PELES[e.cfg.pele] || PELES[0]) };
  pele.luz = clareia(pele.base, 0.25);
  const cab = CORES_CABELO.find((c) => c.id === e.cfg.corCabelo) || CORES_CABELO[0];
  const roupa = ROUPA_CLASSE[e.classe] || ROUPA_CLASSE["O Arquiteto"];
  const { dy, pal } = e;
  const ids = e.ids || {}; // qual item está equipado em cada espaço (cada um tem o seu desenho)
  const tun = tons(...(pal.colete ? [pal.colete[0], pal.colete[1]] : roupa.tunica));
  const cal = tons(...(pal.calca ? [pal.calca[0], pal.calca[1]] : roupa.calca));
  const bot = tons(...(pal.sapato ? [pal.sapato[0], pal.sapato[1]] : roupa.bota));
  const manto = roupa.manto && !pal.calca;
  const tCol = pal.colete ? [pal.colete[0], pal.colete[1], pal.colete[2]] : null;

  if (!pal.capacete || CAPACETES_COROA.has(ids.capacete)) cabeloDeTras(g, e.cfg.cabelo, cab, dy);

  // pernas e botas
  if (manto) {
    for (let y = 34; y <= 44; y++) {
      const larg = 6 + Math.round(((y - 34) / 10) * 3);
      const x0 = Math.round(CX - larg), x1 = Math.round(CX + larg);
      ret(g, x0, y, x1, y, tun[0]); ret(g, x1 - 2, y, x1, y, tun[1]); ret(g, x0, y, x0, y, tun[2]);
    }
    ret(g, 10, 44, 29, 44, tun[1]); ret(g, 10, 43, 29, 43, tun[2]);
    ret(g, 14, 45, 18, 46, bot[0]); ret(g, 21, 45, 25, 46, bot[0]); ret(g, 14, 46, 18, 46, bot[1]); ret(g, 21, 46, 25, 46, bot[1]);
    ret(g, 19, 36, 19, 43, tun[1]); // dobra do manto
  } else {
    bloco(g, 14, 34, 18, 42, cal); bloco(g, 21, 34, 25, 42, cal);
    ret(g, 14, 34, 25, 35, cal[0]); ret(g, 24, 34, 25, 35, cal[1]);
    ret(g, 19, 36, 20, 42, "#1a1626");
    estiloCalca(g, ids.calca, pal.calca && tons(pal.calca[0], pal.calca[1]).map((c, i) => (i === 2 ? pal.calca[2] : c)));
    // botas
    ret(g, 13, 42, 19, 45, bot[0]); ret(g, 20, 42, 26, 45, bot[0]);
    ret(g, 12, 44, 12, 45, bot[0]); ret(g, 27, 44, 27, 45, bot[0]);
    ret(g, 19, 42, 19, 45, bot[1]); ret(g, 26, 42, 27, 45, bot[1]);
    ret(g, 13, 42, 18, 42, bot[2]);
    ret(g, 12, 46, 19, 46, escurece(bot[1], 0.5)); ret(g, 20, 46, 27, 46, escurece(bot[1], 0.5));
    estiloSapato(g, ids.sapato, pal.sapato && [pal.sapato[0], pal.sapato[1], pal.sapato[2]]);
  }

  // tronco
  ret(g, 14, 23 + dy, 25, 23 + dy, tun[0]);
  bloco(g, 13, 24 + dy, 26, 33 + dy, tun);
  ret(g, 22, 24 + dy, 26, 33 + dy, tun[1]); ret(g, 13, 24 + dy, 22, 33 + dy, tun[0]); ret(g, 13, 24 + dy, 14, 29 + dy, tun[2]);
  for (const x of [16, 19, 22]) ret(g, x, 29 + dy, x, 33 + dy, tun[1]); // pregas do tecido
  if (!pal.colete) { ret(g, 18, 23 + dy, 21, 23 + dy, pele.base); ret(g, 19, 24 + dy, 20, 24 + dy, pele.base); ret(g, 17, 23 + dy, 17, 24 + dy, tun[1]); ret(g, 22, 23 + dy, 22, 24 + dy, tun[1]); }
  else { ret(g, 17, 23 + dy, 22, 23 + dy, tun[1]); }
  // cinto
  ret(g, 13, 33 + dy, 26, 34 + dy, "#3a2a1c"); ret(g, 13, 34 + dy, 26, 34 + dy, "#241a12");
  ret(g, 18, 33 + dy, 21, 34 + dy, "#e0b84a"); ret(g, 19, 33 + dy, 20, 33 + dy, "#fff0b0"); px(g, 19, 34 + dy, "#a8782a"); px(g, 20, 34 + dy, "#a8782a");

  // braços (a manga é da cor da túnica; as mãos, da pele)
  for (const [x0, lado] of [[10, -1], [27, 1]]) {
    ret(g, x0, 24 + dy, x0 + 2, 32 + dy, tun[0]);
    ret(g, x0 + 2, 24 + dy, x0 + 2, 32 + dy, tun[1]);
    ret(g, x0, 24 + dy, x0, 30 + dy, tun[2]);
    ret(g, x0, 31 + dy, x0 + 2, 32 + dy, tun[1]); // punho
    ret(g, x0, 33 + dy, x0 + 2, 35 + dy, pele.base); ret(g, x0 + 2, 33 + dy, x0 + 2, 35 + dy, pele.sombra);
    px(g, x0, 33 + dy, pele.luz); apaga(g, x0 + (lado < 0 ? 0 : 2), 35 + dy);
  }
  if (pal.colete) {
    if (ids.colete !== "col-pano") { ombreira(g, tCol, -1, dy, ids.colete); ombreira(g, tCol, 1, dy, ids.colete); }
    estiloColete(g, ids.colete, tCol, dy);
  }

  // cabeça
  elip(g, CX, 13 + dy, 10.5, 10, [pele.base, pele.sombra, pele.luz], 0.62);
  ret(g, 8, 14 + dy, 8, 17 + dy, pele.base); ret(g, 31, 14 + dy, 31, 17 + dy, pele.sombra); // orelhas
  px(g, 8, 15 + dy, pele.sombra); px(g, 31, 16 + dy, escurece(pele.sombra, 0.2));
  // rosto
  const olho = "#241a2e", iris = "#46386a", brilho = "#ffffff";
  for (const x0 of [14, 23]) {
    if (e.piscar) { ret(g, x0, 15 + dy, x0 + 2, 15 + dy, olho); px(g, x0 - 1, 16 + dy, olho); px(g, x0 + 3, 16 + dy, olho); continue; }
    ret(g, x0, 13 + dy, x0 + 2, 13 + dy, olho); // cílios
    px(g, x0 + (x0 < 20 ? -1 : 3), 14 + dy, olho); // canto externo do olho
    ret(g, x0, 14 + dy, x0 + 2, 17 + dy, olho);
    ret(g, x0, 15 + dy, x0 + 2, 17 + dy, iris);
    ret(g, x0, 17 + dy, x0 + 2, 17 + dy, clareia(iris, 0.35));
    px(g, x0, 14 + dy, brilho); px(g, x0, 15 + dy, brilho); px(g, x0 + 2, 16 + dy, clareia(iris, 0.6));
  }
  ret(g, 12, 18 + dy, 13, 18 + dy, "#e8958a"); ret(g, 26, 18 + dy, 27, 18 + dy, "#e8958a"); // bochechas
  px(g, 12, 19 + dy, mistura("#e8958a", pele.base, 0.5)); px(g, 27, 19 + dy, mistura("#e8958a", pele.base, 0.5));
  px(g, 19, 17 + dy, pele.sombra); px(g, 20, 17 + dy, pele.sombra); // nariz
  ret(g, 18, 20 + dy, 21, 20 + dy, "#9a4a46"); px(g, 17, 19 + dy, "#9a4a46"); px(g, 22, 19 + dy, "#9a4a46"); px(g, 19, 21 + dy, "#c0706a"); px(g, 20, 21 + dy, "#c0706a"); // sorriso

  if (pal.capacete && CAPACETES_COROA.has(ids.capacete)) {
    cabelo(g, e.cfg.cabelo, cab, pele, dy);
    coroaDoItem(g, ids.capacete, pal.capacete, dy);
  } else if (pal.capacete) capaceteDoItem(g, ids.capacete, pal.capacete, dy, e.crista);
  else cabelo(g, e.cfg.cabelo, cab, pele, dy);

  const ph = e.acao ? e.ph : -1;
  let ponta = null;
  if (roupa.arma === "espada") ponta = espada(g, pal.arma, dy, ph, ids.arma);
  else if (roupa.arma === "arco") ponta = arco(g, pal.arma, dy, ph, ids.arma);
  else if (roupa.arma === "cajado") ponta = cajado(g, pal.arma, dy, ph, ids.arma);
  else if (roupa.arma === "grimorio") ponta = grimorio(g, pal.arma, dy, ph, ids.arma);

  // contorno estilo sticker
  const out = g.slice();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (g[y * W + x]) continue;
    const viz = (x > 0 && g[y * W + x - 1]) || (x < W - 1 && g[y * W + x + 1]) || (y > 0 && g[(y - 1) * W + x]) || (y < H - 1 && g[(y + 1) * W + x]);
    if (viz) out[y * W + x] = CONTORNO;
  }
  return { grid: out, ponta, arma: roupa.arma };
}

// Os itens comuns têm material próprio (couro marrom, pano bege); o resto usa a cor da raridade.
const MATERIAL = {
  "cap-couro": ["#8a5a2a", "#5e3c1a", "#b98a4e"], "col-couro": ["#8a5a2a", "#5e3c1a", "#b98a4e"], "cal-couro": ["#7a4e26", "#573518", "#a87a44"], "sap-couro": ["#6e4422", "#4a2c14", "#9a6a3a"],
  "col-pano": ["#b3a68c", "#867a64", "#d8ccb2"], "cal-pano": ["#9a8fa8", "#706680", "#c4b9d2"], "sap-pano": ["#b3a68c", "#867a64", "#d8ccb2"],
};

// paletas do que está equipado (e o id de cada peça, que decide o desenho)
export function paletasEquip(equip) {
  const pal = {};
  const ids = {};
  let crista = false;
  for (const slot of ["capacete", "colete", "calca", "sapato", "arma"]) {
    const it = equip && equip[slot] && itemEquip(equip[slot]);
    pal[slot] = it ? MATERIAL[it.id] || PALETA_RARIDADE[it.raridade] : null;
    ids[slot] = it ? it.id : null;
    if (slot === "capacete" && it && (it.raridade === "lendario" || it.raridade === "evento")) crista = true;
  }
  return { pal, crista, ids };
}
