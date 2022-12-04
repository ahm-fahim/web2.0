const person = {
    name: "Fahim",
    age: 22,
    village: "Mokamtola",
    future_goal:"Be a software Engineer & Entrepreneur",
    hobby: ["Gardening", "Photography", "Traveling", "Entrepreneur"],
    education: {
        ssc_year: 2018,
        diploma:2022
    }
};

const personStringify = JSON.stringify(person);
console.log(personStringify);
const personJSON = JSON.parse(personStringify);
console.log(personJSON);