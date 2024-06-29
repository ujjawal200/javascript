function SetUserName (username){
    //complex dbcall
    this.username = username
    console.log("called");
}

function createUser(username,email,password){

    // to hold the refernce ofusername use .call()
    SetUserName.call(this,username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb","123")
console.log(chai);