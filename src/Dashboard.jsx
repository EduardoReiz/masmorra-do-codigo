import { useRef, useState, useEffect } from "react";
import "./App.css";
import CriadorAviso from "./CriadorAviso";
import AscensaoMonarca from "./AscensaoMonarca";
import MapaMasmorra from "./MapaMasmorra";
import Logo from "./Logo";
import Retrato from "./Retrato";
import PixelIcone from "./PixelIcone";
import { RankEmblema, FeitoEmblema } from "./Emblema";
import { trackDe, ascensao } from "./dados/exercicios";
import { feitosDe } from "./dados/feitos";
import { equipado, cosmetico } from "./dados/cosmeticos";
import { bonusXp, proximoMarco } from "./streak";

// Base do jogador. Ao fundo, o MAPA da masmorra com o progresso; na frente, um
// painel enxuto (missão atual, sequência, feitos). Ao enfrentar uma missão o
// painel se DESINTEGRA em pixels, o mapa aparece inteiro, a tela escurece em
// volta do ponto atual e o jogador vai para o combate.
const CORES_PARTICULA = ["#0beef5", "#6be7ed", "#9b7cff", "#1c2740", "#eef6ff"];

export default function Dashboard({ progresso, subiuPara, onFecharRankUp, onVoltar, onEnfrentar, onNivelar, onRecusarNivelamento, onAbrirAvatar, onAbrirPerfil, onAbrirMochila, criador, onAbrirDominio, aviso, onFecharAviso, mostrarAscensao, monarca, onAceitarSubclasse, onRecusarSubclasse }) {
  const derrotados = new Set(progresso.derrotados);
  const suspeitos = new Set(progresso.suspeitos);
  const track = trackDe(progresso.classe);
  const asc = ascensao(track, progresso.derrotados);
  const feitos = feitosDe(progresso);
  const ganhos = feitos.filter((f) => f.ganho).length;

  const idxAtual = track.findIndex((e) => !derrotados.has(e.id));
  const atual = idxAtual === -1 ? null : track[idxAtual];
  const classe = progresso.classe || "JOGADOR";
  const ofereceNivelamento =
    !progresso.nivelado && progresso.derrotados.length === 0 && progresso.classe !== "O Oráculo";
  const titulo = cosmetico(equipado(progresso).titulo)?.valor;

  const focoRef = useRef(null);
  const painelRef = useRef(null);
  const partRef = useRef(null);
  const escuroRef = useRef(null);
  const rafRef = useRef(null);
  const [saindo, setSaindo] = useState(false);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // Transição de entrada na missão: desintegra o painel em pixels, revela o
  // mapa e fecha a escuridão em volta do ponto atual.
  function iniciarMissao(id) {
    if (saindo) return;
    const painel = painelRef.current, part = partRef.current, escuro = escuroRef.current;
    if (!painel || !part || !escuro) { onEnfrentar(id); return; }
    setSaindo(true);
    const rect = painel.getBoundingClientRect();
    const B = 12;
    const cols = Math.ceil(rect.width / B), lins = Math.ceil(rect.height / B);
    const mask = document.createElement("canvas");
    mask.width = cols * B; mask.height = lins * B;
    const mctx = mask.getContext("2d");
    mctx.fillStyle = "#000"; mctx.fillRect(0, 0, mask.width, mask.height);
    // ordem de sumiço: aleatória com leve viés de cima para baixo
    const ordem = [];
    for (let y = 0; y < lins; y++) for (let x = 0; x < cols; x++) ordem.push({ x, y, p: Math.random() + (y / lins) * 0.8 });
    ordem.sort((a, b) => a.p - b.p);

    part.width = window.innerWidth; part.height = window.innerHeight;
    const pctx = part.getContext("2d");
    const parts = [];
    const DUR1 = 950, DUR2 = 1000;
    const t0 = performance.now();
    let k = 0, ant = t0;

    function quadro() {
      const agora = performance.now();
      const dt = Math.max(0, Math.min(0.05, (agora - ant) / 1000));
      ant = agora;
      const e = Math.max(0, agora - t0);
      // fase 1: desintegração
      const alvo = Math.floor(ordem.length * Math.min(1, e / DUR1) ** 1.3);
      let mudou = false;
      while (k < alvo) {
        const c = ordem[k++];
        mctx.clearRect(c.x * B, c.y * B, B, B);
        mudou = true;
        if (Math.random() < 0.35) {
          parts.push({
            x: rect.left + c.x * B, y: rect.top + c.y * B,
            vx: (Math.random() - 0.3) * 160, vy: -60 - Math.random() * 120,
            vida: 0.9, cor: CORES_PARTICULA[(Math.random() * CORES_PARTICULA.length) | 0], s: 4 + ((Math.random() * 3) | 0) * 2,
          });
        }
      }
      if (mudou) {
        const url = `url(${mask.toDataURL()})`;
        painel.style.maskImage = url; painel.style.webkitMaskImage = url;
        painel.style.maskSize = "100% 100%"; painel.style.webkitMaskSize = "100% 100%";
      }
      pctx.clearRect(0, 0, part.width, part.height);
      for (const p of parts) {
        p.vida -= dt; p.vy += 260 * dt; p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.vida <= 0) continue;
        pctx.globalAlpha = Math.max(0, p.vida / 0.9);
        pctx.fillStyle = p.cor;
        pctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s);
      }
      pctx.globalAlpha = 1;
      // fase 2: a escuridão fecha em volta do ponto atual do mapa
      if (e > DUR1 * 0.75) {
        const f = Math.min(1, (e - DUR1 * 0.75) / DUR2);
        const foco = focoRef.current || { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const R = Math.max(window.innerWidth, window.innerHeight) * (1 - f) ** 1.6;
        escuro.style.opacity = "1";
        escuro.style.background = `radial-gradient(circle at ${foco.x}px ${foco.y}px, transparent ${R}px, rgba(2,2,6,0.98) ${R + 70}px)`;
      }
      if (e < DUR1 * 0.75 + DUR2 + 120) rafRef.current = requestAnimationFrame(quadro);
      else onEnfrentar(id);
    }
    rafRef.current = requestAnimationFrame(quadro);
  }

  function statusDe(i, ex) {
    if (derrotados.has(ex.id)) return "derrotado";
    if (i === idxAtual) return "atual";
    return "bloqueado";
  }

  const seq = progresso.sequencia || 0;
  const bonus = Math.round(bonusXp(seq) * 100);
  const prox = proximoMarco(seq);

  return (
    <div className={"dash dash-v2" + (saindo ? " saindo" : "")}>
      <MapaMasmorra progresso={progresso} track={track} idxAtual={idxAtual} focoRef={focoRef} />

      <header className="dash-top">
        <Logo />
        <div className="dash-jogador">
          <button className="dash-avatar-btn" onClick={onAbrirAvatar} title="Seu avatar">
            <Retrato progresso={progresso} tamanho={48} rank={asc.rank} compacto acoes={false} />
          </button>
          <div>
            <div className="who">{titulo}</div>
            <div className="lv">{classe} · Rank {asc.rank}</div>
            <div className="dash-xp">
              <div className="xpbar"><div className="xpfill" style={{ width: asc.pct + "%" }} /></div>
              <div className="xptxt" translate="no">
                XP {progresso.xp}{asc.proximo ? ` · exame p/ Rank ${asc.proximo}` : " · Rank máximo"}
              </div>
            </div>
          </div>
        </div>
        <nav className="dash-nav">
          <button className="nav-ic" onClick={onAbrirMochila}><PixelIcone nome="mochila" tamanho={30} /><span>Mochila</span></button>
          <button className="nav-ic" onClick={onAbrirAvatar}><PixelIcone nome="avatar" tamanho={30} /><span>Avatar</span></button>
          <button className="nav-ic" onClick={onAbrirPerfil}><PixelIcone nome="perfil" tamanho={30} /><span>Perfil</span></button>
          {criador && <button className="nav-ic criador" onClick={onAbrirDominio}><PixelIcone nome="dominio" tamanho={30} /><span>Domínio</span></button>}
        </nav>
      </header>

      <main className="dash-painel" ref={painelRef}>
        {ofereceNivelamento && (
          <section className="nivel-oferta">
            <div className="nivel-oferta-txt">
              <div className="nivel-oferta-tag" translate="no">TESTE DE NIVELAMENTO</div>
              <h3>Já tem experiência em programação?</h3>
              <p>Faça uma bateria do básico ao avançado e entre direto no Rank que você provar.</p>
            </div>
            <div className="nivel-oferta-botoes">
              <button className="botao" onClick={onNivelar}>Fazer o teste</button>
              <button className="nivel-recusar" onClick={onRecusarNivelamento}>Começar do início</button>
            </div>
          </section>
        )}

        <section className="dash-hero">
          <p className="eyebrow">A MASMORRA TE AGUARDA</p>
          <h1 className="dash-title">
            Sua jornada como <span className="dash-classe">{classe}</span> continua.
          </h1>
          <div className={"streak" + (seq >= 30 ? " vip" : "")}>
            <span className="streak-chama" translate="no">{seq >= 30 ? "♛" : "▲"}</span>
            <div className="streak-txt">
              <div className="streak-dias" translate="no">{seq} {seq === 1 ? "dia" : "dias"} seguidos{seq >= 30 ? " · VIP" : ""}</div>
              <div className="streak-bonus" translate="no">
                {bonus > 0 ? `+${bonus}% de XP` : "Volte amanhã para começar o bônus"}
                {prox ? ` · faltam ${prox.dias - seq} p/ +${Math.round(prox.bonus * 100)}%` : ""}
              </div>
            </div>
          </div>
          {(progresso.maldicao || 0) > 0 && (
            <div className="maldicao-faixa" translate="no">
              <span aria-hidden="true">☠</span> Maldição ativa: −20% de XP nos próximos {progresso.maldicao} {progresso.maldicao === 1 ? "monstro" : "monstros"}
            </div>
          )}
        </section>

        {atual ? (
          <section className="dash-missao">
            <div className="dash-sec-label">{atual.chefe ? "EXAME DE ASCENSÃO" : "MISSÃO ATUAL"}</div>
            <article className={"monstro" + (atual.chefe ? " chefe" : "")}>
              <div className="monstro-top">
                <div>
                  <div className="monstro-tag" translate="no">
                    {atual.chefe ? `EXAME · promove a RANK ${atual.promoveA}` : `MONSTRO · NÍVEL ${atual.nivel}`}
                  </div>
                  <h2 className="monstro-nome">{atual.titulo}</h2>
                </div>
                <div className="monstro-selo" translate="no">{atual.nivel}</div>
              </div>
              <div className="monstro-info">
                <div><span className="k">Fraqueza</span><span className="v">{atual.fraqueza}</span></div>
                <div><span className="k">Recompensa</span><span className="v" translate="no">+{atual.xp} XP</span></div>
                <div><span className="k">Tempo</span><span className="v">{atual.tempo}</span></div>
              </div>
              <button className="botao monstro-btn" onClick={() => iniciarMissao(atual.id)} disabled={saindo}>
                {atual.chefe ? "Encarar o Exame" : "Enfrentar o monstro"}
              </button>
            </article>
          </section>
        ) : (
          <section className="dash-missao">
            <article className="monstro monstro-limpa">
              <h2 className="monstro-nome">Masmorra limpa.</h2>
              <p className="monstro-desc">Você venceu todos os monstros desta trilha. Novos andares estão sendo forjados.</p>
            </article>
          </section>
        )}

        <section className="dash-resumo">
          <div className="stat"><div className="stat-num" translate="no">{derrotados.size}/{track.length}</div><div className="stat-lbl">Monstros</div></div>
          <div className="stat"><div className="stat-num" translate="no">{progresso.xp}</div><div className="stat-lbl">XP</div></div>
          <div className="stat"><div className="stat-num" translate="no">{ganhos}/{feitos.length}</div><div className="stat-lbl">Feitos</div></div>
        </section>

        <details className="dash-dobra">
          <summary>Feitos</summary>
          <div className="feitos">
            {feitos.map((f) => {
              const escondido = !f.ganho;
              return (
                <div key={f.id} className={"feito " + (f.ganho ? "ganho" : "travado")}>
                  <div className="feito-icone"><FeitoEmblema id={f.id} ganho={f.ganho} /></div>
                  <div className="feito-nome">{escondido ? "??????" : f.nome}</div>
                  <div className="feito-desc">{escondido ? "Ainda oculto." : f.desc}</div>
                </div>
              );
            })}
          </div>
        </details>

        <details className="dash-dobra">
          <summary>Monstros da trilha</summary>
          <ul className="mapa">
            {track.map((ex, i) => {
              const st = statusDe(i, ex);
              const marcado = derrotados.has(ex.id) && suspeitos.has(ex.id);
              return (
                <li key={ex.id} className={"mapa-item " + st + (ex.chefe ? " chefe" : "")}>
                  <span className="mapa-selo" translate="no">{ex.nivel}</span>
                  <div className="mapa-meio">
                    <div className="mapa-nome">{ex.titulo}{ex.chefe && <span className="mapa-exame" translate="no">EXAME</span>}</div>
                    <div className="mapa-sub">
                      {st === "derrotado" && <span className="mapa-chip ok">DERROTADO</span>}
                      {st === "atual" && <span className="mapa-chip now">{ex.chefe ? "EXAME" : "ATUAL"}</span>}
                      {st === "bloqueado" && <span className="mapa-chip lock">BLOQUEADO</span>}
                      <span className="mapa-xp" translate="no">+{ex.xp} XP</span>
                      {marcado && <span className="mapa-chip warn">SUSPEITA</span>}
                    </div>
                  </div>
                  {st === "derrotado" && <button className="mapa-btn" onClick={() => iniciarMissao(ex.id)}>rejogar</button>}
                  {st === "atual" && <button className="mapa-btn forte" onClick={() => iniciarMissao(ex.id)}>enfrentar</button>}
                </li>
              );
            })}
          </ul>
        </details>

        <button className="dash-voltar" onClick={onVoltar}>trocar de caminho</button>
      </main>

      <canvas ref={partRef} className="dash-particulas" />
      <div ref={escuroRef} className="dash-escuro" />

      {mostrarAscensao && <AscensaoMonarca monarca={monarca} onAceitar={onAceitarSubclasse} onRecusar={onRecusarSubclasse} />}
      {aviso && <CriadorAviso tipo={aviso} onFechar={onFecharAviso} />}
      {subiuPara && (
        <div className="rankup" onClick={onFecharRankUp}>
          <div className="rankup-card" onClick={(e) => e.stopPropagation()}>
            <div className="rankup-tag" translate="no">EXAME APROVADO · O SISTEMA RECONHECE VOCÊ</div>
            <RankEmblema rank={subiuPara} tamanho={112} className="rankup-selo" />
            <h2>RANK UP</h2>
            <p>Você ascendeu ao <b translate="no">Rank {subiuPara}</b>. Monstros mais fortes já sentem a sua chegada.</p>
            <button className="botao" onClick={onFecharRankUp}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}
