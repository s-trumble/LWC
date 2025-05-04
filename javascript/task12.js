//refactoring
function printStarsFromPrompt(){
    let numberAsString = prompt("type a number:");
    let numberAsNumber = Number(numberAsString) ; 
    let stars = '';
    for(let i = 0; i < numberAsNumber ; i += 1){
        stars = stars + "*";
    }
    console.log(stars);
}

function sumOfNumbesr(){
    let numberAsString = prompt("Type a whole positive number: ");
    let numberAsNumber = Number(numberAsString);
    console.log(numberAsNumber, typeof numberAsNumber);
    let total = 0;
    for(let i = 1; i <= numberAsNumber ; i += 1){
    total += i;
    }
    console.log(total);
}

function fizzbuzz(){
    let toPrint = '';
    for(let i = 1; i <= 100 ; i += 1){
        if( i % 5 == 0 && i % 3 == 0){
            toPrint = 'FizzBuzz';
        } else if(i % 5 == 0){
            toPrint = 'Buzz';
        } else if(i % 3 == 0){
            toPrint = 'Fizz';
        } else {
            toPrint = i;
        }
        console.log(toPrint);
    }
}