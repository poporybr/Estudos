Os acessadores são um recurso para modificar a forma como acessamos uma propriedade de um objeto. Com o acessador get podemos modificar a forma como uma propriedade é lida e com o acessador set podemos modificar a forma como uma propriedade é alterada via atribuição.
//
1 - Para criarmos adicionarmos um get em uma classe utilizamos o mesmo formato de um método precedido pela palavra get:
class Wallet {
  #amount

  constructor() {
    this.#amount = 100.99 * 100
  }

  get amount() {
    return this.#amount / 100
  }
}

const myWallet = new Wallet()
console.log(myWallet.amount)

2 - Da mesma forma podemos utilizar o set, mas com um parâmetro que se refere ao valor a ser atribuído:
class Wallet {
  #amount
  #username

  constructor() {
    this.#amount = 100.99 * 100 // 10099
  }

  get amount() {
    return this.#amount / 100
  }

  set username(newUsername) {
    if (typeof newUsername === 'string') {
      this.#username = newUsername
    } else {
      console.log('username must be of type string')
    }
  }

  get username() {
    return this.#username
  }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = "Isaac"
console.log(myWallet.username)

myWallet.username += " Pontes"
console.log(myWallet.username)

myWallet.username = 52002
console.log(myWallet.username)


