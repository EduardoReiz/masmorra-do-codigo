import "./App.css";
import Personagem from "./Personagem";
import CriadorPixel from "./CriadorPixel";
import { ehCriador, quadroDoCriador } from "./dados/criador";
import { RankEmblema } from "./Emblema";
import { equipado, cosmetico } from "./dados/cosmeticos";

// Retrato do jogador: o personagem pixelado dentro da moldura do rank, com a
// aura equipada. Usado na HUD, no Avatar e na Mochila.
export default function Retrato({ progresso, tamanho = 192, rank, animado = true, acoes = true, compacto = false }) {
  const eq = equipado(progresso);
  const moldura = cosmetico(eq.moldura)?.valor || "simples";
  const aura = cosmetico(eq.aura)?.valor || "nenhuma";
  return (
    <div className={`quadro mold-${moldura}` + (compacto ? " compacto" : "")}>
      {ehCriador(progresso)
        ? <CriadorPixel quadro={quadroDoCriador(progresso)} tamanho={Math.round(tamanho * 0.92)} linhas={tamanho > 120 ? 96 : 56} className="retrato-criador" />
        : <Personagem progresso={progresso} tamanho={tamanho} aura={aura} animado={animado} acoes={acoes} />}
      <RankEmblema rank={rank} tamanho={compacto ? 24 : 44} className="quadro-rank" />
    </div>
  );
}
