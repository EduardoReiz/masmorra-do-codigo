import { useState } from "react";
import "./App.css";
import BotaoVoltar from "./BotaoVoltar";
import { rankDoJogador } from "./dados/exercicios";

const NOME_METODO = {
  email: "E-mail",
  google: "Google",
  discord: "Discord",
  apple: "Apple",
  github: "GitHub",
};

// Aba de Perfil / Configurações. Tudo local no protótipo.
export default function Perfil({ progresso, onRenomear, onTrocarCaminho, onResetar, onSair, onVoltar }) {
  const conta = progresso.conta || {};
  const [nome, setNome] = useState(conta.nome || "");
  const [confirmaReset, setConfirmaReset] = useState(false);
  const rank = rankDoJogador(progresso);

  function salvarNome() {
    const n = nome.trim();
    if (n && n !== conta.nome) onRenomear(n);
  }

  return (
    <div className="perfil">
      <header className="ex-top">
        <BotaoVoltar onClick={onVoltar} />
        <div className="ex-tag" translate="no">PERFIL · CONFIGURAÇÕES</div>
        <div style={{ width: 90 }} />
      </header>

      <div className="perfil-corpo">
        <section className="perfil-bloco">
          <div className="dash-sec-label">CONTA</div>
          <label className="login-campo">
            <span>Nome de Caçador</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} onBlur={salvarNome} maxLength={24} />
          </label>
          <div className="perfil-linha">
            <span className="perfil-k">Entrou com</span>
            <span className="perfil-v">{NOME_METODO[conta.metodo] || "Sessão local"}</span>
          </div>
          {conta.email && (
            <div className="perfil-linha">
              <span className="perfil-k">E-mail</span>
              <span className="perfil-v">{conta.email}</span>
            </div>
          )}
          <p className="perfil-nota">Conta local do protótipo. Sincronização entre dispositivos chega com o servidor.</p>
        </section>

        <section className="perfil-bloco">
          <div className="dash-sec-label">JOGO</div>
          <div className="perfil-linha">
            <span className="perfil-k">Caminho</span>
            <span className="perfil-v">{progresso.classe || "não escolhido"}</span>
          </div>
          <div className="perfil-linha">
            <span className="perfil-k">Rank</span>
            <span className="perfil-v" translate="no">{rank}</span>
          </div>
          <div className="perfil-linha">
            <span className="perfil-k">Subclasse</span>
            <span className="perfil-v">{progresso.subclasse === "preceptor" ? "O Preceptor (Mentor)" : "nenhuma"}</span>
          </div>
          <div className="perfil-linha">
            <span className="perfil-k">XP</span>
            <span className="perfil-v" translate="no">{progresso.xp}</span>
          </div>
          <button className="perfil-btn" onClick={onTrocarCaminho}>Trocar de caminho</button>
        </section>

        <section className="perfil-bloco perigo">
          <div className="dash-sec-label">ZONA DE PERIGO</div>
          <button className="perfil-btn" onClick={onSair}>Sair da conta</button>
          {!confirmaReset ? (
            <button className="perfil-btn ruim" onClick={() => setConfirmaReset(true)}>Resetar progresso</button>
          ) : (
            <div className="perfil-reset">
              <span>Isso apaga XP, monstros, itens e avatar. Tem certeza?</span>
              <div>
                <button className="perfil-btn ruim" onClick={onResetar}>Sim, apagar tudo</button>
                <button className="perfil-btn" onClick={() => setConfirmaReset(false)}>Cancelar</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
