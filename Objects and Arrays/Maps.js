let ages = new Map();
ages.set('Borris', 23);
ages.set('Harley', 43);
ages.set('Wesley', 515)

console.log(`Borris is ${ages.get('Borris')}`)

let scores = new Map();
scores.set('Total', 100, Boolean)
scores.set('Mark',  56, true)
scores.set('KArl', 99, true)
scores.set('Jackob', 77, true)
scores.set('Suzan', 12, false)

console.log(`${scores.get(`Total`)}`)


let okIterator = 'OK'[Symbol.iterator]()
console.log(okIterator.next())
console.log(okIterator.next())
console.log(okIterator.next())