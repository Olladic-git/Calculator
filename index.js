let firstNumber = '';
let secondNumber = '';
let sing = '';
let finish = false;

const integet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

const bringToScreen = document.getElementById('screen');

function clearAll () {
    firstNumber = '';
    secondNumber = '';
    sing = '';
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

    if (integet.includes(key)) {

        if(secondNumber === '' && sing === ''){
        firstNumber += key;
        bringToScreen.textContent = firstNumber;
        } else {
            secondNumber += key;
            bringToScreen.textContent = secondNumber;
        }
        console.log(firstNumber, secondNumber, sing);
        return;
    }

    if (action.includes(key)) {
        sing = key;
        bringToScreen.textContent = sing;
        console.log(firstNumber, secondNumber, sing);
        return;
    }
    
}

