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

document.getElementById("maxMethod").innerHTML= arrMax(nums);