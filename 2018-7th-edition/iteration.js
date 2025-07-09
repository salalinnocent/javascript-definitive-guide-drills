let array = [1, 2, 3, 4, 5];
let i = 0;
while (i < array.length) {
    console.log(array[i])
    i++;
}

function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number
    }
    return total
}
let books = [1,10]
console.log(sum(books))

function average(sequence, numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += average(Math.floor(numbers + sequence / 2))
    }
    return total;

}
console.log(average(10))
