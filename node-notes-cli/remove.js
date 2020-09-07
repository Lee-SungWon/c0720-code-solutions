const fs = require('fs');

const JSONdata = require('./data.json');
const notes = JSONdata.notes;
const input = process.argv[3];

const remove = () => {
  delete notes[input];
  fs.writeFile('data.json', JSON.stringify(JSONdata, null, 1), err => {
    if (err) throw err;
  });
};

remove();

module.exports = remove;
