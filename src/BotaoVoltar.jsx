import "./App.css";

// Botão "voltar" no estilo do logo: raiz enrolada que cresce, seta que pulsa e
// se desloca para trás no hover, brilho roxo.
export default function BotaoVoltar({ onClick, texto = "voltar" }) {
  return (
    <button className="voltar" onClick={onClick}>
      <svg className="voltar-raiz" viewBox="0 0 110 34" preserveAspectRatio="none" aria-hidden="true">
        <path className="raiz fina" d="M3 33 C 10 26, 4 16, 14 10 S 30 4, 40 8" />
        <path className="raiz fina" d="M107 1 C 100 8, 106 18, 96 24 S 80 30, 70 26" />
      </svg>
      <span className="voltar-seta" aria-hidden="true">◀</span>
      <span className="voltar-txt">{texto}</span>
    </button>
  );
}
