const readlineSync = require('readline-sync');

const calcFibonacci = () => {
  const number = readlineSync.questionInt('Digite um número: ');
  if (number <= 0) throw new Error('O número digitado deve ser maior que zero!')
  let number1 = 0;
  let number2 = 1;
  let result = 0;

  for (let index = 1; index <= number; index += 1) {
    result = number1 + number2;
    number1 = number2;
    number2 = result;
    console.log(result);
  }
}

const main = () => {
  try {
    calcFibonacci();
  } catch (error) {
    console.log(error.message);
  }
}

main();