// Basics/variables.js

// This script demonstrates how to declare and use variables in JavaScript

// Declaring variables using var, let, and const
var name = "Alice";    // var: function-scoped, can be redeclared
let age = 25;          // let: block-scoped, can be reassigned but not redeclared
const height = 5.7;    // const: block-scoped, cannot be reassigned or redeclared

// Printing the variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Height:", height);

// Updating variable values
name = "Bob";          // var and let can be updated
age = 30;              // let can be updated

console.log("\nUpdated Name:", name);
console.log("Updated Age:", age);

// Attempting to reassign a const variable will result in an error
// height = 6.0; // Uncommenting this line will throw an error

// Multiple variable declarations in one line
let x = 10, y = 20, z = 30;
console.log("\nValues of x, y, z:", x, y, z);

// Declaring variables without initializing
let color;
console.log("\nColor before initialization:", color); // undefined

color = "blue";
console.log("Color after initialization:", color);

// Using template literals to combine strings and variables
console.log(`\n${name} is ${age} years old and ${height} feet tall.`);
