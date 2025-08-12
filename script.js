// --- NAVBAR TOGGLE ---
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
  });
});
