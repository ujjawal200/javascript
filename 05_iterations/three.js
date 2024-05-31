// for of loop

const arr = [1,2,3,4,5,6];

for (const num of arr) {
    console.log(num);
}

// Maps

//order is maintained 
//  A key in the Map may only occur once; it is unique in the Map's collection. 


const map = new Map();
map.set('IN', " India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN' , "bharat");

console.log(map);

for (const [key, value] of map) {
    console.log(value);
}

const myObject = {
    'game1' : 'NFS' ,
    'game2' : 'spiderman'
}
// line number 33 to 35 will not work because objects are not iterable

// for (const [key,value] of myObject) {
//     console.log(key , '-', value);
// }






