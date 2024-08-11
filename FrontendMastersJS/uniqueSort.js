const uniqueSort = function (array) {
    const cache = {};
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (!cache[array[i]]) {
            result.push(array[i]);
            cache[array[i]] = true;
        }
    }
    return result.sort((a, b) => a - b)
}

console.log(uniqueSort([4,2,2,3,2,2,2]))