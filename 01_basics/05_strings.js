const name = " hitesh";
const repoCount = 5;

console.log(name + repoCount+ " value");

//string interpolation  === `` placeholder 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ujjawal-Thakur');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('l'));


 const anotherString = gameName.slice(-5,4);     // we can use -ve number too 
 console.log(anotherString);

 const newStringOne = "           ujjawal           ";
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url = " https://ujjawal.com/ujjawal%20thakur"; 

 console.log((url.replace('%20','_')));     // used to rmove any specific ele from string

 console.log(url.includes('sundar'));        // checks whether it exists in the string or not 

 console.log(gameName.split('-'));

 

   

  
 
