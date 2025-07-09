//FOREACH: never returns a value we have to explicity 

let books = [1,2,3,4,5];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0;
books.forEach(function(values){sum += values; })
numbers.forEach(function(values){sum += values})

books.forEach(function(v, i , a){a[i] = v + 1; })
console.log(books)


console.log(numbers.forEach(function(v,i, a){a[i] = v + 1}))