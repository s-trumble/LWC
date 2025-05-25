let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

p.then((result) => {
  console.log(`Initial:  ${result}`);
  const multipliedResult = result * 2;
  console.log(`multiplied:  ${multipliedResult}`);
  return multipliedResult;
})
.then((result) => {
    console.log(`Chained:  ${result}`);
})
.catch((reject) =>{
    console.error(reject);
});
