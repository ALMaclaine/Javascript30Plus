const cool = document.querySelector('.cool');
const background  = document.querySelector('.dropdownBackground');
const nav  = document.querySelector('.top');

function handleEnter(target) {
    target.classList.add('trigger-enter');
    setTimeout(() => target.classList.contains('trigger-enter') && target.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = target.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(target) {
    target.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

cool.addEventListener('mouseenter', (e) => {
    if(e.target.classList.contains('cool__link')) {
        handleEnter(e.target);
    }
}, true);

cool.addEventListener('mouseleave', (e) => {
    if(e.target.classList.contains('cool__link')) {
        handleLeave(e.target);
    }
}, true);
