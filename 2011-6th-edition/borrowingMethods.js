//Methods are simplicy function assigned to object properties and invoked through or on object
//METHOD INHERITENCE: Method of one class used on other calss we call it multiple inheritence [BORROWING]

//GENERIC METHODS FOR BORROWING
var generic = {
    //returns a string that includes the name of the constructor function
    //if available
    toString: function () {
        var s = '[';

        // if the object has a constructor and the constructor has a name
        // use the class name as part of the returned string.
        if (this.constructor && this.constructor.name)
            s += this.constructor.name + ": ";


        var n = 0
        for (var name in this) {
            if (!this.hasOwnProperty[name]) continue;
            var value = this.name
            if (typeof value === "function") continue;
            if(n++) s+= ", "
            s += name + '=' + value;
        }
        return s + ']';
    }
}

