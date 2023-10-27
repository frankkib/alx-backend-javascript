const fs = require('fs').promises;
const csv = require('csv-parser');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const students = {};
    const fields = {};

    fs.readFile(path, 'utf8')
      .then((data) => {
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

	console.log(`Number of students: ${lines.length}`);
        for (const field in students) {
          console.log(`Number of students in ${field}: ${students[field]}. List: ${fields[field].join(', ')}`);
        }

        resolve({ students, fields });
      })
      .catch((error) => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;

