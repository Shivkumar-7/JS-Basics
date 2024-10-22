//reduce method

const arr = [1, 2, 3]

const initialVal = 0
// with arrow func
const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,initialVal
);

const sum2 = arr.reduce( (acc,curr) => acc+curr, 0)

// without arrow func
const sum1 = arr.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(sum1);
