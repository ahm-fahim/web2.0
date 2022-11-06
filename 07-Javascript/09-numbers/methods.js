/*/```````````````````````````````````\*\
    JavaScript Number Methods 
    These number methods can be used on all JavaScript numbers:

    Method	Description
 .........................
 
 toString()	    Returns a number as a string
 toExponetial()	Returns a number written in exponential notation
 toFixed()	    Returns a number written with a number of decimals
 toPrecision()	Returns a number written with a specified length
 ValueOf()	    Returns a number as a number

\*\___________________________________/*/

// toString()
//The toString() method returns a number as a string.

let num1 = 123;
console.log(`toString() = ${num1.toString()}`);
console.log(`toString() = ${(123).toString()}`);
console.log(`toString() = ${(100 + 23).toString()}`);

//toExponential()
//toExponential() returns a string, with a number rounded and written using exponential notation.
let num2 = 9.656;

console.log("toExponential(2)", num2.toExponential(2));
console.log("toExponential(4)", num2.toExponential(4));
console.log("toExponential(6)", num2.toExponential(6));
console.log("toExponential()", num2.toExponential());

// toFixed()
// toFixed() returns a string, with the number written with a specified number of decimals:

//toFixed(2) is perfect for working with money.
console.log("toFixed(0) ", num2.toFixed(0));
console.log("toFixed(0) ", num2.toFixed(2));
console.log("toFixed(0) ", num2.toFixed(4));
console.log("toFixed(0) ", num2.toFixed(6));

//toPrecision()

console.log("toPrecision() ", num2.toPrecision());
console.log("toPrecision(2) ", num2.toPrecision(2));
console.log("toPrecision(4) ", num2.toPrecision(4));
console.log("toPrecision(6) ", num2.toPrecision(6));

// valueOf()

console.log("valueOf() = ", num1.valueOf());

/*/~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\*\
Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	Description
-------------------------
Number()	    Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	    Parses its argument and returns a whole number
\*\________________________________/*/

//Number
// The Number() method can be used to convert JavaScript variables to numbers:
//-------------------
console.log("Number", Number(true));
console.log("Number", Number(false));
console.log("Number", Number("10"));
console.log("Number", Number("    10"));
console.log("Number", Number("10.1033"));
console.log("Number", Number("10,234 "));
console.log("Number", Number("10 34 "));
console.log("Number", Number());

// Number method use dates

console.log("Number ", Number(new Date("2017-09-30")));

//parseInt()
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log("ParseInt() = ", parseInt("-20"));
console.log("ParseInt() = ", parseInt("-20.33"));
console.log("ParseInt() = ", parseInt("20"));
console.log("ParseInt() = ", parseInt("20 years"));
console.log("ParseInt() = ", parseInt("33 44 20"));
console.log("ParseInt() = ", parseInt("Its 20")); //If the number cannot be converted, NaN (Not a Number) is returned.

//parseFloat()
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

console.log("parseFloat() =", parseFloat("10"));
console.log("parseFloat() =", parseFloat("10.33"));
console.log("parseFloat() =", parseFloat("11 20 30"));
console.log("parseFloat() =", parseFloat("10 years"));
console.log("parseFloat() =", parseFloat("years 10"));

//Number Object Methods

/*
These object methods belong to the Number object:

Method	Description
Number.isInteger()	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number

*/

/*******
 ***** 
 * Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.

These methods can only be accessed like Number.isInteger().

Using X.isInteger() where X is a variable, will result in an error:

TypeError X.isInteger is not a function.
 */

console.log("Number.isInteger(10) ", Number.isInteger(10));
console.log("Number.isInteger(10) ", Number.isInteger(10.5));

console.log("Number.isSafeInteger(10) ", Number.isSafeInteger(10));
console.log(
    "Number.isSafeInteger(12345678901234567890) ",
    Number.isSafeInteger(12345678901234567890)
);

//Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.




