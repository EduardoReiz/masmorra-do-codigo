import { useState } from "react";
import "./App.css";
import { ehCriador, OPCOES_CRIADOR } from "./dados/criador";
import BotaoVoltar from "./BotaoVoltar";
import ItemIcon from "./ItemIcon";
import PixelIcone from "./PixelIcone";
import Retrato from "./Retrato";
import { rankDoJogador } from "./dados/exercicios";
import { ITENS, RARIDADES, ARMA_POR_CLASSE, item as itemEquip, buffDe, buffsTotais, chancesDrop } from "./dados/equipamento";

// Mochila no estilo "painel de equipamento": o personagem no centro, os slots
// em volta e a bolsa embaixo. Clicar num slot filtra a bolsa; clicar num item
// veste (ou tira) e o boneco muda na hora.
const ESQ = [
  { id: "capacete", nome: "Capacete", icone: "capacete" },
  { id: "colete", nome: "Colete", icone: "colete" },
  { id: "calca", nome: "Calça", icone: "calca" },
];
const DIR = [
  { id: "sapato", nome: "Botas", icone: "sapato" },
  { id: "arma", nome: "Arma", icone: "arma" },
  { id: "reliquia", nome: "Relíquia", icone: "cadeado", trancado: true },
];

function Slot({ s, equip, filtro, setFiltro }) {
  const it = equip[s.id] && itemEquip(equip[s.id]);
  const cor = it ? RARIDADES[it.raridade].cor : null;
  return (
    <button
      className={"eq-slot-btn" + (filtro === s.id ? " ativo" : "") + (s.trancado ? " trancado" : "") + (it ? " cheio" : "")}
      style={cor ? { "--rc": cor } : undefined}
      disabled={s.trancado}
      onClick={() => setFiltro(filtro === s.id ? null : s.id)}
      title={s.trancado ? "Em breve" : it ? `${it.nome} · ${RARIDADES[it.raridade].nome}` : `${s.nome} (vazio)`}
    >
      {it ? <ItemIcon item={it} tamanho={36} /> : <span className="eq-slot-vazio"><PixelIcone nome={s.icone} tamanho={34} /></span>}
      <span className="eq-slot-rot">{s.nome}</span>
    </button>
  );
}

export default function Mochila({ progresso, onEquipar, onAbrirAvatar, onAparencia, onQuebrarMaldicao, onVoltar }) {
  const [filtro, setFiltro] = useState(null);
  const [estreito] = useState(() => window.innerWidth < 520); // celular: retrato menor
  const equip = progresso.equip || {};
  const tipoArma = ARMA_POR_CLASSE[progresso.classe];
  // o Criador sempre tem os exclusivos dele (qualquer arma, de qualquer classe)
  const criador = ehCriador(progresso);
  const possuidos = ITENS.filter((it) =>
    it.exclusivo ? criador : progresso.itensEquip.includes(it.id) && (it.slot !== "arma" || it.armaTipo === tipoArma)
  );
  const naBolsa = filtro ? possuidos.filter((it) => it.slot === filtro) : possuidos;
  const fragmentos = progresso.itens.filter((i) => i === "fragmento-portal").length;
  const rank = rankDoJogador(progresso);
  const bonus = buffsTotais(equip);
  const props = { equip, filtro, setFiltro };

  return (
    <div className="mochila">
      <header className="ex-top">
        <BotaoVoltar onClick={onVoltar} />
        <div className="ex-tag" translate="no">MOCHILA · EQUIPAMENTO</div>
        <div style={{ width: 90 }} />
      </header>

      <div className="moch-corpo">
        <section className="equip-painel">
          <div className="equip-faixa" translate="no">EQUIPAMENTO</div>
          <div className="equip-grade">
            <div className="equip-col">{ESQ.map((s) => <Slot key={s.id} s={s} {...props} />)}</div>
            <div className="equip-centro">
              <Retrato progresso={progresso} tamanho={estreito ? 144 : 216} rank={rank} />
            </div>
            <div className="equip-col">{DIR.map((s) => <Slot key={s.id} s={s} {...props} />)}</div>
          </div>
        </section>

        {criador && (
          <section className="visual-criador">
            <div className="dash-sec-label">VISUAL DO CRIADOR</div>
            {[["criadorRoupa", "Roupa", "sem armadura"], ["criadorArmadura", "Armadura", "com peças suas vestidas"]].map(([chave, nome, nota]) => (
              <div className="visual-linha" key={chave}>
                <span className="visual-nome">{nome} <small>{nota}</small></span>
                <div className="visual-opcoes">
                  {OPCOES_CRIADOR.map((n) => (
                    <button key={n} type="button" className={"visual-op" + ((progresso[chave] || 1) === n ? " ativo" : "")} onClick={() => onAparencia(chave, n)}>{n}</button>
                  ))}
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="equip-bolsa">
          <div className="dash-sec-label">
            BOLSA {filtro ? `· ${[...ESQ, ...DIR].find((s) => s.id === filtro).nome.toUpperCase()}` : `· ${possuidos.length} ITENS`}
            {filtro && <button className="equip-limpar" onClick={() => setFiltro(null)}>ver todos</button>}
          </div>
          {naBolsa.length === 0 ? (
            <div className="eq-vazio">
              {filtro ? "Nada desse tipo ainda." : "Bolsa vazia."} Vença monstros e Exames para dropar equipamento.
            </div>
          ) : (
            <div className="bolsa-grade">
              {naBolsa.map((it) => {
                const vestido = equip[it.slot] === it.id;
                const rar = RARIDADES[it.raridade];
                return (
                  <button key={it.id} className={"bolsa-item" + (vestido ? " vestido" : "")} style={{ "--rc": rar.cor }}
                    onClick={() => onEquipar(it.slot, it.id)} title={vestido ? "Clique para tirar" : "Clique para vestir"}>
                    <ItemIcon item={it} tamanho={40} />
                    <span className="bolsa-nome">{it.nome}</span>
                    <span className="bolsa-rar" translate="no">{rar.nome}</span>
                    {buffDe(it) && <span className="bolsa-buff">{buffDe(it).rotulo}</span>}
                    {vestido && <span className="bolsa-vestido">vestido</span>}
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <section className="chances">
          <div className="dash-sec-label">BÔNUS E CHANCES DE DROP</div>
          <p className="chances-bonus">
            {bonus.xp + bonus.drop + bonus.sorte === 0
              ? "Nenhum bônus ativo. Itens raros, épicos e lendários vestidos dão bônus."
              : [bonus.xp && `+${bonus.xp}% de XP`, bonus.drop && `+${bonus.drop} pontos na chance de drop`, bonus.sorte && `+${bonus.sorte}% de chance de item raro ou melhor`].filter(Boolean).join(" · ")}
          </p>
          {(progresso.maldicao || 0) > 0 && (
            <div className="maldicao-faixa" translate="no">
              <span aria-hidden="true">☠</span> Maldição ativa: −20% de XP nos próximos {progresso.maldicao} {progresso.maldicao === 1 ? "monstro" : "monstros"}.
              {fragmentos > 0 && <button type="button" className="visual-op" onClick={onQuebrarMaldicao}>Quebrar com um Fragmento de Portal</button>}
            </div>
          )}
          <div className="chances-tabela" role="table" translate="no">
            <div className="chances-lin cab" role="row"><span>Vitória</span><span>Cai item</span>{["comum", "raro", "epico", "lendario"].map((r) => <span key={r} style={{ color: RARIDADES[r].cor }}>{RARIDADES[r].nome}</span>)}</div>
            {[["Monstro", {}], ["Portal fraturado", { fraturado: true }], ["Exame (chefe)", { chefe: true }]].map(([nome, ctx]) => {
              const c = chancesDrop({ ...ctx, buffs: bonus });
              return (
                <div className="chances-lin" role="row" key={nome}>
                  <span>{nome}</span><span>{Math.round(c.chance * 100)}%</span>
                  {["comum", "raro", "epico", "lendario"].map((r) => <span key={r}>{Math.round(c.pct[r])}%</span>)}
                </div>
              );
            })}
          </div>
          <p className="nota-chances">A coluna de raridade é a chance de cada tipo quando um item cai.</p>
        </section>

        <section>
          <div className="dash-sec-label">MATERIAIS</div>
          {fragmentos > 0 ? (
            <div className="inv-item lendario">
              <img className="inv-icone inv-arte" src="/emblemas/item-fragmento.png" alt="" draggable="false" />
              <div>
                <div className="inv-nome">Fragmento de Portal <span className="inv-tipo">LENDÁRIO</span></div>
                <div className="inv-desc">Caído de um portal fraturado. Material de forja (futuro).</div>
              </div>
              <span className="inv-qtd" translate="no">x{fragmentos}</span>
            </div>
          ) : (
            <div className="inv-vazio">Nenhum material. Fraturas de portal deixam Fragmentos.</div>
          )}
          <button className="perfil-btn" onClick={onAbrirAvatar}>Aparência, moldura e título →</button>
        </section>
      </div>
    </div>
  );
}
