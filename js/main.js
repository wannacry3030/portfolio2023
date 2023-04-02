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