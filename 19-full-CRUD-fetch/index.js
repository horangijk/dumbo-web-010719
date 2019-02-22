// find our form & attach event listner
const createBookForm = document.querySelector('form');
createBookForm.addEventListener('submit', handleCreateBookSubmit)

// event handler callbacks
function handleCreateBookSubmit(event) {
  event.preventDefault();

  // we need to grab all of the form data
  const titleEl = event.target.querySelector('input[name="title"]');
  const authorEl = event.target.querySelector('input[name="author"]');
  const publishDateEl = event.target.querySelector('input[name="publishDate"]');

  // we need to add it to our library
  const newBookData = {
    title: titleEl.value,
    author: authorEl.value,
    publishDate: publishDateEl.value
  }

  addBook(newBookData);
  // postNewBook(newBookData);

  titleEl.value = '';
  authorEl.value = '';
  publishDateEl.value = '';
}

function handleReturnBook(event) {
  const bookLi = event.target.parentElement;
  bookLi.remove();
  returnBookButton = bookLi.querySelector('button');
  returnBookButton.remove();

  checkoutBookButton = document.createElement('button');
  checkoutBookButton.innerText = 'Check out';
  checkoutBookButton.addEventListener('click', handleCheckoutBook);

  bookLi.append(checkoutBookButton);

  const libraryUl = document.querySelector('#library-books')

  libraryUl.append(bookLi);

  // const bookId = bookLi.id.split('book-')[1];
  // updateBook(bookId, false)
}

function handleCheckoutBook(event) {
  const bookLi = event.target.parentElement;
  bookLi.remove();
  checkoutBookButton = bookLi.querySelector('button');
  checkoutBookButton.remove();

  returnBookButton = document.createElement('button');
  returnBookButton.innerText = 'Return Book';
  returnBookButton.addEventListener('click', handleReturnBook);

  bookLi.append(returnBookButton);

  const libraryUl = document.querySelector('#checked-out-books')

  libraryUl.append(bookLi);

  // const bookId = bookLi.id.split('book-')[1];
  // updateBook(bookId, true)
}

// create a new book & add it to the DOM
function addBook(bookData) {
  const newBook = document.createElement('li')
  const newBookTitle = document.createElement('h3')
  const newBookAuthor = document.createElement('cite')
  const newBookPublishDate = document.createElement('p')
  const newBookCheckoutButton = document.createElement('button')
  newBook.append(newBookTitle, newBookAuthor, newBookPublishDate, newBookCheckoutButton)

  newBookTitle.innerText = bookData.title
  newBookAuthor.innerText = bookData.author
  newBookPublishDate.innerHTML = `Published <date>published ${bookData.publishDate}</date>.`

  newBookCheckoutButton.innerText = 'Check out'
  newBookCheckoutButton.addEventListener('click', handleCheckoutBook)
  document.querySelector('#library-books').append(newBook)
}

// our api functions
function getAllBooks() {
  fetch('http://localhost:3000/books')
    .then(function(response) {
      return response.json();
    }).then(function(books){
      for (let i = 0; i < books.length; i++) {
        addBook(books[i])
      }
  });
}

// start our code
getAllBooks();
