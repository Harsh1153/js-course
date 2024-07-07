const clock = document.getElementById('clock')
// ALSO can go with const clock = document.querySelector('#clock')

let date = new Date() // Date ek directory object hai
console.log(date.toLocaleTimeString())


// now hume jo time hai orange box me continuously digital clock ki tarah change hota hu aa dikhna chaiye , so for that will use ONE METHOD USED IN JS FOR CONTROLING EVENTS:-
setInterval(function(){
    let date = new Date() // Date ek directory object hai
   // console.log(date.toLocaleTimeString()) ye console me chalega lekin hume document  pr update karna tha.
   clock.innerText = date.toLocaleTimeString()

}, 1000) 

// 1000 used for 1 sec , har sec mme value dikhegi
132931227
