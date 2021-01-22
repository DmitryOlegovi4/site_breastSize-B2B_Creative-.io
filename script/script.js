const btnMenu = document.querySelector('.btnMenu');
const navMenu = document.querySelector('.nav-menu');
const navContacts = document.querySelector('.nav-contacts');

btnMenu.addEventListener('click', function () {
    const navMenuDisplay = window.getComputedStyle(navMenu).getPropertyValue('display');
    if(navMenuDisplay === 'none'){
        navMenu.style.display = 'flex';
        btnMenu.innerHTML = '&#10006;';
    } else {
        navMenu.style.display = 'none';
        btnMenu.innerHTML = '&#9776;';
    }

    if (window.innerWidth<=500) {
            const navContactsDisplay = window.getComputedStyle(navContacts).getPropertyValue('display');
            if(navContactsDisplay === 'none'){
                navContacts.style.display = 'flex';
            } else {
                navContacts.style.display = 'none';
            }
    }
})

