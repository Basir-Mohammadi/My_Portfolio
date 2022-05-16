const mobileMenu = document.querySelector(".menu-wrapper .menu ul");
const menuItems = document.querySelectorAll(".toggle-menu");
const statusbar = document.querySelector(".status-bar");
const mobileBody = document.querySelector("body");

const toggleMenu = () => {
  if (document.documentElement.clientWidth <= 767) {
    mobileMenu.classList.toggle("mobile-menu");
    mobileBody.classList.toggle("fixed");
    statusbar.classList.toggle("status-bar-fixed");
  }
};

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});