const itemsList = document.querySelector('.plates');
const addItemButton = document.getElementById('addItem');
const itemInput = document.getElementById('itemInput');
let items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items);

function addItem(e) {
    const text = itemInput.value;
    if(text === '') return;
    const item = {
        text,
        done: false
    };

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    itemInput.value = '';
}

function removeItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
}

function CreateFoodItem(plate, index) {
    const li = document.createElement('li');
    li.classList.add('plates__item');

    const input = document.createElement('input');
    input.type = 'checkbox'
    input.checked = plate.done;
    input.classList.add('plates__toggle');

    const label = document.createElement('label');
    label.dataset.index = index;
    label.innerText = plate.text;
    label.classList.add('plates__label')

    const button = document.createElement('button');
    button.classList.add('plates__delete')
    button.innerText = 'X';
    button.dataset.index = index;

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(button)

    return li;
}

function populateList(plates = [], platesList) {
    while(platesList.firstChild && platesList.removeChild(platesList.firstChild)) {}
    plates.map((plate, i) => platesList.appendChild(CreateFoodItem(plate, i)))
}

function toggleDone(e) {
    if (e.target.matches('label')) {
        const el = e.target;
        const index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    } else if (e.target.matches('button')) {
        const el = e.target;
        const index = el.dataset.index;
        removeItem(index);
        populateList(items, itemsList);
    }
}

addItemButton.addEventListener('click', addItem);
itemsList.addEventListener('click', toggleDone);

window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        addItem();
    }
})

populateList(items, itemsList);
