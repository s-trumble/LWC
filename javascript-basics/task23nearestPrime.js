enterNumber();

function enterNumber(){
    let userNumber = Number(prompt(`Enter a number: `));
    
    if ( userNumber < 3){
        console.log(`No smaller prime exists. Enter a larger number.`);
        enterNumber();
    }
    nearestPrime(userNumber);
}

function nearestPrime(number){
    for(let i = number - 1; i >= 2; i--){
        if(isPrime(i)){
            console.log(`Nearest prime number is: ${i}`);
            return;
        }
    }
}

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let j = 2; j <= Math.sqrt(num); j++){
        if(num % j === 0){
            return false;
        }
    }
    return true;
}