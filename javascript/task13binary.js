/*
Task 13 - Binary Conversion

Write a program that prompts the user for a positive integer using prompt(). Convert and print this number into its binary representation. You are not allowed to use built-in methods like toString(2) or similar. Implement the conversion manually using loops and arithmetic operations only.

Enter a number: 19
Binary representation: 10011
*/
function binaryConversion(){
    let userNumber = Number(prompt('Enter a positive number: '));

    let binary = '';
    while(userNumber > 0){
        //put number assessing to left of string. work out right to left
        binary = (userNumber % 2) + binary;
        userNumber = Math.floor(userNumber / 2);
    }
    console.log('Binary representation: ' + binary);
}

binaryConversion();