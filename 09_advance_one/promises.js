const promiseone = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography,network

    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("promise consumed")
})

new 