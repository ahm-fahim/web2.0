function myNumbers() {
    let n = 0;
    return {
        next: function () {
            n += 5;
            return { value: n, done: false };
        },
    };
}
//create iterables
const n = myNumbers();
console.log(n.next());
console.log(n.next());
console.log(n.next());

myNumbers[Symbol.iterator] = function () {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {
                done = true;
            }
            return { value: n, done: done };
        },
    };
};

for (const num of myNumbers) {
    console.log(num);
}
