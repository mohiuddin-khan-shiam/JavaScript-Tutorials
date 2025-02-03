// Advanced/async_await.js

// This script demonstrates how to use async/await in JavaScript

// Example 1: Basic async function
async function greet() {
    return "Hello, welcome to async/await!";
}

greet().then(message => console.log(message));

// Example 2: Using await with a promise
function delayedMessage(message, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

async function showMessages() {
    const message1 = await delayedMessage("This message appears after 1 second", 1000);
    console.log(message1);

    const message2 = await delayedMessage("This message appears after 2 seconds", 2000);
    console.log(message2);

    const message3 = await delayedMessage("This message appears after 3 seconds", 3000);
    console.log(message3);
}

showMessages();

// Example 3: Handling errors with try-catch
async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();

// Example 4: Running multiple async functions concurrently with Promise.all
async function runConcurrentTasks() {
    const task1 = delayedMessage("Task 1 completed", 1000);
    const task2 = delayedMessage("Task 2 completed", 2000);
    const task3 = delayedMessage("Task 3 completed", 3000);

    const results = await Promise.all([task1, task2, task3]);
    console.log("All tasks completed:", results);
}

runConcurrentTasks();

// Example 5: Using async functions inside loops
async function processArray(arr) {
    for (const item of arr) {
        const result = await delayedMessage(`Processed item: ${item}`, 1000);
        console.log(result);
    }
}

processArray(["apple", "banana", "cherry"]);
