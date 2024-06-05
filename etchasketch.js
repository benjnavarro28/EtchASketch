const mainContainer = document.getElementById('container');
let rows = 16;
let columns = 16;
let newGridBtn = document.getElementById('newgrid');
let newGridSize;
newGridBtn.addEventListener('click', newGrid);
const gridAreaSize = 500;
mainContainer.style.width = `${gridAreaSize}px`;
mainContainer.style.height = `${gridAreaSize}px`;

function changeSquareColor() {
    this.style.backgroundColor = 'black';
}

function makeGrid() {
    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        const squareHeight = gridAreaSize / columns;
        const squareWidth = gridAreaSize / rows;
        square.style.cssText = `border: 2px solid black; height: ${squareHeight - 4}px; width: ${squareWidth - 4}px`;
        square.classList.add('grid-square');
        mainContainer.appendChild(square);
        square.addEventListener("mouseover", changeSquareColor);
    }
}

function newGrid() {
    newGridSize = prompt("Enter a number between 1 and 100.");
    if (newGridSize <= 100 && newGridSize >= 1) {
        rows = newGridSize;
        columns = newGridSize;
        while (mainContainer.hasChildNodes()) {
            mainContainer.removeChild(mainContainer.firstChild); //Remove the existing grid before creating a new one.
        }
        makeGrid();
    } else {
        console.log("Invalid option");
    }
}

makeGrid();