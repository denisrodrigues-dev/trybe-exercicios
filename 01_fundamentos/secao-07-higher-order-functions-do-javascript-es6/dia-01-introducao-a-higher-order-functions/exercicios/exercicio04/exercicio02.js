// Retorne o nome do livro com menor número de caracteres (menor nome).
const data = require('./data');

const expectedResult = 'Duna';

const smallerName = (books) => {
  let nameBook = books[0].name;
  books.forEach(({ name }) => {
    if (name.length < nameBook.length) nameBook = name;
  });
  return nameBook;
};

console.log(smallerName(data));
