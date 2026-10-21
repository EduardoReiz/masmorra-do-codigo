// Grimório de Saber: a lição de LEITURA de cada monstro. Ensina o conceito
// (lógica + linguagem) com uma analogia, dá passos que APONTAM o caminho sem
// entregar o código, e termos para o jogador pesquisar. Para quem prefere ler
// a assistir vídeo. Chave = id do exercício.
export const LICOES = {
  oi: {
    conceito: "Mostrar um texto na tela",
    leitura: "Um programa é uma lista de ordens para o computador. A primeira ordem que todo mundo aprende é mostrar uma mensagem na tela. O texto vai entre aspas, e o que estiver entre aspas aparece exatamente como foi escrito.",
    passos: ["Escolha o comando de mostrar na tela da sua linguagem.", "Entre parênteses, escreva o texto entre aspas.", "Rode e confira se a mensagem saiu igual à pedida."],
    pesquisa: ["hello world javascript console.log", "hello world python print"],
  },
  nome: {
    conceito: "Guardar um valor numa variável",
    leitura: "Uma variável é uma caixinha com nome onde você guarda um valor para usar depois. Você dá um nome, guarda o valor com o sinal de igual e, quando quiser o valor de volta, é só escrever o nome da caixinha.",
    passos: ["Crie a variável nome guardando o texto.", "Monte a mensagem juntando os pedaços de texto com +.", "Mostre a mensagem na tela."],
    pesquisa: ["variáveis para iniciantes", "concatenar textos"],
  },
  contas: {
    conceito: "Contas com números",
    leitura: "O computador é uma calculadora muito rápida. Para somar usamos +, para multiplicar usamos *. Você pode escrever a conta direto dentro do comando de mostrar na tela, e ele mostra o resultado.",
    passos: ["Escreva a primeira conta e mostre o resultado.", "Escreva a segunda conta e mostre o resultado.", "Confira se saíram duas linhas: 12 e 42."],
    pesquisa: ["operadores aritméticos", "operador de multiplicação programação"],
  },
  dobro: {
    conceito: "Funções: uma receita que recebe e devolve",
    leitura: "Uma função é uma receita com nome: você entrega os ingredientes (os parâmetros), ela faz o trabalho e devolve o prato pronto (o return). Quase tudo que você vai escrever daqui para frente é uma função.",
    passos: ["Dê um nome à função e diga o que ela recebe.", "Calcule o dobro do valor recebido.", "Devolva o resultado com return."],
    pesquisa: ["o que é uma função", "return em programação"],
  },
  portao: {
    conceito: "Decisão e repetição juntas",
    leitura: "Aqui você junta tudo: um laço percorre os números de 1 até n, um if decide se cada número é par e uma variável vai acumulando a soma só dos pares. Cada peça você já domina; o desafio é encaixá-las.",
    passos: ["Crie uma variável total valendo 0.", "Percorra os números de 1 até n.", "Se o número for par, some ao total.", "Devolva o total."],
    pesquisa: ["laço com if dentro", "acumulador condicional"],
  },
  soma: {
    conceito: "Laço de repetição e variável acumuladora",
    leitura:
      "Somar de 1 até n é como encher um balde gota a gota: você precisa de um lugar para guardar o total que vai crescendo. Esse lugar é uma variável acumuladora, que começa em zero e recebe cada número à medida que você percorre a contagem.",
    passos: ["Crie uma variável 'total' valendo 0.", "Percorra os números de 1 até n com um laço.", "A cada volta, some o número ao total.", "No fim, devolva o total."],
    pesquisa: ["for loop javascript", "variável acumuladora"],
  },
  par: {
    conceito: "Operador de resto (módulo)",
    leitura:
      "Par é todo número que você consegue dividir em duas partes iguais, sem sobrar nada — como separar meias em pares. O operador % devolve justamente o que sobra numa divisão: se dividir por 2 e sobrar 0, é par.",
    passos: ["Use n % 2 para pegar o resto da divisão por 2.", "Compare esse resto com 0.", "Devolva verdadeiro ou falso conforme a comparação."],
    pesquisa: ["operador módulo %", "retornar booleano javascript"],
  },
  "exame-e": {
    conceito: "Converter número em texto e cuidar do sinal",
    leitura:
      "Inverter os dígitos fica fácil se você tratar o número como um texto e lê-lo de trás para frente. Mas o sinal negativo viaja à parte: guarde-o antes, trabalhe com o valor absoluto, e no fim recomponha. Zeros que sobram na frente somem sozinhos ao voltar para número.",
    passos: ["Guarde o sinal de n (positivo ou negativo).", "Trabalhe com o valor absoluto de n como texto.", "Inverta os caracteres e volte para número.", "Aplique o sinal de volta."],
    pesquisa: ["split reverse join string", "Math.abs Math.sign", "parseInt"],
  },
  maior: {
    conceito: "Percorrer uma lista guardando um campeão",
    leitura:
      "Achar o maior é como procurar a árvore mais alta da floresta: você elege uma como a maior por enquanto e, a cada nova que encontra, troca o campeão se a nova for maior. No fim, o campeão é a resposta.",
    passos: ["Comece considerando o primeiro item como o maior.", "Percorra o resto da lista.", "Se encontrar um valor maior, atualize o campeão.", "Devolva o campeão."],
    pesquisa: ["percorrer array for of", "comparar maior valor"],
  },
  vogais: {
    conceito: "Percorrer texto e testar cada caractere",
    leitura:
      "Contar vogais é como passar o dedo letra por letra e marcar um risquinho toda vez que bate numa vogal. Você precisa de um contador e de uma forma de perguntar 'esta letra é a, e, i, o ou u?'.",
    passos: ["Crie um contador em 0.", "Percorra cada caractere do texto.", "Verifique se ele é uma das vogais.", "Se for, some 1 ao contador; no fim, devolva-o."],
    pesquisa: ["percorrer string caractere", "includes vogais javascript"],
  },
  "exame-d": {
    conceito: "Divisibilidade e eficiência (testar até a raiz)",
    leitura:
      "Primo é o número que só se parte em 1 e ele mesmo — como um tijolo que não dá para dividir em pedaços iguais. Para descobrir, você testa se algum número o divide certinho. Um truque: basta testar até a raiz quadrada dele, porque depois disso os divisores se repetem invertidos.",
    passos: ["Números menores que 2 não são primos.", "Teste divisores de 2 até a raiz quadrada de n.", "Se algum divide n sem sobra, não é primo.", "Se nenhum dividir, é primo."],
    pesquisa: ["número primo algoritmo", "i*i <= n otimização"],
  },
  inverte: {
    conceito: "Construir uma string nova",
    leitura:
      "Inverter um texto é como empilhar pratos e depois tirá-los do topo: o último que entrou é o primeiro que sai. Você pode percorrer do fim para o começo montando um texto novo, ou usar as ferramentas prontas de dividir, inverter e juntar.",
    passos: ["Pense no texto como uma sequência de caracteres.", "Percorra do último ao primeiro, OU use split/reverse/join.", "Monte o texto invertido e devolva."],
    pesquisa: ["inverter string javascript", "split reverse join"],
  },
  fib: {
    conceito: "Acumular os dois últimos (iteração)",
    leitura:
      "Em Fibonacci, cada número nasce da soma dos dois anteriores — como coelhos que se somam a cada geração. Você não precisa guardar tudo: basta lembrar dos dois últimos e ir avançando.",
    passos: ["Comece com os dois primeiros valores, ambos 1.", "Repita somando os dois últimos para achar o próximo.", "Avance até chegar na posição n.", "Devolva o valor da posição n."],
    pesquisa: ["fibonacci iterativo", "trocar valores de variáveis"],
  },
  "exame-c": {
    conceito: "Comparar com o inverso (simetria)",
    leitura:
      "Palíndromo é a palavra igual de frente para trás, como um reflexo num lago parado ('arara'). O jeito mais direto de checar é comparar o texto com ele mesmo invertido; se forem idênticos, é palíndromo.",
    passos: ["Gere a versão invertida do texto.", "Compare com o texto original.", "Devolva verdadeiro se forem iguais."],
    pesquisa: ["verificar palindromo javascript", "comparar string invertida"],
  },
  primos: {
    conceito: "Reaproveitar uma verificação dentro de um laço",
    leitura:
      "Contar quantos primos existem até n é passar um 'detector de primo' por cada número de 2 a n, como peneirar areia atrás de pepitas. A verificação de primo você já aprendeu — agora é usá-la repetidas vezes e contar os acertos.",
    passos: ["Crie um contador em 0.", "Percorra de 2 até n.", "Para cada número, verifique se é primo.", "Se for, some 1 ao contador; devolva-o no fim."],
    pesquisa: ["contar números primos", "função auxiliar javascript"],
  },
  raiz: {
    conceito: "Laço dentro de laço (reduzir até um dígito)",
    leitura:
      "Somar os dígitos até sobrar um só é como dobrar um papel até não dar mais: você repete a operação sobre o próprio resultado. Para pegar os dígitos, o resto por 10 te dá o último, e a divisão inteira por 10 descarta ele.",
    passos: ["Enquanto o número tiver mais de um dígito, repita.", "Dentro, some os dígitos usando resto por 10 e divisão inteira.", "O resultado da soma vira o novo número.", "Pare quando sobrar um único dígito."],
    pesquisa: ["soma dos dígitos raiz digital", "n % 10 Math.floor"],
  },
  "exame-b": {
    conceito: "Valores distintos e ordenação",
    leitura:
      "O segundo maior não é simplesmente 'o penúltimo': se o maior aparece repetido, esses ecos não contam. Primeiro você elimina as repetições, depois organiza do maior para o menor e pega quem está em segundo no pódio.",
    passos: ["Remova os valores repetidos da lista.", "Ordene os valores do maior para o menor.", "Pegue o que está na segunda posição."],
    pesquisa: ["Set remover duplicados", "ordenar array de números sort"],
  },
  palavras: {
    conceito: "Dividir texto e limpar pedaços vazios",
    leitura:
      "Contar palavras é como cortar um colar nos espaços entre as contas. O cuidado é com espaços a mais (no começo, no fim ou dobrados): eles viram 'contas vazias' que você precisa descartar antes de contar.",
    passos: ["Remova os espaços das pontas do texto.", "Divida o texto pelos espaços.", "Descarte os pedaços vazios.", "Conte o que sobrou."],
    pesquisa: ["split espaços regex", "trim filter array"],
  },
  anagrama: {
    conceito: "Normalizar e comparar (assinatura)",
    leitura:
      "Duas palavras são anagramas quando têm exatamente as mesmas letras embaralhadas ('amor' e 'roma'). O truque é dar a cada uma a mesma 'impressão digital': se você ordenar as letras das duas, anagramas ficam idênticos.",
    passos: ["Ordene as letras da primeira palavra.", "Ordene as letras da segunda palavra.", "Compare as duas versões ordenadas.", "Devolva verdadeiro se forem iguais."],
    pesquisa: ["verificar anagrama javascript", "split sort join"],
  },
  "exame-a": {
    conceito: "Contagem de frequência",
    leitura:
      "Achar o primeiro caractere que não se repete é como procurar o único pássaro de uma cor rara num bando: primeiro você conta quantos de cada tipo existem, depois volta do começo e aponta o primeiro que apareceu uma vez só.",
    passos: ["Conte quantas vezes cada caractere aparece no texto.", "Percorra o texto de novo, na ordem.", "Devolva o primeiro cuja contagem é 1.", "Se todos repetem, devolva texto vazio."],
    pesquisa: ["contar frequência de caracteres", "indexOf lastIndexOf"],
  },

  // ---- Oráculo (engenharia de prompt) ----
  "orac-explica": {
    conceito: "Prompt claro: diga PARA QUEM e COMO",
    leitura:
      "A IA não adivinha o seu público. Pedir 'explique variáveis' é como pedir uma receita sem dizer para quantas pessoas: vem genérico. Diga quem vai ler (um iniciante) e como quer a resposta (com analogia, exemplo), e a qualidade salta.",
    passos: ["Diga para quem é (ex.: alguém que nunca programou).", "Peça o conceito de forma clara.", "Peça uma analogia ou exemplo concreto.", "Dê detalhe — prompt vago gera resposta vaga."],
    pesquisa: ["como escrever um bom prompt", "engenharia de prompt iniciante"],
  },
  "orac-resumo": {
    conceito: "Restringir tamanho e formato",
    leitura:
      "Sem limites, a IA decide sozinha o tamanho e o formato — e quase nunca é o que você queria. Defina o teto (em X palavras, em 5 tópicos) e a forma (lista, parágrafo). Restrição é o que transforma uma resposta solta numa resposta útil.",
    passos: ["Peça o resumo explicitamente.", "Defina o tamanho (palavras, linhas ou tópicos).", "Defina o formato de saída.", "Seja específico sobre o foco do resumo."],
    pesquisa: ["prompt para resumir texto", "restrições em prompt"],
  },
  "orac-exame-e": {
    conceito: "A anatomia de um prompt completo",
    leitura:
      "Um prompt forte tem cinco ossos: PAPEL (quem a IA deve ser), CONTEXTO (a situação), RESTRIÇÕES (o que pode e o que não pode), FORMATO (como entregar) e EXEMPLO (um modelo do que você espera). Faltando um osso, a resposta manca.",
    passos: ["Dê um papel à IA (aja como...).", "Descreva o contexto com detalhe.", "Liste restrições e regras.", "Defina o formato da saída.", "Mostre um exemplo do resultado esperado."],
    pesquisa: ["estrutura de um prompt papel contexto formato", "few-shot prompting exemplo"],
  },
  "orac-imagem": {
    conceito: "Prompt de imagem: estilo, cor, enquadramento",
    leitura:
      "IA de imagem desenha o que você descreve — e preenche o resto do jeito dela. Quanto mais você crava estilo (pixel art), paleta de cores, enquadramento e clima, menos ela inventa. Pense como um diretor passando instruções ao ilustrador.",
    passos: ["Descreva o assunto da imagem.", "Defina o estilo (pixel art, 8-bit...).", "Especifique cores/paleta e clima.", "Diga o enquadramento e o fundo."],
    pesquisa: ["prompt para gerar imagem pixel art", "prompt de imagem estilo e enquadramento"],
  },
  "orac-persona": {
    conceito: "Dar personalidade e limites à IA",
    leitura:
      "Dizer quem a IA é muda tudo: o mesmo pedido soa diferente vindo de um 'tutor paciente' ou de um 'revisor rígido'. Defina o papel, o tom de voz e, tão importante quanto, o que ela NÃO deve fazer — por exemplo, não entregar a resposta pronta.",
    passos: ["Defina o papel (um tutor que...).", "Descreva o tom/estilo de fala.", "Liste o que ela não deve fazer.", "Dê detalhe suficiente para fixar a persona."],
    pesquisa: ["prompt de sistema persona chatbot", "definir tom e restrições IA"],
  },
  "orac-exame-d": {
    conceito: "Blindar o prompt contra alucinação",
    leitura:
      "A IA 'alucina' (inventa) quando o prompt deixa brechas. Você fecha as brechas sendo específico: papel técnico, contexto completo, regras claras, formato exato e um exemplo de entrada e saída. Um exemplo vale mais que três parágrafos de explicação.",
    passos: ["Dê um papel técnico à IA.", "Descreva o contexto e o objetivo com precisão.", "Imponha regras e restrições.", "Defina o formato da saída.", "Inclua um exemplo de entrada e a saída esperada."],
    pesquisa: ["evitar alucinação da IA prompt", "exemplo entrada e saída no prompt"],
  },

  // ---- Sentinela (cyber security) ----
  "sec-xss": {
    conceito: "Escapar a saída (defesa contra XSS)",
    leitura:
      "Se o texto que o usuário digita vira HTML sem tratamento, ele pode injetar um <script> e rodar código no navegador de outras pessoas — isso é XSS. Escapar é desarmar a bomba: trocar os caracteres especiais por códigos que o navegador MOSTRA em vez de EXECUTAR. Troque o & primeiro, senão você re-escapa os outros.",
    passos: ["Troque todo & por &amp; (primeiro!).", "Troque todo < por &lt;.", "Troque todo > por &gt;.", "Devolva o texto já seguro para exibir."],
    pesquisa: ["o que é XSS", "escapar html javascript replace"],
  },
  "sec-senha": {
    conceito: "Política de senha",
    leitura:
      "Senha curta é fechadura de papel. Uma regra mínima — tamanho e variedade — já corta a maioria dos ataques de adivinhação. Aqui você exige pelo menos 8 caracteres, com ao menos uma letra e um número.",
    passos: ["Verifique se o tamanho é pelo menos 8.", "Verifique se existe ao menos uma letra.", "Verifique se existe ao menos um número.", "Só devolva true se as três condições baterem."],
    pesquisa: ["validar força de senha javascript", "expressão regular letra e número"],
  },
  "sec-exame-e": {
    conceito: "Validar a entrada (nunca confiar no usuário)",
    leitura:
      "Toda entrada é suspeita até provar o contrário. Validar formato (como de um e-mail) evita dados sujos e muitos ataques. Uma expressão regular descreve o formato aceito: algo, um @, algo, um ponto, e mais algo — sem espaços.",
    passos: ["Exija exatamente um @, com conteúdo antes e depois.", "Exija um ponto no domínio, com conteúdo depois dele.", "Rejeite espaços.", "Devolva true só se o formato inteiro bater."],
    pesquisa: ["validação de email regex", "validar entrada do usuário"],
  },
  "sec-cartao": {
    conceito: "Mascarar dados sensíveis",
    leitura:
      "Dado sensível só aparece o mínimo necessário — como mostrar só os 4 últimos dígitos do cartão num recibo. O resto você cobre com '*'. Mostrar o número inteiro na tela ou no log é vazamento na certa.",
    passos: ["Descubra quantos dígitos existem.", "Mantenha os 4 últimos.", "Troque todos os anteriores por '*'.", "Junte a máscara com os 4 últimos."],
    pesquisa: ["mascarar número de cartão javascript", "slice repeat string"],
  },
  "sec-idade": {
    conceito: "Sanitizar e validar números",
    leitura:
      "Formulário manda texto, não número — e pode mandar qualquer coisa. Antes de usar, confirme que é um inteiro dentro de uma faixa que faz sentido. O que não passar vira null (inválido), em vez de quebrar o sistema lá na frente.",
    passos: ["Confirme que o valor é só dígitos (inteiro).", "Converta para número.", "Verifique se está na faixa de 0 a 120.", "Devolva o número se válido, senão null."],
    pesquisa: ["validar número inteiro javascript", "sanitização de entrada"],
  },
  "sec-exame-d": {
    conceito: "Injeção de SQL e escape",
    leitura:
      "Quando você gruda a entrada do usuário direto numa query, uma aspa bem colocada pode reescrever seu comando — é o SQL Injection. Dobrar as aspas é a primeira defesa (a de verdade é usar queries parametrizadas, que separam comando de dado).",
    passos: ["Encontre toda aspa simples no valor.", "Troque cada ' por '' (duas aspas).", "Devolva o valor escapado.", "Lembre: em produção, use consultas parametrizadas."],
    pesquisa: ["o que é SQL injection", "queries parametrizadas prepared statement"],
  },

  // ---- Estrategista (análise de dados) ----
  "dat-total": {
    conceito: "Agregar: somar a lista inteira",
    leitura:
      "Analisar dados quase sempre começa somando algo. Aqui você passa por cada venda e vai juntando preço × quantidade num total — como um caixa fechando o dia, somando item por item. A ferramenta reduce foi feita pra isso: acumular a lista num único número.",
    passos: ["Comece um total em 0.", "Para cada item, calcule preco × qtd.", "Some esse valor ao total.", "Devolva o total."],
    pesquisa: ["javascript reduce somar array de objetos", "agregação de dados"],
  },
  "dat-conta": {
    conceito: "Filtrar e contar",
    leitura:
      "Contar quantos itens batem numa condição é separar o joio do trigo: você fica só com os que interessam e conta quantos sobraram. filter te dá a sublista; o tamanho dela é a resposta.",
    passos: ["Fique só com os itens cuja categoria é a pedida.", "Conte quantos sobraram.", "Devolva essa contagem."],
    pesquisa: ["javascript filter array de objetos", "contar itens por condição"],
  },
  "dat-exame-e": {
    conceito: "Encontrar o máximo por um campo",
    leitura:
      "Achar o 'maior' num conjunto de dados é eleger um campeão e desafiá-lo item a item — igual à Hidra do Arquiteto, mas agora o critério é um campo (o preço) de um objeto. No fim, você devolve o nome do campeão, não o objeto inteiro.",
    passos: ["Guarde o primeiro item como campeão.", "Percorra comparando o preço de cada um.", "Troque o campeão quando achar preço maior.", "Devolva o nome (produto) do campeão."],
    pesquisa: ["maior valor por campo array de objetos", "reduce max javascript"],
  },
  "dat-filtra": {
    conceito: "Filtrar e projetar (pegar só um campo)",
    leitura:
      "Muitas análises são 'me dê só os X que satisfazem Y'. Primeiro você filtra (preço acima do limite), depois projeta: em vez de devolver os objetos inteiros, devolve só o campo que importa (o nome). Filtrar escolhe linhas; projetar escolhe colunas.",
    passos: ["Fique só com os itens de preço maior que o limite.", "Transforme cada um no seu nome.", "Mantenha a ordem original.", "Devolva a lista de nomes."],
    pesquisa: ["javascript filter e map encadeados", "projeção de dados"],
  },
  "dat-media": {
    conceito: "Média e cuidado com divisão por zero",
    leitura:
      "Média é soma dividida pela quantidade — mas cuidado: se a lista está vazia, dividir por zero dá resultado inválido. Por isso, base vazia devolve 0. E arredondar deixa o número apresentável.",
    passos: ["Se a lista estiver vazia, devolva 0.", "Some todos os preços.", "Divida pela quantidade de itens.", "Arredonde para o inteiro mais próximo e devolva."],
    pesquisa: ["calcular média array javascript", "Math.round divisão por zero"],
  },
  "dat-exame-d": {
    conceito: "Agregar por item e ranquear",
    leitura:
      "Receita não é o preço: é preço × quantidade. Este exame junta duas ideias — calcular uma métrica derivada para cada item e depois achar o campeão por ela. É o tipo de pergunta que todo relatório de vendas responde: qual produto mais faturou?",
    passos: ["Para cada item, calcule a receita (preco × qtd).", "Compare as receitas item a item.", "Guarde o de maior receita.", "Devolva o nome dele."],
    pesquisa: ["maior receita produto javascript", "métrica derivada e ranking"],
  },

  // ---- Oráculo (trilha avançada: C -> S) ----
  "orac-cot": {
    conceito: "Chain of Thought (pensar em etapas)",
    leitura:
      "A IA acerta muito mais problemas de lógica quando você pede que ela PENSE antes de responder, como quem rascunha a conta no papel. Peça o raciocínio passo a passo e, só no fim, a resposta — assim ela não 'chuta' de primeira.",
    passos: ["Descreva o problema com clareza.", "Peça explicitamente o raciocínio passo a passo.", "Peça a resposta final separada, ao fim.", "O raciocínio é o que melhora o acerto."],
    pesquisa: ["chain of thought prompting", "pensar passo a passo IA"],
  },
  "orac-exame-c": {
    conceito: "Saída estruturada (a IA falando com sistemas)",
    leitura:
      "Quando outro programa vai LER a resposta da IA, ela não pode vir como texto solto — tem que vir num formato exato, como um JSON com campos definidos. É a diferença entre entregar dados organizados numa planilha e entregar um bilhete à mão.",
    passos: ["Dê um papel à IA.", "Exija o formato exato (ex.: JSON com estes campos).", "Proíba texto fora do formato.", "Mostre um exemplo da estrutura."],
    pesquisa: ["prompt saída em json", "structured output llm"],
  },
  "orac-refino": {
    conceito: "Refinar a própria resposta (auto-crítica)",
    leitura:
      "Raramente o primeiro rascunho é o melhor — vale para gente e para IA. Você pode pedir que ela gere, depois CRITIQUE o que fez segundo um critério e reescreva melhor. É transformar uma tentativa em duas, dentro do mesmo prompt.",
    passos: ["Peça a primeira versão.", "Peça uma crítica dela segundo um critério (clareza, correção...).", "Peça a versão reescrita e melhorada.", "Deixe o critério de qualidade explícito."],
    pesquisa: ["self refine prompting", "prompt melhorar a própria resposta"],
  },
  "orac-exame-b": {
    conceito: "Few-shot (ensinar por exemplos)",
    leitura:
      "Em vez de explicar a regra, você MOSTRA: dá alguns exemplos de entrada e a saída certa, e a IA capta o padrão sozinha. Dois ou três exemplos bem escolhidos costumam valer mais que um parágrafo de instrução.",
    passos: ["Diga a tarefa (ex.: classificar sentimento).", "Dê pelo menos dois exemplos de entrada → saída.", "Mantenha o mesmo formato nos exemplos.", "Apresente o caso novo a ser resolvido."],
    pesquisa: ["few-shot prompting exemplos", "aprender por exemplos llm"],
  },
  "orac-sistema": {
    conceito: "Prompt de sistema (moldar o assistente)",
    leitura:
      "O prompt de sistema é a 'constituição' do assistente: define quem ele é, como fala e o que sempre/nunca faz, valendo para toda a conversa. É o que separa um tutor paciente que não entrega a resposta de um que cospe o gabarito.",
    passos: ["Defina a identidade/papel.", "Defina o tom e o estilo de fala.", "Liste o que ele SEMPRE faz.", "Liste o que ele NUNCA faz."],
    pesquisa: ["system prompt design", "definir persona assistente IA"],
  },
  "orac-exame-a": {
    conceito: "Prompt mestre (tudo junto)",
    leitura:
      "O exame final junta todas as ferramentas: papel, contexto rico, restrições, formato estruturado, um exemplo e raciocínio passo a passo. Não é sobre escrever muito — é remover toda ambiguidade, para a IA ter um só caminho possível: o certo.",
    passos: ["Dê papel e contexto detalhado.", "Imponha as restrições.", "Exija o formato de saída.", "Inclua um exemplo e peça o raciocínio passo a passo."],
    pesquisa: ["engenharia de prompt avançada", "prompt completo papel contexto formato exemplo"],
  },
};

// link de pesquisa (Google) para quem prefere ir atrás por leitura
export function linkPesquisa(termo) {
  return "https://www.google.com/search?q=" + encodeURIComponent(termo);
}
