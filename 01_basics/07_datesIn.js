// dates 

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);  

//let myCreatedDate = new Date(2023,0,23);  
// months start with 0 in javascript 
//let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-10-24");
//console.log(myCreatedDate.toDateString());


// exact timestamp for polls

let myTimeStamp = Date.now(); 
// milisec from 01 1970 
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime()); 
 //  to compare 2 dates 
//console.log(Math.floor(Date.now()/1000)); 
// use for date to milisec 


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()}`

newDate.toLocaleString('default',{
    weekday : "long",
})  












