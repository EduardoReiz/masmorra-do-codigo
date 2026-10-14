import { useState } from "react";
import PixelIcone from "./PixelIcone";
import { PALETA_RARIDADE } from "./dados/personagem";

// Ícone de um item. Se existir o sprite do asset pack em /itens/<id>.png, usa
// ele; senão desenha o ícone em pixel art do TIPO do item, tingido pela cor da
// raridade (capacete, peitoral, calça, bota, espada, arco, cajado, grimório).
const ICONE_DA_ARMA = { espada: "arma", arco: "arco", cajado: "cajado", grimorio: "grimorio" };

export function nomeIcone(item) {
  if (item.slot === "arma") return ICONE_DA_ARMA[item.armaTipo] || "arma";
  return item.slot;
}

export default function ItemIcon({ item, tamanho = 40 }) {
  const [semPng, setSemPng] = useState(false);
  if (semPng) return <PixelIcone nome={nomeIcone(item)} tamanho={tamanho} cor={PALETA_RARIDADE[item.raridade]} />;
  return (
    <img
      src={`/itens/${item.id}.png`}
      alt={item.nome}
      width={tamanho}
      height={tamanho}
      style={{ imageRendering: "pixelated" }}
      onError={() => setSemPng(true)}
    />
  );
}
