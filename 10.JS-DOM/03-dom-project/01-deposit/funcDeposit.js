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
const updateBalance = (id, value, sum) => {
    const balanceId = document.getElementById(id);
    const balanceValue = balanceId.innerText;
    const balanceAmount = parseFloat(balanceValue);
    if (sum == true) {
        balanceId.innerText = balanceAmount + value;
    } else {
        balanceId.innerText = balanceAmount - value;
    }
};

//warning function
const warning = (id) => {
    let warningText = document.createElement("p");
    warningText = "Sorry! Your input amount wasn't correct!";
    document.getElementById(id).innerText = warningText;
};

document.getElementById("deposit-btn").addEventListener("click", () => {
    const depoInput = getInputValue("deposit-input"); // get input
    if (depoInput > 0) {
        updateValue(depoInput, "deposit-amount"); // update amount
        updateBalance("balance-amount", depoInput, true); //update balance
    } else {
        warning("dWarning");
    }
});

// withdraw

document.getElementById("withdraw-btn").addEventListener("click", () => {
    const balanceId = document.getElementById("balance-amount");
    const balanceText = balanceId.innerText;
    const totalBalance = parseFloat(balanceText);


    const withdrawInput = getInputValue("withdraw-input"); // get Input
    if (withdrawInput > 0 && withdrawInput <= totalBalance ) {
        updateValue(withdrawInput, "withdraw-amount"); //update withdraw amount
        updateBalance("balance-amount", withdrawInput, false); //update balace
    } else if (withdrawInput > totalBalance) {
        let emtyBalance = document.createElement('p');
        emtyBalance = "amount too low!";
        document.getElementById("emtyBalance").innerText = emtyBalance;
    } else {
        warning("wWarning");
    }
    
});
