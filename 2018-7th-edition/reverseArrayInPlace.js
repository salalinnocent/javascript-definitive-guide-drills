function reverseArray(array) {
    let start = 0;
    let end = array.length - 1;

    while (start > end) {
        let result = array[start]
        array[start] = array[end]
        array[end] = result
        start ++
        end --
    }
    return array
}
