const times10 = (number) => number * 10



// with cb we are caling a callback function
const memoize = (cb) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            return cache[n]
        } else {
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    }
}

const memoizedTimes10 = memoize(times10);
console.log('')
try {
    console.log('task 4 calculated value:', memoizedTimes10())
    console.log('task 4 cached value:', memoizedTimes10())
} catch (error) {
    console.log('Task 4', error)
}