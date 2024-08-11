class Matrix {
    constructor(height, width, elements = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                this.content[y * width + x] = elements(x, y)
            }
        }
    }
    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.height + x] = value
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix
    }
    next() {
        //Base case [matrix completation = height check if end is reached]
        if (this.y == this.matrix.height) {
            return { done: true }
        }

        //setting the value for x and y and getting it through maps()
        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        }

        // what are we doing here no clue !!!
        this.x++
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++
        }
        return { value, done: false }
    }
}

Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this)
}
let matrix = new Matrix(2, 2, (x, y) => `value: ${x}, ${y}`)
for (let { x, y, value } of matrix) {
    console.log(x, y, value)
}

let matrix1 = new Matrix(10, 10, (x, y) => `value: ${x}, ${y}`)
for (let { x, y, value } of matrix) {
    console.log(x, y, value)
}

class SymetricalMatrix extends Matrix {
    constructor(size, elements = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) {
                return elements(y, x)
            } else return elements(x, y)
        });
    }
    set(x, y, value) {
        super.set(x, y, value)
        if (x != y){
            super.set(y, x, value)
        }
    }
}
let matrix2= new SymetricalMatrix(5, (x, y) => `${x},${y}`)
console.log(matrix2.get(2, 3));