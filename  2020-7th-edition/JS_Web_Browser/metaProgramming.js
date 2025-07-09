//Controlling the enum, delete & configurability of Object properties.
//Controlling the extensibility of objects and creating sealed and frozen objects.
//Querying and setting the prototypes of object.
//Fine-tuning the behaviour of your types with known symbols
//Creating DSLs with template tag functions
//Probing objects with reflect methods
//Controlling object behaviour with Proxy

console.log(Object.getOwnPropertyDescriptor({ x: 1 }, "x"))

//here is an object with a read only accessor property
const random = {
    get octet() {
        return Math.floor(Math.random() * 256);
    }
}

console.log(Object.getOwnPropertyDescriptor(random, "octet"));

//starting with no properties at all
let o = {};
//Adding a non-enum data property x with value 1.
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
})
console.log(o.x);
console.log(Object.keys(o));

//Now modify the property x so that it can be read-only

Object.defineProperty(o, "x", {
    writable: false
})



Object.defineProperty(o, "x", {
    value: 2
})
console.log(o.x);


Object.defineProperty(o, "x", {
    get: function () {
        return 0;
    }
})
console.log(o.x);

let p = Object.defineProperties({}, {
    x: { value: 1, enumerable: true, configurable: true, writable: true },
    y: { value: 1, enumerable: true, configurable: true, writable: true },
    r: {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);

        },
        enumerable: true,
        configurable: true
    }
})
console.log(p.r);

//Create a sealed object with a frozen prototype and a non enumerable property

let Ori = Object.seal(Object.create(Object.freeze({ x: 1 }), { y: { value: 2, writable: true } }))

Object.getPrototypeOf({}) //Object.Prototype
Object.getPrototypeOf([])   //Array.Prototype
Object.getPrototypeOf(() => { }) //Function.Prototype

//checking if one object is prototype [or is part of the prototype chain] of another object
let purple = { x: 1 }
let orange = Object.create(purple)

console.log(purple.isPrototypeOf(orange)); // => true
console.log(Object.prototype.isPrototypeOf(purple)); // => false; purple inherits from Object.prototype

let original = { x: 1 };
let fake = { y: 2 }
Object.setPrototypeOf(original, fake);
console.log(original.y);
let alpha = [1, 2, 3]
console.log(alpha.join);
Object.setPrototypeOf(alpha, fake)
console.log(alpha.join);