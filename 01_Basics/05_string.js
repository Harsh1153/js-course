// there no such issue to write strings in " " or ''

const name = "harsh"
const repoCount = 50
// Moden way to concatenate the string : using ` `
console.log(`My name is ${name} and my repo count is ${repoCount}`);

// Another way to define strings:
const gameName = new String("harsh-fc-com") 
// new is a keyword and string invoke object inside the constructor that is the value 

// string is object in above ex: bgmi is object that is key-value pair

// to accsse key-value pair 
console.log(gameName[0]);
console.log(gameName.__proto__);

// lets see more methods of strings 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
// to identify the character is at which position 
console.log(gameName.indexOf('m'));
// substring ex given below
const newString = gameName.substring(0,3) // it will start with 0 always and end number is not accessed
console.log(newString);

// to access slice method:
let anotherString = gameName.slice(-4,2)
console.log(anotherString);


// TRIM method:
const newString1 = "    harsh  "
console.log(newString1.trim());
console.log(newString1);

// url method or replace method of string:
url = "https://harsh.com/harsh%20shirole"
console.log(url.replace('%20','-'));

// INCLUDE method :
console.log(url.includes('harsh'));

// SPLIT method: (seperator,limit)
console.log(gameName.split('-'));


