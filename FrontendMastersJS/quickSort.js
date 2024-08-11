function quickSort(array) {
    let length = array.length;
    if (length <= 1) {
        return array
    }

    const PIVOT = array[0];
    const GREATER = [];
    const LESSER = [];
    for(let i = 0; i < length; i++)
        if(array[i] < PIVOT)
            GREATER.push(array[i])
        else {
            LESSER.push(array[i])
        }
        const Sorted = [...quickSort(GREATER), PIVOT, ...quickSort(LESSER)]
        return Sorted;
}

const newArray = [1,2,4,5,6,7,8,]
console.log(quickSort(newArray));