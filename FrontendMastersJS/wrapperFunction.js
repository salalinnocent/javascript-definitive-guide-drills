//Recursion with Closure
function wrapperFunction(start, end) {
    function recurse(i) {
        if (i < end) {
            recurse(i + 1)
        }
    }
    recurse(start)
}
//Recursion without Closure
function memoFnLoop(i, end) {
    console.log(`looping from ${i} to ${end}`);
    if (i < end) {
        memoFnLoop(i + 1, end)
    }
}