
//created a two dimenional array and multiplied the row*col
let table = new Array(10)
for (let i = 0; i < table.length; i++)
    table[i] = new Array(10)
for(let row = 0; row < table.length; row++){
    for(let col = 0; col < table[row].length; col++){
        table[row][col] = row * col
    }
}
var product = table[5][7]
console.log(product)


