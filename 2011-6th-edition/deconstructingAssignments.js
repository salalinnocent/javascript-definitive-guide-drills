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


//Convert [x,y] coordinates to [r, theta] polar cordinates
function polar(x, y) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}
function cartesian(r, theta) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}
let [r, theta] = polar(1.0, 1.0);
console.log(polar);


//Chaining different parameters is easy 
//while using deconstructing approach of JavaScript esp in 'ARRAYS'
let first, second, all;
all = [first, second] = [1, 2, 3, 4]
console.log(all);
console.log(first);
console.log(second);

let firstName, secondName, completeName;
completeName = [firstName, secondName] = ['Arsal', 'Innocent']
console.log(completeName);

let [one, [twoA, twoB]] = [1, [2, 3.3, 23], 3]
console.log(twoA);


// r, g, b are the property names
// red, green, blue are the value names
let transparent = { r: 0.0, g: 0.0, b: 0.0, a: 1.0, };
let { r: red, g: green, b: blue } = transparent;


//Same as let sin=Math.sin, cos=Math.cos, tan= Math.tan

let { sin: sin, cos: cos, tan: tan } = Math


let data = {
    name: "destructing assignment",
    type: "extension",
    impl1: [{ engine: 'spidemonkey', version: 1.7 },
    { engine: 'rhino', version: 1.7 }
    ]
};

let o = { one: 1, two: 2, three: 3 }
for (let p in o) {
    console.log(p);
    for (let v in o) {
        console.log(value);
    }
}

