//write a range function take two argumnets start and end 
//returns an array all the numbers in an array start and to the end 

//write a sum function that takes an array of numbers and return the sum of
//these numbers. example to run on returns 55

// 
function Range(start, end, step = start > end ? 1 : -1) {
    if (step > 0) {

        for (let i = start; step <= end; i++) {
            Range.push(i)
        }
    } else {
        for (let i = end; step >= end; i++)
            Range.push(i)
    }
    return Range
}

function sum(numbers){
    let total = 0;
    for(let number of numbers){
        total += numbers
    }
    return total
}


const testRange = Range(1, 99)
console.log(Range)
const testSum = sum(testRange)
console.log(testSum)