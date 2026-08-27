 const campo = document.getElementById('nome');
  const lista = document.getElementById('fila');

  function adicionar() {
    const nome = campo.value.trim();
    if (nome === '') return;

    const item = document.createElement('li');
    item.textContent = nome;

    // EVENTO de mouse: passar o mouse por cima destaca o item
    item.addEventListener('mouseover', function () { item.classList.add('destaque'); });
    item.addEventListener('mouseout', function () { item.classList.remove('destaque'); });

    // EVENTO de clique: remove o item da fila (senha chamada)
    item.addEventListener('click', function () { item.remove(); });

    lista.appendChild(item);
    campo.value = '';
  }

  document.getElementById('btnAdicionar').addEventListener('click', adicionar);

  // EVENTO de teclado: Enter também adiciona
  campo.addEventListener('keydown', function (evento) {
    if (evento.key === 'Enter') adicionar();
  });