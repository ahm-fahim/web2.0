function myFunc(x, y) {
    if (y === undefined) {
        y = 2;
    }
}

// let count = 0;
// setInterval(() => {
//     count++;
//     console.log(count);
// }, 1000);


// argument Object

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++){
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(1, 222, 44, 333, 55, 553, 643, 43));