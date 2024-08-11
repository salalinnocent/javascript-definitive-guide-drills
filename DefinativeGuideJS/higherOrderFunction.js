//A function that operates on functions, 
//taking one or more functions as arguments and returning a new funtion

//checking if array.prototype.map exists ?
var map = Array.prototype.map
    ? function (a, f) {
        return a.map(f)
    }
    // if not implemented
    : function (a, f) {
        var results = [];
        for (let i = 0, len = a.length; i < len; i++) {
            if (i in a) results[i] = f.call(null, a[i], i, a)

        }
        return results;
    }
//Higher order function not()
function not(f) {
    return function () { //return a new function
        var result = f.apply(this, arguments); //that calls f
        return !result; //and negates the result
    };
}

var even = function (x) { // A function to determine if the number is even
    return x % 2 === 0;
};

var odd = not(even);

console.log([1, 1, 3, 5, 5].every(odd));

//Return a function that expects an array argument and applies f to each element,
// returning the array of return values

function mapper(f) {
    return function (a) {
        return map(a, f);
    }
}
var increment = function (x) {
    return x + 1;
}

var incrementer = mapper(increment);
incrementer([1, 2, 3]) // [2,3,4]
console.log(incrementer);

// takes two function f & g and returns a new function that computes f(g(...))

//returned function h passes all of its arguments to g, and then passes the return value of g
// to f and then returns the return value of f
function compose(f, g) {
    return function () {
        // CALL[f] we use call for f because we are passing a single value
        // APPLY[g] for g bec we are passing an array of values
        return f.call(this, g.apply(this, arguments));
    };
}

var square = function (x) {
    return x * x
}
var sum = function (x, y) {
    return x + y
}
var squareOfSum = compose(square, sum);
console.log(squareOfSum(2, 3));