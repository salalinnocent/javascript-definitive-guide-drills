//FINDING MAX HERE IN AN ARRAY OF NUMBERS
//variadic function pass any number of arguments and still gets to the function end
function max() {
    var max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arguments.length; i++) 
        if (arguments[i] > max) max = arguments[i]
            return max;

    }

var largest =  [1, 22, 44, 55, 777]
console.log(max(1, 22, 110000, 22, 31231, 21231131))


function max1(){
    for(let i = 0; i < arguments.length; i++)
    if(arguments[i] > max) max = arguments[i]
    return max
}