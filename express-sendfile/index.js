const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.sendFile(req.originalUrl, { root: __dirname }, err => {
    if (err) next();
  });
});

app.listen(3000, () => {
  console.log('i am listening on port 3000');
});
