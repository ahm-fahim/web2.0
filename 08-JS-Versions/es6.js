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
