const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const rows = data.split('\n').filter(Boolean);

    const students = {};
    const fieldCounts = {};

    // Skip the header line
    rows.shift();

    rows.forEach((row) => {
      // eslint-disable-next-line no-unused-vars
      const [firstname, lastname, age, field] = row.split(',').map((item) => item.trim());

      if (!students[firstname]) {
        students[firstname] = { field, count: 0 };
      }

      if (!fieldCounts[field]) {
        fieldCounts[field] = { count: 0, list: [] };
      }

      students[firstname].count += 1;
      fieldCounts[field].count += 1;
      fieldCounts[field].list.push(firstname);
    });

    console.log(`Number of students: ${rows.length}`);

    Object.entries(fieldCounts)
      .forEach(([field, { count, list }]) => {
        console.log(`Number of students in ${field}: ${count}. List: ${list.join(', ')}`);
      });
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
}

module.exports = countStudents;
