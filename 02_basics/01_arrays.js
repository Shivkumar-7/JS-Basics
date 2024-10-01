const myArr = [0, 1, 2, 3, 4, 5]
//Shallow copy {array is this type of object} {by reference}
const myHeros = ["shaktimaan", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4)

//Array methods

myArr.push(6)
console.log(myArr);
myArr.pop()
myArr.unshift(9) //add in front not optimized
myArr.shift()  //remove front front

console.log(myArr.includes(9));
console.log(myArr.indexOf(10));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

// slice, splice
console.log("A ", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("c ", myArr);
console.log(myn2);
