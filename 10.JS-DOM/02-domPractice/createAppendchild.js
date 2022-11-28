const fruits = document.getElementById("fruits");
const li = document.createElement("li");

const fruitsItem = ["Orange", "Apple", "Passon"];

for (let x of fruitsItem) {
    console.log(x);
    li.innerHTML += x + '<br>';
    fruits.appendChild(li);
}
