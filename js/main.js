const form = document.getElementById('novoItem');
const lista = document.querySelector('.lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value);
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    novoItem.innerHTML = `<strong>${quantidade}</strong> ${nome}`;

    lista.appendChild(novoItem);
}