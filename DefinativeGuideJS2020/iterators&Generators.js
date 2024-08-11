//Console.api is not standard but supported by Node

//console.debug(), console.info(), console.warn(), console.error()


let sum = 0;
for (let i of [1, 2, 3]) { //Loop once for each of these values 
    sum += i
}
console.log(sum);

let chars = [..."abcd"]
let data = [1, 2, 3, 4, 5];

console.log(Math.max(...data));

//Iterators are also used as Destructing Assignment
let purpleHaze = Uint8Array.of(255, 0, 255, 128)
let [r, g, b, a] = purpleHaze;
console.log(purpleHaze);
console.log(a);
console.log(r);

//We can return [keys, values] by iteration 
let mouse = new Map([["one", 1], ["two", 2]])
for (let [key, value] of mouse)
    console.log(key, value);

//defualt iteration
[...mouse]

//Keys() method iterates over the keys only
console.log([...mouse.keys()]);

//Values() method iterates over the values only
console.log([...mouse.values()]);

//Entries() gets the whole object = keys/values
console.log([...mouse.entries()]);


//How Iteration Works: 
// 1. iterable objects: Arrays[], Set, MAP
// 2. iterable object itself =>  which performs the iteration [object itself]
// 3. iteration result object that holds the result of each step of iteration [result object = holds result.forEach(iteration)]

let iterable = [99]
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
    console.log(result.value);
}

// catch the head and tail values in the list[array] with I.invoked F()
let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();
let head = iter.next().value;
let tail = [...iter]

