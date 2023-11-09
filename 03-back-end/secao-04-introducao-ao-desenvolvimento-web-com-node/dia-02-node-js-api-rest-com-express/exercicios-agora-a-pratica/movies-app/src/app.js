const express = require('express');
const { readFile, writeFile } = require('./movies');

const app = express();
app.use(express.json());

app.get('/movies', async (_req, res) => {
    const movies = await readFile();
    res.status(200).json(movies);
});

app.get('/movies/search', async (req, res) => {
  const term = req.query.q.toLowerCase();
  const movies = await readFile();
  const filterMovies = movies.filter(({ movie }) => movie.toLowerCase().includes(term));
  res.status(200).json(filterMovies);
});

app.get('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const movies = await readFile();
    const findMovie = movies.find((movie) => movie.id === Number(id));
    if (!findMovie) return res.status(404).json({ message: 'Movie not found' });
    return res.status(200).json(findMovie);
});

app.post('/movies', async (req, res) => {
    const newMovie = req.body;
    const movies = await readFile();
    newMovie.id = movies.length + 1;
    const updateMovies = [...movies, newMovie];
    await writeFile(updateMovies);
    res.status(201).json(newMovie);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const infoMovie = req.body;
  const movies = await readFile();
  const index = movies.findIndex((movie) => movie.id === Number(id));
  const updateMovie = { ...movies[index], ...infoMovie };
  movies[index] = updateMovie;
  await writeFile(movies);
  res.status(201).json(updateMovie);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readFile();
  const index = movies.findIndex((movie) => movie.id === Number(id));
  movies.splice(index, 1);
  await writeFile(movies);
  res.status(200).end();
});

module.exports = app;