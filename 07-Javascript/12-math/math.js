console.log(Math.PI);

/*

Unlike other objects, the Math object has no constructor.

The Math object is static.

All methods and properties can be used without creating a Math object first.*/

/*
Math Properties (Constants)
The syntax for any Math property is : Math.property.

JavaScript provides 8 mathematical constants that can be accessed as Math properties:

Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
*/

// Math Methods

//The syntax for Math any methods is : Math.method(number)

//Number to Integer

/*
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

//Math.round()
//Math.round(x) returns the nearest integer:
console.log("Math.round()", Math.round(4.5));
console.log(Math.round(4.2));

// Math.ceil()

// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(
    "Math.ceil ",
    Math.ceil(4.9),
    Math.ceil(4.7),
    Math.ceil(4.4),
    Math.ceil(4.2),
    Math.ceil(-4.2)
);

//Math.floor()