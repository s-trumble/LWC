function myFilter (agesToFilter, testFunction){
  let filteredAges = [];
  
  for(let element of agesToFilter){
    if(testFunction(element)){
      filteredAges.push(element);
    }
  }
  return filteredAges;
}
let ages = [12,15,18,19,18,30,60,70];

let adults = myFilter(ages, (age) => age >= 18);
console.log(adults);
