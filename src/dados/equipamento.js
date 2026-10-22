// Sistema de equipamento. Os sprites (pixel-art) vêm de um asset pack: cada
// item procura /itens/<id>.png e, enquanto o arquivo não existe, o ItemIcon
// desenha um placeholder procedural. Assim o sistema já funciona hoje e a arte
// real só "encaixa" quando os PNGs forem colocados em public/itens/.

export const RARIDADES = {
  comum: { nome: "Comum", cor: "#9aa6bf", ordem: 0 },
  raro: { nome: "Raro", cor: "#5aa0ff", ordem: 1 },
  epico: { nome: "Épico", cor: "#b06bff", ordem: 2 },
  lendario: { nome: "Lendário", cor: "#ffcf5c", ordem: 3 },
  evento: { nome: "Evento", cor: "#ff5f6d", ordem: 4 }, // só cai em eventos (servidor)
  criador: { nome: "Do Criador", cor: "#a98fe0", ordem: 5 }, // exclusivo, nunca cai
};

export const SLOTS_EQUIP = [
  { id: "capacete", nome: "Capacete" },
  { id: "colete", nome: "Colete" },
  { id: "calca", nome: "Calça" },
  { id: "sapato", nome: "Sapato" },
  { id: "arma", nome: "Arma" },
];

// cada caminho usa um tipo de arma
export const ARMA_POR_CLASSE = {
  "O Arquiteto": "espada",
  "O Estrategista": "arco",
  "O Sentinela": "cajado",
  "O Oráculo": "grimorio",
};
export const NOME_ARMA = { espada: "Espada", arco: "Arco", cajado: "Cajado", grimorio: "Grimório" };

export const ITENS = [
  // ---- capacete ----
  { id: "cap-couro", slot: "capacete", raridade: "comum", nome: "Capuz de Couro" },
  { id: "cap-ferro", slot: "capacete", raridade: "comum", nome: "Elmo de Ferro" },
  { id: "cap-bronze", slot: "capacete", raridade: "raro", nome: "Elmo de Bronze Rúnico" },
  { id: "cap-tempestade", slot: "capacete", raridade: "epico", nome: "Elmo da Tempestade" },
  { id: "cap-monarca", slot: "capacete", raridade: "lendario", nome: "Coroa do Monarca" },
  { id: "cap-portal", slot: "capacete", raridade: "evento", nome: "Elmo do Portal Carmesim" },
  // ---- colete ----
  { id: "col-pano", slot: "colete", raridade: "comum", nome: "Túnica de Pano" },
  { id: "col-couro", slot: "colete", raridade: "comum", nome: "Peitoral de Couro" },
  { id: "col-malha", slot: "colete", raridade: "raro", nome: "Cota de Malha" },
  { id: "col-dragao", slot: "colete", raridade: "epico", nome: "Peitoral do Dragão" },
  { id: "col-monarca", slot: "colete", raridade: "lendario", nome: "Armadura do Monarca" },
  { id: "col-portal", slot: "colete", raridade: "evento", nome: "Peitoral de Portal" },
  // ---- calça ----
  { id: "cal-pano", slot: "calca", raridade: "comum", nome: "Calça de Pano" },
  { id: "cal-couro", slot: "calca", raridade: "comum", nome: "Perneira de Couro" },
  { id: "cal-malha", slot: "calca", raridade: "raro", nome: "Grevas de Malha" },
  { id: "cal-runica", slot: "calca", raridade: "epico", nome: "Perneiras Rúnicas" },
  { id: "cal-monarca", slot: "calca", raridade: "lendario", nome: "Perneiras do Monarca" },
  { id: "cal-portal", slot: "calca", raridade: "evento", nome: "Grevas de Portal" },
  // ---- sapato ----
  { id: "sap-pano", slot: "sapato", raridade: "comum", nome: "Sapato de Pano" },
  { id: "sap-couro", slot: "sapato", raridade: "comum", nome: "Bota de Couro" },
  { id: "sap-ferro", slot: "sapato", raridade: "raro", nome: "Botas de Ferro" },
  { id: "sap-vento", slot: "sapato", raridade: "epico", nome: "Botas do Vento" },
  { id: "sap-monarca", slot: "sapato", raridade: "lendario", nome: "Botas do Monarca" },
  { id: "sap-portal", slot: "sapato", raridade: "evento", nome: "Botas de Portal" },
  // ---- armas: espada (Arquiteto) ----
  { id: "esp-enferrujada", slot: "arma", armaTipo: "espada", raridade: "comum", nome: "Espada Enferrujada" },
  { id: "esp-aco", slot: "arma", armaTipo: "espada", raridade: "raro", nome: "Espada de Aço" },
  { id: "esp-rubra", slot: "arma", armaTipo: "espada", raridade: "epico", nome: "Lâmina Rubra" },
  { id: "esp-monarca", slot: "arma", armaTipo: "espada", raridade: "lendario", nome: "Espada do Monarca" },
  // ---- armas: arco (Estrategista) ----
  { id: "arc-caca", slot: "arma", armaTipo: "arco", raridade: "comum", nome: "Arco de Caça" },
  { id: "arc-recurvo", slot: "arma", armaTipo: "arco", raridade: "raro", nome: "Arco Recurvo" },
  { id: "arc-tempestade", slot: "arma", armaTipo: "arco", raridade: "epico", nome: "Arco da Tempestade" },
  { id: "arc-monarca", slot: "arma", armaTipo: "arco", raridade: "lendario", nome: "Arco do Monarca" },
  // ---- armas: cajado (Sentinela) ----
  { id: "caj-aprendiz", slot: "arma", armaTipo: "cajado", raridade: "comum", nome: "Cajado de Aprendiz" },
  { id: "caj-cristal", slot: "arma", armaTipo: "cajado", raridade: "raro", nome: "Cajado de Cristal" },
  { id: "caj-arcano", slot: "arma", armaTipo: "cajado", raridade: "epico", nome: "Cajado Arcano" },
  { id: "caj-monarca", slot: "arma", armaTipo: "cajado", raridade: "lendario", nome: "Cajado do Monarca" },
  // ---- armas: grimório (Oráculo) ----
  { id: "gri-rascunho", slot: "arma", armaTipo: "grimorio", raridade: "comum", nome: "Grimório de Rascunhos" },
  { id: "gri-cifra", slot: "arma", armaTipo: "grimorio", raridade: "raro", nome: "Grimório Cifrado" },
  { id: "gri-eco", slot: "arma", armaTipo: "grimorio", raridade: "epico", nome: "Grimório do Eco" },
  { id: "gri-monarca", slot: "arma", armaTipo: "grimorio", raridade: "lendario", nome: "Grimório do Monarca" },

  // ---- exclusivos do Criador: não caem em drop e só aparecem na conta dele ----
  { id: "cri-coroa", slot: "capacete", raridade: "criador", exclusivo: true, nome: "Coroa de Espinhos Negros" },
  { id: "cri-manto", slot: "colete", raridade: "criador", exclusivo: true, nome: "Manto da Chama Negra" },
  { id: "cri-grevas", slot: "calca", raridade: "criador", exclusivo: true, nome: "Grevas do Abismo" },
  { id: "cri-botas", slot: "sapato", raridade: "criador", exclusivo: true, nome: "Botas do Vazio" },
  { id: "cri-lamina", slot: "arma", armaTipo: "espada", raridade: "criador", exclusivo: true, nome: "Lâmina do Criador" },
  { id: "cri-grimorio", slot: "arma", armaTipo: "grimorio", raridade: "criador", exclusivo: true, nome: "Grimório do Criador" },
];

export function item(id) {
  return ITENS.find((i) => i.id === id);
}

function escolhePeso(pesos) {
  const soma = Object.values(pesos).reduce((a, b) => a + b, 0);
  let x = Math.random() * soma;
  for (const [k, v] of Object.entries(pesos)) if ((x -= v) <= 0) return k;
  return Object.keys(pesos)[0];
}

// Sorteia um drop ao vencer. Variância de raridade: comum é o mais provável;
// fratura e chefe empurram para cima. Itens de "evento" NÃO caem aqui (só em
// eventos do servidor). Pode devolver null (sem drop).
// Chance de cair item e peso de cada raridade, por tipo de vitória, já com os bônus do equipamento.
export function chancesDrop({ chefe, fraturado, buffs } = {}) {
  const b = buffs || { xp: 0, drop: 0, sorte: 0 };
  const chance = chefe || fraturado ? 1 : Math.min(1, 0.45 + b.drop / 100);
  let pesos = { comum: 56, raro: 28, epico: 12, lendario: 4 };
  if (fraturado) pesos = { comum: 20, raro: 38, epico: 30, lendario: 12 };
  if (chefe) pesos = { comum: 10, raro: 30, epico: 40, lendario: 20 };
  const k = 1 + b.sorte / 100; // a sorte empurra o peso para o raro, o épico e o lendário
  pesos = { comum: pesos.comum, raro: pesos.raro * k, epico: pesos.epico * k, lendario: pesos.lendario * k };
  const soma = Object.values(pesos).reduce((a, c) => a + c, 0);
  const pct = Object.fromEntries(Object.entries(pesos).map(([r, v]) => [r, (v / soma) * 100]));
  return { chance, pesos, pct };
}

// Do raro para cima, cada peça equipada dá um bônus conforme o espaço. Itens do Criador não têm bônus.
const BUFF_SLOT = { capacete: "xp", colete: "drop", calca: "sorte", sapato: "xp", arma: "xp" };
const BUFF_VALOR = {
  raro: { xp: 3, drop: 5, sorte: 10 },
  epico: { xp: 6, drop: 10, sorte: 20 },
  lendario: { xp: 10, drop: 15, sorte: 30 },
  evento: { xp: 10, drop: 15, sorte: 30 },
};
const BUFF_ROTULO = {
  xp: (v) => `+${v}% de XP`,
  drop: (v) => `+${v} pontos na chance de drop`,
  sorte: (v) => `+${v}% de chance de item raro ou melhor`,
};
export function buffDe(it) {
  const valores = it && BUFF_VALOR[it.raridade];
  if (!valores || it.exclusivo) return null;
  const tipo = BUFF_SLOT[it.slot];
  return { tipo, valor: valores[tipo], rotulo: BUFF_ROTULO[tipo](valores[tipo]) };
}
export function buffsTotais(equip) {
  const t = { xp: 0, drop: 0, sorte: 0 };
  for (const id of Object.values(equip || {})) {
    const b = id && buffDe(item(id));
    if (b) t[b.tipo] += b.valor;
  }
  return t;
}

export function sortearDrop(classe, { chefe, fraturado, buffs } = {}) {
  const { chance, pesos } = chancesDrop({ chefe, fraturado, buffs });
  if (Math.random() > chance) return null;
  const raridade = escolhePeso(pesos);
  const tipoArma = ARMA_POR_CLASSE[classe];
  const pool = ITENS.filter(
    (it) => !it.exclusivo && it.raridade === raridade && (it.slot !== "arma" || it.armaTipo === tipoArma)
  );
  if (!pool.length) return null;
  return pool[(Math.random() * pool.length) | 0].id;
}

// itens que o jogador pode equipar (arma filtrada pela classe)
export function equipaveisDaClasse(classe) {
  const tipoArma = ARMA_POR_CLASSE[classe];
  return ITENS.filter((it) => it.slot !== "arma" || it.armaTipo === tipoArma);
}
