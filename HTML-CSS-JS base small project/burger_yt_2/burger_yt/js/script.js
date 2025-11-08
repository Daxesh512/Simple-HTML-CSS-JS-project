const menuPanel = document.querySelector('.panel');
const burgerIcon = document.querySelector('.burger-icon');
function toggleBurger(){
    menuPanel.classList.toggle('open');
    burgerIcon.classList.toggle('open');
}
burgerIcon.addEventListener('click', toggleBurger);