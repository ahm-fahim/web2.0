document.getElementById("deposit-btn").addEventListener("click", () => {
    // get deposit amount
    const getdepoInputId = document.getElementById("deposit-input");
    const depoInputText = getdepoInputId.value;
    // convert str to nums
    const depoInput = parseFloat(depoInputText);

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
    balanceId.innerText = balanceAmount + depoInput;

    //clear deposit input value
    getdepoInputId.value = " ";
});

// withdraw

document.getElementById("withdraw-btn").addEventListener("click", () => {
    //get withdraw amount id
    const withdrawInputId = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInputId.value;
    const withdrawInput = parseFloat(withdrawInputText);

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


    //clear withdraw input
    withdrawInputId.value = "";
});
