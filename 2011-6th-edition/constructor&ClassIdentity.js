// The value of the constructor property is the function object

var F = function () { } // this is a function object
var p = F.prototype // this is the prototype object associated with it 
var c = p.constructor // this is the function assiciated with the prototype
c === F // => true:  F.prototype.constructor == F for any function

var o = new F(); // Create an object o of class F

o.constructor === F // => true: the constructor property specifies the class



// Four Kind of Class Members

//Instance Fields: these are the pre instance properties or variables that hold the state of an individual Object.

//Instance Methods: These are "methods that are shared by all instances of the class" that are invoked through individual instances.

//Class Fields: These are "properties or variables associated with the class" rather than the instances of the class.

//Class Methods: These are methods that are associated with the class rather than with instances.


function defineClass(constructor, methods, statics
) {
    if (methods) extend(constructor.prototype, methods)
    if (statics) extend(constructor, statics)
    return constructor;
}
var simpleRange = defineClass(function (f, t) {
    this.f = f,
        this.t = t
}, {
    includes: function (x) {
        return this.f <= x && x <= this.t;
    },
    toString: function () {
        return this.f + "..." + this.t;
    },
    upto: function (t) {
        return new simpleRange(0, t);
    }
});

// the const. function defines the instance fields r and i on every instance it creates.  fields hold the real and imaginary parts of the complex number: they are the state of the object.

function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) //ensure both args are nums
        throw TypeError();              //throw error if not
    else {
        this.r = real;  //the real part of the complex number
        this.i = imaginary; // the imaginary part of the number
    }
}
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i + that.i)
}

Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i * that.i,
        this.r * that.i - this.i * that.r
    )
}

//return the real magnitude of a complex number. 
Complex.prototype.mag = function () {
    return Math.sqrt(this.r * this.r + this.i * this.i)
}

//return a complex number that is negative of this one
Complex.prototype.neg = function () {
    return new Complex(-this, r, -this.i)
}

//return a complex object to a string in a useful way
Complex.prototype.toString = function () {
    return "{" + this.r + " , " + this.i + "}"
};

// Test weather this Complex object has the same value as another
Complex.prototype.equals = function (that) {
    return that != null && //must be defined and non-null
        that.constructor === Complex && //and an instance of Complex
        this.r === that.r && this.i === that.i //and have the same values
}


//NOTE: Class Methods do not generally use the 'this' keyword, they operate only on their arguments

Complex.parse = function (s) {
    try {
        var m = Complex._format.exec(s) //underscore = internal use not for public API of this class
        return new Complex(parseFloat(m[1]), parseFloat(m[2]))
    } catch (x) {
        throw new TypeError('cant parse' + s + 'as a complex numebr')
    }

}

var c = new Complex(2, 3)
var d = new Complex(c.i, c.r)
c.add(d).toString();

Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO)

//Agumenting Classes


//we can add methods to numbers, strings, arrays and functions
Complex.prototype.conj = function () {
    return new Complex(this.r, -this.i)
}
if (!Function.prototype.bind) {
    Function.prototype.bind = function (o, /*, args */) {

    }
}

var n = 3
n.times(function (n) {
    console.log(n + 'Hello');
});
Number.prototype.times = function (f, context) {
    var n = Number(this);
    for (let i = 0; i < n; i++) {
        f.call(context, i)
        console.log(i);
    }
}