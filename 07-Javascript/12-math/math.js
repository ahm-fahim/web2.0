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

// Math.floor(x) returns the value of x rounded down to its nearest integer:

console.log(
    "Math.floor ",
    Math.floor(4.9),
    Math.floor(4.7),
    Math.floor(4.4),
    Math.floor(4.2),
    Math.floor(-4.2)
);

//Math.trunc()
// Math.trunc(x) returns the integer part of x:

console.log(
    "Math.trunc ",
    Math.trunc(4.9),
    Math.trunc(4.7),
    Math.trunc(4.4),
    Math.trunc(4.2),
    Math.trunc(-4.2)
);

// Math.sign()
// Math.sign(x) returns if x is negative, null or positive:
console.log("Math.sign", Math.sign(-4));
console.log("Math.sign", Math.sign(0));
console.log("Math.sign", Math.sign(4));

//Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:
console.log("Math.pow", Math.pow(8, 2));

//Math.sqrt()
// Math.sqrt(x) returns the square root of x:
console.log("Math.sqrt", Math.sqrt(64));

//Math.abs()

// Math.abs(x) returns the absolute (positive) value of x:
console.log("Math.abs", Math.abs(-4));

//Math.sin()

console.log("Math.sin()", Math.sin((90 * Math.PI) / 180));

//Math.cos()

console.log("Math.cos()", Math.cos((0 * Math.PI) / 180));

//Math.min() and max()

console.log("Math.min()", Math.min(0, 33, 1, 32, 66));
console.log("Math.max()", Math.max(0, 33, 1, 32, 66));

//Math.random()

console.log("Math.random()", Math.random());

//Math.log()

console.log("Math.log() ", Math.log(10));

//Math.log2()

console.log("Math.log2() ", Math.log2(10));

//Math.log10()

console.log("Math.log10() ", Math.log10(1000));

/* 
JavaScript Math Methods

Method	                Description
abs(x)	                Returns the absolute value of x
acos(x)	                Returns the arccosine of x, in radians
acosh(x)	            Returns the hyperbolic arccosine of x
asin(x)	                Returns the arcsine of x, in radians
asinh(x)	            Returns the hyperbolic arcsine of x
atan(x)	                Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	            Returns the arctangent of the quotient of its arguments
atanh(x)	            Returns the hyperbolic arctangent of x
cbrt(x)	                Returns the cubic root of x
ceil(x)	                Returns x, rounded upwards to the nearest integer
cos(x)	                Returns the cosine of x (x is in radians)
cosh(x)	                Returns the hyperbolic cosine of x
exp(x)	                Returns the value of Ex
floor(x)	            Returns x, rounded downwards to the nearest integer
log(x)	                Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	Returns the number with the highest value
min(x, y, z, ..., n)	Returns the number with the lowest value
pow(x, y)	            Returns the value of x to the power of y
random()	            Returns a random number between 0 and 1
round(x)	            Rounds x to the nearest integer
sign(x)	                Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	                Returns the sine of x (x is in radians)
sinh(x)	                Returns the hyperbolic sine of x
sqrt(x)	                Returns the square root of x
tan(x)	                Returns the tangent of an angle
tanh(x)	                Returns the hyperbolic tangent of a number
trunc(x)	            Returns the integer part of a number (x)

*/
