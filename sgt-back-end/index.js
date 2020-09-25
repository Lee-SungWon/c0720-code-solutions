const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const express = require('express');
const app = express();

json = express.json();
app.use(json);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
    from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows[0];
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  if (!Number.isInteger(req.body.grade) || req.body.grade <= 0) {
    res.status(400).json({
      error: 'Grade must be a positive integer.'
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "grade")
    values($1, $2, $3)
    returning *;
  `;

  const params = [req.body.name, req.body.course, req.body.grade];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.put('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isInteger(id) || id <= 0 || !Number.isInteger(req.body.grade) || req.body.grade <= 0) {
    res.status(400).json({
      error: 'Grade and ID must be a positive integer.'
    });
    return;
  }

  const sql = `
  update "grades"
    set "grade" = $1
    where "gradeId" = $2
  returning *;
  `;

  const params = [req.body.grade, id];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with ID ${id}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'ID must be a positive integer.'
    });
    return;
  }

  const sql = `
    delete from "grades"
      where "gradeId" = $1
    returning *;
  `;

  const params = [id];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with ID ${id}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred.'
      });
    });
});

app.listen(3000, () => {
  console.log('listening to port 3000');
});
