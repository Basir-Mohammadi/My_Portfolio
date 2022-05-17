const openMenu = document.querySelector('.nav .close-menu');
const closeMenu = document.querySelector('.mobile-menu .close-menu');
const menuItems = document.querySelectorAll('.mobile-menu a');

openMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.add('show');
});

closeMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu').classList.remove('show');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.remove('show');
  });
});