// First object associated with JS => first object inherits from second object
// Second object associated with JS => prototype

let empty = {} //no property object

let point = { x: 0, y: 0 }; //Two num prop

let p2 = { x: point.x, y: point.y + 1 } //more complex prop

//Creating a new Object = {}
let o = new Object()
console.log(o);

//create a new date represting the current time
Date.prototype.getFormatedDate = function () {
    let day = this.getDate();
    let month = this.getMonth() + 1;
    let year = this.getFullYear();
    return `${day} - ${month} - ${year}`
}
let dayz = new Date()
console.log(dayz.getFormatedDate());
let d = new Date()
console.log(d);

let m = new Map()
console.log(m);

//Prototype chaining 
// whenever a Date object has been created new Date() inherits from
// Object.prototype & Date.prototype

let addr = "";
for (let i = 0; i < 4; i++) {
addr += customer[`address${i}`] + "n"
}

// to invoke a function as a method of an object

f.call(o)
f.apply(o) //args passed the function are specified as array 
f.apply(o, [1,2])

o.m = f // make f a temp method of o
o.m() // invoke it, passing no arguments
delete o.m; // remove the temp method 

let biggest = Math.max.apply(Math, arrayOfNumbers)