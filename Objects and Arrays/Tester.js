//Arrays have a reverse method that changes the array by inverting the order in
//which its elements appear. For this exercise, write two functions, reverseArray
//and reverseArrayInPlace. The first, reverseArray, takes an array as argument
//and produces a new array that has the same elements in the inverse order. The
//second, reverseArrayInPlace, does what the reverse method does: it modifies
//the array given as argument by reversing its elements. Neither may use the
//standard reverse method.


function reverseArray(array) {
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
console.log(reverseArray(Cousins))
console.log(reverseArray(Marks))
function reverseArrayInPlace() {

}