///this is built into javascript
/*
function myFilter (toFilter, testFunction){
  let filtered = [];
  
  for(let element of toFilter){
    if(testFunction(element)){
      filtered.push(element);
    }
  }
  return filtered;
}
  */
let ages = [12,15,18,19,18,30,60,70];
let names = ["Steven", "Alex", "Igor", "Ashleigh"];

// let adults = myFilter(ages, (age) => age >= 18);
// let family = myFilter(names, (name) => (name === 'Steven' || name === 'Ashleigh'));
console.log('Adults: ' + ages.filter((age) => age >= 18));
console.log('Family: ' + names.filter((name) => (name === 'Steven' || name === 'Ashleigh')));
