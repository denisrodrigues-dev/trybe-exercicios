// Crie a função que verifica se uma string faz parte do final de outra string

function verificaFimPalavra(palavra1, palavra2) {
  let indexPalavra1 = palavra1.length - 1;
  for (let index = palavra2.length - 1; index >= 0; index -= 1) {
    if (palavra2[index] !== palavra1[indexPalavra1]) {
      return false;
    }
    indexPalavra1 -= 1;
  }
  return true;
}