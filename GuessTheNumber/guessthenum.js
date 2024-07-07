// Lets first:- Generate Random Number.
const randonNumber = parseInt(Math.random()*100 + 1)
// action submit hogi:
const submit = document.querySelector('#subt')
//user ka input:-
const userInput = document.querySelector('#guessField')
// previous guesses slot:-
const guessSlot = document.querySelector('.guesses') // .guesses isliye kyu ki voh class hai.

// remaining numbers in the array:
const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')
// startOver msges:-
const startOver = document.querySelector('.resultParas')

// values insert karege:-
const p = document.createElement('p')


// stratergies about konse konse variables chaiye:-
let prevGuess = [] // ye isliye array banaya hai taki jo bhi user number insert karega voh array me store hoga and jab user guess karega numbers tab usko pura array dikha de taki user ko samje ki jo guest value hai voh same value ko user vaps guess na kare.

// kitne attempt user mar chuka hai:-
let numGuess = 1 // here the moment user reach to last guess den user could not submit

// there will be a variable where game starts:-
let playGame = true

// now lets check first that are you available t play the game ?
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // aage pass karna hai guess ko:
        validateGuess(guess)
    })
}

// The below method will be used more while handling back-end like in emailadd check , etc
function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Plaese Enter a Valid Number`)
    }else if(guess < 1){
        alert(`Please Enter a Number More than 1`)
    }else if(guess > 100){
        alert(`Please Enter a Number less than 100`)
    } else{
        prevGuess.push(guess)
        // Yaha Hum Check Karege ki Game Over to nahi hora i.e ,Is this a last guess by variable declared above as numGuess 
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage( `GameOver. Random number was ${randonNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            // now will check was the guess right/
            checkGuess(guess)
            
        }
    }
}

function checkGuess(guess) {
    //
}

function displayGuess(guess) {
    //
}

function displayMessage(message) {
    //this method will work with DOM
}

function endGame(){
    //
}

function newGame(){
    //
}

