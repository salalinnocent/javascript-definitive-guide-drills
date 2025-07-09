//Write a class Vec that represents a vector in two-dimensional space. It takes
//x and y parameters (numbers), which it should save to properties of the same
//name.
//Give the Vec prototype two methods, plus and minus, that take another
//vector as a parameter and return a new vector that has the sum or difference
//of the two vectors’ (this and the parameter) x and y values.
//Add a getter property length to the prototype that computes the length of
//the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vector {
    constructor(x, y) {
        this.x = x,
            this.y = y
    }
    plus(Vec) {
        return new Vector(this.x + Vec.x, this.y + Vec.y)
    }
    minus(Vec) {
        return new Vector(this.x - Vec.x, this.y - Vec.y)
    }
    get length() {
        return Math.sqrt(this.x * this.x, this.y * this.y)
    }
}
//Its constructor creates an empty group, add adds
//a value to the group (but only if it isn’t already a member), delete removes
//its argument from the group (if it was a member), and has returns a Boolean
//value indicating whether its argument is a member of the group.

class Group {
   member = []

    add(value){
        if(!this.member.has(value)){
            return push(this.value in member)
        }
    }

    delete(value){

    }

    has(value){
        return this.member.includes(value)

    }
}
