interface Teacher {
	firstName: string;
	lastName: string;
	readonly fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	readonly location: string;
	[key: string]: any;
}
interface Directors extends Teacher {
	numberOfReports: number;
}
function printTeacher(firstName: string,  lastName: string): string {
	const firstLetter = firstName.charAt(0);
	return`${firstLetter} . ${lastName}`;
}
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}
class StudentClassImpl implements StudentClass {
	private firstName: string;
	private lastName: string;
	
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework(): string {
		return 'Currently working';
	}
	displayName(): string {
		return this.firstName;
	}
}
