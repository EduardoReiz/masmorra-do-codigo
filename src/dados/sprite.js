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

// Cada capacete tem o seu desenho (a cor vem da raridade, a forma vem do item).
// "coroa" = desenhada por cima do cabelo; os outros cobrem a cabeça.
const CAPACETES_COROA = new Set(["cap-monarca", "cri-coroa"]);
function capaceteDoItem(g, id, p, dy, crista) {
  switch (id) {
    case "cap-couro": // capuz: deixa só o rosto à mostra
      ret(g, 6, 0 + dy, 13, 0 + dy, p[0]);
      ret(g, 5, 1 + dy, 14, 3 + dy, p[0]);
      ret(g, 4, 2 + dy, 4, 9 + dy, p[0]); ret(g, 15, 2 + dy, 15, 9 + dy, p[1]);
      ret(g, 5, 4 + dy, 6, 6 + dy, p[0]); ret(g, 13, 4 + dy, 14, 6 + dy, p[1]);
      ret(g, 7, 4 + dy, 12, 4 + dy, p[1]);
      ret(g, 13, 0 + dy, 14, 3 + dy, p[1]);
      px(g, 8, 1 + dy, p[2]); px(g, 7, 2 + dy, p[2]);
      return;
    case "cap-bronze": // elmo com aro e runa dourados
      capacete(g, p, dy, false);
      ret(g, 5, 1 + dy, 14, 1 + dy, p[2]);
      px(g, 9, 3 + dy, p[2]); px(g, 10, 3 + dy, p[2]); px(g, 10, 2 + dy, p[2]);
      ret(g, 4, 6 + dy, 4, 8 + dy, p[2]);
      return;
    case "cap-tempestade": // elmo alado
      capacete(g, p, dy, false);
      px(g, 3, 2 + dy, p[2]); px(g, 2, 1 + dy, p[2]); px(g, 3, 1 + dy, p[0]); px(g, 2, 0 + dy, p[2]);
      px(g, 16, 2 + dy, p[2]); px(g, 17, 1 + dy, p[2]); px(g, 16, 1 + dy, p[1]); px(g, 17, 0 + dy, p[2]);
      return;
    case "cap-portal": // elmo com chifres
      capacete(g, p, dy, false);
      ret(g, 4, 0 + dy, 4, 1 + dy, p[0]); px(g, 3, 0 + dy, p[2]);
      ret(g, 15, 0 + dy, 15, 1 + dy, p[1]); px(g, 16, 0 + dy, p[2]);
      px(g, 8, 4 + dy, p[2]); px(g, 11, 4 + dy, p[2]);
      return;
    default: // cap-ferro e qualquer outro: elmo liso
      capacete(g, p, dy, crista);
  }
}
function coroaDoItem(g, id, p, dy) {
  if (id === "cri-coroa") { // coroa de espinhos negros
    ret(g, 5, 1 + dy, 14, 1 + dy, p[0]);
    for (const x of [5, 7, 9, 11, 13]) { px(g, x, 0 + dy, p[1]); }
    px(g, 6, 0 + dy, p[2]); px(g, 10, 0 + dy, p[2]); px(g, 14, 0 + dy, p[2]);
    return;
  }
  // coroa do Monarca
  ret(g, 6, 1 + dy, 13, 2 + dy, p[0]);
  ret(g, 12, 1 + dy, 13, 2 + dy, p[1]);
  for (const x of [6, 8, 10, 12]) px(g, x, 0 + dy, p[2]);
  px(g, 13, 0 + dy, p[1]);
  px(g, 9, 1 + dy, "#d83a3a"); px(g, 11, 1 + dy, "#3a8ad8");
}

function anguloEspada(ph) {
  const idle = -Math.PI / 2 + 0.25, atras = -Math.PI / 2 - 1.0, frente = 0.9;
  if (ph < 0) return idle;
  if (ph < 0.3) return lerp(idle, atras, suave(ph / 0.3));
  if (ph < 0.5) return lerp(atras, frente, suave((ph - 0.3) / 0.2));
  if (ph < 0.75) return frente;
  return lerp(frente, idle, suave((ph - 0.75) / 0.25));
}

const COMPRIMENTO_ESPADA = { "esp-enferrujada": 6, "esp-aco": 7, "esp-rubra": 8, "esp-monarca": 8, "cri-lamina": 9 };
function espada(g, r, dy, ph, id) {
  let lamina = r ? r[2] : "#dfe4ec", fio = r ? r[0] : "#9aa3b2", guarda = r ? r[0] : "#a07a3a";
  if (id === "esp-enferrujada") { lamina = "#b08458"; fio = "#7a5230"; guarda = "#6a4a2a"; } // ferrugem
  const ox = 14, oy = 14 + dy, a = anguloEspada(ph), L = COMPRIMENTO_ESPADA[id] || 7;
  const cx = Math.cos(a), cy = Math.sin(a);
  for (let i = 1; i <= L; i++) px(g, ox + cx * i, oy + cy * i, i === L ? "#ffffff" : lamina);
  for (let i = 1; i < L; i++) px(g, ox + cx * i - cy * 0.9, oy + cy * i + cx * 0.9, fio);
  linha(g, ox - cy * 1.6, oy + cx * 1.6, ox + cy * 1.6, oy - cx * 1.6, guarda);
  linha(g, ox, oy, ox - cx * 2, oy - cy * 2, "#5a3a24");
  if (id === "esp-monarca") { px(g, ox - cy * 1.6, oy + cx * 1.6, "#ffe9a0"); px(g, ox + cy * 1.6, oy - cx * 1.6, "#ffe9a0"); }
  if (id === "esp-rubra") for (let i = 2; i < L; i += 2) px(g, ox + cx * i, oy + cy * i, "#ff6a5a");
  return { x: ox + cx * L, y: oy + cy * L };
}

function arco(g, r, dy, ph, id) {
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
  // enfeites por arco: pontas curvas (recurvo), gema (tempestade) e adorno dourado (monarca)
  if (id === "arc-recurvo" || id === "arc-tempestade" || id === "arc-monarca") { px(g, 14, 7 + dy, madeira); px(g, 14, 21 + dy, madeira); }
  if (id === "arc-tempestade") px(g, 17, 14 + dy, "#6ad8ff");
  if (id === "arc-monarca") { px(g, 17, 13 + dy, "#ffe9a0"); px(g, 17, 15 + dy, "#ffe9a0"); px(g, 16, 8 + dy, "#ffe9a0"); px(g, 16, 20 + dy, "#ffe9a0"); }
  const xm = 15 - puxa;
  linha(g, 15, 8 + dy, xm, cy, corda);
  linha(g, xm, cy, 15, 20 + dy, corda);
  if (ph >= 0 && ph < 0.55) {
    linha(g, xm, cy, 19, cy, "#c8b090");
    px(g, 19, cy, "#dfe4ec"); px(g, xm, cy - 1, "#d84a4a"); px(g, xm, cy + 1, "#d84a4a");
  }
  return { x: 19, y: cy };
}

function cajado(g, r, dy, ph, id) {
  const gema = r ? r[0] : "#3ab8d8", brilho = r ? r[2] : "#bff6ff";
  const sobe = ph >= 0 && ph < 0.8 ? Math.round(suave(Math.min(1, ph / 0.25)) * 2) : 0;
  const topo = 5 + dy - sobe;
  ret(g, 15, topo, 15, 21, "#6a4a2a"); ret(g, 16, topo + 3, 16, 21, "#4a3218");
  px(g, 14, topo, "#6a4a2a"); px(g, 16, topo, "#6a4a2a");
  const ativo = ph >= 0.25 && ph < 0.8;
  const cor = ativo ? brilho : gema;
  if (id === "caj-aprendiz") { ret(g, 15, topo - 2, 15, topo - 1, cor); px(g, 14, topo - 1, "#6a4a2a"); px(g, 16, topo - 1, "#6a4a2a"); }
  else if (id === "caj-cristal") { px(g, 15, topo - 4, cor); ret(g, 14, topo - 3, 16, topo - 2, cor); px(g, 15, topo - 1, cor); }
  else if (id === "caj-arcano") { ret(g, 14, topo - 3, 16, topo - 1, cor); px(g, 13, topo - 2, brilho); px(g, 17, topo - 2, brilho); px(g, 15, topo - 4, brilho); }
  else if (id === "caj-monarca") { ret(g, 14, topo - 3, 16, topo - 1, cor); for (const x of [14, 15, 16]) px(g, x, topo - 4, "#ffe9a0"); px(g, 13, topo - 3, "#ffe9a0"); px(g, 17, topo - 3, "#ffe9a0"); }
  else ret(g, 14, topo - 3, 16, topo - 1, cor);
  px(g, 15, topo - 2, ativo ? "#ffffff" : brilho);
  return { x: 15, y: topo - 2 };
}

function grimorio(g, r, dy, ph, id) {
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
  // detalhes por grimório: folhas soltas (rascunho), fecho (cifra), runas (eco) e cantos de ouro (monarca)
  if (id === "gri-rascunho") { px(g, 16, 12 + dy, "#f0e6c8"); px(g, 10, 12 + dy, "#f0e6c8"); }
  if (id === "gri-cifra") { px(g, aberto ? 12 : 13, 16 + dy, "#c0c8d8"); px(g, aberto ? 13 : 13, 16 + dy, "#c0c8d8"); }
  if (id === "gri-eco") { px(g, aberto ? 11 : 12, 14 + dy, "#bff6ff"); px(g, aberto ? 14 : 13, 15 + dy, "#bff6ff"); }
  if (id === "gri-monarca") { for (const [x, y] of aberto ? [[9, 16], [16, 16], [9, 13], [16, 13]] : [[11, 13], [15, 13], [11, 16], [15, 16]]) px(g, x, y + dy, "#ffe9a0"); }
  return { x: 12.5, y: 12 + dy };
}

// ---------- peças do corpo por item ----------
function estiloColete(g, id, p, dy) {
  if (!p) return;
  switch (id) {
    case "col-couro": // tiras cruzadas
      linha(g, 7, 11 + dy, 12, 15 + dy, p[1]); linha(g, 12, 11 + dy, 7, 15 + dy, p[1]);
      break;
    case "col-malha": // anéis de malha
      for (let y = 11; y <= 14; y++) for (let x = 7; x <= 12; x++) if ((x + y) % 2 === 0) px(g, x, y + dy, p[2]);
      break;
    case "col-dragao": // escamas e espinhos nos ombros
      for (let y = 11; y <= 14; y += 2) for (let x = 7; x <= 12; x++) if (x % 2 === 0) px(g, x, y + dy, p[2]);
      px(g, 4, 9 + dy, p[2]); px(g, 15, 9 + dy, p[2]);
      break;
    case "col-monarca": // gola e peito de ouro
      ret(g, 8, 11 + dy, 11, 11 + dy, p[2]); ret(g, 9, 13 + dy, 10, 13 + dy, p[2]);
      px(g, 4, 10 + dy, p[2]); px(g, 15, 10 + dy, p[2]);
      break;
    case "col-portal": // núcleo de portal brilhando
      ret(g, 9, 12 + dy, 10, 13 + dy, p[2]);
      break;
    case "cri-manto": // manto longo que desce até as pernas
      ret(g, 6, 15 + dy, 13, 19, p[0]); ret(g, 12, 15 + dy, 13, 19, p[1]); ret(g, 6, 19, 13, 19, p[1]);
      ret(g, 9, 12 + dy, 10, 12 + dy, p[2]);
      break;
    default:
  }
}
function estiloCalca(g, id, p) {
  if (!p) return;
  switch (id) {
    case "cal-couro": ret(g, 7, 18, 9, 18, p[1]); ret(g, 10, 18, 12, 18, p[1]); break; // tira no joelho
    case "cal-malha": for (let y = 16; y <= 19; y++) for (let x = 7; x <= 12; x++) if ((x + y) % 2 === 0) px(g, x, y, p[2]); break;
    case "cal-runica": px(g, 8, 17, p[2]); px(g, 11, 17, p[2]); px(g, 8, 19, p[2]); px(g, 11, 19, p[2]); break;
    case "cal-monarca": ret(g, 7, 16, 7, 19, p[2]); ret(g, 12, 16, 12, 19, p[2]); break; // faixas douradas
    case "cal-portal": ret(g, 9, 16, 10, 17, p[2]); px(g, 8, 19, p[2]); px(g, 11, 19, p[2]); break;
    case "cri-grevas": px(g, 8, 17, p[2]); px(g, 11, 18, p[2]); px(g, 9, 19, p[2]); break;
    default:
  }
}
function estiloSapato(g, id, p) {
  if (!p) return;
  switch (id) {
    case "sap-couro": ret(g, 6, 19, 9, 19, p[0]); ret(g, 10, 19, 13, 19, p[0]); px(g, 7, 19, p[2]); px(g, 12, 19, p[2]); break; // cano alto
    case "sap-ferro": ret(g, 6, 19, 9, 19, p[1]); ret(g, 10, 19, 13, 19, p[1]); px(g, 7, 20, p[2]); px(g, 12, 20, p[2]); px(g, 6, 21, p[2]); px(g, 13, 21, p[2]); break;
    case "sap-vento": px(g, 5, 20, p[2]); px(g, 4, 19, p[2]); px(g, 4, 20, p[0]); px(g, 14, 20, p[2]); px(g, 15, 19, p[2]); px(g, 15, 20, p[0]); break; // asinhas
    case "sap-monarca": ret(g, 6, 20, 9, 20, p[2]); ret(g, 10, 20, 13, 20, p[2]); break;
    case "sap-portal": px(g, 6, 19, p[2]); px(g, 13, 19, p[2]); px(g, 7, 20, p[2]); px(g, 12, 20, p[2]); break;
    case "cri-botas": ret(g, 6, 19, 9, 19, p[0]); ret(g, 10, 19, 13, 19, p[0]); px(g, 7, 21, p[2]); px(g, 12, 21, p[2]); px(g, 5, 21, p[2]); px(g, 14, 21, p[2]); break;
    default:
  }
}

// Monta o sprite completo de um quadro.
export function montarSprite(e) {
  const g = novoGrid();
  const pele = PELES[e.cfg.pele] || PELES[0];
  const cab = CORES_CABELO.find((c) => c.id === e.cfg.corCabelo) || CORES_CABELO[0];
  const roupa = ROUPA_CLASSE[e.classe] || ROUPA_CLASSE["O Arquiteto"];
  const { dy, pal } = e;
  const ids = e.ids || {}; // qual item está equipado em cada espaço (cada um tem o seu desenho)
  const tun = pal.colete || roupa.tunica;
  const cal = pal.calca || roupa.calca;
  const bot = pal.sapato || roupa.bota;
  const manto = roupa.manto && !pal.calca;

  if (e.cfg.cabelo === "longo" && (!pal.capacete || CAPACETES_COROA.has(ids.capacete))) {
    ret(g, 4, 5 + dy, 4, 13 + dy, cab.base); ret(g, 15, 5 + dy, 15, 13 + dy, cab.sombra);
  }
  if (manto) {
    ret(g, 7, 16, 12, 19, tun[0]); ret(g, 6, 18, 13, 19, tun[0]);
    ret(g, 12, 16, 13, 19, tun[1]); ret(g, 6, 19, 13, 19, tun[1]);
  } else {
    ret(g, 7, 16, 12, 17, cal[0]); ret(g, 7, 18, 9, 19, cal[0]); ret(g, 10, 18, 12, 19, cal[0]);
    ret(g, 12, 16, 12, 19, cal[1]); ret(g, 9, 18, 9, 19, cal[1]);
    estiloCalca(g, ids.calca, pal.calca);
  }
  ret(g, 6, 20, 9, 21, bot[0]); ret(g, 10, 20, 13, 21, bot[0]);
  ret(g, 6, 21, 9, 21, bot[1]); ret(g, 10, 21, 13, 21, bot[1]);
  estiloSapato(g, ids.sapato, pal.sapato);

  ret(g, 7, 11 + dy, 12, 15 + dy, tun[0]); ret(g, 12, 11 + dy, 12, 15 + dy, tun[1]);
  if (pal.colete) { px(g, 8, 12 + dy, pal.colete[2]); px(g, 8, 13 + dy, pal.colete[2]); }
  else { px(g, 9, 11 + dy, tun[1]); px(g, 10, 11 + dy, tun[1]); px(g, 9, 12 + dy, tun[1]); }
  ret(g, 7, 15 + dy, 12, 15 + dy, "#3a2a1c"); px(g, 9, 15 + dy, "#e0b84a"); px(g, 10, 15 + dy, "#e0b84a");

  ret(g, 5, 11 + dy, 5, 14 + dy, tun[0]); ret(g, 6, 11 + dy, 6, 14 + dy, tun[1]);
  ret(g, 13, 11 + dy, 13, 14 + dy, tun[1]); ret(g, 14, 11 + dy, 14, 14 + dy, tun[0]); ret(g, 14, 12 + dy, 14, 14 + dy, tun[1]);
  px(g, 5, 11 + dy, tun[0]); px(g, 14, 11 + dy, tun[0]);
  // vinco entre braço e tronco (lê como braço separado)
  ret(g, 6, 12 + dy, 6, 14 + dy, "#1a1626"); ret(g, 13, 12 + dy, 13, 14 + dy, "#1a1626");
  if (pal.colete && ids.colete !== "col-pano") { // a túnica de pano não tem ombreiras
    ret(g, 4, 10 + dy, 7, 11 + dy, pal.colete[0]); ret(g, 12, 10 + dy, 15, 11 + dy, pal.colete[1]);
    px(g, 4, 10 + dy, pal.colete[2]); px(g, 13, 10 + dy, pal.colete[0]);
  }
  estiloColete(g, ids.colete, pal.colete, dy);
  px(g, 5, 15 + dy, pele.base); px(g, 14, 15 + dy, pele.sombra);

  ret(g, 5, 2 + dy, 14, 10 + dy, pele.base);
  ret(g, 14, 3 + dy, 14, 10 + dy, pele.sombra); ret(g, 5, 10 + dy, 14, 10 + dy, pele.sombra);
  apaga(g, 5, 2 + dy); apaga(g, 14, 2 + dy); apaga(g, 5, 10 + dy); apaga(g, 14, 10 + dy);
  const olho = "#1a1420";
  if (e.piscar) { px(g, 8, 8 + dy, olho); px(g, 11, 8 + dy, olho); }
  else { ret(g, 8, 7 + dy, 8, 8 + dy, olho); ret(g, 11, 7 + dy, 11, 8 + dy, olho); }
  px(g, 7, 9 + dy, "#e8958a"); px(g, 12, 9 + dy, "#e8958a");
  px(g, 9, 9 + dy, pele.sombra); px(g, 10, 9 + dy, pele.sombra);

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

