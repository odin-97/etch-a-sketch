const gridContainer = document.querySelector('.gridContainer');


const style = document.createElement('style');
document.head.appendChild(style)

style.sheet.insertRule(`
.gridItem {
    width: 25%;
    aspect-ratio: 1 / 1;
    border: 2px solid blue;
}`);

const gridElement1 = document.createElement('div');
gridElement1.classList.add('gridItem');
gridContainer.appendChild(gridElement1);

const gridElement2 = document.createElement('div');
gridElement2.classList.add('gridItem')
gridContainer.appendChild(gridElement2);

const gridElement3 = document.createElement('div');
gridElement3.setAttribute('class', 'gridItem');
gridContainer.appendChild(gridElement3);

const gridElement4 = document.createElement('div');
gridElement4.className = 'gridItem';
gridContainer.appendChild(gridElement4);

const gridElement5 = document.createElement('div');
gridElement5.classList.add('gridItem')
gridContainer.appendChild(gridElement5);



