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
    return amountTotal;
};
// update balance
const updateBalance = (id, value) => {
    const balanceId = document.getElementById(id);
    const balanceValue = balanceId.innerText;
    const balanceAmount = parseFloat(balanceValue);
    balanceId.innerText = balanceAmount + value;
};

document.getElementById("deposit-btn").addEventListener("click", () => {
    // get input
    const depoInput = getInputValue("deposit-input");
    // update amount
    updateValue(depoInput, "deposit-amount");
    //update balance
    updateBalance("balance-amount", depoInput);
});

// withdraw

document.getElementById("withdraw-btn").addEventListener("click", () => {
    // get Input
    const withdrawInput = getInputValue("withdraw-input");

    const newWithdrawAmount = updateValue(withdrawInput, "withdraw-amount");

    //get balance id
    const balanceId = document.getElementById("balance-amount");
    const balanceText = balanceId.innerText;
    const prevBalanceAmount = parseFloat(balanceText);

    // update balance
    const newBalance = prevBalanceAmount - withdrawInput;

    balanceId.innerText = newBalance;
});
