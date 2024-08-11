const memoizer = (fn) => {
    //saving the results here
    let garbageCollector = {};

    //args means it can take any parameters
    return (...args) => {
        let n = args[0];

        //checking in our garbeCollector object
        if (n in garbageCollector) {
            console.log('fetching from cache: ', n)
            return garbageCollector[n];
        } else {
            console.log('Calculating result: ', n);
            let result = fn(n);
            garbageCollector[n] = result;
            return result;
        }
    }
}

const factorial = memoizer((x) => {
    // here is our base case
    if (x === 0)  {
        return 1;
    } else {
        return x * factorial(x - 1)
    }
});


const MemoizedFactorial = memoizer(factorial)
console.log(MemoizedFactorial(5))
console.log(MemoizedFactorial(7))
console.log(MemoizedFactorial(5))
