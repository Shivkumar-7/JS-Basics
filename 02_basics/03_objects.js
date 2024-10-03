// two ways to make object
// >> by constructor -> singleton object << Object.create

// >> object literals -> object

const mySym = Symbol("key1")

const jsUser = {
    name : "shiv",
    // key : value
    //by default key -> string
    age : 20,
   [ mySym ]: "mmmm",
    "full name" : "ok",
    lastLoginDays : ["Monday", "Sat"]
}
// >> Object access
console.log(jsUser.age);
console.log(jsUser["lastLoginDays"]);
console.log(jsUser["full name"]);
// cannot acces full name by .
// now mySym will be as a string
console.log(jsUser.mySym);
console.log(typeof jsUser.mySym);
// to use as a symbol use [] 


