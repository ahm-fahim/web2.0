/*
Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
*/
let str = `Hello World!`;
console.log(str);

/*
Quotes Inside Strings
With template literals, you can use both single and double quotes inside a string:
*/

let text = `He's often called "Muskan"`;
console.log(text);

//Multiline string

let multiStr = `
    The quick brown 
    fox jumps over 
    the lazy dog;
`;
console.log(multiStr);

//substitutions

let firstName = "Fahim";
let lastName = "Morshed";

let fullName = `Welcome ${firstName} ${lastName}`;

console.log(fullName);


/*

HTML Templates
Example
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
*/