function adicionarItem(){
    const value = document.getElementById('inputToDo').value
    const valueNoSpace = value.replace('/\s+/g, ""');
    const container = document.getElementById('containerListToDo');

    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.id = 'check' + value;

    const paragrafh = document.createElement('p');
    paragrafh.textContent = value;
    paragrafh.id = 'p' + value;

    const btnDelete = document.createElement('img');
    btnDelete.setAttribute('onClick', 'removerItem()');
    btnDelete.setAttribute('src', '../imgs/excluir.png')
    btnDelete.classList.add('btnDeleteToDo')

    const card = document.createElement('div');
    card.id = 'div' + valueNoSpace;
    card.classList.add('cardToDo');


    card.append(check, paragrafh, btnDelete);
    container.append(card);
}