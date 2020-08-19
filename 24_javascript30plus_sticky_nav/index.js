// Not a ton of code, but hard to
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('sticky');
    } else {
        document.body.classList.remove('sticky');
    }
}

window.addEventListener('scroll', fixNav);
