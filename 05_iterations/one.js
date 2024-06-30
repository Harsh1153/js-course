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
    console.log(`Outer loop value: ${i}`); 
    for (let j = 1; j <=10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j);        
    }   
}