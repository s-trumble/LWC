let toPrint = '';
for(let i = 1; i <= 100 ; i += 1){
  if( i % 5 == 0 && i % 3 == 0){
    toPrint = 'FizzBuzz';
  } else if(i % 5 == 0){
    toPrint = 'Buzz';
  } else if(i % 3 == 0){
    toPrint = 'Fizz';
  } else {
    toPrint = i;
  }
  console.log(toPrint);
}