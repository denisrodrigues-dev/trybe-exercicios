// Crie uma função que retorne o índice do menor valor no array

function indiceDoMenor(array) {
  let menor = array[0];
  let indexMenor = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < menor) {
      menor = array[index];
      indexMenor = index;
    }
  }
  return indexMenor;
}