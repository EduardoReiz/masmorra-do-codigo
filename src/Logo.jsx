import "./App.css";

// Logo "MASMORRA DO CÓDIGO" com a arte do jogo (nome + raízes, já escrito
// certo). De vez em quando o Sistema "falha" e o logo dá um glitch.
export default function Logo({ tamanho = "md" }) {
  return (
    <div className={"logo logo-arte logo-" + tamanho} translate="no">
      <img className="logo-img" src="/logo/logo-texto.png" alt="Masmorra do Código" draggable="false" />
      <img className="logo-img logo-glitch" src="/logo/logo-texto.png" alt="" aria-hidden="true" draggable="false" />
    </div>
  );
}
