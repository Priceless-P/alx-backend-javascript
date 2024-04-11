# 0x02-ES6_classes

## Tasks
1. **ClassRoom**
   - Create a class named `ClassRoom` that accepts a `maxStudentsSize` attribute.
   - Prototype: `export default class ClassRoom`
   - It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`.
   - [File: 0-classroom.js](./0-classroom.js)

2. **Make Classrooms**
   - Import the `ClassRoom` class from `0-classroom.js`.
   - Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with the following sizes, in this order:
     - 19
     - 20
     - 34
   - [File: 1-make_classrooms.js](./1-make_classrooms.js)

3. **HolbertonCourse**
   - Create a class named `HolbertonCourse` with name, length, and students attributes.
   - It should have a constructor that accepts `name` (String), `length` (Number), and `students` (Array of Strings).
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - Make sure to verify the type of attributes during object creation.
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - Implement a getter and setter for each attribute.
   - [File: 2-hbtn_course.js](./2-hbtn_course.js)

4. **Pricing**
   - Implement a class named `Pricing` with amount and currency attributes.
   - It should have a constructor that accepts `amount` (Number) and `currency` (Currency).
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - Implement a getter and setter for each attribute.
   - Implement a method named `displayFullPrice` that returns the attributes in the following format amount currency_name (currency_code).
   - Implement a static method named `convertPrice`. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
   - [File: 4-pricing.js](./4-pricing.js)

5. **Building**
   - Create an abstract class named `Building` with sqft attribute and a method named `evacuationWarningMessage`.
   - It should have a constructor that accepts `sqft` (Number).
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - Implement a getter for each attribute.
   - Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
   - If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message Class extending Building must override evacuationWarningMessage.
   - [File: 5-building.js](./5-building.js)

6. **SkyHighBuilding**
   - Extend the `Building` class to create a class named `SkyHighBuilding`.
   - It should have a constructor that accepts `sqft` (Number) and `floors` (Number).
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - Implement a getter for each attribute.
   - Override the method named `evacuationWarningMessage` and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.
   - [File: 6-sky_high.js](./6-sky_high.js)

7. **Airport**
   - Implement a class named `Airport` with name and code attributes.
   - It should have a constructor that accepts `name` (String) and `code` (String).
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - The default string description of the class should return the airport code (example below).
   - [File: 7-airport.js](./7-airport.js)

8. **HolbertonClass**
   - Create a class named `HolbertonClass` with size and location attributes.
   - It should have a constructor that accepts `size` (Number) and `location` (String).
   - Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name).
   - When the class is cast into a Number, it should return the size.
   - When the class is cast into a String, it should return the location.
   - [File: 8-hbtn_class.js](./8-hbtn_class.js)

9. **Hoisting**
   - Fix code to create students and associate them with classes.
   - The code to be fixed:
     ```javascript
     const class2019 = new HolbertonClass(2019, 'San Francisco');
     const class2020 = new HolbertonClass(2020, 'San Francisco');

     export class HolbertonClass {
       constructor(year, location) {
         this._year = year;
         this._location = location;
       }

       get year() {
         return this._year;
       }

       get location() {
         return this._location;
       }
     }

     const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
     const student2 = new StudentHolberton('John', 'Doe', class2020);
     const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
     const student4 = new StudentHolberton('Donald', 'Bush', class2019);
     const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

     export class StudentHolberton {
       constructor(firstName, lastName) {
         this._firstName = firstName;
         this._lastName = lastName;
         this._holbertonClass = holbertonClass;
       }

       get fullName() {
         return `${this._firstName} ${this._lastName}`;
       }

       get holbertonClass() {
         return this.holbertonClass;
       }

       get fullStudentDescription() {
         return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
       }
     }

     export const listOfStudents = [student1, student2, student3, student4, student5];
     ```
   - [File: 9-hoisting.js](./9-hoisting.js)

10. **Car**
    - Implement a class named `Car` with the following attributes:
      - `brand` (String)
      - `motor` (String)
      - `color` (String)
    - Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`).
    - Add a method named `cloneCar`. This method should return a new object of the class.
    - [File: 10-car.js](./10-car.js)

11. **EVCar**
    - Import `Car` from `10-car.js`.
    - Implement a class named `EVCar` that extends the `Car` class.
    - It should have the following additional attributes:
      - `range` (String)
    - Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`).
    - For privacy reasons, when `cloneCar` is called on an `EVCar` object, the object returned should be an instance of `Car` instead of `EVCar`.
    - [File: 100-evcar.js](./100-evcar.js)