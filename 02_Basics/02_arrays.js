const marvel_heros = ["thor","Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // this line proves you that array can store anything in it also another array too.
//console.log(marvel_heros);
// to access the specific element frm the above array
//console.log(marvel_heros[3][2]);
// the above way is not a good way to merge the arrays!

//ANOTHER WAY TO MERGE:-
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
// SPREAD method to merge and the best way !
// this operator is usefull for combining more than 2 arrays.
const all_new_hero = [...marvel_heros,...dc_heros]
console.log(all_new_hero);

// FLAT :-
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// sometimes data comes in nodelist strings and onjects 
// so first we ask whether it is array or not:-
console.log(Array.isArray("harsh"));

//to convert to array :-
console.log(Array.from("harsh"));

//INTERESTING CASE OF KEY-VALUE PAIR in which it will not convert it directly to array you have to specify whether you have to convert key or value to array.
console.log(Array.from({name: "harsh"})); // and this will give you empty array as output.

// if you have a SET OF ELEMENTS use array.of so it will RETURN A NEW ARRAY FROM A SET OF ELEMENTS.(elements can be variables , arrays and anything )

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1,score2,score3));