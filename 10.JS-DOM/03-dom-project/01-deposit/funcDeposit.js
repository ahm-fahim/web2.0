// get Input value
const getInputValue = (id) => {
    const getId = document.getElementById(id);
    const getData = getId.value;
    const getValue = parseFloat(getData);
    getId.value = ""; //clear input value
    return getValue;
};
// update data
const updateValue = (value, id) => {
    const getId = document.getElementById(id);
    const getData = getId.innerText;
    const getPrevAmount = parseFloat(getData);
    const amountTotal = getPrevAmount + value;
    getId.innerText = amountTotal; // set display data
};
// update balance
const updateBalance = (id, value,sum) => {
    const balanceId = document.getElementById(id);
    const balanceValue = balanceId.innerText;
    const balanceAmount = parseFloat(balanceValue);
    if (sum == true) {
        balanceId.innerText = balanceAmount + value;
    } else {
        balanceId.innerText = balanceAmount - value;
    }
};

document.getElementById("deposit-btn").addEventListener("click", () => {
    // get input
    const depoInput = getInputValue("deposit-input");
    // update amount
    updateValue(depoInput, "deposit-amount");
    //update balance
    updateBalance("balance-amount", depoInput, true);
});

// withdraw

document.getElementById("withdraw-btn").addEventListener("click", () => {
    // get Input
    const withdrawInput = getInputValue("withdraw-input");
    //update withdraw amount
    updateValue(withdrawInput, "withdraw-amount");

    //update balace
    updateBalance("balance-amount", withdrawInput, false);
});
