/*
The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
*/

/**
 * Syntax
for (variable of iterable) {
  // code block to be executed
}
 */

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x);
}

let str = "JavaScript";
for (let x of str) {
    console.log(x);
}
