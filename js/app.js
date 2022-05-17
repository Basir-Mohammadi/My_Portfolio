const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-popup');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');

hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle('active');
menu.classList.toggle('active');
navLinks.classList.toggle('active');
logo.classList.toggle('active');
});

document.querySelector('.nav-links')
.forEach(n=>n.addEventListener('click', ()=>{
hamburger.classList.remove('active');
navLinks.classList.remove('active');
logo.classList.remove('active');
menu.classList.remove('active');
// logo.style.display="none";
// logo.style.display="none";
}));