// Advanced/promises.js

// This script demonstrates how to work with Promises in JavaScript

// Example 1: Creating and resolving a promise
const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise was rejected.");
    }
});

promise1
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// Example 2: Simulating asynchronous operations with setTimeout
const delayedPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This promise resolves after 2 seconds.");
    }, 2000);
});

delayedPromise.then(result => console.log(result));

// Example 3: Chaining promises
const addNumbers = (a, b) => {
    return new Promise((resolve) => {
        resolve(a + b);
    });
};

addNumbers(5, 10)
    .then(sum => {
        console.log(`Sum: ${sum}`);
        return addNumbers(sum, 20);
    })
    .then(newSum => {
        console.log(`New Sum: ${newSum}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });

// Example 4: Handling multiple promises with Promise.all
const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.error("One of the promises was rejected:", error);
    });

// Example 5: Using Promise.race to get the first resolved promise
Promise.race([promiseA, promiseB, promiseC])
    .then(result => {
        console.log("First resolved promise:", result);
    })
    .catch(error => {
        console.error("Error in race:", error);
    });
