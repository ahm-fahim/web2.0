const person = {
    name: "Fahim",
    age: 23,
    full_name: function () {
        return this.name + " Morshed";
    },
};

//for in

for (let x in person) {
    console.log(person[x]);
}

//adding properties

person.religion = "Islam";

for (const x in person) {
    console.log(person[x]);
}

// delete
delete person.age;

// or
// delete person["age"];

for (const x in person) {
    console.log(person[x]);
}

// nested Object

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat",
    },
};

// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:

// Example
const myObj2 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] },
    ],
};

for (let x in myObj2.cars) {
    console.log(myObj2.cars[x].name);
    for (let y in myObj2.cars[x].models) {
        console.log(myObj2.cars[x].models[y]);
    }
}
