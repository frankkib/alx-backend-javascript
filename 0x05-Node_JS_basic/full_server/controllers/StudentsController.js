import { readDatabase } from '../utils';

export class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase('./database.csv');
      const fields = Object.keys(data);
      const responseData = ['This is the list of our students'];

      fields.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fields.forEach((field) => {
        const studentsInField = data[field];
        responseData.push(
          `Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`,
        );
      });

      response.status(200).send(responseData.join('\n'));
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase('./database.csv');
      const studentsInMajor = data[major];

      if (studentsInMajor) {
        response.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      } else {
        response.status(200).send('No students found in the specified major');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}
