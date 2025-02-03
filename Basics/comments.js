// Basics/comments.js

// This script demonstrates how to use comments in JavaScript

// Single-line comment:
// This is a single-line comment explaining the next line of code.
console.log("Hello, this is an example of a single-line comment!");

// You can also place single-line comments at the end of a line of code
let name = "Alice"; // This variable stores the user's name
console.log("Name:", name);

// Multi-line comments:
/*
This is a multi-line comment.
You can use it to explain more complex code
or to temporarily disable blocks of code during debugging.
*/

console.log("This is an example of multi-line comments.");

// Function with inline comments explaining each step
function greetUser(userName) {
    // Check if the userName is provided
    if (userName) {
        // If provided, greet the user by name
        console.log(`Hello, ${userName}!`);
    } else {
        // If not provided, greet as a guest
        console.log("Hello, Guest!");
    }
}

// Calling the function with a name
greetUser("Bob");

// Calling the function without a name
greetUser();
