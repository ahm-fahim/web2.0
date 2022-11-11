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