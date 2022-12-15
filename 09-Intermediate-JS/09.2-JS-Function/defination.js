function functionName(parameters) {
    //code to be executed
}

//function expressions

const x = function (a, b) {
    return a * b;
};

//function constructor
const myFunc = new Function("a", "b", "return a * b");

let constructor = myFunc(4, 3);
console.log(constructor);

// self invoking
(function () {
    let invoke = "Hello !";
    console.log(invoke);
})();

//function are objects

function funcObj(a, b) {
    return arguments.length;
}

console.log(funcObj(3, 5));

//arrow functions
// ES6
const arrow = (a, b) => a + b;
console.log(arrow(2,3));
