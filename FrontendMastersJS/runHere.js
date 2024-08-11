const Memo = (fn) => {
    let garbageCollector = {};
    return (...args) => {
        let n = args[0];
        if (n in garbageCollector) {
            return garbageCollector[n];
        }
        else {
            let result = fn(n)
            garbageCollector[n] = result
            return result;
        }
    }
}

const factorial = Memo(
    (x) => {
        if (x === 0) {
            return 1;
        } else {
            return x * factorial(x - 1)
        }
    })