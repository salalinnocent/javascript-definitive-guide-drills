//Important feature that classes act as Modules
// Reason why classes are module bec objects are modular

const BitSet = (function () {
    //private imp details go here
    function isValid(set, n) {
        return isValid
    };
    function has(sets, bytes, bit) {
        return has
    };
    const BITS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);

    const MASKS = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]);

    return class BitSet extends AbstractWritableSet {

    };
}());



//This is how we define a stats module
const stats = (function () {

    //utility functions private to the module
    let sum = function (x, y) {
        return x + y
    };
    let square = function (x) {
        return x * x
    };
    //A public function that will be exported

    // .reduce takes a callback function f() and in that callback it takes (acc, currentValue, currentIndex,
    // array on which method is called), InitialValue => which is saved in acc
    function mean(data) {
        return data.reduce(sum) / data.length
    };
    //A public function that we will export
    function stdev(data) {
        let m = mean(data);
        return Math.sqrt(
            data.map(x => x - m).map(square).reduce(sum) / (data.length - 1)

        );

    };
    //Exporting public function as properties of an object
    return { mean, stdev };
}());


console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stdev([1, 3, 5, 7, 9]));

const modules = {};
function require(moduleName) {
    return modules[moduleName];
}
modules["sets.js"] = (function () {
    const exports = {};

    //the content of the sets.js file go here
    exports.BitSet = class BitSet { };

    return exports
}());

modules[stats.js] = (function () {
    const exports = {};

    //The contents of the stats.js files go here

    const sum = function (x, y) {
        return x + y
    }
    const square = function (x) {
        return x * x
    }
    exports.mean = function (data) {
        return data.reduce(sum) / data.length
    }

    return exports
}());

