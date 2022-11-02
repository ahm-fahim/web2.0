const person = {
    firstName: "Fahim",
    lastName: "Morshed",
    age: 22,
    color: "white/black",
};
console.log(person);

// Accessing Object Properties
// You can access object properties in two ways:

// objectName.propertyName
console.log(person.firstName);

//object.["propertyName"]
console.log(person["lastName"]);

const person2 = {
    firstName: "Mohimur",
    lastName: "Rohim",
    age: 18,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person2);
console.log(person2.fullName());


/*

What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
*/


/*
Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
*/