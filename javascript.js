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
    const gridElement1 = document.createElement('div');
    gridElement1.classList.add('gridItem');
    gridContainer.appendChild(gridElement1);
}




