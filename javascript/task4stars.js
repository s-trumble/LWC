let numberAsString = prompt("type a number:");
let numberAsNumber = Number(numberAsString) ; 
let stars = '';
for(let i = 0; i < numberAsNumber ; i += 1){
  stars = stars + "*";
}
console.log(stars);