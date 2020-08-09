const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = window.innerWidth + '';
    canvas.style.height = window.innerHeight + '';
}

setCanvasDimensions();

window.addEventListener('resize', () => {
    setCanvasDimensions();
    canvasInitialization();
    rewriteHistory();
});

function canvasInitialization() {
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;
}

canvasInitialization();

// ctx.globalCompositeOperation = 'multiply';

const drawState = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    hue: 0,
    direction: true
}

function drawLine(pos) {
    const {lastX, lastY, X, Y, hue, width} = pos;
    ctx.lineWidth = width;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(X, Y);
    ctx.stroke();
}

function CreateDrawAction(lastX, lastY, X, Y, hue, width) {
    return {
        lastX,
        lastY,
        X,
        Y,
        hue,
        width
    };
}

const history = [];

function rewriteHistory() {
    ctx.clearRect(0, 0,canvas.width, canvas.height);
    for(const tmpHist of history) {
        for(const action of tmpHist) {
            drawLine(action);
        }
    }
}

function draw(e) {
    if (!drawState.isDrawing) return; // stop the fn from running when they are not moused down
    if(!Array.isArray(history[drawCount])) history[drawCount] = [];

    const newAction = CreateDrawAction(drawState.lastX, drawState.lastY, e.offsetX, e.offsetY, drawState.hue, ctx.lineWidth);
    history[drawCount].push(newAction);
    drawLine(newAction);

    drawState.lastX = e.offsetX;
    drawState.lastY = e.offsetY;

    drawState.hue++;
    if (drawState.hue >= 360) {
        drawState.hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        drawState.direction = !drawState.direction;
    }

    if (drawState.direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }
}

let drawCount = 0;

canvas.addEventListener('mousedown', (e) => {
    drawState.isDrawing = true;
    [drawState.lastX, drawState.lastY] = [e.offsetX, e.offsetY];
    redoHistory = [];
});

function nextIteration() {
    if(!drawState.isDrawing) return;
    drawState.isDrawing = false
    drawCount++;
}

let redoHistory = [];

function undo() {
    if(history.length === 0) return;
    redoHistory.push(history.pop());
    rewriteHistory();
    drawCount--;
}

function redo() {
    if(redoHistory.length === 0) return;
    history.push(redoHistory.pop());
    rewriteHistory();
    drawCount++;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', nextIteration);
canvas.addEventListener('mouseout', nextIteration);

window.addEventListener('keydown', (e) => {
    const ctrlCmd = e.getModifierState('Meta') || e.getModifierState('Control');
    const shift = e.getModifierState('Shift');
    if(ctrlCmd && e.key === 'z' && !shift) {
        undo();
    }

    if(ctrlCmd && shift && e.key === 'z') {
        redo();
    }
});
