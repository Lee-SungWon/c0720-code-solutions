const express = require('express');

const app = express();

const grades = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Kirby',
    course: 'Inhale',
    grade: 7000
  }
];
let nextId = 3;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  grades.push(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('listening');
});
