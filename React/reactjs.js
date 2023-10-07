const books = [
    { id: 1, title: 'Hobit', author: 'J.R.R. Tolkien', genre: 'fantasy', price: 250 },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'sci-fi', price: 180 },
    { id: 3, title: 'Válka a mír', author: 'Lev Nikolajevič Tolstoj', genre: 'historical', price: 450 },
    { id: 4, title: 'Kytice', author: 'Karel Jaromír Erben', genre: 'poetry', price: 150 },
    { id: 5, title: 'Dune', author: 'Frank Herbert', genre: 'sci-fi', price: 280 },
    // ... můžete přidat více knih podle vašeho výběru , ne
];

function getBooksOver200(kniha) {
    const booksOver200 = [];
    for (book of kniha) {
        if (book.price >= 200) {
            booksOver200.push(book)
        }
    }
    return booksOver200
}

function getScifiBooks() {
    const scifiBooks = [];
    for (book of books) {
        if (book.genre === 'sci-fi') {
            scifiBooks.push(book)
        }
    }
    return scifiBooks
}

function avgPriceScifi() {
    const scifiBooks = getScifiBooks()
    let price = 0
    for (book of scifiBooks) {
        price += book.price
    }
    return price / scifiBooks.length
}


console.log(getBooksOver200(books))
console.log(avgPriceScifi())

const discount = books.map((book) => book.price * 0.9)
console.log(discount)