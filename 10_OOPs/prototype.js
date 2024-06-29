// let myName = "Ujjawal     "


// console.log(myName.truelength);


let myHero = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spider: "sling",


    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.ujjawal = function(){
    console.log(`ujjawal is present in all object`)
}

heroPower.ujjawal()
myHero.ujjawal()

Array.prototype.heyUjjawal = function(){
    console.log(`ujjawal says hello`);
}

myHero.heyUjjawal()
// heroPower.heyUjjawal()



//  inheritance 

const user = {
    name :"chai",
    email :"ujjawlgmail"
}
const teacher = {
    makeVideo : true
}

const TeachSupport = {
    isAvailable : true
}

const TA = {
    makeAssignment : 'Js assignment',
    fulltime : true,
    __proto__: TeachSupport 
}

teacher.__proto__ = User

// new modern approach of protype inheritance

Object.setPrototypeOf(TeachSupport,teacher)



let anotherUserName = "chai                        "

String.prototype.truelength = function(){
     console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
}

anotherUserName.truelength()
"Ujjawal".truelength()
"chai".truelength()

