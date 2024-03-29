const customerId = 123
customerCity = "Sanpada"
let customerEmail= "harsh@gmail.com"
var customerPass= "2122"

// customerId =2 not allowed //

console.log(customerId)

// customerId= 456
customerEmail= "hdfc@gmail.com"
customerPass = "2222"
customerCity = "vashi"

/*
Prefer not to use var 
Because of issues in block scope and functional scope
*/
console.table([customerEmail, customerPass,customerCity,customerId])
