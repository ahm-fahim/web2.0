const nums = [33, 44, 53, 65, 23, 64, 12];

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

function reduceRightFunc(total, value){
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

