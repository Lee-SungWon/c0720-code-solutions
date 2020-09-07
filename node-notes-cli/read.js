const fs = require('fs');

const read = () => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    for (const property in parsedData.notes) {
      console.log(`${property}: ${parsedData.notes[property]}`);
    }
  }
  );
};

module.exports = read;
