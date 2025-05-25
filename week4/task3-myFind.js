// The find() method in JavaScript is a powerful and very useful array method. 
// It allows you to search for the first element in an array that satisfies a given condition. 
// If it finds such an element, it returns that element. If no element satisfies the condition, it returns undefined.
// array.find(callbackFunction(element, index, array), thisArg)


function myFind (toFind, testFunction){
    
  for(let i = 0; i < toFind.length; i++){
    let element = toFind[i];
    if(testFunction(element, i, toFind)){
        return element;
    }
  }
  return undefined;
}

let ages = [12,15,18,19,18,30,60,70];
let names = ["Steven", "Alex", "Igor", "Ashleigh"];

let firstAdultAge = myFind(ages, (age) => age >= 18);
console.log(firstAdultAge);
let firstAName = myFind(names, (name) => name.startsWith('A'));
console.log(firstAName);
