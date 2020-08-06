const ranges = [{
        name: "spacing",
        min: "10",
        max: "200",
        value: "10",
        'data-sizing': "px"
    },
    {
        name: "blur",
        min: "0",
        max: "25",
        value: "10",
        'data-sizing': "px"
    }];

const colors = [
    {
        name: "base",
        value: "#ffc600"
    }
];

function CreateInput(properties, type) {
    const input = document.createElement('input');
    input.type = type;
    for(const prop in properties) {
        if(!properties.hasOwnProperty(prop)) continue;
        input.setAttribute(prop, properties[prop]);
    }
    return input;
}

function ManagedSlider(properties, handler) {
    const slider = CreateInput(properties, 'range');
    slider.addEventListener('change', handler);
    slider.addEventListener('mousemove', handler);
    return slider;
}

function ManagedColor(properties, handler) {
    const color = CreateInput(properties, 'color');
    color.addEventListener('change', handler);
    color.addEventListener('input', handler);
    return color;
}

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function initializeInputs(container) {
    for(const range of ranges) {
        container.appendChild(ManagedSlider(range, handleUpdate));
    }

    for(const color of colors) {
        container.appendChild(ManagedColor(color, handleUpdate));
    }
}

initializeInputs(document.getElementById('controls'));
