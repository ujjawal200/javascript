const myNums = [1,2,3,4,5,6,7,8,9];


// map is another call back function just like filter
const newNUms = myNums.map((num)=> num+10);
console.log(newNUms);


//chanining

const newnums = myNums
                     .map((num)=> num *10 )
                     .map((num)=> num+1)
                     .filter((num)=>  num >= 40)

console.log(newnums);                     


//reducor

