let a = 10
const b = 20
var c = 300

{}  //scope

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("inner", a);
}

console.log(a);
console.log(b);
console.log(c);
// c -> global avoid var

for(let i = 0; i < array.length; i++){
    const element = array[i];
}

function one(){
    const username = "hitesh"
    function two(){
        const web = "you"
        console.log(username);
    }
  //  console.log(web); //line by line execution
    two()
}

one()

console.log(addOne(5));
function addOne(num){
    return num + 1
}

//but now error occurs in this syntax as we are accessing addtwo before intialisation

addTwo(5)
const addTwo = function (num) {
    return num + 2
}
