// ControlFlow/if_else.js

// This script demonstrates how to use if-else statements in JavaScript

// Example 1: Basic if-else
let number = 10;

if (number > 0) {
    console.log("The number is positive.");
} else if (number === 0) {
    console.log("The number is zero.");
} else {
    console.log("The number is negative.");
}

// Example 2: Checking if a number is even or odd
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// Example 3: Nested if-else
let age = 20;

if (age >= 18) {
    if (age >= 65) {
        console.log("You are a senior citizen.");
    } else {
        console.log("You are an adult.");
    }
} else {
    console.log("You are a minor.");
}

// Example 4: Using logical operators
let hasID = true;
let isOver18 = false;

if (hasID && isOver18) {
    console.log("You are allowed to enter.");
} else if (hasID && !isOver18) {
    console.log("You have an ID but are underage.");
} else {
    console.log("No ID, entry denied.");
}
