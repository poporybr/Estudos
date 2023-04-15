const somar = document.querySelector('#btnSomar');
somar.addEventListener("click", () => {
    let entrada = parseFloat(document.getElementById('inputN').value)
    let parag =  document.getElementById('nResult')
    let saida = parseFloat(parag.innerText)
    document.getElementById('nResult').innerHTML = entrada + saida
    document.getElementById('inputN').value = 0
})

const subtrair = document.querySelector('#btnMenos');
subtrair.addEventListener("click", () => {
    let entrada = parseFloat(document.getElementById('inputN').value)
    let parag =  document.getElementById('nResult')
    let saida = parseFloat(parag.innerText)
    document.getElementById('nResult').innerHTML = saida - entrada
    document.getElementById('inputN').value = 0
})

const multiplicar = document.querySelector('#btnVezes');
multiplicar.addEventListener("click", () => {
    let entrada = parseFloat(document.getElementById('inputN').value)
    let parag =  document.getElementById('nResult')
    let saida = parseFloat(parag.innerText)
    document.getElementById('nResult').innerHTML = entrada * saida
    document.getElementById('inputN').value = 0
})

const dividir = document.querySelector('#btnDividido');
dividir.addEventListener("click", () => {
    let entrada = parseFloat(document.getElementById('inputN').value)
    let parag =  document.getElementById('nResult')
    let saida = parseFloat(parag.innerText)
    document.getElementById('nResult').innerHTML = saida / entrada
    document.getElementById('inputN').value = 0
})

const limpar = document.getElementById('btnClear');
limpar.addEventListener("click", () => {
    parseFloat(document.getElementById('inputN').value = 0)
    document.getElementById('nResult').innerHTML = 0
})