const express = require('express');
// const path = require('path');
const app = express();

const arr = [
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

// const publicPath = path.join(__dirname, 'public');
// const staticMiddleware = express.static(publicPath);

app.get('/api', (req, res) => {
  res.json(arr);
});

app.listen(3000, () => {
  console.log('listening');
});
