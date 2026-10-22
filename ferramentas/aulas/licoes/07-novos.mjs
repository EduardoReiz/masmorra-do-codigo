// Monstros novos do começo de cada caminho (rampa mais suave) e os monstros temáticos do Arquiteto.
// Arquiteto: dano, cura, critico, ouro, rank, inventario (JS e Python). Sentinela, Estrategista: só JS. Oráculo: prompt.
export default [
  // ================= ARQUITETO =================
  {
    id: "dano",
    fn: "danoFinal",
    entrada: [30, 12],
    variaveis: ["ataque", "defesa", "perda"],
    conceito: "Funções com mais de um valor",
    porque:
      "Até agora a função recebia um valor só. Muita coisa precisa de dois ou mais: o dano de um golpe depende da força do ataque E da defesa de quem apanha. Você lista os parâmetros separados por vírgula, e a função usa todos eles na conta.",
    analogia:
      "É como uma receita que pede dois ingredientes: sem um deles, o prato não sai. Cada parâmetro é um ingrediente, e a ordem em que você entrega os valores é a ordem da lista.",
    ideias: [
      { titulo: "Vários parâmetros", texto: "Separados por vírgula: danoFinal(ataque, defesa). Quem chama entrega os valores na mesma ordem." },
      { titulo: "Ordem importa", texto: "danoFinal(30, 12) é diferente de danoFinal(12, 30): o primeiro valor vai para o primeiro parâmetro." },
      { titulo: "Conta com os dois", texto: "Dentro da função, os parâmetros são variáveis comuns. Aqui, ataque - defesa." },
    ],
    dano: ["calcula", "retorna"],
    falas: {
      def: "O Criador chama danoFinal(30, 12). O 30 vai para ataque e o 12 vai para defesa, na ordem.",
      calcula: "A armadura absorve parte do golpe: {ataque} - {defesa} = {perda}. É a vida que se perde.",
      retorna: "return devolve {retorno} para quem chamou.",
    },
    js: {
      codigo: [
        ["function danoFinal(ataque, defesa) {", "def"],
        ["  const perda = ataque - defesa;", "calcula"],
        ["  return perda;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "function danoFinal(ataque, defesa) {", explica: "Os parâmetros ficam entre os parênteses, separados por vírgula. Aqui a função recebe dois valores e dá um nome a cada um." },
        { trecho: "const perda = ataque - defesa;", explica: "O - subtrai. O resultado é guardado numa variável chamada perda." },
        { trecho: "return perda;", explica: "Devolve o resultado para quem chamou a função." },
      ],
      guiado: {
        codigo: "function danoFinal(ataque, defesa) {\n  const perda = ataque ___ defesa;   // qual operação?\n  return ___;                        // o que devolver?\n}\n",
        preenche: ["-", "perda"],
        testes: [{ in: [30, 12], out: 18 }, { in: [50, 50], out: 0 }, { in: [100, 1], out: 99 }],
      },
    },
    py: {
      codigo: [
        ["def danoFinal(ataque, defesa):", "def"],
        ["    perda = ataque - defesa", "calcula"],
        ["    return perda", "retorna"],
      ],
      sintaxe: [
        { trecho: "def danoFinal(ataque, defesa):", explica: "Os parâmetros ficam entre os parênteses, separados por vírgula. Aqui a função recebe dois valores e dá um nome a cada um." },
        { trecho: "    perda = ataque - defesa", explica: "O - subtrai. O resultado é guardado numa variável chamada perda." },
        { trecho: "    return perda", explica: "Devolve o resultado para quem chamou a função." },
      ],
      guiado: {
        codigo: "def danoFinal(ataque, defesa):\n    perda = ataque ___ defesa   # qual operação?\n    return ___                  # o que devolver?\n",
        preenche: ["-", "perda"],
        testes: [{ in: [30, 12], out: 18 }, { in: [50, 50], out: 0 }, { in: [100, 1], out: 99 }],
      },
    },
  },

  {
    id: "cura",
    fn: "curar",
    entrada: [90, 30],
    variaveis: ["vida", "pocao", "total"],
    conceito: "Decisões: o if muda o caminho do programa",
    porque:
      "Até aqui o programa sempre fazia a mesma coisa, de cima para baixo. Com o if, ele passa a decidir: se uma condição for verdadeira, executa um bloco extra; se não for, pula. É assim que o programa reage a situações diferentes, como uma poção que não pode curar além do máximo.",
    analogia:
      "É como um semáforo para o seu código: se o sinal está verde, passa; se não, espera. A condição é a pergunta 'o sinal está verde?', e só a resposta 'sim' libera o bloco.",
    ideias: [
      { titulo: "Condição", texto: "Uma pergunta que só tem duas respostas: verdadeiro ou falso. Por exemplo, total > 100." },
      { titulo: "if", texto: "Executa o bloco só quando a condição for verdadeira. Se for falsa, o bloco é pulado." },
      { titulo: "Limite", texto: "Um uso clássico: se passou do máximo, volte ao máximo. A vida nunca passa de 100." },
    ],
    dano: ["soma", "limite"],
    falas: {
      def: "O Criador chama curar(90, 30). A vida atual é 90 e a poção cura 30.",
      soma: "Soma a vida com a poção: {vida} + {pocao} = {total}. Mas atenção: o máximo é 100.",
      se: {
        corpo: "limite",
        entra: "{total} é maior que 100? Sim! Então o bloco roda para corrigir.",
        sai: "{total} é maior que 100? Não, então o bloco é pulado e o total fica como está.",
      },
      limite: "Passou do máximo, então o total volta para 100: total = {total}.",
      retorna: "return devolve a vida final: {retorno}.",
    },
    js: {
      codigo: [
        ["function curar(vida, pocao) {", "def"],
        ["  let total = vida + pocao;", "soma"],
        ["  if (total > 100) {", "se"],
        ["    total = 100;", "limite"],
        ["  }", null],
        ["  return total;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let total = vida + pocao;", explica: "let cria uma variável que vai poder mudar depois. Aqui ela começa com a soma da vida com a poção." },
        { trecho: "if (total > 100) {", explica: "if executa o bloco entre chaves só quando a condição entre parênteses for verdadeira. O > pergunta se o da esquerda é maior que o da direita." },
        { trecho: "total = 100;", explica: "Está dentro do if, então só roda quando passou do máximo. Sem let, porque a variável já existe: aqui só trocamos o valor dela." },
        { trecho: "return total;", explica: "Está depois do if, então roda sempre: devolve o total, corrigido ou não." },
      ],
      guiado: {
        codigo: "function curar(vida, pocao) {\n  let total = vida ___ pocao;   // como juntar a vida e a poção?\n  if (total > ___) {            // qual é o máximo?\n    total = 100;\n  }\n  return ___;                   // o que devolver?\n}\n",
        preenche: ["+", "100", "total"],
        testes: [{ in: [60, 30], out: 90 }, { in: [90, 30], out: 100 }, { in: [100, 0], out: 100 }, { in: [0, 100], out: 100 }],
      },
    },
    py: {
      codigo: [
        ["def curar(vida, pocao):", "def"],
        ["    total = vida + pocao", "soma"],
        ["    if total > 100:", "se"],
        ["        total = 100", "limite"],
        ["    return total", "retorna"],
      ],
      sintaxe: [
        { trecho: "    total = vida + pocao", explica: "Cria a variável total com a soma da vida com a poção." },
        { trecho: "    if total > 100:", explica: "if executa o bloco de baixo só quando a condição for verdadeira. O > pergunta se o da esquerda é maior. Os dois-pontos abrem o bloco." },
        { trecho: "        total = 100", explica: "Com 8 espaços, está dentro do if: só roda quando passou do máximo." },
        { trecho: "    return total", explica: "Com 4 espaços, está fora do if: roda sempre e devolve o total, corrigido ou não." },
      ],
      guiado: {
        codigo: "def curar(vida, pocao):\n    total = vida ___ pocao   # como juntar a vida e a poção?\n    if total > ___:          # qual é o máximo?\n        total = 100\n    return ___               # o que devolver?\n",
        preenche: ["+", "100", "total"],
        testes: [{ in: [60, 30], out: 90 }, { in: [90, 30], out: 100 }, { in: [100, 0], out: 100 }, { in: [0, 100], out: 100 }],
      },
    },
  },

  {
    id: "critico",
    fn: "ataqueFinal",
    entrada: [20, 95],
    variaveis: ["base", "sorte", "dano"],
    conceito: "Condições com >= e o dobro do dano",
    porque:
      "Muitas regras de jogo e de sistemas são do tipo 'se isto, então aquilo'. A condição compara valores e decide. Os sinais de comparação (>, <, >=, <=, ===) são as perguntas que o programa sabe fazer. Um golpe crítico é um exemplo perfeito: só acontece com sorte alta.",
    analogia:
      "É como um dado num jogo de tabuleiro: se tirar 90 ou mais, o golpe é crítico. A regra tem sempre a mesma forma: uma pergunta e uma consequência.",
    ideias: [
      { titulo: ">=", texto: "Lê-se 'maior ou igual'. sorte >= 90 vale para 90, 91, 92... e não para 89." },
      { titulo: "Valor padrão", texto: "Comece com o caso comum (dano = base) e só mude se a condição pedir. O if fica curto." },
      { titulo: "Teste os limites", texto: "89 e 90 são os valores perigosos: um erro de >= para > só aparece neles." },
    ],
    dano: ["inicio", "critico"],
    falas: {
      def: "O Criador chama ataqueFinal(20, 95). O dano base é 20 e a sorte do dado foi 95.",
      inicio: "Começa com o caso normal: o dano é igual ao dano base, {dano}.",
      se: {
        corpo: "critico",
        entra: "A sorte ({sorte}) é maior ou igual a 90? Sim: é um golpe crítico!",
        sai: "A sorte ({sorte}) é maior ou igual a 90? Não, então o dano continua normal.",
      },
      critico: "Golpe crítico: o dano dobra. {base} * 2 = {dano}.",
      retorna: "return devolve o dano final: {retorno}.",
    },
    js: {
      codigo: [
        ["function ataqueFinal(base, sorte) {", "def"],
        ["  let dano = base;", "inicio"],
        ["  if (sorte >= 90) {", "se"],
        ["    dano = base * 2;", "critico"],
        ["  }", null],
        ["  return dano;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let dano = base;", explica: "Guarda o caso normal numa variável. Se nada especial acontecer, é esse valor que sai." },
        { trecho: "if (sorte >= 90) {", explica: "O >= pergunta 'maior ou igual?'. O bloco só roda se a resposta for sim." },
        { trecho: "dano = base * 2;", explica: "Troca o valor da variável pelo dobro. O * multiplica." },
        { trecho: "return dano;", explica: "Devolve o dano, crítico ou normal." },
      ],
      guiado: {
        codigo: "function ataqueFinal(base, sorte) {\n  let dano = base;\n  if (sorte ___ 90) {     // qual comparação? (90 ou mais)\n    dano = base * ___;    // dobra\n  }\n  return ___;             // o que devolver?\n}\n",
        preenche: [">=", "2", "dano"],
        testes: [{ in: [20, 95], out: 40 }, { in: [20, 50], out: 20 }, { in: [35, 90], out: 70 }, { in: [35, 89], out: 35 }],
      },
    },
    py: {
      codigo: [
        ["def ataqueFinal(base, sorte):", "def"],
        ["    dano = base", "inicio"],
        ["    if sorte >= 90:", "se"],
        ["        dano = base * 2", "critico"],
        ["    return dano", "retorna"],
      ],
      sintaxe: [
        { trecho: "    dano = base", explica: "Guarda o caso normal numa variável. Se nada especial acontecer, é esse valor que sai." },
        { trecho: "    if sorte >= 90:", explica: "O >= pergunta 'maior ou igual?'. O bloco de baixo só roda se a resposta for sim." },
        { trecho: "        dano = base * 2", explica: "Com 8 espaços, está dentro do if. Troca o valor da variável pelo dobro." },
        { trecho: "    return dano", explica: "Fora do if (4 espaços): devolve o dano, crítico ou normal." },
      ],
      guiado: {
        codigo: "def ataqueFinal(base, sorte):\n    dano = base\n    if sorte ___ 90:     # qual comparação? (90 ou mais)\n        dano = base * ___   # dobra\n    return ___           # o que devolver?\n",
        preenche: [">=", "2", "dano"],
        testes: [{ in: [20, 95], out: 40 }, { in: [20, 50], out: 20 }, { in: [35, 90], out: 70 }, { in: [35, 89], out: 35 }],
      },
    },
  },

  {
    id: "ouro",
    fn: "ouroTotal",
    entrada: [[10, 25, 5]],
    variaveis: ["baus", "total", "ouro"],
    conceito: "Somar os itens de uma lista",
    porque:
      "Um baú tem uma quantia de ouro; uma masmorra tem vários. Em vez de uma variável para cada baú, o programa guarda todos numa lista e percorre um por vez, acumulando o resultado. Esse padrão (começar em zero e ir somando) aparece em quase todo programa.",
    analogia:
      "É como contar o dinheiro de um cofrinho: você pega moeda por moeda e vai somando de cabeça. A cabeça é a variável total, que cresce a cada moeda.",
    ideias: [
      { titulo: "Lista", texto: "Vários valores guardados juntos, em ordem: [10, 25, 5]." },
      { titulo: "Acumulador", texto: "Uma variável que começa em 0 e recebe cada valor novo: total += ouro." },
      { titulo: "Lista vazia", texto: "Se não há baús, o laço não roda nenhuma vez e o total continua 0. Por isso o zero inicial está certo." },
    ],
    dano: ["soma"],
    falas: {
      def: "O Criador chama ouroTotal([10, 25, 5]). A lista com o ouro de cada baú fica em baus.",
      inicio: "Cria o acumulador total em 0: antes de abrir o primeiro baú, não há ouro nenhum.",
      laco: { corpo: "soma", entra: "O laço abre o próximo baú: ouro = {ouro}.", sai: "Não há mais baús, então o laço termina." },
      soma: "Soma o ouro do baú ao total. Agora total = {total}.",
      retorna: "return devolve a soma de todos os baús: {retorno}.",
    },
    js: {
      codigo: [
        ["function ouroTotal(baus) {", "def"],
        ["  let total = 0;", "inicio"],
        ["  for (const ouro of baus) {", "laco"],
        ["    total += ouro;", "soma"],
        ["  }", null],
        ["  return total;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let total = 0;", explica: "O acumulador começa em 0. Ele é let porque o valor muda a cada volta." },
        { trecho: "for (const ouro of baus) {", explica: "Percorre a lista: a cada volta, ouro recebe o próximo valor de baus." },
        { trecho: "total += ouro;", explica: "+= soma o valor ao que já estava na variável. É o mesmo que total = total + ouro." },
        { trecho: "return total;", explica: "Está depois do laço: roda só quando todos os baús foram somados." },
      ],
      guiado: {
        codigo: "function ouroTotal(baus) {\n  let total = ___;              // começa em quanto?\n  for (const ouro of ___) {     // o que percorrer?\n    total += ___;               // o que somar a cada volta?\n  }\n  return total;\n}\n",
        preenche: ["0", "baus", "ouro"],
        testes: [{ in: [[10, 25, 5]], out: 40 }, { in: [[]], out: 0 }, { in: [[100]], out: 100 }],
      },
    },
    py: {
      codigo: [
        ["def ouroTotal(baus):", "def"],
        ["    total = 0", "inicio"],
        ["    for ouro in baus:", "laco"],
        ["        total += ouro", "soma"],
        ["    return total", "retorna"],
      ],
      sintaxe: [
        { trecho: "    total = 0", explica: "O acumulador começa em 0." },
        { trecho: "    for ouro in baus:", explica: "Percorre a lista: a cada volta, ouro recebe o próximo valor de baus. Os dois-pontos abrem o corpo do laço." },
        { trecho: "        total += ouro", explica: "Com 8 espaços, está dentro do for. += soma o valor ao que já estava em total." },
        { trecho: "    return total", explica: "Com 4 espaços, está fora do for: roda só quando todos os baús foram somados." },
      ],
      guiado: {
        codigo: "def ouroTotal(baus):\n    total = ___           # começa em quanto?\n    for ouro in ___:      # o que percorrer?\n        total += ___      # o que somar a cada volta?\n    return total\n",
        preenche: ["0", "baus", "ouro"],
        testes: [{ in: [[10, 25, 5]], out: 40 }, { in: [[]], out: 0 }, { in: [[100]], out: 100 }],
      },
    },
  },

  {
    id: "rank",
    fn: "rankDoXp",
    entrada: [450],
    variaveis: ["xp"],
    conceito: "Várias decisões em sequência",
    porque:
      "Às vezes há mais de duas saídas: o rank pode ser E, D, C ou B. Você faz as perguntas em ordem, da mais restrita à mais ampla. Na primeira resposta 'sim', a função devolve o resultado e para; se nenhuma deu certo, o que sobra é o último caso.",
    analogia:
      "É como uma fila de portões, do menor para o maior. Você tenta o primeiro; se não passar, tenta o segundo, e assim por diante. Quem não passa em nenhum cai no portão final.",
    ideias: [
      { titulo: "Ordem das perguntas", texto: "Pergunte primeiro o menor limite: xp < 100, depois xp < 300... A ordem faz cada pergunta já saber que as anteriores falharam." },
      { titulo: "return dentro do if", texto: "Ao devolver um valor, a função termina na hora. Nada depois dele roda." },
      { titulo: "Caso final", texto: "O último return, sem if, cobre tudo que sobrou: de 600 para cima." },
    ],
    dano: ["r1", "r2", "r3", "r4"],
    falas: {
      def: "O Criador chama rankDoXp(450). Vai perguntar do menor limite para o maior.",
      se1: { corpo: "r1", entra: "{xp} é menor que 100? Sim, então é rank E.", sai: "{xp} é menor que 100? Não. Passa para a próxima pergunta." },
      r1: "return devolve {retorno} e a função termina aqui.",
      se2: { corpo: "r2", entra: "{xp} é menor que 300? Sim, então é rank D.", sai: "{xp} é menor que 300? Não. Passa para a próxima pergunta." },
      r2: "return devolve {retorno} e a função termina aqui.",
      se3: { corpo: "r3", entra: "{xp} é menor que 600? Sim, então é rank C.", sai: "{xp} é menor que 600? Não. Sobrou o caso final." },
      r3: "return devolve {retorno} e a função termina aqui. As próximas linhas nem chegam a rodar.",
      r4: "Nenhuma pergunta deu sim, então o rank é {retorno}.",
    },
    js: {
      codigo: [
        ["function rankDoXp(xp) {", "def"],
        ["  if (xp < 100) {", "se1"],
        ['    return "E";', "r1"],
        ["  }", null],
        ["  if (xp < 300) {", "se2"],
        ['    return "D";', "r2"],
        ["  }", null],
        ["  if (xp < 600) {", "se3"],
        ['    return "C";', "r3"],
        ["  }", null],
        ['  return "B";', "r4"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "if (xp < 100) {", explica: "O < pergunta 'menor que?'. Se for verdadeiro, o bloco roda." },
        { trecho: 'return "E";', explica: 'Devolve o texto "E" e encerra a função. As aspas mostram que é um texto.' },
        { trecho: "if (xp < 300) {", explica: "Só chega aqui quem NÃO foi menor que 100. Por isso basta perguntar o próximo limite." },
        { trecho: 'return "B";', explica: "Sem if: é o caso final, para tudo que passou pelas perguntas anteriores." },
      ],
      guiado: {
        codigo: 'function rankDoXp(xp) {\n  if (xp < 100) {\n    return "E";\n  }\n  if (xp < ___) {      // próximo limite\n    return "D";\n  }\n  if (xp < 600) {\n    return ___;        // o rank deste grupo\n  }\n  return "B";\n}\n',
        preenche: ["300", '"C"'],
        testes: [{ in: [50], out: "E" }, { in: [100], out: "D" }, { in: [450], out: "C" }, { in: [600], out: "B" }],
      },
    },
    py: {
      codigo: [
        ["def rankDoXp(xp):", "def"],
        ["    if xp < 100:", "se1"],
        ['        return "E"', "r1"],
        ["    if xp < 300:", "se2"],
        ['        return "D"', "r2"],
        ["    if xp < 600:", "se3"],
        ['        return "C"', "r3"],
        ['    return "B"', "r4"],
      ],
      sintaxe: [
        { trecho: "    if xp < 100:", explica: "O < pergunta 'menor que?'. Se for verdadeiro, o bloco recuado roda." },
        { trecho: '        return "E"', explica: 'Devolve o texto "E" e encerra a função. Com 8 espaços, está dentro do if.' },
        { trecho: "    if xp < 300:", explica: "Só chega aqui quem NÃO foi menor que 100. Por isso basta perguntar o próximo limite." },
        { trecho: '    return "B"', explica: "Com 4 espaços, fora dos if: é o caso final, para tudo que passou pelas perguntas anteriores." },
      ],
      guiado: {
        codigo: 'def rankDoXp(xp):\n    if xp < 100:\n        return "E"\n    if xp < ___:      # próximo limite\n        return "D"\n    if xp < 600:\n        return ___    # o rank deste grupo\n    return "B"\n',
        preenche: ["300", '"C"'],
        testes: [{ in: [50], out: "E" }, { in: [100], out: "D" }, { in: [450], out: "C" }, { in: [600], out: "B" }],
      },
    },
  },

  {
    id: "inventario",
    fn: "temItem",
    entrada: [["espada", "escudo", "poção"], "escudo"],
    variaveis: ["mochila", "item", "guardado"],
    conceito: "Procurar um valor numa lista",
    porque:
      "Procurar é uma das coisas mais comuns em programas: o item está na mochila? O usuário já existe? O programa olha um por um e, ao achar, já responde sim e para. Se chegar ao fim sem achar, a resposta é não.",
    analogia:
      "É como procurar um livro numa pilha: você olha o título de cada um. Se achar, para na hora e diz 'achei!'. Só depois de olhar todos é que pode dizer 'não tem'.",
    ideias: [
      { titulo: "Comparar com ===", texto: "=== pergunta se os dois valores são iguais. O sinal = sozinho guarda valor; não compara." },
      { titulo: "Parar ao achar", texto: "O return true dentro do if encerra a função assim que o item aparece." },
      { titulo: "Não achou", texto: "O return false fica depois do laço: só roda se nenhum item foi igual." },
    ],
    dano: ["achou"],
    falas: {
      def: 'O Criador chama temItem(["espada", "escudo", "poção"], "escudo"). Quer saber se o escudo está na mochila.',
      laco: { corpo: "se", entra: "O laço pega o próximo item da mochila: guardado = {guardado}.", sai: "Acabaram os itens, então o laço termina." },
      se: { corpo: "achou", entra: "{guardado} é igual a {item}? Sim! Achou.", sai: "{guardado} é igual a {item}? Não. Segue para o próximo." },
      achou: "return true devolve {retorno} e encerra a função. Não precisa olhar o resto da mochila.",
      nao: "Chegou ao fim sem achar, então devolve false.",
    },
    js: {
      codigo: [
        ["function temItem(mochila, item) {", "def"],
        ["  for (const guardado of mochila) {", "laco"],
        ["    if (guardado === item) {", "se"],
        ["      return true;", "achou"],
        ["    }", null],
        ["  }", null],
        ["  return false;", "nao"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "for (const guardado of mochila) {", explica: "A cada volta, guardado recebe o próximo item da mochila." },
        { trecho: "if (guardado === item) {", explica: "=== compara os dois valores e dá true se forem iguais. Letras maiúsculas e minúsculas contam: 'Espada' é diferente de 'espada'." },
        { trecho: "return true;", explica: "Achou! Devolve true e encerra a função na hora." },
        { trecho: "return false;", explica: "Está fora do laço: só roda se o laço terminou sem achar nada." },
      ],
      guiado: {
        codigo: "function temItem(mochila, item) {\n  for (const guardado of ___) {   // o que percorrer?\n    if (guardado ___ item) {      // como comparar?\n      return ___;                 // achou: devolve o quê?\n    }\n  }\n  return false;\n}\n",
        preenche: ["mochila", "===", "true"],
        testes: [{ in: [["espada", "escudo"], "escudo"], out: true }, { in: [["espada"], "arco"], out: false }, { in: [[], "espada"], out: false }],
      },
    },
    py: {
      codigo: [
        ["def temItem(mochila, item):", "def"],
        ["    for guardado in mochila:", "laco"],
        ["        if guardado == item:", "se"],
        ["            return True", "achou"],
        ["    return False", "nao"],
      ],
      sintaxe: [
        { trecho: "    for guardado in mochila:", explica: "A cada volta, guardado recebe o próximo item da mochila." },
        { trecho: "        if guardado == item:", explica: "== compara os dois valores e dá True se forem iguais. Maiúsculas e minúsculas contam. Um = só guarda valor." },
        { trecho: "            return True", explica: "Achou! Devolve True (com T maiúsculo) e encerra a função na hora." },
        { trecho: "    return False", explica: "Fora do for (4 espaços): só roda se o laço terminou sem achar nada." },
      ],
      guiado: {
        codigo: "def temItem(mochila, item):\n    for guardado in ___:   # o que percorrer?\n        if guardado ___ item:   # como comparar?\n            return ___         # achou: devolve o quê?\n    return False\n",
        preenche: ["mochila", "==", "True"],
        testes: [{ in: [["espada", "escudo"], "escudo"], out: true }, { in: [["espada"], "arco"], out: false }, { in: [[], "espada"], out: false }],
      },
    },
  },

  // ================= SENTINELA (só JavaScript) =================
  {
    id: "sec-vazio",
    fn: "campoVazio",
    entrada: ["   "],
    variaveis: ["texto", "limpo"],
    conceito: "A primeira defesa: não confiar na entrada",
    porque:
      "Quase todo ataque a um site começa em um campo que o programa não conferiu. A defesa mais básica é recusar o que veio vazio. E 'vazio' engana: três espaços parecem vazio na tela, mas para o computador é um texto com três caracteres. Por isso, antes de conferir, tiramos os espaços das pontas.",
    analogia:
      "É como o porteiro que confere o crachá: um papel em branco não vale como crachá, mesmo parecendo papel. Ele olha o que há de verdade escrito nele.",
    ideias: [
      { titulo: "Entrada", texto: "Tudo que vem de fora do programa: formulário, URL, arquivo. Nada disso é confiável até ser conferido." },
      { titulo: "trim()", texto: "Remove os espaços do começo e do fim do texto. '   oi  ' vira 'oi', e '   ' vira ''." },
      { titulo: "Texto vazio", texto: "É o texto sem nenhum caractere: ''. Comparamos com === para saber se é ele." },
    ],
    dano: ["limpa", "retorna"],
    falas: {
      def: 'O Criador chama campoVazio("   "). O texto parece vazio, mas tem 3 espaços.',
      limpa: 'trim() tira os espaços das pontas. Sobrou um texto sem caracteres: "{limpo}".',
      retorna: "O texto limpo é igual a vazio ('')? O resultado é {retorno}: o campo está vazio e deve ser recusado.",
    },
    js: {
      codigo: [
        ["function campoVazio(texto) {", "def"],
        ["  const limpo = texto.trim();", "limpa"],
        ['  return limpo === "";', "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const limpo = texto.trim();", explica: "texto.trim() devolve uma cópia do texto sem os espaços do começo e do fim. O texto original não muda; por isso guardamos o resultado numa variável." },
        { trecho: 'return limpo === "";', explica: '=== compara os dois lados e dá true quando são iguais. "" são aspas sem nada dentro: o texto vazio. O return devolve true ou false.' },
      ],
      guiado: {
        codigo: 'function campoVazio(texto) {\n  const limpo = texto.___();     // qual método tira os espaços das pontas?\n  return limpo ___ "";           // como comparar?\n}\n',
        preenche: ["trim", "==="],
        testes: [{ in: [""], out: true }, { in: ["   "], out: true }, { in: ["oi"], out: false }],
      },
    },
  },

  {
    id: "sec-tamanho",
    fn: "senhaCurta",
    entrada: ["abc123"],
    variaveis: ["senha", "tamanho"],
    conceito: "Medir o tamanho de um texto",
    porque:
      "Quanto mais curta a senha, mais rápido um atacante testa todas as possibilidades. Por isso sistemas exigem um tamanho mínimo. O computador mede o tamanho de um texto com length e compara com o limite.",
    analogia:
      "É como a altura mínima de um brinquedo de parque: uma régua mede quem chega, e quem está abaixo da marca não entra. Aqui, a régua é o length e a marca é o 8.",
    ideias: [
      { titulo: "length", texto: "O número de caracteres de um texto. 'abc123'.length vale 6." },
      { titulo: "Comparação", texto: "tamanho < 8 pergunta se é menor que 8. O resultado é true ou false." },
      { titulo: "Limite exato", texto: "Com 8 caracteres a senha NÃO é curta. Teste sempre o valor do limite." },
    ],
    dano: ["mede", "retorna"],
    falas: {
      def: 'O Criador chama senhaCurta("abc123"). Vai medir o tamanho da senha.',
      mede: "senha.length conta os caracteres: {tamanho}.",
      retorna: "{tamanho} é menor que 8? O resultado é {retorno}.",
    },
    js: {
      codigo: [
        ["function senhaCurta(senha) {", "def"],
        ["  const tamanho = senha.length;", "mede"],
        ["  return tamanho < 8;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const tamanho = senha.length;", explica: "length (sem parênteses) é o número de caracteres do texto. Guardamos numa variável para comparar depois." },
        { trecho: "return tamanho < 8;", explica: "O < pergunta 'menor que?'. A comparação dá true ou false, e o return devolve exatamente isso." },
      ],
      guiado: {
        codigo: "function senhaCurta(senha) {\n  const tamanho = senha.___;     // qual propriedade dá o tamanho?\n  return tamanho ___ 8;          // menor que 8?\n}\n",
        preenche: ["length", "<"],
        testes: [{ in: ["abc123"], out: true }, { in: ["abcdefgh"], out: false }, { in: [""], out: true }],
      },
    },
  },

  {
    id: "sec-papel",
    fn: "podeEntrar",
    entrada: ["moderador"],
    variaveis: ["papel", "ehAdmin", "ehModerador"],
    conceito: "Controle de acesso: quem pode entrar?",
    porque:
      "Um sistema seguro não deixa todo mundo fazer tudo. Cada pessoa tem um papel, e cada sala exige certos papéis. O programa confere o papel antes de abrir a porta. Quando há mais de um papel permitido, usamos o OU lógico (||): basta um ser verdadeiro.",
    analogia:
      "É como a entrada de um prédio: o porteiro deixa passar o síndico OU o morador. Basta ser um dos dois. Quem é visitante fica de fora.",
    ideias: [
      { titulo: "Papel", texto: "O tipo de acesso de cada usuário: admin, moderador, visitante." },
      { titulo: "Mínimo necessário", texto: "Liste só os papéis que realmente precisam entrar. O que não foi liberado, é negado." },
      { titulo: "OU lógico (||)", texto: "Dá true quando pelo menos um dos lados é true. Só dá false se os dois forem false." },
    ],
    dano: ["admin", "mod", "retorna"],
    falas: {
      def: 'O Criador chama podeEntrar("moderador"). Vai conferir cada papel permitido.',
      admin: 'O papel é igual a "admin"? Resposta: {ehAdmin}.',
      mod: 'O papel é igual a "moderador"? Resposta: {ehModerador}.',
      retorna: "O || dá true se pelo menos uma das respostas for true. Resultado: {retorno}. A porta abre.",
    },
    js: {
      codigo: [
        ["function podeEntrar(papel) {", "def"],
        ['  const ehAdmin = papel === "admin";', "admin"],
        ['  const ehModerador = papel === "moderador";', "mod"],
        ["  return ehAdmin || ehModerador;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'const ehAdmin = papel === "admin";', explica: '=== compara e dá true se forem iguais. Letras maiúsculas contam: "Admin" não é "admin". O resultado (true ou false) fica guardado.' },
        { trecho: "return ehAdmin || ehModerador;", explica: "|| é o OU lógico: dá true se pelo menos um dos lados for true. É a regra 'admin OU moderador'." },
      ],
      guiado: {
        codigo: 'function podeEntrar(papel) {\n  const ehAdmin = papel === "admin";\n  const ehModerador = papel === ___;     // qual papel é o segundo permitido?\n  return ehAdmin ___ ehModerador;        // qual operador significa OU?\n}\n',
        preenche: ['"moderador"', "||"],
        testes: [{ in: ["admin"], out: true }, { in: ["moderador"], out: true }, { in: ["visitante"], out: false }],
      },
    },
  },

  // ================= ESTRATEGISTA (só JavaScript) =================
  {
    id: "dat-quantos",
    fn: "quantosItens",
    entrada: [[{ produto: "Espada", preco: 100 }, { produto: "Escudo", preco: 80 }, { produto: "Arco", preco: 120 }]],
    variaveis: ["vendas", "quantos"],
    conceito: "Toda análise começa contando",
    porque:
      "Antes de somar, filtrar ou comparar, você precisa saber o tamanho do que tem na mão: quantas vendas, quantos clientes, quantos erros. Uma lista sabe o próprio tamanho, e você só pergunta.",
    analogia:
      "É como contar as prateleiras de um estoque antes de começar o inventário. Você ainda não sabe o que há em cada uma, mas já sabe o tamanho do trabalho.",
    ideias: [
      { titulo: "Lista", texto: "Uma coleção de itens em ordem. A base de vendas é uma lista com um item por venda." },
      { titulo: "length", texto: "O número de itens da lista. Uma lista vazia tem length 0." },
      { titulo: "Primeira métrica", texto: "Contagem é a métrica mais simples e já responde perguntas reais: 'quantas vendas tivemos?'." },
    ],
    dano: ["conta", "retorna"],
    falas: {
      def: "O Criador chama quantosItens com uma base de 3 vendas.",
      conta: "vendas.length pergunta à lista quantos itens ela tem: {quantos}.",
      retorna: "return devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function quantosItens(vendas) {", "def"],
        ["  const quantos = vendas.length;", "conta"],
        ["  return quantos;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const quantos = vendas.length;", explica: "length (sem parênteses) devolve o número de itens da lista. Guardamos numa variável com um nome claro." },
        { trecho: "return quantos;", explica: "Devolve a contagem para quem chamou a função." },
      ],
      guiado: {
        codigo: "function quantosItens(vendas) {\n  const quantos = vendas.___;     // qual propriedade dá o tamanho?\n  return ___;                     // o que devolver?\n}\n",
        preenche: ["length", "quantos"],
        testes: [{ in: [[{ produto: "A" }, { produto: "B" }]], out: 2 }, { in: [[]], out: 0 }],
      },
    },
  },

  {
    id: "dat-caro",
    fn: "maisCaro",
    entrada: [[{ produto: "Espada", preco: 100 }, { produto: "Escudo", preco: 80 }, { produto: "Arco", preco: 120 }]],
    variaveis: ["vendas", "maior", "venda"],
    conceito: "Achar o maior valor de uma coluna",
    porque:
      "Qual produto custa mais? Qual venda foi a maior? Para responder, você percorre a lista guardando o maior valor visto até agora. Cada item novo desafia o recordista: se for maior, toma o lugar.",
    analogia:
      "É um campeonato de levantamento de peso: o recorde começa em zero, cada atleta tenta, e se passar do recorde atual, o recorde é atualizado. No fim, o recorde é o maior de todos.",
    ideias: [
      { titulo: "Objeto", texto: "Um registro com campos nomeados: { produto: 'Espada', preco: 100 }. O ponto lê um campo: venda.preco." },
      { titulo: "Recordista", texto: "Uma variável que guarda o maior valor visto até agora e só muda quando aparece um maior." },
      { titulo: "Lista vazia", texto: "Se não há itens, o recorde continua 0, que é o que o monstro pede." },
    ],
    dano: ["troca"],
    falas: {
      def: "O Criador chama maisCaro com 3 itens: Espada, Escudo e Arco.",
      inicio: "O recorde começa em 0: ainda ninguém foi visto.",
      laco: { corpo: "se", entra: "O laço pega a próxima venda. O preço dela é {venda}.", sai: "Acabaram as vendas, então o laço termina." },
      se: { corpo: "troca", entra: "Esse preço é maior que o recorde ({maior})? Sim, então entra no bloco.", sai: "Esse preço é maior que o recorde ({maior})? Não, o recorde continua o mesmo." },
      troca: "O novo recorde é {maior}.",
      retorna: "return devolve o maior preço encontrado: {retorno}.",
    },
    js: {
      codigo: [
        ["function maisCaro(vendas) {", "def"],
        ["  let maior = 0;", "inicio"],
        ["  for (const venda of vendas) {", "laco"],
        ["    if (venda.preco > maior) {", "se"],
        ["      maior = venda.preco;", "troca"],
        ["    }", null],
        ["  }", null],
        ["  return maior;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "let maior = 0;", explica: "O recorde começa em 0. É let porque vai ser trocado." },
        { trecho: "for (const venda of vendas) {", explica: "A cada volta, venda recebe o próximo item da lista." },
        { trecho: "if (venda.preco > maior) {", explica: "venda.preco lê o campo preco do item. O > pergunta se ele é maior que o recorde." },
        { trecho: "maior = venda.preco;", explica: "Troca o recorde pelo novo preço." },
      ],
      guiado: {
        codigo: "function maisCaro(vendas) {\n  let maior = 0;\n  for (const venda of ___) {          // o que percorrer?\n    if (venda.preco ___ maior) {      // quando troca o recorde?\n      maior = venda.___;              // qual campo guardar?\n    }\n  }\n  return maior;\n}\n",
        preenche: ["vendas", ">", "preco"],
        testes: [{ in: [[{ produto: "A", preco: 5 }, { produto: "B", preco: 9 }]], out: 9 }, { in: [[]], out: 0 }],
      },
    },
  },

  {
    id: "dat-nomes",
    fn: "nomesDosItens",
    entrada: [[{ produto: "Espada" }, { produto: "Escudo" }, { produto: "Arco" }]],
    variaveis: ["vendas", "nomes", "venda"],
    conceito: "Pegar uma coluna da base",
    porque:
      "Uma base é como uma tabela: cada item é uma linha e cada campo é uma coluna. Muitas vezes você só quer uma coluna, como a lista de nomes. Você percorre as linhas e vai juntando o campo que interessa numa lista nova.",
    analogia:
      "É como copiar só a coluna 'Nome' de uma planilha para uma folha nova: você desce linha por linha e anota apenas aquele campo.",
    ideias: [
      { titulo: "Lista nova", texto: "const nomes = [] cria uma lista vazia, pronta para receber itens." },
      { titulo: "push", texto: "nomes.push(x) coloca x no fim da lista. A ordem de chegada é mantida." },
      { titulo: "Campo", texto: "venda.produto lê só o campo produto da linha atual." },
    ],
    dano: ["junta"],
    falas: {
      def: "O Criador chama nomesDosItens com 3 vendas.",
      cria: "Cria a lista nomes, vazia por enquanto.",
      laco: { corpo: "junta", entra: "O laço pega a próxima venda.", sai: "Acabaram as vendas, então o laço termina." },
      junta: "push coloca o produto desta venda no fim da lista. Agora nomes = {nomes}.",
      retorna: "return devolve a lista completa: {retorno}.",
    },
    js: {
      codigo: [
        ["function nomesDosItens(vendas) {", "def"],
        ["  const nomes = [];", "cria"],
        ["  for (const venda of vendas) {", "laco"],
        ["    nomes.push(venda.produto);", "junta"],
        ["  }", null],
        ["  return nomes;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const nomes = [];", explica: "[] é uma lista vazia. É const porque a variável sempre aponta para a mesma lista, que só vai crescendo." },
        { trecho: "for (const venda of vendas) {", explica: "A cada volta, venda recebe o próximo item da base." },
        { trecho: "nomes.push(venda.produto);", explica: "venda.produto lê o campo produto. push coloca esse valor no fim da lista nomes." },
        { trecho: "return nomes;", explica: "Roda depois do laço: devolve a lista completa." },
      ],
      guiado: {
        codigo: "function nomesDosItens(vendas) {\n  const nomes = ___;                // como criar uma lista vazia?\n  for (const venda of vendas) {\n    nomes.___(venda.produto);       // qual método coloca no fim?\n  }\n  return ___;                       // o que devolver?\n}\n",
        preenche: ["[]", "push", "nomes"],
        testes: [{ in: [[{ produto: "X" }, { produto: "Y" }]], out: ["X", "Y"] }, { in: [[]], out: [] }],
      },
    },
  },

  // ================= ORÁCULO (prompt) =================
  {
    id: "orac-pedido",
    modo: "prompt",
    conceito: "Seu primeiro prompt: peça direto",
    porque:
      "Prompt é o texto que você entrega à IA. A IA não lê pensamento: ela só tem as palavras que você escreveu. O primeiro passo é pedir com clareza, começando por um verbo (escreva, crie, me dê) e dizendo qual é o assunto.",
    analogia:
      "É como pedir um lanche no balcão: 'quero um sanduíche de queijo'. O verbo diz o que você quer fazer e o assunto diz sobre o quê. Falar só 'comida' deixa o atendente sem saber o que servir.",
    ideias: [
      { titulo: "Verbo de ação", texto: "Comece com o que a IA deve fazer: escreva, crie, ensine, me dê." },
      { titulo: "Assunto claro", texto: "Diga sobre o quê: 'receita de bolo de chocolate' em vez de só 'receita'." },
      { titulo: "Frase completa", texto: "Uma frase inteira dá contexto. Duas palavras soltas obrigam a IA a adivinhar." },
    ],
    dicas: [
      { trecho: "Comece com um verbo", explica: "'Me dê', 'escreva', 'crie'... O verbo é o pedido." },
      { trecho: "Diga o assunto", explica: "Aqui: uma receita de bolo de chocolate." },
      { trecho: "Faça uma frase completa", explica: "Um pouco mais de detalhe já melhora a resposta." },
    ],
    abertura: "O prompt começa em branco. Vamos montar o primeiro pedido, uma peça de cada vez.",
    passos: [
      { acrescenta: "Me dê uma receita", fala: "Primeiro o verbo: 'me dê'. Já mostra o que você quer, mas ainda falta dizer de quê." },
      { acrescenta: " de bolo de chocolate", fala: "Agora o assunto, com detalhe: bolo de chocolate. Sem isso a IA poderia mandar qualquer receita." },
      { acrescenta: " bem fofinho, com a lista de ingredientes e o modo de preparo.", fala: "E um detalhe final do que você espera receber. Quanto mais claro, melhor a resposta." },
    ],
    guiado: {
      codigo: "___ uma receita de ___ de chocolate, bem fofinho, com a lista de ingredientes e o modo de preparo.",
      preenche: ["Me dê", "bolo"],
    },
  },

  {
    id: "orac-contexto",
    modo: "prompt",
    conceito: "Contexto: quanto mais a IA sabe, melhor ela ajuda",
    porque:
      "Pedir 'ideias de presente' sem mais nada rende uma lista genérica. Quando você diz para quem é e quanto pode gastar, a IA descarta o que não serve e sugere o que combina. Contexto é a informação que a IA não tem e só você sabe.",
    analogia:
      "É como pedir ajuda a um vendedor de loja: 'quero um presente' o deixa perdido. 'É para minha mãe, ela gosta de livros e posso gastar até 80 reais' o faz ir direto na prateleira certa.",
    ideias: [
      { titulo: "Para quem", texto: "A pessoa ou o público muda a resposta: o que agrada uma mãe não é o que agrada um amigo de 10 anos." },
      { titulo: "Limite", texto: "Orçamento, prazo e tamanho filtram as opções antes de a IA sugerir." },
      { titulo: "Preferências", texto: "Gostos e detalhes ('adora jardinagem') deixam a resposta com a cara da pessoa." },
    ],
    dicas: [
      { trecho: "Peça as ideias", explica: "Diga o que quer: ideias de presente de aniversário." },
      { trecho: "Para quem é", explica: "Diga quem vai receber e do que ela gosta." },
      { trecho: "Quanto gastar", explica: "Informe o orçamento em reais." },
      { trecho: "Formato", explica: "Diga quantas opções quer e como quer receber." },
    ],
    abertura: "O prompt começa em branco. Veja como cada informação de contexto melhora o pedido.",
    passos: [
      { acrescenta: "Me dê ideias de presente de aniversário.", fala: "O pedido básico. Funciona, mas a IA ainda não sabe para quem é nem quanto pode custar." },
      { acrescenta: " O presente é para a minha mãe, que adora jardinagem e livros.", fala: "Agora a IA sabe quem vai receber e os gostos dela. Já dá para sugerir algo pessoal." },
      { acrescenta: " Posso gastar até 80 reais.", fala: "O orçamento corta as opções caras demais. A IA só vai sugerir o que cabe no bolso." },
      { acrescenta: " Liste 5 opções, cada uma com uma frase explicando por que combina com ela.", fala: "E o formato da resposta: cinco opções, cada uma justificada. Pronto para decidir." },
    ],
    guiado: {
      codigo: "Me dê ideias de ___ de aniversário. O presente é para a minha ___, que adora jardinagem e livros. Posso ___ até 80 reais. Liste 5 opções, cada uma com uma frase explicando por que combina com ela.",
      preenche: ["presente", "mãe", "gastar"],
    },
  },
];
