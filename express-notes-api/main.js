const express = require('express');
const data = require('./data');

const fs = require('fs');

const app = express();

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const id in data.notes) {
    const note = data.notes[id]; // why won't data.notes.id work?
    notes.push(note);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'ID must be a positive integer'
    });
    return;
  }

  const note = data.notes[id];
  if (typeof note === 'undefined') {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }

  res.json(note);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({
      error: 'content is required field'
    });
    return;
  }

  const note = {
    id: data.nextId,
    content: req.body.content
  };
  data.notes[data.nextId] = note;
  data.nextId++;
  const json = JSON.stringify(data, null, 2);

  fs.writeFile('./data.json', json, err => {
    if (err) {
      console.err(err);
      res.status(500).json({
        error: 'an unexpected error occured'
      });
      return;
    }
    res.status(201).json(note);
  });

});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'ID must be a positive integer'
    });
    return;
  }

  if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }

  delete data.notes[id];
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.err(err);
      res.status(500).json({ error: 'an unexpected error occurred.' });
      return;
    }
    res.Sendstatus(204);
  });
});

// app.delete('/api/notes/:id', (req, res) => {
//   const id = parseInt(req.params.id, 10);

//   if (!Number.isInteger(id) || id <= 0) {
//     res.status(400).json({
//       error: 'ID must be a positive integer'
//     });
//     return;
//   }

//   if (!data.notes[id]) {
//     res.status(404).json({
//       error: `cannot find note with id ${id}`
//     });
//     return;
//   }

//   const arr = [];
//   for (const id in data.notes) {
//     arr.push(id);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === id) {
//       delete data.notes[id];
//       const json = JSON.stringify(data, null, 2);
//       fs.writeFile('./data.json', json, err => {
//         if (err) {
//           console.err(err);
//           res.status(500).json({
//             error: 'an unexpected error occured'
//           });
//           return;
//         }
//         res.sendStatus(204);
//       });
//     }
//   }
// });

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isInteger(id) || id <= 0 || !(req.body.content)) {
    res.status(400).json({
      error: 'ID must be a positive integer && content must not be missing'
    });
    return;
  }

  if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }

  data.notes[id].content = req.body.content;
  const json = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.err(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
      return;
    }
    res.status(200).json(data.notes[id]);
  });
});

app.listen(3000, () => {
  console.log('listening to port 3000');
});
