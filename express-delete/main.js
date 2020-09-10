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

// app.use((req, res) => {
//   console.log(req.param);
// });

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  grades.splice([req.param.id - 1], 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log('listening');
});
