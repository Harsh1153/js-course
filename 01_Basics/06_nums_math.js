const score = 100
console.log(score);
const balance = new Number(500)
console.log(balance);

// converting a number to STRING:
console.log(balance.toString().length);
// so as it is converted to string we can also use length method in the abve line of code


// toFixed method to convert it to fixed decimal number!
console.log(balance.toFixed(2));

// Precision method in which (priority jo hai decimal ke pehle milti hai and decimal ke baad bhi but value should be known to the you so use it carefully!):-
const newNUM = 1123.8928
console.log(newNUM.toPrecision(4));

//to specify number in indian hundreds
const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

//********************* Maths **************************

console.log(Math); // Math function is object which has lots of values inside it 

console.log(Math.abs(-4)); // abs is absolute value it changes the sign of -ve value to +ve 

// console.log(Math.round(4.8));
// console.log(Math.ceil(4.2)); // ceil function always chooses the maximum or we can say highest value
// console.log(Math.floor(4.9));
// console.log(Math.min(1,2,3,4));
// console.log(Math.max(5,6,7,8));

// Ramdom Function:
console.log(Math.random()); // Math.random gives you value between 0 & 1 that is values between 0.1 , 0.2 and so on
console.log((Math.random()* 10)+1); // now if we multiply the random function with 10 den it shift the values to the left side then it will give value as ziro so we add 1 in it.
console.log(Math.floor((Math.random()* 10)+1)); // this will give you value between 1-9

// sometimes we have to declare min and max case so for that will use the below formula:-

const min= 10
const max= 20
console.log(Math.floor(Math.random()* (max - min + 1) )+ min); // we have added 1 to avoid the zero as ans 