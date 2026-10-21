// Aulas do caminho do Oráculo (engenharia de prompt). O Criador monta o prompt em etapas; a cada etapa o
// gerador roda a rubrica REAL do monstro e marca o que já foi cumprido. Só JavaScript (o caminho não escolhe linguagem).
export default [
  {
    id: "orac-explica",
    modo: "prompt",
    conceito: "Um bom prompt diz o quê, para quem e como",
    porque:
      "A IA responde ao que você escreveu, e não ao que você pensou. Um pedido vago ('o que é variável?') recebe uma resposta genérica. Quando você diz a tarefa, para quem é a resposta e como quer receber, ela acerta muito mais.",
    analogia:
      "É como pedir um prato a um cozinheiro: 'faça comida' resulta numa surpresa. 'Faça um macarrão simples, sem pimenta, para uma criança' resulta no prato certo.",
    ideias: [
      { titulo: "Tarefa clara", texto: "Comece pelo verbo e pelo assunto: explique, resuma, compare." },
      { titulo: "Público", texto: "Dizer para quem é a resposta muda o vocabulário e o nível de detalhe." },
      { titulo: "Exemplo ou analogia", texto: "Pedir uma analogia faz o conceito ficar fácil de lembrar." },
    ],
    dicas: [
      { trecho: "Diga o que quer", explica: "Comece pela tarefa: 'Explique o que é uma variável'. Sem tarefa clara, a IA adivinha." },
      { trecho: "Diga para quem é", explica: "A mesma explicação muda conforme o leitor. 'Para quem nunca programou' faz a IA evitar termos técnicos." },
      { trecho: "Peça uma analogia", explica: "Uma comparação com o dia a dia ajuda o iniciante a entender sem decorar." },
      { trecho: "Dê detalhe", explica: "Pedido de meia frase deixa a IA adivinhar. Um pouco mais de contexto já melhora a resposta." },
    ],
    abertura: "O prompt começa em branco. O Criador vai montá-lo por partes, e cada parte cumpre um requisito.",
    passos: [
      { acrescenta: "Explique o que é uma variável em programação.", fala: "Primeiro a tarefa, bem direta: explicar um conceito. Isso já cumpre o requisito de pedir a explicação." },
      { acrescenta: " A explicação é para alguém que nunca programou.", fala: "Agora diz para quem é. Com o público definido, a IA escolhe palavras simples. O prompt também já tem detalhe suficiente." },
      { acrescenta: " Use uma analogia do dia a dia, como se a variável fosse uma caixinha com etiqueta.", fala: "Por fim, pede uma analogia, e até sugere uma. Quanto mais específico o pedido, melhor a resposta." },
    ],
    guiado: {
      codigo: "Explique o que é uma ___ em programação. A explicação é para alguém que ___. Use uma ___ do dia a dia para ilustrar.",
      preenche: ["variável", "nunca programou", "analogia"],
    },
  },

  {
    id: "orac-resumo",
    modo: "prompt",
    conceito: "Tamanho e formato: tire a ambiguidade",
    porque:
      "'Resuma isso' é um pedido ambíguo: um resumo pode ter uma frase ou uma página, em parágrafo ou em lista. Quando você define o tamanho e o formato, a IA entrega exatamente o que cabe no seu uso.",
    analogia:
      "É como pedir ao motorista de aplicativo: 'me leve para lá' não funciona. Com endereço e horário, ele chega ao lugar certo na hora certa.",
    ideias: [
      { titulo: "Limite de tamanho", texto: "Diga quanto: no máximo 3 frases, 50 palavras, 5 tópicos." },
      { titulo: "Formato da saída", texto: "Diga como: em tópicos, em tabela, em um parágrafo." },
      { titulo: "Menos retrabalho", texto: "Definir antes evita pedir para refazer depois." },
    ],
    dicas: [
      { trecho: "Peça a ação", explica: "O verbo importa: 'resuma' e 'sintetize' deixam claro o que fazer com o texto." },
      { trecho: "Defina o tamanho", explica: "Limites como 'no máximo 3 frases' ou 'em até 50 palavras' impedem respostas longas demais." },
      { trecho: "Defina o formato", explica: "Tópicos, tabela e parágrafo são formatos diferentes. Escolha o que você vai usar." },
    ],
    abertura: "O prompt começa em branco. Repare como cada parte tira uma dúvida da IA.",
    passos: [
      { acrescenta: "Resuma o texto abaixo.", fala: "A tarefa: resumir. Mas ainda não diz quanto nem como, e a IA teria que adivinhar." },
      { acrescenta: " O resumo deve ter no máximo 3 frases.", fala: "Agora o tamanho está definido: no máximo 3 frases. Isso também começa a fixar o formato." },
      { acrescenta: " Escreva o resumo em tópicos curtos, um por ideia principal.", fala: "E o formato fica explícito: tópicos curtos, um para cada ideia. A resposta vem pronta para usar." },
    ],
    guiado: {
      codigo: "___ o texto abaixo em, no máximo, ___ frases. Entregue o resultado em ___, um por ideia principal.",
      preenche: ["Resuma", "3", "tópicos"],
    },
  },

  {
    id: "orac-exame-e",
    modo: "prompt",
    conceito: "As cinco partes de um prompt forte",
    porque:
      "Para tarefas maiores, um prompt forte combina cinco partes: um papel para a IA, o contexto da situação, as restrições, o formato da resposta e um exemplo do que você espera. Faltando uma, a IA preenche o espaço com suposições.",
    analogia:
      "É como um briefing para uma agência: quem vai fazer o trabalho (papel), para quem e por quê (contexto), o que não pode (restrições), como entregar (formato) e uma referência do que você gosta (exemplo).",
    ideias: [
      { titulo: "Papel", texto: "'Aja como um designer web' muda o jeito de a IA pensar e responder." },
      { titulo: "Contexto e restrições", texto: "Quanto mais claro o cenário e os limites, menos suposição." },
      { titulo: "Formato e exemplo", texto: "Mostrar a forma da resposta quase elimina mal-entendidos." },
    ],
    dicas: [
      { trecho: "Papel", explica: "Comece com 'Aja como...' ou 'Você é um...' e diga a especialidade." },
      { trecho: "Contexto", explica: "Quem é a pessoa, o que quer conseguir e para quem a página se destina." },
      { trecho: "Restrições", explica: "O que usar e o que evitar: tecnologias, idioma, tamanho." },
      { trecho: "Formato da saída", explica: "Como você quer receber: um arquivo, uma lista, blocos de código." },
      { trecho: "Exemplo", explica: "Uma amostra curta da estrutura esperada alinha a IA com o que você imagina." },
    ],
    abertura: "O prompt começa em branco. Vamos construir as cinco partes, uma de cada vez.",
    passos: [
      { acrescenta: "Aja como um designer web experiente.", fala: "Parte 1, o papel. Isso coloca a IA no ponto de vista de quem entende do assunto." },
      { acrescenta: " Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato.", fala: "Parte 2, o contexto: quem é a pessoa, o que ela quer e quem vai ler. Agora a IA sabe o objetivo da página." },
      { acrescenta: " Restrições: use apenas HTML e CSS, sem JavaScript, e escreva os textos em português.", fala: "Parte 3, as restrições: o que pode e o que não pode. Isso evita surpresas na entrega." },
      { acrescenta: " Entregue o resultado em um único arquivo, com o código em um bloco e comentários em cada seção.", fala: "Parte 4, o formato: como você quer receber a resposta." },
      { acrescenta: " Exemplo da estrutura esperada: cabeçalho com nome, lista de projetos e rodapé com contatos.", fala: "Parte 5, o exemplo: uma amostra da estrutura que você imagina. Agora as cinco partes estão no prompt." },
    ],
    guiado: {
      codigo:
        "___ como um designer web experiente.\n" +
        "Crie a página de portfólio pessoal de uma estudante de Engenharia de Software que quer mostrar seus projetos para recrutadores, com seções sobre ela, projetos e contato.\n" +
        "Restrições: use ___ HTML e CSS, sem JavaScript, e escreva os textos em português.\n" +
        "Entregue o resultado em um único arquivo, com o código separado por ___.\n" +
        "___ da estrutura esperada: cabeçalho com nome, lista de projetos e rodapé com contatos.",
      preenche: ["Aja", "apenas", "seção", "Exemplo"],
    },
  },

  {
    id: "orac-imagem",
    modo: "prompt",
    conceito: "Prompt de imagem: assunto, estilo, cores e enquadramento",
    porque:
      "IAs de imagem precisam de mais descrição visual do que de texto: sem estilo, cores e enquadramento, cada tentativa sai diferente. Um bom prompt de imagem funciona como direção de arte.",
    analogia:
      "É como encomendar uma ilustração a um artista: você diz o que quer ver (assunto), em que estilo, com que cores e como a cena é vista. Sem isso, o artista escolhe tudo sozinho.",
    ideias: [
      { titulo: "Assunto", texto: "O que aparece na imagem, descrito com detalhes concretos." },
      { titulo: "Estilo e cores", texto: "Pixel art, 16 bits, paleta escura, tons de azul. Palavras visuais guiam o resultado." },
      { titulo: "Enquadramento e fundo", texto: "De frente, corpo inteiro, fundo transparente: facilita usar a arte depois." },
    ],
    dicas: [
      { trecho: "Assunto", explica: "Quem ou o quê, e o que está fazendo. Quanto mais concreto, melhor." },
      { trecho: "Estilo", explica: "Nomeie o estilo: pixel art, 16 bits, aquarela, desenho de quadrinhos." },
      { trecho: "Cores", explica: "Cite a paleta e os tons dominantes. 'Neon ciano' diz mais que 'colorido'." },
      { trecho: "Enquadramento e fundo", explica: "Como a cena é vista e o que há atrás do personagem." },
    ],
    abertura: "O prompt começa em branco. Numa imagem, cada detalhe visual precisa ser dito.",
    passos: [
      { acrescenta: "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra.", fala: "O assunto, com detalhes concretos: de pedra, olhos brilhantes, guardando uma entrada." },
      { acrescenta: " Estilo pixel art de 16 bits, como em jogos de RPG clássicos.", fala: "O estilo nomeado. Sem isso, a IA escolheria um estilo qualquer." },
      { acrescenta: " Paleta de cores escura, com tons de azul e detalhes em neon ciano.", fala: "As cores: paleta escura e um detalhe em neon que chama a atenção." },
      { acrescenta: " Vista de frente, corpo inteiro, sobre fundo transparente.", fala: "O enquadramento e o fundo. O fundo transparente deixa usar a arte em qualquer cenário." },
    ],
    guiado: {
      codigo: "Um dragão de pedra com olhos brilhantes guardando a entrada de uma masmorra. ___ pixel art de 16 bits. Paleta de ___ escura, com detalhes em neon. ___ de frente, corpo inteiro, sobre fundo transparente.",
      preenche: ["Estilo", "cores", "Vista"],
    },
  },

  {
    id: "orac-persona",
    modo: "prompt",
    conceito: "Persona: quem a IA é, como fala e o que evita",
    porque:
      "Dar uma personalidade à IA muda o jeito como ela ajuda. Uma persona bem definida diz quem ela é, em que tom fala e o que ela não deve fazer. Para um tutor, o mais importante é evitar entregar a resposta pronta.",
    analogia:
      "É como contratar um professor: você diz a matéria (quem é), pede que seja paciente e bem-humorado (como fala) e combina que ele ajude o aluno a pensar, em vez de dar a resposta (limite).",
    ideias: [
      { titulo: "Quem é", texto: "A identidade e a especialidade da IA." },
      { titulo: "Como fala", texto: "O tom: amigável, formal, paciente, bem-humorado." },
      { titulo: "O que evita", texto: "Uma restrição de comportamento, para ela não sair do papel." },
    ],
    dicas: [
      { trecho: "Quem é", explica: "'Você é um tutor de programação chamado Zé.' Dê nome e função." },
      { trecho: "Tom de voz", explica: "Escolha como a persona fala: amigável, paciente, com bom humor." },
      { trecho: "Restrição", explica: "Diga o que evitar. Num tutor: não entregar a resposta pronta." },
    ],
    abertura: "O prompt começa em branco. Vamos criar um personagem para a IA interpretar.",
    passos: [
      { acrescenta: "Você é um tutor de programação chamado Zé.", fala: "A identidade: um tutor com nome. Isso dá um papel claro à IA." },
      { acrescenta: " Fale num tom amigável e paciente, com bom humor, usando exemplos do dia a dia.", fala: "O tom de voz. Agora ela sabe como se comunicar, e o prompt já tem corpo suficiente." },
      { acrescenta: " Evite entregar a resposta pronta: faça perguntas que levem o aluno a descobrir sozinho.", fala: "A restrição de comportamento. É ela que mantém o tutor útil para quem está aprendendo." },
    ],
    guiado: {
      codigo: "___ um tutor de programação chamado Zé. Fale num ___ amigável e paciente, com bom humor. ___ entregar a resposta pronta: faça perguntas que levem o aluno a descobrir sozinho.",
      preenche: ["Você é", "tom", "Evite"],
    },
  },

  {
    id: "orac-exame-d",
    modo: "prompt",
    conceito: "Blindar o prompt contra respostas erradas",
    porque:
      "Quando o prompt é frouxo, a IA 'alucina': inventa regras, bibliotecas ou resultados que parecem certos. Para código, a defesa é ser específico: dizer o algoritmo, proibir invenções, pedir um formato conferível e mostrar um exemplo de entrada e saída para ela se testar.",
    analogia:
      "É como passar uma tarefa a um estagiário esperto, mas que nunca admite que não sabe: você precisa dizer exatamente a regra, o que não pode fazer e mostrar um caso resolvido, para ele não inventar.",
    ideias: [
      { titulo: "Alucinação", texto: "Resposta que parece confiável, mas foi inventada. Cresce quando o pedido é vago." },
      { titulo: "Regras explícitas", texto: "Cite o algoritmo e proíba inventar o que não foi pedido." },
      { titulo: "Exemplo de entrada e saída", texto: "Dois casos conhecidos permitem conferir se a resposta está certa." },
    ],
    dicas: [
      { trecho: "Papel", explica: "Um especialista na área: 'engenheiro de software sênior em validação de dados'." },
      { trecho: "Contexto técnico", explica: "Linguagem, o que a função deve conferir, casos a rejeitar e o algoritmo a seguir." },
      { trecho: "Restrições", explica: "Sem bibliotecas externas, sem inventar regras, idioma da resposta." },
      { trecho: "Formato", explica: "Como entregar: primeiro o código, depois uma lista explicando cada passo." },
      { trecho: "Exemplo", explica: "Um valor válido e um inválido, com o resultado esperado de cada um." },
    ],
    abertura: "O prompt começa em branco. Cada parte fecha uma porta para a alucinação.",
    passos: [
      { acrescenta: "Aja como um engenheiro de software sênior especialista em validação de dados.", fala: "O papel: um especialista. Isso ancora a IA num jeito rigoroso de trabalhar." },
      { acrescenta: " Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial.", fala: "O contexto técnico: linguagem, o que conferir e qual algoritmo usar. Quanto mais exato, menos espaço para inventar." },
      { acrescenta: " Restrições: não use bibliotecas externas, não invente regras além das do algoritmo e responda em português.", fala: "As restrições fecham a porta para invenções: nada de bibliotecas misteriosas nem regras novas." },
      { acrescenta: " Formato da saída: primeiro o código da função e depois uma lista curta explicando cada passo.", fala: "O formato facilita conferir: o código separado da explicação." },
      { acrescenta: " Exemplo de entrada e saída: validaCpf('529.982.247-25') devolve true e validaCpf('111.111.111-11') devolve false.", fala: "O exemplo com entrada e saída é o teste que a IA pode aplicar na própria resposta." },
    ],
    guiado: {
      codigo:
        "___ como um engenheiro de software sênior especialista em validação de dados.\n" +
        "Escreva uma função em JavaScript que valide um CPF brasileiro: deve conferir os 11 dígitos, rejeitar sequências repetidas como 111.111.111-11 e calcular os dois dígitos verificadores com o algoritmo oficial.\n" +
        "Restrições: ___ use bibliotecas externas e não invente regras além das do algoritmo.\n" +
        "Formato da saída: primeiro o código da função e depois uma ___ curta explicando cada passo.\n" +
        "___ de entrada e saída: validaCpf('529.982.247-25') devolve true e validaCpf('111.111.111-11') devolve false.",
      preenche: ["Aja", "não", "lista", "Exemplo"],
    },
  },

  {
    id: "orac-cot",
    modo: "prompt",
    conceito: "Pedir o raciocínio passo a passo",
    porque:
      "Em problemas de lógica ou de conta, a IA erra menos quando é levada a raciocinar antes de responder. Pedir o passo a passo faz com que cada etapa apoie a próxima, e pedir a resposta final separada deixa fácil encontrar o resultado.",
    analogia:
      "É como pedir a um aluno que mostre os cálculos na prova: ao escrever cada etapa, ele percebe erros no meio do caminho. A resposta final destacada é só o fechamento.",
    ideias: [
      { titulo: "Raciocínio explícito", texto: "Pedir etapas faz a IA 'pensar em voz alta' e errar menos." },
      { titulo: "Resposta final separada", texto: "Uma linha fixa, como 'Resposta:', facilita achar e conferir o resultado." },
      { titulo: "Tarefa clara", texto: "O problema precisa estar completo, com todos os números e a pergunta." },
    ],
    dicas: [
      { trecho: "Descreva o problema", explica: "Inclua todos os dados e a pergunta exata. Faltando algo, a IA completa por conta própria." },
      { trecho: "Peça o passo a passo", explica: "'Pense passo a passo, escrevendo cada etapa antes de responder.'" },
      { trecho: "Separe a resposta final", explica: "Peça que a conclusão apareça à parte, numa linha reconhecível." },
    ],
    abertura: "O prompt começa em branco. Vamos descrever o problema e depois guiar o raciocínio.",
    passos: [
      { acrescenta: "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram?", fala: "Primeiro o problema, completo: todos os números e a pergunta. A tarefa está clara." },
      { acrescenta: " Pense passo a passo, escrevendo cada etapa do raciocínio antes de responder.", fala: "Agora pede o raciocínio por etapas. É isso que reduz os erros de conta." },
      { acrescenta: " No final, dê a resposta final separada, em uma linha começando com 'Resposta:'.", fala: "E pede a conclusão separada, numa linha fácil de achar e conferir." },
    ],
    guiado: {
      codigo:
        "Um trem sai da cidade A às 8h a 60 km/h e outro sai da cidade B, a 300 km de distância, às 9h a 90 km/h, vindo ao encontro do primeiro. Quando e onde eles se encontram?\n" +
        "___ passo a passo, escrevendo cada etapa do raciocínio antes de responder.\n" +
        "No ___, dê a resposta final separada, em uma linha começando com 'Resposta:'.",
      preenche: ["Pense", "final"],
    },
  },

  {
    id: "orac-exame-c",
    modo: "prompt",
    conceito: "Saída estruturada: quando um sistema lê a resposta",
    porque:
      "Quando um programa vai ler a resposta da IA, ela precisa vir num formato exato, como JSON com campos definidos. Qualquer texto a mais ('Claro! Aqui está...') quebra a leitura. Por isso o prompt exige a estrutura e proíbe tudo além dela.",
    analogia:
      "É como preencher um formulário de sistema: cada campo no seu lugar, sem comentários nas margens. Se alguém escreve um recado no meio, o sistema recusa o formulário.",
    ideias: [
      { titulo: "Formato estruturado", texto: "JSON com campos nomeados que um programa consegue ler." },
      { titulo: "Só a estrutura", texto: "Proibir textos antes e depois evita erros de leitura." },
      { titulo: "Exemplo da estrutura", texto: "Mostrar o JSON esperado fixa nomes e tipos dos campos." },
    ],
    dicas: [
      { trecho: "Papel", explica: "Algo como 'gerador de dados', que reforça o tom técnico." },
      { trecho: "Contexto", explica: "O que gerar e com quais informações." },
      { trecho: "Formato estruturado", explica: "Peça JSON e liste os campos, com os nomes exatos." },
      { trecho: "Restrições", explica: "'Responda apenas com o JSON, sem texto antes ou depois.'" },
      { trecho: "Exemplo da estrutura", explica: "Um JSON de amostra, com os nomes e os tipos de cada campo." },
    ],
    abertura: "O prompt começa em branco. Aqui a resposta vai ser lida por um programa, então precisa ser exata.",
    passos: [
      { acrescenta: "Você é um gerador de dados para um jogo de RPG.", fala: "O papel: um gerador, e não um conversador. Isso empurra a IA para respostas diretas." },
      { acrescenta: " Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval.", fala: "O contexto: o que gerar e com quais informações." },
      { acrescenta: " Responda em JSON com os campos nome, classe, nivel e frase.", fala: "O formato estruturado: JSON e os nomes exatos dos campos." },
      { acrescenta: " Restrições: responda apenas com o JSON, sem nenhum texto antes ou depois.", fala: "A restrição que protege o sistema: nada além da estrutura." },
      { acrescenta: ' Exemplo da estrutura: {"nome": "Aria", "classe": "Maga", "nivel": 3, "frase": "A magia mora nos detalhes."}', fala: "O exemplo da estrutura fixa nomes e tipos. Agora o sistema pode ler a resposta sem surpresas." },
    ],
    guiado: {
      codigo:
        "___ um gerador de dados para um jogo de RPG.\n" +
        "Crie um personagem fictício com nome, classe, nível e uma frase de apresentação, no estilo de fantasia medieval.\n" +
        "Responda em ___ com os campos nome, classe, nivel e frase.\n" +
        "Restrições: responda ___ com o JSON, sem nenhum texto antes ou depois.\n" +
        '___ da estrutura: {"nome": "Aria", "classe": "Maga", "nivel": 3, "frase": "A magia mora nos detalhes."}',
      preenche: ["Você é", "JSON", "apenas", "Exemplo"],
    },
  },

  {
    id: "orac-refino",
    modo: "prompt",
    conceito: "Pedir para a IA criticar e melhorar a própria resposta",
    porque:
      "A primeira resposta raramente é a melhor. Você pode pedir que a IA escreva, avalie o próprio texto segundo um critério e entregue uma versão melhorada. É uma revisão automática dentro do mesmo pedido.",
    analogia:
      "É como escrever um trabalho e reler antes de entregar, com uma lista de conferência na mão: claro? conciso? correto? Corrigido o que falhou, só então você entrega.",
    ideias: [
      { titulo: "Refinar", texto: "Pedir 'avalie e melhore' transforma um rascunho numa versão final." },
      { titulo: "Critério de qualidade", texto: "Sem critério, melhorar é vago. Diga o que conta: claro, conciso, correto." },
      { titulo: "Entregar só a versão final", texto: "Peça apenas o texto melhorado, para não receber os dois." },
    ],
    dicas: [
      { trecho: "Descreva a tarefa", explica: "O que escrever e para quem, com detalhe suficiente." },
      { trecho: "Defina o critério", explica: "Diga pelo que a resposta será julgada: clareza, concisão, correção." },
      { trecho: "Peça o refinamento", explica: "'Em seguida, melhore o texto' faz a IA aplicar a própria crítica." },
    ],
    abertura: "O prompt começa em branco. A ideia é pedir uma resposta, a crítica e a versão melhor, tudo de uma vez.",
    passos: [
      { acrescenta: "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período.", fala: "A tarefa, descrita com clareza: o que explicar e para quem." },
      { acrescenta: " Depois de escrever, avalie a própria resposta segundo este critério: ela está clara e concisa?", fala: "O critério de qualidade: clara e concisa. Agora a IA sabe pelo que a sua resposta vai ser julgada." },
      { acrescenta: " Em seguida, melhore o texto corrigindo o que estiver confuso e entregue só a versão melhorada.", fala: "O refinamento: a IA aplica a própria crítica e devolve só a versão final." },
    ],
    guiado: {
      codigo:
        "Escreva uma explicação curta sobre o que é recursão em programação para estudantes do primeiro período. Depois, ___ a própria resposta segundo o critério: ela está ___ e concisa? Em seguida, ___ o texto e entregue só a versão final.",
      preenche: ["avalie", "clara", "melhore"],
    },
  },

  {
    id: "orac-exame-b",
    modo: "prompt",
    conceito: "Ensinar por exemplos (few-shot)",
    porque:
      "Mostrar à IA exemplos de entrada e saída ensina o padrão melhor que descrever com palavras. Com dois ou mais exemplos, ela percebe o formato e o critério e passa a responder do mesmo jeito. Essa técnica se chama few-shot.",
    analogia:
      "É como treinar alguém no trabalho: em vez de explicar a regra em teoria, você mostra dois casos resolvidos. A pessoa entende o padrão e repete nos casos novos.",
    ideias: [
      { titulo: "Few-shot", texto: "Dar poucos exemplos para a IA aprender o padrão da resposta." },
      { titulo: "Exemplos variados", texto: "Ao menos dois, de classes diferentes, mostram o contraste." },
      { titulo: "Formato fixo", texto: "Combinar a forma da resposta (Sentimento: ...) facilita ler o resultado." },
    ],
    dicas: [
      { trecho: "Tarefa clara", explica: "Comece dizendo o que fazer: 'Classifique o sentimento de cada frase'." },
      { trecho: "Dois exemplos", explica: "Mostre entrada e saída em pelo menos dois casos diferentes." },
      { trecho: "Formato da resposta", explica: "Diga exatamente como responder, por exemplo 'Sentimento: positivo'." },
      { trecho: "Contexto", explica: "De onde vêm as frases e para que o resultado será usado." },
    ],
    abertura: "O prompt começa em branco. Em vez de explicar demais, o Criador vai mostrar casos resolvidos.",
    passos: [
      { acrescenta: "Classifique o sentimento de cada frase como positivo, negativo ou neutro.", fala: "A tarefa e as opções de resposta, bem claras." },
      { acrescenta: " Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo.", fala: "O primeiro exemplo, com a entrada e a resposta esperada." },
      { acrescenta: " Exemplo 2: 'A entrega atrasou e o produto veio quebrado.' → negativo.", fala: "O segundo exemplo, de outra classe. Com dois, a IA já percebe o padrão." },
      { acrescenta: " Responda no formato: Sentimento: <positivo|negativo|neutro>, sem explicações adicionais.", fala: "O formato da resposta fica fixo, fácil de ler e de processar." },
      { acrescenta: " Contexto: as frases são avaliações reais de clientes de uma loja online de eletrônicos.", fala: "E o contexto: de onde vêm as frases. Isso ajuda a IA a interpretar gírias e ironias." },
    ],
    guiado: {
      codigo:
        "___ o sentimento de cada frase como positivo, negativo ou neutro.\n" +
        "Exemplo 1: 'Adorei o atendimento, voltarei com certeza!' → positivo.\n" +
        "___: 'A entrega atrasou e o produto veio quebrado.' → negativo.\n" +
        "Responda no ___: Sentimento: <positivo|negativo|neutro>.\n" +
        "Contexto: as frases são avaliações reais de clientes de uma loja online de eletrônicos.",
      preenche: ["Classifique", "Exemplo 2", "formato"],
    },
  },

  {
    id: "orac-sistema",
    modo: "prompt",
    conceito: "O prompt de sistema define o comportamento de um assistente",
    porque:
      "O prompt de sistema é a instrução permanente de um assistente: vale para todas as conversas. Ele define quem o assistente é, como fala e as regras do que sempre e nunca fazer. É o lugar certo para as regras que não podem ser esquecidas.",
    analogia:
      "É como o manual de conduta de um funcionário: define a função, o tom de atendimento e os limites, antes de qualquer cliente chegar.",
    ideias: [
      { titulo: "Identidade", texto: "Quem o assistente é e qual é a sua função." },
      { titulo: "Tom", texto: "Como ele fala: paciente, objetivo, amigável." },
      { titulo: "Regras permanentes", texto: "O que sempre faz e o que evita, em qualquer conversa." },
    ],
    dicas: [
      { trecho: "Identidade", explica: "Nome, função e ambiente: 'tutor de programação da Masmorra do Código'." },
      { trecho: "Tom", explica: "Descreva a voz do assistente em poucas palavras." },
      { trecho: "Sempre", explica: "Comportamentos fixos: explicar o conceito antes do código, terminar com uma pergunta." },
      { trecho: "Nunca", explica: "Limites que nunca podem ser quebrados: não entregar a solução completa." },
    ],
    abertura: "O prompt começa em branco. Ele vai valer para todas as conversas do assistente.",
    passos: [
      { acrescenta: "Você é um tutor de programação chamado Mentor, da Masmorra do Código.", fala: "A identidade: nome, função e lugar." },
      { acrescenta: " Fale com tom paciente e objetivo, sem dar sermão.", fala: "O tom de voz. Agora o assistente sabe como se comunicar." },
      { acrescenta: " Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento.", fala: "As regras do que sempre fazer. Elas moldam toda resposta, e o prompt já tem detalhe de sobra." },
      { acrescenta: " Evite entregar a solução completa: prefira dar dicas.", fala: "E a regra do que evitar, para o assistente nunca virar um 'copiador de respostas'." },
    ],
    guiado: {
      codigo:
        "Você é um tutor de programação chamado Mentor, da Masmorra do Código. Fale com ___ paciente e objetivo, sem dar sermão. Sempre explique o conceito antes de mostrar código e termine cada resposta com uma pergunta para testar o entendimento. ___ entregar a solução completa: prefira dar dicas.",
      preenche: ["tom", "Evite"],
    },
  },

  {
    id: "orac-exame-a",
    modo: "prompt",
    conceito: "O prompt mestre: tudo junto",
    porque:
      "Aqui você reúne todas as técnicas num único prompt: papel, contexto rico, restrições, formato estruturado, um exemplo e raciocínio passo a passo. Cada parte resolve um problema diferente, e juntas elas dão o resultado mais confiável.",
    analogia:
      "É como um projeto bem briefado: o especialista certo, o contexto completo, os limites combinados, a forma de entrega, uma referência e a ordem de trabalho. Nada fica para a sorte.",
    ideias: [
      { titulo: "Camadas que se somam", texto: "Cada técnica cobre uma falha: papel foca, contexto situa, restrição limita, formato organiza." },
      { titulo: "Contexto rico", texto: "Quanto mais a IA sabe sobre a pessoa e o objetivo, mais personalizado o resultado." },
      { titulo: "Raciocinar antes de montar", texto: "Pedir a análise antes da resposta melhora a qualidade do plano." },
    ],
    dicas: [
      { trecho: "Papel", explica: "Um mentor de carreira com experiência relevante." },
      { trecho: "Contexto rico", explica: "Perfil da pessoa, tempo disponível e objetivo concreto." },
      { trecho: "Restrições", explica: "Tipo de material, idioma e limite de tópicos por semana." },
      { trecho: "Formato estruturado", explica: "Uma tabela com colunas definidas." },
      { trecho: "Exemplo", explica: "Uma linha de amostra da tabela." },
      { trecho: "Passo a passo", explica: "Peça para analisar antes de responder." },
    ],
    abertura: "O prompt começa em branco. Aqui entram as seis técnicas juntas.",
    ritmo: 2600,
    passos: [
      { acrescenta: "Aja como um mentor de carreira em programação com 15 anos de experiência.", fala: "O papel: um mentor experiente." },
      { acrescenta: " Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web.", fala: "O contexto rico: perfil, tempo disponível e objetivo. Com isso o plano deixa de ser genérico." },
      { acrescenta: " Restrições: use apenas materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana.", fala: "As restrições mantêm o plano realista e acessível." },
      { acrescenta: " Entregue em formato de tabela, com as colunas semana, tópicos, prática e entrega.", fala: "O formato estruturado: uma tabela com colunas definidas." },
      { acrescenta: " Exemplo de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório.", fala: "O exemplo de uma linha fixa o nível de detalhe esperado." },
      { acrescenta: " Antes de responder, pense passo a passo: avalie o nível da estudante, priorize o essencial e só então monte a tabela.", fala: "E o raciocínio por etapas, para a IA analisar antes de montar. Estão todas as seis camadas." },
    ],
    guiado: {
      codigo:
        "___ como um mentor de carreira em programação com 15 anos de experiência.\n" +
        "Monte um plano de estudos de 8 semanas para uma estudante do 4º período de Engenharia de Software que domina lógica e JavaScript básico, estuda 10 horas por semana e quer chegar ao primeiro estágio em desenvolvimento web.\n" +
        "Restrições: use ___ materiais gratuitos e em português, e não inclua mais de 3 tópicos por semana.\n" +
        "Entregue em formato de ___, com as colunas semana, tópicos, prática e entrega.\n" +
        "___ de linha: Semana 1 | HTML e CSS | Montar uma página pessoal | Link do repositório.\n" +
        "Antes de responder, pense ___: avalie o nível da estudante, priorize o essencial e só então monte a tabela.",
      preenche: ["Aja", "apenas", "tabela", "Exemplo", "passo a passo"],
    },
  },
];
