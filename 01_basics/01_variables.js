const accountId  = 312003        // cannot be changed 
let accountEmail = " ujjawalthakur2003@gmail.com"       // no scope problem
var accountPassword = "12345"          // not used as such any more due to no scope problem 
accountCity = "Jaipur"   // possible but not recommended
let accountState;            // undefined  
 

// accountId = 2; // not allowed
accountEmail = "thakur2003@mail.com"
accountPassword = " 1234"
accountCity = "delh"

console.log(accountId);

/*
prefer not to use var
bcs of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);