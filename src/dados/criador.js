// Identidade do CRIADOR (Eduardo, o criador de tudo). No protótipo o
// reconhecimento é pela conta local (e-mail). A tranca real — o domínio que só
// ele acessa — só existe com autenticação no servidor; aqui é "porteira de
// madeira", reconhecendo o e-mail do dono. O e-mail NÃO sai do navegador.
const EMAIL_CRIADOR = "criador@exemplo.com";

export function ehCriador(progresso) {
  const email = progresso?.conta?.email;
  return !!email && email.trim().toLowerCase() === EMAIL_CRIADOR;
}

// Qual arte do Criador aparece: com alguma peça exclusiva vestida ele usa a armadura
// escolhida (1 a 3); sem armadura, usa a roupa escolhida (1 a 3). Arte que ainda não
// existe cai na arte principal (criador-heroi).
export const OPCOES_CRIADOR = [1, 2, 3];
export function quadroDoCriador(progresso) {
  const eq = progresso?.equip || {};
  const armado = ["capacete", "colete", "calca", "sapato"].some((s) => typeof eq[s] === "string" && eq[s].startsWith("cri-"));
  return armado ? `criador-armadura-${progresso?.criadorArmadura || 1}` : `criador-roupa-${progresso?.criadorRoupa || 1}`;
}

// avatar exclusivo do Criador (aplicado por padrão quando ele entra)
export const AVATAR_CRIADOR = {
  cor: "cor-obsidiana",
  moldura: "mold-coroa",
  aura: "aura-chama-negra",
  titulo: "tit-criador",
};

// os monstros TEMEM o Criador: quando ele erra, imploram em vez de zoar
export const FALAS_REVERENTE = [
  "Perdoe-me, meu mestre... eu jamais ousaria feri-lo.",
  "O deslize foi meu, não seu. Tente outra vez, Criador.",
  "Eu me recuso a derrotá-lo. Comande novamente.",
  "Levante-se, meu senhor. Eu aguardo às suas ordens.",
  "Falhar diante de você é a minha vergonha, não a sua.",
];

export function falaReverente() {
  return FALAS_REVERENTE[(Math.random() * FALAS_REVERENTE.length) | 0];
}
