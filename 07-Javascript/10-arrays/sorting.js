const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("sort").innerHTML = fruits.sort();

// reverse Method;

document.getElementById("reverseMethod").innerHTML = fruits.reverse();

//numeric sorts
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
    return a - b;
});

document.getElementById("numericSort").innerHTML = points;

points.sort(function (a, b) {
    return b - a;
});
document.getElementById("numericSort2").innerHTML = points;

// alpha & numeric

const nums = [33, 44, 11, 4, 1, 23, 59, 89, 5, 8];

function myFunc1() {
    nums.sort();
    document.getElementById("alpha").innerHTML = nums;
}
function myFunc2() {
    nums.sort(function (a, b) {
        return a - b;
    });
    document.getElementById("numeric").innerHTML = nums;
}

// random sort

nums.sort(function () {
    return 0.5 - Math.random();
});
document.getElementById("randomSort").innerHTML = nums;

// fisher yates method
function fishFunc() {
    for (let i = nums.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = nums[i];
        nums[i] = nums[j];
        nums[j] = k;
    }
    document.getElementById("fisherYates").innerHTML = nums;
}

// max value
nums.sort(function (a, b) {
    return a - b;
});
document.getElementById("maxValue").innerHTML = nums;

nums.sort(function (a, b) {
    return b - a;
});
document.getElementById("minValue").innerHTML = nums;

//maxMethod

function arrMax(arr) {
    return Math.max.apply(null, arr);
}

document.getElementById("maxMethod").innerHTML = arrMax(nums);

//minMethod

function arrMin(arr) {
    return Math.min.apply(null, arr);
}
document.getElementById("minMethod").innerHTML = arrMin(nums);

// customMax/Min
function customMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}
document.getElementById("customMax").innerHTML = customMax(nums);

// customMin

function customMin(arr) {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}
document.getElementById("customMin").innerHTML = customMin(nums);

//objectSort

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
];

displayCars();

cars.sort(function (a, b) {
    return a.year - b.year;
});
displayCars();

function displayCars() {
    document.getElementById("objectSort").innerHTML =
        cars[0].type +
        " " +
        cars[0].year +
        "<br>" +
        cars[1].type +
        " " +
        cars[1].year +
        "<br>" +
        cars[2].type +
        " " +
        cars[2].year;
}
