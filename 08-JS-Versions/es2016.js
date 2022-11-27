/*
New Features in ECMAScript 2016
This chapter introduces the new features in ECMAScript 2016:

JavaScript Exponentiation (**)
JavaScript Exponentiation assignment (**=)
JavaScript Array includes()
*/

let x = 5;
let z = x ** 2;
let power = Math.pow(x, 2);
console.log(z);
console.log(power);

x **= 2;
console.log(x);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.includes("Mango"));