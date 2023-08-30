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
  alert("Hello");
  const prompt = document.getElementById("add-book-container");
  const blur_container = document.getElementById("blur-container");
  prompt.classList.remove("inactive");
  prompt.classList.add("active");
  blur_container.classList.remove("inactive")
  blur_container.classList.add("active");
}
function addBookToLibrary() {
  var newBook = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("readYet").checked);
  const grid_container = document.getElementById("grid-container");
  var grid_item = document.createElement("div");
  grid_item.classList.add("grid-item");
  for (var prop in newBook){
    if(prop == "pages"){
      grid_item.innerHTML += `<p>${newBook[prop]} pages</p>`;
      continue;
    }
    else if(prop == "readYet"){break;}
    grid_item.innerHTML += `<p>${newBook[prop]}</p>`;
  }
  grid_item.innerHTML += newBook['readYet'] ? "<button id='read-button' class='read'>Read</button>":"<button id='read-button' class='not-read'>Read</button>"
  grid_item.innerHTML += "<button id='remove-button'>Remove</button>"; 
  grid_container.appendChild(grid_item);
  const prompt = document.getElementById("add-book-container");
  const blur_container = document.getElementById("blur-container");
  prompt.classList.remove("active");
  prompt.classList.add("inactive");
  blur_container.classList.remove("active");
  blur_container.classList.add("inactive");
}
