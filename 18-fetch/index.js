const bookList = [{
  title: 'Bridge to Terabithia',
  author: 'John',
  publishDate: '2019'
},
{
  title: 'Diary of Anne Frank',
  author: 'Anne Frank',
  publishDate: 'yah.'
}]

function addBook(bookData) {
  const libraryUl = document.querySelector('#library-books')

  const newBook = document.createElement('li')
  const newBookTitle = document.createElement('h3')
  const newBookAuthor = document.createElement('cite')
  const newBookPublishDate = document.createElement('p')

  newBook.append(newBookTitle, newBookAuthor, newBookPublishDate)

  newBookTitle.innerText = bookData.title
  newBookAuthor.innerText = bookData.author
  newBookPublishDate.innerHTML = `Published <date>published ${bookData.publishDate}</date>.`

  libraryUl.append(newBook)
}


for (let i = 0; i < bookList.length; i++) {
  addBook(bookList[i])
}


function createNewBook(event) {
  event.preventDefault();

  const titleEl = event.target.querySelector('input[name="title"]');
  const authorEl = event.target.querySelector('input[name="author"]');
  const publishDateEl = event.target.querySelector('input[name="publishDate"]');

  const newBookData = {
    title: titleEl.value,
    author: authorEl.value,
    publishDate: publishDateEl.value
  }

  addBook(newBookData);
}

const createBookForm = document.querySelector('form');
createBookForm.addEventListener('submit', createNewBook)









const  response = fetch('https://www.googleapis.com/books/v1/volumes?q=cheese');
