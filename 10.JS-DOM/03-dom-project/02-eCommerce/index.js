//__________________________________________________________________________
                             // Reaction section \\
//__________________________________________________________________________
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

//__________________________________________________________________________
                             // Quantity section \\
//__________________________________________________________________________
//add items function
const addItems = (id) => {
    const getId = document.getElementById(id);
    const getValue = getId.value;
    const toInt = parseFloat(getValue);
    const total = toInt + 1;
    if (toInt >= 0) {
        getId.value = total;
    }
    return total;
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
    return sub;
};

//count items function

const countItems = (btn, count, add) => {
    document.getElementById(btn).addEventListener("click", () => {
        if (add == true) {
            addItems(count);
        } else {
            subItems(count);
        }
    });
};

//count add Items
countItems("addItems1", "countItems1", true);

// count sub items
countItems("subItems1", "countItems1", false);

//__________________________________________________________________________
                             // Add To Cart section \\
//__________________________________________________________________________

document.getElementById("addCart1").addEventListener('click', () => {
    const priceId = document.getElementById("price1");
    const priceValue = priceId.innerText;
    const toInt = parseFloat(priceValue);

    console.log(toInt);
    const cartId = document.getElementById('cartAmount');
    const cartValue = cartId.innerText;
    const cartAmount = parseFloat(cartValue);

    const quantityId = document.getElementById("countItems1");
    const quantity = quantityId.value;

    cartId.innerText = toInt * quantity;
});
