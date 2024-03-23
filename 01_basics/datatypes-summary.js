 // # primitive (how they are store and how they are accesed)
 // 7 caageries : string , Number , Boolean ,null,undefined,symbol (for making unique), BigInt


 const score = 100;
 const scoreValue = 100.3
 const isLoggedInt = false;
 const outsideTemp = null
 let userEmail ;
 let useremail =undefined;      // both are same 

 const id = Symbol('123');
 const anotherid = Symbol('123');
 console.log(id === anotherid);


 const bigNumber = 90987654321234567890n;


 
 /*JavaScript is a dynamically typed language, which means that data types of variables
 are determined by the value they hold at runtime and can change throughout the program
  as we assign different values to them
  */

 // non - primitive type ( refrence type)

 // array, objects ,Functions

 const heroes = ["shaktimann","ironman","shiva"];      // array 

 let myobj = {                                            // object should be in the { } braces
    name : "hitesh",
    age : 34,

 }
 const myfuntion = function(){
    console.log("namaste");
 }

 console.log(typeof myfuntion);                    // method used to find the datatype of the funtion 
 

 // doc to read 
 // // https://262.ecma-international.org/5.1/#sec-11.4.3








 //***************************************************************************************************************************** */
 // stack (primitive)we get a copy , heap(non - primitive) we get a refernce of the original value 


 //stack -> no change in the original 
 let me = "UjjawalThakur"
 let anotherName = me;
 anotherName = "shiv";
 console.log(me);
 console.log(anotherName);

// heap -> changes in the original 
 let userOne = {                              // object value can only be accessed by"."
   email: "user@google.com",
   upi : "user@ybl",
 }
 let userTwo = userOne;

 userTwo.email = " ujjwal@google.com";
 console.log(userOne);
 console.log(userTwo);
