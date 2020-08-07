const panelsData = [
    {
        "top": "Hey",
        "middle": "Let's",
        "bottom": "Dance",
        "bg": "https://source.unsplash.com/gYl-UtwNg_I/1500x1500"
    },
    {
        "top": "Give",
        "middle": "Take",
        "bottom": "Receive",
        "bg": "https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"
    },
    {
        "top": "Experience",
        "middle": "It",
        "bottom": "Today",
        "bg": "https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
    },
    {
        "top": "Give",
        "middle": "All",
        "bottom": "You can",
        "bg": "https://source.unsplash.com/ITjiVXcwVng/1500x1500"
    },
    {
        "top": "Life",
        "middle": "In",
        "bottom": "Motion",
        "bg": "https://source.unsplash.com/3MNzGlQM7qs/1500x1500"
    },
    {
        "top": "One",
        "middle": "More",
        "bottom": "Panel",
        "bg": "https://source.unsplash.com/1500x1500"
    }
];

const panelsContainer = document.querySelector('.panels');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

function CreatePanel({top, middle, bottom, bg}) {
    const panel = document.createElement('div');
    panel.classList.add('panel');
    panel.style.backgroundImage = `url(${bg})`;

    panel.addEventListener('click', toggleOpen);
    panel.addEventListener('transitionend', toggleActive);

    const topP = document.createElement('p');
    topP.classList.add('panel--top');
    topP.innerText = top;
    panel.appendChild(topP);

    const middleP = document.createElement('p');
    middleP.classList.add('panel--middle');
    middleP.innerText = middle;
    panel.appendChild(middleP);

    const bottomP = document.createElement('p');
    bottomP.classList.add('panel--bottom');
    bottomP.innerText = bottom;
    panel.appendChild(bottomP);

    return panel;
}

panelsData.map(e => panelsContainer.appendChild(CreatePanel(e)));
