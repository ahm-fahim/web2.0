/*
The While Loop
The while loop loops through a block of code as long as a specified condition is true.

Syntax
while (condition) {
  // code block to be executed
}
*/
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
/*
The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
do {
  // code block to be executed
}
while (condition);
*/

let emty = "";
let x = 0;
do {
    emty += x + ", ";
    x++;
    console.log(emty);
} while (x < 10);
