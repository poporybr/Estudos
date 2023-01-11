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

