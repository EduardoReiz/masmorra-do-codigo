import { useState, useEffect } from "react";
import "./App.css";
import Entrada from "./Entrada";
import Despertar from "./Despertar";
import Dashboard from "./Dashboard";
import Exercicio from "./Exercicio";
import Nivelamento from "./Nivelamento";
import Avatar from "./Avatar";
import Login from "./Login";
import Perfil from "./Perfil";
import Mochila from "./Mochila";
import Dominio from "./Dominio";
import Aula from "./Aula";
import Linguagem from "./Linguagem";
import { aulaDe } from "./dados/aulas";
import { linguagemDoJogador } from "./dados/linguagens";
import { trackDe, rankDe, idsParaComecarEm } from "./dados/exercicios";
import { AVATAR_PADRAO, equipado, cosmetico, semente } from "./dados/cosmeticos";
import { ehCriador, AVATAR_CRIADOR, quadroDoCriador } from "./dados/criador";
import { buffsTotais } from "./dados/equipamento";
import { abreCinema } from "./Cinema";
import { monarcaDe } from "./dados/monarcas";
import { configPersonagem } from "./dados/personagem";
import { registrarDia, bonusXp } from "./streak";
import { carregar, salvar, limpar, carregarPadrao, guardarDaConta, progressoDaConta, idDaConta } from "./progresso";

// decide a tela inicial a partir do que está salvo
function telaInicial() {
  const c = carregar();
  // atalho de desenvolvimento: ?tela=mochila abre direto numa tela (se logado)
  const pedida = new URLSearchParams(window.location.search).get("tela");
  if (pedida && c.conta && (pedida !== "dominio" || ehCriador(c))) return pedida;
  if (!c.conta) return "login";
  // o Arquiteto ainda sem linguagem (inclusive quem já jogava antes dela existir) escolhe agora
  if (c.classe === "O Arquiteto" && !c.linguagem) return "linguagem";
  return c.classe ? "dashboard" : "entrada";
}

// chance de uma missão comum "fraturar" (virar portal de rank maior) ao entrar
const CHANCE_FRATURA = 0.2;

// O App decide QUAL tela mostrar e é o dono do progresso (XP, monstros
// derrotados, itens, caminho). Ele salva tudo no navegador a cada mudança.
function App() {
  const [progresso, setProgresso] = useState(carregar);
  const [tela, setTela] = useState(telaInicial);
  const [exId, setExId] = useState(null);
  const [fraturado, setFraturado] = useState(false);
  const [subiuPara, setSubiuPara] = useState(null); // rank novo, se subiu agora
  const [aviso, setAviso] = useState(null); // intervenção do Criador: "warn" | "demote"
  const [ascensao, setAscensao] = useState(false); // cena de virar Monarca (rank S)
  const [comoJogador, setComoJogador] = useState(false); // Criador testando sem isenção

  // o cursor customizado só existe na entrada; no resto, cursor normal
  useEffect(() => {
    document.body.classList.toggle("sem-cursor", tela === "entrada");
  }, [tela]);

  // registra a visita de hoje (sequência diária) ao abrir, se já logado
  useEffect(() => {
    if (progresso.conta) {
      const p = registrarDia(progresso);
      if (p !== progresso) atualizar(p);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function atualizar(p) {
    setProgresso(p);
    salvar(p);
  }

  // Login (sessão local do protótipo). Depois de entrar, vai escolher o caminho
  // ou direto pro dashboard se já tiver um.
  function entrarConta(conta) {
    // outra conta no mesmo navegador: guarda o progresso de quem estava e abre o da conta que entrou
    guardarDaConta(progresso);
    const semDono = !progresso.conta && (progresso.classe || progresso.derrotados.length > 0); // progresso antigo, de antes das contas separadas
    const mesma = semDono || idDaConta(progresso.conta) === idDaConta(conta);
    let p = mesma ? { ...progresso, conta } : progressoDaConta(conta);
    // o Criador ganha o avatar exclusivo por padrão (se ainda não customizou)
    if (ehCriador(p) && !p.avatar) p.avatar = { ...AVATAR_CRIADOR };
    p = registrarDia(p); // conta o dia de hoje ao entrar
    atualizar(p);
    setTela(p.classe ? "dashboard" : "entrada");
  }

  function sairConta() {
    guardarDaConta(progresso);
    atualizar({ ...carregarPadrao() });
    setTela("login");
  }

  function renomear(nome) {
    atualizar({ ...progresso, conta: { ...(progresso.conta || {}), nome } });
  }

  // Reseta todo o progresso (apaga do navegador) e volta pro login.
  function resetar() {
    limpar();
    setProgresso(carregar());
    setTela("login");
  }

  // Escolheu o caminho: na primeira vez passa pelo despertar do Sistema.
  function iniciar(caminho) {
    const p = { ...progresso, classe: caminho };
    atualizar(p);
    // no caminho do Arquiteto, quem escolhe a linguagem é o aluno
    if (caminho === "O Arquiteto" && !p.linguagem) { setTela("linguagem"); return; }
    setTela(p.despertou ? "dashboard" : "despertar");
  }

  function escolherLinguagem(id) {
    atualizar({ ...progresso, linguagem: id });
    setTela(progresso.despertou ? "dashboard" : "despertar");
  }

  function despertar() {
    atualizar({ ...progresso, despertou: true });
    setTela("dashboard");
  }

  // Terminou o Teste de Nivelamento: credita tudo até o rank classificado
  // (monstros + exames já contam como vencidos) e entra no dashboard ali.
  function nivelar(rank) {
    const track = trackDe(progresso.classe);
    const ids = idsParaComecarEm(track, rank);
    const xp = track.filter((e) => ids.includes(e.id)).reduce((s, e) => s + e.xp, 0);
    const derrotados = [...new Set([...progresso.derrotados, ...ids])];
    atualizar({ ...progresso, derrotados, xp: Math.max(progresso.xp, xp), nivelado: true });
    setTela("dashboard");
  }

  // Dispensou o nivelamento: só marca que foi oferecido, começa do zero.
  function recusarNivelamento() {
    atualizar({ ...progresso, nivelado: true });
  }

  // Equipa uma peça do avatar e persiste.
  // monta o personagem (pele, cabelo, cor do cabelo)
  function personalizar(parcial) {
    atualizar({ ...progresso, personagem: { ...configPersonagem(progresso), ...parcial } });
  }

  function equiparAvatar(slot, id) {
    const avatar = { ...AVATAR_PADRAO, ...(progresso.avatar || {}), [slot]: id };
    atualizar({ ...progresso, avatar });
  }

  // Entrar numa missão: se for comum e ainda não vencida, rola a chance de
  // fratura (portal de rank maior, mais difícil, recompensa dobrada).
  // Domínio do Criador: abre um exercício de teste, opcionalmente como jogador
  // comum (sem isenção) e/ou com o portal fraturado.
  function testarExercicio({ jogador, fraturar }) {
    const t = trackDe(progresso.classe);
    const alvo = t.find((e) => !e.chefe && e.tipo !== "prompt") || t[0];
    setFraturado(!!fraturar && alvo.tipo !== "prompt");
    setComoJogador(!!jogador);
    setExId(alvo.id);
    setTela("exercicio");
  }

  function enfrentar(id) {
    setComoJogador(false);
    const ex = trackDe(progresso.classe).find((e) => e.id === id);
    const elegivel = ex && !ex.chefe && ex.tipo !== "prompt" && !progresso.derrotados.includes(id);
    const quebrou = elegivel && Math.random() < CHANCE_FRATURA;
    setFraturado(quebrou);
    if (quebrou) abreCinema("portal");
    setExId(id);
    // a aula é obrigatória na primeira vez que o aluno enfrenta o monstro
    const temAula = ex && !progresso.derrotados.includes(id) && aulaDe(id, linguagemDoJogador(progresso).id);
    setTela(temAula ? "aula" : "exercicio");
  }

  // Calcula o progresso após uma vitória limpa (sem mexer no estado ainda).
  function aposVitoria(base, ex, dropId) {
    if (base.derrotados.includes(ex.id)) return { p: base, subiu: null };
    const ganho = Math.round(ex.xp * (fraturado ? 2 : 1) * (1 + bonusXp(base.sequencia || 0)) * (1 + buffsTotais(base.equip).xp / 100) * ((base.maldicao || 0) > 0 ? 0.8 : 1));
    const derrotados = [...base.derrotados, ex.id];
    const itens =
      fraturado && !base.itens.includes("fragmento-portal")
        ? [...base.itens, "fragmento-portal"]
        : base.itens;
    const itensEquip =
      dropId && !base.itensEquip.includes(dropId) ? [...base.itensEquip, dropId] : base.itensEquip;
    const track = trackDe(base.classe);
    const antes = rankDe(track, base.derrotados);
    const depois = rankDe(track, derrotados);
    const maldicao = Math.max(0, (base.maldicao || 0) - 1); // cada monstro vencido gasta um dos 3 da maldição
    return { p: { ...base, xp: base.xp + ganho, derrotados, itens, itensEquip, maldicao }, subiu: depois !== antes ? depois : null };
  }

  // Tira um rank: remove o último Exame (chefe) vencido da track.
  function demoverUmRank(base) {
    const track = trackDe(base.classe);
    const chefes = track.filter((e) => e.chefe && base.derrotados.includes(e.id));
    if (!chefes.length) return base;
    const ultimo = chefes[chefes.length - 1];
    return { ...base, derrotados: base.derrotados.filter((id) => id !== ultimo.id) };
  }

  // Ao subir de rank: chegar em S dispara a Ascensão a Monarca (uma vez); os
  // demais ranks mostram a cena de RANK UP normal.
  function aplicarSubida(subiu) {
    if (!subiu) return;
    if (subiu === "S" && !progresso.subclasseOferecida) setAscensao(true);
    else setSubiuPara(subiu);
  }

  // Vitória. Se teve sinais de trapaça (e não é O Criador), O Criador intervém:
  // 1ª vez = aviso (vitória ainda conta, marcada como suspeita); 2ª vez = tira
  // um rank e a vitória não conta.
  function vencer(ex, suspeito, dropId) {
    if (suspeito && !ehCriador(progresso)) {
      const strikes = (progresso.avisos || 0) + 1;
      if (strikes >= 2) {
        atualizar({ ...demoverUmRank(progresso), avisos: 0 });
        setAviso("demote");
        setTela("dashboard");
        return;
      }
      const { p, subiu } = aposVitoria(progresso, ex, dropId);
      const suspeitos = p.suspeitos.includes(ex.id) ? p.suspeitos : [...p.suspeitos, ex.id];
      atualizar({ ...p, suspeitos, avisos: strikes });
      aplicarSubida(subiu);
      setAviso("warn");
      setTela("dashboard");
      return;
    }
    const { p, subiu } = aposVitoria(progresso, ex, dropId);
    atualizar(p);
    aplicarSubida(subiu);
    setTela("dashboard");
  }

  // Virou Monarca da sua classe. Aceitar a subclasse dá o Preceptor; recusar
  // mantém só o título de Monarca. Nos dois casos, equipa o título de Monarca.
  function aceitarSubclasse() {
    const tituloMonarca = monarcaDe(progresso.classe).cosmetico || "tit-preceptor";
    const avatar = { ...AVATAR_PADRAO, ...(progresso.avatar || {}), titulo: "tit-preceptor" };
    atualizar({ ...progresso, subclasse: "preceptor", subclasseOferecida: true, avatar: { ...avatar, titulo: tituloMonarca } });
    setAscensao(false);
    setTela("dashboard");
  }
  function recusarSubclasse() {
    const tituloMonarca = monarcaDe(progresso.classe).cosmetico;
    const avatar = tituloMonarca ? { ...AVATAR_PADRAO, ...(progresso.avatar || {}), titulo: tituloMonarca } : progresso.avatar;
    atualizar({ ...progresso, subclasseOferecida: true, avatar });
    setAscensao(false);
    setTela("dashboard");
  }

  // equipa/desequipa um item num slot
  function equiparItem(slot, id) {
    const atual = progresso.equip || {};
    const equip = { ...atual, [slot]: atual[slot] === id ? null : id };
    atualizar({ ...progresso, equip });
  }

  if (tela === "login") {
    return <Login onEntrar={entrarConta} />;
  }

  if (tela === "linguagem") {
    return (
      <Linguagem
        atual={progresso.linguagem}
        onEscolher={escolherLinguagem}
        onVoltar={progresso.linguagem ? () => setTela("perfil") : null}
      />
    );
  }

  if (tela === "aula") {
    const track = trackDe(progresso.classe);
    const ex = track.find((e) => e.id === exId) ?? track[0];
    return (
      <Aula
        exercicio={ex}
        linguagem={linguagemDoJogador(progresso)}
        onConcluir={() => setTela("exercicio")}
        onSair={() => setTela("dashboard")}
      />
    );
  }

  if (tela === "perfil") {
    return (
      <Perfil
        progresso={progresso}
        onRenomear={renomear}
        onTrocarCaminho={() => setTela("entrada")}
        onTrocarLinguagem={() => setTela("linguagem")}
        onResetar={resetar}
        onSair={sairConta}
        onVoltar={() => setTela("dashboard")}
      />
    );
  }

  if (tela === "mochila") {
    return (
      <Mochila
        progresso={progresso}
        onEquipar={equiparItem}
        onAbrirAvatar={() => setTela("avatar")}
        onAparencia={(chave, valor) => atualizar({ ...progresso, [chave]: valor })}
        onQuebrarMaldicao={() => {
          const i = progresso.itens.indexOf("fragmento-portal");
          if (i < 0 || !(progresso.maldicao > 0)) return;
          atualizar({ ...progresso, maldicao: 0, itens: progresso.itens.filter((_, k) => k !== i) });
        }}
        onVoltar={() => setTela("dashboard")}
      />
    );
  }

  if (tela === "dominio") {
    return <Dominio progresso={progresso} onVoltar={() => setTela("dashboard")} onTestarExercicio={testarExercicio} />;
  }

  if (tela === "despertar") {
    return <Despertar classe={progresso.classe} onConcluir={despertar} />;
  }

  if (tela === "nivelamento") {
    return (
      <Nivelamento
        linguagem={linguagemDoJogador(progresso)}
        onConcluir={(rank) => nivelar(rank)}
        onSair={() => setTela("dashboard")}
      />
    );
  }

  if (tela === "avatar") {
    return (
      <Avatar
        progresso={progresso}
        onEquipar={equiparAvatar}
        onPersonalizar={personalizar}
        onSair={() => setTela("dashboard")}
      />
    );
  }

  if (tela === "exercicio") {
    const track = trackDe(progresso.classe);
    const ex = track.find((e) => e.id === exId) ?? track[0];
    const eq = equipado(progresso);
    return (
      <Exercicio
        exercicio={ex}
        fraturado={fraturado}
        classe={progresso.classe}
        criador={ehCriador(progresso) && !comoJogador}
        linguagem={linguagemDoJogador(progresso)}
        heroiCor={cosmetico(eq.cor).valor}
        heroiSeed={semente(progresso.classe || "Caçador")}
        heroi={{ cfg: configPersonagem(progresso), classe: progresso.classe || "O Arquiteto", equip: progresso.equip || {}, criadorQuadro: ehCriador(progresso) ? quadroDoCriador(progresso) : null }}
        onSair={() => { setTela(comoJogador ? "dominio" : "dashboard"); setComoJogador(false); }}
        onDerrota={() => {
          if (comoJogador || (progresso.maldicao || 0) > 0) return; // teste não conta; já amaldiçoado não acumula
          atualizar({ ...progresso, maldicao: 3 });
          abreCinema("maldicao");
        }}
        onVencer={(suspeito, dropId) => {
          if (comoJogador) { setComoJogador(false); setTela("dominio"); return; } // teste não mexe no progresso
          vencer(ex, suspeito, dropId);
        }}
      />
    );
  }

  if (tela === "dashboard") {
    return (
      <Dashboard
        progresso={progresso}
        subiuPara={subiuPara}
        onFecharRankUp={() => setSubiuPara(null)}
        onVoltar={() => setTela("entrada")}
        onEnfrentar={enfrentar}
        onNivelar={() => setTela("nivelamento")}
        onRecusarNivelamento={recusarNivelamento}
        onAbrirAvatar={() => setTela("avatar")}
        onAbrirPerfil={() => setTela("perfil")}
        onAbrirMochila={() => setTela("mochila")}
        criador={ehCriador(progresso)}
        onAbrirDominio={() => setTela("dominio")}
        aviso={aviso}
        onFecharAviso={() => setAviso(null)}
        mostrarAscensao={ascensao}
        monarca={monarcaDe(progresso.classe)}
        onAceitarSubclasse={aceitarSubclasse}
        onRecusarSubclasse={recusarSubclasse}
      />
    );
  }

  return <Entrada onIniciar={iniciar} />;
}

export default App;
