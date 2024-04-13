const user = {
    username: "Harsh",
    price: 1000,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // it will give you output as your current context of code 
    }
}
// this keyword refer to "current context" and here current context is the whole user object and there this key word is used to refer only that context.
// context ka matlb simple "values" variables kya values hold kr rahi hai
// user.welcomeMessage() // till here the context was same.
// user.username = "Aadi" // here se change the context.
// user.welcomeMessage()

// now we just log this it will give u an empty object
console.log(this);
// coz this node enviroment ke andar hai
// INTERVIEW:- browser ke andar global object windows object hai

// function ke andar this use nahi kar sakte it is only used in object
// function chai(){
//     let username ="Harsh"
//     console.log(this.username); // it will give u lot of global object values but if you try to access this.username it will give u "undefined" as output.
// }
// chai()

// const chai = function(){
//     let username ="Harsh"
//     console.log(this.username);
// }
// chai() // this function declaration will also not work.

// how we can access function using arraow function:
const chai = () => {
    let username ="Harsh"
    console.log(this);
}

// chai()

// pure arraow function :-

// Basic arraow function- explicit
// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
//`console.log(addtwo(3,4));

// Another way to define :- (implicit return- where u have to remove curly braces and return coz u directly telling in one line to add the nums)
// const addtwo = (num1,num2) =>  num1 + num2
const addtwo = (num1,num2) =>  (num1 + num2) // if we write round bracket we dont need to write return its useful in "react" and if we write {} we have to write return 
console.log(addtwo(3,4));