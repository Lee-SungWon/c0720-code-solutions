const fs = require('fs');

const written = process.argv[2];

fs.writeFile('note.txt', written, err => {
  if (err) {
    throw err;
  }
});
