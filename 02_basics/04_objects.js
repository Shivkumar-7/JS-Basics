// const tinderUser = new Object() //singleton object
const tinderUser = {} // non - singleton object

tinderUser.id = "132a"
tinderUser.name = "shiv"

const regularUser = {
    email: "gh.@gmail.com",
    fullname: {
        userFullName:{
            firstName: "shiv"
        }
    }
}

console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
  {
    id: 1,
    email: "hh@gmail.com"
  },
  {

  },
  {

  }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));

//destructuring

const course = {
    courseName: "js in hindi",
    price: "99",
}

//course.price

const {price: p} = course

console.log(p);

//json api ...json formatter
// {
//   "name": "shiv",
//   "course": "1"
// }

// [
//     {},
//     {},
//     {}
// ]