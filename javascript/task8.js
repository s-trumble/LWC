/*Task 8 - Multiplication table

Ask the user for a number. Then print its multiplication table from 1 to 10.

Enter a number: 4  
4 x 1 = 4  
4 x 2 = 8  
...  
4 x 10 = 40
*/

let userNumber = Number(prompt('Enter a number: '));

for(let i = 1; i <= 10; i++){
    console.log(userNumber + ' x ' + i + ' = ' + userNumber * i);
}