//Typeof()

console.log(typeof "John"); // Returns "string"
console.log(typeof 3.14); // Returns "number"
console.log(typeof NaN); // Returns "number"
console.log(typeof false); // Returns "boolean"
console.log(typeof [1, 2, 3, 4]); // Returns "object"
console.log(typeof { name: "John", age: 34 }); // Returns "object"
console.log(typeof new Date()); // Returns "object"
console.log(typeof function () {}); // Returns "function"
console.log(typeof myCar); // Returns "undefined" *
console.log(typeof null); // Returns "object"

/*
Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined
*/

/*
Complex Data
The typeof operator can return one of two complex types:

function
object
*/

//The constructor Property
//The constructor property returns the constructor function for all JavaScript variables.

console.log("John".constructor); // Returns function String()  {[native code]}
console.log((3.14).constructor); // Returns function Number()  {[native code]}
console.log(false.constructor); // Returns function Boolean() {[native code]}
console.log([1, 2, 3, 4].constructor); // Returns function Array()   {[native code]}
console.log({ name: "John", age: 34 }.constructor); // Returns function Object()  {[native code]}
console.log(new Date().constructor); // Returns function Date()    {[native code]}
console.log(function () {}.constructor); // Returns function Function(){[native code]}

//You can check the constructor property to find out if an object is an Array (contains the word "Array"):

const fruits = ["Banana", "Orange", "Apple"];
console.log(isArray(fruits));

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
//date
const myDate = new Date();
console.log("date", isDate(myDate));

function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}

//Null

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;
console.log(person);

//Undifined
let emty;
console.log(emty);
// emty
let free = "";
console.log(free);

//diffenrence

console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(null === undefined); // false
console.log(null == undefined); // true

//instanceof operator

// The instanceof operator returns true if an object is an instance of the specified object:

const pets = ["cat", "dog"];

console.log("Instanceof", pets instanceof Array);
console.log("Instanceof", pets instanceof Object);
console.log("Instanceof", pets instanceof String);
console.log("Instanceof", pets instanceof Number);


