// JavaScript if, else, and else if

/*
Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
*/

//THE if Statement

//syntax
/*
if (conditon) {
    //block of code to be executed if the condition true
}
*/

const time = 11;

if (time < 12) {
    console.log("Good Morning!");
}

/*
Syntax
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
*/
if (time < 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon!");
}

/*
Syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
*/

if (time < 12) {
    console.log("Good Morning!");
} else if (time == 12) {
    console.log("Good Noon");
} else {
    console.log("Good Afternoon!");
}
