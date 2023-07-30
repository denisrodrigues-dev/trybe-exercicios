const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

// Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'.`);

// Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:
// {
//   title: 'Harry Potter e o Prisioneiro de Azkaban',
//   author: 'JK Rowling',
//   publisher: 'Rocco',
// }

reader.favoriteBooks.push(
  {
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
  },
);

console.log(reader);

// Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:
// “Julia tem {quantidade} livros favoritos.”

const quantFavoriteBooks = reader.favoriteBooks.length;

quantFavoriteBooks === 1
  ? console.log(`${reader.name} tem ${reader.favoriteBooks.length} livro favorito.`)
  : console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);
