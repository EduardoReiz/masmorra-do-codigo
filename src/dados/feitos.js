import { trackDe, rankDe } from "./exercicios";

// Feitos (conquistas). Cada um é uma função pura do progresso: ganho ou não.
// Deriva de derrotados/itens/rank — não precisa de storage próprio. "oculto"
// aparece como "???" enquanto não é ganho.
export const FEITOS = [
  {
    id: "primeiro-sangue", nome: "Primeiro Sangue", oculto: false,
    desc: "Derrote o seu primeiro monstro.",
    checa: (p) => p.derrotados.length >= 1,
  },
  {
    id: "cacador", nome: "Caçador", oculto: false,
    desc: "Derrote 3 monstros.",
    checa: (p) => p.derrotados.length >= 3,
  },
  {
    id: "ascensao", nome: "Ascensão", oculto: false,
    desc: "Vença um Exame e saia do Rank E.",
    checa: (p) => rankDe(trackDe(p.classe), p.derrotados) !== "E",
  },
  {
    id: "quebrador-de-portais", nome: "Quebrador de Portais", oculto: false,
    desc: "Vença uma missão com o portal fraturado.",
    checa: (p) => p.itens.includes("fragmento-portal"),
  },
  {
    id: "mestre-de-armas", nome: "Mestre de Armas", oculto: false,
    desc: "Derrote 8 monstros.",
    checa: (p) => p.derrotados.length >= 8,
  },
  {
    id: "conquistador", nome: "Conquistador", oculto: false,
    desc: "Limpe a masmorra inteira.",
    checa: (p) => p.derrotados.length >= trackDe(p.classe).length,
  },
  {
    id: "soberano", nome: "Soberano", oculto: false,
    desc: "Alcance o Rank S.",
    checa: (p) => rankDe(trackDe(p.classe), p.derrotados) === "S",
  },
  {
    id: "constancia", nome: "Constância", oculto: false,
    desc: "Mantenha 7 dias seguidos.",
    checa: (p) => (p.melhorSequencia || 0) >= 7,
  },
  {
    id: "disciplina", nome: "Disciplina", oculto: false,
    desc: "Mantenha 30 dias seguidos (VIP).",
    checa: (p) => (p.melhorSequencia || 0) >= 30,
  },
  {
    id: "monarca-adormecido", nome: "Monarca Adormecido", oculto: true,
    desc: "Um feito que só o tempo revela.",
    // reservado para o "Monarca do Tempo" (dominar 2 linguagens em 6 meses):
    // ainda não dá para medir aqui no protótipo.
    checa: () => false,
  },
];

export function feitosDe(progresso) {
  return FEITOS.map((f) => ({ ...f, ganho: f.checa(progresso) }));
}
