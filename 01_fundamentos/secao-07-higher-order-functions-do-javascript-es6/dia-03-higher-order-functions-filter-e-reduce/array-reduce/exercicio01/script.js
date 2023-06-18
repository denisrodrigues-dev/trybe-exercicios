/* 1 - Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce. */

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumFilterReduce = () => 
  numbers
    .filter((number) => number % 2 === 0)
    .reduce((acc, curr) => acc + curr);

console.log(sumFilterReduce());

const sumReduce = () =>
  numbers
    .reduce((acc, curr) => 
      curr % 2 === 0 ? acc + curr : acc);

console.log(sumReduce());