const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener("click", function adicionarItem(){
    const value = document.getElementById('inputToDo').value;
    const valueNoSpace = value.replace('/\s+/g, ""');
    const container = document.getElementById('containerListToDo');

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.id = 'check' + value;

    const paragrafh = document.createElement('p');
    paragrafh.textContent = value;
    paragrafh.id = 'p' + value;

    const card = document.createElement('div');
    card.classList.add('cardToDo');


    card.append(check, paragrafh);
    container.append(card);
});

const btnDelete = document.getElementById('btnDelete');
btnDelete.addEventListener("click", function removerItem(){
    let elementos = document.getElementsByClassName('cardToDo');
    for(let i = 0; i < elementos.length; i++){
        if(i === elementos.length - 1){
            const excluir = elementos[i];
            excluir.remove();
        }
    }
});
