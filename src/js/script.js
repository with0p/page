const neonText = document.querySelector(".header__neon");
const switcher = document.querySelector(".btn");
const linkToProjects = document.querySelector(".header__link--pr");
const linkToExp = document.querySelector(".header__link--exp");
const linkToContacts = document.querySelector(".header__link--con");
const btnUp = document.querySelector(".button-up");

const sectionHeader = document.getElementById("header");
const sectionProjects = document.getElementById("projects");
const sectionExp = document.getElementById("exp");
const sectionContacts = document.getElementById("contacts");

init();

function scrollToSection(link, section) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll({
      top: section.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  });
}

function showBtnOnScroll() {
  const secPrPosition = sectionHeader.getBoundingClientRect();
  window.addEventListener("scroll", function () {
    if (window.scrollY >= secPrPosition.height) {
      btnUp.classList.add("visible");
    } else {
      btnUp.classList.remove("visible");
    }
  });
}

function init() {
  scrollToSection(linkToProjects, sectionProjects);
  scrollToSection(linkToExp, sectionExp);
  scrollToSection(linkToContacts, sectionContacts);
  scrollToSection(btnUp, sectionHeader);

  showBtnOnScroll();

  switcher.addEventListener("click", function () {
    neonText.classList.toggle("on");
  });
}
