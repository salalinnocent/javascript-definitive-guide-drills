function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray
}

let oldarray = [1, 2, 4, 5]
let reverse = reverseArray(oldarray)
console.log(reverse)

function reverseArray(array) {
    let collector = [];
    for (let i = array.length - 1; i <= 0; i--) {
        collector.push(array)
    }
    return collector
}