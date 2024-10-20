// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3]

// here object means kis chij ke upr loop lgana h

for (const element of arr) {
 //   console.log(element);
}

const greetings = "Hello world!"

for(const greet of greetings){
  //  console.log(`Each char is ${greet}`);
}

// Maps

//map ->object

const map = new Map()
map.set('IN', "INDIA")
map.set(1, "INDI")

// console.log(map);

for (const key of map){
  //  console.log(key);
}

for(const [key,value] of map){
 //   console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NNF',
     game2: 'Spiderman'
}

// for of not used in object

// for in loop for object

for (const key in myObject){
  //  console.log(`${key} and value is ${myObject[key]}`);
}

for (const num in arr){
    console.log(arr[num]); // keys
}

for (const key in map){
    console.log(key); //not output as map are not iterable
}




