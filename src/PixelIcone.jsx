// Ícones em pixel art desenhados a partir de mapas de caracteres (12x12).
// Cada letra é uma cor da paleta do ícone; "." é transparente.
const ICONES = {
  mochila: {
    cores: { k: "#120e18", b: "#9a6430", B: "#6e431c", l: "#c08a4a", y: "#e8b84a", s: "#4e2e12" },
    mapa: [
      "....kkkk....",
      "...kssssk...",
      "..kkkkkkkk..",
      ".kllllllllk.",
      ".kBBBBBBBBk.",
      ".kbbbyybbbk.",
      ".kbbbyybbbk.",
      ".kbbbbbbbBk.",
      ".kbbbbbbbBk.",
      ".kbBbbbbBBk.",
      "..kkkkkkkk..",
      "............",
    ],
  },
  avatar: {
    cores: { k: "#120e18", h: "#6b3e1f", H: "#4a2a14", s: "#f3c9a0", S: "#d9a477", e: "#1a1420", c: "#2a7f8f", C: "#1c5a66" },
    mapa: [
      "...kkkkkk...",
      "..khhhhhhk..",
      ".khhhhhhHHk.",
      ".khsssssSHk.",
      ".ksesssesSk.",
      ".ksesssesSk.",
      ".kssssssSSk.",
      "..kSSSSSSk..",
      ".kcccccccCk.",
      "kccccccccCCk",
      "kccccccccCCk",
      ".kkkkkkkkkk.",
    ],
  },
  perfil: {
    cores: { k: "#120e18", p: "#e8dcb8", P: "#b8a880", l: "#7a6a4a", r: "#b83a3a" },
    mapa: [
      ".kkkkkkkkkk.",
      "kPppppppppPk",
      ".kpllllllpk.",
      ".kppppppppk.",
      ".kplllllppk.",
      ".kppppppppk.",
      ".kpllllllpk.",
      ".kppppppppk.",
      ".kpllllrrpk.",
      "kPppppprrpPk",
      ".kkkkkkkkkk.",
      "............",
    ],
  },
  dominio: {
    cores: { k: "#120e18", a: "#8a2be2", b: "#2a0a3a", c: "#0b0410", w: "#c9aeff" },
    mapa: [
      ".....k......",
      "....kak.....",
      "....kak..k..",
      "...kaaak.ka.",
      "..kabaak.kak",
      "..kabbak.kak",
      ".kabbbbakabk",
      ".kabwbbaabbk",
      ".kabbcbbabbk",
      ".kabcccbbbk.",
      "..kbccccbk..",
      "...kkkkkk...",
    ],
  },
  capacete: {
    cores: { k: "#120e18", m: "#8b93a3", M: "#5d6474", w: "#c8d0dc" },
    mapa: [
      "............",
      "...kkkkkk...",
      "..kwmmmmMk..",
      ".kwmmmmmmMk.",
      ".kmmmmmmmMk.",
      ".kMMMMMMMMk.",
      ".km.kkkk.Mk.",
      ".km.kMMk.Mk.",
      ".km..kk..Mk.",
      ".kk......kk.",
      "............",
      "............",
    ],
  },
  colete: {
    cores: { k: "#120e18", m: "#8b93a3", M: "#5d6474", w: "#c8d0dc" },
    mapa: [
      "............",
      ".kkk....kkk.",
      "kwmmkkkkmmMk",
      "kmmmmmmmmmMk",
      ".kmwmmmmmMk.",
      ".kmmmmmmmMk.",
      ".kmMMMMMMMk.",
      ".kmmmmmmmMk.",
      ".kmmmmmmmMk.",
      "..kkkkkkkk..",
      "............",
      "............",
    ],
  },
  calca: {
    cores: { k: "#120e18", m: "#5d6474", M: "#3e4352", w: "#8b93a3" },
    mapa: [
      "............",
      "..kkkkkkkk..",
      "..kwmmmmMk..",
      "..kmmmmmMk..",
      "..kmmkkmMk..",
      "..kmmkkmMk..",
      "..kwmkkwMk..",
      "..kmmkkmMk..",
      "..kmmkkmMk..",
      "..kkkkkkkk..",
      "............",
      "............",
    ],
  },
  sapato: {
    cores: { k: "#120e18", b: "#7a4e28", B: "#4e2e12", l: "#a87442" },
    mapa: [
      "............",
      "............",
      "..kkk..kkk..",
      "..klk..klk..",
      "..kbk..kbk..",
      "..kbk..kbk..",
      ".kkbk.kkbk..",
      "kbbbBkbbbBk.",
      "kBBBBkBBBBk.",
      ".kkkk.kkkk..",
      "............",
      "............",
    ],
  },
  arma: {
    cores: { k: "#120e18", w: "#ffffff", s: "#dfe4ec", S: "#9aa3b2", g: "#a07a3a", h: "#5a3a24" },
    mapa: [
      "..........kk",
      ".........kwk",
      "........kssk",
      ".......kssk.",
      "......kssk..",
      ".....kssk...",
      "..k.kSsk....",
      "..kgkSk.....",
      "...kgk......",
      "..khkgk.....",
      ".khk..k.....",
      ".kk.........",
    ],
  },
  arco: {
    cores: { k: "#120e18", s: "#8a5a2a", S: "#5e3c1a", w: "#ece4d4" },
    mapa: [
      "...kk.......",
      "..ksSk......",
      "..ks.kw.....",
      ".ks...kw....",
      ".ks....w....",
      ".kS....w....",
      ".kS....w....",
      ".ks...kw....",
      "..ks.kw.....",
      "..ksSk......",
      "...kk.......",
      "............",
    ],
  },
  cajado: {
    cores: { k: "#120e18", s: "#3ab8d8", S: "#1f7a94", w: "#dff8ff", b: "#6a4a2a" },
    mapa: [
      "....kkk.....",
      "...kwsSk....",
      "...kssSk....",
      "....kkk.....",
      ".....kbk....",
      ".....kbk....",
      ".....kbk....",
      ".....kbk....",
      ".....kbk....",
      ".....kbk....",
      ".....kbk....",
      ".....kkk....",
    ],
  },
  grimorio: {
    cores: { k: "#120e18", s: "#7a2a3a", S: "#4e1a26", w: "#c9a0f0", y: "#e0b84a", p: "#f0e6c8" },
    mapa: [
      "............",
      "..kkkkkkkk..",
      "..kSsssssk..",
      "..kSswwssk..",
      "..kSsswssk..",
      "..kSssyssk..",
      "..kSsswssk..",
      "..kSswwssk..",
      "..kSsssssk..",
      "..kSppppppk.",
      "..kkkkkkkkk.",
      "............",
    ],
  },
  cadeado: {
    cores: { k: "#120e18", g: "#8b93a3", y: "#c8a040", Y: "#8a6a20", d: "#2a2010" },
    mapa: [
      "............",
      "....kkkk....",
      "...kgkkgk...",
      "...kg..gk...",
      "..kkkkkkkk..",
      "..kyyyyyYk..",
      "..kyyddyYk..",
      "..kyyddyYk..",
      "..kyyyyyYk..",
      "..kkkkkkkk..",
      "............",
      "............",
    ],
  },
};

export const NOMES_ICONES = Object.keys(ICONES);

// Ícones da navegação com arte do jogo (public/emblemas/nav). Os demais seguem
// desenhados em código (os de equipamento são tingidos pela raridade).
const ARTE_NAV = { mochila: "nav-mochila", avatar: "nav-avatar", perfil: "nav-perfil", dominio: "nav-dominio" };

export default function PixelIcone({ nome, tamanho = 36, cor, className = "" }) {
  if (ARTE_NAV[nome] && !cor) {
    return <img className={"pxicone pxarte " + className} src={`/emblemas/nav/${ARTE_NAV[nome]}.png`} width={tamanho} height={tamanho} alt="" aria-hidden="true" draggable="false" />;
  }
  const ic = ICONES[nome];
  if (!ic) return null;
  const rects = [];
  ic.mapa.forEach((linha, y) => {
    for (let x = 0; x < linha.length; x++) {
      const ch = linha[x];
      if (ch === ".") continue;
      // "cor" opcional tinge as cores principais (m/M/w) — usado pra raridade
      let c = ic.cores[ch];
      if (cor && (ch === "m" || ch === "s")) c = cor[0];
      if (cor && (ch === "M" || ch === "S")) c = cor[1];
      if (cor && ch === "w") c = cor[2];
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.02" height="1.02" fill={c} />);
    }
  });
  return (
    <svg className={"pxicone " + className} viewBox="0 0 12 12" width={tamanho} height={tamanho} shapeRendering="crispEdges" aria-hidden="true">
      {rects}
    </svg>
  );
}
