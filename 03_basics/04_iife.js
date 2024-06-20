f// Immediately invoked function expressions (IIFE)

 (function chai (){
   //named IIFE
    console.log(`DB connected using IIFE`);
 })();

 //iife syntax ()()  first to wrap the function second to for immediate execution
// we used iffe to get rid a fuction global scope pollution 

// an error will come if we forget to put ; in the end of iife


( (name ) => {
   //unnamed IIFE with arguments
   console.log(`DB Conncwe ${name}`);
})("ujjawal")

 

