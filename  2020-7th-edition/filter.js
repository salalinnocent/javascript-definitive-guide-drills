let myNumbers = [1, 2, 3, 4, 5]
let filterMyArray = myNumbers.filter(function (num) {
    return num > 3
})
console.log(filterMyArray);


const newArray = []
myNumbers.forEach((num) => {
    if (num > 1) {
        newArray.push(num)
    }
})
console.log(newArray);

let books = [
    { title: "To Kill a Mockingbird", genre: "Fiction", publishedYear: 1960, author: "Harper Lee" },
    { title: "1984", genre: "Dystopian", publishedYear: 1949, author: "George Orwell" },
    { title: "The Great Gatsby", genre: "Classic", publishedYear: 1925, author: "F. Scott Fitzgerald" },
    { title: "The Catcher in the Rye", genre: "Fiction", publishedYear: 1951, author: "J.D. Salinger" },
    { title: "Moby-Dick", genre: "Adventure", publishedYear: 1851, author: "Herman Melville" },
    { title: "Pride and Prejudice", genre: "Romance", publishedYear: 1813, author: "Jane Austen" },
    { title: "War and Peace", genre: "Historical", publishedYear: 1869, author: "Leo Tolstoy" },
    { title: "The Lord of the Rings", genre: "Fantasy", publishedYear: 1954, author: "J.R.R. Tolkien" },
    { title: "The Hobbit", genre: "Fantasy", publishedYear: 1937, author: "J.R.R. Tolkien" },
    { title: "The Brothers Karamazov", genre: "Philosophical", publishedYear: 1880, author: "Fyodor Dostoevsky" },
    { title: "Crime and Punishment", genre: "Psychological", publishedYear: 1866, author: "Fyodor Dostoevsky" },
    { title: "Brave New World", genre: "Dystopian", publishedYear: 1932, author: "Aldous Huxley" },
    { title: "Anna Karenina", genre: "Romance", publishedYear: 1877, author: "Leo Tolstoy" },
    { title: "The Grapes of Wrath", genre: "Historical", publishedYear: 1939, author: "John Steinbeck" },
    { title: "Catch-22", genre: "Satire", publishedYear: 1961, author: "Joseph Heller" },
    { title: "One Hundred Years of Solitude", genre: "Magical Realism", publishedYear: 1967, author: "Gabriel Garcia Marquez" },
    { title: "Ulysses", genre: "Modernist", publishedYear: 1922, author: "James Joyce" },
    { title: "The Odyssey", genre: "Epic", publishedYear: -800, author: "Homer" },
    { title: "The Iliad", genre: "Epic", publishedYear: -750, author: "Homer" },
    { title: "Don Quixote", genre: "Adventure", publishedYear: 1605, author: "Miguel de Cervantes" }
];

const clientRequest = books.filter((bk) => {
    return bk.genre === "Adventure"

});

const myRequest = books.filter((bk) => {
    return bk.author === "Fyodor Dostoevsky" || bk.genre === "Epic"
});

const yearRequest = books.filter((bk) => {
    return bk.publishedYear > 1960
});


let neoNumbers = myNumbers.filter((item) => {
    if (item[i] !== myNumbers) {
        myNumbers.push(item[i])
    }
})


console.log(clientRequest);
console.log(myRequest);
console.log(yearRequest);