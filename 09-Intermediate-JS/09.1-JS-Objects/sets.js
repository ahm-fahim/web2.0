const letters = new Set();

letters.add("a");
letters.add("b");
console.log(letters);

letters.forEach(function (value) {
    console.log(value);
});
console.log(letters.values());

const myIterator = letters.values();

for (const entry of myIterator) {
    console.log(entry);
}

console.log(letters.keys());

console.log(typeof letters);


console.log(letters instanceof Set);