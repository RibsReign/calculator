"use strict";
let a = 0;
let b = 0;
let operator = null;

const screenText = document.querySelector('#screen');
const buttonListener = document.querySelectorAll('.number, .control');
buttonListener.forEach(button => {
    button.addEventListener('click', () => {
        alert("Button Clicked!");
        screenText.textContent = '1234';
    });
});
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
