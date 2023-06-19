const countries = require("./data");

// 2 - Calcule a área total de todos os países.

const expectedResult = 4311757;
const getTotalArea = () => 
  countries
    .reduce((acc, { area }) =>
      acc + area, 0);

console.log(getTotalArea());