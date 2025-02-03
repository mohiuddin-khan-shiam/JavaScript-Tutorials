// Basics/data_types.js

// This script demonstrates different data types in JavaScript

// String
let stringValue = "Hello, JavaScript!";
console.log("String:", stringValue, "| Type:", typeof stringValue);

// Number
let numberValue = 42;
console.log("Number:", numberValue, "| Type:", typeof numberValue);

// Boolean
let booleanValue = true;
console.log("Boolean:", booleanValue, "| Type:", typeof booleanValue);

// Undefined
let undefinedValue;
console.log("Undefined:", undefinedValue, "| Type:", typeof undefinedValue);

// Null (Note: typeof null returns 'object' due to a historical quirk)
let nullValue = null;
console.log("Null:", nullValue, "| Type:", typeof nullValue);

// Object
let objectValue = { name: "Alice", age: 25 };
console.log("Object:", objectValue, "| Type:", typeof objectValue);

// Array (Arrays are a type of object in JavaScript)
let arrayValue = [1, 2, 3, 4, 5];
console.log("Array:", arrayValue, "| Type:", typeof arrayValue);

// Function
let functionValue = function() { return "Hello from function!"; };
console.log("Function:", functionValue, "| Type:", typeof functionValue);

// Symbol (unique and immutable primitive value)
let symbolValue = Symbol("unique");
console.log("Symbol:", symbolValue, "| Type:", typeof symbolValue);

// BigInt (for large integers)
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigIntValue, "| Type:", typeof bigIntValue);

// Dynamic typing: variables can change types
let dynamicVar = 100; // Initially a number
console.log("\nDynamic Variable (Number):", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = "Now I'm a string"; // Now a string
console.log("Dynamic Variable (String):", dynamicVar, "| Type:", typeof dynamicVar);

dynamicVar = true; // Now a boolean
console.log("Dynamic Variable (Boolean):", dynamicVar, "| Type:", typeof dynamicVar);
