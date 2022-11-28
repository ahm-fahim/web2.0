const delBtn = document.getElementById("del-btn");
const delConfirm = document.getElementById('del-confirm');
const itemList = document.getElementById('item-list'); 

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
    console.log(itemList.innerHTML);
    itemList.style.display = "none";
    delConfirm.value = " ";
})

//more events
/*
focus, change , blur, keydown
*/