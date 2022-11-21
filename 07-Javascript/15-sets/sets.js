/*
Essential Set Methods
Method	Description
new Set()	Creates a new Set
add()	Adds a new element to the Set
delete()	Removes an element from a Set
has()	Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	Returns the number of elements in a Set
*/

//How to create a set

const letters = new Set(["a", "b", "c"]);
console.log(letters);
console.log(typeof letters);

// add value
letters.add("d");
console.log(letters);

const fruits = new Set();

fruits.add("Mango");
fruits.add("Apple");
fruits.add("Orange");

console.log(fruits);

//forEach
letters.forEach(function (value) {
    console.log(value);
});

//values()
console.log(letters.values());

for (const i of fruits.values()) {
    console.log(i);
}
