// Advanced/closures.js

// This script demonstrates the concept of closures in JavaScript

// Example 1: Basic closure
function outerFunction() {
    let outerVariable = "I am from the outer scope";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample();  // Outputs: I am from the outer scope

// Example 2: Closure with parameters
function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(`Double of 5: ${double(5)}`);  // Outputs: 10
console.log(`Triple of 5: ${triple(5)}`);  // Outputs: 15

// Example 3: Private variables using closures
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment();  // Count: 1
counter.increment();  // Count: 2
counter.decrement();  // Count: 1
console.log(`Final Count: ${counter.getCount()}`);  // Outputs: 1

// Example 4: Closures in loops
function createFunctionArray() {
    let functionArray = [];

    for (let i = 0; i < 3; i++) {
        functionArray.push(function() {
            console.log(`Value: ${i}`);
        });
    }

    return functionArray;
}

const functions = createFunctionArray();
functions[0]();  // Value: 0
functions[1]();  // Value: 1
functions[2]();  // Value: 2

// Example 5: Closure with setTimeout
function delayedLogger(message, delay) {
    setTimeout(function() {
        console.log(message);
    }, delay);
}

delayedLogger("This message appears after 2 seconds", 2000);
