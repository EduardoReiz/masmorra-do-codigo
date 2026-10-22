// Track do SENTINELA (Cyber Security). tipo: "seguranca" — na prática usa o
// mesmo motor de código (roda a função), mas os testes incluem PAYLOADS DE
// ATAQUE: se o código continua vulnerável, não passa. Ensina defesa de verdade.
export const SENTINELA = [
  {
    id: "sec-vazio", fn: "campoVazio", nivel: "E", xp: 100, tipo: "seguranca",
    titulo: "Vigia do Campo Vazio", fraqueza: "Conferir a entrada", tempo: "~6 min", arte: "sec-senha",
    enunciado:
      "Todo ataque começa numa entrada que o programa não conferiu. A primeira defesa é simples: recusar o que veio vazio. " +
      'Escreva campoVazio(texto) que devolve true se o texto for vazio ou tiver só espaços, e false caso contrário. Ex: campoVazio("   ") devolve true.',
    starter: "function campoVazio(texto) {\n  // true se vazio ou só espaços\n\n}\n",
    testes: [
      { in: [""], out: true, publico: true },
      { in: ["   "], out: true, publico: true },
      { in: ["oi"], out: false, publico: true },
      { in: [" a "], out: false, publico: false },
      { in: ["\t"], out: true, publico: false },
    ],
    fratura: [
      { in: ["0"], out: false, publico: false },
      { in: ["       x"], out: false, publico: false },
    ],
  },
  {
    id: "sec-tamanho", fn: "senhaCurta", nivel: "E", xp: 120, tipo: "seguranca",
    titulo: "Medidor de Senha", fraqueza: "Comparar tamanhos", tempo: "~6 min", arte: "sec-senha",
    enunciado:
      "Senha curta se adivinha em segundos. Escreva senhaCurta(senha) que devolve true se a senha tiver MENOS de 8 caracteres " +
      'e false se tiver 8 ou mais. Ex: senhaCurta("abc123") devolve true.',
    starter: "function senhaCurta(senha) {\n  // true se tiver menos de 8 caracteres\n\n}\n",
    testes: [
      { in: ["abc123"], out: true, publico: true },
      { in: ["abcdefgh"], out: false, publico: true },
      { in: [""], out: true, publico: true },
      { in: ["1234567"], out: true, publico: false },
      { in: ["uma senha bem longa"], out: false, publico: false },
    ],
    fratura: [
      { in: ["12345678"], out: false, publico: false },
      { in: ["a"], out: true, publico: false },
    ],
  },
  {
    id: "sec-papel", fn: "podeEntrar", nivel: "E", xp: 140, tipo: "seguranca",
    titulo: "Porteiro das Salas", fraqueza: "Controle de acesso", tempo: "~8 min", arte: "sec-idade",
    enunciado:
      "Nem todo mundo pode entrar em todas as salas. Escreva podeEntrar(papel) que devolve true só para os papéis " +
      '"admin" e "moderador". Qualquer outro papel (como "visitante") devolve false.',
    starter: "function podeEntrar(papel) {\n  // true só para admin e moderador\n\n}\n",
    testes: [
      { in: ["admin"], out: true, publico: true },
      { in: ["moderador"], out: true, publico: true },
      { in: ["visitante"], out: false, publico: true },
      { in: [""], out: false, publico: false },
      { in: ["Admin"], out: false, publico: false },
      { in: ["administrador"], out: false, publico: false },
    ],
    fratura: [
      { in: ["moderadora"], out: false, publico: false },
      { in: ["ADMIN"], out: false, publico: false },
    ],
  },
  {
    id: "sec-xss", fn: "sanitizarHtml", nivel: "E", xp: 150, tipo: "seguranca",
    titulo: "Golem do XSS", fraqueza: "Escapar HTML", tempo: "~12 min",
    enunciado:
      "Um atacante injeta <script> nos comentários do site. Escreva sanitizarHtml(texto) que " +
      "escapa os caracteres perigosos: & vira &amp;, < vira &lt; e > vira &gt;. Escape o & primeiro.",
    starter: "function sanitizarHtml(texto) {\n  // escape &, < e >\n\n}\n",
    testes: [
      { in: ["<script>"], out: "&lt;script&gt;", publico: true },
      { in: ["a & b"], out: "a &amp; b", publico: true },
      { in: ["ola"], out: "ola", publico: true },
      { in: ["<b>c"], out: "&lt;b&gt;c", publico: false },
      { in: [""], out: "", publico: false },
    ],
    fratura: [
      { in: ["<script>alert('x')</script>"], out: "&lt;script&gt;alert('x')&lt;/script&gt;", publico: false },
      { in: ["a&b<c>"], out: "a&amp;b&lt;c&gt;", publico: false },
      { in: ["&amp;"], out: "&amp;amp;", publico: false },
    ],
  },
  {
    id: "sec-senha", fn: "senhaForte", nivel: "E", xp: 150, tipo: "seguranca",
    titulo: "Espião do Segredo Fraco", fraqueza: "Política de senha", tempo: "~10 min",
    enunciado:
      "Senhas fracas são porta aberta. Escreva senhaForte(senha) que devolve true só se a senha tiver " +
      "pelo menos 8 caracteres, com ao menos uma letra e ao menos um número.",
    starter: "function senhaForte(senha) {\n  // >=8, com letra e número\n\n}\n",
    testes: [
      { in: ["abc"], out: false, publico: true },
      { in: ["abcd1234"], out: true, publico: true },
      { in: ["12345678"], out: false, publico: true },
      { in: [""], out: false, publico: false },
      { in: ["Senha123"], out: true, publico: false },
    ],
    fratura: [
      { in: ["aaaaaaaa"], out: false, publico: false },
      { in: ["aaaaaaa1"], out: true, publico: false },
      { in: ["a1"], out: false, publico: false },
    ],
  },
  {
    id: "sec-exame-e", fn: "ehEmailValido", nivel: "E", xp: 320, tipo: "seguranca", chefe: true, promoveA: "D",
    titulo: "Guardião do Portão", fraqueza: "Validar entrada", tempo: "~16 min",
    enunciado:
      "EXAME DE ASCENSÃO. Nunca confie na entrada do usuário. Escreva ehEmailValido(email) que devolve " +
      "true só para e-mails no formato algo@algo.algo, sem espaços e com um único @.",
    starter: "function ehEmailValido(email) {\n  // formato algo@algo.algo, sem espaços, um @\n\n}\n",
    testes: [
      { in: ["user@site.com"], out: true, publico: true },
      { in: ["a@b"], out: false, publico: true },
      { in: ["semarroba.com"], out: false, publico: true },
      { in: ["@x.com"], out: false, publico: false },
      { in: ["a@b.c"], out: true, publico: false },
      { in: ["a b@c.com"], out: false, publico: false },
      { in: ["a@@b.com"], out: false, publico: false },
      { in: ["nome@dominio.com.br"], out: true, publico: false },
    ],
  },
  {
    id: "sec-cartao", fn: "mascaraCartao", nivel: "D", xp: 200, tipo: "seguranca",
    titulo: "Ladrão de Dados", fraqueza: "Vazamento de dados", tempo: "~12 min",
    enunciado:
      "Nunca mostre o cartão inteiro. Escreva mascaraCartao(numero) que troca todos os dígitos por '*', " +
      "menos os 4 últimos. Ex: '1234567812345678' vira '************5678'.",
    starter: "function mascaraCartao(numero) {\n  // mascara tudo menos os 4 últimos\n\n}\n",
    testes: [
      { in: ["1234567812345678"], out: "************5678", publico: true },
      { in: ["4111111111111111"], out: "************1111", publico: true },
      { in: ["1234"], out: "1234", publico: true },
      { in: ["12345"], out: "*2345", publico: false },
      { in: [""], out: "", publico: false },
    ],
    fratura: [
      { in: ["0000111122223333"], out: "************3333", publico: false },
      { in: ["999"], out: "999", publico: false },
      { in: ["12345678"], out: "****5678", publico: false },
    ],
  },
  {
    id: "sec-idade", fn: "validaIdade", nivel: "D", xp: 200, tipo: "seguranca",
    titulo: "Impostor dos Formulários", fraqueza: "Sanitizar número", tempo: "~12 min",
    enunciado:
      "O formulário manda texto; valide antes de confiar. Escreva validaIdade(valor) que devolve o número " +
      "se 'valor' for um inteiro de 0 a 120, ou null caso contrário (texto, negativo, decimal, fora da faixa).",
    starter: "function validaIdade(valor) {\n  // devolve o número válido (0..120) ou null\n\n}\n",
    testes: [
      { in: ["25"], out: 25, publico: true },
      { in: ["abc"], out: null, publico: true },
      { in: ["-5"], out: null, publico: true },
      { in: ["200"], out: null, publico: false },
      { in: ["0"], out: 0, publico: false },
    ],
    fratura: [
      { in: [""], out: null, publico: false },
      { in: ["25.5"], out: null, publico: false },
      { in: ["120"], out: 120, publico: false },
      { in: [" 5"], out: null, publico: false },
    ],
  },
  {
    id: "sec-exame-d", fn: "escapaSql", nivel: "D", xp: 440, tipo: "seguranca", chefe: true, promoveA: "C",
    titulo: "Wraith do SQL Injection", fraqueza: "Escapar aspas", tempo: "~18 min",
    enunciado:
      "EXAME DE ASCENSÃO. Concatenar entrada em SQL é injeção na certa. Como 1ª defesa, escreva " +
      "escapaSql(valor) que dobra cada aspa simples: O'Brien vira O''Brien. (No mundo real: use queries parametrizadas.)",
    starter: "function escapaSql(valor) {\n  // dobra cada aspa simples\n\n}\n",
    testes: [
      { in: ["O'Brien"], out: "O''Brien", publico: true },
      { in: ["1'; DROP TABLE users;--"], out: "1''; DROP TABLE users;--", publico: true },
      { in: ["normal"], out: "normal", publico: true },
      { in: ["''"], out: "''''", publico: false },
      { in: [""], out: "", publico: false },
      { in: ["a'b'c"], out: "a''b''c", publico: false },
    ],
  },
];
