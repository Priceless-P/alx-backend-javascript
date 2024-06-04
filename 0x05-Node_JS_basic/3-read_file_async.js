const fs = require('fs').promises;

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then((data) => {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');
        const fields = new Set(students.map((student) => student.split(',')[3]));
        const studentsByField = {};

        console.log(`Number of students: ${students.length}`);

        for (const field of fields) {
          const studentsInField = students.filter((student) => student.split(',')[3] === field);
          const firstNames = studentsInField.map((student) => student.split(',')[0]);
          studentsByField[field] = firstNames;
          console.log(`Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
        }

        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
