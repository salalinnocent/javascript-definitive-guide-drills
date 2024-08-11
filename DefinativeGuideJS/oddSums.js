function oddSum(n) {
    let total = 0, result = [];
    for (let i = 1; i <= n; i++) {
        let odd = 2 * i - 1
        total += odd;
        result.push(total)
    }
    return result;
}
console.log(oddSum(5));
