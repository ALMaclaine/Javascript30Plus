const keyData = [
    {
        key: 'A',
        name: 'Clap',
    },
    {
        key: 'S',
        name: 'Hihat',
    },
    {
        key: 'D',
        name: 'Kick',
    },
    {
        key: 'F',
        name: 'Openhat',
    },
    {
        key: 'G',
        name: 'Boom',
    },
    {
        key: 'H',
        name: 'Ride',
    },
    {
        key: 'J',
        name: 'Snare',
    },
    {
        key: 'K',
        name: 'Tom',
    },
    {
        key: 'L',
        name: 'Tink',
    }
];

const audioKeyRefs = {};

function KeyComponent(key) {
    const keyCode = `Key${key.key}`;
    const keyDiv = document.createElement('div');
    keyDiv.dataset.key = keyCode;
    keyDiv.classList.add('key');

    const kbd = document.createElement('kbd');
    kbd.innerText = key.key;
    kbd.classList.add('key__icon');
    keyDiv.appendChild(kbd);

    const span = document.createElement('span');
    span.innerText = key.name;
    span.classList.add('key__sound');
    keyDiv.appendChild(span);

    const audio = document.createElement('audio');
    audio.src = `sounds/${key.name.toLocaleLowerCase()}.wav`;
    audio.dataset.key = keyCode;
    keyDiv.append(audio);

    keyDiv.addEventListener('click', () => playSound(audio, keyDiv));

    audioKeyRefs[keyCode] = {
      audio,
      key: keyDiv
    };

    return keyDiv;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('key__playing');
}

function playSoundKeyHandler(e) {
    const { audio, key } = audioKeyRefs[e.code];
    if (!audio) return;
    playSound(audio, key);
}

function playSound(audio, key) {
    key.classList.add('key__playing');
    audio.currentTime = 0;
    audio.play();
}

// Add keys to container
const keysContainer = document.getElementById('keys');
keyData.forEach(e => keysContainer.append(KeyComponent(e)));

// Add transitionend listener to all key divs
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add keydown listener to window
window.addEventListener('keydown', playSoundKeyHandler);
