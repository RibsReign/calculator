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
            operatorClicked = true;
            if (button.textContent === '=') {
                //alert(a + ' ' + operator + ' ' + b);
                pushResult();
            }
            else {
                operator = button.textContent;
            }


        }
        else {
            if (operatorClicked === true) {
                clearScreen();
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
    operatorClicked = false;
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
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/')
        return divide(a, b);
    else
        return 0;
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
    return a / b;
};
