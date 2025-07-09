
// A class representing the range of values
//When a JS Class extends another class, the constructor function must call super()
// before it uses the "this" keyword. So, if the custom element class has a constructor, it should call
// super() [with no arguments before doing anything else]

//creating an inherit function that can 

function inherits(p) {
    if (p == null) {
        throw TypeError();
    }
    // if object.create is already defined then we create...
    if (Object.create) {
        return Object.create(p)
    }
    //Else we are doing more type checking here 
    var t = typeof p
    if (t != "object" && t != "function") {
        throw TypeError();
    }
    //creating a dummy function here
    function f() {}
    f.prototype = p
    return new f();
}

function range(from, to) {
    let r = inherits(range.methods)

    //Store the start and end points [state] of this new object
    r.from = from;
    r.to = to;
    //Notice that "this" keywords refers to the object through which they are invoked()
    return r;
}

range.methods = {

    //This Method works for Textual and Date Ranges and Numeric
    includes: function (x) {
        return this.from <= x && x >= this.to;
    },

    //This Method only work for Numeric Ranges
    foreach: function (f) {
        for (let x = Math.ceil(this.from); x <= this.to; x++) f(x)

    },

    //Return a String representation of a Range
    toString: function () {
        return "(" + this.from + "..." + this.to + ")";
    }
}

var r = range(1, 10)
console.log(r.includes(9));
r.foreach(console.log)
console.log(r)
r instanceof range

// through instanceof we can check if the object inherits from our prototype class
console.log(r instanceof range);