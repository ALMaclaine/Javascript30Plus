const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px
const updateInterval = 10;
let radius = 0;
let degree = 0;
let increment = .01;

let xWalk = 0;
let yWalk = 0;

function shadow(e) {
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    xWalk = Math.round((x / width * walk) - (walk / 2));
    yWalk = Math.round((y / height * walk) - (walk / 2));

    updateShadow();
}

function getRotation(degree) {
    const cos = Math.cos(degree);
    const sin = Math.sin(degree);
    return {cos, sin};
}

function getRotatedXY(radius, rotations) {
    const {cos, sin} = rotations;
    const x = radius * (cos - sin);
    const y = radius * (sin + cos);

    return {x, y};
}

function getShiftedColors(rotations) {
    const {cos, sin} = rotations;
    const r = 128 * Math.abs((cos - sin)) + 127;
    const g = 128 * Math.abs((sin + cos)) + 127;
    const b = 128 * Math.abs((cos - sin)) + 127;

    return {r, g, b};
}

function incrementVariables() {
    degree += increment;
    increment += increment / 100;
    radius += .1;

    if (radius > 10) radius = 0;
    if (increment > 5) increment = .01;
}

function updateShadow() {
    const rotations = getRotation(degree);
    const {x, y} = getRotatedXY(radius, rotations);
    const {r, g, b} = getShiftedColors(rotations);

    text.style.textShadow = `
        ${xWalk + x}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1 + x}px ${yWalk + y}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${y + xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk + y}px 0 rgba(0,0,255,0.7),
    
        ${x}px ${y}px 0 rgba(${r},0,${b},0.7),
        ${x * -1}px ${y}px 0 rgba(0,${g},${b},0.7),
        ${y}px ${x * -1}px 0 rgba(0,${g},0,0.7),
        ${y * -1}px ${x}px 0 rgba(0,0,${g},0.7)
    `;
}

setInterval(() => {
    incrementVariables();
    updateShadow();
}, updateInterval);


hero.addEventListener('mousemove', shadow);
