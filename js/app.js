const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-popup");
const navLinks = document.querySelector(".nav-links");
const logo = document.querySelector(".logo");
const lits = document.querySelectorAll(".item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
  logo.classList.toggle("active");
});

const toggleMenu = () => {
  if (document.documentElement.clientWidth <= 767) {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
    logo.classList.toggle("active");
  }
};

lits.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});
