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

  const bookId = bookLi.id.split('book-')[1];
  updateBook(bookId, false)
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

  const bookId = bookLi.id.split('book-')[1];
  updateBook(bookId, true)
}

function addBook(bookData) {
  const newBook = document.createElement('li')
  const newBookTitle = document.createElement('h3')
  const newBookAuthor = document.createElement('cite')
  const newBookPublishDate = document.createElement('p')
  const newBookCheckoutButton = document.createElement('button')
  const newBookDelete = document.createElement('div')
  newBook.append(newBookTitle, newBookAuthor, newBookPublishDate, newBookCheckoutButton)
  newBook.prepend(newBookDelete)

  newBook.id = `book-${bookData.id}`

  newBookTitle.innerText = bookData.title
  newBookAuthor.innerText = bookData.author
  newBookPublishDate.innerHTML = `Published <date>published ${bookData.publishDate}</date>.`

  newBookDelete.innerText = '🗑'
  newBookDelete.classList.add('trash-button')
  newBookDelete.addEventListener('click', handleRemoveBook)

  if (bookData.checked_out) {
    newBookCheckoutButton.innerText = 'Return Book'
    newBookCheckoutButton.addEventListener('click', returnBook)
    document.querySelector('#checked-out-books').append(newBook)
  } else {
    newBookCheckoutButton.innerText = 'Check out'
    newBookCheckoutButton.addEventListener('click', handleCheckoutBook)
    document.querySelector('#library-books').append(newBook)
  }
}

// event handler callbacks
function handleRemoveBook(event) {
  book = event.target.parentElement;
  book.remove()

  bookId = book.id.split('book-')[1];
  deleteBook(bookId)
}

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
  postNewBook(newBookData);

  titleEl.value = '';
  authorEl.value = '';
  publishDateEl.value = '';

}

const createBookForm = document.querySelector('form');
createBookForm.addEventListener('submit', handleCreateBookSubmit)

getAllBooks();


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

function postNewBook(bookData) {
  // optimistic rendering
  // addBook(bookData)

  fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(bookData)
  })
  // if we want to be safe and not update the DOM until this all works:
    // .then(function(response) {
    //   return response.json()
    // })
    // .then(function(book) {
    //   addBook(book)
    // })
}

function updateBook(bookId, checkedOut) {
  fetch(`http://localhost:3000/books/${bookId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ checked_out: checkedOut })
  })
}

function deleteBook(bookId) {
  fetch(`http://localhost:3000/books/${bookId}`, {method: 'DELETE'})
}
