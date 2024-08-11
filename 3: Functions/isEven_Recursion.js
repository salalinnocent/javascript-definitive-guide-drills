// Define a resucrsive fucntion isEven
// function accept a single parameter (a +ve whole number and return a Boolean)
// test it on 50 & 75, see how it behaves on -1. 
// Hint
// zero is even, one is odd, eveness is same as N - 2

function isEven(N) {

    N = Math.abs(N)

    if (N === 0) {
        return true;

    } else if (N === 1) {
        return false;
    }
    return isEven(N - 2)
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));