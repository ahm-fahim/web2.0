// arrrays
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("carsArray").innerHTML = cars;

// provide array

const fruits = [];
fruits[0] = "Mango";
fruits[1] = " Banana";
fruits[2] = " Orange";

document.getElementById("arrayProvide").innerHTML = fruits;

//new keyword
const pets = new Array("Charly", " Muskan", " Joya");
document.getElementById("newKey").innerHTML = pets;

// Access array elements

document.getElementById("accesArrElements").innerHTML = cars[0];

// change array elements

cars[0] = "Opel";
document.getElementById("changeArrElement").innerHTML = cars;


// array object
const person = { firstName: "John", lastName: "Doe", age: 46 };

document.getElementById("arrObj").innerHTML = person.firstName;

// array length 

document.getElementById("arrLength").innerHTML = fruits.length;

// access first and last elements 

const animals = ["dog", "cat", "cow", "goat"];
document.getElementById("access1stElements").innerHTML = animals[0];
document.getElementById("accesslastElements").innerHTML = animals[animals.length - 1];


// array loop 

let aniLength = animals.length;

let text = "<ul>";
for (let i = 0; i < aniLength; i++){
    text += "<li>" + animals[i] + "</li>";
}
text += "</ul>";

document.getElementById("arrayLoop").innerHTML = text;


// forEach
let text2 = "<ul>";
animals.forEach(myFunc);
text2 += "</ul>"

document.getElementById("forEach").innerHTML = text2;

function myFunc(animal) {
    text2 += "<li>" + animal + "</li>";
}