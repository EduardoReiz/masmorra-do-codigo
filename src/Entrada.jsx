import { useState, useEffect, useRef } from "react";
import "./App.css";
import DecryptedText from "./componentes/reactbits/DecryptedText";

// Tela de entrada: fundo interativo (código caindo + Monarca + cursor que
// explode) e a escolha de caminho. Ao iniciar, chama onIniciar(caminho).
export default function Entrada({ onIniciar }) {
  const canvasRef = useRef(null);
  const charRef = useRef(null);
  const cursorRef = useRef(null);
  const fxRef = useRef(null);
  const bubbleRef = useRef(null);
  const spriteCanvasRef = useRef(null);

  const [escolhido, setEscolhido] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const characterEl = charRef.current;
    const cursorEl = cursorRef.current;
    const fxLayer = fxRef.current;

    const spriteCanvas = spriteCanvasRef.current;
    const sctx = spriteCanvas.getContext("2d");
    sctx.imageSmoothingEnabled = false;
    const sprite = new Image();
    let spriteReady = false;
    sprite.onload = () => { spriteReady = true; };
    sprite.src = "/monarca_sprite.png";
    let desenhado = false;
    function drawSprite() {
      if (!spriteReady || desenhado) return;
      const W = spriteCanvas.width, H = spriteCanvas.height;
      sctx.clearRect(0, 0, W, H);
      sctx.drawImage(sprite, 0, 0, W, H);
      desenhado = true;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let cursorState = "ACTIVE";

    const LINES_IDLE = [
      "Outro aspirante a Rank E. Que original.",
      "Mexe o mouse com toda essa coragem... e o código, nada?",
      "O Sistema te observa. E não está impressionado.",
      "Rank E combina com você. Por enquanto.",
      "Já tentou desligar e ligar a sua carreira?",
    ];
    const LINES_POKE = [
      "Patético.",
      "Era o seu cursor. Era.",
      "Reconstrói esse mouse e pensa na vida.",
      "Cutuca de novo. Eu te desafio.",
    ];
    let bubbleTimer = null;
    const pick = (a) => a[(Math.random() * a.length) | 0];
    function say(txt, ms = 3600) {
      const b = bubbleRef.current;
      if (!b) return;
      b.textContent = txt;
      b.classList.add("on");
      clearTimeout(bubbleTimer);
      bubbleTimer = setTimeout(() => b.classList.remove("on"), ms);
    }
    let warned = false;

    const fontSize = 16;
    let columns, drops;
    function initMatrix() {
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) drops[x] = Math.random() * height;
    }
    initMatrix();
    function drawMatrix() {
      ctx.fillStyle = "rgba(5,9,20,0.12)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(11,238,245,0.38)";
      ctx.font = fontSize + "px monospace";
      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(Math.random() < 0.5 ? "0" : "1", i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.5;
      }
    }

    const CHAR = 130;
    let charX = width * 0.28, charY = height * 0.4, tX = charX, tY = charY;
    let cState = "idle", cTimer = 60;
    function updateChar() {
      if (cState === "idle") {
        if (--cTimer <= 0) {
          tX = Math.random() * (width - CHAR);
          tY = Math.random() * (height - CHAR);
          cState = "moving";
        }
      } else {
        const dx = tX - charX, dy = tY - charY, d = Math.hypot(dx, dy);
        if (d < 5) { cState = "idle"; cTimer = Math.random() * 120 + 50; }
        else { charX += (dx / d) * 1.4; charY += (dy / d) * 1.4; }
      }
      characterEl.style.transform = `translate(${charX}px, ${charY}px)`;
    }

    function onMove(e) {
      mouseX = e.clientX; mouseY = e.clientY;
      if (cursorState === "ACTIVE") { cursorEl.style.left = mouseX + "px"; cursorEl.style.top = mouseY + "px"; }
    }
    window.addEventListener("mousemove", onMove);

    let parts = [], chase = 0, regenTimeout = null;
    const CHASE_LIMIT = 75, CHASE_DIST = 110;
    const COLORS = ["#0beef5", "#ffffff", "#048c94", "#6be7ed"];
    function newParticle() {
      const el = document.createElement("div");
      el.className = "pixel-particle";
      const c = COLORS[(Math.random() * COLORS.length) | 0];
      el.style.backgroundColor = c; el.style.color = c;
      fxLayer.appendChild(el);
      return el;
    }
    function explode() {
      if (cursorState !== "ACTIVE") return;
      cursorState = "HIDDEN"; cursorEl.style.display = "none"; chase = 0;
      say(pick(LINES_POKE));
      parts = [];
      for (let i = 0; i < 40; i++) {
        const a = Math.random() * 6.283, sp = Math.random() * 8 + 2;
        parts.push({ el: newParticle(), x: mouseX, y: mouseY, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1, decay: Math.random() * 0.015 + 0.005 });
      }
      regenTimeout = setTimeout(regen, 3000);
    }
    function regen() {
      cursorState = "REGENERATING";
      parts.forEach((p) => p.el.remove());
      parts = [];
      for (let i = 0; i < 40; i++) parts.push({ el: newParticle(), x: Math.random() * width, y: Math.random() * height });
    }
    function onDownChar(e) { e.preventDefault(); explode(); }
    characterEl.addEventListener("mousedown", onDownChar);

    function onResize() { width = innerWidth; height = innerHeight; canvas.width = width; canvas.height = height; initMatrix(); }
    window.addEventListener("resize", onResize);

    let raf;
    function loop() {
      drawMatrix();
      updateChar();
      drawSprite();
      if (cursorState === "ACTIVE") {
        const cx = charX + CHAR / 2, cy = charY + CHAR / 2, d = Math.hypot(cx - mouseX, cy - mouseY);
        if (d < CHASE_DIST) {
          chase++; const t = Math.min(chase / CHASE_LIMIT, 1);
          if (chase === 22 && !warned) { warned = true; say("Perto demais. Última chance."); }
          cursorEl.style.transform = `scale(${1 + t * 0.8}) rotate(${Math.sin(chase * 0.5) * 20}deg)`;
          cursorEl.style.filter = `hue-rotate(${t * -150}deg) drop-shadow(0 0 ${t * 15}px red)`;
          if (chase >= CHASE_LIMIT) explode();
        } else {
          chase = Math.max(0, chase - 1.5);
          if (chase === 0) { warned = false; cursorEl.style.transform = "scale(1)"; cursorEl.style.filter = "none"; }
        }
      } else if (cursorState === "HIDDEN") {
        parts.forEach((p) => { p.x += p.vx; p.y += p.vy; p.life -= p.decay; p.vx *= 0.93; p.vy *= 0.93; p.el.style.left = p.x + "px"; p.el.style.top = p.y + "px"; p.el.style.opacity = Math.max(0, p.life); p.el.style.transform = `scale(${Math.max(0, p.life)})`; });
      } else if (cursorState === "REGENERATING") {
        let done = true;
        parts.forEach((p) => { const dx = mouseX - p.x, dy = mouseY - p.y, d = Math.hypot(dx, dy); p.x += dx * 0.1; p.y += dy * 0.1; p.el.style.left = p.x + "px"; p.el.style.top = p.y + "px"; p.el.style.opacity = 1; if (d > 5) done = false; else p.el.style.opacity = 0; });
        if (done) { parts.forEach((p) => p.el.remove()); parts = []; cursorState = "ACTIVE"; cursorEl.style.display = "block"; cursorEl.style.left = mouseX + "px"; cursorEl.style.top = mouseY + "px"; cursorEl.style.transform = "scale(1)"; cursorEl.style.filter = "none"; chase = 0; }
      }
      raf = requestAnimationFrame(loop);
    }
    cursorEl.style.left = mouseX + "px"; cursorEl.style.top = mouseY + "px";
    const idleSay = setInterval(() => { if (cursorState === "ACTIVE") say(pick(LINES_IDLE)); }, 11000);
    setTimeout(() => say("Então o Sistema te escolheu... eu tinha esperanças maiores."), 1400);
    loop();

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(idleSay);
      clearTimeout(bubbleTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      characterEl.removeEventListener("mousedown", onDownChar);
      if (regenTimeout) clearTimeout(regenTimeout);
      parts.forEach((p) => p.el.remove());
    };
  }, []);

  function Card({ nome, area, desc, cor, img }) {
    const sel = escolhido === nome;
    return (
      <article className={sel ? "card selecionado" : "card"} style={{ "--c": cor }} onClick={() => setEscolhido(nome)}>
        <div className="card-arte">{img && <img className="card-heroi" src={img} alt={nome} draggable="false" />}</div>
        <h2 className="cls">{nome}</h2>
        <p className="area">{area}</p>
        <p className="desc">{desc}</p>
      </article>
    );
  }

  return (
    <>
      <canvas ref={canvasRef} className="bg" />
      <div ref={fxRef} className="fx" />
      <div ref={charRef} className="char">
        <div ref={bubbleRef} className="bubble" />
        <canvas className="sprite" ref={spriteCanvasRef} width="160" height="209" />
      </div>
      <div ref={cursorRef} className="cursor">
        <svg viewBox="0 0 24 24"><path d="M2 2 L22 10 L13 12 L11 21 Z" fill="#0beef5" stroke="#fff" strokeWidth="1" strokeLinejoin="round" /></svg>
      </div>

      <main className="tela">
        <div className="hud">
          <span className="rk">E</span>
          <div><div className="who">JOGADOR</div><div className="lv">Nível 1</div></div>
          <div className="xpwrap">
            <div className="xpbar"><div className="xpfill" /></div>
            <div className="xptxt">XP 6 / 100 — próximo nível</div>
          </div>
        </div>

        <header className="topo">
          <p className="eyebrow">O SISTEMA DESPERTOU</p>
          <h1 className="titulo">
            <DecryptedText
              text="MASMORRA DO CÓDIGO"
              animateOn="view"
              sequential
              speed={38}
              maxIterations={14}
              revealDirection="start"
              characters="01<>/{}[]=+*#ABCDEF"
              scrambleColor="#0beef5"
            />
          </h1>
          <p className="sub">Escolha seu caminho e comece a subir de Rank.</p>
        </header>

        <section className="caminhos">
          <Card nome="O Arquiteto" area="Programação" cor="#0beef5" img="/herois/heroi-arquiteto.png" desc="Constrói mundos com lógica. Algoritmos e linguagens." />
          <Card nome="O Estrategista" area="Análise e Dev — ADS" cor="#9b7cff" img="/herois/heroi-estrategista.png" desc="Projeta, integra e entrega sistemas. Da ideia ao deploy." />
          <Card nome="O Sentinela" area="Cyber Security" cor="#ffcf5c" img="/herois/heroi-sentinela.png" desc="Defende as muralhas. Caça falhas e blinda sistemas." />
          <Card nome="O Oráculo" area="Engenharia de Prompt — IA" cor="#b06bff" img="/herois/heroi-oraculo.png" desc="Conversa com as máquinas. Domina a arte do prompt." />
        </section>

        <button className="botao" disabled={!escolhido} onClick={() => onIniciar(escolhido)}>
          {escolhido ? `Iniciar ascensão — ${escolhido}` : "Escolha um caminho"}
        </button>

        <div className="ladder" translate="no">
          <span className="cur">E</span><span>D</span><span>C</span><span>B</span><span>A</span><span>S</span>
          <span className="mon">MONARCA</span>
        </div>
      </main>
    </>
  );
}
