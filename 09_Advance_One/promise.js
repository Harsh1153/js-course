// Promise:- Koi bhi task diya hai voh abhi ke abhi queue me lagke complete nahi hoga , queue me laga hai task but turant complete nahi hoga. Promise is an object.

// Sometimes we just consume the promises:-
// First will see how to create the promises:-
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})
// Now we have done with the creation of Promise, Now we have to consume the Promise:- to consume will use ".then()" which has direct connection with the resolve. .then() ke andar will have one call back function and this function automatically will receive one argument like jo bhi creation me function hu aa hai uski value yaha return hogi.
promiseOne.then(function(){
    console.log('Promise is consumed') // now to connect then and resolve will have to call the resolve method then and only both are connected and creation of promise is consumed properly.
})

// Another way to define promise without variable declaration:-
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async Task 2')
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log('Async Tasc 2 resolved')
// })
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()
    }, 2000)
})

promiseTwo.then(function(){
    console.log('Async Tasc 2 resolved')
})


// Now will see how to pass a data as our then method returns the values so sometimes we may have to pass data with it and the data may be in the form of object, function or array:-
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Harsh", email:"harsh@gamil.com"})
    }, 1000)

})

promiseThree.then(function(user){
    console.log(user)
})

// How to return error by using catch method:-
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error ){
            resolve({username: "Aadi", password: "123"})
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
} ).then( (username) => {
    console.log(username);
} ).catch( (error) => {
    console.log(error);
} ).finally( () =>{
    console.log('Promise is Either Resolved or Rejected');
    // finally humesha run hoga chahe promise resolve ho ya reject.
} )


// Now it is important to nite that it is not necessary to always implement promise with .then or .catch there is another way to implement promise like async await in the case of database connection etc applications 
const promiseFive = new Promise(function(resolve, reject){
    let error = true
        if(!error ){
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS Went Wrong')
        }
}, 1000)

// Will implement promise by async , where async thode der wait karta hai function hone ka aur agar voh kaam hota hau tabhi he aage badhta hai varna vahi error dega but catch nahi handle nahi kar sakte but kahi cases me agar db connection hu aa he nahi hai to aage badhna nahi hai. 
async function consumePromiseFive(){
    // as we know promise ek object hai we will implement it as given below :-
    // const response = await promiseFive
    // console.log(response);
    // async await cannot handle errors directly BUT if there is no error then it will run to handle error will use try-catch method:-
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// How Fetch works:-
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() // yaha pr await likha taki response pending na rahe like tym na le .
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

// How to implement above fetch method in .then aur try-catch method:-
fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response // ye response ko handle karne aur ek .then() lagega. 
} ).then( (data) => {
    console.log(data);
} )
.catch( (error) => {
    console.log(error);
} ) 
// As we have directly fetched dont need to call any function.


