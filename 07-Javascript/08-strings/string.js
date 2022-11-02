let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

// String Length
// To find the length of a string, use the built-in length property:

// Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//====================
// Escape Character
//=================
/*

Code	Result	    Description
\'	      '	        Single quote
\"	      "	        Double quote
\\	      \	        Backslash
*/

let text2 = 'We are the so-called "Vikings" from the north.';
console.log(text2);
let text3 = "The character \\ is called backslash.";
console.log(text3);

/*
Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator 
*/

let text4 = "The character \b is called backspace.";
console.log(text4);

let text5 = "The character \f is called form feed.";
console.log(text5);

let text6 = "The character \n is called new line.";
console.log(text6);

let text7 = "The character \r is called Carriage ruturn.";
console.log(text7);

let text8 = "The character \t is called Horizontal tabulator.";
console.log(text8);

let text9 = "The character \v is called vertical tabulator";
console.log(text9);

/*
Javascript strings as objects
Normally JS strings are primitive values created from literals
*/
let a = "Fahim";

//But strings can also be defined as objects with the keyword "new"

let b = new String("Fahim");
console.log(b);
console.log(typeof b);
console.log(typeof a == typeof b);
console.log(a == b);
console.log(a === b);
