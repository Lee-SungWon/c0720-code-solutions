const express = require('express');

const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('i am listening');
});
