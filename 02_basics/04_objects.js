// object constucors (singleton)

const appleUser = new Object()            //singleton object
const AppleUser = {}                      //non - singleton object

console.log(appleUser);
appleUser.id = "123abc"
appleUser.name = "mithu"
appleUser.isLoggedIn = false

console.log(appleUser);

//object in object

const regularUser  = {
    email : "some@gmail.com",
    fulname :{
        userfullname :{
            firstname :"ujjawal",
            lastname:"thakur"
        }
    }

}

console.log(regularUser.fulname.userfullname.firstname);    //object into object can be accesed like this


//combining 2 objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}           // 90% of time tihis method is used spreading

console.log(obj3);


//when values arived from db

console.log(appleUser);

console.log(Object.keys(appleUser));          // result is in the form of array
console.log(Object.values(appleUser));        // result is in the form of array
console.log(Object.entries(appleUser));       // result is inn array in array format 


console.log(appleUser.hasOwnProperty('isLoggedIn'));       // to check if the desired value is present or not
 







