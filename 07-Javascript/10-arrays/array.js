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

// push method
animals.push("elephant");
document.getElementById("pushItem").innerHTML = animals;

// adding element by index number 

const flowers = ["pitunia", "sunflower", "rose"];
flowers[6] = "jarbera";
let floLen = flowers.length;
let text3 = "";

for (let i = 0; i < floLen; i++){
    text3 += flowers[i] + "<br>";
}

document.getElementById("addHighIndex").innerHTML = text3;


// 
const person2 = [];
person2["firstName"] = "John";
person2["lastName"] = "Doe";
person2["age"] = 46;
// console.log(person2.length);     // Will return 0
// console.log(person2[0]);        // Will return undefined
// console.log((person2));


//--------

const points1 = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];

// console.log(points1);
// console.log(points2);

document.getElementById("newArr1").innerHTML = points1;
document.getElementById("newArr2").innerHTML = points1;

// newUnexpected;

const points3 = new Array(60);
document.getElementById("newUnexpected").innerHTML = points3;


