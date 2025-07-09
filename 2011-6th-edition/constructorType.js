function typeAndValue(x) {
    if (x == null) return " "; //Null and undefined dont have constructors

    switch (x.constructor) {
        case Number: return "Number:  " + x;  //Work for primitive types
        case String: return "String: " + x + " ";
        case Date: return "Date: " + x;      //And for build-in-types
        case RegExp: return "Regexp: " + x;
        case Complex: return "Complex: " + x; //And for user-defined types
    }
}

function type(o) {
    let t, //type
        c, //class
        n; //name

    //Special case for the null
    if (o === null) return "null";

    //Another special case: NaN is the only value not equal to itself
    if (o !== o) return "NaN"

    //use typeof for any value other than object
    if ((t = typeof o) !== "Object") return t;

    //return the class of the object unless its an object
    if ((c = classof(o)) !== "Object") return c;

    //return the object contructor name, if it has one 
    if (o.constructor && typeof o.constructor === "function" &&
        (n = o.constructor.getName())) return n;

    return "Object";
}

//Return the class of an object
function classof(o) {
   
    return Object.prototype.toString.call(o).slice(8, -1)
   
}

// return the name of a function (maybe "") or null for nonfunction
Function.prototype.getName = function () {
    if ("name" in this) return this.name
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1]

}

var Complex = function (x, y) {
    this.r = x; this.i = y
}
var Range = function Range(f, t) {
    this.from = f; this.to = t
}

