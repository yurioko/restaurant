//select element fub¥nction
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler  = selectElement('.menu-toggle');
let body  = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left', 
    duration: 1000,
    distance:'25rem',
    deley:300
});

sr.reveal('.animate-right', {
    origin: 'right', 
    duration: 1000,
    distance:'25rem',
    deley:600
});

sr.reveal('.animate-top', {
    origin: 'top', 
    duration: 1000,
    distance:'25rem',
    deley:600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom', 
    duration: 1000,
    distance:'25rem',
    deley:600
});

