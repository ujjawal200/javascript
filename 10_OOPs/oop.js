// Object literal

const user = {
    username : "ujjawal",
    loginCount  : 8,
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details from database");
        // console.log(`username : ${this.username}`)
        // console.log(this);
    }

}
// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

// constructor function (new keyword make new intances)

const promiseOne = new Promise()
const date = new Date()



function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("ujjawal",12,true)
const userTwo = new User("chai",11,false)

console.log(userOne);
console.log(userTwo);
