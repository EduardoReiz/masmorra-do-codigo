import "./App.css";

// Logo "MASMORRA DO CÓDIGO" com raízes enroladas: crescem ao aparecer, balançam
// devagar e têm veias roxas pulsando. Parte das raízes passa POR CIMA das letras
// (camada da frente), parte por trás — dá a ideia de enroladas no nome.
export default function Logo({ tamanho = "md" }) {
  return (
    <div className={"logo logo-" + tamanho} translate="no">
      <svg className="logo-raizes tras" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
        <g className="balanca">
          <path className="raiz" d="M4 79 C 10 62, 2 48, 14 38 S 26 18, 18 6" />
          <path className="raiz luz" d="M5 78 C 11 62, 3 48, 15 38 S 27 18, 19 7" />
          <path className="raiz fina" d="M14 38 C 24 34, 30 26, 40 28" />
          <path className="raiz" d="M296 79 C 284 66, 292 50, 276 44 S 250 30, 262 12" />
          <path className="raiz luz" d="M295 78 C 283 66, 291 50, 275 44 S 249 30, 261 13" />
          <path className="raiz fina" d="M276 44 C 266 52, 254 50, 246 58" />
          <path className="veia" d="M4 79 C 10 62, 2 48, 14 38 S 26 18, 18 6" />
          <path className="veia" d="M296 79 C 284 66, 292 50, 276 44 S 250 30, 262 12" />
        </g>
      </svg>
      <div className="logo-txt">
        <span className="logo-l1" data-txt="MASMORRA">MASMORRA</span>
        <span className="logo-l2">DO CÓDIGO</span>
      </div>
      <svg className="logo-raizes frente" viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
        <g className="balanca devagar">
          <path className="raiz fina" d="M18 8 C 26 26, 20 36, 40 38 S 92 34, 120 40 S 146 44, 156 37" />
          <path className="raiz fina" d="M262 12 C 248 8, 232 16, 224 30 S 210 42, 196 38" />
          <path className="raiz fina" d="M224 30 C 232 40, 240 44, 252 42" />
          <path className="veia" d="M18 8 C 26 26, 20 36, 40 38 S 92 34, 120 40 S 146 44, 156 37" />
          <path className="veia" d="M262 12 C 248 8, 232 16, 224 30 S 210 42, 196 38" />
          <circle className="espinho" cx="92" cy="36" r="1.6" />
          <circle className="espinho" cx="224" cy="30" r="1.6" />
        </g>
      </svg>
    </div>
  );
}
