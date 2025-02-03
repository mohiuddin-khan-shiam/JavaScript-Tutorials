// OOP/encapsulation.js

// This script demonstrates the concept of encapsulation in JavaScript

class Person {
    /**
     * A class to represent a person using encapsulation.
     * @param {string} name - The name of the person.
     * @param {number} age - The age of the person.
     */
    constructor(name, age) {
        let _name = name;  // Private variable
        let _age = age;    // Private variable

        // Getter for name
        this.getName = () => _name;

        // Setter for name
        this.setName = (newName) => {
            _name = newName;
        };

        // Getter for age
        this.getAge = () => _age;

        // Setter for age with validation
        this.setAge = (newAge) => {
            if (newAge > 0) {
                _age = newAge;
            } else {
                console.log("Age must be positive.");
            }
        };

        // Method to display person information
        this.displayInfo = () => {
            console.log(`Name: ${_name}, Age: ${_age}`);
        };
    }
}

// Creating an object of the Person class
const person = new Person("Alice", 25);

// Accessing data using getters
console.log("Initial Information:");
console.log(`Name: ${person.getName()}`);
console.log(`Age: ${person.getAge()}`);

// Modifying data using setters
person.setName("Bob");
person.setAge(30);

// Displaying updated information
console.log("\nUpdated Information:");
person.displayInfo();

// Attempting to set an invalid age
console.log("\nAttempting to set an invalid age:");
person.setAge(-5);  // This will trigger validation

// Trying to access private variables directly (will be undefined)
console.log("\nTrying to access private variables directly:");
console.log(`Name: ${person._name}`);  // undefined
console.log(`Age: ${person._age}`);    // undefined
