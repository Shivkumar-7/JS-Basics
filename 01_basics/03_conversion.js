let score="33a"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumer);

//"33"=>33;
//"33abc"=>NaN not an number
// true=>1
// null=>0
// undefined=>NaN
 
let isLoggedIn="shiv"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>true; 0=>false 
//""=>false; "shiv"=>true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

let value = 3
let negvalue = -value
console.log(negvalue);

let str1 = "shiv"
let str2 = "kumar"
console.log(str1 + str2)

console.log("1"+ 2);
console.log("2" + 1);
console.log("2" + "1");
console.log("1" + 2 + 2);
console.log(1 + 1 + "2");

console.log(true);
console.log(+true);
console.log("");
console.log(null);
console.log(+"");

console.log("2" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//equality check == and comparisons < > >= <= work differently , comparisons convert null to 0.

// Primitive data Types {call by value}
// 7 ->String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference type (Non primitive)
//Array, Objects, Functions

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id==anotherId);

const heros = ["shaktiman", "nagraj", "doga"];
let obj = {
    name: "shiv",
    age: 20,
}

const myFunction = function(){
    console.log("karo");
}

//stack (primitive data type) call by value

//Heap (Non primitive data type) call by reference

let userOne = {
    email: "user.google",
    upi: "aa",
}

let userTwo = userOne
userTwo.email = "reus.google"

console.table(userOne);

