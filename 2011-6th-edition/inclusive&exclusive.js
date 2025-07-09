
//INCLUSIVE RANGE
function inclusiveRange(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}

console.log(inclusiveRange(1, 5));

//EXCLUSIVE RANGE
function exclusiveRange(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(i)
    }
    return result
}
console.log(exclusiveRange(1, 5));
