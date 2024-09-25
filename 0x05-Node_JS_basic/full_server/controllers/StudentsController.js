import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('database.csv');
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      let responseMessage = 'This is the list of our students\n';
      for (const field of fields) {
        responseMessage += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }

      res.status(200).send(responseMessage.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase('database.csv');
      const studentsByMajor = students[major] || [];
      return res.status(200).send(`List: ${studentsByMajor.join(', ')}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
