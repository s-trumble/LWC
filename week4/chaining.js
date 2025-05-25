let people = [
  {name: "Steven", age: 30, country: "Australia"},
  {name: "Igor", age: 30, country: "Germany"},
  {name: "Ash", age: 30, country: "Australia"},
];

let australians = people.filter(person => person.country === 'Australia')
                        .map(person => person.name.toUpperCase());
console.log(australians);