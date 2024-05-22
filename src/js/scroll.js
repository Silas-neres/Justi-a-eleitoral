document.addEventListener("DOMContentLoaded", function () {
  // Selecionando elementos das setas e da lista de links
  const rolarParaCima = document.querySelector(".rolar-up");
  const rolarParaBaixo = document.querySelector(".rolar-down");
  const listaLinks = document.querySelectorAll(".conheca-je__historia__regioes--caixa");
  // const listarLinks = document.querySelectorAll(".post-container");

  // Adicionando evento de clique para rolar para cima
  rolarParaCima.addEventListener("click", function () {
    // Rolando para cima
    listaLinks.forEach(function (elemento) {
      elemento.scrollTop -= 100;
    });
  });

  // Adicionando evento de clique para rolar para baixo
  rolarParaBaixo.addEventListener("click", function () {
    // Rolando para baixo
    listaLinks.forEach(function (elemento) {
      elemento.scrollTop += 100;
    });
  });

  // Adicionando evento de rolagem
  listaLinks.forEach(function (elemento) {
    elemento.addEventListener("wheel", function (event) {
      // Verifica a direção da rolagem
      const direcao = event.deltaY > 0 ? 1 : -1;

      // Altera a posição de rolagem da lista
      this.scrollTop += direcao * 100;

      // Evita o comportamento padrão de rolagem da página
      event.preventDefault();
    });
  });

  listarLinks.forEach(function (elemento) {
    elemento.addEventListener("wheel", function (event) {
      // Verifica a direção da rolagem
      const direcao = event.deltaY > 0 ? 1 : -1;

      // Altera a posição de rolagem da lista
      this.scrollTop += direcao * 100;

      // Evita o comportamento padrão de rolagem da página
      event.preventDefault();
    });
  });
});
