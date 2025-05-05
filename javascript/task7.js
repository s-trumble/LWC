/*
Ask the user to enter numbers using prompt. Keep asking until they enter 0. When they do, print the sum of all previously entered numbers.

Enter a number: 3  
Enter a number: 7  
Enter a number: -2  
Enter a number: 0
Sum is: 8
*/

let sum = 0;
number();
function number(){
    let userNumber = Number(prompt('Enter a number: '));
    
    if(userNumber === 0){
        console.log('Sum is: ' + sum);
    } else{
        sum += userNumber;
        number();
    }
}




