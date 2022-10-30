/* 4 Ways to Declare a JavaScript Variable:
Using var
Using let 
Using const
Using nothing */

// What are Variables?
//-----------------------------------------------------------------
// Variables are containers for storing data (storing data values).
//-----------------------------------------------------------------------------
// In this example, x, y, and z, are variables, declared with the var keyword:

var x = 23;
var char = "fahim";

let str = "F";

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\
|  When to Use JavaScript var?                                              |
|      Always declare JavaScript variables with var,let, orconst.           |
|                                                                           |
|      The var keyword is used in all JavaScript code from 1995 to 2015.    |
|                                                                           |
|      The let and const keywords were added to JavaScript in 2015.         |
|                                                                           |
|      If you want your code to run in older browsers, you must use var.    |
\_________________________________________________________________________*/

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\
|  When to Use JavaScript const?                                            |
|      If you want a general rule: always declare variables with const.     |
|                                                                           |
|      If you think the value of the variable can change, use let.          |
|                                                                           |
|      In this example, price1, price2, and total, are variables            |
\__________________________________________________________________________*/

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

// undefined
let noValue;

// Re-Declaring JavaScript Variables
// If you re-declare a JavaScript variable declared with var, it will not lose its value.

// The variable carName will still have the value "Volvo" after the execution of these statements:

// Example
var carName = "Volvo";
var carName;

console.log(carName);

/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\
|                            Note                            |
|You cannot re-declare a variable declared with let or const.|
|                                                            |
|This will not work:                                         |
\___________________________________________________________*/
//-----------------------------------------
//let personName = "Fahim";
// let personName;

// console.log(personName);
//---------------------------------------

// JavaScript Dollar Sign $
let $ = "Hello world";
let $$$ = 2;
let $myMoney = 5;

console.log($);
console.log($$$);
console.log($myMoney);



//--------------------------------
// Javascript Underscore(_)
//==============================

let _firstName = "fahim";
let _x = 3;
let _120 = 5;

console.log(_x, _120, _firstName);