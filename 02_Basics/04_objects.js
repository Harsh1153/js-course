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



// Destructing of Objects:- like in React will get an object we have to destructure it an give the value of it

const course = {
    coursename: "javaScript",
    price: 1000,
    courseinstructor: "Harsh"
}

// now we access the objects :-
//console.log(course.courseinstructor); // this is basic way 

// Another Way of Destructor is:
const {courseinstructor : instructor} = course // in this we have also change the name to instructor
console.log(instructor);

// how the above destructing use in "REACT"
// const navbar = ({company}) => { // so we dont write props.company in react we simply write inside '{}'
// }
// navbar (company = "harsh")

// whenever object is written inside {} that means destructing is done.


//****************** API *******************************

// jabhi aapko apna kaam kisi aur ke sir pr dalna hai usko API bolte hai 
// pehle API ki values xml me aati thi abhi JSON me aati hai json se api call hoti hai
// {
//     "name": "harsh",
//     "coursename": "javaScript",
//     "price":"free"
// }
// JSON are also written in [ ] arrays format
[
    {},
    {},
    {}
]