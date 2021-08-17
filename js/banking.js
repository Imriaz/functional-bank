function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const amountValue = inputField.value;
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, inputAmount) {
    const inputTotal = document.getElementById(totalFieldId);
    const previousInputTotal = inputTotal.innerText;
    const newInputTotal = parseFloat(previousInputTotal) + parseFloat(inputAmount);
    inputTotal.innerText = newInputTotal;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    return previousBalanceTotal;
}

function updateBalance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceTotal = balanceTotal.innerText;
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(inputAmount);
        balanceTotal.innerText = newBalanceTotal;
    }

    else {
        const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(inputAmount);
        balanceTotal.innerText = newBalanceTotal;
    }
}

//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');

    if (newDepositAmount > 0) {
        //update deposite total
        updateTotalField('deposit-total', newDepositAmount);

        //update account balance
        updateBalance(newDepositAmount, true);
    }

});

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //Get withdraw amount
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = parseFloat(getCurrentBalance());
    if (newWithdrawAmount > 0 && (newWithdrawAmount < currentBalance)) {
        //set withdraw total
        updateTotalField('withdraw-total', newWithdrawAmount);

        //update balance
        updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        console.log("You Can Not Withdraw more then your current balance.")
    }
});