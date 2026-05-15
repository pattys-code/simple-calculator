const current = document.querySelector('.current');
const history = document.querySelector('.history');
const numberBtns = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const resultBtn = document.querySelector('.result');
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const multiplyBtn = document.querySelector('.multiply');
const divideBtn = document.querySelector('.divide');

// operators
function add (number1, number2) {
    return number1 + number2;
}
function subtract (number1, number2) {
    return number1 - number2;
}
function multiply (number1, number2) {
    return number1 * number2;
}
function divide (number1, number2) {
    return number1 / number2;
}

// buttons



console.log(multiply(0.2,5));