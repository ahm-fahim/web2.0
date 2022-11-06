/*
JavaScript Number Properties

Property	        Description

EPSILON	            The difference between 1 and the smallest JS number.
MAX_VALUE	        The largest number possible in JavaScript
MIN_VALUE	        The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MAX_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)
NaN	                A "Not-a-Number" value
*/

console.log("EPSILON ", Number.EPSILON);
console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);

/*
Number Properties Cannot be Used on Variables
Number properties belong to the JavaScript Number Object.

These properties can only be accessed as Number.MAX_VALUE.

Using x.MAX_VALUE, where x is a variable or a value, will return undefined:
*/

console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);

console.log("POSITIVE_INFINITY ", Number.POSITIVE_INFINITY);
console.log(1 / 0);
console.log("NEGATIVE_INFINITY ", Number.NEGATIVE_INFINITY);
console.log(-1 / 0);

console.log("NaN", Number.NaN);
