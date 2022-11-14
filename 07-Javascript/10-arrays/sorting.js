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
})
document.getElementById("numericSort2").innerHTML = points;