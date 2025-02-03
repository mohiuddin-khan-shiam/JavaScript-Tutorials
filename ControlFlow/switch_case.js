// ControlFlow/switch_case.js

// This script demonstrates the use of switch-case statements in JavaScript

// Example 1: Basic switch-case
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}

// Example 2: Using switch-case with strings
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("You chose an apple.");
        break;
    case "banana":
        console.log("You chose a banana.");
        break;
    case "cherry":
        console.log("You chose a cherry.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Example 3: Grouping multiple cases
let grade = "B";

switch (grade) {
    case "A":
    case "B":
    case "C":
        console.log("You passed!");
        break;
    case "D":
    case "E":
        console.log("You need to improve.");
        break;
    case "F":
        console.log("You failed.");
        break;
    default:
        console.log("Invalid grade.");
}

// Example 4: Using switch-case with expressions
let number = 10;

switch (true) {
    case (number < 0):
        console.log("The number is negative.");
        break;
    case (number === 0):
        console.log("The number is zero.");
        break;
    case (number % 2 === 0):
        console.log("The number is even.");
        break;
    default:
        console.log("The number is odd.");
}
