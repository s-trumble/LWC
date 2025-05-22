// Task 1 - Map
// Create myMap function that will work the same way as the map function. Google all the necessary information on how the map function works.

/*
Here's a breakdown of what it does:

Creates a New Array: The most crucial aspect of map() is that it always returns a brand new array. It does not modify the original array. This is a key distinction from methods like forEach(), which iterates but doesn't return a new array.

Applies a Callback Function to Each Element: You provide map() with a callback function. This callback function is executed once for every element in the original array.

Populates the New Array with Return Values: For each element, whatever value your callback function returns will become an element in the new array that map() creates.
*/

function myMap(array, functionToApply)  {
    let newArray = [];
    for(let element of array){
        let transformedElement = functionToApply(element);
        newArray.push(transformedElement);
    }
    return newArray;
}

let numbers = [1,5,10];
console.log('My function: ' + myMap(numbers, (number) => number * 2));
//comparison
let doubleNumbers = numbers.map(number => number * 2);
console.log('inbuilt map: ' + doubleNumbers);
