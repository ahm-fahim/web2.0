//THE JS this KEYWORD

const person = {
    firstName: "Fahim",
    lastName: "Morshed",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName());

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

let x = this;

console.log(x);

("use strict");
function myFunction() {
    return this;
}
console.log(myFunction());

//Explicit Function Binding

// //call()
// The call() and apply() methods are predefined JavaScript methods.

// They can both be used to call an object method with another object as argument.
const person1 = {
    fullName: function () {
        return this.firstName + " " + this.firstName;
    },
};
const person2 = {
    firstName: "John",
    lastName: "Doe",
};
let callPerson2 = person1.fullName.call(person2);
console.log(callPerson2);

//bind()
//With the bind() method, an object can borrow a method from another object.

const member = {
    firstName: "Mohimur",
    lastName: "Rahim",
};
let fullName = person.fullName.bind(member);
console.log(fullName());

/*
This Precedence
To determine which object this refers to; use the following precedence of order.

Precedence	Object
1	bind()
2	apply() and call()
3	Object method
4	Global scope
*/
