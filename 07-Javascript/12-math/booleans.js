/* 

Boolean Values
Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.

*/

// boolean function

console.log(Boolean(10 > 9));
console.log(Boolean(10 < 9));
console.log(11 > 12);

/* 

Comparisons and Conditions
The chapter JS Comparisons gives a full overview of comparison operators.

The chapter JS Conditions gives a full overview of conditional statements.

Here are some examples:

Operator	Description	    Example
==	        equal to	    if (day == "Monday")
>	        greater than	if (salary > 9000)
<	        less than	    if (age < 18)
*/

// everythin with a value is true
// without a value is false

// Boolean object

let x = false;

let y = new Boolean(false);
let z = new Boolean(false);
console.log(typeof y);
console.log(typeof x);

console.log(x == y);
console.log(x === y);
console.log(z === y);


/*
NOTE
Do not create Boolean objects.

The new keyword complicates the code and slows down execution speed.

Boolean objects can produce unexpected results:
*/
