import { useState } from "react";
import "./App.css";
import BotaoVoltar from "./BotaoVoltar";
import Servo from "./Servo";
import { LINGUAGENS } from "./dados/linguagens";

// Tela em que o aluno ESCOLHE a linguagem do caminho do Arquiteto. A lógica de
// programação é ensinada junto com a linguagem escolhida, e dá para trocar depois
// (o progresso fica: o que muda é o código que você escreve).
export default function Linguagem({ atual, onEscolher, onVoltar }) {
  const [sel, setSel] = useState(atual || null);
  return (
    <div className="ling">
      {onVoltar && (
        <header className="ex-top">
          <BotaoVoltar onClick={onVoltar} />
          <div className="ex-tag" translate="no">LINGUAGEM</div>
          <div style={{ width: 90 }} />
        </header>
      )}
      <div className="ling-corpo">
        <div className="ling-servo">
          <Servo tamanho={96} humor="feliz" className="servo-pulo" />
          <p className="aula-balao">
            Escolhe a linguagem que tu quer aprender, cara. Eu ensino a lógica junto com ela. Qual for, o Criador aprova. Eu acho.
          </p>
        </div>

        <h1 className="ling-titulo">Qual linguagem você quer aprender?</h1>
        <p className="ling-sub">Você aprende a lógica de programação junto com a linguagem. Pode trocar depois, sem perder o progresso.</p>

        <div className="ling-grade">
          {LINGUAGENS.map((l) => (
            <button
              key={l.id}
              className={"ling-card" + (sel === l.id ? " sel" : "") + (l.disponivel ? "" : " breve")}
              disabled={!l.disponivel}
              onClick={() => setSel(l.id)}
            >
              <span className="ling-nome" translate="no">{l.nome}</span>
              {!l.disponivel && <span className="ling-tag" translate="no">em breve</span>}
              <span className="ling-desc">{l.desc}</span>
            </button>
          ))}
        </div>

        <button className="botao ling-ok" disabled={!sel} onClick={() => onEscolher(sel)}>Começar com essa</button>
      </div>
    </div>
  );
}
