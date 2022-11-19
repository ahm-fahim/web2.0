/*
JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

Type	    Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
*/

//Date Inputs - Parsing dates
//If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

// Date.parse() returns the number of milliseconds between the date and January 1, 1970:
console.log(Date.parse("March 21, 2012"));
