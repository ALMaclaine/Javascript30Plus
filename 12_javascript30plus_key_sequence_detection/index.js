const passwordBox = document.querySelector('.password-box');
let pressed = [];
const secretCode = 'wesbos';

let timer;
function checkTimeout() {
    if(timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(() => {
        checkPassword();
    }, 750);
}

function checkPassword() {
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
        pressed = [];
        clearPasswordBox();
    } else {
        pressed = [];
        clearPasswordBox();
    }
}

function clearPasswordBox() {
    while(passwordBox.firstChild && passwordBox.removeChild(passwordBox.firstChild));
}

function CreateKey() {
    const div = document.createElement('div');
    div.classList.add('password-key');

    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.innerText = '*';

    div.appendChild(keyDiv);

    return div;
}

function appendKey() {
    passwordBox.appendChild(CreateKey());
}

window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        if (timer) {
            clearTimeout(timer);
        }
        checkPassword();
    } else if(e.key === 'Backspace') {
        passwordBox.firstChild && passwordBox.removeChild(passwordBox.firstChild);
        passwordBox.classList.add('active');
        passwordBox.classList.remove('fade-out');
        pressed.pop();
        checkTimeout();
    } else {
        appendKey();
        passwordBox.classList.add('active');
        passwordBox.classList.remove('fade-out');
        pressed.push(e.key);
        checkTimeout();
    }
});

passwordBox.addEventListener('transitionend', (e) => {
    if(passwordBox.classList.contains('active')) {
        passwordBox.classList.remove('active');
        passwordBox.classList.add('fade-out');
    } else if(passwordBox.classList.contains('fade-out')) {
        passwordBox.classList.remove('fade-out');
    }
});
