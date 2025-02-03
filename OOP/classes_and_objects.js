// OOP/classes_and_objects.js

// This script demonstrates how to define classes and create objects in JavaScript

// Defining a class
class Car {
    /**
     * A class to represent a car.
     * @param {string} brand - The brand of the car.
     * @param {string} model - The model of the car.
     * @param {number} year - The year the car was manufactured.
     */
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Method to display car information
    displayInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

// Creating objects of the Car class
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2022);

// Calling methods on objects
console.log("Car 1 Details:");
car1.displayInfo();

console.log("\nCar 2 Details:");
car2.displayInfo();

// Accessing properties directly
console.log(`\nThe brand of car1 is ${car1.brand}.`);

// Modifying object properties
car1.year = 2021;
console.log(`Updated year of car1: ${car1.year}`);

// Adding new properties dynamically
car1.color = "Red";
console.log(`Color of car1: ${car1.color}`);
