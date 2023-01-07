class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login realizado com sucesso.')
    } else {
      console.log('Falha ao fazer login! Email ou senha incorretos.')
    }
  }
}

const john = new User("John Doe", "john@email.com", "123456")

john.login("john@email.com", "123456")
john.login("john@email.com", "654321")


class Product {
  constructor (name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const watch = new Product("Relógio de Pulso", "...", 80)
watch.addToStock(99)
console.log(watch)
console.log(watch.calculateDiscount(15))
console.log(watch.calculateDiscount(10))
