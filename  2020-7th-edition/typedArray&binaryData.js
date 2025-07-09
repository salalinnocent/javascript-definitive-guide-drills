//TYPED-ARRAY: typed array are low-level arrrays => Not Typical Arrays
console.log(Array.isArray());
let white = Uint8ClampedArray.of(255, 255, 255, 0);
console.log(white);

// Return the largest prime smaller than n, using the sieve of Eratosthenes