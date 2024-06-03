const mainContainer = document.getElementById('container');
let rows = 16;
let columns = 16;
mainContainer.style.width = '600px';
mainContainer.style.height = '600px';

function changeSquareColor() {
    this.style.backgroundColor = 'black';
}

function makeGrid() {
    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        square.style.cssText = "border: 1px solid black; height: 24px; width: 24px";
        square.classList.add('grid-square');
        mainContainer.appendChild(square);
        square.addEventListener("mouseover", changeSquareColor);
    }
}

makeGrid();