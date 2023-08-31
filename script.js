const myLibrary = [];

function Book(title, author, pages, readYet) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
    this.index = myLibrary.length;
}
function onclick_add_book(){
  const form = document.getElementById("form");
  const prompt = document.getElementById("add-book-container");
  const blur_container = document.getElementById("blur-container");
  prompt.classList.remove("inactive");
  prompt.classList.add("active");
  blur_container.classList.remove("inactive")
  blur_container.classList.add("active");
  form.reset();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    addBookToLibrary();
  });
}
function addBookToLibrary() {
  const form = document.getElementById("form");
  var newBook = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("readYet").checked);
  myLibrary.push(newBook);
  const grid_container = document.getElementById("grid-container");
  var grid_item = document.createElement("div");
  grid_item.classList.add("grid-item");
  grid_item.setAttribute("id",`${newBook.index}`);
  for (var prop in newBook){
    if(prop == "pages"){
      grid_item.innerHTML += `<p>${newBook[prop]} pages</p>`;
      break;
    }
    grid_item.innerHTML += `<p>${newBook[prop]}</p>`;
  }
  grid_item.innerHTML += newBook['readYet'] ? `<button id='read-button-${newBook.index}' class='read' onclick='toggle_readMode(${newBook.index})'>Read</button>`:`<button id='read-button-${newBook.index}' class='not-read' onclick='toggle_readMode(${newBook.index})'>Not Read</button>`
  grid_item.innerHTML += `<button id='remove-button' onclick='removeBookFromLibrary(${newBook.index})'>Remove</button>`; 
  grid_container.appendChild(grid_item);
  const prompt = document.getElementById("add-book-container");
  const blur_container = document.getElementById("blur-container");
  prompt.classList.remove("active");
  prompt.classList.add("inactive");
  blur_container.classList.remove("active");
  blur_container.classList.add("inactive");
  console.log(myLibrary);
}
function removeBookFromLibrary(index){
  var grid_item = document.getElementById(index);
  delete myLibrary[index];
  grid_item.remove();
}
function toggle_readMode(index){
  var read_button = document.getElementById(`read-button-${index}`)
  console.log(myLibrary[index].readYet);
  console.log(read_button);
  if(myLibrary[index].readYet){
    read_button.classList.remove("read");
    read_button.classList.add("not-read");
    read_button.innerHTML = "Not Read";
  }
  else{
    read_button.classList.remove("not-read");
    read_button.classList.add("read");
    read_button.innerHTML = "Read";

  }
  myLibrary[index].readYet = myLibrary[index].readYet ? false:true;
}
