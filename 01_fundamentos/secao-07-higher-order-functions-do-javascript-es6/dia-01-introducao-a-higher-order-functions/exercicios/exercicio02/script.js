/* Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

const checkNumber = (userNumber, randomNumber) => {
  return userNumber === randomNumber ? true : false;
};

const generatorNumber = (userNumber, callback) => {
  const numberRandom = Math.floor(Math.random() * 5) + 1;
  if (callback(userNumber, numberRandom)) {
    return 'Parabéns, você ganhou';
  } 
  return 'Tente novamente';
};

console.log(generatorNumber(2, checkNumber));