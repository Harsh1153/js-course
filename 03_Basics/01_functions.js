// functions matlab jitna bhi aapne code likha hai usko ek package me store karke voh package kaha bhi use kar sakte hai 
// "function" apne aap me keyword hai
// if function_name ke sath () se likha toh voh function ka reference hota hai and code written inside it is printed

// Basic way of writing function and printing it:-
function saymyname() {
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
}
//saymyname()

// Adding Two Numbers:-
// function addTwoNum(num1,num2) {
//     console.log(num1 + num2)
// }
// addTwoNum(5,3) // here it is very necessary to check whether the type of num are number

// values written while defining a function are called as "PARAMETERS"
// values passed while executing a function are called as "ARGUMENTS"

// sometimes we execute the functions by declaring a variable , ex of it is given below :-
function addTwoNum(num1,num2) {
    const result = num1 + num2
    return result // here after the "return" statement nothing will be printed its a rule in js
    // Another way is we can directly write a code for printing addition of two num as return num1 + num2
}
const result = addTwoNum(5,3)
//console.log("Result is:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        // to avoid log statement after if loop to print will give return statement
        return

    }
    return `${username}, just logged in `
}
//console.log(loginUserMessage("Harsh")) // it is imp to print the function if not it will just pass the value to the function

// if just empty string is passed it will just give output as just logged in

// And if just function is written :-
console.log(loginUserMessage()); // undefined, just logged in - will be the output that maens values is not given or defined , we can add if loop to check that whether the vlues is defined or not .


// we can also write the if condition as if(!username){
    // same thing will happen }

// we can also give the default values for the defined function and while executing the function if we give any other value then it will override that default value
// function loginUserMessage(username= "harsh")

