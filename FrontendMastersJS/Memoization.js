//Memoization easy up the TIME complexity but the trade off is SPACE Complexity


// From Bianca's Course on Advance JavaScript
const time10 = (numbers) => numbers * 10;

const cache = {};
let result = 0;

const memoTimes10 = (numbers) => {
    if (numbers in cache) {
        console.log(`checking in cache: ${numbers} <- this number is in cache`)
        return cache[numbers];
    }
    else {
        console.log(`checking in cache: ${numbers} <- this number is in cache`)
        let result = time10(numbers)
        cache[numbers] = result;
        return result;
    }
}
const memoizedClosureType = () => {
    let cache1 = {}; //private scoope
    return (n) => {
        if (n in cache1) {
            console.log(`fetching from cache1: ${n}`)
            return cache1[n];
        }
        else {
            console.log(`Calculing the result`)
            let result = n * 10;
            cache1[n] = result;
            return result.toString();

        }
    }
}

// From Definative JavaScript Guide 3rd July 2024

function memoized(f) {
    var cached = {}
    return function () {
        var key = arguments.length + Array.prototype.join.call(arguments, "-_")
        if(key in cached){
            return cached[key]
        }
        else {
            return cached[key] = f.apply(this, arguments)
        }
    }
}

function greatestCommonDivisor(a, b) {
    var t; //creating a temporary variable
    if (a < b) t = b, b = a, a = t; //Swapping variables here
    while (b != 0) t = b, b = a % b, a = t
    return a;

}
var greatestCommonDivisorMemo = memoized(greatestCommonDivisor)
greatestCommonDivisorMemo(85, 187)
console.log(greatestCommonDivisorMemo(85, 187));