// Track do ORÁCULO (Engenharia de Prompt). tipo: "prompt" -> a tela de combate
// usa uma caixa de texto e corrige por RUBRICA (requisitos), não por teste de
// código. Cada requisito é uma checagem determinística sobre o texto do prompt.
// (No servidor, um juiz-IA vai avaliar a qualidade de verdade; isto é a 1ª camada.)

const min = (n) => (t) => t.trim().length >= n;
const papel = (t) => /(aja como|voc[eê] [eé] um|como um[a]? |atue como|assuma o papel|especialista em|seja um)/i.test(t);
const formato = (t) => /(formato|em t[oó]picos|lista|tabela|json|markdown|passo a passo|exemplo de sa[ií]da|no m[aá]ximo|par[aá]grafo|se[çc][aã]o)/i.test(t);
const restricao = (t) => /(n[aã]o use|evite|apenas|somente|limite|no m[aá]ximo|em portugu[eê]s|sem usar|restri[çc])/i.test(t);
const exemplo = (t) => /(exemplo|por exemplo|como no caso|ex:|por ex)/i.test(t);
const passoApasso = (t) => /(passo a passo|pense|racioc[ií]|etapas|antes de responder|em etapas)/i.test(t);
const refine = (t) => /(melhore|refine|revise|itere|aprimore|reescreva|cr[ií]tica)/i.test(t);
const estruturado = (t) => /(json|tabela|campos|chaves|em se[çc][õo]es|formato de sa[ií]da|estrutura)/i.test(t);
const doisExemplos = (t) => (t.match(/exemplo/gi) || []).length >= 2;

export const ORACULO = [
  {
    id: "orac-pedido", tipo: "prompt", nivel: "E", xp: 80, arte: "orac-resumo",
    titulo: "Eco Mudo", fraqueza: "Pedir de forma direta", tempo: "~4 min",
    enunciado:
      "Seu primeiro prompt! Peça à IA uma receita de bolo de chocolate. Comece com um verbo que diga o que você quer " +
      "(escreva, crie, me dê, ensine...) e diga qual é o assunto.",
    placeholder: "Escreva aqui o que você pediria para a IA...",
    requisitos: [
      { nome: "Começa com um pedido claro (escreva, crie, me dê, ensine...)", ok: (t) => /(escreva|crie|me d[eê]|d[eê]-me|ensine|quero|preciso|fa[cç]a|mostre|monte)/i.test(t) },
      { nome: "Diz o assunto (receita de bolo de chocolate)", ok: (t) => /bolo/i.test(t) && /chocolate/i.test(t) },
      { nome: "Tem pelo menos uma frase completa", ok: min(25) },
    ],
  },
  {
    id: "orac-contexto", tipo: "prompt", nivel: "E", xp: 100, arte: "orac-explica",
    titulo: "Sombra do Contexto", fraqueza: "Dar contexto", tempo: "~6 min",
    enunciado:
      "Peça à IA ideias de presente de aniversário. Mas dê contexto: diga PARA QUEM é o presente e QUANTO você pode gastar. " +
      "Quanto mais a IA souber, melhor a sugestão.",
    placeholder: "Escreva aqui o prompt pedindo ideias de presente...",
    requisitos: [
      { nome: "Pede ideias ou sugestões de presente", ok: (t) => /(ideia|sugest|sugira|recomend|presente)/i.test(t) && /presente/i.test(t) },
      { nome: "Diz para quem é (mãe, amigo, irmã, colega...)", ok: (t) => /(m[aã]e|pai|amig|irm[aã]o?|namorad|colega|av[oó]|prim[oa]|professor|chefe|esposa|marido)/i.test(t) },
      { nome: "Diz quanto pode gastar (orçamento)", ok: (t) => /(r\$|reais|or[cç]amento|gastar|at[eé] \d|\d+ reais)/i.test(t) },
      { nome: "Tem detalhe suficiente (não é vago)", ok: min(60) },
    ],
  },
  {
    id: "orac-explica", tipo: "prompt", nivel: "E", xp: 120,
    titulo: "Eco do Prompt Vago", fraqueza: "Clareza", tempo: "~8 min",
    enunciado:
      "Escreva um PROMPT pedindo à IA para explicar o que é uma 'variável' em programação " +
      "para alguém que nunca programou. Um bom prompt diz PARA QUEM é e COMO quer a resposta.",
    placeholder: "Escreva aqui o prompt que você mandaria para a IA...",
    requisitos: [
      { nome: "Define o público (iniciante/leigo)", ok: (t) => /(iniciante|leig|nunca program|do zero|crian|simples)/i.test(t) },
      { nome: "Pede explicação clara do conceito", ok: (t) => /(explique|explicar|o que [eé]|conceito|signific)/i.test(t) },
      { nome: "Pede uma analogia ou exemplo", ok: (t) => /(analogia|exemplo|compare|como se|met[aá]fora)/i.test(t) },
      { nome: "Tem detalhe suficiente (não é vago)", ok: min(60) },
    ],
  },
  {
    id: "orac-resumo", tipo: "prompt", nivel: "E", xp: 120,
    titulo: "Névoa da Ambiguidade", fraqueza: "Restrições e formato", tempo: "~8 min",
    enunciado:
      "Escreva um PROMPT que peça à IA para resumir um texto. Deixe claro o TAMANHO do resumo " +
      "e o FORMATO (ex.: em tópicos). Dizer 'resuma isso' é pouco.",
    placeholder: "Ex.: Resuma o texto abaixo em...",
    requisitos: [
      { nome: "Pede o resumo explicitamente", ok: (t) => /(resum|sintetiz)/i.test(t) },
      { nome: "Define tamanho/limite", ok: (t) => /(no m[aá]ximo|em \d|at[eé] \d|\d+ (palavras|linhas|frases|t[oó]picos)|curto|breve)/i.test(t) },
      { nome: "Define o formato da saída", ok: formato },
      { nome: "Tem detalhe suficiente", ok: min(60) },
    ],
  },
  {
    id: "orac-exame-e", tipo: "prompt", nivel: "E", xp: 320, chefe: true, promoveA: "D",
    titulo: "Oráculo Silencioso", fraqueza: "Prompt completo", tempo: "~15 min",
    enunciado:
      "EXAME DE ASCENSÃO. Monte um PROMPT COMPLETO para a IA gerar uma página de portfólio pessoal. " +
      "Um prompt forte tem: papel da IA, contexto, restrições, formato de saída e um exemplo.",
    placeholder: "Aja como... Preciso de... Restrições... Formato... Exemplo...",
    requisitos: [
      { nome: "Dá um papel/persona à IA", ok: papel },
      { nome: "Dá contexto suficiente", ok: min(140) },
      { nome: "Define restrições", ok: restricao },
      { nome: "Define o formato da saída", ok: formato },
      { nome: "Inclui um exemplo", ok: exemplo },
    ],
  },
  {
    id: "orac-imagem", tipo: "prompt", nivel: "D", xp: 180,
    titulo: "Miragem Difusa", fraqueza: "Prompt de imagem", tempo: "~10 min",
    enunciado:
      "Escreva um PROMPT para uma IA de IMAGEM gerar a arte de um monstro desta masmorra, em pixel art. " +
      "Imagem precisa de estilo, cores, enquadramento e clima bem descritos.",
    placeholder: "Pixel art de um... estilo... cores... fundo...",
    requisitos: [
      { nome: "Descreve o assunto da imagem", ok: min(40) },
      { nome: "Define o estilo (pixel art/8-bit etc.)", ok: (t) => /(pixel art|8.?bit|16.?bit|retr[oô]|estilo)/i.test(t) },
      { nome: "Fala de cores/paleta", ok: (t) => /(cor|cores|paleta|tom|colorid|vermelh|azul|neon)/i.test(t) },
      { nome: "Define enquadramento ou fundo", ok: (t) => /(fundo|enquadr|vista|frente|corpo inteiro|close|cen[aá]rio|transparente)/i.test(t) },
    ],
  },
  {
    id: "orac-persona", tipo: "prompt", nivel: "D", xp: 180,
    titulo: "Fantasma sem Voz", fraqueza: "Persona e tom", tempo: "~10 min",
    enunciado:
      "Escreva um PROMPT que transforme a IA num tutor de programação com personalidade. " +
      "Defina QUEM ela é, COMO fala e o que NÃO deve fazer (ex.: não entregar a resposta pronta).",
    placeholder: "Aja como um tutor que... seu tom é... você nunca...",
    requisitos: [
      { nome: "Define o papel/persona", ok: papel },
      { nome: "Define o tom/estilo de fala", ok: (t) => /(tom|estilo|descontra[ií]d|amig[aá]vel|paciente|bem.?humor|formal|voz)/i.test(t) },
      { nome: "Define uma restrição de comportamento", ok: restricao },
      { nome: "Tem detalhe suficiente", ok: min(80) },
    ],
  },
  {
    id: "orac-exame-d", tipo: "prompt", nivel: "D", xp: 440, chefe: true, promoveA: "C",
    titulo: "Arauto da Alucinação", fraqueza: "Prompt à prova de erro", tempo: "~18 min",
    enunciado:
      "EXAME DE ASCENSÃO. A IA 'alucina' quando o prompt é frouxo. Monte um PROMPT para gerar uma " +
      "função de validação de CPF, blindado contra respostas erradas: papel, contexto, restrições, " +
      "formato e um exemplo de entrada/saída.",
    placeholder: "Aja como... Preciso de... Regras... Formato... Exemplo de entrada e saída...",
    requisitos: [
      { nome: "Dá um papel/persona à IA", ok: papel },
      { nome: "Dá contexto técnico claro", ok: min(160) },
      { nome: "Define restrições/regras", ok: restricao },
      { nome: "Define o formato da saída", ok: formato },
      { nome: "Inclui exemplo de entrada/saída", ok: exemplo },
    ],
  },
  {
    id: "orac-cot", tipo: "prompt", nivel: "C", xp: 240,
    titulo: "Vulto do Raciocínio", fraqueza: "Pensar em etapas", tempo: "~12 min",
    enunciado:
      "A IA acerta mais quando é levada a RACIOCINAR antes de responder. Escreva um prompt para resolver " +
      "um problema de lógica que peça o raciocínio passo a passo e só depois a resposta final.",
    placeholder: "Pense passo a passo... depois dê a resposta final...",
    requisitos: [
      { nome: "Pede raciocínio passo a passo", ok: passoApasso },
      { nome: "Pede a resposta final separada", ok: (t) => /(resposta final|no final|ao fim|conclua|por fim)/i.test(t) },
      { nome: "Descreve a tarefa com clareza", ok: min(80) },
    ],
  },
  {
    id: "orac-exame-c", tipo: "prompt", nivel: "C", xp: 600, chefe: true, promoveA: "B",
    titulo: "Guardião do Formato", fraqueza: "Saída estruturada", tempo: "~18 min",
    enunciado:
      "EXAME DE ASCENSÃO. Sistemas consomem a saída da IA — ela precisa vir num formato EXATO. Escreva um " +
      "prompt que gere os dados de um personagem e exija a resposta em formato estruturado (ex.: JSON com campos definidos).",
    placeholder: "Aja como... gere... responda SOMENTE em JSON com os campos...",
    requisitos: [
      { nome: "Dá um papel/persona à IA", ok: papel },
      { nome: "Exige formato estruturado (JSON/campos)", ok: estruturado },
      { nome: "Define restrições (só o formato, nada além)", ok: restricao },
      { nome: "Dá contexto suficiente", ok: min(120) },
      { nome: "Mostra um exemplo da estrutura", ok: exemplo },
    ],
  },
  {
    id: "orac-refino", tipo: "prompt", nivel: "B", xp: 320,
    titulo: "Eco Iterativo", fraqueza: "Refinar a resposta", tempo: "~15 min",
    enunciado:
      "Um bom resultado raramente vem de primeira. Escreva um prompt que faça a IA gerar uma resposta e, " +
      "em seguida, CRITICAR e MELHORAR a própria resposta segundo um critério de qualidade.",
    placeholder: "Gere X. Depois critique sua resposta e reescreva melhorando...",
    requisitos: [
      { nome: "Pede para refinar/melhorar a própria resposta", ok: refine },
      { nome: "Define um critério de qualidade", ok: (t) => /(crit[eé]rio|claro|conciso|correto|melhor|avalie|verifique)/i.test(t) },
      { nome: "Descreve a tarefa com clareza", ok: min(90) },
    ],
  },
  {
    id: "orac-exame-b", tipo: "prompt", nivel: "B", xp: 760, chefe: true, promoveA: "A",
    titulo: "Arauto dos Exemplos", fraqueza: "Few-shot", tempo: "~20 min",
    enunciado:
      "EXAME DE ASCENSÃO. Ensinar a IA por EXEMPLOS (few-shot) é uma das técnicas mais fortes. Escreva um " +
      "prompt que classifique o sentimento de uma frase, trazendo PELO MENOS DOIS exemplos de entrada e saída.",
    placeholder: "Classifique o sentimento. Exemplo 1: ... Exemplo 2: ... Agora classifique:",
    requisitos: [
      { nome: "Dá um papel ou tarefa clara", ok: (t) => papel(t) || /(classif|analise|determine)/i.test(t) },
      { nome: "Traz pelo menos DOIS exemplos", ok: doisExemplos },
      { nome: "Define o formato da resposta", ok: formato },
      { nome: "Tem contexto suficiente", ok: min(120) },
    ],
  },
  {
    id: "orac-sistema", tipo: "prompt", nivel: "A", xp: 480,
    titulo: "Sussurro do Sistema", fraqueza: "Prompt de sistema", tempo: "~18 min",
    enunciado:
      "O prompt de SISTEMA molda todo o comportamento de um assistente. Escreva um prompt de sistema para um " +
      "tutor de código: quem ele é, como fala, o que sempre faz e o que nunca faz.",
    placeholder: "Você é um tutor que... seu tom é... você sempre... você nunca...",
    requisitos: [
      { nome: "Define o papel/identidade", ok: papel },
      { nome: "Define o tom/estilo", ok: (t) => /(tom|estilo|paciente|amig[aá]vel|objetivo|voz|descontra)/i.test(t) },
      { nome: "Define regras do que sempre/nunca fazer", ok: restricao },
      { nome: "Tem detalhe suficiente", ok: min(120) },
    ],
  },
  {
    id: "orac-exame-a", tipo: "prompt", nivel: "A", xp: 1000, chefe: true, promoveA: "S",
    titulo: "A Palavra Primordial", fraqueza: "Prompt mestre", tempo: "~30 min",
    enunciado:
      "EXAME FINAL. Reúna tudo. Escreva um PROMPT MESTRE para a IA gerar um plano de estudos de programação " +
      "personalizado: papel, contexto rico, restrições, formato estruturado, um exemplo e raciocínio passo a passo.",
    placeholder: "Aja como... Contexto... Regras... Formato... Exemplo... Pense passo a passo...",
    requisitos: [
      { nome: "Dá um papel/persona à IA", ok: papel },
      { nome: "Dá contexto rico", ok: min(200) },
      { nome: "Define restrições", ok: restricao },
      { nome: "Exige formato estruturado", ok: estruturado },
      { nome: "Inclui um exemplo", ok: exemplo },
      { nome: "Pede raciocínio passo a passo", ok: passoApasso },
    ],
  },
];
