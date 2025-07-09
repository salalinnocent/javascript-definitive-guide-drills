
//recursiveSummation function to sum up any mix of values in an array
function recursiveSummation(arguments) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {

        let element = arguments[i], n;
        if (element == null) continue;

        if (Array.isArray(element))
            n = recursiveSummation.apply(this, element);

        else if (typeof element === `function`)
            n = Number(element());

        else n = Number(element);

        if (isNaN(n)){
            try {
                continue;
            } catch (error) {
                console.log(`cannot be converted to ${error} ${element}`)
            }
        }
        total += n;
    }
    return total;
}

var dash = [1, 2, 3, 4, 5, 6, true]
console.log(recursiveSummation(dash))
