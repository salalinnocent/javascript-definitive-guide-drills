function arraycopy(from, from_start, to, to_start, length) {
    for (let i = 0; i < length; i++) {
        to[to_start + i] = from[from_start + i] // to comes first to save the value.length

        
    }
}

function easycopy(args) {
    arraycopy(args.from,
        args.from_start || 0,
        args.to,
        args.to_start || 0,
        args.length)
}

let a = [1, 2, 3, 4, 6, 7], b = [];

console.debug(console.log(easycopy({ from: a, to: b, length: 4 })))
