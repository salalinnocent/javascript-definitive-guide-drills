//MAPS: a map object represents a set of values knows as KEYS [key1: 1, key2: 2] && values 1,2
// and each key has a value associated with it 
//map allows us to use arbirtary values as "indexes"
// array of arrays
//Maps are iterable
let maze = new Map();
let n = new Map([
    ["one", 1],
    ["two", 2]
]);

let copy = new Map(n);
let o = { x: 1, y: 2 }
let joint = new Map(Object.entries(o))

let z = { s: 5, b: 9 }
let joint2 = new Map(Object.entries(z))
console.log(joint);
console.log(joint2);

let m = new Map();
m.size;
m.set("one", 1)
m.set("two", 2)
m.size;
m.get("two")
console.log(m.get("two"));

//We can also add key/values through method chaining 

let magnasseum = new Map().set("one", 1).set("two", 8).set("nine", 1000)
console.log(magnasseum);

magnasseum.delete("one")
console.log(magnasseum);


let moosoon = new Map();

//setting an object with value 1
moosoon.set({}, 1)
//setting an object with value 2
moosoon.set({}, 2);
//checking size
console.log(moosoon.size);
moosoon.set(moosoon, undefined)
console.log(moosoon);



//Iterable Maps [key,value]
let monkey = new Map([["x", 1], ["y", 2]]);
[...monkey]
console.log([...monkey]);
for (let [key, value] of monkey) {
    //First Iteration: key will be "x" & value 1
    //Second Iteration: key will be "y" & value 2

    console.log([...monkey.keys()]);
    console.log([...monkey.values()]);
    console.log([...monkey.entries()]);

    //we can use keys && values method to get them separately
    console.log(`The keys are ${[...monkey.keys()]} and values are ${[...monkey.values()]} and the entries are ${[...monkey.entries()]}`);
}

//WEAK-MAP(): key/values are collected in garbage collector => associate values with objects without causing memory leak

// No size, keys(), values(), forEach() method 

//GARBAGE-COLLECTION: js interpreter reclaims the memory of objects no longer "reachable" & cannot be used by a program.

//WEAK-SET(): 