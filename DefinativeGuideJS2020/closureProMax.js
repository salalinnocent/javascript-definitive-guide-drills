let scope = "globalScope";

function checkScope() {
    let scope = "localScope"
    function f() {
        return scope;
    }
    return f();
}
checkScope();
console.log(checkScope());

//Immediately invoked function()
let uniqueInteger = (function () {
    let counter = 0;
    return function () {
        return counter++
    }
}());
console.log(uniqueInteger());
console.log(uniqueInteger());

function counter() {
    let n = 0;
    return {
        count: function () { return n++ },
        reset: function () { return n = 0 }
    }
}

let c = counter(), d = counter(); // Create two counters
console.log(c.count());
console.log(d.count());
c.reset();
console.log(c.count());
console.log(d.count()); // => 0
 // => 0: they count
//independently
 //

