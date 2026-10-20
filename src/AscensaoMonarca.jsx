import { useState, useEffect, useRef } from "react";
import "./App.css";

// Ascensão a MONARCA: ao alcançar o Rank S, o Sistema estremece (glitch) e
// desperta uma SUBCLASSE SECRETA — O Preceptor (o Mentor). O jogador aceita ou
// recusa. Mentorar outros AO VIVO é recurso de servidor; aqui fica a identidade.
export default function AscensaoMonarca({ monarca, onAceitar, onRecusar }) {
  const nomeMonarca = (monarca && monarca.titulo) || "Monarca";
  const corMonarca = (monarca && monarca.cor) || "#ffd76a";
  const arte = monarca && monarca.arte;
  const FALAS = [
    { t: "dim", txt: "O Sistema estremece..." },
    { t: "dim", txt: "Nenhum rank acima resta." },
    { t: "hi", txt: `Você alcançou o ápice. Você é o ${nomeMonarca}.` },
    { t: "normal", txt: "Mas o topo revela uma porta que poucos enxergam..." },
    { t: "sys", txt: "SUBCLASSE SECRETA DESPERTA: O PRECEPTOR — aquele que ensina." },
    { t: "hi", txt: "Aceita o fardo de guiar outros Caçadores?" },
  ];
  const [mostradas, setMostradas] = useState([]);
  const [parcial, setParcial] = useState("");
  const [tipo, setTipo] = useState("normal");
  const [fim, setFim] = useState(false);
  const [escolha, setEscolha] = useState(null); // "aceitou" | "recusou"
  const timerRef = useRef(null);
  const vivoRef = useRef(true);

  useEffect(() => {
    vivoRef.current = true; // o StrictMode desmonta e remonta: religa antes de digitar
    let li = 0, ci = 0;
    function passo() {
      if (!vivoRef.current) return;
      if (li >= FALAS.length) { setFim(true); return; }
      const linha = FALAS[li];
      setTipo(linha.t);
      if (ci <= linha.txt.length) {
        setParcial(linha.txt.slice(0, ci));
        ci++;
        timerRef.current = setTimeout(passo, 26);
      } else {
        setMostradas((m) => [...m, linha]);
        setParcial("");
        li++; ci = 0;
        timerRef.current = setTimeout(passo, 420);
      }
    }
    passo();
    return () => { vivoRef.current = false; clearTimeout(timerRef.current); };
  }, []);

  function pular() {
    vivoRef.current = false;
    clearTimeout(timerRef.current);
    setMostradas(FALAS);
    setParcial("");
    setFim(true);
  }

  return (
    <div className="ascm">
      <div className="craviso-scan" />
      <div className="ascm-card">
        <div className="ascm-corpo">
          {mostradas.map((l, i) => (
            <p key={i} className={"sys-linha " + l.t}>{l.txt}</p>
          ))}
          {!fim && <p className={"sys-linha " + tipo}>{parcial}<span className="sys-cursor">▍</span></p>}
        </div>

        {fim && !escolha && (
          <div className="ascm-escolha">
            <button className="botao ascm-aceitar" onClick={() => setEscolha("aceitou")}>Aceitar a subclasse</button>
            <button className="ascm-recusar" onClick={() => setEscolha("recusou")}>Recusar</button>
          </div>
        )}

        {escolha === "aceitou" && (
          <div className="ascm-fim">
            {arte && (
              <img
                className="ascm-monarca"
                src={`/monarcas/${arte}.png`}
                alt={nomeMonarca}
                draggable="false"
                style={{ "--mc": corMonarca }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            )}
            <div className="ascm-selo" style={{ color: corMonarca }}>{nomeMonarca}</div>
            <p>Você assume o título e a subclasse <b>O Preceptor</b> desperta em você. Guiar outros te tornará mais forte.</p>
            <p className="ascm-nota">Ajudar outros Caçadores ao vivo (e ganhar por isso) chega com o servidor.</p>
            <button className="botao" onClick={onAceitar}>Assumir o manto</button>
          </div>
        )}
        {escolha === "recusou" && (
          <div className="ascm-fim">
            {arte && (
              <img
                className="ascm-monarca"
                src={`/monarcas/${arte}.png`}
                alt={nomeMonarca}
                draggable="false"
                style={{ "--mc": corMonarca }}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            )}
            <div className="ascm-selo" style={{ color: corMonarca }}>{nomeMonarca}</div>
            <p>Você é Monarca, mas recusa a subclasse. O caminho do Preceptor permanece fechado — por ora.</p>
            <button className="botao" onClick={onRecusar}>Continuar</button>
          </div>
        )}

        {!fim && <button className="sys-pular" onClick={pular}>pular ▸</button>}
      </div>
    </div>
  );
}
