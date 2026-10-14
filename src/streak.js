// Sequência diária (streak). Conta dias seguidos de acesso e dá bônus de XP
// crescente. PROTÓTIPO: usa o relógio local e o navegador — burlável; o streak
// real (à prova de fraude, entre dispositivos) é no servidor.

function hojeStr(d = new Date()) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

// Registra a visita de hoje: mantém a sequência se foi ontem, reinicia se houve
// buraco, não faz nada se já contou hoje.
export function registrarDia(p) {
  const hoje = hojeStr();
  if (p.ultimoDia === hoje) return p;
  let seq = 1;
  if (p.ultimoDia) {
    const dias = Math.round((Date.parse(hoje) - Date.parse(p.ultimoDia)) / 86400000);
    if (dias === 1) seq = (p.sequencia || 0) + 1;
  }
  const melhor = Math.max(p.melhorSequencia || 0, seq);
  return { ...p, ultimoDia: hoje, sequencia: seq, melhorSequencia: melhor };
}

// Bônus de XP por dias de sequência (30+ = VIP).
export function bonusXp(seq) {
  if (seq >= 30) return 0.25;
  if (seq >= 14) return 0.15;
  if (seq >= 7) return 0.10;
  if (seq >= 3) return 0.05;
  return 0;
}

const MARCOS = [3, 7, 14, 30];

// Próximo marco de bônus: {dias, bonus} ou null se já no topo.
export function proximoMarco(seq) {
  for (const m of MARCOS) if (seq < m) return { dias: m, bonus: bonusXp(m) };
  return null;
}
