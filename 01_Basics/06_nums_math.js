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
console.log(hundreds.toLocaleString('en-IN'));

