// Crie uma função que retorne o número que mais repete no array

function ordenarArray(array) {
  return array.sort();
}

function contarRepetido(array) {
  let novoArray = ordenarArray(array);
  let informacoes = [];
  let quantidade = 1;
  for (let index = 0; index < novoArray.length; index += 1) {
    if (array[index] === array[index + 1]) {
      quantidade += 1;
    } else {
      informacoes.push(array[index], quantidade);
      quantidade = 1;
    }
  }
  return informacoes;
}

function maisRepetido(array) {
  let arrayinformacoes = contarRepetido(array);
  let quantidadeMaisRepetido = 1;
  for (let index = 1; index < arrayinformacoes.length; index += 2) {
    if (arrayinformacoes[index] > arrayinformacoes[quantidadeMaisRepetido]) {
      quantidadeMaisRepetido = index;
    }
  }
  return arrayinformacoes[quantidadeMaisRepetido - 1];
}