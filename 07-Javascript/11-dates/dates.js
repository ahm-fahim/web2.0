const d = new Date();
console.log("Current Date", d);

console.log("Know Exact date", new Date("2022-03-25"));

/*
Note
Date objects are static. The "clock" is not "running".

The computer clock is ticking, date objects are not.
*/

// Creating Date Objects

// Date Objects are created with the new Date() constructor

// there are 9 ways to create a new date object

console.log("There are 9 ways to create a new date object");

console.log(new Date());
console.log(new Date("2015-11"));
console.log(new Date("2021-12-08"));
//6 numbers specify year, month, day, hour, minute, second:
console.log(new Date(2011, 4, 12, 11, 44, 30));
//5 numbers specify year, month, day, hour, and minute:
console.log(new Date(2011, 4, 12, 11, 44));
//4 numbers specify year, month, day, and hour:
console.log(new Date(2011, 4, 12, 11));
//3 numbers specify year, month, and day:

console.log(new Date(2011, 4, 12));
//2 numbers specify year and month:
console.log(new Date(2011, 4));

//You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

console.log(new Date(1989));

//Previous Century
//One and two digit years will be interpreted as 19xx:

console.log(new Date(89, 11, 22));

console.log("new Date with miliseconds");

console.log(new Date(100000000000));
console.log(new Date(-100000000000));

console.log(new Date(24 * 60 * 60));

// Dates methods

console.log("dates methods");

console.log(d.toString());

// toDateString()

console.log(d.toDateString());

//The toUTCString() method converts a date to a string using the UTC standard:

console.log(d.toUTCString());

//The toISOString() method converts a date to a string using the ISO standard:

console.log(d.toISOString());

