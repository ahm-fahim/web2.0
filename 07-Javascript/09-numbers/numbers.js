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
