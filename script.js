"use strict";
let a = '';
let b = '';
let operator = null;
let operatorClicked = false;
let numberPair = [];
let initialize = false;
let numberSwitch = 'a';
let addUp = false;
const screenText = document.querySelector('#screen');
const buttonListener = document.querySelectorAll('.number, .control');
buttonListener.forEach(button => {
    button.addEventListener('click', () => {
        if (isNaN(button.textContent)) {
            if (numberSwitch === 'a' && operatorClicked === false && addUp === false) {
                numberSwitch = 'b';
            }
            else if (numberSwitch === 'b' && operatorClicked === false) {
                addUp = true;
            }
            if (addUp == true && b !== '') {
                pushResult();
            }
            //alert('I AM ON ' + numberSwitch + a + ' ' + operator + ' ' + b);
            /*             if (button.textContent === '=') {
                            //alert(a + ' ' + operator + ' ' + b);
                            pushResult();
                        } */
            if (button.textContent !== '=' || button.textContent !== 'C') {
                operator = button.textContent;
            }
            operatorClicked = true;
            if (button.textContent == 'C') {
                clearScreen();
                a = '';
                b = '';
                operatorClicked = false;
                addUp = false;
                numberSwitch = 'a';
            }


        }
        else {
            if (operatorClicked === true) {
                clearScreen();
                operatorClicked = false;
            }
            if (initialize === false) {
                initialize = true;
                screenText.textContent = '';
            }
            screenText.textContent += button.textContent;
            if (numberSwitch === 'a') {
                a += button.textContent;
            }
            else if (numberSwitch === 'b') {
                b += button.textContent;
            }
            // /                numberPair = [a, b];
            //alert(a + ' ' + b);
        }
    });
});
function clearScreen() {
    screenText.textContent = '';
}

function pushResult() {
    screenText.textContent = operate(Number(a), Number(b), operator);
    numberPair.push(a, b);
    //alert(numberPair);
    a = screenText.textContent;
    b = '';
    operator = null;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 0;
    }
}

console.log(operate(10, 2, '+'));
function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return "You think you're sooo funny."
    }
    return a / b;
};
