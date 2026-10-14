import { PELES, CORES_CABELO, ROUPA_CLASSE, PALETA_RARIDADE } from "./personagem";
import { item as itemEquip } from "./equipamento";

// Motor do sprite do personagem (JS puro, sem React): monta a grade 20x24 em
// camadas e passa o contorno. Usado pelo componente Personagem e por testes.
export const W = 20;
export const H = 24;
const CONTORNO = "#120e18";

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
  for (let n = 0; n < 60; n++) {
    px(g, x0, y0, c);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 >= dy) { err += dy; x0 += sx; }
    if (e2 <= dx) { err += dx; y0 += sy; }
  }
}
const lerp = (a, b, t) => a + (b - a) * t;
const suave = (t) => t * t * (3 - 2 * t);

// ---------- partes ----------
function cabelo(g, estilo, c, pele, dy) {
  if (estilo === "careca") { px(g, 7, 2 + dy, pele.sombra); px(g, 12, 3 + dy, pele.sombra); px(g, 8, 2 + dy, "#ffffff22"); return; }
  ret(g, 6, 1 + dy, 13, 1 + dy, c.base);
  ret(g, 5, 2 + dy, 14, 4 + dy, c.base);
  ret(g, 13, 2 + dy, 14, 4 + dy, c.sombra);
  px(g, 9, 4 + dy, pele.base); px(g, 12, 4 + dy, pele.base); // franja repartida
  ret(g, 5, 5 + dy, 5, 7 + dy, c.base); ret(g, 14, 5 + dy, 14, 7 + dy, c.sombra);
  if (estilo === "espetado") {
    px(g, 6, 0 + dy, c.base); px(g, 9, 0 + dy, c.base); px(g, 12, 0 + dy, c.sombra);
    px(g, 4, 2 + dy, c.base); px(g, 15, 3 + dy, c.sombra);
  }
  if (estilo === "longo") { ret(g, 5, 5 + dy, 5, 9 + dy, c.base); ret(g, 14, 5 + dy, 14, 9 + dy, c.sombra); }
}

function capacete(g, p, dy, crista) {
  ret(g, 6, 0 + dy, 13, 0 + dy, p[0]);
  ret(g, 5, 1 + dy, 14, 4 + dy, p[0]);
  ret(g, 13, 0 + dy, 14, 4 + dy, p[1]);
  ret(g, 4, 3 + dy, 4, 8 + dy, p[0]); ret(g, 15, 3 + dy, 15, 8 + dy, p[1]);
  ret(g, 4, 5 + dy, 15, 5 + dy, p[1]);
  px(g, 7, 1 + dy, p[2]); px(g, 8, 1 + dy, p[2]); px(g, 7, 2 + dy, p[2]);
  ret(g, 9, 6 + dy, 10, 6 + dy, p[1]); // proteção do nariz
  if (crista) { ret(g, 8, 0 + dy, 11, 0 + dy, "#d83a3a"); px(g, 9, 0 + dy, "#ff6a5a"); }
}

function anguloEspada(ph) {
  const idle = -Math.PI / 2 + 0.25, atras = -Math.PI / 2 - 1.0, frente = 0.9;
  if (ph < 0) return idle;
  if (ph < 0.3) return lerp(idle, atras, suave(ph / 0.3));
  if (ph < 0.5) return lerp(atras, frente, suave((ph - 0.3) / 0.2));
  if (ph < 0.75) return frente;
  return lerp(frente, idle, suave((ph - 0.75) / 0.25));
}

function espada(g, r, dy, ph) {
  const lamina = r ? r[2] : "#dfe4ec", fio = r ? r[0] : "#9aa3b2", guarda = r ? r[0] : "#a07a3a";
  const ox = 14, oy = 14 + dy, a = anguloEspada(ph), L = 7;
  const cx = Math.cos(a), cy = Math.sin(a);
  for (let i = 1; i <= L; i++) px(g, ox + cx * i, oy + cy * i, i === L ? "#ffffff" : lamina);
  for (let i = 1; i < L; i++) px(g, ox + cx * i - cy * 0.9, oy + cy * i + cx * 0.9, fio);
  linha(g, ox - cy * 1.6, oy + cx * 1.6, ox + cy * 1.6, oy - cx * 1.6, guarda);
  linha(g, ox, oy, ox - cx * 2, oy - cy * 2, "#5a3a24");
  return { x: ox + cx * L, y: oy + cy * L };
}

function arco(g, r, dy, ph) {
  const madeira = r ? r[0] : "#8a5a2a", sombra = r ? r[1] : "#5e3c1a", corda = "#ece4d4";
  const cy = 14 + dy;
  for (let y = 8; y <= 20; y++) {
    const d = Math.abs(y - 14);
    const x = d <= 4 ? 17 : d === 5 ? 16 : 15;
    px(g, x, y + dy, d <= 4 ? madeira : sombra);
  }
  let puxa = 0;
  if (ph >= 0 && ph < 0.5) puxa = suave(ph / 0.5) * 3;
  else if (ph >= 0.5 && ph < 0.55) puxa = 3;
  const xm = 15 - puxa;
  linha(g, 15, 8 + dy, xm, cy, corda);
  linha(g, xm, cy, 15, 20 + dy, corda);
  if (ph >= 0 && ph < 0.55) {
    linha(g, xm, cy, 19, cy, "#c8b090");
    px(g, 19, cy, "#dfe4ec"); px(g, xm, cy - 1, "#d84a4a"); px(g, xm, cy + 1, "#d84a4a");
  }
  return { x: 19, y: cy };
}

function cajado(g, r, dy, ph) {
  const gema = r ? r[0] : "#3ab8d8", brilho = r ? r[2] : "#bff6ff";
  const sobe = ph >= 0 && ph < 0.8 ? Math.round(suave(Math.min(1, ph / 0.25)) * 2) : 0;
  const topo = 5 + dy - sobe;
  ret(g, 15, topo, 15, 21, "#6a4a2a"); ret(g, 16, topo + 3, 16, 21, "#4a3218");
  px(g, 14, topo, "#6a4a2a"); px(g, 16, topo, "#6a4a2a");
  const ativo = ph >= 0.25 && ph < 0.8;
  ret(g, 14, topo - 3, 16, topo - 1, ativo ? brilho : gema);
  px(g, 15, topo - 2, ativo ? "#ffffff" : brilho);
  return { x: 15, y: topo - 2 };
}

function grimorio(g, r, dy, ph) {
  const capa = r ? r[0] : "#7a2a3a", lombada = r ? r[1] : "#4e1a26";
  const aberto = ph >= 0.1 && ph < 0.9;
  if (aberto) {
    ret(g, 9, 13 + dy, 16, 15 + dy, "#f0e6c8");
    ret(g, 12, 13 + dy, 13, 15 + dy, "#c8bc98");
    ret(g, 9, 16 + dy, 16, 16 + dy, capa);
    px(g, 10, 14 + dy, "#8a7a5a"); px(g, 15, 14 + dy, "#8a7a5a");
  } else {
    ret(g, 11, 13 + dy, 15, 16 + dy, capa);
    ret(g, 11, 13 + dy, 11, 16 + dy, lombada);
    ret(g, 15, 14 + dy, 15, 15 + dy, "#f0e6c8");
    px(g, 13, 14 + dy, "#e0b84a");
  }
  return { x: 12.5, y: 12 + dy };
}

// Monta o sprite completo de um quadro.
export function montarSprite(e) {
  const g = novoGrid();
  const pele = PELES[e.cfg.pele] || PELES[0];
  const cab = CORES_CABELO.find((c) => c.id === e.cfg.corCabelo) || CORES_CABELO[0];
  const roupa = ROUPA_CLASSE[e.classe] || ROUPA_CLASSE["O Arquiteto"];
  const { dy, pal } = e;
  const tun = pal.colete || roupa.tunica;
  const cal = pal.calca || roupa.calca;
  const bot = pal.sapato || roupa.bota;
  const manto = roupa.manto && !pal.calca;

  if (e.cfg.cabelo === "longo" && !pal.capacete) {
    ret(g, 4, 5 + dy, 4, 13 + dy, cab.base); ret(g, 15, 5 + dy, 15, 13 + dy, cab.sombra);
  }
  if (manto) {
    ret(g, 7, 16, 12, 19, tun[0]); ret(g, 6, 18, 13, 19, tun[0]);
    ret(g, 12, 16, 13, 19, tun[1]); ret(g, 6, 19, 13, 19, tun[1]);
  } else {
    ret(g, 7, 16, 12, 17, cal[0]); ret(g, 7, 18, 9, 19, cal[0]); ret(g, 10, 18, 12, 19, cal[0]);
    ret(g, 12, 16, 12, 19, cal[1]); ret(g, 9, 18, 9, 19, cal[1]);
    if (pal.calca) { px(g, 8, 18, pal.calca[2]); px(g, 11, 18, pal.calca[2]); }
  }
  ret(g, 6, 20, 9, 21, bot[0]); ret(g, 10, 20, 13, 21, bot[0]);
  ret(g, 6, 21, 9, 21, bot[1]); ret(g, 10, 21, 13, 21, bot[1]);
  if (pal.sapato) { px(g, 7, 20, pal.sapato[2]); px(g, 11, 20, pal.sapato[2]); }

  ret(g, 7, 11 + dy, 12, 15 + dy, tun[0]); ret(g, 12, 11 + dy, 12, 15 + dy, tun[1]);
  if (pal.colete) { px(g, 8, 12 + dy, pal.colete[2]); px(g, 8, 13 + dy, pal.colete[2]); }
  else { px(g, 9, 11 + dy, tun[1]); px(g, 10, 11 + dy, tun[1]); px(g, 9, 12 + dy, tun[1]); }
  ret(g, 7, 15 + dy, 12, 15 + dy, "#3a2a1c"); px(g, 9, 15 + dy, "#e0b84a"); px(g, 10, 15 + dy, "#e0b84a");

  ret(g, 5, 11 + dy, 5, 14 + dy, tun[0]); ret(g, 6, 11 + dy, 6, 14 + dy, tun[1]);
  ret(g, 13, 11 + dy, 13, 14 + dy, tun[1]); ret(g, 14, 11 + dy, 14, 14 + dy, tun[0]); ret(g, 14, 12 + dy, 14, 14 + dy, tun[1]);
  px(g, 5, 11 + dy, tun[0]); px(g, 14, 11 + dy, tun[0]);
  // vinco entre braço e tronco (lê como braço separado)
  ret(g, 6, 12 + dy, 6, 14 + dy, "#1a1626"); ret(g, 13, 12 + dy, 13, 14 + dy, "#1a1626");
  if (pal.colete) {
    ret(g, 4, 10 + dy, 7, 11 + dy, pal.colete[0]); ret(g, 12, 10 + dy, 15, 11 + dy, pal.colete[1]);
    px(g, 4, 10 + dy, pal.colete[2]); px(g, 13, 10 + dy, pal.colete[0]);
  }
  px(g, 5, 15 + dy, pele.base); px(g, 14, 15 + dy, pele.sombra);

  ret(g, 5, 2 + dy, 14, 10 + dy, pele.base);
  ret(g, 14, 3 + dy, 14, 10 + dy, pele.sombra); ret(g, 5, 10 + dy, 14, 10 + dy, pele.sombra);
  apaga(g, 5, 2 + dy); apaga(g, 14, 2 + dy); apaga(g, 5, 10 + dy); apaga(g, 14, 10 + dy);
  const olho = "#1a1420";
  if (e.piscar) { px(g, 8, 8 + dy, olho); px(g, 11, 8 + dy, olho); }
  else { ret(g, 8, 7 + dy, 8, 8 + dy, olho); ret(g, 11, 7 + dy, 11, 8 + dy, olho); }
  px(g, 7, 9 + dy, "#e8958a"); px(g, 12, 9 + dy, "#e8958a");
  px(g, 9, 9 + dy, pele.sombra); px(g, 10, 9 + dy, pele.sombra);

  if (pal.capacete) capacete(g, pal.capacete, dy, e.crista);
  else cabelo(g, e.cfg.cabelo, cab, pele, dy);

  const ph = e.acao ? e.ph : -1;
  let ponta = null;
  if (roupa.arma === "espada") ponta = espada(g, pal.arma, dy, ph);
  else if (roupa.arma === "arco") ponta = arco(g, pal.arma, dy, ph);
  else if (roupa.arma === "cajado") ponta = cajado(g, pal.arma, dy, ph);
  else if (roupa.arma === "grimorio") ponta = grimorio(g, pal.arma, dy, ph);

  // contorno estilo sticker
  const out = g.slice();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (g[y * W + x]) continue;
    const viz = (x > 0 && g[y * W + x - 1]) || (x < W - 1 && g[y * W + x + 1]) || (y > 0 && g[(y - 1) * W + x]) || (y < H - 1 && g[(y + 1) * W + x]);
    if (viz) out[y * W + x] = CONTORNO;
  }
  return { grid: out, ponta, arma: roupa.arma };
}

// paletas do que está equipado
export function paletasEquip(equip) {
  const pal = {};
  let crista = false;
  for (const slot of ["capacete", "colete", "calca", "sapato", "arma"]) {
    const it = equip && equip[slot] && itemEquip(equip[slot]);
    pal[slot] = it ? PALETA_RARIDADE[it.raridade] : null;
    if (slot === "capacete" && it && (it.raridade === "lendario" || it.raridade === "evento")) crista = true;
  }
  return { pal, crista };
}

