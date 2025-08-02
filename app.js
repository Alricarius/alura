let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (!nombre) {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    amigos.push(nombre);
    mostrarAmigos();
    input.value = '';
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de sortear.');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indice];
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}
