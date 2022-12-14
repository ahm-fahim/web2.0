const person = {
    firstName: "Fahim",
    lastName: "Morshed",
    language: "en",
    get lang() {
        return this.language;
    },
};

console.log(person.lang);

const person2 = {
    firstName: "Fahim",
    lastName: "Morshed",
    language: "",
    set lang2(l) {
        return (this.language = l);
    },
};
person2.lang2 = "bn";

console.log(person2.language);

const obj = { counter: 0 }; // define object
//define getters and setters
Object.defineProperty(obj, "reset", {
    get: function () {
        this.counter = 0;
    },
});
Object.defineProperty(obj, "increment", {
    get: function () {
        this.counter++;
    },
});
Object.defineProperty(obj, "decrement", {
    get: function () {
        this.counter--;
    },
});
Object.defineProperty(obj, "add", {
    set: function (value) {
        this.counter += value;
    },
});
Object.defineProperty(obj, "subtract", {
    set: function (value) {
        this.counter -= value;
    },
});


obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

console.log(obj.counter);