class Book {
    constructor(title, author, publisher, publicationYear, available){
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.available = available; 
    }

    a(title, author, publisher, publicationYear, available){
        console.log("Hello World")
    }
}

class Library {
    constructor(name, address, phone, qtdBook){
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.books = [];
    }

    searchBook(title){
        let foundBook = this.books.find(book => book.title === title);

        if (foundBook) {
            console.log("Name: " + foundBook.title);
            console.log("Author: " + foundBook.author);
            console.log("Available: " + foundBook.available);
        } else {
            alert("There is not a book with this name");
        }
    }

    borrowBook(title){
        const foundBook = this.books.find(book => book.title === title);

        if (foundBook) {
            foundBook.available = false;
            console.log("Book borrowed !");
        } else {
            console.log("Book not found.");
        }
    }

    devolution(title){
        const foundBook = this.books.find(book => book.title === title);

        if (foundBook) {
            foundBook.available = true;
            console.log("Book returned !");
        } else {
            console.log("Book not found.");
        }
    }
}

let books = [];

function registerBook(title, author, publisher, publicationYear, available){
    const newBook = new Book(title, author, publisher, publicationYear, available);
    books.push(newBook);
    return newBook;
}

let library = new Library("My Library", "123 Main St", "555-1234");

let book1 = registerBook("a", "b", "c", "d", true);
let book2 = registerBook("A", "B", "C", "D", true);

library.books.push(book1, book2);

library.borrowBook("a");
library.searchBook("a");
library.devolution("a");
library.searchBook("a");
