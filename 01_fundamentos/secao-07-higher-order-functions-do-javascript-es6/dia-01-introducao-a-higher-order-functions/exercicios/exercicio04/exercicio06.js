// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.
const data = require('./data');

const expectedResult = false;

const authorUnique = (books) => {
  const listBirthYear = [];
  books.forEach(({author: {birthYear}}) => {
   listBirthYear.push(birthYear);
  })
  return (new Set(listBirthYear)).size === listBirthYear.length;
};

console.log((authorUnique(data)));
