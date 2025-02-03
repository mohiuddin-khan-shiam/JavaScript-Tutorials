// Advanced/event_loop.js

// This script demonstrates the concept of the event loop in JavaScript

console.log("Start of script");

// Example 1: setTimeout with 0ms delay
setTimeout(() => {
    console.log("Executed after 0ms");
}, 0);

// Example 2: Promise resolution (microtask)
Promise.resolve().then(() => {
    console.log("Promise resolved");
});

// Example 3: Another synchronous log
console.log("End of script");

/*
Expected Output:
1. Start of script
2. End of script
3. Promise resolved
4. Executed after 0ms

Explanation:
- Synchronous code runs first ("Start of script" and "End of script").
- Microtasks (like resolved Promises) are executed next.
- Macrotasks (like setTimeout) are executed after microtasks.
*/

// Example 4: Nested setTimeout
setTimeout(() => {
    console.log("First timeout");
    setTimeout(() => {
        console.log("Second timeout");
    }, 0);
}, 0);

// Example 5: Combining Promises and setTimeout
setTimeout(() => {
    console.log("Timeout before promise");
    Promise.resolve().then(() => {
        console.log("Promise inside timeout");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise outside timeout");
});

/*
Expected Output Order:
1. Start of script
2. End of script
3. Promise resolved
4. Promise outside timeout
5. Executed after 0ms
6. Timeout before promise
7. Promise inside timeout
8. First timeout
9. Second timeout
*/

// Example 6: Long-running synchronous task blocking event loop
function longRunningTask() {
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // Simulating a task that blocks the event loop for 3 seconds
    }
    console.log("Long-running task completed");
}

setTimeout(() => {
    console.log("This message is delayed due to the long-running task");
}, 0);

longRunningTask();
