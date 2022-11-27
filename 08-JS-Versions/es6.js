/*
New Features in ES6
The let keyword
The const keyword
Arrow Functions
The ... Operator
For/of
Map Objects
Set Objects
Classes
Promises
Symbol
Default Parameters
Function Rest Parameter
String.includes()
String.startsWith()
String.endsWith()
Array.from()
Array keys()
Array find()
Array findIndex()
New Math Methods
New Number Properties
New Number Methods
New Global Methods
Object entries
JavaScript Modules

*/

//let

var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
    console.log(x);
}
// Here x is 10
console.log(x);

//const
var y = 10;
// Here y is 10
{
    const y = 2;
    // Here x is 2
    console.log(y);
}
// Here y is 10
console.log(y);

//arrow func

//es5
var e5arrowfunc = function (a, b) {
    return a * b;
};

//es6
const e6arrowfunc = (a, b) => a * b;

//spread(...)operator

const cars1 = ["Saab", "Volvo", ..."BMW"];
const cars2 = ["Fiat", "Toyota"];

const combined = [cars1, ...cars2];
console.log(combined);

const nums = [2, 1, 43, 55, 64, 76, 32];
let mxVal = Math.max(...nums);
console.log(mxVal);

//for of loop

for (let x of cars2) {
    console.log(x);
}

//maps
const fruits = new Map([
    ["apple", 500],
    ["mango", 200],
    ["orange", 300],
]);
console.log(fruits.get("apple"));

//sets

const letters = new Set();

letters.add("a");
console.log(letters);

//class
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const car1 = new Car("Ford", 2012);
console.log(car1);

//JavaScript Promises

// Promise Syntax
// const myPromise = new Promise(function(myResolve, myReject) {
// // "Producing Code" (May take some time)

//   myResolve(); // when successful
//   myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise).
// myPromise.then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );

const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        myResolve("I love you!!");
    }, 3000);
});
myPromise.then(function (val) {
    console.log(val);
});

/*
The Symbol Type
A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.

Using Symbol() to create a unique identifiers, solves this problem:
*/
const person = {
    firstName: "Fahim",
    lastName: "Morshed",
    age: 23,
    eyeColor: "black",
};
let id = Symbol("id");
person[id] = 123456;
console.log("Fahim Id = ", person[id] + " " + person.id);

//default parameter values

function peraFunc(x, y = 10) {
    return x + y;
}
peraFunc(10);

//Function Rest Parameter

// he rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
let restSum = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(restSum);

//includes
let text = "Hello World";
console.log(text);

console.log(text.includes("World"));

//startsWith()

console.log(text.startsWith("H"));

//endsWith()
console.log(text.endsWith("d"));

//array.from()
console.log(Array.from("abcdef"));

//Array keys()

const keys = fruits.keys();

let text2 = "";
for (let x of keys) {
    console.log(x);
}

//find()

let find = nums.find(findFunc);
console.log(find);
function findFunc(a) {
    return a > 18;
}

//Array findIndex()
let fIndex = nums.findIndex(findFunc);
console.log(fIndex);

/*
New Math Methods
ES6 added the following methods to the Math object:

Math.trunc()
Math.sign()
Math.cbrt()
Math.log2()
Math.log10()
*/

// The Math.trunc() Method
// Math.trunc(x) returns the integer part of x:

// Example
Math.trunc(4.9); // returns 4
Math.trunc(4.7); // returns 4
Math.trunc(4.4); // returns 4
Math.trunc(4.2); // returns 4
Math.trunc(-4.2); // returns -4

// The Math.sign() Method
// Math.sign(x) returns if x is negative, null or positive:

// Example
Math.sign(-4); // returns -1
Math.sign(0); // returns 0
Math.sign(4); // returns 1

// The Math.cbrt() Method
// Math.cbrt(x) returns the cube root of x:

// Example
Math.cbrt(8); // returns 2
Math.cbrt(64); // returns 4
Math.cbrt(125); // returns 5

// The Math.log2() Method
// Math.log2(x) returns the base 2 logarithm of x:

// Example
Math.log2(2);

// The Math.log10() Method
// Math.log10(x) returns the base 10 logarithm of x:

// Example
Math.log10(10); // returns 1

// New Number Properties
// ES6 added the following properties to the Number object:

// EPSILON
// MIN_SAFE_INTEGER
// MAX_SAFE_INTEGER

let epsilon = Number.EPSILON;
console.log(epsilon);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// New Number Methods
// ES6 added 2 new methods to the Number object:

Number.isInteger();
Number.isSafeInteger();

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.2));

// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.

// Example
Number.isSafeInteger(10); // returns true
Number.isSafeInteger(12345678901234567890); // returns false

/*
New Global Methods
ES6 added 2 new global number methods:

isFinite()
isNaN()

*/
// The global isFinite() method returns false if the argument is Infinity or NaN
// otherwise returns true

console.log(isFinite(10 / 0));
console.log(isFinite(10 / 1));

// The isNaN() Method
// The global isNaN() method returns true if the argument is NaN. Otherwise it returns false:

// Example
isNaN("Hello"); // returns true

//entries()
const f = fruits.entries();

for (let x of f) {
    console.log(x);
}

/*
Modules
Modules are imported in two differen ways:

Import from named exports
Import named exports from the file person.js:

import { name, age } from "./person.js";
*/