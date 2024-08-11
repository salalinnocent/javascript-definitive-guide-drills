// INHERITENCE: 

function inherit(p) {
    if (p === null) throw TypeError('Must not be a null')
    if (Object.create)  //if already define create one 
        return Object.create(p);
    //type checking
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();
    function f() { }; // define a dummy contructor 
    f.prototype = p; // Set its prototype property of p
    return new f(); //USE F() to create an heir of p.
}



// The constructor function
function SingletonSet(member) {
    // Remember the single member of the set
    this.member = member
}
// Create a prototype object that inherits from the prototype of Set.
SingletonSet.prototype = inherit(Set.prototype)
// Now add properties to the prototype.
extend(SingletonSet.prototype, {
    constructor: SingletonSet,      // Set the constructor property appropriately
    add: function () { throw "read-only set" }, // This set is read-only: add() and remove() throw errors
    remove: function () { throw "read only set" },
    size: function () { return 1 },
    foreach: function (f, context) { f.call(context, this.member) },
    contains: function (x) { return x === this.member }
})
// These properties override the properties of the same name from Set.prototype.



// This set is read-only: add() and remove() throw errors



// A SingletonSet always has size 1


// Just invoke the function once, passing the single member.


// The contains() method is simple: true only for one value


//Constructor method chaining from sub-class to superclass
function NonNullSet() {
    Set.apply(this, arguments)
}
NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor;

NonNullSet.prototype.add = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] == null)
            throw Error('Not Null')
        return Set.prototype.add.apply(this, arguments)
    }
}
var stringSet = filteredSetSubclass(Set,
    function (x) {
        return typeof x === "string";
    }
)

var mySet = filteredSetSubclass(NonNullSet,
    function (x) {
        return typeof x !== "function"
    }
)

//A class factory method chaining..

/*
* This function returns a subclass of specified Set class and overrides
* the add() method of that class to apply the specified filter.
*/
function filteredSetSubclass(superclass, filter) {
    var constructor = function () {
        superclass.apply(this, arguments)
    }
    var proto = constructor.prototype = inherit(superclass.prototype)
    proto.constructor = constructor;
    proto.add = function () {
        for (var i = 0; i < arguments.length; i++) {
            var v = arguments[i]
            if (!filter(v)) throw ("value " + v + "rejected by filter");
        }
        superclass.prototype.add.apply(this, arguments)
    }
    return constructor;
}
// The subclass constructor
// Chains to the superclass


// Apply the filter to all arguments before adding any

// Chain to our superclass add implementation


function filteredSetSubclass(superclass, filter) {
    var constructor = function () {
        superclass.apply(this, arguments)
    }
    var proto = constructor.prototype = inherit(superclass.prototype)
    proto.constructor = constructor
    proto.add = function () {
        for (var i = 0; i < argument.length; i++) {
            var v = arguments[i]
            if (!filter(v)) throw ("value " + v + "rejected by filter")
        }
        superclass.prototype.add(this, arguments)

    }
    return constructor;
}
var NonNullSet = (function () {
    var superclass = Set;
    return superclass.extend(
        function () {
            superclass.apply(this, arguments);
        },
        {
            add: function () {
                for (var i = 0; i < argument.length; i++)
                    if (arguments[i] === null) throw new Error('cant add null or undefined')

                return superclass.prototype.add.apply(this, arguments)
            }
        }

    )
}());

var FilteredSet = Set.extend(
    function (set, filter) {
        this.set = set;
        this.filter = filter;
    },
    {
        //add method 
        add: function () {
            //if there is a filter
            if (this.filter) {
                for (var i = 0; i < arguments.length; i++) {
                    var v = arguments[i]
                    if (!this.filter(v))
                        throw new Error('If there no filter')
                }
            }
            this.set.add.apply(this.set, arguments)
            return this;
        },
        remove: function () {
            this.set.remove.apply(this.set, arguments)
        },
        size: function () {
            return this.set.size();
        },
        contains: function (x) {
            return this.set.contains(x);
        },
        foreach: function (f, context) {
            return this.set.foreach(f, context)
        }
    }
)

