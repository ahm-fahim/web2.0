function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
}
Person.prototype.nationality = "Bangladeshi";

const myFather = new Person("MD ABDUL", "JALIL", 56, "black");

console.log(myFather.nationality);

Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(myFather.name());
