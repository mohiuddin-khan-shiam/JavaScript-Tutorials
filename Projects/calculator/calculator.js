// Projects/calculator/calculator.js

// This script implements a simple calculator in JavaScript

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}

// Function to display the calculator menu
function showMenu() {
    console.log("\nSimple Calculator");
    console.log("------------------");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");
}

// Main function to run the calculator
function calculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function askQuestion(query) {
        return new Promise(resolve => readline.question(query, resolve));
    }

    async function main() {
        while (true) {
            showMenu();
            const choice = await askQuestion("Enter your choice (1-5): ");

            if (choice === '5') {
                console.log("Exiting the calculator. Goodbye!");
                break;
            }

            const num1 = parseFloat(await askQuestion("Enter first number: "));
            const num2 = parseFloat(await askQuestion("Enter second number: "));

            switch (choice) {
                case '1':
                    console.log(`Result: ${add(num1, num2)}`);
                    break;
                case '2':
                    console.log(`Result: ${subtract(num1, num2)}`);
                    break;
                case '3':
                    console.log(`Result: ${multiply(num1, num2)}`);
                    break;
                case '4':
                    console.log(`Result: ${divide(num1, num2)}`);
                    break;
                default:
                    console.log("Invalid choice. Please select a valid option.");
            }
        }
        readline.close();
    }

    main();
}

// Run the calculator
calculator();
