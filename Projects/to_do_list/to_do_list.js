// Projects/to_do_list/to_do_list.js

// This script implements a simple to-do list application in JavaScript

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

// Function to display the menu
function showMenu() {
    console.log("\nSimple To-Do List Application");
    console.log("-----------------------------");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Remove Task");
    console.log("4. Exit");
}

// Function to prompt the user for input
function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
}

// Function to add a task
async function addTask() {
    const task = await askQuestion("Enter the task: ");
    tasks.push(task);
    console.log(`Task '${task}' added successfully!`);
}

// Function to view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("\nYour Tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Function to remove a task
async function removeTask() {
    viewTasks();
    if (tasks.length > 0) {
        const taskNumber = await askQuestion("Enter the task number to remove: ");
        const index = parseInt(taskNumber) - 1;

        if (index >= 0 && index < tasks.length) {
            const removedTask = tasks.splice(index, 1);
            console.log(`Task '${removedTask}' removed successfully!`);
        } else {
            console.log("Invalid task number. Please try again.");
        }
    }
}

// Main function to run the to-do list application
async function main() {
    while (true) {
        showMenu();
        const choice = await askQuestion("Choose an option (1-4): ");

        switch (choice) {
            case '1':
                await addTask();
                break;
            case '2':
                viewTasks();
                break;
            case '3':
                await removeTask();
                break;
            case '4':
                console.log("Exiting the application. Goodbye!");
                readline.close();
                return;
            default:
                console.log("Invalid choice. Please select a valid option.");
        }
    }
}

// Start the application
main();
