// for-Each loop:-
const coding = ["js", "python", "java", "cpp", "ruby" ]
// to get the access of methods associated with loop can be accessible using coding.choose_name_of_method

coding.forEach( function (val){
    //console.log(val); // val array ke andar jo bhi content present hai usko lekr aayega aur print karega.
} )

// we can also use arrow function in for-Each loop :-
coding.forEach( (item) => {
    //console.log(item);
});

// If we write function separately and we want to call it using for-Each loop we can by:-
function printMe(item){
    //console.log(item);
}
coding.forEach(printMe)

// In for each item bass values he nahi leke aata array se it can also carry index, array containing.
coding.forEach( (item, index, array) => {
    //console.log(item, index, array);
} )

// As we have seen earlier in three.js there is array and inside it has multiple objects i.e [{}, {}, {}] hence it is used in for-Each loop.
const myCoding = [
    {
     langName: "JavaScript",
     fileName: "js"
    },
    {
    langName: "python",
    fileName: "py"
    },
    {
    langName: "C++",
    fileName: "cpp"
    }
] 
myCoding.forEach( (item) => {
    console.log(item.langName,":=", item.fileName); // item will give you access to the each object present in the array and the each object will be reffered as item.
} )