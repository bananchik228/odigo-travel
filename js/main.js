const header = document.querySelector('.header')
const headerNav = document.querySelector('.header__nav')
const headerClose = document.querySelector('.header__close')

window.onscroll = () => {
    if (window.pageYOffset >= 86 && !header.classList.contains('header_fixed')) {
        header.classList.add('header_fixed')
    } else if (window.pageYOffset < 86) {
        header.classList.remove('header_fixed')
    }
}

function toggleMenu() {
    headerNav.classList.toggle('header__nav_show')
}