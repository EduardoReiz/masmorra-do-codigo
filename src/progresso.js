// Guarda o progresso do jogador no navegador (localStorage). É o protótipo:
// no produto real isso vem do backend (ledger append-only). Aqui é só o
// suficiente para o jogo ter memória entre recargas da página.
// O RANK agora é calculado por competência em dados/exercicios.js (rankDe):
// não mora mais aqui, porque depende de quais chefes foram vencidos.
const CHAVE = "masmorra.progresso.v1";
const PADRAO = { xp: 0, derrotados: [], classe: null, despertou: false, itens: [], suspeitos: [], nivelado: false, avatar: null, conta: null, itensEquip: [], equip: {}, avisos: 0, sequencia: 0, melhorSequencia: 0, ultimoDia: null, subclasse: null, subclasseOferecida: false, personagem: null };

function arr(x) {
  return Array.isArray(x) ? x : [];
}

export function carregar() {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return { ...PADRAO };
    const p = JSON.parse(raw);
    return {
      ...PADRAO,
      ...p,
      derrotados: arr(p.derrotados),
      itens: arr(p.itens),
      suspeitos: arr(p.suspeitos),
      itensEquip: arr(p.itensEquip),
      equip: p.equip && typeof p.equip === "object" ? p.equip : {},
    };
  } catch {
    return { ...PADRAO };
  }
}

export function salvar(p) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(p));
  } catch {
    // modo anônimo ou storage bloqueado: segue sem persistir
  }
}

export function limpar() {
  try {
    localStorage.removeItem(CHAVE);
  } catch {
    // ignora
  }
}
