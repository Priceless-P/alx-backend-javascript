namespace Subjects {
    export interface Teacher {
        experienceTeachingCpp?: number
    }

    export class Cpp extends Subjects.Subject {
        getRequirements() {
            return 'Here is the list of requirements for Cpp';
        }
        getAvailableTeacher() {
            if (! this.teacher || this.teacher.experienceTeachingCpp <= 0) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`
        }
    }
}
