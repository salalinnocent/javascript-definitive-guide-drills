//bind the function to an object, added in ECMA 5

function f(y) {
    return this.x + y;
}
var o = {
    x: 1
}
var g = f.bind(o);
g(2)
console.log(g)


if (!Function.prototype.bind) {
    Function.prototype.bind = function (o, arguments) {
        var self = this, boudArgs = arguments
        return function () {
            var args = [], i;
            for (i = 1; i < boudArgs.length; i++)
                args.push(boudArgs[i])
            for (i = 0; i < arguments.length; i++)
                args.push(boudArgs[i])

            return self.apply(o, arguments)
        };
    }
} 