User.js

module.exports = class User {
  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.password = password
  }
}

Author.js

module.exports = class Author {
  constructor(name, nationality, bio) {
    this.name = name
    this.nationality = nationality
    this.bio = bio
  }
}

Product.js

module.exports = class Product {
  constructor(name, description, price, inStock = 0) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = inStock
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  removeFromStock(quantity) {
    this.inStock -= quantity
  }
}

Book.js

const Product = require("./Product");

module.exports = class Book extends Product {
  constructor(title, synopsis, genre, pages, author, description, price, inStock = 0) {
    super(`Livro: ${title}`, description, price, inStock)
    this.title = title
    this.synopsis = synopsis
    this.genre = genre
    this.pages = pages
    this.author = author
  }
}

Posters.js

const Product = require('./Product')

module.exports = class Poster extends Product {
  constructor(name, description, height, width, price, inStock = 0) {
    super(name, description, price, inStock)
    this.height = height
    this.width = width
  }
}

Order.js

module.exports = class Order {
  #total
  #items
  #user

  constructor(items, user) {
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error('Quantidade insuficiente em estoque!')
      }
    })
    this.#items = items
    this.#user = user
    this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0)
  }

  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total
    }
  }
}

Database.js

module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: []
  }

  find(key) {
    return this.#storage[key]
  }

  saveAuthor(author) {
    this.#storage.authors.push(author)
  }

  findBookByName(bookName) {
    return this.#storage.books.find(b => b.name === bookName)
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name)
    if (!bookExists) [
      this.#storage.books.push(book)
    ]
  }

  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.addToStock(quantity)
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName)
    book?.removeFromStock(quantity)
  }

  findPosterByName(posterName) {
    return this.#storage.posters.find(p => p.name === posterName)
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name)
    if (!posterExists) [
      this.#storage.posters.push(poster)
    ]
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    poster?.addToStock(quantity)
  }

  removePostersFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName)
    poster?.removeFromStock(quantity)
  }

  saveUser(user) {
    const userExists = this.#storage.users.find(u => u.email === user.email)
    if (!userExists) {
      this.#storage.users.push(user)
    }
  }

  saveOrder(order) {
    this.#storage.orders.push(order)
  }

  showStorage() {
    console.table(this.#storage.authors)
    console.table(this.#storage.books)
    console.table(this.#storage.posters)
    console.table(this.#storage.users)
    console.table(this.#storage.orders.map(order => order.data))
  }
}

App.js

const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const Order = require("./entities/Order")
const Poster = require("./entities/Poster")
const User = require("./entities/User")

module.exports = class App {
  static #database = new Database()

  createUser(name, email, password) {
    const user = new User(name, email, password)
    App.#database.saveUser(user)
  }

  getUsers() {
    return App.#database.find('users')
  }

  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio)
    App.#database.saveAuthor(author)
  }

  getAuthors() {
    return App.#database.find('authors')
  }

  createBook(title, synopsis, genre, pages, author, description, price, inStock) {
    const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
    App.#database.saveBook(book)
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity)
  }

  getBooks() {
    return App.#database.find('books')
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock)
    App.#database.savePoster(poster)
  }

  addPoster(postername, quantity) {
    App.#database.addPostersToStock(postername, quantity)
  }

  getPosters() {
    return App.#database.find('posters')
  }

  createOrder(items, user) {
    const order = new Order(items, user)
    App.#database.saveOrder(order)
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity)
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity)
      }
    })
  }

  getOrders() {
    return App.#database.find('orders')
  }

  showDatabase() {
    App.#database.showStorage()
  }
}

Index.js

const App = require('./App')

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'British', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()

app.createBook('O Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('A Sociedade do Anel', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('O Ladrão de Raios', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('A Pirâmide Vermelha', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)

const books = app.getBooks()

app.createUser('Isaac', 'isaac@email.com', '123456')

const users = app.getUsers()

app.showDatabase()

const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  }
]

app.createOrder(items, users[0])

app.showDatabase()
