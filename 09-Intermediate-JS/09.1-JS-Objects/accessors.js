const person = {
    firstName: "Fahim",
    lastName: "Morshed",
    language: "en",
    get lang() {
        return this.language;
    }
}

console.log(person.lang)