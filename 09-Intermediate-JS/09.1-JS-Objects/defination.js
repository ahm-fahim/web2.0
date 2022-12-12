const person = {
    name: "Fahim",
    age: 23,
    full_name: function () {
        return this.name + " Morshed";
    },
};
console.log(person.full_name());
