// Ajuda de cada exercício: uma DICA que orienta sem entregar a solução, e uma
// AULA de referência. A aula não aponta para um vídeo fixo (que pode sair do
// ar); abre uma BUSCA no YouTube já montada com o tema + canais que ensinam
// bem (Curso em Vídeo / Gustavo Guanabara e cia), caindo sempre em algo útil.
export const AJUDA = {
  soma: {
    dica: "Crie uma variável 'total' valendo 0 e vá somando cada número de 1 até n dentro de um laço for.",
    aula: { canal: "Curso em Vídeo", q: "curso em video javascript estrutura de repetição for" },
  },
  par: {
    dica: "O resto da divisão por 2 (n % 2) é 0 quando o número é par.",
    aula: { canal: "Curso em Vídeo", q: "gustavo guanabara javascript operadores aritméticos resto" },
  },
  "exame-e": {
    dica: "Transforme o número em texto, inverta os caracteres e volte para número. Cuidado com o sinal negativo e com zeros que desaparecem.",
    aula: { canal: "YouTube", q: "javascript inverter numero manipulação de string" },
  },
  maior: {
    dica: "Guarde o primeiro item como 'maior' e percorra a lista; troque sempre que achar um valor maior.",
    aula: { canal: "Curso em Vídeo", q: "curso em video javascript percorrer vetor array for" },
  },
  vogais: {
    dica: "Percorra letra por letra e verifique se cada uma é a, e, i, o ou u.",
    aula: { canal: "Curso em Vídeo", q: "gustavo guanabara javascript percorrer string caractere" },
  },
  "exame-d": {
    dica: "Um primo só é divisível por 1 e por ele mesmo. Teste divisores de 2 até a raiz quadrada de n. Lembre que 0, 1 e negativos não são primos.",
    aula: { canal: "YouTube", q: "javascript verificar numero primo algoritmo" },
  },
  inverte: {
    dica: "Dá para percorrer do último caractere ao primeiro montando um texto novo — ou usar split, reverse e join.",
    aula: { canal: "YouTube", q: "javascript inverter string split reverse join" },
  },
  fib: {
    dica: "Guarde os dois últimos valores e some para achar o próximo; repita até chegar no n-ésimo.",
    aula: { canal: "Programação Dinâmica", q: "fibonacci javascript iterativo programação dinâmica" },
  },
  "exame-c": {
    dica: "Compare o texto com ele mesmo invertido. Se forem iguais, é palíndromo.",
    aula: { canal: "YouTube", q: "javascript verificar palindromo" },
  },
  primos: {
    dica: "Reaproveite a ideia de 'é primo' dentro de um laço de 2 até n, contando quantos passam no teste.",
    aula: { canal: "YouTube", q: "javascript contar numeros primos ate n" },
  },
  raiz: {
    dica: "Some os dígitos usando % 10 (último dígito) e divisão inteira. Repita enquanto o resultado tiver mais de um dígito.",
    aula: { canal: "YouTube", q: "javascript soma dos digitos raiz digital" },
  },
  "exame-b": {
    dica: "Remova os valores repetidos, ordene do maior para o menor e pegue o segundo da lista.",
    aula: { canal: "YouTube", q: "javascript segundo maior elemento array set sort" },
  },
  palavras: {
    dica: "Remova os espaços das pontas e divida o texto pelos espaços. Cuidado com espaços duplos e com texto vazio.",
    aula: { canal: "Curso em Vídeo", q: "javascript split trim contar palavras string" },
  },
  anagrama: {
    dica: "Duas palavras são anagramas se, ao ordenar as letras de cada uma, elas ficarem iguais.",
    aula: { canal: "YouTube", q: "javascript verificar anagrama ordenar letras" },
  },
  "exame-a": {
    dica: "Conte quantas vezes cada caractere aparece no texto e devolva o primeiro que aparece uma única vez.",
    aula: { canal: "YouTube", q: "javascript primeiro caractere nao repetido frequencia" },
  },
  "orac-explica": {
    dica: "Diga para quem é a explicação e peça uma analogia. Público + clareza + exemplo.",
    aula: { canal: "YouTube", q: "engenharia de prompt para iniciantes portugues" },
  },
  "orac-resumo": {
    dica: "Não peça só 'resuma'. Defina o tamanho (X tópicos) e o formato da resposta.",
    aula: { canal: "YouTube", q: "como escrever prompt para resumir texto" },
  },
  "orac-exame-e": {
    dica: "Monte os 5 ossos: papel, contexto, restrições, formato e exemplo.",
    aula: { canal: "YouTube", q: "estrutura de um bom prompt papel contexto formato exemplo" },
  },
  "orac-imagem": {
    dica: "Descreva estilo (pixel art), cores, enquadramento e clima. Quanto mais específico, menos a IA inventa.",
    aula: { canal: "YouTube", q: "prompt para gerar imagem pixel art" },
  },
  "orac-persona": {
    dica: "Defina quem a IA é, como fala e o que ela NÃO deve fazer.",
    aula: { canal: "YouTube", q: "prompt de sistema definir persona chatbot" },
  },
  "orac-exame-d": {
    dica: "Feche as brechas: papel técnico, regras claras, formato exato e um exemplo de entrada/saída.",
    aula: { canal: "YouTube", q: "evitar alucinacao IA engenharia de prompt" },
  },
  "sec-xss": {
    dica: "Troque & por &amp; primeiro, depois < por &lt; e > por &gt;. A ordem importa.",
    aula: { canal: "YouTube", q: "o que é XSS cross site scripting explicação" },
  },
  "sec-senha": {
    dica: "Três condições juntas: tamanho >= 8, pelo menos uma letra e pelo menos um número.",
    aula: { canal: "YouTube", q: "validar força de senha javascript regex" },
  },
  "sec-exame-e": {
    dica: "Um @ com conteúdo dos dois lados, um ponto no domínio com algo depois, e nada de espaços.",
    aula: { canal: "YouTube", q: "validar email com regex javascript" },
  },
  "sec-cartao": {
    dica: "Mantenha os 4 últimos dígitos e troque o resto por '*'. Pense em slice e repeat.",
    aula: { canal: "YouTube", q: "mascarar dados sensiveis cartão programação" },
  },
  "sec-idade": {
    dica: "Confirme que é só dígitos, converta, e cheque a faixa 0 a 120. O inválido vira null.",
    aula: { canal: "YouTube", q: "validação e sanitização de entrada javascript" },
  },
  "sec-exame-d": {
    dica: "Dobre cada aspa simples (' vira ''). No mundo real, use queries parametrizadas.",
    aula: { canal: "YouTube", q: "SQL injection explicação e prevenção" },
  },
  "dat-total": {
    dica: "Passe por cada item somando preco * qtd num acumulador. reduce resolve isso.",
    aula: { canal: "YouTube", q: "javascript reduce somar array de objetos" },
  },
  "dat-conta": {
    dica: "Fique só com os itens da categoria pedida e conte quantos sobraram (filter + length).",
    aula: { canal: "YouTube", q: "javascript filter contar array de objetos" },
  },
  "dat-exame-e": {
    dica: "Guarde um campeão e compare o preço de cada item; no fim devolva o NOME dele.",
    aula: { canal: "YouTube", q: "maior valor por campo array de objetos javascript" },
  },
  "dat-filtra": {
    dica: "Filtre por preco > limite e depois transforme cada item no seu nome (filter + map).",
    aula: { canal: "YouTube", q: "javascript filter map encadeados objetos" },
  },
  "dat-media": {
    dica: "Some os preços e divida pela quantidade; trate base vazia como 0 e arredonde.",
    aula: { canal: "YouTube", q: "calcular média de array javascript" },
  },
  "dat-exame-d": {
    dica: "Receita é preco * qtd. Calcule pra cada item e ache o maior; devolva o nome.",
    aula: { canal: "YouTube", q: "agrupar e somar dados javascript relatório" },
  },
  "orac-cot": {
    dica: "Peça o raciocínio passo a passo e só depois a resposta final. Não deixe a IA chutar de primeira.",
    aula: { canal: "YouTube", q: "chain of thought prompting portugues" },
  },
  "orac-exame-c": {
    dica: "Exija o formato exato (JSON com campos), proíba texto fora dele e mostre um exemplo da estrutura.",
    aula: { canal: "YouTube", q: "prompt saida estruturada json llm" },
  },
  "orac-refino": {
    dica: "Peça gerar, depois criticar segundo um critério e reescrever melhor — tudo no mesmo prompt.",
    aula: { canal: "YouTube", q: "self refine prompt melhorar resposta IA" },
  },
  "orac-exame-b": {
    dica: "Mostre pelo menos dois exemplos de entrada → saída e só então apresente o caso novo (few-shot).",
    aula: { canal: "YouTube", q: "few-shot prompting exemplos" },
  },
  "orac-sistema": {
    dica: "Defina quem a IA é, o tom, o que ela SEMPRE faz e o que NUNCA faz.",
    aula: { canal: "YouTube", q: "system prompt design persona" },
  },
  "orac-exame-a": {
    dica: "Junte tudo: papel, contexto rico, restrições, formato estruturado, um exemplo e raciocínio passo a passo.",
    aula: { canal: "YouTube", q: "engenharia de prompt avancada prompt mestre" },
  },
};

// Monta o link de busca do YouTube a partir da aula.
export function linkAula(aula) {
  return "https://www.youtube.com/results?search_query=" + encodeURIComponent(aula.q);
}
