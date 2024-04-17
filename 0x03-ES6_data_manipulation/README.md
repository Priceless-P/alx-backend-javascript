# 0x03-ES6_data_manipulation

## Tasks
### [Task 0: Basic List of Objects](./0-get_list_students.js)

Create a function named `getListStudents` that returns an array of objects.

Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

### [Task 1: More Mapping](./1-get_list_student_ids.js)

Create a function `getListStudentIds` that returns an array of ids from a list of objects.

This function is taking one argument which is an array of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

### [Task 2: Filter](./2-get_students_by_loc.js)

Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a city (string) as parameters.

### [Task 3: Reduce](./3-get_ids_sum.js)

Create a function `getStudentIdsSum` that returns the sum of all the student ids.

It should accept a list of students (from `getListStudents`) as a parameter.

### [Task 4: Combine](./4-update_grade_by_city.js)

Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

It should accept a list of students (from `getListStudents`), a city (String), and newGrades (Array of “grade” objects) as parameters.

### [Task 5: Typed Arrays](./5-typed_arrays.js)

Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

It should accept three arguments: `length` (Number), `position` (Number), and `value` (Number).

If adding the value is not possible the error `Position outside range` should be thrown.

### [Task 6: Set Data Structure](./6-set.js)

Create a function named `setFromArray` that returns a Set from an array.

It accepts an argument (Array, of any kind of element).

### [Task 7: More Set Data Structure](./7-has_array_values.js)

Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

It accepts two arguments: a set (Set) and an array (Array).

### [Task 8: Clean Set](./8-clean_set.js)

Create a function named `cleanSet` that returns a string of all the set values that start with a specific string (`startString`).

It accepts two arguments: a set (Set) and a `startString` (String).

When a value starts with `startString` you only append the rest of the string. The string contains all the values of the set separated by -.

### [Task 9: Map Data Structure](./9-groceries_list.js)

Create a function named `groceriesList` that returns a map of groceries with the following items (name, quantity):

- Apples, 10
- Tomatoes, 10
- Pasta, 1
- Rice, 1
- Banana, 5

### [Task 10: More Map Data Structure](./10-update_uniq_items.js)

Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

It should accept a map as an argument. The map it accepts for argument is similar to the map you create in the previous task.

For each entry of the map where the quantity is 1, update the quantity to 100. If updating the quantity is not possible (argument is not a map) the error `Cannot process` should be thrown.

### [Task 11: Weak Link Data Structure (Advanced)](./100-weak.js)

Export a const instance of `WeakMap` and name it `weakMap`.

Export a new function named `queryAPI`. It should accept an endpoint argument like so:

```
{
  protocol: 'http',
  name: 'getUsers',
}
```

Track within the `weakMap` the number of times `queryAPI` is called for each endpoint.

When the number of queries is >= 5 throw an error with the message `Endpoint load is high`.