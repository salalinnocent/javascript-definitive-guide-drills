

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100)
    }
}
console.log(varyingSize.size)

// Static method: 
class Temperature {
    constructor(celcius) {
        this.celcius = celcius;
    }
    get fahrenheit() {
        return this.celcius * 1.8 + 32;
    }
    set fahrenheit(value) {
        return this.celcius = (value - 32) / 1.8;
    }
    static fromfarenhit(value) {
        return new Temperature((value - 32) / 1.8)
    }
}

let temp = new Temperature(22)
console.log(temp.fahrenheit)