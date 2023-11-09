const fs = require('fs').promises;
const { join } = require('path');

const path = join(__dirname, 'files', 'movies.json');

const readFile = async () => {
  const fileContent = await fs.readFile(path);
  const movies = JSON.parse(fileContent);
  return movies;
};

const writeFile = async (updateMovies) => {
    await fs.writeFile(path, JSON.stringify(updateMovies));
};

module.exports = {
  readFile,
  writeFile,
};