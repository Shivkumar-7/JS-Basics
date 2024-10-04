function sayMyName(){
    console.log("S");
    console.log("H");
    console.log('I');
    console.log("V");
}
// sayMyName()

// parameters

// function mulNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// let result = mulNumbers(3, "4") //arguments

//console.log(result); //undefined

function mulNumbers(number1, number2){

//   let result = number1 + number2
//   return result

  return number1 + number2
  // console.log("shiv")
}

mulNumbers()

console.log(3, null)

const result = mulNumbers(3, 5)
 
console.log(result);

// "",undefined = false

function logInUser(username = "sam"){
    //!username
   if(username === undefined){
     console.log("Please enter")
     return
   }
   return `${username} just logged in`
} 

logInUser("shivkumar")

console.log(logInUser("vhi"));

console.log(logInUser()); // undefined



