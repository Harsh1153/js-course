"use strict" //treat all js code as new newer version 

// alert(3 + 3) // it is run in browser , we are using nodejs not browser

console.log(3+ 3)

console.log("harsh")

let name= "harsh"
let age = 18
let isLoggedIn = false //boolean datatype

/*
number => 2 to the power 53
bigint
string => "" try to use double quotes
boolean => T or F
null => standalone value
undefined => let state; this is undefined value that is value is not assigned yet
symbol => unique

object => we can also called null as object 
*/

console.log(typeof "harsh") // string
console.log(typeof null) // object
console.log(typeof undefined) // undefined


// Two data types : Primitive and Non Primitive(Reference type) 

//******************* Reference type *******************

// stack (primitive): stack ke andar koi bhi ek chiz lege uska copy milta hai  , Heap (Non-primitive):heap me reference milta hai that is original value

// Example of Stack:
let myName = "harsh"

let petName = myName
petName = "harry"

console.log(myName);
console.log(petName);

// Example of Heap:
let user1 ={
    email: "user@google.com",
    upi: "user@ybl"

}

let user2 = user1
user2.email= "harsh@google.com"

console.log(user1.email);
console.log(user2.email);
