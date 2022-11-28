const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const listContainer = document.getElementById("list-container");
const item = document.getElementById('item');

addBtn.addEventListener('click', () => {
    const li = document.createElement('li');

    const html = `
        <li class="item">{todoInput.value}</li>
    `
    listContainer.appendChild('html');
})
