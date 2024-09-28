const num = 400
console.log(num);

const balance = new Number(100)
console.log(balance);
//same bss balance ek number wala object h

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber1 = 23.988
const otherNumber2 = 123.988
const otherNumber3 = 1232.988
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));
console.log(otherNumber3.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// *********************** Maths ****************************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.9));

console.log(Math.min(1,2,3,4));
console.log((Math.random()*10) + 1);  //random() gives value between [0,1]
console.log(Math.floor(Math.random()*10) + 1);
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min); // [10,20]
