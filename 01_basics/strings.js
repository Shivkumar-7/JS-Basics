const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivkkk')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
// only slice give for both neg(rev) and pos results.
const anotherString = gameName.slice(-5,4)
console.log(anotherString);
const newStringOne = " shiv "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shiv.com/shiv%20cc"

console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('cc'));

console.log(url.split('/'));
 

