const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Aland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// Crie a função getPopulation que retorne a quantidade total da população de todos os países.
const getPopulation = (countries) => countries.reduce((acc, cur) => (acc + cur.population), 0);

console.log(getPopulation(countries));

// Crie a função longestName que deve retornar o país com o maior nome.
const longestName = (countries) => countries
  .reduce((acc, cur) => cur.name.length > acc.name.length ? cur : acc);

console.log(longestName(countries));

// Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.
const totalAreaByRegion = (countries, region = 'Europe') => countries
  .filter((country) => country.region === region)
    .reduce((acc, cur) => (acc + cur.area), 0);

console.log(totalAreaByRegion(countries));

// Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:
const getLargestCountriesByRegion = (countries) => {
  return countries.reduce((arr, cur) => {
    if(!arr[cur.region] || arr[cur.region].area < cur.area) {
      arr[cur.region] = {name: cur.name, area: cur.area};
    }
      return arr;
  }, {})
}

console.log(getLargestCountriesByRegion(countries));