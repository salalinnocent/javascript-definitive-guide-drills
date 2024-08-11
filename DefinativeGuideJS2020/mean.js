const sum = (x, y) => x + y;
const square = x => x * x;

let data = [1, 1, 3, 5, 5]
let mean = data.reduce(sum) / data.length;
let derivation = data.map(x => x - mean);
let stdev = Math.sqrt(derivation.map(square).reduce(sum) / (data.length - 1));

console.log(stdev);

//Functional Way 
const map = function (a, ...args) {
    return a.map(...args)
}
const reduce = function (a, ...args) {
    return a.reduce(...args)
}
let data2 = [1, 1, 3, 5, 5]
let mean2 = reduce(data, sum) / data.length;
let stdrd = Math.sqrt(reduce(map(derivation, square), sum) / (data.length - 1))
console.log(stdrd);