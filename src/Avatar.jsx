import "./App.css";
import Retrato from "./Retrato";
import BotaoVoltar from "./BotaoVoltar";
import { rankDoJogador } from "./dados/exercicios";
import { SLOTS, COSMETICOS, disponivel, cosmetico, equipado } from "./dados/cosmeticos";
import { ehCriador } from "./dados/criador";
import { PELES, CABELOS, CORES_CABELO, configPersonagem } from "./dados/personagem";

// Tela do Avatar: monta o personagem (pele, cabelo, cor) e escolhe moldura,
// aura e título. Itens exclusivos do Criador nunca aparecem para os outros;
// títulos ainda bloqueados ficam ocultos ("??????") para gerar curiosidade.
export default function Avatar({ progresso, onEquipar, onPersonalizar, onSair }) {
  const eq = equipado(progresso);
  const rank = rankDoJogador(progresso);
  const cfg = configPersonagem(progresso);
  const souCriador = ehCriador(progresso);
  const titulo = cosmetico(eq.titulo)?.valor;

  return (
    <div className="av">
      <header className="ex-top">
        <BotaoVoltar onClick={onSair} />
        <div className="ex-tag" translate="no">AVATAR · SEU CAÇADOR</div>
        <div style={{ width: 90 }} />
      </header>

      <div className="av-corpo">
        <section className="av-preview">
          <Retrato progresso={progresso} tamanho={240} rank={rank} />
          <div className="av-titulo-eq">{titulo}</div>
          <div className="av-preview-nome">{progresso.classe || "Caçador"}</div>
          <p className="av-dica">Seu personagem se move e usa a arma da sua classe. As peças da Mochila mudam o visual.</p>
        </section>

        <section className="av-slots">
          <div className="av-slot">
            <div className="dash-sec-label">PELE</div>
            <div className="av-opcoes">
              {PELES.map((p) => (
                <button key={p.id} className={"av-swatch" + (cfg.pele === p.id ? " sel" : "")} title={p.nome}
                  style={{ background: p.base }} onClick={() => onPersonalizar({ pele: p.id })} />
              ))}
            </div>
          </div>

          <div className="av-slot">
            <div className="dash-sec-label">CABELO</div>
            <div className="av-opcoes">
              {CABELOS.map((c) => (
                <button key={c.id} className={"av-opt" + (cfg.cabelo === c.id ? " sel" : "")} onClick={() => onPersonalizar({ cabelo: c.id })}>
                  <span className="av-opt-nome">{c.nome}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="av-slot">
            <div className="dash-sec-label">COR DO CABELO</div>
            <div className="av-opcoes">
              {CORES_CABELO.map((c) => (
                <button key={c.id} className={"av-swatch" + (cfg.corCabelo === c.id ? " sel" : "")} title={c.nome}
                  style={{ background: c.base }} onClick={() => onPersonalizar({ corCabelo: c.id })} />
              ))}
            </div>
          </div>

          {SLOTS.map((slot) => {
            const opcoes = COSMETICOS.filter((c) => c.slot === slot.id && !(c.exclusivo && !souCriador));
            return (
              <div className="av-slot" key={slot.id}>
                <div className="dash-sec-label">{slot.nome.toUpperCase()}</div>
                <div className="av-opcoes">
                  {opcoes.map((opt) => {
                    const livre = disponivel(progresso, opt);
                    const sel = eq[slot.id] === opt.id;
                    const oculto = slot.id === "titulo" && !livre;
                    return (
                      <button
                        key={opt.id}
                        className={"av-opt" + (sel ? " sel" : "") + (livre ? "" : " bloq") + (opt.lendario ? " lend" : "")}
                        disabled={!livre}
                        onClick={() => livre && onEquipar(slot.id, opt.id)}
                        title={oculto ? "??????" : livre ? opt.nome : `Bloqueado · ${opt.comoObter}`}
                      >
                        {slot.id === "moldura" && <span className={`av-mold-mini mold-${opt.valor}`} />}
                        <span className="av-opt-nome">{oculto ? "??????" : opt.nome}</span>
                        {!livre && !oculto && <span className="av-opt-req">{opt.comoObter}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
