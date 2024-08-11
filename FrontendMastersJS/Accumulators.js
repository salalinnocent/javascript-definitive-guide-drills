function joinElements1(array, joinString) {
    // [0,'']
    function recurse(index, resultSoFar) {
        resultSoFar += array[index];
        //base case if we reach end of the array
        if (index === array.length - 1) {
            return resultSoFar; // we return the result we have
        } else {
            // else we keep recursing 
            return recurse(index + 1, resultSoFar + joinString)
        }
    }
    return recurse(0, '');
}

console.log(joinElements1(['s', 'w', 'e', 'd', 'e', 'n']))

var a = [1, 2, 3, 4, 5]
var sum = a.reduce(function (x, y) {
    return x + y
}, 0)
console.log(sum)

var initalValue = -Infinity
var max = a.reduce(function (x, y) {
    return (x > y) ? x : y;
}, initalValue)
console.log(max)

var example = [2, 3, 4]
var big = example.reduceRight(
    function (accumulator, value) {
        return Math.pow(value, accumulator);
    }
);
console.log(big)


function joinTheElements(list, joinElements) {
    let result = ''
    for (let i = 0; i < list.length - 1; i++) {

        result += list[i] + joinElements
    }
    return result + list[list.length - 1]
}
var test = ['s', 'cr', 't cod', ':) :)']
joinTheElements(test)