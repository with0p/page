const neonText = document.querySelector(".header__neon");
const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  neonText.classList.toggle("on");
});
