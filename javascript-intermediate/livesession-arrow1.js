function sayHi(name) {
    console.log(`Hi my name is ${name} `);
}

console.log(sayHi("Steven"));

//re work as:

let sayHi = (name) => {
    return `Hi my name is ${name}`;
}

console.log(sayHi("Steven"))

//simplify further


const sayHi = name => `Hi my name is ${name}`;
console.log(sayHi("Steven"))

//timer

setTimeout(() => {
    console.log(`Hi after 3 sec`);
}, 3000);
