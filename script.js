const myLibrary = [];

function Book(title, author, pages, readYet) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}

function addBookToLibrary() {
  var newBook = new Book(document.getElementById("title"), document.getElementById("author"), document.getElementById("pages"), document.getElementById("readYet"));
  const grid_container = document.getElementById("grid-container");
  const grid_item = document.createElement("div");
  
  grid_container.appendChild

}
