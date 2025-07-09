
//Function-Method-Object
f.call(o)
f.apply(o)

o.m = f // make f temporary method of o
o.m() // Inovoke it passing no args
delete o.m; //Remove temporary method 

// the first args applied on call or apply will become the value 'this'

//to pass two numbers to the function f() and invoke it as a method of object o
f.call(o, 1, 2)
// args are passed as an array but similar to call 
f.apply(o, [1, 2])

//apply here works with array like objects as well as true arrays
var biggest = Math.max.apply(Math, array_of_numbers)


//Replace the method named m if the object with a version that logs.
// messages before and after invoking the original mehthod.

//MONEKY-PATCHING = Dynamic alternation of existing methods
function trace(o, m) {
    var original = o[m]; //Remember original method in the closure
    o[m] = function () { //Now define the new method
        console.log(new Date(), 'entering: ', m); //Log Message

        var result = original.apply(this, arguments); //invoke original
        console.log(new Date(), 'Existing ', m); // log message
        return result //return result
    }
}