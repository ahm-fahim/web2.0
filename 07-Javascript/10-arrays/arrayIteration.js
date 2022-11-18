const nums = [12, 33, 44, 53, 65, 23, 64, 12];

let emty = "";

// JS forEach()
nums.forEach((element) => {
    console.log(element);
    emty += element + "<br>";
    document.getElementById("forEach").innerHTML = emty;
});

// JS map()
const numsMap = nums.map(mapFunc);
document.getElementById("map").innerHTML = numsMap;

function mapFunc(value, index, array) {
    return value * 2;
}

//filter()

const under18 = nums.filter(filterFunc);
document.getElementById("filter").innerHTML = under18;
function filterFunc(value, index, array) {
    return value < 18;
}

//reduce()

let numsReduce = nums.reduce(reduceFunc);
document.getElementById("reduce").innerHTML = numsReduce;
function reduceFunc(total, value, index, array) {
    return total + value;
}

// initalReduce

let initialReduce = nums.reduce(initialReduceFunc, 100);

document.getElementById("initialReduce").innerHTML = initialReduce;
function initialReduceFunc(total, value) {
    return total + value;
}

//reduceRight

let reduceRight = nums.reduceRight(reduceRightFunc);
document.getElementById("reduceRight").innerHTML = reduceRight;

function reduceRightFunc(total, value) {
    return total + value;
}

//every()
let allOver18 = nums.every(everyFunc);

document.getElementById("every").innerHTML = allOver18;

function everyFunc(value, index, array) {
    return value > 18;
}

//some()
let someOver18 = nums.some(someFunc);
document.getElementById("some").innerHTML = someOver18;
function someFunc(value) {
    return value > 18;
}

//indexOf

const fruits = ["apple", "banana", "mango"];
let position = fruits.indexOf("mango") + 1;
document.getElementById("indexOf").innerHTML = position;

// lastIndexOf()

let lastPosition = fruits.lastIndexOf("apple") + 1;
document.getElementById("lastIndexOf").innerHTML = lastPosition;

//find()

let findNums = nums.find(findFunc);
document.getElementById("find").innerHTML = findNums;

function findFunc(value) {
    return value > 18;
}

//findIndex

let findIndex = nums.findIndex(findIndexFunc);

document.getElementById("findIndex").innerHTML = findIndex;

function findIndexFunc(value) {
    return value > 18;
}

//form()

const newArr = Array.from("ABCDEFG");
document.getElementById("arrForm").innerHTML = newArr;

//keys()

const keys = fruits.keys();

let emtyValue = "";
for (let i of keys) {
    emtyValue += i + ", ";
}
document.getElementById("keys").innerHTML = emtyValue;

//entries()
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

const entriesValue = fruits2.entries();

for (let x of entriesValue) {
    document.getElementById("entries").innerHTML += x + " ";
}

//includes

document.getElementById("includes").innerHTML = fruits2.includes("Apple");