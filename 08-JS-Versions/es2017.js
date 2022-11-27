/*

New Features in ECMAScript 2017
This chapter introduces the new features in ECMAScript 2017:

JavaScript String padding
JavaScript Object entries()
JavaScript Object values()
JavaScript async and await
JavaScript Object.getOwnPropertyDescriptors
*/

let text = "6";
console.log(text.padStart(4, 0));
console.log(text.padEnd(4, 0));

const personData = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

let entriesValue = Object.entries(personData);
console.log(entriesValue);

console.log(Object.values(personData));

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

for (let [fruit, amount] of Object.entries(fruits)) {
    console.log(fruit + " " + amount);
}


//JavaScript Async Functions
// Waiting for a Timeout

async function myDisplay() {
    let myPromise = new Promise(function (myResolve, myReject) {
        setTimeout(function () { myResolve("I am waiting up to 3 seconds"); }, 3000);
    });
    console.log(await myPromise);
}
myDisplay();