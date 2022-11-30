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

    // add(+) new deposit amount
    const newDepoAmount = prevDepoAmount + depoInput;

    //set deposit amount on display id
    depoAmountId.innerText = newDepoAmount;

    //clear deposit input value
    getdepoInputId.value = " ";
});
