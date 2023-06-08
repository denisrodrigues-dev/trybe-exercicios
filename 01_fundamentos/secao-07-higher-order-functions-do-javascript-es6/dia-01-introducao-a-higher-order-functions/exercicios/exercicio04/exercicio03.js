// Encontre o primeiro livro cujo nome possua 26 caracteres.
const data = require('./data');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = (books) => books.find(({name}) => name.length === 26);

console.log(getNamedBook(data));
