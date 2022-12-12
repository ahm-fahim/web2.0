const person = {
    name: "Ahm Fahim",
    age: 23,
    village: "Chakolma",
};

const value = Object.values(person);
console.log(value);

const str = JSON.stringify(person);

console.log(str);
console.log(str.name); //undefined

const pars = JSON.parse(str);

console.log(pars);
console.log(pars.name); // its show the output of name properties


