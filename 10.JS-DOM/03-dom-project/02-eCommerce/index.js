//reaction counting function
const reactionCount = (id) => {
    const getId = document.getElementById(id);
    const idValue = getId.value;
    const toInt = parseFloat(idValue);
    const total = toInt + 1;
    getId.value = total;
};
//get reaction button function
const reaction = (id, count) => {
    document.getElementById(id).addEventListener("click", () => {
        reactionCount(count);
    });
};
//love reaction
reaction("love1", "loveCount1");

//star reaction
reaction("star1", "starCount1");

//add items function
const addItems = (id) => {
    const getId = document.getElementById(id);
    const getValue = getId.value;
    const toInt = parseFloat(getValue);
    const total = toInt + 1;
    if (toInt >= 0) {
        getId.value = total;
    }
};
//sub items function
const subItems = (id) => {
    const getId = document.getElementById(id);
    const getValue = getId.value;
    const toInt = parseFloat(getValue);
    const sub = toInt - 1;
    if (toInt > 0) {
        getId.value = sub;
    }
    
};

document.getElementById("addItems1").addEventListener("click", () => {
    addItems("countItems1");
});
document.getElementById("subItems1").addEventListener("click", () => {
    subItems("countItems1");
});
