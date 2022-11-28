const delBtn = document.getElementById("del-btn");
const delConfirm = document.getElementById('del-confirm');
const itemList = document.getElementById('item-list'); 
const item = document.getElementById('item');

delConfirm.addEventListener("keyup", () => {
    if (delConfirm.value == "delete") {
        delBtn.removeAttribute("disabled");
        delConfirm.style.outlineColor = "red";
         delConfirm.style.color = "red";
    
    } else {
        delBtn.setAttribute('disabled',true);
    }
})

delBtn.addEventListener("click", () => {
    itemList.removeChild(item);
    delConfirm.value = " ";
})

//more events
/*
focus, change , blur, keydown
*/