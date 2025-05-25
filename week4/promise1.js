let p = new Promise((resolve, reject) => {
  let a = true;
  if(a) {
    resolve(`Hello`);
  } else {
    reject(`Goodbye`);
  }
});

p.then((result) => {
  console.log(`Oh yeah, result is ${result}`);
})
.catch((error) => {
  console.log(`Oh no, error is ${error}`);
});
