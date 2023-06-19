const countries = require('./data');

// 1 - Calcule a quantidade total da população de todos os países.

const expectedResult = 120797034;
const getPopulation = () =>
  countries
    .reduce((acc, { population }) => 
      acc + population, 0);

console.log(getPopulation());


