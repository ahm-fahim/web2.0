// get Input value

const getInputValue = (id) => {
    const getId = document.getElementById(id);
    const getData = getId.value;
    const value = parseFloat(getData);

    // clear input value 
    getId.value = '';

    return value;
}

const updateValue = (value, id) => {
    const getId = document.getElementById(id);
    const getData = getId.innerText;
    // convert str to nums
    const getPrevAmount = parseFloat(getData);

    // update amount
    const amountTotal = getPrevAmount + value;

    //display amount
    getId.innerText = amountTotal;

    return amountTotal;
}


document.getElementById("deposit-btn").addEventListener("click", () => {
    
    // get input 
    const depoInput = getInputValue("deposit-input");

    // update amount
    const newDepoAmount = updateValue(depoInput, "deposit-amount");

    //get balance id
    const balanceId = document.getElementById("balance-amount");
    const balanceText = balanceId.innerText;
    const balanceAmount = parseFloat(balanceText);

    // set Balance amount
    balanceId.innerText = newDepoAmount;

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
