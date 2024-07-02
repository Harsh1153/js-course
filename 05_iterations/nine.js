// Reduce method:- used while performing "SHOPPING CART FUNCTIONALITY". Also used in React and it is user supplier reducer.

const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc, curval) => {
    //console.log(`acc:- ${acc}, curval:- ${curval}`); // to check how acc and curval works.
    //return acc + curval
}, 0 ) // 0 after function is used to initially take acc as initial value.

//console.log(myTotal);
// the above method is used while implementing shopping cart functionality.

// will try to write the above code using arrow function:-
const newTotal = [1,2,3]
const total = newTotal.reduce( (acc, cur) => acc+cur , 0 )
console.log(total); 

// We can also use for-of , for-each, for-in, etc loops to perform the above activity.


// Many times there is array containing multiple objects and we have to add or do anything as ther are many methods available but "reduce" is simplest method to perform.
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);