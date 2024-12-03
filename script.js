// JavaScript to toggle the menu
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// Animation

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

// home section
sr.reveal('.main-content', { delay: 200, origin: 'top' });
sr.reveal('.content-image', { delay: 200, origin: 'top' });

// about section
sr.reveal('.title', { delay: 200, origin: 'top' });
sr.reveal('.box-wrap', { delay: 200, origin: 'left' });
sr.reveal('.box-wrap', { delay: 200, origin: 'left' });
sr.reveal('.box-wrap', { delay: 200, origin: 'left' });

// skills section
sr.reveal('.topic1', { delay: 200, origin: 'right' });
sr.reveal('.tool', { delay: 200, origin: 'left' });
sr.reveal('.topic2', { delay: 200, origin: 'right' });
sr.reveal('.tech', { delay: 200, origin: 'left' });

// projects section
sr.reveal('.project-box-wrap', { delay: 200, origin: 'left' });

// contact section
sr.reveal('.container', { delay: 200, origin: 'left' });

// footer
sr.reveal('.wrapper', { delay: 200, origin: 'left' });