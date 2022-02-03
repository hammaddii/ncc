const clsBtn = document.querySelector('.clsBtn');
const toggleMenu = document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
    menu.classList.add('show')
});

clsBtn.addEventListener('click', () => {
    menu.classList.remove('show')
});