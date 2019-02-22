// console.log('hello world');

// Variables
// ---
// Constants (const)
// - can't reassign
// - initialize with a value
//
// Variables (let)
// - can reassign
// - can be initialized only with name
//
// Variables (var)
// - function-scoped
// - changes throughout code
//
// Global variables (no signifier)
// - unreliable in OUR code
// - only rely on global variables from LANGUAGE
// const myConstant = 'hello'
// let myVariable = 'also hello'
// var myOtherVariable = 'VERY BAD; DON\'T DO THIS'
// myGlobalVariable = 'ALSO VERY BAD; UNNECESSARY'

// Why const instead of let?

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

// addBook(bookList[0])
// addBook(bookList[1])

for (let i = 0; i < bookList.length; i++) {
  addBook(bookList[i])
}

// Methods

// Scope

// Arrays
