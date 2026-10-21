import "./App.css";

// O Servo do Criador: um ajudante assustado e atrapalhado, na mesma pegada do
// Criador (capuz escuro, brilho roxo, coroa de espinhos), mas com cara de quem
// vive levando bronca. Sprite provisório em pixel art desenhado por código, até a
// arte final ficar pronta. Cada humor troca algumas linhas.
const PALETA = {
  d: "#6a56a3", // capuz
  f: "#171126", // sombra do rosto
  w: "#ffffff", // olhos
  k: "#171126", // pupilas
  m: "#f2ecff", // dentes
  p: "#d6c2ff", // brilho roxo
};

const BASE = [
  ".....p..p.p.....",
  "....pppppppp....",
  "....dddddddd....",
  "...dddddddddd...",
  "..dddffffffddd..",
  "..ddffffffffdd..",
  "..ddfwwffwwfdd..",
  "..ddfwkffwkfdd..",
  "..ddffffffffdd..",
  "..ddffmmmmffdd..",
  "...ddffmmffdd...",
  "...dddddddddd...",
  "..dpdddddddpdd..",
  "..dddddddddddd..",
  "...dd......dd...",
  "...pp......pp...",
];

// linhas trocadas em cada humor
const HUMORES = {
  neutro: {},
  feliz: { 9: "..ddfmmmmmmfdd..", 10: "...ddffmmffdd..." },
  aflito: { 7: "..ddfwwffwwfdd..", 9: "..ddfmffffmfdd..", 10: "...ddfmmmmfdd..." },
  bravo: { 5: "..ddppffffppdd..", 9: "..ddffmmmmffdd.." },
};

export default function Servo({ tamanho = 96, humor = "neutro", className = "" }) {
  const linhas = BASE.map((l, i) => HUMORES[humor]?.[i] ?? l);
  return (
    <svg
      className={"servo " + className}
      viewBox="0 0 16 16"
      width={tamanho}
      height={tamanho}
      shapeRendering="crispEdges"
      role="img"
      aria-label="O Servo do Criador"
    >
      {linhas.map((linha, y) =>
        [...linha].map((c, x) => (c === "." ? null : <rect key={x + "-" + y} x={x} y={y} width="1" height="1" fill={PALETA[c]} />))
      )}
    </svg>
  );
}
