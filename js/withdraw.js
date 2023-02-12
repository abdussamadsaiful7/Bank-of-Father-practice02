
//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
//step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousTotalWithdrawString = withdrawTotalElement.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

//step-4:
    const currentWithdrawTotal = previousTotalWithdraw + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

//step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount 
    balanceTotalElement.innerText = currentTotalBalance;

//step-6:
    
withdrawField.value = '';
});