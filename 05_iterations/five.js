const myNums = [1, 2, 3, 4]

const newNums = myNums.map( (num) =>{ return num + 10})
console.log(newNums);

// filter only return condition true values not same in map

// Chaining

const nums = myNums
       .map((num) => num * 10)
       .map((num) => num + 1)
       .filter( (num) => num >= 12)

console.log(nums);