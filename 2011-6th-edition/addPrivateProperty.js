//addPrivateProperty.js

function addPrivateProperty(o, name, predicate) {
    var value;

    o['get' + name] = function () {
        return value;
    };
    o['set', name] = function (v) {
        if (predicate && !predicate(v))
            throw Error('set' + name + ': invalid value ' + v);
        else
            value = v;
    };
}

var o = {};
addPrivateProperty(o, 'Name', function (x) {
    return typeof x == 'string';
});

o.setName('Frank');
console.log(o.getName());
o.setName(o);

function check(args) {
    var actual = args.length //the actual number of arguments
    var expected = args.callee.length; // expected number of arguments
    if (actual !== expected) // checking if they differ
        throw Error('expected ' + expected + 'args; got ' + actual)
}

function f(x, y, z) {
    check(arguments) //checking if the number of arguments is equal to expected number of arguments
    return x, y, z;
}

