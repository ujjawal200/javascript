const myNums = [1,2,3,4];

// const mytotal = myNums.reduce(function (acc,currval ) {
//     return acc+ currval
// },0)
// console.log(mytotal);


const mytotal = myNums.reduce((acc,currval )=> acc +currval,0)
console.log(mytotal);