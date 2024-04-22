interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {firstName: 'Prisca',
                           lastName: 'Chidimma',
                           age: 22,
                           location: 'London'}

const student2: Student = {firstName: 'Ebuka',
                           lastName: 'Precious',
                           age: 20,
                           location: 'Tokyo'}

const studentsList: Student[] = [student1, student2]

// Render table
export const renderTable = (students: Student[]):void => {
    // Create table
    const table = document.createElement('table');
    const tbody = document.createElement('tbody')

    const headers = ['First Name', 'Location']
    const headerRow = document.createElement('tr');

    headers.forEach(text => {
        const header = document.createElement('th');
        headerRow.textContent = text;
        headerRow.appendChild(header);
    });
    tbody.appendChild(headerRow);

    studentsList.forEach(student => {
    const row = document.createElement('tr')

    const firstNameRow: HTMLTableCellElement = document.createElement('td');
    firstNameRow.textContent = student.firstName
    row.appendChild(firstNameRow);

        const locationRow: HTMLTableCellElement = document.createElement('td');
        locationRow.textContent = student.location
        row.appendChild(locationRow)

        tbody.appendChild(row);
    });
    table.appendChild(tbody)
    document.body.appendChild(table)
}

renderTable(studentsList);

const style = document.createElement('style');
style.innerHTML = `
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}

th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

td {
  border: 1px solid #ddd;
  padding: 8px;
}

tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}
`;
document.head.appendChild(style)
