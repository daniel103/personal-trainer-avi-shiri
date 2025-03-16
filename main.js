/*================================= toggle icon navbar ===================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
};

/*================================= scroll section active link ===================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('section nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('section nav a[href*=' + id + ']')?.classList.add('active');
            });
        };
    });

    /*================================= sticky navbar ===================================*/
    let header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*================================= remove toggle icon and navbar ===================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
    
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'cardAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }, 200 * (index + 1));
    });
});

function startAnimations() {
    const section = document.querySelector('.section');
    const profileSection = document.querySelector('.profile-section');
    const contentSection = document.querySelector('.content-section');
    const title = document.querySelector('.title');
    const programItems = document.querySelectorAll('.program-item');
    const ctaButton = document.querySelector('.cta-button');

    // מהירויות מעודכנות
    setTimeout(() => {
        section.classList.add('visible');
    }, 100);

    setTimeout(() => {
        profileSection.classList.add('visible');
    }, 500);

    setTimeout(() => {
        contentSection.classList.add('visible');
    }, 800);

    setTimeout(() => {
        title.classList.add('visible');
    }, 1000);

    // הפריטים מופיעים מהר יותר
    programItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
        }, 1200 + (index * 400)); // כל פריט מופיע 0.4 שניות אחרי הקודם
    });

    setTimeout(() => {
        ctaButton?.classList.add('visible');
    }, 1200 + (programItems.length * 400));
}

document.addEventListener('DOMContentLoaded', startAnimations);

document.querySelector('#cta-button').addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

let index = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slidesPerView = window.innerWidth <= 768 ? 1 : 3;

function showSlide(n) {
    index = n;
    document.querySelector(".slider").style.transform = `translateX(-${index * (100 / slidesPerView)}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[Math.floor(index / slidesPerView)]?.classList.add("active");
}

function currentSlide(n) {
    showSlide(n * slidesPerView);
}

function showNextSlide() {
    index = (index + slidesPerView) % slides.length;
    showSlide(index);
}

setInterval(showNextSlide, 5000);
showSlide(0);

let currentIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
const navIndicators = document.querySelectorAll(".indicator");
const itemsPerView = window.innerWidth <= 768 ? 1 : 3;

function displaySlide(position) {
    currentIndex = position;
    document.querySelector(".carousel").style.transform = `translateX(-${currentIndex * (100 / itemsPerView)}%)`;
    updateIndicators();
}

function updateIndicators() {
    navIndicators.forEach(indicator => indicator.classList.remove("active"));
    navIndicators[Math.floor(currentIndex / itemsPerView)]?.classList.add("active");
}

function goToSlide(position) {
    displaySlide(position * itemsPerView);
}

function nextSlide() {
    currentIndex = (currentIndex + itemsPerView) % carouselItems.length;
    displaySlide(currentIndex);
}

setInterval(nextSlide, 5000);
displaySlide(0);

/*================================= scroll reveal ===================================*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, header-name', { origin: 'right' });
ScrollReveal().reveal('.class__content, section__header', { origin: 'left' });
ScrollReveal().reveal('.section__container, section__header', { origin: 'top' });
ScrollReveal().reveal('.hero-content, hero-text', { origin: 'left' });
ScrollReveal().reveal('.features-container, feature-card', { origin: 'top' });
ScrollReveal().reveal('.contact, section__header', { origin: 'top' });
ScrollReveal().reveal('.home-content1, contact-h3', { origin: 'top' });