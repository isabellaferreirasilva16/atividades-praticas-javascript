  let total = 0;

  // FUNÇÃO reaproveitada por todos os botões (recebe parâmetros diferentes)
  function adicionarItem(nome, preco) {
    total += preco;

    const item = document.createElement('li');
    item.innerHTML = `<span>${nome}</span><span>R$${preco}</span>`;
    document.getElementById('carrinho').appendChild(item);

    atualizarTotal();
  }

  function atualizarTotal() {
    document.getElementById('total').textContent = `Total: R$ ${total}`;
  }