
//TODO : calcul la position X
//TODO : update la position X

//TODO : calcul la position Y
//TODO : update la position Y

//TODO : Start drawing quand mousedown & move
//TODO : Stop drawing quand mouseup


const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hue = 0;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 6;

let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;


function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 80%, 66%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 5) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
    hue++;
    if (hue >= 360) {
        hue = 0;
    }

}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

