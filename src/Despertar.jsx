import { useState, useEffect, useRef } from "react";
import "./App.css";

// A abertura: o Sistema "desperta" e fala com o jogador (efeito de digitação),
// logo depois de escolher o caminho. Toca uma vez só (o App guarda o flag).
const CLASSE_FALA = {
  "O Arquiteto": "Você constrói mundos com lógica pura. Algoritmos são o seu feitiço.",
  "O Estrategista": "Você transforma ideias em sistemas vivos — da visão ao deploy.",
  "O Sentinela": "Você defende as muralhas. Onde há uma falha, você chega primeiro.",
};

export default function Despertar({ classe, onConcluir }) {
  const falas = [
    { t: "sys", txt: "[ O SISTEMA DESPERTOU ]" },
    { t: "dim", txt: "Detectando candidato..." },
    { t: "dim", txt: "Candidato encontrado." },
    { t: "hi", txt: "Classe designada: " + classe },
    { t: "normal", txt: CLASSE_FALA[classe] || "O seu caminho foi registrado." },
    { t: "dim", txt: "Rank inicial atribuído: E" },
    { t: "normal", txt: "Uma masmorra se abriu diante de você. Cada monstro é um problema que já te trancou antes." },
    { t: "normal", txt: "Derrote-os e cresça. Ou aceite o Rank E para o resto da vida." },
    { t: "hi", txt: "Você aceita o chamado?" },
  ];

  const [mostradas, setMostradas] = useState([]);
  const [parcial, setParcial] = useState("");
  const [tipo, setTipo] = useState("normal");
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);
  const vivoRef = useRef(true);

  useEffect(() => {
    let li = 0, ci = 0;
    function passo() {
      if (!vivoRef.current) return;
      if (li >= falas.length) { setDone(true); return; }
      const linha = falas[li];
      setTipo(linha.t);
      if (ci <= linha.txt.length) {
        setParcial(linha.txt.slice(0, ci));
        ci++;
        timerRef.current = setTimeout(passo, 22);
      } else {
        setMostradas((m) => [...m, linha]);
        setParcial("");
        li++; ci = 0;
        timerRef.current = setTimeout(passo, 360);
      }
    }
    passo();
    return () => { vivoRef.current = false; clearTimeout(timerRef.current); };
  }, []);

  function pular() {
    vivoRef.current = false;
    clearTimeout(timerRef.current);
    setMostradas(falas);
    setParcial("");
    setDone(true);
  }

  return (
    <div className="despertar">
      <div className="sys-janela">
        <div className="sys-topo">
          <span className="sys-dot" /><span className="sys-dot" /><span className="sys-dot" />
          <span className="sys-titulo" translate="no">SISTEMA</span>
        </div>
        <div className="sys-corpo">
          {mostradas.map((l, i) => (
            <p key={i} className={"sys-linha " + l.t}>{l.txt}</p>
          ))}
          {!done && (
            <p className={"sys-linha " + tipo}>{parcial}<span className="sys-cursor">▍</span></p>
          )}
        </div>
        <div className="sys-acoes">
          {done ? (
            <button className="botao" onClick={onConcluir}>Aceitar o chamado</button>
          ) : (
            <button className="sys-pular" onClick={pular}>pular ▸</button>
          )}
        </div>
      </div>
    </div>
  );
}
