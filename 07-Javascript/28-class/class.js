// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

// Syntax
class ClassName {
    constructor() {}
}

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

//A JavaScript class is not an object.

// It is a template for JavaScript objects.

let car1 = new Car("Ford", 2012);
let car2 = new Car("Volvo", 2013);

console.log(car1.name + " " + car1.year);

// Syntax
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }

class Cars {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myCar = new Cars("Xor", 2021);
let discript = "My car is " + myCar.age() + " years old";
console.log(discript);

// You can send parameters to Class methods:

// Example
class Cars2 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar2 = new Cars2("Ford", 2014);

console.log("My car is " + myCar2.age(year) + " years old.");
