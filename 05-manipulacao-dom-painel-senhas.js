let senhaAtual = 0;

  document.getElementById('btnChamar').addEventListener('click', function () {
    senhaAtual++;

    // selecionar um elemento e modificar seu conteúdo e estilo
    const painel = document.getElementById('painel');
    painel.textContent = String(senhaAtual).padStart(3, '0');
    painel.style.background = senhaAtual % 2 === 0 ? '#95275e' : '#611536';
  });