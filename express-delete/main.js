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

// app.use('/api/grades/:id', (req, res) => {
//   console.log(req.params.id);
// });

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].id === (req.params.id * 1)) {
      grades.splice(i, 1);
    }
  }
  res.sendStatus(204);
});

/*  way to do the same with findIndex
app.delete('/api/grades/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const gradeIndex = grades.findIndex(grade => grade.id === id);
  if(gradeIndex === -1) {
    res.sendStats(404);
  } else {
    grades.splice(gradeIndex, 1);
    res.sendStatus(204);
  }
});
*/

app.listen(3000, () => {
  console.log('listening');
});
