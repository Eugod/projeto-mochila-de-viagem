const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');

let itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = e.target.elements['nome'];
    let quantidade = e.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        id: Date.now(),
        nome: nome.value,
        quantidade: quantidade.value,
    }

    if(existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual); 
    } else {
        criaElemento(itemAtual);

        itens.push(itemAtual);
    }

    localStorage.setItem('itens', JSON.stringify(itens));

    nome.focus();
    nome.value = '';
    quantidade.value = '';
})

function criaElemento(obj) {
    const novoItem = document.createElement('li');
    novoItem.dataset.id = obj.id
    novoItem.classList.add('item');
    novoItem.innerHTML = `<strong>${obj.quantidade}</strong> ${obj.nome}`;
    
    novoItem.appendChild(botaoDeleta(obj.id))

    lista.appendChild(novoItem);
}

function atualizaElemento(obj) {
    let li = document.querySelector(`[data-id='${obj.id}']`);

    li.innerHTML = `<strong>${obj.quantidade}</strong> ${obj.nome}`;

    li.appendChild(botaoDeleta(obj.id))

    itens.forEach((elemento) => {
        if(elemento.id === obj.id) {
            elemento.quantidade = obj.quantidade;
        }
    })
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = 'X';

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentElement, id)
    })

    return elementoBotao;
}

function deletaElemento(tag, id) {
   itens = itens.filter(item => item.id != id);

   localStorage.setItem('itens', JSON.stringify(itens));

    tag.remove();
}