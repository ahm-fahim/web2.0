/*~~~~~~~~~~~~~~~~~*\
 /*                   *\
/*      JavaScript     *\
\*        Number        /
 \*                    /
  \*~~~~~~~~~~~~~~~~~*/

let x = 3.14; //a number with decimals
let y = 3; //a number without decimals

let a = 123e5; //12300000
let b = 123e-5; //0.00123

console.log(x, y, a, b);

//integer precision
//integer (numbers without a period or exponent notation) are accurate up to 15 degits
let num1 = 999999999999999;
let num2 = 9999999999999999;
console.log(`num1 = ${num1},num2 = ${num2}`);

//floating precision
//floating point arithmetic is not always 100% accurate

let num3 = 0.2 + 0.1;
console.log(num3);

//to solve the problem above, it helps to multiply and divide
let num4 = (0.2 * 10 + 0.1 * 10) / 10;
console.log(num4);

//adding number and string

let strNum1 = "10";
let strNum2 = "11";
console.log(strNum1 + strNum2);

let num5 = 22;
let num6 = "22";
console.log(num5 + num6);

// confiusion
let c = 10;
let d = 20;

let e = "The result is: " + c + d;
console.log(e);

//here also a confiusion

let f = 10;
let g = 20;
let h = "30";
console.log(f + g + h);

// The JavaScript interpreter works from left to right.

//Numeric strings
//~~~~~~~~~~~~~~~~~~~~~~~~~~
// js can have numeric content

let p = 100 / "apple";
console.log(p); //NaN

let q = 100 / "banana";
console.log(isNaN(x));

console.log(typeof NaN);

//Infinity

let myNumber = 2;

while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    console.log(myNumber);
}

//Hexadecimal

let hexa = 0xff;
console.log(hexa);

/*
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
*/

/*/`````````````````````````````````````\*\
By default, JavaScript displays numbers
 as base 10 decimals.

But you can use the toString() method
 to output numbers from base 2 to 
 base 36.

Hexadecimal is base 16. Decimal is
 base 10. Octal is base 8. Binary is
  base 2.
\*\_____________________________________/*/

let myNumber2 = 32;
console.log("Hexatrigesimal (base 36) ", myNumber2.toString(36));
console.log("Duotrigesimal (base 32)(base 33) ", myNumber2.toString(32));
console.log("Hexadecimal (base 16) ", myNumber2.toString(16));
console.log("Duodecimal (base 12) ", myNumber2.toString(12));
console.log("Decimal (base 10) ", myNumber2.toString(10));
console.log("Octal (base 8)", myNumber2.toString(8));
console.log("Binary (base 2)", myNumber2.toString(2));

//numbers as objects

let r = 123;
console.log(123);
let s = new Number(123);

console.log(s);

/*

When using the == operator, x and y are equal:

let x = 500;
let y = new Number(500);
When using the === operator, x and y are not equal.

let x = 500;
let y = new Number(500);
*/

let t = new Number(4);
let u = new Number(4);
console.log(t == u);
console.log(t === u);
