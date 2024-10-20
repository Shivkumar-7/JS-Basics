// for each  it is a high order function in which we give callback fn

const coding = ["js", "ruby", "java"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// can also use arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
  
// } )

const myCoding = [
    {
        lang: "java",
        file: "java"
    },
    {
        lang: "c++",
        file: "cpp"
    },
]

myCoding.forEach( (item) => {
  console.log(item.lang);
} )
