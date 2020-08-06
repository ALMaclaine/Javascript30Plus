const clock = document.querySelector('.clock');
const secondHand = document.querySelector('.clock__hand--second');
const minsHand = document.querySelector('.clock__hand--min');
const hourHand = document.querySelector('.clock__hand--hour');

const updateRate = parseInt(clock.dataset.updaterate);

const initialTransforms = {
    seconds: (new WebKitCSSMatrix(window.getComputedStyle(secondHand).transform)).m42,
    mins: (new WebKitCSSMatrix(window.getComputedStyle(minsHand).transform)).m42,
    hour: (new WebKitCSSMatrix(window.getComputedStyle(hourHand).transform)).m42
}

const firstDate = new Date();

const startTime = {
    milliseconds: firstDate.getMilliseconds(),
    seconds: firstDate.getSeconds(),
    mins: firstDate.getMinutes(),
    hours: firstDate.getHours(),
};

let currentDate = firstDate;
let ellapsedMilliseconds = 0;

function setTransform(element, degrees, translate) {
    element.style.transform = `rotate(${degrees}deg) translateY(${translate}px)`;
}

function setDate() {
    const newDate = new Date();
    const dateDiff = (newDate - currentDate);
    ellapsedMilliseconds += dateDiff;

    const seconds = startTime.seconds + (startTime.milliseconds / 1000) + ellapsedMilliseconds / 1000;
    const secondsDegrees = ((seconds / 60) * 360);
    setTransform(secondHand, secondsDegrees, initialTransforms.seconds);

    const mins = startTime.mins + (ellapsedMilliseconds / 60000);
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
    setTransform(minsHand, minsDegrees, initialTransforms.mins);

    const hour = startTime.hours + (ellapsedMilliseconds / 3600000);
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
    setTransform(hourHand, hourDegrees, initialTransforms.hour);
    currentDate = newDate;
}

setInterval(setDate, updateRate);

setDate();
setTimeout(() => {
    clock.style.visibility = 'visible';
}, 50);
