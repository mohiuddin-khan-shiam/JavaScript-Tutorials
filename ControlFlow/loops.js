// ControlFlow/loops.js

// This script demonstrates different types of loops in JavaScript

// Example 1: For loop
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

// Example 2: Iterating over an array
const fruits = ["apple", "banana", "cherry"];
console.log("\n--- Iterating over an Array ---");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit: ${fruits[i]}`);
}

// Example 3: For...of loop
console.log("\n--- For...of Loop ---");
for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// Example 4: While loop
console.log("\n--- While Loop ---");
let count = 1;
while (count <= 5) {
    console.log(`Count: ${count}`);
    count++;
}

// Example 5: Do-While loop
console.log("\n--- Do-While Loop ---");
let number = 1;
do {
    console.log(`Number: ${number}`);
    number++;
} while (number <= 5);

// Example 6: Nested loops
console.log("\n--- Nested Loops ---");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Example 7: Using break to exit a loop
console.log("\n--- Break Statement ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        break;
    }
    console.log(`i = ${i}`);
}

// Example 8: Using continue to skip an iteration
console.log("\n--- Continue Statement ---");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping iteration at i = 3");
        continue;
    }
    console.log(`i = ${i}`);
}

// Example 9: Loop with else-like behavior (simulated)
console.log("\n--- Loop with Else Behavior ---");
let found = false;
for (let i = 1; i <= 5; i++) {
    if (i === 6) {
        found = true;
        break;
    }
}
if (!found) {
    console.log("Loop completed without finding the number 6.");
}
