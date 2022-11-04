let firstNumber = '';
let secondNumber = '';
let sign = '';
let exclusionSign = '';
let finish = false;
let maxNumber = '9999999999';

const integer  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];
const exclusion = ['%', '+/-']

const bringToScreen = document.getElementById('screen');

function clearAll () {
    firstNumber = '';
    secondNumber = '';
    sign = '';
    finish = false;
    bringToScreen.textContent = 0;
}


document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) {
        return;
    }

    if (event.target.classList.contains('ac')) {
        clearAll();
        return;
    }

    bringToScreen.textContent = '';

    const key = event.target.textContent;

    if (integer.includes(key)) {

        if(secondNumber === '' && sign === '') {
            if (firstNumber < maxNumber) {
            firstNumber += key;
            }
            showOutput(firstNumber);
        } else if (firstNumber !== '' && secondNumber !== '' && finish === true) {
            secondNumber = key;
            finish = false;
            showOutput(secondNumber);
        } else { 
            if (secondNumber < maxNumber) {
                secondNumber += key;
                }
            showOutput(secondNumber);
        }
        console.log(firstNumber, secondNumber, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        showOutput(sign);
        console.log(firstNumber, secondNumber, sign);
        return;
    }

    if (exclusion.includes(key)) {
        exclusionSign = key;
        if (exclusionSign === '%'){
            showOutput(exclusionSign);
            if (secondNumber !== '') {
                secondNumber = (firstNumber / 100) * secondNumber;
            } else if (firstNumber !== '' && secondNumber === '') {
                firstNumber = firstNumber / 100;
            }
        }

        if (exclusionSign === '+/-') {
            if (firstNumber !== '' && secondNumber === '') {
                firstNumber = firstNumber * -1;
                showOutput(firstNumber);
            } else if (firstNumber !== '' && secondNumber !== '') {
                secondNumber = secondNumber * -1;
                showOutput(secondNumber);
            }
        }
 
    }

    if (key === '=') {
        switch (sign) {
            case "+":
                firstNumber = (+firstNumber) + (+secondNumber);
                break;
            case "-":
                firstNumber = firstNumber - secondNumber;
                break;
            case "*":
                firstNumber = firstNumber * secondNumber;
                break;
            case "/":
                if (secondNumber === '0') {
                    showOutput('Помилка');
                    firstNumber = '';
                    secondNumber = '';
                    sign = '';
                    return;
                }
                firstNumber = firstNumber / secondNumber;
                break;
            case "%":
                firstNumber = firstNumber / 100;
        }

        if (firstNumber - Math.floor(firstNumber) !== 0) {
            firstNumber = Number(firstNumber).toFixed(2);
            showOutput(firstNumber);
            return;
        }

        finish = true;
        showOutput(firstNumber);
    }
    
}


// function formatNumber(number) {
//     // TODO
// }

function showOutput(result) {
    bringToScreen.textContent = result;
}

