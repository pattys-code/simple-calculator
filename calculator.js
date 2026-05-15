const current = document.querySelector('.current');
const numberBtns = document.querySelectorAll('.number');
const clearBtn = document.querySelector('.clear');
const resultBtn = document.querySelector('.result');
const operatorBtns = document.querySelectorAll('.operator');
let curr_number1 = '';
let curr_number2 = '';
let curr_operator = '';

// operators
function add () {
    return curr_number1 + curr_number2;
}
function subtract () {
    return curr_number1 - curr_number2;
}
function multiply () {
    return curr_number1 * curr_number2;
}
function divide () {
    return curr_number1 / curr_number2;
}

function round(number) {
  return Math.round(number * 1000) / 1000
}

function calculate () {
    curr_number1 = Number(curr_number1);
    curr_number2 =Number(curr_number2);
    if (curr_operator==='+') {curr_number1=add()}
    else if (curr_operator==='-') {curr_number1=subtract()}
    else if (curr_operator==='x') {curr_number1=multiply()}
    else if (curr_operator==='%') {curr_number1=divide()};
    curr_number1 = round(curr_number1);
    curr_number2 ='';
    curr_operator ='';
    current.textContent = curr_number1+curr_operator+curr_number2;
}

function clear () {
    curr_number1 = '';
    curr_number2 ='';
    curr_operator ='';
}

// numbers 
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (curr_operator==='') {
            curr_number1 += button.textContent;
        }
        else if (curr_operator!=='') {
            curr_number2 += +button.textContent;
        }
        current.textContent = curr_number1+curr_operator+curr_number2;
        console.log(curr_number1);
        console.log(curr_number2);
        console.log(curr_operator);
    })
})

//opeartors
operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        if (curr_number2!=='') {
            calculate();
        }
        if (curr_number1!=='') {
            curr_operator = button.textContent;
            current.textContent = curr_number1+curr_operator+curr_number2;
        }
        
        console.log(curr_number1);
        console.log(curr_number2);
        console.log(curr_operator);
    })
})

resultBtn.addEventListener('click', () => {
    if (curr_number1==='' || curr_number2==='' || curr_operator==='') {
        return;
    }
    if (curr_number1==='0' && curr_number2==='0' && curr_operator==='%'){
        current.textContent = 'You cannot divide 0 by 0. Try something else! :)';
        clear();
    }
    else {
        calculate();
        curr_number1 ='';
    }
})

clearBtn.addEventListener('click', () => {
    clear();
    current.textContent = curr_number1+curr_operator+curr_number2;
})




