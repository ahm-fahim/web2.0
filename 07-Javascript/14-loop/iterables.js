const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);

for (const x of fruits) {
    console.log(x);
}
console.log(typeof fruits);

//sets
const letters = new Set(["a", "b", "c"]);
for (const x of letters) {
    console.log(x);
}
