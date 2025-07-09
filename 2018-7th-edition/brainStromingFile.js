function reverseArray(items) {
    let result = [];
    for (let i = items.length - 1; i >= 0; i--) {
        result.push(items[i])
    }
    return result;
}
let books = ['oscar wilde', 'charles dicken', 'walter white']
console.log(reverseArray(books))

function reverseInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array;
}

let companies = [1, 2, 3, 4, 5, 6, 7]
console.log(reverseInPlace(reverse(companies)))
