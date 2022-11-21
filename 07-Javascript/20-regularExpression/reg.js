/*
What Is a Regular Expression?
A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.

Syntax
/pattern/modifiers;
*/

// search()
let str = "I am a boy";
console.log(str.search("boy"));

// search with reg exp

console.log(str.search(/boy/i));

// replace()

let changed = str.replace("boy", "gardenner");
console.log(changed);

//replace with reg exp

let changedRegExp = str.replace(/am a boy/i, "proud to be gardenner");
console.log(changedRegExp);

/*

Regular Expression Modifiers
Modifiers can be used to perform case-insensitive more global searches:

Modifier	Description	Try it
i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching
*/

// test();
const pattern = /e/;
pattern.test("The best things in life are free");
console.log(pattern);
console.log(pattern.test("The best things in life are free"));

//exec()

console.log(/e/.exec("The best things in life life are free"));