// dont use var for declaring variables 
//var c= 300
let a=100
if(true){
    let a= 10
    const b= 20
    var c= 30
    console.log(`inner a: `,a);
}
 console.log(a);
// console.log(b);
//console.log(c);

// windows me global scope alag hai and terminal me node ke sath jo likhte hai uska scope alag hai