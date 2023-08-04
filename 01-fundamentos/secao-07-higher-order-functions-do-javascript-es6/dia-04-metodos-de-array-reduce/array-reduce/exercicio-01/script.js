const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Faça uma função que some todos os números pares do array numbers usando reduce.
const sumEven = (numbers) => numbers
  .reduce((acc, cur) => cur % 2 === 0 ? acc + cur : acc,0);


console.log(sumEven(numbers));