 // FUNÇÃO que devolve uma Promise: simula um atendimento que demora
  function atender(nomeCliente) {
    return new Promise(function (resolve)({
   setTimeout(function () {
        resolve(`${nomeCliente} foi atendido!`);
    })