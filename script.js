let books = []

const appendBook = () => {
    let add = true
    const bookName = document.getElementById('bookname').value
    books.forEach(element => {
        if (bookName == element) {
            alert('Book already added!')
            add = false
        }
    });
    if (add) {
        books.push(bookName)
        renderBook(bookName)
    }
}

const renderBook = (bookName) => {
    const shelf = document.getElementById('bookshelf')
    const book = document.createElement('div')
    book.setAttribute('class', 'book')
    book.innerHTML =  bookName
    shelf.append(book)
}