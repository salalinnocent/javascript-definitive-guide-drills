

function addFavouriteBook(bookName) {
    if (!bookName.includes("Great")) {
        favouriteBooks.push(bookName)

    }
}
function printFavoriteBooks() {
    console.log(`My Favourite Books: ${favouriteBooks.length}`)
    for (let bookName of favouriteBooks) {
        console.log(bookName)
    }

}

let favouriteBooks = [];
addFavouriteBook('A Song of Ice and Fire');
addFavouriteBook('The Great Gatsby');
addFavouriteBook('Crime and Punishment');
addFavouriteBook('Great Expectations');
addFavouriteBook('You Dont Know JS');

printFavoriteBooks();
