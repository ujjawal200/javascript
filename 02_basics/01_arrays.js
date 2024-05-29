// for making  directory use command "mkdir foldername "
//array
// [] =  bracket 
// {} =  braces
// () =  parenthesis 

const myArr =  [ 0, 1, 2, 4, 5, true, "ujjawal"];

//  arrays in js are resizzeable 
// mix data types


//console.log(myArr[3]);

// arrays in js make shallow copy (if original change copy change)


const myHeros = [ "shaktiman" , "Iromman"];
const myArr2 = new Array(1,2,3,4,5);


// Array methods 

myArr.push(6);
myArr.push(9);

//console.log(myArr);

myArr.pop(); // delete from the last
myArr.unshift(9)  // move it to the first
myArr.shift();

//console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);


//slice , splice 

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3);  

// splice manipulate the original array itself and also include start and end points 
console.log("c",myArr);
console.log(myn2);

const marvel_heros = ["thor" , "Ironman" , "spiderman"];
const dc_heros = ["superman", "flash" , " batman"];

// marvel_heros.push(dc_heros);  // just addas an element  of array 

//console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros);         // concat gives the value of 2 added array as a new array      

//console.log(all_heros);

const all_new_heros = [...marvel_heros , ...dc_heros ];        // this method  is called spread method 

console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]];
console.log(another_array);

const real_another_array = another_array.flat(Infinity);   // cut down the depth of the array 

console.log(real_another_array);

console.log(Array.isArray("ujjawal"));

console.log(Array.from("ujjawal"));  

console.log(Array.from({name:"ujjawal"}));   // when u don't tell it will return empty array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  // new array will be made from the given sets 
























 





