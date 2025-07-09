//Recursive Approach to find uniqueIntegers and save it 
// Outputs unique integer every time executed.
//counter property of the function of the given 
uniqueIntegers.counter = 0;

// each call increments and return the counter
function uniqueIntegers() {
    return uniqueIntegers.counter++
}

// Properties of Function 
function factorial(n) {
    if (isFinite[n] && n > 0 && n == Math.round[n]) {
        if (!(n in factorial)) {
            factorial[n] = n * factorial(n - 1)
        } return factorial[n]
    } else {
        return NaN
    }
}
//BASE CASE 
factorial[1] = 1

//another way to invoke and define at the same time
//this approach is less buggy then the previous version on top

var uniqueInteger = (function () { //define and invokation
    var counter = 0; //private state of function 
    return function () {
        return counter++
    };
}());

function counter() {
    var n = 0;
    return {
        count: function () { return n++ },
        reset: function () { return n = 0 }
    };
}

var c = counter(), d = counter() // creates two counters
c.count() // 0
d.count() // 0: count immediately
c.reset() // reset and count methods share state
c.count() // 0 bec we reset c
d.count() // 1 as we did not reset 

function counter(n) {
    return {
        get count() { return n++ },
        set count(m) {
            if (m >= n) n = m;
            else throw Error('Count can only be set to larger values')
        }
    }
}
var c = counter(1000)
c.count
c.count