const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {

    console.log(item);
    return item             // undefined

})

console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9];
 

// filter method to overcome for each absence of return undefined
const newNums = myNums.filter((num) =>  num > 4)          
console.log(newNums);

 const newnums = []
myNums.forEach((num)=>{
    if(num > 4){
        newNums.push(num)
    }

})
console.log(newNums);



