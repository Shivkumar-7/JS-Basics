const userEmail = "shiv"
if(userEmail){
    console.log("YES");
}

// // falsy values 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {} // object, function() {}

const array = []

if(array.length === 0){
    console.log(`empty`);
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
  console.log("empty object");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
console.log(val);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Yes") : console.log("more")


