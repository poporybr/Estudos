function render() {
  console.log('Renderizando a interface da aplicação...')
}

function store() {
  console.log("Salvando as informações no banco de dados...")
}

console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")



// render.js

function render() {
  console.log('Renderizando a interface da aplicação...')
}

module.exports = render




// store.js

function store() {
  console.log("Salvando as informações no banco de dados...")
}

module.exports = store


// index.js

const render = require("./render")
const store = require("./store")

console.log("Aplicação iniciada.")
render()
store()
console.log("Aplicação finalizada.")
