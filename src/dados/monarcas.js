// Cada classe tem o SEU Monarca (o ápice daquele caminho). Usado na Ascensão
// a Monarca e no título lendário desbloqueado ao chegar no Rank S.
export const MONARCAS = {
  "O Arquiteto": { titulo: "Monarca da Lógica", cor: "#0beef5", cosmetico: "tit-monarca-arq", arte: "monarca-logica" },
  "O Estrategista": { titulo: "Monarca dos Dados", cor: "#9b7cff", cosmetico: "tit-monarca-est", arte: "monarca-dados" },
  "O Sentinela": { titulo: "Monarca das Muralhas", cor: "#ffcf5c", cosmetico: "tit-monarca-sen", arte: "monarca-muralhas" },
  "O Oráculo": { titulo: "Monarca da Palavra", cor: "#b06bff", cosmetico: "tit-monarca-ora", arte: "monarca-palavra" },
};

export function monarcaDe(classe) {
  return MONARCAS[classe] || { titulo: "Monarca", cor: "#ffd76a", cosmetico: null };
}
