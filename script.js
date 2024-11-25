// JavaScript to toggle the menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});