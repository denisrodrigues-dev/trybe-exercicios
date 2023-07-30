// Crie uma função que retorne o índice do maior valor no array

function indiceDoMaior(array) {
  let maior = array[0];
  let indexMaior = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
      indexMaior = index;
    }
  }
  return indexMaior;
}