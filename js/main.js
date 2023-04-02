const letters = "-.A1B2C3D4E5F6G7H8I9J1K2L3M4N5O6P7Q8R9S0TUVWXYZ";

function applyEffect(element) {
  let interval = null;
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    element.innerHTML = element.dataset.value
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 50);
}

const h1 = document.querySelector("h1");
const ps = document.querySelectorAll("p");
const h2s = document.querySelectorAll("h2");

window.addEventListener("load", () => {
  applyEffect(h1);
  ps.forEach((p) => applyEffect(p));
  h2s.forEach((h2) => applyEffect(h2));
});

//POP UP
// seleciona todos os quadrados
const squares = document.querySelectorAll(".grid-item");

// adiciona um evento de clique a cada quadrado
squares.forEach((square) => {
  square.addEventListener("click", () => {
    // cria o elemento do pop-up
    const popup = document.createElement("div");
    popup.classList.add("popup");

    // adiciona a descrição da tecnologia ao pop-up
    const techName = square.querySelector("h2").textContent;
    const techDescription = square.querySelector("p").textContent;
    popup.innerHTML = `
      <h2>${techName}</h2>
      <p>${techDescription}</p>
    `;

    // adiciona o pop-up ao body
    document.body.appendChild(popup);

    // adiciona um evento de clique para fechar o pop-up
    popup.addEventListener("click", () => {
      popup.remove();
    });
  });
});
