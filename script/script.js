const btnMenu = document.querySelector('.btnMenu');
const navMenu = document.querySelector('.nav-menu');
const navContacts = document.querySelector('.nav-contacts');

btnMenu.addEventListener('click', function () {
    const navMenuDisplay = window.getComputedStyle(navMenu).getPropertyValue('display');
    if (navMenuDisplay === 'none') {
        navMenu.style.display = 'flex';
        btnMenu.innerHTML = '&#10006;';
    } else {
        navMenu.style.display = 'none';
        btnMenu.innerHTML = '&#9776;';
    }
    if (window.innerWidth <= 500) {
        const navContactsDisplay = window.getComputedStyle(navContacts).getPropertyValue('display');
        if (navContactsDisplay === 'none') {
            navContacts.style.display = 'flex';
        } else {
            navContacts.style.display = 'none';
        }
    }
})
window.addEventListener('resize', function () {
    if (window.innerWidth > 500) {
        navContacts.style.display = 'flex';
    } else {
        navContacts.style.display = '';
    }
    if (window.innerWidth > 800) {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = '';
    }
})

$(document).ready(function () {
    $('.before-after_slider').slick({
        centerMode: true,
        centerPadding: '150px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    })
});


