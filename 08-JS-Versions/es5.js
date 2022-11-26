/*
ES5 Features
"use strict"
String[number] access
Multiline strings
String.trim()
Array.isArray()
Array forEach()
Array map()
Array filter()
Array reduce()
Array reduceRight()
Array every()
Array some()
Array indexOf()
Array lastIndexOf()
JSON.parse()
JSON.stringify()
Date.now()
Date toISOString()
Date toJSON()
Property getters and setters
Reserved words as property names
Object methods
Object defineProperty()
Function bind()
Trailing commas

*/

// The "use strict" Directive
// "use strict" defines that the JavaScript code should be executed in "strict mode".

//Property Access on Strings
//The charAt() method returns the character at a specified index (position) in a string

var str = "Hello World";
console.log(str.charAt(2));

// Strings Over Multiple Lines
// ES5 allows string literals over multiple lines if escaped with a backslash:

var multiStr = "Hello \
Dolly!";
console.log(multiStr);

// Reserved Words as Property Names
// ES5 allows reserved words as property names:

var obj = { name: "John", new: "yes" };
console.log(obj.new);

//string trim()

var trimStr = "    Hello World!   ";
console.log(trimStr);
console.log(trimStr.trim());

//Array.isArray()
// The isArray() method checks whether an object is an array.

function isArrFunc() {
    var fruits = ["apple", "banana", "mango"];
    console.log(Array.isArray(fruits));
}
isArrFunc();

//Array forEach()
// The forEach() method calls a function once for each array element.

var nums = [1, 3, 5, 22, 4, 65];
var emty = "";
nums.forEach(forEachFunc);
console.log(emty);

function forEachFunc(a) {
    emty += a + ", ";
}

//array map()

var nums1 = [12, 34, 12, 34];
var nums2 = nums1.map(mapFunc);
console.log(nums2);

function mapFunc(value) {
    return value * 2;
}

//filter()

var over15 = nums.filter(filterFunc);

console.log(over15);

function filterFunc(val) {
    return val > 15;
}

//reduce()
var sum = nums.reduce(reduceFunc);
console.log(sum);
function reduceFunc(total, val) {
    return total + val;
}

// reducedRight()

var sum2 = nums.reduceRight(reducedRightFunc);

console.log(sum2);

function reducedRightFunc(t, v) {
    return t + v;
}

//every()
var allOver18 = nums.every(everyFunc);

console.log(allOver18);
function everyFunc(v) {
    return v > 18;
}

// some()

var allOver20 = nums.some(someFunc);
console.log(allOver20);

function someFunc(v) {
    return v > 20;
}

//indexOf()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);

var b = fruits.lastIndexOf("Apple");
console.log(b);

//JSON.parse()

//The JavaScript function JSON.parse() is used to convert the text into a JavaScript object:

var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

//JSON.stringify()

//Use the JavaScript function JSON.stringify() to convert it into a string.

console.log(JSON.stringify(obj));

//Date.now()
// Date.now() returns the number of milliseconds since zero date (January 1. 1970 00:00:00 UTC).
var timeInMSs = Date.now();
console.log(timeInMSs);

//Date toISOString()
// The toISOString() method converts a Date object to a string, using the ISO standard format:

const d = new Date();
console.log(d.toISOString());

//Date toJSON()

console.log(d.toJSON());

//Property Getters and Setters

// Create an object:
var person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName);

var person2 = {
    firstName: "Fahim",
    lastName: "Morshed",
    language: "NO",
    get lang() {
        return this.language;
    },
    set lang(value) {
        this.language = value;
    },
};

// Set an object property using a setter:
person2.lang = "bn";

console.log(person2.lang);

//Object.defineProperty()

var car = {
    name: "Volvo",
    year: 2011,
    language: "NO",
};

//Changge Object property

Object.defineProperty(car, "language", {
    value: "BN",
    writable: true,
    enumerable: true,
    configurable: true,
});

//Enumerate Proverties

for (var x in car) {
    console.log(car[x]);
}

// E5 object method 


// Managing Objects
// ------------------------------
// Create object with an existing object as prototype
Object.create(parent, donor)

// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)

//Protecting Objects
// -----------------------------
// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)


