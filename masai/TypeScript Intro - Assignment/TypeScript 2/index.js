var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "NonFiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["Fantasy"] = "Fantasy";
    Genre["Adventure"] = "Adventure";
    Genre["Romance"] = "Romance";
    Genre["Horror"] = "Horror";
})(Genre || (Genre = {}));
var library = {
    inventory: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: Genre.Fiction,
            quantity: 5,
            format: "Hardcover",
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            genre: Genre.Fiction,
            quantity: 3,
            format: "Hardcover",
        },
        {
            id: 3,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            genre: Genre.Fiction,
            quantity: 2,
            format: "Ebook",
        },
        {
            id: 4,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            genre: Genre.Mystery,
            quantity: 8,
            format: "Paperback",
        },
        {
            id: 5,
            title: "Becoming",
            author: "Michelle Obama",
            genre: Genre.NonFiction,
            quantity: 4,
            format: "Hardcover",
        },
    ],
};
var displayInventory = function (library) {
    console.log("Inventory of the library: ");
    library.inventory.forEach(function (book) {
        console.log("Title: ".concat(book.title));
        console.log("Author: ".concat(book.author));
        console.log("Genre: ".concat(book.genre));
        console.log("Quantity: ".concat(book.quantity));
        console.log("Format: ".concat(book.format));
        console.log("-------------------");
    });
};
var searchBooks = function (library, searchItem) {
    var result = library.inventory.filter(function (book) {
        return book.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            book.author.toLowerCase().includes(searchItem.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (result.length > 0) {
        result.forEach(function (book) {
            console.log('Search Results:');
            console.log("Title: ".concat(book.title));
            console.log("Author: ".concat(book.author));
            console.log("Genre: ".concat(book.genre));
            console.log("Quantity: ".concat(book.quantity));
            console.log("Format: ".concat(book.format));
            console.log("-------------------");
        });
    }
    else {
        console.log("No books found");
    }
};
var updateBookQuantity = function (library, bookId, newQuantity) {
    var book = library.inventory.find(function (book) { return book.id === bookId; });
    if (book) {
        book.quantity = newQuantity;
        console.log("Updated quantity of \"".concat(book.title, "\" to ").concat(newQuantity, "."));
    }
    else {
        console.log('Book not found.');
    }
};
// Test the Code
displayInventory(library);
searchBooks(library, '1984');
updateBookQuantity(library, 3, 10);
displayInventory(library);
