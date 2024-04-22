interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean
    yearsOfExperience?: number,
    location: string,
    [index:string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}

interface printTeacherFunction {
    (firstName: string,
    lastName: string): string
}

export function printTeacher(firstName:string, lastName: string) {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentClassInterface {
    workOnHomework(): string,
    displayName(): string
}

interface StudentClassInterfaceConstructor {
    new (firstName: string, lastName: string):StudentClassInterface
}

class StudentClass implements StudentClassInterface{
    private _firstName!: string;
    private _lastName!: string

    constructor(firstName: string, lastName:string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this._firstName;
    }
}

export function createStudent(cons: StudentClassInterfaceConstructor, firstName: string, lastName: string): StudentClassInterface {
    return new cons(firstName, lastName);
}
