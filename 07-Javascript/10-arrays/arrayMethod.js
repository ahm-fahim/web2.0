const fruits = ["Banana", "Orange", "Apple", "Mango"];

document.getElementById("toStringMethod").innerHTML = fruits.toString();


// join() method

document.getElementById("joinMethod").innerHTML = fruits.join(" * ");

//pop() method
document.getElementById("popMethod").innerHTML = fruits.pop();

//push() method
fruits.push("Kiwi");
document.getElementById("pushMethod").innerHTML = fruits;

//shift() method 
fruits.shift();
document.getElementById("shiftMethod").innerHTML = fruits;

//unshift() method

fruits.unshift("Lemon");
document.getElementById("unshiftMethod").innerHTML = fruits;

//changing array elements
fruits[0] = "Passion";
document.getElementById("changingElements").innerHTML = fruits;

// length methods
fruits[fruits.length] = "Kiwi";
document.getElementById("lengthMethod").innerHTML = fruits;

//delete method
delete fruits[4];
document.getElementById("deleteMethod").innerHTML = fruits;

// merging  cocat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

document.getElementById("mergingMethod").innerHTML = myChildren;

// concact 3 arr 

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myNewArr = arr1.concat(arr2, arr3);

document.getElementById("concat3Arr").innerHTML = myNewArr;

// concat array with values

const arr4 = ["Emil", "Tobias", "Linus"]; const myNewArr2 = arr4.concat("Peter");

document.getElementById("concatValues").innerHTML = myNewArr2;

//splice
const animals = ["dog", "cat", "cow"];
animals.splice(2, 0,"goat","megpie");

document.getElementById("spliceMethod").innerHTML = animals;