const mainContainer = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.cssText = "border: 1px solid black; height: 24px; width: 24px";
    mainContainer.appendChild(square);
}