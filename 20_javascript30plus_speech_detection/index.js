window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

const words = document.querySelector('.words');

let selected = null;
let foundWords = [];
let commanderMode = false;

function deselect() {
    if(selected !== null) selected.classList.remove('selected');
    if(foundWords.length !== 0) {
        foundWords.forEach((e) => e.classList.remove('found-word'));
    }
    foundWords = [];
    selected = null;
    deactivateCommander();
}


function activateCommander() {
    commanderMode = true;
    words.classList.add('commander-mode');
}

function deactivateCommander() {
    commanderMode = false;
    words.classList.remove('commander-mode');
}

function clear() {
    while(words.firstChild && words.removeChild(words.firstChild)) {}
}

recognition.addEventListener('result', e => {
    const transcript = e.results[0][0].transcript;

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
    if(commanderMode) {
        if(poopScript === 'clear') {
            clear();
            deactivateCommander();
            return;
        } else {
            const elems = Array.from(document.querySelectorAll('.text-group'));
            for(const elem of elems) {
                if(elem.innerText.includes(transcript)) {
                    elem.classList.add('found-word');
                    foundWords.push(elem);
                }
            }
        }
        deactivateCommander();
        return;
    }

    if(poopScript.toLowerCase() === 'commander mode') {
        activateCommander();
    } else {
        const span = document.createElement('span');
        span.addEventListener('click', () => {
            deselect();
            span.classList.toggle('selected');
            selected = span;
        });
        span.innerText = poopScript;
        span.classList.add('text-group');
        words.appendChild(span);
        deactivateCommander();
    }
});

window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        deselect();
    }

    if(e.key === 'Backspace') {
        if(selected !== null) {
            const sibling = selected.previousSibling;
            let lastLetter = '';
            if(sibling !== null) {
                lastLetter = sibling.innerText[sibling.innerText.length - 1];
            }
            selected.remove();

            if(sibling !== null) {
                sibling.innerText += lastLetter;
            }
        }
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start()
