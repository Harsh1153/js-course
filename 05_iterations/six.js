const coding = ["js", "python", "java", "cpp", "ruby" ]


const values = coding.forEach( (item) => {
    //console.log(item);
    return item
} )
console.log(values);
// the above line of code tells us that if you store for-each loop in const variable and try to return any value that is item it will not retuen anything that is "undefined".