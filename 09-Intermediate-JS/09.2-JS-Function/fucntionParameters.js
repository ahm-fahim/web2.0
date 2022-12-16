function myFunc(x, y) {
    if (y === undefined) {
        y = 2;
    }
}

let count = 0;
setInterval(() => {
    count++;
    console.log(count);
}, 1000);
