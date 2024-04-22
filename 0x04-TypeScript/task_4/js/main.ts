export const cpp = new Subjects.Cpp()
export const java = new Subjects.Java()
export const react = new Subjects.React()
export const cTeacher: Subjects.Teacher = {
    firstName: 'Prisca',
    lastName: 'Chidimma',
    experienceTeachingCpp: 10
};

console.log('C++');
cpp.setTeacher(cTeacher);
cpp.getRequirements()
cpp.getAvailableTeacher()

console.log('Java');
java.setTeacher(cTeacher);
java.getRequirements()
java.getAvailableTeacher()

console.log('React');
react.setTeacher(cTeacher);
react.getRequirements()
react.getAvailableTeacher()