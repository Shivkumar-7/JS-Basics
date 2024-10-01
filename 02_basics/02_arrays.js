const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["batman", "superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heors = [...marvel_heros, ...dc_heros]
console.log(all_new_heors);

const another_array = [1, 2, 3, [4, 5], 7, [3, [4, 4, 6 , 7]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shiv"));
console.log(Array.from("kumar"));
console.log(Array.from({name:"shiv"})); //!imp

let score1 = 100
let score2 = 200
console.log(Array.of(score1,score2));




