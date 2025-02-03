// Functions/arrow_functions.js

// This script demonstrates the use of arrow functions in JavaScript

// Example 1: Basic arrow function
const greet = () => {
    console.log("Hello, welcome to JavaScript arrow functions!");
};

// Calling the arrow function
greet();

// Example 2: Arrow function with parameters
const greetPerson = (name) => {
    console.log(`Hello, ${name}! Nice to meet you.`);
};

// Calling the arrow function with an argument
greetPerson("Alice");

// Example 3: Arrow function with a single parameter (parentheses are optional)
const square = x => {
    return x * x;
};

console.log(`Square of 4: ${square(4)}`);

// Example 4: Arrow function with implicit return (for single expressions)
const add = (a, b) => a + b;

console.log(`Sum of 5 and 3: ${add(5, 3)}`);

// Example 5: Arrow function returning an object (wrap object in parentheses)
const createUser = (name, age) => ({ name: name, age: age });

console.log(createUser("Bob", 30));

// Example 6: Using arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

// Using map to square each number
const squaredNumbers = numbers.map(num => num * num);
console.log(`Squared Numbers: ${squaredNumbers}`);

// Using filter to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(`Even Numbers: ${evenNumbers}`);

// Example 7: Arrow functions and 'this' keyword
const person = {
    name: "Charlie",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, my name is ${this.name}`); // 'this' does not refer to 'person'
    }
};

person.greet();        // Correctly refers to 'person'
person.greetArrow();   // 'this' refers to the global object, not 'person'
