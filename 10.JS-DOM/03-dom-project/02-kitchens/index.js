
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


//__________________________________________________________________________
// Add To Cart section \\
//__________________________________________________________________________

// items price function
const itemPrice = (id) => {
    const priceId = document.getElementById(id);
    const priceValue = priceId.innerText;
    const toInt = parseFloat(priceValue);
    return toInt;
};

//get cart amount function
const cartAmount = (id, price, quantity) => {
    const cartId = document.getElementById(id);
    const cartValue = cartId.innerText;
    const cartAmount = parseFloat(cartValue);

    cartId.innerText =cartAmount+ price * quantity;
};

//get quantity
const getQuantity = (id) => {
    const quantityId = document.getElementById(id);
    const quantity = quantityId.value;
    return quantity;
};

//SET TOTAL AMOUNT FUNCTION
const totalAmount = (cartBtn, priceId, quantityId) => {
    document.getElementById(cartBtn).addEventListener("click", () => {
        const price = itemPrice(priceId);
        const quantity = getQuantity(quantityId);
        cartAmount("cartAmount", price, quantity);
    });
}

/*/^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\*\
                            DATABASE
\*\_______________________________________________________/*/

//ITEM - 1
countItems("addItems1", "countItems1", true);//count add Items
countItems("subItems1", "countItems1", false);// count sub items
totalAmount("addCart1", "price1", "countItems1");//set amount on cart
reaction("love1", "loveCount1");//love reaction
reaction("star1", "starCount1");//star reaction
//ITEM - 2
countItems("addItems2", "countItems2", true);//count add Items
countItems("subItems2", "countItems2", false);// count sub items
totalAmount("addCart2", "price2", "countItems2");//set amount on cart
reaction("love2", "loveCount2");//love reaction
reaction("star2", "starCount2");//star reaction
//ITEM - 2
countItems("addItems3", "countItems3", true);//count add Items
countItems("subItems3", "countItems3", false);// count sub items
totalAmount("addCart3", "price3", "countItems3");//set amount on cart
reaction("love3", "loveCount3");//love reaction
reaction("star3", "starCount3");//star reaction
