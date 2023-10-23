let books = []

const appendBook = () => {
    const bookName = document.getElementById('bookname').value
    books.forEach(element => {
        if (bookName == element) {
            alert('Book already added!')
            return
        }
    });
    books.push(bookName)
}

const renderBooks = () => {
    if (books.length !== 0) {
        const shelf = document.getElementById('bookshelf')
        books.forEach(element => {
            const book = document.createElement('div')
            book.setAttribute('class', 'book')
            book.innerHTML = '<p>' + element + '<p>'
            shelf.append(book)
        });
    }
}