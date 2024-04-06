// objects ko singlton kaise karte hai with the help of constructor;-
//const tinderUser = new Object() // this is SINGLETON OBJECT 
const tinderUser1 = {} // And this is NON_SINGLETON OBJECT
// the above two lines of code are the similar way to declare objects BUT 

tinderUser1.id = "123abc"
tinderUser1.name = "sammy"
tinderUser1.isLoggedIN = "false"

//console.log(tinderUser);
//console.log(tinderUser1);

// in above example of objects we see how to store objects inside objects:-
const userInfo = {

email: "sammy@gmail.com",
fullname: {
    userfullname:{
        firstname:"harsh",
        lastname: "shirole"
    }
}
}

//console.log(userInfo.fullname.userfullname.firstname);

// for optional training if the element is present or not using ? after the variable name 

// how to combine objects :-

const obj1 = {1:"A" , 2:"B"}
const obj2 = {3:"C", 4:"D"}

//const obj3 = Object.assign({}, obj1,obj2)
// Another way to combine:-
const obj3 = {...obj1,...obj2} // use this syntax all the tym.
console.log(obj3);

// when values come from Database:-
// IT will come in the form of Array of Objects.
const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
]

// we will print a value or loopthrough :-
users[1].email
console.log(users);
console.log(tinderUser1);

console.log(Object.keys(tinderUser1));
// in the above line 60 we take keys of object tinderuser1 and we get output of datatype [ 'id', 'name', 'isLoggedIN' ] that is "array" we can loop on it and etc things we can do 
// Also we can get values of that keys:-
console.log(Object.values(tinderUser1));
console.log(Object.entries(tinderUser1));

// many tymes we try to loopthrough but sometimes the values are not present
console.log(tinderUser1.hasOwnProperty('isLoggedIN'));
// hasOwnProperty
// Determines whether an object has a property with the specified name.

