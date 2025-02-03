// OOP/polymorphism.js

// This script demonstrates the concept of polymorphism in JavaScript

// Base class
class Animal {
    /**
     * A class to represent a generic animal.
     * @param {string} name - The name of the animal.
     */
    constructor(name) {
        this.name = name;
    }

    // Method to be overridden by subclasses
    speak() {
        return `${this.name} makes a sound.`;
    }
}

// Derived class 1
class Dog extends Animal {
    /**
     * A class to represent a dog, inheriting from Animal.
     * @param {string} name - The name of the dog.
     */
    speak() {
        return `${this.name} barks.`;
    }
}

// Derived class 2
class Cat extends Animal {
    /**
     * A class to represent a cat, inheriting from Animal.
     * @param {string} name - The name of the cat.
     */
    speak() {
        return `${this.name} meows.`;
    }
}

// Function demonstrating polymorphism
function animalSound(animal) {
    /**
     * Demonstrates polymorphism by calling the speak method 
     * on any object that inherits from the Animal class.
     * @param {Animal} animal - An instance of Animal or its derived classes.
     */
    console.log(animal.speak());
}

// Creating instances of each class
const genericAnimal = new Animal("Creature");
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

// Using the same function to call different behaviors
animalSound(genericAnimal); // Outputs: Creature makes a sound.
animalSound(dog);           // Outputs: Buddy barks.
animalSound(cat);           // Outputs: Whiskers meows.

// Polymorphism with an array of objects
const animals = [genericAnimal, dog, cat];

console.log("\nPolymorphism with a list of animals:");
animals.forEach(animal => console.log(animal.speak()));
