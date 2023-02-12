
//step-1:
document.getElementById('btn-deposit').addEventListener('click', function(){
//step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

//step-3:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousTotalDepositString = depositTotalElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

// step-4:
    const currentDepositTotal = previousTotalDeposit + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

//step-5:
    const totalBalanceElement = document.getElementById('balance-total');
    const previousTotalBalanceString =totalBalanceElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalanceElement.innerText = currentTotalBalance;

//step-6:
    depositField.value ='';
});