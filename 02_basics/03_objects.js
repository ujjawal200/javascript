//singleton   when decalre as constructor

//obejcts are declare as literal and constructors

//object.create (constructor method )

//object literals


const mySym = Symbol("key1");




const Jsuser = {
    [mySym] : "myKey1",
    name: "ujjawal",
    age: 21,        // bydeafult it is stored as "age"
    isLoggedIn : false,
    "fullname " :"ujjawal thakur",
    latLoginDays : ["monday" , "saturday"]

} 
// console.log(Jsuser.age);     // traditonal way
// console.log(Jsuser["age"]);   // optimised new way


// console.log(Jsuser.fullname );   
// console.log(Jsuser["fullname "]);

// console.log(Jsuser[mySym]);

Jsuser.name = "shanky";
//Object.freeze(Jsuser);
Jsuser.name = "ujjawal";
//console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingtwo = function(){
    console.log(`Hello JS user , ${this.name}`);    // ``  backtick is usedfor object interpolation
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());








 



