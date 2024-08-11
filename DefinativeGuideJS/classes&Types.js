//Three ways to determine class
//instanceOf
//constructor
//name of the constructor function

class Car {
    constructor(color, engine, model) {
        this.color = color;
        this.engine = engine;
        this.model = model;
    }
    getDocuments() {
        return 'Lisence'
    }
}

let HondaObject = new Car('White')
let ToyotaObject = new Car('Black')

console.log(HondaObject.color);
console.log(ToyotaObject.getDocuments());


class Pizza {
    constructor() {
        this.size = 'medium';
        this.flavour = 'spicy';
    }
    bake(){
        console.log(`I am going to make ${this.size} pizza and ${this.flavour}`);
    }
}

let ElyPizza = new Pizza()
ElyPizza.bake()