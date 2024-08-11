function linearSearch(array, item) {
    for (let key = 0; key < array.length; key++) {
        if (array[key] === item) {
            return array
        }
    }
    return -1;
}