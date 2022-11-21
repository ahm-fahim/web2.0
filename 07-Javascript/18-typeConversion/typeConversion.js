//type conversion

//String to Number
console.log(Number("33.2"));
console.log(Number("Fahim"));

//Number methods
/*
Number()	Returns a number, converted from its argument
parseFloat()	Parses a string and returns a floating point number
parseInt()	Parses a string and returns an integer
*/

// Unary + operator

let a = "6";
console.log(typeof a);
let b = +a;
console.log(typeof b);

/*
let y = "John";   // y is a string
let x = + y;      // x is a number (NaN)
*/

// Number to String

let num = 111;
console.log(num + 10);
let str = String(num);
console.log(str + 10);
console.log((num + 33).toString());
/*
Method	Description
toExponential()	Returns a string, with a number rounded and written using exponential notation.
toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
toPrecision()	Returns a string, with a number written with a specified length

*/

//Dates to Number

const date = new Date();
console.log(Number(date));
console.log(date.getTime());

//dates to string

console.log(String(Date()));

//booleans to numbers

console.log(Number(false));
console.log(Number(true));

//autometic type conversion

console.log(5 + null); // returns 5         because null is converted to 0
console.log("5" + null); // returns "5null"   because null is converted to "null"
console.log("5" + 2); // returns "52"      because 2 is converted to "2"
console.log("5" - 2); // returns 3         because "5" is converted to 5
console.log("5" * "2"); // returns 10        because "5" and "2" are converted to 5 and 2


