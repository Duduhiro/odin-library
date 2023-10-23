let books = []

const appendBook = () => {
    let add = true
    const bookName = document.getElementById('bookname').value
    const authorName = document.getElementById('bookauthor').value
    books.forEach(element => {
        if (bookName == element.title) {
            alert('Book already added!')
            add = false
        }
    });
    if (add) {
        const book = {
            'author': authorName,
            'title': bookName
        }
        books.push(book)
        renderBook(book)
    }
}

const renderBook = (book) => {
    const shelf = document.getElementById('bookshelf')
    const newBook = document.createElement('div')
    const title = document.createElement('h1')
    const author = document.createElement('h2')
    title.innerHTML = book.title
    author.innerHTML = book.author
    newBook.append(title)
    newBook.append(author)
    newBook.setAttribute('class', 'book')
    shelf.append(newBook)
}