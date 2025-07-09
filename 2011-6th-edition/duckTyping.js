//Instead asking: What is the class of this object ? "We ask What can this object do ?"
//NOTE: We are talking about testing wheather an OBJECT implements one or more methods


//A function for duck-typing checking...

//Return true if object 
function quacks(o, /*, ... */) {
    for (var i = 0; i < arguments.length; i++) {
        var args = arguments[i];
        switch (typeof args) { //if args is a:
            case 'string':  //string: check for a method with that name
                if (typeof o[args] !== 'function')
                    return false;
                continue;
            case 'function': //function: use the prototype object instead
                //if the arguments is a function, we use its prototype object
                args = args.prototype;
            // fall through to the nxt case

            case 'object': //object: checking for matching methods
                for (var m in args) { //for each property of the object
                    if (typeof args[m] !== "function")
                        continue;
                    if (typeof o[m] !== "function")
                        return false;

                }
        }
    }
    return true;
}

//NOTE: it only tests that an object has one or more function valued properties with specified names
//they dont tell us anything about functions or how many args and what kind of args