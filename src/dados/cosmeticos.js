import { rankDe, trackDe, rankDoJogador } from "./exercicios";
import { ehCriador } from "./criador";

const ehMonarcaDe = (classe) => (p) => p.classe === classe && rankDe(trackDe(p.classe), p.derrotados) === "S";

// Cosméticos do avatar (o "cartão de Caçador"). Cada peça tem um slot e pode
// ter um requisito: peças lendárias se desbloqueiam pelas conquistas do
// jogador (rank, feitos, itens). O avatar em si é um SIGILO pixelado gerado
// por código — aqui só definimos cor, moldura, aura e título.
const ORDEM = ["E", "D", "C", "B", "A", "S"];
const rankMin = (r) => (p) => ORDEM.indexOf(rankDoJogador(p)) >= ORDEM.indexOf(r);
const temFragmento = (p) => p.itens.includes("fragmento-portal");

// "cor" (do antigo sigilo) continua nos dados por compatibilidade, mas não é
// mais um slot visível: o quadro agora mostra o personagem.
export const SLOTS = [
  { id: "moldura", nome: "Moldura" },
  { id: "aura", nome: "Aura" },
  { id: "titulo", nome: "Título" },
];

export const COSMETICOS = [
  // --- cor do sigilo ---
  { id: "cor-ciano", slot: "cor", nome: "Ciano", valor: "#0beef5" },
  { id: "cor-roxo", slot: "cor", nome: "Roxo", valor: "#9b7cff" },
  { id: "cor-ambar", slot: "cor", nome: "Âmbar", valor: "#ffcf5c", req: rankMin("D"), comoObter: "Rank D" },
  { id: "cor-portal", slot: "cor", nome: "Vermelho de Portal", valor: "#ff3b47", lendario: true, req: temFragmento, comoObter: "Fragmento de Portal" },
  { id: "cor-monarca", slot: "cor", nome: "Ouro de Monarca", valor: "#ffd76a", lendario: true, req: rankMin("S"), comoObter: "Rank S" },
  { id: "cor-obsidiana", slot: "cor", nome: "Obsidiana", valor: "#a98fe0", lendario: true, exclusivo: true, req: ehCriador, comoObter: "O Criador" },

  // --- moldura do cartão ---
  // uma moldura por rank
  { id: "mold-simples", slot: "moldura", nome: "Pedra (E)", valor: "simples" },
  { id: "mold-bronze", slot: "moldura", nome: "Bronze (D)", valor: "bronze", req: rankMin("D"), comoObter: "Rank D" },
  { id: "mold-reforcada", slot: "moldura", nome: "Aço (C)", valor: "reforcada", req: rankMin("C"), comoObter: "Rank C" },
  { id: "mold-runica", slot: "moldura", nome: "Rúnica (B)", valor: "runica", req: rankMin("B"), comoObter: "Rank B" },
  { id: "mold-real", slot: "moldura", nome: "Real (A)", valor: "real", req: rankMin("A"), comoObter: "Rank A" },
  { id: "mold-coroa", slot: "moldura", nome: "Monarca (S)", valor: "coroa", lendario: true, req: rankMin("S"), comoObter: "Rank S" },

  // --- aura (brilho de fundo) ---
  { id: "aura-nenhuma", slot: "aura", nome: "Nenhuma", valor: "nenhuma" },
  { id: "aura-leve", slot: "aura", nome: "Leve", valor: "leve", req: (p) => p.derrotados.length >= 3, comoObter: "3 monstros" },
  { id: "aura-intensa", slot: "aura", nome: "Intensa", valor: "intensa", req: rankMin("B"), comoObter: "Rank B" },
  { id: "aura-fratura", slot: "aura", nome: "Fratura", valor: "fratura", lendario: true, req: temFragmento, comoObter: "Fragmento de Portal" },
  { id: "aura-chama-negra", slot: "aura", nome: "Chama Negra", valor: "chama-negra", lendario: true, exclusivo: true, req: ehCriador, comoObter: "O Criador" },

  // --- título ---
  { id: "tit-aspirante", slot: "titulo", nome: "Aspirante", valor: "Aspirante" },
  { id: "tit-despertado", slot: "titulo", nome: "Despertado", valor: "Despertado", req: (p) => p.despertou, comoObter: "Despertar do Sistema" },
  { id: "tit-cacador", slot: "titulo", nome: "Caçador", valor: "Caçador", req: (p) => p.derrotados.length >= 3, comoObter: "3 monstros" },
  { id: "tit-quebrador", slot: "titulo", nome: "Quebrador de Portais", valor: "Quebrador de Portais", lendario: true, req: temFragmento, comoObter: "Fragmento de Portal" },
  { id: "tit-soberano", slot: "titulo", nome: "Soberano", valor: "Soberano", lendario: true, req: rankMin("S"), comoObter: "Rank S" },
  { id: "tit-criador", slot: "titulo", nome: "O CRIADOR", valor: "O CRIADOR", lendario: true, exclusivo: true, req: ehCriador, comoObter: "Ser o Criador" },
  { id: "tit-preceptor", slot: "titulo", nome: "O Preceptor", valor: "O Preceptor", lendario: true, req: (p) => p.subclasse === "preceptor", comoObter: "Aceitar a subclasse de Monarca" },
  { id: "tit-monarca-arq", slot: "titulo", nome: "Monarca da Lógica", valor: "Monarca da Lógica", lendario: true, req: ehMonarcaDe("O Arquiteto"), comoObter: "Tornar-se Monarca (Arquiteto)" },
  { id: "tit-monarca-est", slot: "titulo", nome: "Monarca dos Dados", valor: "Monarca dos Dados", lendario: true, req: ehMonarcaDe("O Estrategista"), comoObter: "Tornar-se Monarca (Estrategista)" },
  { id: "tit-monarca-sen", slot: "titulo", nome: "Monarca das Muralhas", valor: "Monarca das Muralhas", lendario: true, req: ehMonarcaDe("O Sentinela"), comoObter: "Tornar-se Monarca (Sentinela)" },
  { id: "tit-monarca-ora", slot: "titulo", nome: "Monarca da Palavra", valor: "Monarca da Palavra", lendario: true, req: ehMonarcaDe("O Oráculo"), comoObter: "Tornar-se Monarca (Oráculo)" },
];

export const AVATAR_PADRAO = {
  cor: "cor-ciano",
  moldura: "mold-simples",
  aura: "aura-nenhuma",
  titulo: "tit-aspirante",
};

export function disponivel(progresso, opt) {
  return !opt.req || opt.req(progresso);
}

export function cosmetico(id) {
  return COSMETICOS.find((c) => c.id === id);
}

// Avatar equipado, com defaults e caindo pro padrão se uma peça equipada deixou
// de estar disponível (ex.: progresso resetado).
export function equipado(progresso) {
  const a = { ...AVATAR_PADRAO, ...(progresso.avatar || {}) };
  for (const slot of SLOTS) {
    const opt = cosmetico(a[slot.id]);
    if (!opt || !disponivel(progresso, opt)) a[slot.id] = AVATAR_PADRAO[slot.id];
  }
  return a;
}

// hash simples de string -> semente numérica (para o sigilo ser único por jogador)
export function semente(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
