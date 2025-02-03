// Functions/recursion.js

// This script demonstrates the concept of recursion in JavaScript

// Example 1: Basic recursive function to calculate factorial
const factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(`Factorial of 5: ${factorial(5)}`);

// Example 2: Recursive function to calculate Fibonacci numbers
const fibonacci = (n) => {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

console.log("\nFirst 10 Fibonacci numbers:");
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

// Example 3: Recursive function to sum elements of an array
const sumArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sumArray(arr.slice(1));
    }
};

const numbers = [1, 2, 3, 4, 5];
console.log(`\nSum of [${numbers}]: ${sumArray(numbers)}`);

// Example 4: Recursive function to reverse a string
const reverseString = (str) => {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
};

const inputString = "recursion";
console.log(`\nReversed '${inputString}': ${reverseString(inputString)}`);

// Example 5: Tail recursion for factorial (optimized for some JS engines)
const tailFactorial = (n, acc = 1) => {
    if (n === 0 || n === 1) {
        return acc;
    } else {
        return tailFactorial(n - 1, n * acc);
    }
};

console.log(`\nTail-recursive factorial of 5: ${tailFactorial(5)}`);
