// High Order Loops in Array:-these all are array specific loops.

// [{},{}] :- yaha pr objects ke upar loop lagana matlb kis chiz pr lagana hai loop

//lets see for of loop:-
const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}
// here num will store values present in the array , we read it as num of arrays.

// for strings:-
const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " "){
     continue   
    }
    //console.log(`Each character is ${greet}`);
}
// yaha pr greet will have store values of vaiable str ,we can also initialize it as greet of greetings.

// Maps:-
// Map apne aap me ek object hai. Holds key- value pair just like array. Also remembers the original insertion order of keys where objects not. No duplicates values present only unique values.

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United States Of America")
map.set('FR', "France")
// If we again enter india as a value it will not show in the output as it only shows unique values and in the sequence order.
//console.log(map);
// let us see how to apply for-of loop on map:-
for (const [key, value] of map) {
    //console.log(key);
    // It will give an output as in array form which conatains key-value pair.
    // To resolve it Destructure the array as shown below:- made changes in iteratable value i.e [key, value]

    console.log(key ,":-", value);
}

// Objects will not work in for-of loop it will give error so it dose not make any sense using map function for objects.

