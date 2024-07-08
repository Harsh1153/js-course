// This Project is part Of Asynch Code:-
// Generate a random color:- jo hoga hex value se
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
       color += hex[Math.floor(Math.random() * 16)] 
       // yaha humne random position select kiya.
    }
    return color
}
let intervalId
// also to avoid overriding of intervalId variable and to amke the right use of memory will make that intervalId = null so that it will refresh and start again with appropriate memory utilization that is we are saving the memory.
const startChangingColor = function(){
    if(!intervalId){
    intervalId = setInterval(changeBgColor, 1000)
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null // right use of efficient code
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)


//console.log(randomColor())
//console.log(Math.floor(Math.random() * 16)) => random generator.