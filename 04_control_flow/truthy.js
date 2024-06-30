// falsy values:- false, 0, -0, BigInt 0n, "", null, undefined, NaN.
// truthy values:- "0", 'false', " ", [], {}, function(){}.

// Now if we directly assign values to the variable insted of 'true' or 'false' values, the values will be either "truthy" or "falsy" values. 

const userEmail = []

if(userEmail){
    console.log("Got user email");
} else {
    console.log(`Dont have user email`);
}
// to check the array while assigning as value to the variable:-
if (userEmail.length === 0) {
    console.log(`Array is empty`);
}
// if condition:- in this we check that whether the assigned array is of array data type and if it is then call its length property to 0, i.e 0===0.

// WE CAN CHECK FOR EMPTY OBJECTS:-
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log(`Object is empty`);
}
// in this we directly call the defined object as Object.keys(emptyObj) and .keys make it array with the keys and as it become array call it with length property and assign it to 0. Hence It become "Empty Object".

// NOTE FOR INTERVIEW:-
// COMPARISON WITH EQUALITY OPERATOR:-
// false == 0 --> true
// false == '' --> true
// 0 == '' --> true


// Nullish Coalescing Operator (??): It works on two keywords which are:- null & undefined.
// in this if we want values from db and we only want a single value not other assoiciated values in this case this Nullish Coalescing Operator is used.
let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10 
// in this case if null value comes it will check for the safety that is if null assigned hai but koi aur bhi value aa gai hai toh assign that value, in this case it is 10
//val1 = undefined ?? 15 
val1 = null ?? 10 ?? 20
// in the above line it will go with the first value after null value , that is 10 in this case.
console.log(val1);

// Terniary operator! Working is as shown below:-
// condition ? true : false
const price = 100
price <= 80 ? console.log(`less than 80`) : console.log(`more than 80`)