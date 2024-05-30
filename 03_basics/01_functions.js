

function sayMyName (){
    console.log("U");
    console.log("j");
    console.log("j");
    console.log("a");
    console.log("w");
    console.log("a");
    console.log("l");
    
}

// sayMyName  ->  reference
// ()  ->  exectuion
// {} ->  scope

// sayMyName (){}  -> function 

//sayMyName();


//fnction 

// function addtwoNumbers(number1 ,number2 ){     // parameters
//    console.log(number1 + number2 );
// }
// const  result = addtwoNumbers(3,5);          //arguments
//console.log(result);          //op -> undefined 

function addtwoNumbers(number1 ,number2 ){     // parameters
    let result = number1 + number2 ;
    return result;
 }
const ans = addtwoNumbers(3,5);   
//console.log(ans);             // op -> 8



function loginUserMessage(username){
    if(username === undefined){
//        console.log("please enter a username");
        return 
    }
    return `${username} just logged in `   // interpolation
}

const ans2 = loginUserMessage( );        //when no agrument is passed it will be taken as undefined 
//console.log(ans2);

// function with unknown arguments

function calculateCartprice(...num1){      //rest operator
    return num1;
}

//console.log(calculateCartprice(200,400,500));

// object in function 

const user ={
    username : "ujjawal",
    salary : 120000
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and salary is ${anyObject.salary}`);

}

//handleObject(user);

handleObject({
    username : "shanky",
    salary : 0
})


//array in object


const myNewArray = [200,400,100,600];

function returnSecondValue(getArray){
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));








