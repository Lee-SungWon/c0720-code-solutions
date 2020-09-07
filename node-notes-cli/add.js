const fs = require('fs');

const JSONdata = require('./data.json');
const nextID = JSONdata.nextID;
const notes = JSONdata.notes;
const input = process.argv[3];

const add = () => {
  notes[nextID] = input;
  JSONdata.nextID++;
  fs.writeFile('data.json', JSON.stringify(JSONdata, null, 1), err => {
    if (err) throw err;
  });
};

module.exports = add;
