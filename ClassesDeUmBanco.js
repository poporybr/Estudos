Classe deposit

module.exports = class Deposit {
  constructor(value) {
    this.value = value
    this.createdAt = new Date()
  }
}

Classe transfer 

module.exports = class Transfer {
  constructor(fromUser, toUser, value) {
    this.fromUser = fromUser
    this.toUser = toUser
    this.value = value
    this.createdAt = new Date()
  }
}

Classe installments 

module.exports = class Installment {
  constructor(value, number) {
    this.value = value
    this.number = number
    this.status = 'pending'
  }
}

Classe loan 

const Installment = require("./Installment")

module.exports = class Loan {
  static #fee = 1.05

  constructor(value, installments) {
    this.value = value
    this.installments = []
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installment((value * Loan.#fee) / installments, i))
    }
    this.createdAt = new Date()
  }

  static get fee() {
    return Loan.#fee
  }

  static set fee(newFeePercentage) {
    Loan.#fee = 1 + (newFeePercentage / 100)
  }
}

Classe acount 

module.exports = class Account {
  #balance
  // #deposits
  // #loans
  // #transfers

  constructor(user) {
    this.owner = user
    this.#balance = 0
    this.deposits = []
    this.loans = []
    this.transfers = []
  }

  get balance() {
    return this.#balance
  }

  addDeposit(deposit) {
    this.#balance += deposit.value
    this.deposits.push(deposit)
  }

  addLoan(loan) {
    this.#balance =+ loan.value
    this.loans.push(loan)
  }

  addTransfer(transfer) {
    if (transfer.toUser.email === this.owner.email) {
      this.#balance += transfer.value
      this.transfers.push(transfer)
    } else if (transfer.fromUser.email === this.owner.email) {
      this.#balance -= transfer.value
      this.transfers.push(transfer)
    }
  }
}

Classe user

const Account = require("./Account")

module.exports = class User {
  constructor(email, fullname) {
    this.email = email
    this.fullname = fullname
    this.account = new Account(this)
  }
}

Classe app 

const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App {
  static #users = []

  static findUser(email) {
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }

  static createUser(email, fullname) {
    const userExists = App.findUser(email)
    if (!userExists) {
      this.#users.push(new User(email, fullname))
    }
  }

  static deposit(email, value) {
    const user = App.findUser(email)
    if (user) {
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer)
      toUser.account.addTransfer(newTransfer)
    }
  }

  static takeLoan(email, value, numberOfInstallments) {
    const user = App.findUser(email)
    if (user) {
      const newLoan = new Loan(value, numberOfInstallments)
      user.account.addLoan(newLoan)
    }
  }

  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }
}

Arquivo teste

const App = require("./App")

App.createUser("isaac@email.com", "Isaac Pontes")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("juliana@email.com", "Juliana Conde")

App.deposit("isaac@email.com", 100)

App.transfer("isaac@email.com", "lucas@email.com", 20)

App.changeLoanFee(10)
App.takeLoan("juliana@email.com", 2000, 24)

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)


//
