
// do while
let number = 0;
let step = 2;
let i = 0;
const someArray = []
do {
    someArray.splice(i++, 0, (number += step++))
} while (someArray.length < 10)
console.log(someArray);

// for(let i = 0; i < 10; i++)
const lessons = [];
for (let i = 1; i <= 10; i++) {
    lessons.splice(i, 0, (() => {
        return {
            name: `Lesson ${i}`,
            status: i % 2 == 0 ? true : false
        }
    })())
}
console.log(lessons);
// for of
for (let item of lessons) {
    console.log(item);
}
//for in loop to iterate through objects properties
for (let item of lessons) {
    for (let property in item) {
        console.log(property ,item[property]);
    }
}
///////////////// Loopin over object ////////////////

// Convert the keys of the object to an array
// Convert the values of the object to an array
// Convert the key-value entries to an array (containing arrays with two
// elements: object key and object value)

//Object.keys(someObject) will gives us an array of object's keys [ 'name', 'status' ] 
let keys;
for (let item of lessons) {
    keys = Object.keys(item);
    console.log(keys);
}
//Object.values(someObject) returns array of object's fields values [ 'Lesson 1', false ] 
let values;
for (let item of lessons) {
    values = Object.values(item);
    console.log(values);
}
//Object.entries(someObject) returns an array 
//of key value pairs of the given object [ [ 'name', 'Lesson 1' ], [ 'status', false ] ] 
let keyValues;
for(let item of lessons){
    keyValues = Object.entries(item);
    console.log(keyValues);
}
for(const[k,v] of Object.entries(lessons[0])){
    console.log(k,v);
}
//labeled block allows manipulate outer loop from inner loop, only for  break operation not working with continue.
outer : for(let item of lessons){
    let i = 1;
    console.log(i);
    for(const[key, value] of Object.entries(item)){
        console.log(key, value)
        if(value.startsWith('L')){
            console.log( value + '55')
            break outer;
        }
    }
}
let arrayTest =[1,2,3,5];

const[a, b, ...arrayRest] = arrayTest;
arrayRest

