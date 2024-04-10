# 0x01-ES6_promise

This project contains tasks on Promises in ES6.

## Tasks

1. **Task 0: Keep every promise you make and only make promises you can keep**
   - File: [0-promise.js](./0x01-ES6_promise/0-promise.js)
   - Requirement: Return a Promise using the prototype function `getResponseFromAPI()`. The returned Promise should be an instance of `Promise`.

2. **Task 1: Don't make a promise...if you know you can't keep it**
   - File: [1-promise.js](./0x01-ES6_promise/1-promise.js)
   - Requirement: Return a promise using the prototype `getFullResponseFromAPI(success)`. When the `success` parameter is `true`, resolve the promise with an object containing `status: 200` and `body: 'Success'`. If `success` is `false`, reject the promise with an error object containing the message "The fake API is not working currently".

3. **Task 2: Catch me if you can!**
   - File: [2-then.js](./0x01-ES6_promise/2-then.js)
   - Requirement: Append three handlers to the function `handleResponseFromAPI(promise)`. When the Promise resolves, return an object with `status: 200` and `body: success`. When the Promise rejects, return an empty Error object. Additionally, log "Got a response from the API" to the console for every resolution.

4. **Task 3: Handle multiple successful promises**
   - File: [3-all.js](./0x01-ES6_promise/3-all.js)
   - Requirement: Import `uploadPhoto` and `createUser` from `utils.js`. Use the function `handleProfileSignup()` to collectively resolve all promises and log the `firstName` and `lastName` to the console. If an error occurs, log "Signup system offline".

5. **Task 4: Simple promise**
   - File: [4-user-promise.js](./0x01-ES6_promise/4-user-promise.js)
   - Requirement: Write a function `signUpUser(firstName, lastName)` that returns a resolved promise with an object containing `firstName` and `lastName`.

6. **Task 5: Reject the promises**
   - File: [5-photo-reject.js](./0x01-ES6_promise/5-photo-reject.js)
   - Requirement: Write and export a function named `uploadPhoto(filename)` that returns a Promise rejecting with an Error and the string "$fileName cannot be processed".

7. **Task 6: Handle multiple promises**
   - File: [6-final-user.js](./0x01-ES6_promise/6-final-user.js)
   - Requirement: Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write and export a function named `handleProfileSignup(firstName, lastName, fileName)` that calls the two functions. When the promises are settled, return an array with the status and value/error of each promise.

8. **Task 7: Load balancer**
   - File: [7-load_balancer.js](./0x01-ES6_promise/7-load_balancer.js)
   - Requirement: Write and export a function named `loadBalancer(chinaDownload, USDownload)` that accepts two promises as arguments. It should return the value returned by the promise that resolves first.

9. **Task 8: Throw error / try catch**
   - File: [8-try.js](./0x01-ES6_promise/8-try.js)
   - Requirement: Write a function named `divideFunction(numerator, denominator)` that accepts two arguments. When the `denominator` argument is equal to 0, the function should throw a new error with the message "cannot divide by 0". Otherwise, it should return the `numerator` divided by the `denominator`.

10. **Task 9: Throw an error**
    - File: [9-try.js](./0x01-ES6_promise/9-try.js)
    - Requirement: Write a function named `guardrail(mathFunction)` that accepts one argument `mathFunction` (Function). It should create and return an array named `queue`. When `mathFunction` is executed, append the value returned by the function or any error thrown to the `queue`. In every case, add the message "Guardrail was processed" to the queue.
10. **Await / Async**
    - File: [100-await.js](100-await.js)
    - Requirements: Import `uploadPhoto` and `createUser` from [utils.js](utils.js).
  + Export an async function named `asyncUploadUser` that will call the two functions imported above and return an object with the following format:
    ```js
    {
      photo: response_from_uploadPhoto_function,
      user: response_from_createUser_function,
    }
    ```
  + Import `uploadPhoto` and `createUser` from [utils.js](utils.js).
  + If one of the async function fails, return an empty object as shown below:
    ```js
    {
      photo: null,
      user: null,
    }
    ```
