/*
STRING METHODS
_______________________________
String length
_______________________________
String slice()
______________________________
String substring()
_______________________________
String substr()
_______________________________
String replace()
_______________________________
String replaceAll()
_______________________________    
String toUpperCase()
_______________________________
String toLowerCase()
_______________________________
String concat()
_______________________________
String trim()
_______________________________
String trimStart()
_______________________________
String trimEnd()
_______________________________
String padStart()
_______________________________
String padEnd()
_______________________________
String charAt()
_______________________________
String charCodeAt()
_______________________________
String split()
_______________________________
*/

//LENGTH

let method1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = method1.length;
console.log("length=", length);

/*
EXTRACTING STRING PARTS
    1. slice(start, end)
    2. substring(start,end)
    3. substr(start, length)
*/

//\\//\\//\\//\\//\\//\\
//SLICE()
//\\//\\//\\//\\//\\//\\

let method2 = "apple, banana, kiwi";
let sliceMethods2 = method2.slice(14, 19); // here we can use single perameter
let slice2Methods2 = method2.slice(-14, -6); // used single perameter also

console.log(sliceMethods2);
console.log(slice2Methods2);

/*
NOTE
JavaScript counts positions from zero.

First position is 0.

Second position is 1.
*/

//\\//\\//\\//\\//\\//\\
//SUBSTRING()
//\\//\\//\\//\\//\\//\\

//substring() is simillar to slice()
// the difference is that start and end values less than 0 are treated as 0 in substring()

let method3 = "apple, banana, mango";
let method3Substring = method3.substring(7, 13);
console.log(method3Substring);

//\\//\\//\\//\\//\\//\\
// SUBSTR()
//\\//\\//\\//\\//\\//\\

// substr() is similar to slice()
// the difference is that the second paramter specifies the length of the extracted part

let method4 = "apple, orange, locut";
let method4Substr = method4.substr(7, 6);
console.log(method4Substr);

//\\//\\//\\//\\//\\//\\
//REPLACE()
//\\//\\//\\//\\//\\//\\

let mainText = "Visit Google";
let newText = mainText.replace("Google", "Microsoft");
console.log("mainText =", mainText);
console.log(newText);

//replacing with regular expression
let newText2 = mainText.replace(/GOOGLE/i, "Apple");
console.log(newText2);

// Note
// Regular expressions are written without quotes.

let newText3 = mainText.replace(/Google/g, "Banana");
console.log(newText3);

//\\//\\//\\//\\//\\//\\
//ReplaceAll()
//\\//\\//\\//\\//\\//\\

// let pets = "I love cats. Cats are very easy to love. Cats are very popular.";
// let newPets = pets.replaceAll("Cats", "Dogs");

// console.log(newPets);
//Note
// replaceAll() is an ES2021 feature.

// replaceAll() does not work in Internet Explorer.

//\\//\\//\\//\\//\\//\\
//Upper & lower
//\\//\\//\\//\\//\\//\\

let normalText = "Hello world";
console.log(normalText.toUpperCase());
console.log(normalText.toLowerCase());

//\\//\\//\\//\\//\\//\\
//concat()
//\\//\\//\\//\\//\\//\\

let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));

// The concat() method can be used instead of the plus operator. These two lines do the same:

// Example
let text3 = "Hello" + " " + "World!";
let text4 = "Hello".concat(" ", "World!");

//\/\/\\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
// Note
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.

//\/\/\\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

/********************************
 * trim()
 * The trim() methods removes whitespace form both sides of stringsl;
 */

let whitespace = "          Fahim        ";
console.log(whitespace);
console.log(whitespace.trim());

//-----------------
//trimStart()
//-------------------

let startspce = "         Hello     ";
console.log(startspce.trimStart());

//-----------------
//trimEnd()
//-------------------

let endspce = "         Hello     ";
console.log(startspce.trimEnd());

//+++++++++++++++++
// Padding
//padStart() , padEnd()
//+_+_+_+_+_+_+_+_+_+_+_+_+

let Padding = "5";
console.log(Padding.padStart(4, "*"));
console.log(Padding.padEnd(4, "*"));

/*/^^^^^^^^^^^^^^^^^^^^^^^^^\*\
EXTRACTING STRING CHARACTERS

*charAt(position)
*charCodeAt(position)
-property access[]
\*\_________________________/*/

/*/^^^^^^^^^^^^^^^^^^^\*\
        charAt()
 The charAt() method 
 returns the character
 at a specified index 
 (position) in a string:

\*\__________________ /*/

let text5 = "HELLO WORLD";
console.log(text5.charAt(3));

/*/^^^^^^^^^^^^^^^^^^^\*\
       charCodeAt()

     The charCodeAt() 
    method returns the 
      unicode of the 
      character at a 
    specified index in 
        a string:
    
   The method returns
      a UTF-16 code
   (an integer between
      0 and 65535).

\*\__________________ /*/

console.log(text5.charCodeAt(1));

// Property access

let text6 = "javaScript";
console.log(text6[3]);

/**
 * 
 * Note
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
 */

//---------------------------------------
//Converting String to array
//---------------------------------------

//split()

let pets = "Muskan, Charly ";
console.log(pets.split(","));
