// This file contains all the code to complete all the tasks under the section 'Exploring JavaScript Objects'

console.log("Part 1:"); // displaying starting point 


// Task 1: constructor function for Book(title, author, pages)

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};


// Task 2: method added to Book object to display info

Book.prototype.displayBookInfo = function() {
    console.log(`Book Title: ${this.title}, Book Author: ${this.author}, Number of Pages: ${this.pages}`);
};


// Task 3: array to store Book objects; functions to add and search for books

// create array to store Book objects
let library = []; 

// function to add new book to library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages)
    library.push(newBook);
    console.log("New book added successfully:", title);
}

// function to search for book by title
function searchBook(title) {
        let getBook = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
        console.log(getBook);
    }


// Task 4: function to filter out books with more than 100 pages, map to add 'Title:' & 'Author:' 
function tooManyPages(library) {
    console.log(library.filter(book => book.pages < 100));
}

/* Task 4: Map Function
Using a map function to add 'Title:' and 'Author:' doesn't make sense to be as those properties already 
exist in the array of books that I created, mapping would just change the title and author for all books 
in the library array. So I don't understand what the assignment is asking for there.
*/


// Implementing call of functions for verification of results
addBook('1984', 'George Orwell', 296); // add new book
addBook('Animal Farm', 'George Orwell', 88); // add new book
searchBook('1984'); // search for book
tooManyPages(library) // filter book by page count
