function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

const myFather = new Person("Abdul", "Jalil", 50, "black");
console.log(myFather.fullName());
