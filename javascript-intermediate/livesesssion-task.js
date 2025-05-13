const jsonData = `[
{"name": "Anna", "age": 21},
{"name": "Brian", "age": 16},
{"name": "Alex", "age": 18},
{"name": "Derek", "age": 15},
{"name": "Ella", "age": 12}
]`;

let printAdults = (jsonData) => {
  let parsedAdults = JSON.parse(jsonData);
  let adultsArray = [];
  let teenagersArray = [];
  for(let person of parsedAdults){
    if(person.age >= 18){
      adultsArray.push(person);
    }
    if(person.age >=13 && person.age <= 19){
      teenagersArray.push(person);
    }
  }
  console.log("Adults: " + JSON.stringify(adultsArray));
  console.log("Teenagers: " + JSON.stringify(teenagersArray));
}

printAdults(jsonData);
