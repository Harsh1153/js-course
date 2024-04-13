// dont use var for declaring variables 
//var c= 300
let a=100
if(true){
    let a= 10
    const b= 20
    var c= 30
    //console.log(`inner a: `,a);
}
 console.log(a);
// console.log(b);
//console.log(c);

// windows me global scope alag hai and terminal me node ke sath jo likhte hai uska scope alag hai

// closures for interview - DOM (document object model) 

// let us see nested function in which "child function parent ke variables ko access kar sakte hai"
function one(){
    const userName = "Harsh"
    
    function two(){
        const website = "Google"
        console.log(userName); // parent function se value lega.
    }
    //console.log(website); // print nahi hoga coz block function end ho rah hai that scope ke bahr likha hai
    two()
}
one()

// above same condition will check with the 'if' condition:-
if (true) {
    const username = "Aadi"
    if (username === "Aadi") {
        const website = " youtube" // concat kar rahe hai to sapace dena hoga
        //console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

// ***************** Interesting ***********************

console.log(addone(5))
function addone(num) {
    return num + 1
}



// this is another type of function declaration in which we store a function in a variable.
const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))
// but in this if we call function above defined function it will give error that is we cannot access the function before the function declaration.