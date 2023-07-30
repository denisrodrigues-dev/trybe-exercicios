// Crie a função que retorna a maior palavra no array

function maiorPalavra(array) {
  let maiorPalavraArray = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > maiorPalavraArray.length) {
      maiorPalavraArray = array[index];
    }
  }
  return maiorPalavraArray;
}