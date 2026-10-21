// Aulas do caminho do Sentinela (segurança defensiva). Só JavaScript: este caminho não escolhe linguagem.
export default [
  {
    id: "sec-xss",
    fn: "sanitizarHtml",
    entrada: ["<b>E&M</b>"],
    variaveis: ["texto", "seguro"],
    conceito: "Nunca confie na entrada: escape o que é perigoso",
    porque:
      "Quando um site mostra um texto digitado por alguém, o navegador pode entender partes dele como código. Um atacante escreve <script> num comentário e, se o site não tratar, o código roda no navegador de quem ler. A defesa é escapar: trocar os caracteres especiais por versões inofensivas, que aparecem como texto.",
    analogia:
      "É como passar a correspondência por um detector antes de abrir: carta é carta, mas o que parecer uma ordem escondida é neutralizado. Aqui, os símbolos que dariam ordens ao navegador viram símbolos que só aparecem na tela.",
    ideias: [
      { titulo: "XSS", texto: "Ataque em que um texto malicioso vira código na página de outras pessoas. Nasce de confiar no que o usuário digita." },
      { titulo: "Escapar", texto: "Trocar < por &lt;, > por &gt; e & por &amp;. O navegador mostra o símbolo, mas não o interpreta como comando." },
      { titulo: "A ordem importa", texto: "O & vem primeiro: se ele fosse trocado depois, o & dos códigos novos (&lt;, &gt;) também seria alterado e tudo quebraria." },
    ],
    dano: ["amp", "lt", "gt"],
    falas: {
      def: 'O Criador chama sanitizarHtml("<b>E&M</b>"). Se esse texto fosse direto para a página, o navegador leria o <b> como código.',
      amp: "Primeiro troca o & por &amp;. Se trocasse o < e o > antes, o & dos códigos novos (&lt; e &gt;) seria trocado de novo. Agora: {seguro}.",
      lt: "Troca cada < por &lt;. Agora: {seguro}.",
      gt: "Troca cada > por &gt;. Agora: {seguro}. Não sobrou nenhum < ou > cru.",
      retorna: "return devolve o texto seguro: {retorno}. O navegador mostra isso como texto, em vez de executar como código.",
    },
    js: {
      codigo: [
        ["function sanitizarHtml(texto) {", "def"],
        ['  let seguro = texto.replaceAll("&", "&amp;");', "amp"],
        ['  seguro = seguro.replaceAll("<", "&lt;");', "lt"],
        ['  seguro = seguro.replaceAll(">", "&gt;");', "gt"],
        ["  return seguro;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'let seguro = texto.replaceAll("&", "&amp;");', explica: 'replaceAll(procurar, trocarPor) devolve um texto novo com TODAS as ocorrências trocadas. O texto original não muda, por isso guardamos o resultado numa variável (let, porque ela vai mudar nas próximas linhas).' },
        { trecho: 'seguro = seguro.replaceAll("<", "&lt;");', explica: "Aqui a variável já existe (sem let) e recebe o resultado da nova troca, partindo do que já tinha sido trocado. Cada linha corrige mais um caractere perigoso." },
        { trecho: "return seguro;", explica: "Devolve o texto já tratado. Quem chamar a função usa essa versão na página, nunca a original." },
      ],
      guiado: {
        codigo:
          "function sanitizarHtml(texto) {\n" +
          '  let seguro = texto.replaceAll("&", ___);     // por qual código trocar o &? (comece sempre por ele)\n' +
          '  seguro = seguro.replaceAll(___, "&lt;");     // qual símbolo vira &lt;?\n' +
          '  seguro = seguro.replaceAll(">", ___);        // por qual código trocar o >?\n' +
          "  return ___;                                  // o que devolver?\n" +
          "}\n",
        preenche: ['"&amp;"', '"<"', '"&gt;"', "seguro"],
        testes: [{ in: ["<script>"], out: "&lt;script&gt;" }, { in: ["a & b"], out: "a &amp; b" }, { in: ["ola"], out: "ola" }],
      },
    },
  },

  {
    id: "sec-senha",
    fn: "senhaForte",
    entrada: ["abcd1234"],
    variaveis: ["senha", "compridaAbastante", "temLetra", "temNumero"],
    conceito: "Validar a entrada com regras claras",
    porque:
      "Senha curta ou só de números é fácil de adivinhar. Em vez de confiar que o usuário escolheu bem, o programa confere regras objetivas: tamanho mínimo, pelo menos uma letra e pelo menos um número. Cada regra vira uma pergunta de sim ou não, e a senha só passa se todas as respostas forem sim.",
    analogia:
      "É como o segurança de uma festa conferindo três itens na entrada: convite, documento e pulseira. Se faltar um deles, não entra. Cada item é uma pergunta de sim ou não, e todos precisam ser sim.",
    ideias: [
      { titulo: "Regra = pergunta de sim ou não", texto: "Cada exigência da senha vira uma condição que dá true ou false." },
      { titulo: "Expressão regular", texto: "Um padrão que descreve que tipo de texto procurar, como 'alguma letra' ou 'algum número'." },
      { titulo: "E lógico (&&)", texto: "Só dá true quando TODAS as condições ligadas por ele são verdadeiras." },
    ],
    dano: ["tamanho", "letra", "numero"],
    falas: {
      def: 'O Criador chama senhaForte("abcd1234"). Vai conferir três regras, uma por vez.',
      tamanho: "A senha tem pelo menos 8 caracteres? A resposta é {compridaAbastante}.",
      letra: "Tem pelo menos uma letra? O padrão [a-zA-Z] procura qualquer letra. Resposta: {temLetra}.",
      numero: "Tem pelo menos um número? O padrão [0-9] procura qualquer dígito. Resposta: {temNumero}.",
      retorna: "O && só dá true se as três respostas forem true. Aqui o resultado é {retorno}: a senha é forte.",
    },
    js: {
      codigo: [
        ["function senhaForte(senha) {", "def"],
        ["  const compridaAbastante = senha.length >= 8;", "tamanho"],
        ["  const temLetra = /[a-zA-Z]/.test(senha);", "letra"],
        ["  const temNumero = /[0-9]/.test(senha);", "numero"],
        ["  return compridaAbastante && temLetra && temNumero;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const compridaAbastante = senha.length >= 8;", explica: "length é o tamanho do texto. O sinal >= pergunta 'é maior ou igual a'. O resultado é true ou false e fica guardado na variável." },
        { trecho: "const temLetra = /[a-zA-Z]/.test(senha);", explica: "Entre as barras / / fica um padrão (expressão regular). [a-zA-Z] significa 'qualquer letra de a até z, minúscula ou maiúscula'. O .test(senha) pergunta se o padrão aparece em algum lugar da senha e responde true ou false." },
        { trecho: "const temNumero = /[0-9]/.test(senha);", explica: "Mesma ideia: [0-9] é 'qualquer dígito de 0 a 9'." },
        { trecho: "return compridaAbastante && temLetra && temNumero;", explica: "&& é o E lógico: só é true quando as três respostas são true. Se uma falhar, a senha é recusada." },
      ],
      guiado: {
        codigo:
          "function senhaForte(senha) {\n" +
          "  const compridaAbastante = senha.length >= ___;      // quantos caracteres no mínimo?\n" +
          "  const temLetra = /[a-zA-Z]/.test(___);             // o que testar?\n" +
          "  const temNumero = /[0-9]/.___(senha);              // qual método testa o padrão?\n" +
          "  return compridaAbastante ___ temLetra && temNumero;   // qual operador exige as duas?\n" +
          "}\n",
        preenche: ["8", "senha", "test", "&&"],
        testes: [{ in: ["abc"], out: false }, { in: ["abcd1234"], out: true }, { in: ["12345678"], out: false }, { in: ["abcdefgh"], out: false }],
      },
    },
  },

  {
    id: "sec-exame-e",
    fn: "ehEmailValido",
    entrada: ["user@site.com"],
    variaveis: ["email", "semEspaco", "formato"],
    conceito: "Validar o formato com uma expressão regular",
    porque:
      "Um e-mail precisa ter a forma algo@algo.algo, sem espaços. Em vez de escrever várias comparações à mão, descrevemos essa forma num padrão e perguntamos se o texto combina com ele. Validar o formato antes de usar a informação é uma defesa básica contra entradas malformadas e maliciosas.",
    analogia:
      "É como um gabarito furado: você encosta o gabarito na folha e só passa se cada parte do texto encaixar nos buracos, na ordem certa: nome, arroba, domínio, ponto, final.",
    ideias: [
      { titulo: "Padrão de formato", texto: "A expressão regular descreve a 'forma' do texto: o que vem antes e depois do @ e onde precisa haver um ponto." },
      { titulo: "Âncoras ^ e $", texto: "^ marca o começo e $ marca o fim: o texto INTEIRO precisa combinar, e não só um pedaço." },
      { titulo: "Várias regras", texto: "Uma regra simples (sem espaços) e uma de formato, ligadas por &&." },
    ],
    dano: ["espaco", "formato", "retorna"],
    falas: {
      def: 'O Criador chama ehEmailValido("user@site.com"). Duas regras: sem espaços e no formato certo.',
      espaco: "Confere que não há espaço no e-mail. O resultado é {semEspaco}.",
      formato: "O padrão exige: algo, um @, algo, um ponto e algo no final. O e-mail combina? {formato}.",
      retorna: "As duas regras precisam ser verdadeiras: return devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function ehEmailValido(email) {", "def"],
        ['  const semEspaco = !email.includes(" ");', "espaco"],
        ["  const formato = /^[^@]+@[^@]+\\.[^@]+$/.test(email);", "formato"],
        ["  return semEspaco && formato;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: 'const semEspaco = !email.includes(" ");', explica: 'includes(" ") pergunta se o e-mail contém um espaço. O ! na frente inverte a resposta: queremos true quando NÃO tem espaço.' },
        { trecho: "const formato = /^[^@]+@[^@]+\\.[^@]+$/.test(email);", explica: "Leia por partes: ^ começo; [^@]+ um ou mais caracteres que não são @ (o usuário); @ a arroba; [^@]+ o domínio; \\. um ponto de verdade (a barra tira o poder especial do ponto); [^@]+ o final; $ fim. Se o texto não encaixar, .test devolve false." },
        { trecho: "return semEspaco && formato;", explica: "Só é válido se as duas regras forem verdadeiras ao mesmo tempo." },
      ],
      guiado: {
        codigo:
          "function ehEmailValido(email) {\n" +
          '  const semEspaco = ___email.includes(" ");           // qual símbolo inverte a resposta?\n' +
          "  const formato = /^[^@]+@[^@]+\\.[^@]+$/.___(email);   // qual método testa o padrão?\n" +
          "  return semEspaco ___ formato;                      // qual operador exige as duas?\n" +
          "}\n",
        preenche: ["!", "test", "&&"],
        testes: [{ in: ["user@site.com"], out: true }, { in: ["a@b"], out: false }, { in: ["semarroba.com"], out: false }, { in: ["a b@c.com"], out: false }],
      },
    },
  },

  {
    id: "sec-cartao",
    fn: "mascaraCartao",
    entrada: ["1234567812345678"],
    variaveis: ["numero", "ultimos", "escondidos"],
    conceito: "Mostrar só o necessário",
    porque:
      "Dados sensíveis, como o número do cartão, nunca devem aparecer inteiros na tela, em logs ou em e-mails. A regra é mostrar só o suficiente para a pessoa se reconhecer, como os quatro últimos dígitos, e esconder o resto com asteriscos.",
    analogia:
      "É como o recibo da loja: ele mostra '**** 5678' e não o cartão inteiro. Quem lê consegue conferir se é o seu cartão, mas ninguém consegue copiar o número.",
    ideias: [
      { titulo: "Mínimo necessário", texto: "Mostre o menor pedaço de informação que resolve o problema. O resto fica escondido." },
      { titulo: "Cortar o texto", texto: "slice(-4) pega os quatro últimos caracteres, contando a partir do fim." },
      { titulo: "Repetir um símbolo", texto: '"*".repeat(n) cria um texto com n asteriscos.' },
    ],
    dano: ["ultimos", "escondidos", "retorna"],
    falas: {
      def: 'O Criador chama mascaraCartao("1234567812345678"). O número inteiro nunca pode aparecer.',
      ultimos: "Guarda só os quatro últimos dígitos, que são o que pode ser mostrado: {ultimos}.",
      escondidos: "Calcula quantos dígitos precisam ser escondidos (o tamanho do número menos 4) e cria essa quantidade de asteriscos: {escondidos}.",
      retorna: "Junta os asteriscos com os quatro últimos dígitos. return devolve {retorno}.",
    },
    js: {
      codigo: [
        ["function mascaraCartao(numero) {", "def"],
        ["  const ultimos = numero.slice(-4);", "ultimos"],
        ['  const escondidos = "*".repeat(numero.length - ultimos.length);', "escondidos"],
        ["  return escondidos + ultimos;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "const ultimos = numero.slice(-4);", explica: "slice corta um pedaço do texto. Com um número negativo, a contagem começa do fim: slice(-4) devolve os 4 últimos caracteres." },
        { trecho: 'const escondidos = "*".repeat(numero.length - ultimos.length);', explica: 'repeat(n) repete o texto n vezes: "*".repeat(3) dá "***". A quantidade é o tamanho do número menos o tamanho do pedaço que vai aparecer.' },
        { trecho: "return escondidos + ultimos;", explica: "O + junta os dois textos: primeiro os asteriscos, depois os dígitos que podem aparecer." },
      ],
      guiado: {
        codigo:
          "function mascaraCartao(numero) {\n" +
          "  const ultimos = numero.slice(___);                                   // como pegar os 4 últimos?\n" +
          '  const escondidos = "*".___(numero.length - ultimos.length);          // qual método repete o texto?\n' +
          "  return escondidos ___ ultimos;                                       // qual operador junta textos?\n" +
          "}\n",
        preenche: ["-4", "repeat", "+"],
        testes: [{ in: ["1234567812345678"], out: "************5678" }, { in: ["4111111111111111"], out: "************1111" }, { in: ["1234"], out: "1234" }],
      },
    },
  },

  {
    id: "sec-idade",
    fn: "validaIdade",
    entrada: ["25"],
    variaveis: ["valor", "idade"],
    conceito: "Validar antes de converter",
    porque:
      "Formulários mandam tudo como texto, e o texto pode ser qualquer coisa: letras, número negativo, decimal. Antes de usar como número, é preciso conferir que o texto é mesmo um inteiro e que está numa faixa razoável. Só depois se converte. Quem converte primeiro e confere depois deixa passar lixo.",
    analogia:
      "É como o guichê de um banco que confere o documento antes de abrir a conta: primeiro olha se é um documento de verdade, depois se os dados fazem sentido. Só então aceita.",
    ideias: [
      { titulo: "Entrada é texto", texto: "Tudo que vem de um formulário chega como texto, mesmo que pareça número." },
      { titulo: "Validar primeiro", texto: "Confira o formato antes de converter, e a faixa antes de aceitar." },
      { titulo: "null = recusado", texto: "Devolver null é o jeito de dizer 'esse valor não serve'." },
    ],
    dano: ["converte", "retorna"],
    falas: {
      def: 'O Criador chama validaIdade("25"). Chega como texto, e precisa ser conferido antes de virar número.',
      formato: {
        corpo: "devolveNulo1",
        entra: "O texto {valor} é só dígitos? Não! Então não é um inteiro válido e o programa entra no bloco.",
        sai: "O texto {valor} é só dígitos? Sim, passou da primeira checagem e o programa pula o bloco.",
      },
      devolveNulo1: "return null recusa o valor: não era um inteiro.",
      converte: "Agora que é seguro, converte o texto em número: idade = {idade}.",
      faixa: {
        corpo: "devolveNulo2",
        entra: "{idade} é maior que 120? Sim, então está fora da faixa e o programa entra no bloco.",
        sai: "{idade} é maior que 120? Não, está dentro da faixa e o programa pula o bloco.",
      },
      devolveNulo2: "return null recusa o valor: fora da faixa.",
      retorna: "Passou nas duas checagens, então return devolve a idade: {retorno}.",
    },
    js: {
      codigo: [
        ["function validaIdade(valor) {", "def"],
        ["  if (!/^\\d+$/.test(valor)) {", "formato"],
        ["    return null;", "devolveNulo1"],
        ["  }", null],
        ["  const idade = Number(valor);", "converte"],
        ["  if (idade > 120) {", "faixa"],
        ["    return null;", "devolveNulo2"],
        ["  }", null],
        ["  return idade;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: "if (!/^\\d+$/.test(valor)) {", explica: "O padrão ^\\d+$ significa 'do começo ao fim, só dígitos (\\d), um ou mais (+)'. O ! inverte: o if entra quando o texto NÃO é só dígitos. Isso já recusa letras, sinal de menos e decimais." },
        { trecho: "return null;", explica: "null quer dizer 'nada, valor recusado'. O return encerra a função na hora." },
        { trecho: "const idade = Number(valor);", explica: "Só agora, com o formato garantido, convertemos o texto em número com Number(...)." },
        { trecho: "if (idade > 120) {", explica: "Segunda defesa: mesmo sendo inteiro, precisa estar na faixa. Como o formato já exclui negativos, só falta o limite de cima." },
      ],
      guiado: {
        codigo:
          "function validaIdade(valor) {\n" +
          "  if (!/^\\d+$/.___(valor)) {      // qual método testa o padrão?\n" +
          "    return ___;                   // o que devolver quando o formato é inválido?\n" +
          "  }\n" +
          "  const idade = ___(valor);       // qual função converte texto em número?\n" +
          "  if (idade > ___) {              // qual o limite de cima?\n" +
          "    return null;\n" +
          "  }\n" +
          "  return idade;\n" +
          "}\n",
        preenche: ["test", "null", "Number", "120"],
        testes: [{ in: ["25"], out: 25 }, { in: ["abc"], out: null }, { in: ["-5"], out: null }, { in: ["121"], out: null }, { in: ["0"], out: 0 }],
      },
    },
  },

  {
    id: "sec-exame-d",
    fn: "escapaSql",
    entrada: ["O'Brien"],
    variaveis: ["valor", "escapado"],
    conceito: "Injeção de SQL e o escape de aspas",
    porque:
      "Se um programa monta um comando de banco de dados juntando texto digitado pelo usuário, uma aspa simples no meio do texto pode fechar o texto e permitir que o atacante escreva comandos seus. Uma primeira defesa é dobrar cada aspa simples, para que ela seja lida como parte do texto. (No mundo real, o ideal é usar consultas parametrizadas.)",
    analogia:
      "É como uma frase entre aspas num livro: se o texto tiver uma aspa dentro, você a duplica para o leitor entender que a citação continua. Sem isso, a citação seria encerrada no lugar errado.",
    ideias: [
      { titulo: "Injeção de SQL", texto: "O atacante escreve comandos de banco de dados dentro de um campo que deveria ter só um nome ou número." },
      { titulo: "Dobrar a aspa", texto: "Trocar ' por '' faz o banco entender a aspa como parte do texto." },
      { titulo: "Defesa em camadas", texto: "O escape ajuda, mas o mais seguro é nunca montar SQL juntando textos: use parâmetros." },
    ],
    dano: ["escapa", "retorna"],
    falas: {
      def: `O Criador chama escapaSql("O'Brien"). A aspa simples no meio do nome é o perigo.`,
      escapa: "Troca cada aspa simples por duas. O banco passa a entender as duas como uma só aspa dentro do texto: {escapado}.",
      retorna: "return devolve o texto tratado: {retorno}.",
    },
    js: {
      codigo: [
        ["function escapaSql(valor) {", "def"],
        [`  const escapado = valor.replaceAll("'", "''");`, "escapa"],
        ["  return escapado;", "retorna"],
        ["}", null],
      ],
      sintaxe: [
        { trecho: `const escapado = valor.replaceAll("'", "''");`, explica: `replaceAll troca TODAS as ocorrências. O primeiro texto é o que se procura (uma aspa simples, entre aspas duplas) e o segundo é o que entra no lugar (duas aspas simples).` },
        { trecho: "return escapado;", explica: "Devolve a versão tratada, que é a única que pode ser usada no comando." },
      ],
      guiado: {
        codigo:
          "function escapaSql(valor) {\n" +
          `  const escapado = valor.replaceAll(___, "''");   // qual caractere procurar?\n` +
          "  return ___;                                     // o que devolver?\n" +
          "}\n",
        preenche: [`"'"`, "escapado"],
        testes: [{ in: ["O'Brien"], out: "O''Brien" }, { in: ["normal"], out: "normal" }, { in: ["'"], out: "''" }],
      },
    },
  },
];
