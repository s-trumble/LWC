//disable prompt until ready to test
//https://codepen.io/bound20/pen/JiLno?turn_off_js=true
let numberAsString = prompt("Type a whole positive number: ");
let numberAsNumber = Number(numberAsString);
console.log(numberAsNumber, typeof numberAsNumber);
let total = 0;
for(let i = 1; i <= numberAsNumber ; i += 1){
  total += i;
}
console.log(total);

/*
//as one line without a loop
let total =  numberAsNumber * (numberAsNumber + 1) / 2;
*/
