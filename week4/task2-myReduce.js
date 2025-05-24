//reduce()
//Purpose: reduce() is used to condense an array into a single value by applying a function that accumulates a result across the array's elements. It's incredibly versatile for tasks like summing numbers, flattening arrays, counting occurrences, or building complex objects from array data.

// How it Works (The Accumulator):

// It takes a "reducer" callback function as its first argument.
// This reducer function receives an accumulator and the currentValue of the array element being processed.
// The accumulator holds the result of the previous callback invocation. In the first call, the accumulator is either the initialValue you provide (if any) or the first element of the array.
// The reducer function returns the new value of the accumulator for the next iteration.
//array.reduce(callbackFn(accumulator, currentValue, currentIndex, array), initialValue)



function myReduce(array, callbackFunction, initialValue){

    let accumulator = initialValue;
    
  
    for(let i = 0; i < array.length; i++){
        let element = array[i];
        accumulator = callbackFunction(accumulator, element);
    }
    return accumulator;
}
const numbers = [1,2,3,4,5,6];
console.log(myReduce(numbers, (acc, num) => acc + num, 0));

const words = ['apple','banana','carrot'];
console.log(myReduce(words, (acc, word) => acc + word, ''));

const arrays = [[1, 2], [3, 4], [5, 6]];
console.log(myReduce(arrays, (acc, array) => acc.concat(array), []));