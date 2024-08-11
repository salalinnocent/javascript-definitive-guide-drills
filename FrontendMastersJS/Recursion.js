//To start with recursion you have to return something somewhere otherwise infinte loop and never geetting back to the other functionality

//Identify the Base Case
//Identify Recursive Case
//Return where appropraite
//Write procedures for each case that bring you closer to the base case.
const loopNTimes = (n) => {

    console.log('n ===', n)
    if (n <= 1) {
        return 'complete';
    }
    return loopNTimes(n - 1);
};

loopNTimes(3);

// we are going one step down mean decrementing from 3 to 2 to 1