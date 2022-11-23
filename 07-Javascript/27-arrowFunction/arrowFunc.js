"use strict";
let sum = (a, b) => a + b;
console.log(sum(10, 23));

// Before Arrow:
let hello1 = function () {
    return "Hello World!";
};

// With Arrow Function:
let hello2 = () => {
    return "Hello World!";
};

let hello3 = () => "Hello World!";

console.log(hello3());

// arrow func with perameter

let multiply = (a, b) => a * b;

console.log(multiply(19, 3));
