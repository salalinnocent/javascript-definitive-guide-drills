//it bind() the function to an object and partially apply the arguments


//Convert Object into real Array 
//object a into array starting from index n


var sum = function (x, y) {
    return x + y
}
function array(a, n) {
    return Array.prototype.slice.call(a, n || 0)
}

function partialLeft(f, /*, ...*/) {
    var args = arguments //save the outer argument
    return function () { // return this function
        var a = array(args, 1); //start with the outer args from 1 on
        a = a.concat(array(arguments)) //add all the inner arguments 
        return f.apply(this, a) //Invoke() f on the argument list
    }
}

/*, ... */
function partialRight(f, /*...*/) {
    var args = arguments;
    return function () {
        var a = array(arguments) //Start with the inner arguments
        a = a.concat(array(args, 1)) // add the outer args starts from 1 on
        return f.apply(this, a) //Then invoke() f on that argument list
    }
}

function partial(f, /*...*/) {
    var args = arguments
    return function () {
        var a = array(args, 1)
        var i = 0, j = 0
        for (; i < a.length; i++)
            if (a[i] === undefined)
                a[i] = arguments[j++];
        a = a.concat(array(arguments, j))
        return f.apply(this, a)
    }
}

//Here is the function with three arguments 
var f = function (x, y, z) {
    return x * (y - z)
};
// Notice how these three partial applications differ
partialLeft(f, 2)(3, 4)
console.log(partialLeft(f, 2)(3, 4));
console.log(partialRight(f, 2)(3, 4));
console.log(partial(f, undefined, 2)(3, 4));

var increment = partialLeft(sum, 1)
console.log(increment);
var cuberoot = partialRight(Math.pow, 1 / 3)
console.log(cuberoot);
String.prototype.first = partial(String.prototype.charAt, 0)
console.log(String.prototype.first = partial(String.prototype.charAt, 0));
String.prototype.last = partial(String.prototype.substr, -1, 1)

var not = partialLeft(compose, function (x) {
    return !x;
})

var even = function (x) {
    return x % 2 === 0;
}
var odd = not(even)

var isNumber = not(isNaN)