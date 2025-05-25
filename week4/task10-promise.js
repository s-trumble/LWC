let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Script completed`);
    }, 3000);
});
  console.log(`Promise in progress`);
  console.log(`Promise: ${p}`);

p.then((result) => {
  console.log(result);
})
.catch((reject) =>{
    console.error(reject);
});
