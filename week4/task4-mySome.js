//The some() method in JavaScript is another powerful array method, similar in concept to find() but with a crucial difference in what it returns.

// What some() Does:

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value:

// true if the callback function returns a truthy value for any element in the array.
// false if the callback function returns a falsy value for all elements in the array.
// Key Characteristics:

// Returns a Boolean: Unlike find() which returns the element itself, some() only tells you if a match exists, not what the match is.
// Stops on First true: Similar to find(), some() will stop iterating and return true as soon as it finds an element for which the callback function returns true. It doesn't check the remaining elements.
// Does Not Modify the Original Array: some() is a non-mutating method.

function mySome (toSome, testFunction){
    
  for(let i = 0; i < toSome.length; i++){
    let element = toSome[i];
    if(testFunction(element, i, toSome)){
        return true;
    }
  }
  return false;
}

let ages = [12,15,18,19,18,30,60,70];
let names = ["Steven", "Alex", "Igor", "Ashleigh"];

let hasAdultAge = mySome(ages, (age) => age >= 18);
console.log(`has adults age ${hasAdultAge}`);
let has100YearOld = mySome(ages, (age) => age >= 100);
console.log(`has 100 year old ${has100YearOld}`);
let hasAName = mySome(names, (name) => name.startsWith('A'));
console.log(`has A name ${hasAName}`);
let hasBName = mySome(names, (name) => name.startsWith('B'));
console.log(`has B name ${hasBName}`);