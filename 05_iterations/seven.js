// Map Operation:-
// Map me koi bhi condition ho return hoga.
const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNum = myNums.map( (item) => item + 10 )
//console.log(newNum);

// here also we can use for-each loop.

// Chaining:- In this we can use multiple methods together i.e .map().map().filter()
const newNums = myNums
                .map( (item) => item * 10 )
                .map( (item) => item + 1 )
                .filter( (item) => item >= 40 )

console.log(newNums);                


