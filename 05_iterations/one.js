// for loop:-
for (let i = 0; i <=10; i++) {
    const element = i; 
    // to change the name of variables use ctr + d.
    if(element == 10){
        //console.log(`10 is the last number`);
    }
    //console.log(element);
}
// the above was the example of for loop and loops inside loop.

// for loop inside for loop:-
for (let i = 1; i <=10; i++) {
    //console.log(`Outer loop value: ${i}`); 
    for (let j = 1; j <=10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + '=' + i*j);        
    }   
}

// As this for loop also works in the case of array:-
const myArray = ["batman", "superman", "spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}
//console.log(myArray.length);

// Keywords used in loops:- 1] break & 2] continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 Detected`);
        //break
        // continue will skip the condition one time
        continue
    }
    console.log(`value of i: ${index}`);  // here we printed 20 numbers using loop, but what if any condition occurs that is 5 num is best  and afterwards dont print any number. The condition will come before the log statement.  
}
