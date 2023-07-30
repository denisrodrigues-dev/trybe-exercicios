// Crie uma função que retorna o somatório de um número

function verificaNumber(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

function somatorio(number) {
  if (verificaNumber(number)) {
    let soma = 0;
    for (inicial = 1; inicial <= number; inicial += 1) {
      soma += inicial;
    }
    return soma;
  }
  return 'ERRO';
}