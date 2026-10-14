import { Component } from "react";
import "./App.css";

// Error boundary: se algum componente quebrar durante o teste, mostra uma tela
// de aviso em vez de ficar tudo branco (e preserva o erro visível no console).
export default class ErroLimite extends Component {
  constructor(props) {
    super(props);
    this.state = { erro: null };
  }
  static getDerivedStateFromError(erro) {
    return { erro };
  }
  componentDidCatch(erro, info) {
    console.error("ErroLimite capturou:", erro, info);
  }
  render() {
    if (this.state.erro) {
      return (
        <div className="erro-limite">
          <div className="erro-limite-card">
            <div className="erro-limite-tag">A MASMORRA TROPEÇOU</div>
            <h2>Algo quebrou nesta tela.</h2>
            <p className="erro-limite-msg">{String(this.state.erro.message || this.state.erro)}</p>
            <button className="botao" onClick={() => this.setState({ erro: null })}>Tentar de novo</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
