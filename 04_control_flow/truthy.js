const userEmail = "";   
 // the value itself is consider true
//  an empty string will be consider as false


if(userEmail){
    // console.log("got user email");
}
else{
    // console.log("Don't have user email");
}

// falsy values are as follows
// false, 0, -0, bigInt 0n , "" , null , undefined , NaN

// truthy values
// " 0", 'false , " ",[],{}, function (){}

if(userEmail.length === 0){
    // console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    // console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined

let val1 ;
//val1 = 5 ?? 10
// val1 =  10 ?? null
//val1 = undefined ?? 4
val1 = !null  ??undefined 

console.log(val1);

//Terniary operator

//condition ? true : false ;
const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") ;









