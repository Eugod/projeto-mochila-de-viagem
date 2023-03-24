const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');

const itens =[];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = e.target.elements['nome'];
    let quantidade = e.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);

    nome.value = '';
    quantidade.value = '';
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.innerHTML = `<strong>${quantidade}</strong> ${nome}`;

    lista.appendChild(novoItem);

    const itemAtual = {
        nome: nome,
        quantidade: quantidade,
    }

    itens.push(itemAtual);

    localStorage.setItem('itens', JSON.stringify(itens));
}