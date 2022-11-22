/*
Block Scope
Before ES6 (2015), JavaScript had only Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: let and const.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:
*/
{
    var a = 2;
}
// a CAN be used here

{
    let x = 2;
}
// x can NOT be used here

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

// Function Scope
// JavaScript has function scope: Each function creates a new scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:

function myFunction() {
    var carName = "Volvo"; // Function Scope
}
function myFunction() {
    let carName = "Volvo"; // Function Scope
}
function myFunction() {
    const carName = "Volvo"; // Function Scope
}

// Global JavaScript Variables
// A variable declared outside a function, becomes GLOBAL.

// Example
let carName = "Volvo";
// code here can use carName

function myFunction() {
    // code here can also use carName
}

// Automatically Global
// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.

// This code example will declare a global variable carName, even if the value is assigned inside a function.

// Example
myFunction();

// code here can use carName

function myFunction() {
    carName = "Volvo";
}
