for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*
Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

*/

//for loop syntax
/*
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
*/

const fruits = ["mango", "banana", "apple", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let busket = "";
for (let i = 0; i < fruits.length; i++) {
    busket += fruits[i] + ",";
}
console.log(busket);
console.log(typeof busket);

let busket2 = "";
for (let i = 0; i < fruits.length; ) {
    busket2 += fruits[i] + ",";
    i++;
}
console.log(busket2);
