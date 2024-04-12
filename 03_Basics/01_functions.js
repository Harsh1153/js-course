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

// "function ke naam humesha aise dena jisko padhke samje ki function kya kar rah hai"

// to add multiple values in the cart and add them in one array or keep them together we use "rest or spread operator"
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,2000,5000));
// the val1 and val2 will get the first two values of the cart and rest all the items will be printed
// It gives output for the above code and this is what the use of rest operator - [ 200, 300, 400, 2000, 5000 ]


// Object ko function me kaise pass karte hai and uska use :-
const user = {
    userName: "Harsh",
    price: 1000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

//handleObject(user) // function ko call karke and object pass kiya which is necessary
// we can also directly pass the object while function executing.
handleObject({
    userName: "Aadi",
    price: 1000
})
// "type safety check karna imp hai jo bhi value pass kar rahe hai uska data type object hai ki nahi and also jo bhi elements extract kar rahe hai voh object me avail hai kya which is also imp to check for that purpose typeScript  is imp!"

// Now will check how we define function to get the value of array and execute it :-
const myArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myArray));
// we can also directly declare array while function executing:-
console.log(returnSecondValue([100,200,400,500]));
