// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

function getUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => displayUser(data));
}

function displayUser(data) {
    const ul = document.getElementById("users-list");
    for (const user of data) {
        console.log(user);
        const li = document.createElement("li");
        li.innerText = `name: ${user.name} \n email: ${user.email} \n address:\ncity:${user.address.city}\nstreet: ${user.address.street} \n\n `;
        ul.appendChild(li);
    }
}
