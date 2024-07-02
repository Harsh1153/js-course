const coding = ["js", "python", "java", "cpp", "ruby" ]


const values = coding.forEach( (item) => {
    //console.log(item);
    // return item
} )
//console.log(values);
// the above line of code tells us that if you store for-each loop in const variable and try to return any value that is item it will not retuen anything that is "undefined".

// filter operation:- filter bhi apne andar call back function leta hai.
// Reason to use filter operation is for-each aapko value return nahi karta, "so value return karni hai toh will make use of filter."

const nums = [1,2,3,4,5,6,7,8,9,10]

const newNum = nums.filter( (item) => item > 5 )
//console.log(newNum);

// if you add paranthesis i.e {} in arrow function so that will make a specific scope , it is also called as implicit return so in that case inside the function write return keyword and condition and if you dont open the scope then directly write the condition.
const num = [1,2,3,4,5,6,7,8,9,10]

const newNums = num.filter( (item) => {
   // return item <= 5
} )
//console.log(newNums);

// same above logic using for-each loop:-
const newNumber = []
num.forEach( (item) => {
    if (item <= 5) {
        newNumber.push(item)
    }
} )

//console.log(newNumber);
// can use any operation.


// Example of user favourite books selection:-
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);