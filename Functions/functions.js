// Functions/functions.js

// This script demonstrates how to define and use functions in JavaScript

// Example 1: Basic function definition and call
function greet() {
    // This function prints a simple greeting message
    console.log("Hello, welcome to JavaScript functions!");
}

// Calling the greet function
greet();

// Example 2: Function with parameters
function greetPerson(name) {
    // This function takes a name as an argument and prints a personalized greeting
    console.log(`Hello, ${name}! Nice to meet you.`);
}

// Calling the function with an argument
greetPerson("Alice");

// Example 3: Function with default parameters
function greetPersonWithDefault(name = "Guest") {
    // This function greets the person using a default name if no name is provided
    console.log(`Hello, ${name}!");
}

// Calling the function without an argument
greetPersonWithDefault();
// Calling the function with an argument
greetPersonWithDefault("Bob");

// Example 4: Function with return value
function addNumbers(a, b) {
    // This function returns the sum of two numbers
    return a + b;
}

// Storing the return value in a variable
let result = addNumbers(5, 7);
console.log(`The sum is: ${result}`);

// Example 5: Function with multiple return values using an object
function getMinMax(numbers) {
    // This function returns the minimum and maximum values from an array
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

// Using the function with multiple return values
let { min, max } = getMinMax([1, 2, 3, 4, 5]);
console.log(`Minimum: ${min}, Maximum: ${max}`);

// Example 6: Anonymous function assigned to a variable
const multiply = function(a, b) {
    return a * b;
};

console.log(`Multiplication result: ${multiply(3, 4)}`);

// Example 7: Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This is an immediately invoked function expression (IIFE).");
})();
