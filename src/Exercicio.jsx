import { useState, useEffect, useRef, useMemo } from "react";
import EditorAuto from "./EditorAuto";
import "./App.css";
import BotaoVoltar from "./BotaoVoltar";
import { RANKS } from "./dados/exercicios";
import { AJUDA, linkAula } from "./dados/ajuda";
import { LICOES, linkPesquisa } from "./dados/licoes";
import { executar, executarPrograma, chamada, avaliarPrompt } from "./executa";
import { starterDe } from "./dados/linguagens";
import Batalha from "./Batalha";
import ItemIcon from "./ItemIcon";
import { sortearDrop, item as itemEquip, RARIDADES, buffDe, buffsTotais } from "./dados/equipamento";
import { instanciar } from "./dados/gerador";
import Prova from "./Prova";
import { PROVAS } from "./dados/provas";
import CriadorAviso from "./CriadorAviso";
import { analisarEstilo } from "./dados/estilo";

// Tela de combate: enunciado + dica + aula + editor. No protótipo o código roda
// no próprio navegador; no produto real vai para o sandbox do servidor, que
// também é quem mede a integridade de verdade.

// nas tasks de dados, a base (lista de objetos) vira o rótulo "base" em vez de
// despejar o JSON inteiro na chamada de exemplo.
const rotuloArg = (a) => (Array.isArray(a) && (a.length === 0 || typeof a[0] === "object") ? "base" : JSON.stringify(a));
const chamadaDados = (fn, entrada) => fn + "(" + entrada.map(rotuloArg).join(", ") + ")";

// nível mostrado quando o portal fratura: um degrau acima.
function nivelAcima(nivel) {
  const i = RANKS.indexOf(nivel);
  return i >= 0 && i < RANKS.length - 1 ? RANKS[i + 1] : nivel;
}

const LIMITE_RAPIDO_MS = 10000; // terminar antes disso = "rápido demais"

export default function Exercicio({ exercicio, fraturado, classe, criador, linguagem, heroiCor, heroiSeed, heroi, onSair, onVencer, onDerrota }) {
  // moldes geram uma variação nova (prática infinita, sempre correta). O botão
  // "sortear outra" troca a semente. Exercício estático passa direto.
  const [seed, setSeed] = useState(() => (Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0);
  const ex = useMemo(() => instanciar(exercicio, seed), [exercicio, seed]);
  const ajuda = AJUDA[ex.id];
  const licao = LICOES[ex.id];
  const ehPrompt = ex.tipo === "prompt";
  const ehPrograma = ex.modo === "programa"; // escreve na tela, em vez de devolver um valor
  const arte = ex.arte || ex.id; // imagem do monstro (provisória, quando o monstro ainda não tem arte própria)
  const ehSeguranca = ex.tipo === "seguranca";
  const ehDados = ex.tipo === "dados";
  const testes = ehPrompt || ehPrograma ? [] : fraturado ? [...ex.testes, ...(ex.fratura || [])] : ex.testes;
  const xpGanho = ex.xp * (fraturado ? 2 : 1);
  const nivelMostrado = fraturado ? nivelAcima(ex.nivel) : ex.nivel;

  const lang = linguagem || { id: "js", nome: "JavaScript", monaco: "javascript" };
  const [codigo, setCodigo] = useState(() => starterDe(ex, lang.id));
  const [saida, setSaida] = useState(null);
  const [venceu, setVenceu] = useState(false);
  const [flags, setFlags] = useState([]);
  const [drop, setDrop] = useState(null); // id do item que caiu, se caiu
  const [mostrarDica, setMostrarDica] = useState(false);
  const [mostrarLicao, setMostrarLicao] = useState(false);
  const [batalha, setBatalha] = useState(null); // null | "vitoria" | "derrota"
  const [prova, setProva] = useState(false); // prova de ascensão (exame)
  const [provaEstilo, setProvaEstilo] = useState(null); // portão de "explique a técnica"
  const [colarBloqueado, setColarBloqueado] = useState(false); // tentou colar

  // o Criador não é barrado (é a própria lei da masmorra); os outros não colam
  function barrarColar() {
    colouRef.current = true;
    if (!criador) setColarBloqueado(true);
  }

  // marcadores de integridade (primeira camada, no navegador)
  const inicioRef = useRef(Date.now());
  const colouRef = useRef(false);
  const saiuRef = useRef(0);

  useEffect(() => {
    inicioRef.current = Date.now();
    function aoSair() {
      if (document.hidden) saiuRef.current += 1;
    }
    document.addEventListener("visibilitychange", aoSair);
    return () => document.removeEventListener("visibilitychange", aoSair);
  }, [ex.id]);

  function aoMontarEditor(editor) {
    // bloqueia o colar no editor (captura antes do Monaco tratar) e avisa
    const node = editor.getDomNode();
    if (node) {
      const barrar = (e) => { e.preventDefault(); e.stopPropagation(); barrarColar(); };
      node.addEventListener("paste", barrar, true);
      node.addEventListener("drop", barrar, true); // arrastar-e-soltar também é colar
    }
  }

  async function enfrentar() {
    const r = ehPrompt
      ? avaliarPrompt(codigo, ex.requisitos)
      : ehPrograma
        ? await executarPrograma(lang.id, codigo, ex.saida, ex.exige)
        : await executar(lang.id, codigo, ex.fn, testes);
    setSaida(r);
    if (r.erro) return; // não compilou / prompt curto demais: só mostra o aviso
    const ok = r.resultados.length && r.resultados.every((x) => x.ok);
    if (ok) {
      const f = [];
      if (colouRef.current) f.push(ehPrompt ? "colou o prompt" : "colou código no editor");
      if (saiuRef.current > 0) f.push(`saiu da aba ${saiuRef.current}x`);
      if (!ex.semLimiteDeTempo && Date.now() - inicioRef.current < LIMITE_RAPIDO_MS) f.push("resolveu rápido demais");
      setFlags(f);
      setDrop(sortearDrop(classe, { chefe: ex.chefe, fraturado, buffs: buffsTotais(heroi?.equip) }));
      setBatalha("vitoria");
    } else {
      setBatalha("derrota");
    }
  }

  function novaVariacao() {
    setSeed((Date.now() ^ ((Math.random() * 1e9) | 0)) >>> 0);
    setSaida(null);
  }

  // fim da animação de batalha: vitória abre o card de recompensa; derrota só
  // volta pro editor com o resultado dos testes à mostra.
  function fimBatalha() {
    const r = batalha;
    setBatalha(null);
    if (r !== "vitoria") { onDerrota?.(); return; }
    // vitória suspeita de jogador comum: o Criador intervém (sem card de vitória)
    if (flags.length > 0 && !criador) {
      onVencer(true, drop);
    } else if (ex.chefe && PROVAS[ex.id]) {
      // exame: antes do rank, a Prova de Ascensão
      setProva(true);
    } else {
      // monstro comum: técnica avançada além do nível? prove que entende
      const perguntas = ehPrompt || ehPrograma || lang.id !== "js" ? [] : analisarEstilo(codigo, ex.nivel);
      if (perguntas.length) setProvaEstilo({ mc: perguntas });
      else setVenceu(true);
    }
  }

  // nos programas, o primeiro resultado é a saída; os demais são o que o monstro exige do código
  const itensExigidos = ehPrograma ? (saida?.resultados?.length ? saida.resultados.slice(1) : ex.exige || []) : [];
  const publicos = saida?.resultados.filter((r) => r.publico) ?? [];
  const totalOk = saida?.resultados.filter((r) => r.ok).length ?? 0;
  const ocultosFalharam = saida && !saida.erro && saida.resultados.some((r) => !r.publico && !r.ok);
  const casosVisiveis = publicos.length ? publicos : testes.filter((t) => t.publico);

  return (
    <div className={"ex" + (fraturado ? " fratura" : "")}>
      <header className="ex-top">
        <BotaoVoltar onClick={onSair} />
        <div className="ex-tag" translate="no">
          {fraturado
            ? `FRATURA DE PORTAL · NÍVEL ${nivelMostrado}`
            : ex.chefe
            ? `EXAME DE ASCENSÃO · NÍVEL ${ex.nivel}`
            : `MONSTRO · NÍVEL ${ex.nivel}`}
        </div>
        <div style={{ width: 90 }} />
      </header>

      {fraturado && (
        <div className="ex-alerta">
          O portal FRATUROU. O monstro ficou mais forte e os testes mais duros — mas a recompensa dobrou.
        </div>
      )}

      <div className="ex-grid">
        <section className="ex-enunciado">
          <img
            className="ex-monstro"
            src={`/monstros/${arte}.png`}
            alt={ex.titulo}
            draggable="false"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <h1 className="ex-nome">{ex.titulo}</h1>
          <p className="ex-texto">{ex.enunciado}</p>
          <div className="ex-recompensa" translate="no">
            Recompensa: +{xpGanho} XP{fraturado ? " (dobrado) · Fragmento de Portal" : ""}
          </div>

          {ehDados && ex.base && (
            <div className="ex-base">
              <div className="ex-base-titulo" translate="no">base (lista 'vendas')</div>
              <ul className="ex-base-lista" translate="no">
                {ex.base.map((o, i) => (
                  <li key={i}>{Object.entries(o).map(([k, val]) => `${k}: ${val}`).join("  ·  ")}</li>
                ))}
              </ul>
            </div>
          )}

          {(ajuda || licao) && (
            <div className="ex-ajuda">
              <div className="ex-ajuda-botoes">
                {licao && (
                  <button className="ex-aj-btn aprender" onClick={() => setMostrarLicao((v) => !v)}>
                    {mostrarLicao ? "Fechar lição" : "Aprender (leitura)"}
                  </button>
                )}
                {ajuda && (
                  <button className="ex-aj-btn" onClick={() => setMostrarDica((v) => !v)}>
                    {mostrarDica ? "Esconder dica" : "Ver dica"}
                  </button>
                )}
                {ajuda && (
                  <a className="ex-aj-btn aula" href={linkAula(ajuda.aula)} target="_blank" rel="noreferrer">
                    ▸ Assistir aula{ajuda.aula.canal ? ` · ${ajuda.aula.canal}` : ""}
                  </a>
                )}
              </div>

              {mostrarLicao && licao && (
                <div className="ex-licao">
                  <div className="ex-licao-conceito">{licao.conceito}</div>
                  <p className="ex-licao-leitura">{licao.leitura}</p>
                  <div className="ex-licao-sub">Passos (o caminho, não a resposta)</div>
                  <ol className="ex-licao-passos">
                    {licao.passos.map((p, i) => <li key={i}>{p}</li>)}
                  </ol>
                  <div className="ex-licao-sub">Pra pesquisar</div>
                  <div className="ex-licao-pesquisa">
                    {licao.pesquisa.map((termo, i) => (
                      <a key={i} href={linkPesquisa(termo)} target="_blank" rel="noreferrer">{termo}</a>
                    ))}
                  </div>
                </div>
              )}

              {mostrarDica && ajuda && <p className="ex-dica">{ajuda.dica}</p>}
            </div>
          )}

          <div className="ex-sec">{ehPrompt ? "O que um bom prompt precisa ter" : ehPrograma ? "O que deve aparecer na tela" : ehSeguranca ? "Testes (incluem ataques)" : "Casos de teste"}</div>
          {ehPrograma ? (
            <div className="ex-tela">
              <pre translate="no">{ex.saida}</pre>
              {itensExigidos.length > 0 && (
                <ul className="ex-casos ex-requisitos">
                  {itensExigidos.map((r, i) => {
                    const avaliado = "ok" in r;
                    return (
                      <li key={i} className={avaliado ? (r.ok ? "ok" : "fail") : ""}>
                        {avaliado && <b>{r.ok ? "✓ " : "✗ "}</b>}
                        {r.nome}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ) : ehPrompt ? (
            <ul className="ex-casos ex-requisitos">
              {(saida?.resultados?.length ? saida.resultados : ex.requisitos).map((r, i) => {
                const avaliado = "ok" in r;
                return (
                  <li key={i} className={avaliado ? (r.ok ? "ok" : "fail") : ""}>
                    {avaliado && <b>{r.ok ? "✓ " : "✗ "}</b>}
                    {r.nome}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul className="ex-casos" translate="no">
              {casosVisiveis.map((t, i) => {
                const avaliado = "ok" in t && publicos.length > 0;
                return (
                  <li key={i} className={avaliado ? (t.ok ? "ok" : "fail") : ""}>
                    {avaliado && <b>{t.ok ? "✓ " : "✗ "}</b>}
                    <code>{ehDados ? chamadaDados(ex.fn, t.in) : chamada(ex.fn, t.in)}</code> → <code>{JSON.stringify(t.out)}</code>
                    {avaliado && !t.ok && <> · veio <code>{JSON.stringify(t.got)}</code></>}
                  </li>
                );
              })}
            </ul>
          )}

          {exercicio.molde && (
            <button className="ex-variacao" onClick={novaVariacao}>↻ sortear outra variação</button>
          )}
        </section>

        <section className="ex-editor">
          <div className="ex-editor-top" translate="no">{ehPrompt ? "SEU PROMPT" : lang.nome}</div>
          <div className={"ex-monaco" + (ehPrompt ? "" : " auto")}>
            {ehPrompt ? (
              <textarea
                className="ex-prompt"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                onPaste={(e) => { e.preventDefault(); barrarColar(); }}
                onDrop={(e) => { e.preventDefault(); barrarColar(); }}
                placeholder={ex.placeholder || "Escreva aqui o prompt que você mandaria para a IA..."}
                spellCheck={false}
              />
            ) : (
              <EditorAuto
                min={160}
                max={560}
                language={lang.monaco}
                value={codigo}
                onChange={(v) => setCodigo(v ?? "")}
                onMount={aoMontarEditor}
              />
            )}
          </div>
          <div className="ex-acoes">
            <button className="botao" onClick={enfrentar}>
              {fraturado ? "Enfrentar o portal" : ehPrompt ? "Conjurar o prompt" : "Enfrentar o monstro"}
            </button>
          </div>
          {saida?.erro && <div className="ex-erro">{saida.erro}</div>}
          {ehPrograma && saida && !saida.erro && (
            <div className="ex-veio">
              <div className="ex-veio-titulo" translate="no">O SEU PROGRAMA MOSTROU</div>
              <pre translate="no">{saida.got === "" ? "(nada apareceu na tela)" : saida.got}</pre>
            </div>
          )}
          {saida && !saida.erro && (
            <div className={"ex-resultado " + (totalOk === saida.resultados.length ? "ok" : "fail")}>
              {totalOk} de {saida.resultados.length} {ehPrompt || ehPrograma ? "requisitos atendidos" : "testes passaram"}
              {!ehPrompt && ocultosFalharam && <span className="ex-oculto"> — alguns casos ocultos falharam</span>}
            </div>
          )}
        </section>
      </div>

      {batalha && (
        <Batalha
          resultado={batalha}
          corHeroi={heroiCor || "#0beef5"}
          seedHeroi={heroiSeed || 1}
          heroi={heroi}
          monstro={{ id: arte, nome: ex.titulo, nivel: nivelMostrado }}
          fraturado={fraturado}
          criador={criador}
          onFim={fimBatalha}
        />
      )}

      {prova && (
        <Prova
          prova={PROVAS[ex.id]}
          onColar={barrarColar}
          onAprovado={() => { setProva(false); setVenceu(true); }}
          onReprovado={() => { setProva(false); onSair(); }}
        />
      )}

      {provaEstilo && (
        <Prova
          prova={provaEstilo}
          onColar={barrarColar}
          onAprovado={() => { setProvaEstilo(null); setVenceu(true); }}
          onReprovado={() => { setProvaEstilo(null); onSair(); }}
        />
      )}

      {colarBloqueado && <CriadorAviso tipo="warn" onFechar={() => setColarBloqueado(false)} />}

      {venceu && (
        <div className={"ex-vitoria" + (fraturado ? " fratura" : "")}>
          <div className="ex-vitoria-card">
            <div className="ex-vitoria-tag" translate="no">
              {fraturado ? "PORTAL SELADO" : ex.chefe ? "EXAME APROVADO" : "MONSTRO DERROTADO"}
            </div>
            <h2>{ex.titulo} caiu.</h2>
            <p translate="no">
              +{xpGanho} XP{fraturado ? " · Fragmento de Portal (lendário)" : ""}
            </p>
            {drop && itemEquip(drop) && (
              <div className="ex-drop" style={{ "--rc": RARIDADES[itemEquip(drop).raridade].cor }}>
                <ItemIcon item={itemEquip(drop)} tamanho={40} />
                <div className="ex-drop-txt">
                  <span className="ex-drop-label">ITEM DROPADO</span>
                  <span className="ex-drop-nome">{itemEquip(drop).nome}</span>
                  <span className="ex-drop-rar" translate="no">{RARIDADES[itemEquip(drop).raridade].nome}</span>
                  {buffDe(itemEquip(drop)) && <span className="ex-drop-rar">{buffDe(itemEquip(drop)).rotulo}</span>}
                </div>
              </div>
            )}
            {flags.length > 0 && (
              <div className="ex-integridade">
                <b>Integridade: sinais detectados</b>
                <ul>
                  {flags.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <span>No produto final, uma vitória assim entra para revisão.</span>
              </div>
            )}
            <button className="botao" onClick={() => onVencer(flags.length > 0, drop)}>Continuar</button>
          </div>
        </div>
      )}
    </div>
  );
}
