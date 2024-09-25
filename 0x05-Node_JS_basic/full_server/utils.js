import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const students = data.split('\n').filter(Boolean).slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });

    const result = {};
    for (const student of students) {
      const { field } = student;
      if (!result[field]) {
        result[field] = [];
      }
      result[field].push(student.firstname);
    }

    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
