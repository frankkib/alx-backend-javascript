const fs = require('fs');
const csv = require('csv-parser');

function countStudents(path) {
	try {
		const students = {};
		const fields = {};

		const data = fs.readFileSync(path, 'utf8');

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
			console.log(`Number of students in ${field}: ${students[field].join(',')}`);
			}
			} catch (error) {
				throw new Error('Can not load th database');
			}
}


module.exports = countStudents;
