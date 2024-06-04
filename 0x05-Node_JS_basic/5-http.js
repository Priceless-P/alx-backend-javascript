const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    const students = [];
    const fields = {};

    const rl = readline.createInterface({
      input: fs.createReadStream(path),
      crlfDelay: Infinity,
    });

    let isHeader = true;

    rl.on('line', (line) => {
      if (isHeader) {
        isHeader = false;
        return;
      }

      if (line.trim() === '') {
        return;
      }

      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
      students.push({ firstname, field });
    });

    rl.on('close', () => {
      let result = `Number of students: ${students.length}\n`;
      console.log(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fields)) {
        const fieldOutput = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
        console.log(fieldOutput);
        result += `${fieldOutput}\n`;
      }
      resolve(result);
    });

    rl.on('error', () => {
      reject(new Error('Cannot load the database'));
    });
  });
}

module.exports = countStudents;
