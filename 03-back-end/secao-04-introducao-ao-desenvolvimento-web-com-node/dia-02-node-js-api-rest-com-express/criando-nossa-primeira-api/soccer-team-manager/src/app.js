const express = require('express');

const app = express();
app.use(express.json());

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

let actualId = 3;

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json(teams));

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const findTeam = teams.find((team) => team.id === Number(id));
  if (!findTeam) return res.status(404).json({ message: 'Team not found' });
  return res.status(200).json(findTeam);
});

app.post('/teams', (req, res) => {
  const newTeam = req.body;
  newTeam.id = actualId;
  teams.push(newTeam);
  actualId += 1;
  return res.status(201).json(newTeam);
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  const teamIndex = teams.findIndex((team) => team.id === Number(id));
  if (teamIndex === -1) return res.status(404).json({ message: 'Team not found' });
  const updateTeam = {
    ...teams[teamIndex],
    name,
    initials, 
  };
  teams[teamIndex] = updateTeam;
  return res.status(200).json(updateTeam);
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const findTeam = teams.findIndex((team) => team.id === Number(id));
  if (findTeam === -1) return res.status(404).json({ message: 'Team not found' });
  teams.splice(findTeam, 1);
  return res.status(200).json({ message: 'Team deleted successfully' });
});

module.exports = app;