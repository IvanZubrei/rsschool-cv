const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const line = document.querySelectorAll('.menu__line');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  line.forEach(line => {
    line.classList.toggle('menu__line--active');
  });
})
