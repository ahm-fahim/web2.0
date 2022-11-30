// get Input value

const getInputValue = (id) => {
    const getId = document.getElementById(id);
    const getData = getId.value;
    const value = parseFloat(getData);

    // clear input value 
    getId.value = '';

    return value;
}


document.getElementById("deposit-btn").addEventListener("click", () => {
 
    const depoInput = getInputValue("deposit-input");

    // get deposit display id
    const depoAmountId = document.getElementById("deposit-amount");
    const depoAmountText = depoAmountId.innerText;
    // convert str to nums
    const prevDepoAmount = parseFloat(depoAmountText);

    // update (+) new deposit amount
    const newDepoAmount = prevDepoAmount + depoInput;

    //set deposit amount on display id
    depoAmountId.innerText = newDepoAmount;

    //get balance id
    const balanceId = document.getElementById("balance-amount");
    const balanceText = balanceId.innerText;
    const balanceAmount = parseFloat(balanceText);

    // set Balance amount
    balanceId.innerText = newDepoAmount;

});

// withdraw

document.getElementById("withdraw-btn").addEventListener("click", () => {

    const withdrawInput = getInputValue("withdraw-input");

    //get withdraw amount id
    const withdrawAmountId = document.getElementById("withdraw-amount");
    const withdrawAmountIdValue = withdrawAmountId.innerText;
    const prevWithdrawAmount = parseFloat(withdrawAmountIdValue);

    // update (+) withdraw amount
    const newWithdrawAmount = prevWithdrawAmount + withdrawInput;

    // set withdraw amount
    withdrawAmountId.innerText = newWithdrawAmount;

    //get balance id
    const balanceId = document.getElementById("balance-amount");
    const balanceText = balanceId.innerText;
    const prevBalanceAmount = parseFloat(balanceText);

    // update balance
    const newBalance = prevBalanceAmount - withdrawInput;

    balanceId.innerText = newBalance;

});
