
let summ = document.getElementById("summ")
let getReturn = document.getElementById("return")
let input = document.getElementById("moneyId")

let summNumber = 0
let inputNumber = 0

function addValue(buttonElement) {
    const btnValue = Number(buttonElement.value);
    summNumber += btnValue;
    summ.innerText = summNumber;
    console.log("Added value to summ:", btnValue);
}

function addMoneyValue(buttonElement) {
    let currentValue = parseInt(input.value, 10) || 0;
    input.value = currentValue +  Number(buttonElement.value);
    inputNumber = currentValue +  Number(buttonElement.value);
}

function returnMoney() {
     getReturn.innerText = Number(inputNumber - summNumber)
}

function reset() {
    getReturn.innerText = 0;
    input.value = 0;
    summ.innerText = 0;
}
