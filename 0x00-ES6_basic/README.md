
# 0x00-ES6_basic

## Tasks

### Task 0: Const or let?
File: [0-constants.js](./0-constants.js)

Modify the provided functions to instantiate variables using `const` and `let`.

```javascript
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```

### Task 1: Block Scope
File: [1-block-scoped.js](./1-block-scoped.js)

Modify the variables inside the function to avoid overwriting them inside the conditional block.

```javascript
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
```

### Task 2: Arrow Functions
File: [2-arrow.js](./2-arrow.js)

Rewrite the given function using ES6's arrow syntax for anonymous functions.

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```

### Task 3: Parameter Defaults
File: [3-default-parameter.js](./3-default-parameter.js)

Condense the function to one line using default parameter values.

```javascript
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

### Task 4: Rest Parameter Syntax for Functions
File: [4-rest-parameter.js](./4-rest-parameter.js)

Modify the function to return the number of arguments passed using rest parameter syntax.

```javascript
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

### Task 5: The Wonders of Spread Syntax
File: [5-spread-operator.js](./5-spread-operator.js)

Concatenate arrays and each character of a string using spread syntax.

```javascript
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

### Task 6: Take Advantage of Template Literals
File: [6-string-interpolation.js](./6-string-interpolation.js)

Rewrite the return statement to use template literals for variable substitution.

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

### Task 7: Object Property Value Shorthand Syntax
File: [7-getBudgetObject.js](./7-getBudgetObject.js)

Modify the function's budget object to use keyname instead of key-value pairs.

```javascript
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
```

### Task 8: No Need to Create Empty Objects Before Adding in Properties
File: [8-getBudgetCurrentYear.js](./8-getBudgetCurrentYear.js)

Rewrite the function to use ES6 computed property names on the budget object.

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
```

### Task 9: ES6 Method Properties
File: [9-getFullBudget.js](./9-getFullBudget.js)

Rewrite the function to use ES6 method properties in the fullBudget object.

```javascript
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

### Task 10: For...of Loops
File: [10-loops.js](./10-loops.js)

Rewrite the function to use ES6's for...of operator instead of for...in.

```javascript
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
```

### Task 11: Iterator
File: [11-createEmployeesObject.js](./11-createEmployeesObject.js)

Write a function to create an object containing department names and corresponding employees.

```javascript
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
```

### Task 12: Let's Create a Report Object
File: [12-createReportObject.js](./12-createReportObject.js)

Write a function to create a report object containing all employees and their departments.

```javascript
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (employees) => Object.keys(employees).length,
  };
}
```

### Task 13: Iterating Through Report Objects
File: [100-createIteratorObject.js](./100-createIteratorObject.js)

Write a function to create an iterator object to go through every employee in every department in a report object.

```javascript
export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    next:

 () => {
      const done = index >= employees.length;
      const value = !done ? employees[index++] : undefined;

      return { value, done };
    },
    [Symbol.iterator]: function () {
      return this;
    },
  };
}
```

