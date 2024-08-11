function speak(line) {
    console.log(`the ${this.type} Rabbit says ${line}`)
}

let whiteRabbit = { type: 'White', speak }
console.log(whiteRabbit)
whiteRabbit.speak(`how late is this, ` + `We need to go`)

speak.call(whiteRabbit, 'Colourless cute monk')


function normazlize() {
    console.log(
        this.coords.map(
            n => n / this.length
        ));
}
normazlize.call({ coords: [0.5, 5, .35], length: 5 })


let empty = {};
// here we creare reference to the empty.toString method of an empty object
console.log(empty.toString)
// here we are calling out method
console.log(empty.toString())

console.log(Object.getPrototypeOf({}) == Object.prototype);

let prototypeDog = {
    speaker(line) {
        console.log(`I am the ${this.type} cute little dog who ${line}  `)
    }
}
let firstDog = Object.create(prototypeDog)
firstDog.type = 'Pug'
firstDog.speaker('WowWow')


let secondDog = Object.create(prototypeDog)
secondDog.type = 'Golden retriver'
secondDog.speaker(` ${this.type}, `)


function makeDog(type) {
    let dog = Object.create(prototypeDog)
    dog.type = type
    console.log(dog)
    return dog

}

class Rabbits {
    constructor(type) {
        this.type = type
    }
    spit(line) {
        console.log(`Kitne dilkush ho tum ${this.type} + dil jao ho mein ${line}`)
    }
}

let funkyRabbit = new Rabbits('Funky')
console.log(funkyRabbit.spit('funky'))


console.log(Object.getPrototypeOf(Math.max) === Function.prototype)
console.log(Object.getPrototypeOf([]) === Array.prototype)

function Rabbit(type) {
    this.type = type
}
Rabbit.prototype.speak = function (line) {
    console.log(`this is how ${this.type} do it ${line}`)
}   

let wildRabbit = new Rabbit('Wild')
console.log(wildRabbit)



Rabbit.prototype.toString = function (){
    return `a ${this.type} rabbit`
}
console.log(String(Rabbit))