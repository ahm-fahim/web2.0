/*
The For In Loop
The JavaScript for in statement loops through the properties of an Object:
*/

/*
Syntax

for (key in object){
    // code block
}
*/

const person = { name: "Fahim", age: 23, height: 5.7 };

for (let i in person) {
    console.log(i, ":", person[i]);
}
