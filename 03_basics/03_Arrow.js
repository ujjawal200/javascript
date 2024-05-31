const user = { 
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this. username}, welcome to website`);
        console.log(this);       // return the current contecxt scope
    }
}
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();   


console.log(this);           //return an empty function

// arrow function       ---   ()=>{}

const chai = ()=> {
    let username = "ujjawal"
    console.log(this);               //empty
}

chai();

// //const addTwo = (num1 , num2 )=>{ 
//     return num1 + num2                   //explicit return       -> need of return keyword
// }

//console.log(addTwo(3,4));

//implicit return arrow function

//const addnum = (num1, num2 ) => (num1 + num2)          // no need of return and { }

// to return object from arrow function

const addtwo = (num1 , num2) => ({username : "ujjawal"});

console.log(addtwo(3,4));

const myArray =  [2,5,3,7,8]















 

