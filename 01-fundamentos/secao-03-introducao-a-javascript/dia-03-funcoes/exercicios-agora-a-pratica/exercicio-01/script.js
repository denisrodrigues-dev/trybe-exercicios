// Crie uma função que verifica se a palavra é um palíndromo

function verificaPalindromo(palavra) {
  let novaPalavra = '';
  for (let index = palavra.length - 1; index >= 0; index -= 1) {
    novaPalavra += palavra[index];
  }
  if (palavra === novaPalavra) {
    return true;
  }
  return false;
}