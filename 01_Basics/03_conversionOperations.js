//let score = "33aa" 
// it will give u not a number as op
// can check for null,undefined,harsh, true

 // string cannot be convert to Number so it will give you NAN

/*
console.log(typeof score)
console.log(typeof(score))
*/
// converting or intitalizing as number or any other data type

/*
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
*/

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

// CONVERTING to BOOLEAN:

let isLoggedIn = 1 // cam check for 0, true, 1, false, harsh

// converting to boolean

let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);

// 1 => true ; 0 => false
//"" => false
// "harsh" => true


// string conversion

let someNumber = 11

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);


