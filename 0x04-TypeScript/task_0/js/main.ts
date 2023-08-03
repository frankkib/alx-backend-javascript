interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 25,
	location: 'New York',
};
const student2: Student = {
	firstName: 'Jane',
	lastName: 'smith',
	age: 20,
	location: 'USA',
};
const studentList: Student[] = [student1, student2];
const table = document.createElement('table');
const tableHeader = document.createElement('tr');
tableHeader.innerHTML = '<th>First Name</th><th>Location</th>';
table.appendChild(tableHeader);

studentList.forEach((student) => {
	const tableRow = document.createElement('tr');
	tableRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
	table.appendChild(tableRow);
});
document.body.appendChild(table);
