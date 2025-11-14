const gridContainer = document.querySelector('.gridContainer');
const style = document.createElement('style');
document.head.appendChild(style)

let elementsPerRow = 16;

function drawGrid(elementsPerRow) {
    gridContainer.innerHTML = '';
    for (let i = 0; i < elementsPerRow * elementsPerRow; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('gridItem');
        gridContainer.appendChild(gridElement);
    }
}

drawGrid(elementsPerRow);

let drawing = false
let randomColor = false;
document.addEventListener('mousedown', () => drawing = true);
document.addEventListener('mouseup', () => drawing = false);

document.addEventListener('dragstart', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());

gridContainer.addEventListener('mousedown', e => {
    if (e.target.classList.contains('gridItem')) {
        e.preventDefault();
        if (randomColor) {
            const red = Math.floor(Math.random() * 255) + 1;
            const green = Math.floor(Math.random() * 255) + 1;
            const blue = Math.floor(Math.random() * 255) + 1;
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        } else {
            e.target.style.backgroundColor = 'blue';   // paint first tile
        }
    }
});
gridContainer.addEventListener('mouseover', e => {
    if (drawing && e.target.classList.contains('gridItem')) {
        if (randomColor) {
            const red = Math.floor(Math.random() * 255) + 1;
            const green = Math.floor(Math.random() * 255) + 1;
            const blue = Math.floor(Math.random() * 255) + 1;
            e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        } else {
            e.target.style.backgroundColor = 'blue';
        }
    }
})


const gridSize4x4 = document.querySelector('.button4');
const gridSize16x16 = document.querySelector('.button16');
const gridSize32x32 = document.querySelector('.button32');
const gridSize64x64 = document.querySelector('.button64');

gridSize4x4.addEventListener('click', () => {
    document.documentElement.style.setProperty('--gridSize', 4);
    drawGrid(4);
    console.log('Grid 4x4!')
})

gridSize16x16.addEventListener('click', () => {
    document.documentElement.style.setProperty('--gridSize', 16);
    drawGrid(16);
})

gridSize32x32.addEventListener('click', () => {
    document.documentElement.style.setProperty('--gridSize', 32);
    drawGrid(32);
})
gridSize64x64.addEventListener('click', () => {
    document.documentElement.style.setProperty('--gridSize', 64);
    drawGrid(64);
})


const buttonRandomCol = document.querySelector('.buttonRND');
buttonRandomCol.addEventListener('click', () => randomColor = true);




