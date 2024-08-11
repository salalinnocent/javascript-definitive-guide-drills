const factorial = (n) => {
    //calculation n * (n-1) * (n-2) * .. (2)..(1)
    return factorial;
}

// Iritatable Solution of Factorial
function computeFactorial(numbers) {
    let result = 1;

    for (var i = 2; i <= numbers; i++) {
        result *= i
    }
    return result;
}

// Recursive Solution of Factorial

function calculateFactorial(arguments) {
    if (arguments === 1) {
        return 1;
    } else {
        return arguments * calculateFactorial(arguments - 1) // <- here recursion 

    }
}
console.log(calculateFactorial(5))


//Looping Recursive 
