const data = require('./data');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const expectedResult = 'Stephen King';

const authorBornIn1947 = (books) => books
.find(({author: {birthYear}}) => birthYear === 1947).author.name;

console.log(authorBornIn1947(data));
