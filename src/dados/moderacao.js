// Filtro básico de nome impróprio no cadastro. É só a 1ª camada (cliente): a
// moderação de verdade (lista completa, variações, denúncias) fica no servidor.
// Normaliza acentos e "leet" simples para pegar tentativas óbvias de burlar.
const BLOQUEADAS = [
  "viado", "veado", "puta", "puto", "caralho", "porra", "merda", "buceta",
  "cu", "fdp", "foda", "cuzao", "corno", "arrombado", "piroca", "pau no cu",
  "racista", "nazi", "nazista", "hitler", "estupr", "pedofil", "pnc", "bct",
  "fuck", "shit", "bitch", "nigg", "cunt", "rape", "nazi", "admin", "moderador",
];

function normaliza(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[13]/g, "i")
    .replace(/0/g, "o")
    .replace(/4/g, "a")
    .replace(/5/g, "s")
    .replace(/[^a-z ]/g, "");
}

export function nomeValido(nome) {
  const limpo = (nome || "").trim();
  if (limpo.length < 2) return { ok: false, motivo: "O nome precisa de pelo menos 2 letras." };
  if (limpo.length > 24) return { ok: false, motivo: "O nome pode ter no máximo 24 letras." };
  const norm = normaliza(limpo);
  const compacto = norm.replace(/ /g, "");
  for (const palavra of BLOQUEADAS) {
    if (norm.includes(palavra) || compacto.includes(palavra.replace(/ /g, ""))) {
      return { ok: false, motivo: "Esse nome não é permitido. Escolha outro." };
    }
  }
  return { ok: true };
}
