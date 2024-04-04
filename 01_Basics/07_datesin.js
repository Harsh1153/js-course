let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")

//let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

 // if you want in yy/mm/dd
 //let myCreatedDate = new Date("2023-01-10")
//console.log(myCreatedDate.toLocaleString());

// but in india we follow dd/mm/yy
let myCreatedDate = new Date("10-01-2023")
console.log(myCreatedDate.toLocaleString());

//timestamps in date used in quizes or poll 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // we get a  value as output in miliseconds

// to get the time for that timestamp we use getTime() method which will give you the time 

console.log(myCreatedDate.getTime());
// if you want to convert into secons the milisec value
console.log(Math.floor(Date.now()/1000));

// ANOTHER WAY 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); 
console.log(newDate.getDay());

// full time likhna hai:-
//a= `${newDate.getDay()} and the time is `
//console.log(a);

// different properties of date
newDate.toLocaleString('default', {
    weekday: "long" // we can define more properties like this 
})