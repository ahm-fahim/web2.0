//Map()

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);
console.log(fruits);
//The get() method gets the value of a key in a Map:
console.log(fruits.get("apples"));

//sets

fruits.set("limons", 20);
//The set() method can also be used to change existing Map values:
fruits.set("apples", 220);
console.log(fruits);

//size()

console.log(fruits.size);

//delete
fruits.delete("limons");

console.log(fruits);

//has()
//
// The has() method returns true if a key exists in a Map:
console.log(fruits.has("apples"));

fruits.delete("apples");
fruits.has("apples");
console.log(fruits.has("apples"));

//entries()
for (const x of fruits.entries()) {
    console.log(x);
}

//forEach()
fruits.forEach(function (value, key) {
    console.log(key, value);
})