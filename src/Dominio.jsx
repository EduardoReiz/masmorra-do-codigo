import { useState } from "react";
import "./App.css";
import { RankEmblema } from "./Emblema";
import BotaoVoltar from "./BotaoVoltar";
import Despertar from "./Despertar";
import AscensaoMonarca from "./AscensaoMonarca";
import CriadorAviso from "./CriadorAviso";
import Batalha from "./Batalha";
import Prova from "./Prova";
import { PROVAS } from "./dados/provas";
import { monarcaDe } from "./dados/monarcas";
import { equipado, cosmetico, semente } from "./dados/cosmeticos";
import { configPersonagem } from "./dados/personagem";

// Domínio do Criador: área reservada só pra conta dele. Tem a SALA DE PRÉVIAS,
// onde ele dispara qualquer cena do jogo na hora, sem cumprir a condição real,
// e testa exercícios como se fosse um jogador comum.
const CENAS = [
  { id: "despertar", nome: "Despertar do Sistema", desc: "A abertura narrativa ao escolher o caminho." },
  { id: "batalha-v", nome: "Batalha — vitória", desc: "O herói derrota o monstro em pixel." },
  { id: "batalha-d", nome: "Batalha — derrota", desc: "O monstro revida e o herói cai." },
  { id: "batalha-c", nome: "Batalha — monstro teme o Criador", desc: "Sua derrota: o monstro recua e implora." },
  { id: "prova", nome: "Prova de Ascensão", desc: "As questões que travam o rank-up num exame." },
  { id: "rankup", nome: "RANK UP", desc: "A cena ao vencer um Exame de Ascensão." },
  { id: "monarca", nome: "Ascensão a Monarca", desc: "Virar Monarca e a subclasse secreta." },
  { id: "criador-warn", nome: "Criador — 1º aviso", desc: "Glitch + voz: 'Acha mesmo que pode enganar O Criador?'" },
  { id: "criador-demote", nome: "Criador — tira um rank", desc: "A punição da 2ª trapaça." },
];

export default function Dominio({ progresso, onVoltar, onTestarExercicio }) {
  const nome = progresso?.conta?.nome || "Criador";
  // atalho de desenvolvimento: ?cena=batalha-v abre uma prévia direto
  const [cena, setCena] = useState(() => new URLSearchParams(window.location.search).get("cena"));
  const fechar = () => setCena(null);

  const eq = equipado(progresso);
  const corHeroi = cosmetico(eq.cor)?.valor || "#0beef5";
  const seedHeroi = semente(progresso.classe || "Caçador");
  const monstro = { id: "soma", nome: "Goblin do Loop Infinito", nivel: "E" };
  const heroi = { cfg: configPersonagem(progresso), classe: progresso.classe || "O Arquiteto", equip: progresso.equip || {} };

  return (
    <div className="dominio">
      <header className="ex-top">
        <BotaoVoltar onClick={onVoltar} />
        <div className="ex-tag" translate="no">DOMÍNIO DO CRIADOR</div>
        <div style={{ width: 90 }} />
      </header>

      <div className="dom-corpo">
        <div className="dom-chama" />
        <p className="dom-eyebrow" translate="no">ÁREA RESTRITA · O CRIADOR</p>
        <h1 className="dom-titulo">Bem-vindo ao seu domínio, {nome}.</h1>
        <p className="dom-sub">
          Este salão é só seu. Aqui a masmorra se curva — e daqui você invoca qualquer cena do jogo para avaliar.
        </p>

        <div className="dom-sec">SALA DE PRÉVIAS · CENAS</div>
        <div className="dom-grade">
          {CENAS.map((c) => (
            <button key={c.id} className="dom-card dom-btn" onClick={() => setCena(c.id)}>
              <div className="dom-card-tag">INVOCAR</div>
              <h3>{c.nome}</h3>
              <p>{c.desc}</p>
            </button>
          ))}
        </div>

        <div className="dom-sec">SALA DE PRÉVIAS · TESTE COMO JOGADOR</div>
        <p className="dom-sub dom-sub-esq">
          Abre um exercício como se você fosse um jogador comum (sem a isenção do Criador): tente colar código
          para ver o bloqueio e a punição.
        </p>
        <div className="dom-grade">
          <button className="dom-card dom-btn" onClick={() => onTestarExercicio({ jogador: true })}>
            <div className="dom-card-tag">TESTAR</div>
            <h3>Exercício como jogador</h3>
            <p>Colar e arrastar bloqueados, com a intervenção do Criador.</p>
          </button>
          <button className="dom-card dom-btn" onClick={() => onTestarExercicio({ jogador: true, fraturar: true })}>
            <div className="dom-card-tag">TESTAR</div>
            <h3>Fratura de Portal</h3>
            <p>O mesmo exercício com o portal fraturado (tema vermelho, testes mais duros).</p>
          </button>
        </div>
      </div>

      {cena === "despertar" && <Despertar classe={progresso.classe || "O Arquiteto"} onConcluir={fechar} />}
      {cena === "batalha-v" && <Batalha resultado="vitoria" corHeroi={corHeroi} seedHeroi={seedHeroi} heroi={heroi} monstro={monstro} onFim={fechar} />}
      {cena === "batalha-d" && <Batalha resultado="derrota" corHeroi={corHeroi} seedHeroi={seedHeroi} heroi={heroi} monstro={monstro} onFim={fechar} />}
      {cena === "batalha-c" && <Batalha resultado="derrota" criador corHeroi={corHeroi} seedHeroi={seedHeroi} heroi={heroi} monstro={monstro} onFim={fechar} />}
      {cena === "prova" && <Prova prova={PROVAS["exame-d"]} onAprovado={fechar} onReprovado={fechar} />}
      {cena === "monarca" && <AscensaoMonarca monarca={monarcaDe(progresso.classe)} onAceitar={fechar} onRecusar={fechar} />}
      {cena === "criador-warn" && <CriadorAviso tipo="warn" onFechar={fechar} />}
      {cena === "criador-demote" && <CriadorAviso tipo="demote" onFechar={fechar} />}
      {cena === "rankup" && (
        <div className="rankup" onClick={fechar}>
          <div className="rankup-card" onClick={(e) => e.stopPropagation()}>
            <div className="rankup-tag" translate="no">EXAME APROVADO · O SISTEMA RECONHECE VOCÊ</div>
            <RankEmblema rank="C" tamanho={112} className="rankup-selo" />
            <h2>RANK UP</h2>
            <p>Você ascendeu ao <b translate="no">Rank C</b>. Monstros mais fortes já sentem a sua chegada.</p>
            <button className="botao" onClick={fechar}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}
