let a = 100
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

// block scope is the scope of variable in between {}"
//global scope is the scope of variable outside the {}"
if(true){
    let a = 10
    const b = 20
    console.log(`Inner, ${a}`);

}
console.log(`outer , ${a}`);

//scope of function in function 

function one(){
    const usernale = "ujjawal"

    function two(){
        const website = "linkedin"
        console.log(usernale);         // in the globe scope  


    }
    //console.log(website);  // out of two 's scope 
    two();
}
one();



// +++++++++++++++++++++++++++++++++++       interesting           ++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(value){
    return num + 1
}

addone(5)           // here addone(5) can be transfer to line number 37  line 38 is function 

const addTwo = function(num){
    return num+2
}

addTwo(7)          // here addtwo can't be transfer to line 43 because 44 is an expression not an function 

//hosting concept 