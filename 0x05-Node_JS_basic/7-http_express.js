const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = req.query.database || 'database.csv';

  countStudents(databasePath)
    .then((output) => {
      res.type('text/plain').send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.status(500).type('text/plain').send(`Internal Server Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

module.exports = app;
