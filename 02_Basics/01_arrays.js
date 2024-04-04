// ARRAY is a object type and we store the elements in the array by declaring the variable
const myArr = [0, 1, 2, 3, 4,5]
//console.log(myArr[2]);
// javascript arrays are resizable 
// INTERVIEW Q- idf we create array-copy-operation in javascript it create shallow copies and deep copies
// shallow copies- a shallow copy of an object whose properties share the same reference point it means JO BHI CHANGES HOGE TOH ORIGINAL ARRAY ME BHI CHANGES HOGE 
// deep copy- properties do not share the same reference

//const myHero = ["shaktiman", "naagraj"]
//const myArr2 = new Array(1,2,3,4)// in this automatically assign the square brackets to the numbers that is to the array
// we can also acsses the length of the array by .length and it also has different Prototype

// ARRAY METHODS

//myArr.push(6)
//myArr.pop()

//myArr.unshift(3)
//myArr.shift() // shift operation me koi value pass nahi karte

//console.log(myArr.includes(9)); // some functions in array gives the ans in true or false as output that is in boolean form such as include and other operations
//console.log(myArr.indexOf(9)); //it will give -1 as output coz the value is not present in the array and if the valuenis present in the array it will give the INDEX of that value given in the brackets.

//const newArr = myArr.join() // join operation adds all the elements of an array into a string, seperate by the specified seperator and it also convert the array to the STRING
// console.log(typeof newArr);
// console.log(myArr);
// console.log(newArr);

// slice and splice and INTERVIEW Q.about it

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3) // in slice last number is not included that is 3
console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1, 3) 
console.log("C ", myArr); // in this array C the portion 1,2,3 will be removed and will get the new array C
console.log(myN2); // AND ORIGINAL ARRAY WILL BE MANIPULATED

/* OUTPUT FOR SLICE AND SPLICE:-
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]
[ 1, 2, 3 ]
*/