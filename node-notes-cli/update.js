const fs = require('fs');

const JSONdata = require('./data.json');
const notes = JSONdata.notes;
const input = process.argv[4];
const updateID = process.argv[3];

const update = () => {
  notes[updateID] = input;
  fs.writeFile('data.json', JSON.stringify(JSONdata, null, 1), err => {
    if (err) throw err;
  });
};

update();

module.exports = update;
