/*
Task 15 - Mini Calculator

Create a calculator that can perform basic operations (add, subtract, multiply, divide) by calling specific helper functions 
based on an operation name. The user will input the word and then be asked for numbers.

Include add, subtract, multiply, and divide methods.
*/
function calculator(){
    let operation = prompt('What do you want to calculate? (add, subtract, multiply, divide)').toLowerCase();
    let number1 = Number(prompt('Number 1 :'));
    let number2 = Number(prompt('Number 2 :'));

    if(operation == 'add'){
        let result = add(number1,number2);
        printStatement(result);
    } else if (operation == 'subtract'){
        let result = subtract(number1, number2);
        printStatement(result);
    } else if (operation == 'multiply'){
        let result = multiply(number1, number2);
        printStatement(result);
    } else if (operation == 'divide'){
        let result = divide(number1, number2);
        printStatement(result);
    } else {
        console.log('Unspported operation. try again');
        calculator();
    }
}
function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function printStatement(result){
    console.log('Your result is ' + result);
}
calculator();