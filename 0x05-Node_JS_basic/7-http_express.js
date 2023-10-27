const express = require('express');
const fs = require('fs').promises;
const csv = require('csv-parser');
const app = express();

// Define a route for the root endpoint ("/")
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the "/students" endpoint
app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile('database.csv', 'utf8');
    const students = {};
    const fields = {};

    const lines = data.trim().split('\n');
    lines.forEach((line) => {
      const [firstname, field] = line.split(',');

      if (firstname && field) {
        if (!students[field]) {
          students[field] = 0;
          fields[field] = [];
        }

        students[field]++;
        fields[field].push(firstname);
      }
    });

    const studentsList = {
      students,
      fields,
    };

    res.send(`This is the list of our students\n${JSON.stringify(studentsList, null, 2)}`);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// Start the server on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;

