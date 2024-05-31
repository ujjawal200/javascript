// how to iterate over objects

const myObject = {
cpp : "C++",
js : "javascript",
rb : "ruby"

}
// we use for in for iterating over objects
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in to iterate oover array in js
const programming = ["js", "rb", "py","java","cpp"]

for (const key in programming) {
    console.log(key);
    
}