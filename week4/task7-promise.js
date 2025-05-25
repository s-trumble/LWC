let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(`Failed to load data`);
  }, 1000);
});

p.then((result) => {
  console.log(result);
})
.catch((reject) =>{
    console.log(reject);
});
