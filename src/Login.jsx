import { useState } from "react";
import "./App.css";
import { nomeValido } from "./dados/moderacao";

// Tela de login. PROTÓTIPO: cria uma sessão LOCAL (só neste navegador). O login
// real (OAuth com Google/Discord/Apple e e-mail com senha) precisa do servidor
// e entra depois — a tela já fica pronta para ser ligada ao backend.
const METODOS = [
  { id: "google", nome: "Google" },
  { id: "discord", nome: "Discord" },
  { id: "apple", nome: "Apple" },
  { id: "github", nome: "GitHub" },
];

export default function Login({ onEntrar }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  // valida o nome; se vazio, cai num padrão aceitável
  function validar(bruto) {
    const n = (bruto || "").trim() || "Caçador";
    const v = nomeValido(n);
    if (!v.ok) {
      setErro(v.motivo);
      return null;
    }
    setErro("");
    return n;
  }

  function entrarEmail(e) {
    e.preventDefault();
    const base = nome.trim() || (email.includes("@") ? email.split("@")[0] : "");
    const n = validar(base);
    if (!n) return;
    onEntrar({ nome: n, metodo: "email", email: email.trim() || null });
  }

  function entrarSocial(id) {
    const n = validar(nome);
    if (!n) return;
    onEntrar({ nome: n, metodo: id });
  }

  return (
    <div className="login">
      <div className="login-card">
        <p className="eyebrow">O SISTEMA AGUARDA</p>
        <h1 className="login-titulo">MASMORRA DO CÓDIGO</h1>
        <p className="login-sub">Entre para despertar e começar a subir de Rank.</p>

        <form className="login-form" onSubmit={entrarEmail}>
          <label className="login-campo">
            <span>Como quer ser chamado?</span>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome de Caçador" maxLength={24} />
          </label>
          <label className="login-campo">
            <span>E-mail</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="voce@email.com" />
          </label>
          <button type="submit" className="botao login-entrar">Entrar com e-mail</button>
        </form>

        {erro && <p className="login-erro">{erro}</p>}

        <div className="login-ou"><span>ou continue com</span></div>

        <div className="login-social">
          {METODOS.map((m) => (
            <button key={m.id} className={"login-prov prov-" + m.id} onClick={() => entrarSocial(m.id)}>
              {m.nome}
            </button>
          ))}
        </div>

        <p className="login-aviso">
          Protótipo: sua conta fica só neste navegador. O login real (Google, Discord, Apple, e-mail) entra junto com o servidor.
        </p>
      </div>
    </div>
  );
}
