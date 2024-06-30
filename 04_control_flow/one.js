// control flow is also called as logic control.

// if-else
const temp = 32

if (temp === 32){
    console.log("temp less than 40");
} else{
    console.log("temp is greater than 40");
}
console.log(`if-else executed`);

// to check the condition we use <, >,<=, >=, ==, ===, !=, !== 
// lets see scope of variables there is two type of scope: 1) global scope and 2)block scope.
const score =200
if (score > 100){
    var power = "fly" // block level scope.
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); // to make this line also print we have to use "var" while declaring the variable coz "var makes the variable into global scope".

// and if you want to keep the variable to the block level declare it with "let".

// what is shorthand notation?
const balance = 1000
// if (balance >500) console.log(`done`); // this is called as implcit function "BUT DONT USE THIS KIND OF WRITING CODE"

// NESTING?
// it includes if-else nesting which includes examples like temp check, balance check, etc.

// let us see some real life example of NESTING:-
const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log(`Allow for the shopping`);
}
// THE ABOVE CONDITION WAS ABOUT && OPERATION

const loggedInFromGoogle = true
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`User Logged In`);
}

