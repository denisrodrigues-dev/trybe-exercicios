const countries = require("./data");

const expectedResult = {
  name: "American Samoa",
  region: "Oceania",
  currencies: [{ code: "USD", name: "United States Dollar" }],
  capital: "Pago Pago",
  population: 55197,
  area: 199,
};
const longestName = () =>
  countries.reduce((acc, curr) =>
    curr.name.length > acc.name.length ? (acc = curr) : acc
  );

console.log(longestName());
