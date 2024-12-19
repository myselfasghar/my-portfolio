// JavaScript to toggle the menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 1500,
    delay: 200,
    reset: false
});

// home section
sr.reveal('.head', { delay: 50, origin: 'left' });
sr.reveal('.menu', { delay: 50, origin: 'right' });
sr.reveal('.menu-btn', { delay: 50, origin: 'right' });
sr.reveal('.main-content', { delay: 50, origin: 'top' });
sr.reveal('.content-image', { delay: 50, origin: 'top' });

// about section
sr.reveal('.title', { delay: 50, origin: 'top' });
sr.reveal('.box-wrap', { delay: 50, origin: 'left' });

// skills section
sr.reveal('.topic1', { delay: 50, origin: 'right' });
sr.reveal('.tool', { delay: 50, origin: 'left' });
sr.reveal('.topic2', { delay: 50, origin: 'right' });
sr.reveal('.tech', { delay: 50, origin: 'left' });

// projects section
sr.reveal('.project-box-wrap', { delay: 50, origin: 'left' });

// contact section
sr.reveal('.container', { delay: 50, origin: 'left' });