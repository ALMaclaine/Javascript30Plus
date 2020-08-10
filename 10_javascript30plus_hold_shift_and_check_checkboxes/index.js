const todoContainer = document.querySelector('.inbox');

const startTexts = [
        "This is an inbox layout.",
        "Check one item",
        "Hold down your Shift key",
        "Check a lower item",
        "Everything in between should also be set to checked",
        "Try do it without any libraries",
        "Just regular JavaScript",
        "Good Luck!",
        "Don't forget to tweet your result!"
    ];

const todoInputs = [];
const todoDivs = [];

function startDrag(e) {
    e.dataTransfer.setData('dragged-index', e.currentTarget.dataset.index);
    console.log(e.currentTarget)
    console.log("startDrag");
}

function allowDrop(e) {
    e.preventDefault();
}

function reAppendDivs() {
    while(todoContainer.firstChild && todoContainer.removeChild(todoContainer.firstChild));
    todoDivs.forEach((e) => todoContainer.appendChild(e));
}

function finishDrag(e) {
    const draggedIndex = parseInt(e.dataTransfer.getData('dragged-index'));
    const droppedIndex = parseInt(e.currentTarget.dataset.index);
    swapTodos(draggedIndex, droppedIndex);
}

function swapTodos(draggedIndex, droppedIndex) {
    if(draggedIndex === droppedIndex) return;
    const tmpInput = todoInputs[draggedIndex];
    tmpInput.dataset.index = droppedIndex;
    const tmpDiv = todoDivs[draggedIndex];
    tmpDiv.dataset.index = droppedIndex;
    if(draggedIndex > droppedIndex) {
        for(let i = draggedIndex; i > droppedIndex; i--) {
            todoInputs[i] = todoInputs[i - 1];
            todoInputs[i].dataset.index = i;
            todoDivs[i] = todoDivs[i - 1];
            todoDivs[i].dataset.index = i;
        }
        todoInputs[droppedIndex] = tmpInput;
        todoDivs[droppedIndex] = tmpDiv;
    } else {
        for(let i = draggedIndex; i < droppedIndex; i++) {
            todoInputs[i] = todoInputs[i + 1];
            todoInputs[i].dataset.index = i;
            todoDivs[i] = todoDivs[i + 1];
            todoDivs[i].dataset.index = i;
        }
        todoInputs[droppedIndex] = tmpInput;
        todoDivs[droppedIndex] = tmpDiv;
    }
    reAppendDivs();
}

function CreateToDoItem(text, i) {
    const div = document.createElement('div');
    div.classList.add('item');
    div.dataset.index = i;
    todoDivs.push(div);
    div.draggable = true;
    div.addEventListener('dragstart', startDrag);
    div.addEventListener('dragover', allowDrop);
    div.addEventListener('drop', finishDrag);

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('item__checkbox');
    input.addEventListener('click', handleCheck)
    todoInputs.push(input);
    input.dataset.index = i;

    const p = document.createElement('p');
    p.innerText = text;
    p.classList.add('item__text');

    div.appendChild(input);
    div.appendChild(p);

    return div;
}

let lastChecked = null;

function handleCheck(e) {
    const curInd = parseInt(e.currentTarget.dataset.index);
    if (e.shiftKey && lastChecked !== null) {
        const [ min, max ] = curInd > lastChecked ? [lastChecked, curInd] : [curInd, lastChecked];
        const truthValue = todoInputs[lastChecked].checked;
        for(let i = min; i < max; i++) {
            todoInputs[i].checked = truthValue;
        }
    }

    lastChecked = curInd;
}

startTexts.forEach((e, i) => todoContainer.appendChild(CreateToDoItem(e, i)));
