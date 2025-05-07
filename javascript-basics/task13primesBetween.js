/*
Task 12 - Prime Number Between

Write a program that asks the user to input two numbers (start and end) using prompt(). Print all prime numbers between these two numbers, inclusive. A prime number is divisible only by itself and 1.

Enter start number: 10
Enter end number: 20

Primes between 10 and 20:
11
13
17
19
*/

function primesBetween(){
    let start = Number(prompt('Enter start number: '));
    let end = Number(prompt('Enter end number: '));
    for(let i = start ; i <= end; i++){
        if(isPrime(i)){
            console.log(i);
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
primesBetween();