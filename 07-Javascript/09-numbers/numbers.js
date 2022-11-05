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
