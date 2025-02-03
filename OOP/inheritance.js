// OOP/inheritance.js

// This script demonstrates the concept of inheritance in JavaScript

// Parent class (Base class)
class Animal {
    /**
     * A class to represent a generic animal.
     * @param {string} name - The name of the animal.
     */
    constructor(name) {
        this.name = name;
    }

    // Method to make the animal speak
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Child class (Derived class) inheriting from Animal
class Dog extends Animal {
    /**
     * A class to represent a dog, inheriting from Animal.
     * @param {string} name - The name of the dog.
     * @param {string} breed - The breed of the dog.
     */
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    // Overriding the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Another child class inheriting from Animal
class Cat extends Animal {
    /**
     * A class to represent a cat, inheriting from Animal.
     * @param {string} name - The name of the cat.
     */
    speak() {
        console.log(`${this.name} meows.`);
    }
}

// Creating instances of the derived classes
const dog = new Dog("Buddy", "Golden Retriever");
const cat = new Cat("Whiskers");

// Calling methods on objects
console.log("Dog Details:");
dog.speak();
console.log(`Breed: ${dog.breed}`);

console.log("\nCat Details:");
cat.speak();

// Demonstrating polymorphism with inherited classes
console.log("\nPolymorphism Example:");
const animals = [dog, cat];

animals.forEach(animal => animal.speak());
