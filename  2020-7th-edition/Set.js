
//Create a Set Object with the set Constructor
// A set cannot contain DUPLICATES
// You can also add TYPES
// strict equality check === because of point 3 add(): types++
//OPTIMIZED: For membership testing...

let s = new Set();
let t = new Set([1, s]);


//Set will eat the repeated values from an array
let unique = new Set("Missisippi")
console.log(unique.size);

console.log(s.size);
console.log(s.add(1));
console.log(s.delete(1));

// add(): always returns the set it is invoked on, to add multiple values we will need method chaining 
// delete(): deletes a single element at a time, returns a boolean value

//IMPORTANT: To check element present in there with .has()
let onDigitPrimes = new Set([2, 3, 5, 7])
onDigitPrimes.has(2)

//of used to iterate values of an array
let sum = 0;
for (let i of onDigitPrimes) {
    sum += i
}
console.log(sum);
[...onDigitPrimes]
Math.max(...onDigitPrimes)

let product = 1;
onDigitPrimes.forEach(n => {
    product *= n
})
console.log(product);