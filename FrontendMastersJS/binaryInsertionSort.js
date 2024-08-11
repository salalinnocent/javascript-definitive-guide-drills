function binarySearch(array, key, low, high) {
    if (start === end) {
        if (array[start] > key) {
            return start;
        } else {
            return start + 1;
        }
    }
    if (start > end) {
        return start;
    }

    const mid = Math.floor((start + end) / 2)

    if (array[mid] < end) {
        return binarySearch(array, key, mid + 1, end)
    } else if (array[mid] > end) {
        return binarySearch(array, key, start, mid - 1)
    } else {
        return mid;
    }
}

export function binaryInsertionSort(array) {
    const totalLength = array.length
}