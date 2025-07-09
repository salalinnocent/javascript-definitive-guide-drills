function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    if (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (arr[mid] == target) {
            return mid
        }
        if (arr[mid] < target) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }

    }
    return -1
}   

let list = [1,4,5,2,1,5,7]
let target = 2
console.log(binarySearch(list, target))