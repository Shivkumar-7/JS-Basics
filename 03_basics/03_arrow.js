const user = {
    username: "hitesh",
    price: 999,

// this use to refer to current context in {}

    welcomeMessage: function() {
    console.log(`${this.username}, welcome `); 
    console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this); {} ->empty as we in node environment  but in console we have window object in browser so not empty()

// function chai(){
//     let username = "shiv"
//     console.log(this);
//     console.log(this.username);
//     // not use in function
// }

// chai()

// () => {}  arrow function

const chai = () => {
    let username = "shiv"
    console.log(this);
  //now this is empty {} object in arrow function
}

chai()

// const addTwo = (num2, num1) => {
//     return num1 + num2
// }

// console.log(addTwo(4,6));

// const addTwo = (num1, num2) => num1 + num2 

 //implicit return 

// const addTwo = (num1, num2) => (num1, num2)

// agr {} use kiye then return must use if () this then not return  

const addTwo = (num1, num2) => ({username: "shiv"})

// returning object

console.log(addTwo(3,5));


