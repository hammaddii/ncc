// menu button for mobile screen

const clsBtn = document.querySelector('.clsBtn');
const toggleMenu = document.querySelector('.toggleMenu');
const menu = document.querySelector('.menu');



toggleMenu.addEventListener('click', () => {
    menu.classList.add('show')
});

clsBtn.addEventListener('click', () => {
    menu.classList.remove('show')
});

// info page side scroll

const lscrol = document.getElementById('lscrol');
const rscrol = document.getElementById('rscrol');
const inforCards = document.querySelector('.inforCards');

rscrol.addEventListener('click', () => {
    inforCards.scrollLeft += 240;
});

lscrol.addEventListener('click', () => {
    inforCards.scrollLeft -= 240;
});