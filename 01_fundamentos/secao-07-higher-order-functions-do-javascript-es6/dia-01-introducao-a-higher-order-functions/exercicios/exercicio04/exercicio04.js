// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.
const data = require('./data');

const expectedResult = false;

function everyoneWasBornOnSecXX(books) {
  return books.every(
    ({ author: { birthYear } }) =>  birthYear >= 1901 && birthYear <= 2000
  );
}

console.log(everyoneWasBornOnSecXX(data));
