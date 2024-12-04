// JavaScript to toggle the menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 2000,
    delay: 250,
    reset: false
});

// home section
sr.reveal('.main-content', { delay: 100, origin: 'top' });
sr.reveal('.content-image', { delay: 100, origin: 'top' });

// about section
sr.reveal('.title', { delay: 100, origin: 'top' });
sr.reveal('.box-wrap', { delay: 100, origin: 'left' });
sr.reveal('.box-wrap', { delay: 100, origin: 'left' });
sr.reveal('.box-wrap', { delay: 100, origin: 'left' });

// skills section
sr.reveal('.topic1', { delay: 100, origin: 'right' });
sr.reveal('.tool', { delay: 100, origin: 'left' });
sr.reveal('.topic2', { delay: 100, origin: 'right' });
sr.reveal('.tech', { delay: 100, origin: 'left' });

// projects section
sr.reveal('.project-box-wrap', { delay: 100, origin: 'left' });

// contact section
sr.reveal('.container', { delay: 100, origin: 'left' });