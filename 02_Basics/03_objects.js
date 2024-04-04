// there are 2 ways to declare objects literal and constructor!
// singleton- if we declare objects using constructor so it is called as SINGLETON! (Object.create)

// objects literals:- 
const mySym = Symbol("key1") // declaring symbol
const jsuser = {
    name:"harsh", // 0: "harsh"
    "full name" : "harsh shirole" ,// what if some variable is declared like this 
    [mySym]: "mykey1", // syntax to add symbol in object and thus it will given output of symbol datatype.
    age: 20,
    location: "Mumbai",
    email: "harsh@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["mon","sat"]
}
// in objects we can define the keys for the values but in array keys are fixed that are 0,1,2...

// HOW TO ACCESS OBJECTS!
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);

// how to use SYMBOL notation in objects
// EK SYMBOL LO USKO OBJECTS KE KEYS ME ADD KARO AND USKO PRINT KARO - INTERVIEW QUESTION!
// console.log(jsuser[mySym]);
// console.log(typeof mySym);

// object ko '.' notation se access karte ha!

// if you want to change the value of a key in the object 
jsuser.email = "aadi@gmail.com"

// if you want to FREEZE the object ;-
// Object.freeze(jsuser)
// console.log(jsuser);

// how to add functions in objects:-
// we can treat functions like variables

jsuser.greeting = function(){
    console.log("hey JS users!");
}
console.log(jsuser.greeting());
//console.log(jsuser.greeting); // this will just give [Function (anonymous)] as output that is just a function will be returned.

// jab bhi aapko same object ko reference karna hai so we have to use "this" so it will show you all the properties inside the object

jsuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsuser.greeting2());

/* REMEMBER:-
 there are multiple ways to access objects like '.', [ ]
*/