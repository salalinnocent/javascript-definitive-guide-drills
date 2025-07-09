//Prototypal Inheritence and the Prototype Chain

//ES6 introduced classes which is the modern way to contruct objects

const person = {
    alive: true
}
const musician = {
    plays: true
}


Object.setPrototypeOf(musician, person);

console.log(musician.plays)
console.log(Object.getPrototypeOf(musician))