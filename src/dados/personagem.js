// Opções do personagem pixelado. O jogador escolhe pele e cabelo; a roupa base
// vem da classe e as peças equipadas (capacete/colete/calça/bota/arma) trocam
// o visual pela cor da raridade.

export const PELES = [
  { id: 0, nome: "Clara", base: "#f3c9a0", sombra: "#d9a477" },
  { id: 1, nome: "Média", base: "#d9a066", sombra: "#b07a45" },
  { id: 2, nome: "Morena", base: "#a8714a", sombra: "#7f5233" },
  { id: 3, nome: "Escura", base: "#6b4a33", sombra: "#4b3222" },
];

export const CABELOS = [
  { id: "curto", nome: "Curto" },
  { id: "espetado", nome: "Espetado" },
  { id: "longo", nome: "Longo" },
  { id: "careca", nome: "Raspado" },
];

export const CORES_CABELO = [
  { id: "castanho", nome: "Castanho", base: "#6b3e1f", sombra: "#4a2a14" },
  { id: "preto", nome: "Preto", base: "#2a2730", sombra: "#18161d" },
  { id: "loiro", nome: "Loiro", base: "#e0b84a", sombra: "#b08a2a" },
  { id: "ruivo", nome: "Ruivo", base: "#c0502a", sombra: "#8a3418" },
  { id: "branco", nome: "Branco", base: "#dcdce6", sombra: "#a8a8b8" },
  { id: "azul", nome: "Azul", base: "#3a6fd8", sombra: "#244a9a" },
];

// roupa base (sem armadura) de cada classe
export const ROUPA_CLASSE = {
  "O Arquiteto": { tunica: ["#2a7f8f", "#1c5a66"], calca: ["#3a3550", "#28243a"], bota: ["#5a3a24", "#3e2818"], arma: "espada" },
  "O Estrategista": { tunica: ["#4f7a3a", "#365528"], calca: ["#5a4632", "#3e3022"], bota: ["#4a3a2a", "#33281c"], arma: "arco" },
  "O Sentinela": { tunica: ["#2f4f7f", "#1f3558"], calca: ["#3a3a46", "#28283a"], bota: ["#3e3a36", "#2a2724"], arma: "cajado" },
  "O Oráculo": { tunica: ["#5b3a8a", "#3e2763"], calca: ["#5b3a8a", "#3e2763"], bota: ["#3a2a4a", "#281c33"], arma: "grimorio", manto: true },
};

// paleta de armadura por raridade [base, sombra, brilho]
export const PALETA_RARIDADE = {
  comum: ["#8b93a3", "#5d6474", "#b8c0cc"],
  raro: ["#4f7fd8", "#2f4f9a", "#8fb4f0"],
  epico: ["#9b5fd8", "#5f348f", "#c9a0f0"],
  lendario: ["#e8b84a", "#a8782a", "#fff0b0"],
  evento: ["#d84a4a", "#8a2a2a", "#ff9a8a"],
};

export const PERSONAGEM_PADRAO = { pele: 0, cabelo: "curto", corCabelo: "castanho" };

export function configPersonagem(progresso) {
  return { ...PERSONAGEM_PADRAO, ...(progresso?.personagem || {}) };
}
