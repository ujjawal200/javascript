// console.log(2 > 1);  // true
// console.log(2 >= 1);  // true
// console.log(2 < 5);   // true
// console.log(2 < 1);   // false
// console.log(2 == 1);  // false
// console.log(2 == 2);  // true
// console.log(2 != 1);  // true
// console.log(2 != 2);  // false


//  console.log("1" > 1);  // ascvii value comparsion
//  console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);     // works diif in javascript
console.log(null >= 0);   //comparsions convert null to 0   


// the teason is that an equality check == and comparsions > < >= <= work differently.
// comprasions convert null to a number , treating it as 0.
// that's why 3rd console null >= 0 is true and ist console null >0 is false;

 console.log(undefined == 0);
 // undefined always give false value

 // === strict check ****************
// checks every thing datatypes also
 
 console.log("2" === 2);








