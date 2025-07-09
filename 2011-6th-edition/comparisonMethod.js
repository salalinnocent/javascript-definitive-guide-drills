//Javascript equality operators compare objects by reference not by value.
//Not going to check if they have same property names and values.
//compareTo() is a JAVA-Convention

//Example of equals method applied on the Range
Range.prototype.constructor = Range;
Range.prototype.equals = generic.equals

Range.prototype.equals = function (that) {
    if (that === null) return false; //Reject null and undefined
    if (this.constructor !== Range) return false // if not range 
    return this.from == that.from && this.to == that.to // return only if the two endpoints are equal 

}

//Example of equals method applied on the SET

Set.prototype.equals = function (that) {
    //Shortcut for trivial check ???
    if (this === that) return true;

    //checking that = to the set 'INSTANCE OF'
    if (!(that instanceof Set)) return false;

    //checking the size of both sets 'SIZE'
    if (this.size() !== that.size()) return false;

    //checking each element in this & that 'EACH ELEMENT'
    try {
        this.forEach(function (v) {
            if (!that.contains(v)) throw false;
        });
        return true; //All elements matched: Set are equals

    } catch (x) {
        if (x === false) return false //An element in this is not in that
        throw x; //Some other expections: throw here
    }
}


Range.prototype.compareTo = function (that) {
    return this.from - that.from
}

Range.prototype.compareTo = function (that) {
    if (!(that instanceof Range)) throw new Error('Cannot compare these two ranges' + that)
    var diff = this.from - that.from //Comparing lower bounds
    if (diff == 0) this.to - that.to //Firstly, if diff = 0 | equal; Comparing upper bounds
    return diff;
}
var generic = function(){
    var s = '[';
    if(this.constructor && that.constructor.name){
        
    }
}