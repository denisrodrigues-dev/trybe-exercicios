// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const data = require('./data');

const expectedResult = true;

const someBookWasReleaseOnThe80s = (books) =>
  books.some(({ releaseYear }) => releaseYear >= 1980 && releaseYear <= 1989);

console.log(someBookWasReleaseOnThe80s(data));
