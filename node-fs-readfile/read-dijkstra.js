/* eslint-disable no-console */
const fs = require('fs');

fs.readFile('dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});
