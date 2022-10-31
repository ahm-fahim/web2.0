let length = 12; //NUMBER
let personName = "Fahim"; //STRING
let object = { firstName: "Fahim", lastName: "Doe" }; //OBJECT

// JavaScript Types are Dynamic
// JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

// Example
let x; // Now x is undefined
x = 5; // Now x is a Number
x = "John"; // Now x is a String

//Data TYPE

/*
1. STRING
2. NUMBER
3. BOOLEANS
4. ARRAY
5. OBJECTS
6. UNDIFINED
*/

// JS booleans
let booleans1 = 5;
let booleans2 = 5;
console.log(booleans1 == booleans2);
console.log(booleans1 != booleans2);
console.log(booleans1 == booleans2);
console.log(booleans1 == booleans2);

// JavaScript Arrays
// JavaScript arrays are written with square brackets.

// Array items are separated by commas.

// The following code declares (creates) an array called cars, containing three items (car names):

// Example
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars);


///==============================
// JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.

// Example
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person);

//typeoff
console.log(typeof person);
console.log(typeof cars);

// Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

// Example
let car;    // Value is undefined, type is undefined
