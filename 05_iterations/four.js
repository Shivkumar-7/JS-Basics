const coding  = ["js", "ruby", "java"]

const values = coding.forEach( (item) => {
  return item
})

console.log(values);

// forEach does not return value

const myNums = [1, 2, 3]

let newNums = myNums.filter( (num) => num < 4 )
// filter method  returns this is with call back function in one line

let newNums2 = myNums.filter( (num) => (
    num < 4
))

let newNums3 = myNums.filter( (num) => {
   num < 4
 return num
 // return needed as we use {}
})

console.log(newNums3);

// using for each
const arr = []

myNums.forEach( (num) => {
    if(num > 4){
        arr.push(num);
    }
})

console.log(arr);

