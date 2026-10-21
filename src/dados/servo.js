// As falas do Servo do Criador. Ele tem medo do Criador, é meio preguiçoso e
// quer MUITO que o aluno aprenda logo para não levar bronca. Tom: divertido,
// direto, sem xingar o aluno — a pressão é sobre ele, não sobre quem estuda.
const sorteia = (lista) => lista[(Math.random() * lista.length) | 0];

export const FALAS = {
  conceito: [
    "Cara, presta atenção, isso aqui é rapidinho. Se tu não aprender, O Criador vai ficar bravo comigo.",
    "Olha, eu sou só o ajudante, mas o recado é sério: entende essa parte antes de lutar, tá?",
    "Lê com calma. O Criador vai olhar o que você aprendeu e depois quem vai levar a bronca sou eu.",
  ],
  demo: [
    "Agora fica de olho: O Criador vai fazer na tua frente. Eu explico cada passo, mas ele que manda.",
    "Shhh. O Criador vai resolver. Olha o que muda a cada linha, é aí que a mágica acontece.",
  ],
  demoFim: [
    "Viu? Não tem mistério. Ele fez, o monstro caiu e eu respirei aliviado.",
    "Pronto. Ficou claro? Se não, volta e assiste de novo. Eu não conto pra ninguém.",
  ],
  guiado: [
    "Sua vez! Eu deixei umas lacunas (___) pra você completar. Pensa no que o Criador fez.",
    "Agora é contigo, mas tem rede de proteção: só preencher o que falta. Vai lá, rápido!",
  ],
  guiadoLacuna: [
    "Ainda tem lacuna (___) aí, cara. Preenche tudo antes de enviar.",
  ],
  guiadoErro: [
    "Quase! Olha os casos de teste aí embaixo e compara com o que o Criador fez.",
    "Não foi dessa vez, mas tá perto. Releia a demonstração, é a mesma coisa.",
    "Ai, ai... confere cada lacuna. O Criador vai perguntar o que deu errado.",
  ],
  guiadoOk: [
    "Isso! Você fez igualzinho ao Criador. Agora o monstro de verdade, sem lacuna.",
    "Perfeito! Eu até me emocionei. Bora pra luta, e sem colar, hein.",
  ],
  pronto: [
    "Agora vai sozinho. Se travar, tem dica e aula. Eu confio em você. Mais ou menos.",
  ],
};

export const fala = (tipo) => sorteia(FALAS[tipo] || [""]);
