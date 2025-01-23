enum Genre {
  Fiction = "Fiction",
  NonFiction = "NonFiction",
  Mystery = "Mystery",
  Thriller = "Thriller",
  Fantasy = "Fantasy",
  Adventure = "Adventure",
  Romance = "Romance",
  Horror = "Horror",
}

type BookFormat = "Paperback" | "Hardcover" | "Ebook";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  quantity: number;
}

type LibraryBook = Book & {
  format: BookFormat;
};

interface Library {
  inventory: LibraryBook[];
}

const library: Library = {
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

const displayInventory = (library: Library) => {
  console.log("Inventory of the library: ");
  library.inventory.forEach((book) => {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Genre: ${book.genre}`);
    console.log(`Quantity: ${book.quantity}`);
    console.log(`Format: ${book.format}`);
    console.log("-------------------");
  });
};

const searchBooks = (library: Library, searchItem: string) => {
  const result = library.inventory.filter(
    (book) =>
      book.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      book.author.toLowerCase().includes(searchItem.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchItem.toLowerCase())
  );
  if(result.length>0){
    result.forEach((book) => {
        console.log('Search Results:');
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author}`);
        console.log(`Genre: ${book.genre}`);
        console.log(`Quantity: ${book.quantity}`);
        console.log(`Format: ${book.format}`);
        console.log("-------------------");
        });
  }else{
    console.log("No books found");
  }
};

const updateBookQuantity = (library: Library, bookId: number, newQuantity: number): void => {
    const book = library.inventory.find(book => book.id === bookId);
    if (book) {
        book.quantity = newQuantity;
        console.log(`Updated quantity of "${book.title}" to ${newQuantity}.`);
    } else {
        console.log('Book not found.');
    }
};

// Test the Code
displayInventory(library); 
searchBooks(library, '1984'); 
updateBookQuantity(library, 3, 10); 
displayInventory(library); 

