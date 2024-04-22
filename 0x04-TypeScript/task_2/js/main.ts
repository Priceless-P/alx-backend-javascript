interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break'
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
    if (typeof(salary) === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

export function isDirector(employee: (Director | Teacher)) {
    return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)) {
if (employee instanceof Director) {
   return (employee as Director).workDirectorTasks();
}
    return (employee as Teacher).workTeacherTasks();
}


export type Subjects = 'Math' | 'History';

export function teachClass(todayClass:Subjects) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
      }
}