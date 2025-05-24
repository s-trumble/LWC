//The every() method in JavaScript is an array method that checks if all elements in an array pass a test implemented by a provided callback function.
// Think of it as answering the question: "Do all elements in this array satisfy this condition?"
// Key Characteristics of every():
// Returns a Boolean: every() always returns a boolean value:
// true if every single element in the array for which the provided callback function returns a truthy value.
// false if even one element fails the test (i.e., the callback returns a falsy value for that element).
// Short-Circuits: It's efficient because it stops iterating as soon as the callback function returns false (or a falsy value) for an element. There's no need to check further if one element already failed the "all" condition.
// Doesn't Modify the Original Array: Similar to find() and some(), every() does not change the array on which it is called.
// Callback Function: It takes a callback function as an argument, which is executed for each element. This callback function can take up to three arguments: 

function myEvery (toEvery, testFunction){
    
  for(let i = 0; i < toEvery.length; i++){
    let element = toEvery[i];
    if(!testFunction(element, i, toEvery)){
        return false;
    }
  }
  return true;
}

let ages = [12,15,18,19,18,30,60,70];
let names = ["Steven", "Alex", "Igor", "Ashleigh"];

let allAdults = myEvery(ages, (age) => age >= 18);
console.log(`All adults? ${allAdults}`);
let lessthan100YearOld = myEvery(ages, (age) => age <= 100);
console.log(`All less than 100? ${lessthan100YearOld}`);
let nameStartsWithA = myEvery(names, (name) => name.startsWith('A'));
console.log(`All start with A ${nameStartsWithA}`);
let nameLengthAtLeast3 = myEvery(names, (name) => name.length >= 3);
console.log(`Length at least 3 ${nameLengthAtLeast3}`);