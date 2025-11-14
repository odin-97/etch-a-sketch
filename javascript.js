const gridContainer = document.querySelector('.gridContainer');
const style = document.createElement('style');
document.head.appendChild(style)

const elementsPerRow = 16;
style.sheet.insertRule(`
.gridItem {
    width: calc(100% / ${elementsPerRow});
    aspect-ratio: 1 / 1;
    border: 1px solid black;
}`);

for (let i = 0; i < elementsPerRow*elementsPerRow; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('gridItem');
    gridContainer.appendChild(gridElement);
}

let drawing = false
document.addEventListener('mousedown', () => drawing = true);
document.addEventListener('mouseup', () => drawing = false);

const gridElementsAll = document.querySelectorAll('.gridItem');
gridElementsAll.forEach(item => {
    // item.style.backgroundColor = 'green';
    item.addEventListener('mouseenter', () => {
        if (drawing) item.style.backgroundColor = 'blue';
    })
})




