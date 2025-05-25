let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`Data loaded`);
  }, 2000);
});

p.then((result) => {
  console.log(`${result}`);
});
