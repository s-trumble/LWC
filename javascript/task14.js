/*
Task 14 - Calculate Product Function

Define a function that takes two numbers as parameters and returns their product. 
Call the function. Define a function with a variable and a declaration
*/

function calculateProduct(num1, num2){
    let total = num1 * num2;
    return total;
}

let num1 = 5;
let num2 = 10;
let result = calculateProduct(num1, num2);
console.log(result);
