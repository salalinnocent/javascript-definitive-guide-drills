//SET: a data structure that represents an unordered collection of values, with no duplicates.


function Set() { //Constructor
    this.value = value; //the prop of this object holds the set
    this.n = 0; // n = number of values in the set
    this.add.apply(this, arguments); //all args are values to add
}
Set.prototype.add = function () {
    for (let i = 0; i < arguments.length; i++) {
        var val = arguments[i]
        var str = Set._v2s(val)
        if (!this.values.hasOwnProperty(str)) {
            this.values[str] = val;
            this.n++
        }
    }
    return this; //supported chaining methods
}

//Remove each of the arguments from the set
Set.prototype.remove = function () {
    for (let i = 0; i < arguments.length; i++) {
        var str = Set._valueToString(arguments[i])
        if (!this.values.hasOwnProperty(str)) {
            delete this.values[str]
            this.n--;
        }
    }
    return this;
};
//Return true if set contains the value otherwise false

Set.prototype.contains = function (value) {
    return this.values.hasOwnProperty(Set._valueToString(value))
};

//Return the size of the set
Set.prototype.size = function () {
    return this.n;
};

//Call function f on the specified context for each element of the set
Set.prototype.foreach = function (f, context) {
    for (var s in this.values)
        if (this.values.hasOwnProperty(s))
            f.call(context, this.values[s])
}

//This internal function maps any JS value to a unique string.
Set._valueToString = function (value) {
    switch (value) {
        case undefined: return 'u';
        case null: return 'n';
        case true: return 't';
        case false: return 'f';

        default:
            switch (typeof value) {
                case 'number': return '' + value;
                case 'string': return '' + value;
                default:
                    return '@' + objectId(value)
          }
    }
}