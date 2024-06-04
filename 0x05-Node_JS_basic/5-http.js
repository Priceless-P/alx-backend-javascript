const fs = require('fs');
// const readline = require('readline');

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const parts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const students = {};
        const fieldNames = fileLines[0].split(',');
        const studentNames = fieldNames.slice(
          0,
          fieldNames.length - 1,
        );

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(
            0,
            studentRecord.length - 1,
          );
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(students).includes(field)) {
            students[field] = [];
          }
          const studentEntries = studentNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          students[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(students).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        parts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(students)) {
          parts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(parts.join('\n'));
      }
    });
  }
});

module.exports = countStudents;
