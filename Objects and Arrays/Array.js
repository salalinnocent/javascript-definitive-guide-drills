function average(array) {
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total/array.length;
}


let students = [10, 10]
console.log(average(students))


function reversearray(items){
    let total = 0;
    for(let i = 0; i < items.length; i++){

        total = items.length
    }
    return total
}

let scores = [1, 2, 3, 4, 5]
console.log(reversearray(scores))