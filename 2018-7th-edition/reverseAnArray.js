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

//Arrays have a reverse method that changes the array by inverting the order in
//which its elements appear. For this exercise, write two functions, reverseArray
//and reverseArrayInPlace. The first, reverseArray, takes an array as argument
//and produces a new array that has the same elements in the inverse order. The
//second, reverseArrayInPlace, does what the reverse method does: it modifies
//the array given as argument by reversing its elements. Neither may use the
//standard reverse method.

function reverseAnArray(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        let result = array[start]
        array[start] = array[end]
        array[end] = result
        start ++;  
        end --;
    }
    return array
}


let Cousins = ['Sarrat', 'Arsal', 'Dj']
let Marks = [12, 13, 14, 18, 20]
console.log(reverseAnArray(Cousins))
console.log(reverseAnArray(Marks))
