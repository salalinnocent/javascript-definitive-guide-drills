var data = [1, 1, 3, 5, 5]
var total = 0;
for (let i = 0; i < data.length; i++)
    total += data[i];
var mean = total / data.length;
console.log(mean)
total = 0;
for (let i = 0; i < data.length; i++) {
    var deviation = data[i] - mean
    total += deviation * deviation
    console.log(total)
}
var standardDeviation = Math.sqrt(total / (data.length - 1));
console.log(standardDeviation) // std is 2

//We can recreate this by functional progarmming technique

var sum = function (x, y) {
    return x + y
}
var square = function (x) {
    return x * x
}
var data1 = [1, 1, 3, 5, 5];
var mean1 = data1.reduce(sum) / data.length;
var deviation1 = data1.map(function (x) {
    return x - mean;
});
var stddev = Math.sqrt(deviation1.map(square).reduce(sum) / (data.length - 1));

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

    //Reduce array 'a' to a single value using function 'f' and optional initial value.
    //use Array.prototype.reduce if it is defined 
var reduce = Array.prototype.reduce
//By Adding a ? we check for 'OPTIONAL CHAINING' = it allows you to check the values of 
//deeply nested objects
    ? function (a, f, initial) { //if the reduce() method exists
        if (arguments.length > 2)
            return a.reduce(f, initial) //if an initial value was passed
        else return a.reduce(f)
    }
    //if the reduce method doesnt exist we are creating it here
    : function (a, f, initial) {
        var i = 0, len = a.length, accumulator;
        if (arguments.length > 2) accumulator = initial;
        else {
            if (len == 0) throw TypeError();
            while (i < len) {
                if (i in a) {
                    accumulator = a[i++];
                    break;
                }
                else i++;
            }
            if (i == len) throw TypeError();
        }
        while (i < len){
            if(i in a)
                accumulator = f.call(undefined, accumulator, a[i], i, a);
            i++
        }
        return accumulator;
    }
