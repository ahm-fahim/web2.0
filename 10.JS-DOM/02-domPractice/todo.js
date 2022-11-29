const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const listContainer = document.getElementById("list-container"); 
const items = document.getElementsByClassName('item');

//---------------------------------------
//This is not a right way
//-----------------------------------------------------
// delete items 
// for (const item of items) {
//     item.addEventListener('click', (e) => {
//         e.target.parentNode.removeChild(e.target);
//     })
// }
//----------------------------------------------
// add items
addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add('item');
    li.innerHTML = `
    ${todoInput.value}
    `;
    listContainer.appendChild(li);
    todoInput.value = " ";
});
//delete items
listContainer.addEventListener('click', (e) => {
    e.target.parentNode.removeChild(e.target);
})

