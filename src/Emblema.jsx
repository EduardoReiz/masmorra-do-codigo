import "./App.css";

// Emblemas com a arte do jogo (public/emblemas). O escudo de rank vem sem
// letra (a IA erra escrita), então a letra é desenhada por cima.
const ARTE_FEITO = { "quebrador-de-portais": "quebra-portal", "mestre-de-armas": "mestre-armas" };

export function RankEmblema({ rank, tamanho = 40, monarca = false, className = "" }) {
  if (!rank) return null;
  const arq = monarca ? "monarca" : String(rank).toLowerCase();
  return (
    <span className={"rank-emblema " + className} style={{ "--t": tamanho + "px" }} translate="no">
      <img src={`/emblemas/ranks/rank-${arq}.png`} alt="" draggable="false" />
      <b>{rank}</b>
    </span>
  );
}

export function FeitoEmblema({ id, ganho, tamanho = 44 }) {
  const arq = ARTE_FEITO[id] || id;
  return (
    <img
      className={"feito-emblema" + (ganho ? "" : " travado")}
      src={`/emblemas/feitos/feito-${arq}.png`}
      width={tamanho}
      height={tamanho}
      alt=""
      draggable="false"
    />
  );
}
