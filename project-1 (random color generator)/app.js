/**
 * Requirment - Chnage background color by clicking the change color button
 */

// Step-1 - Load click handler
window.onload = function () {
    changeBgColor();
}
// Step-2 - Generate random color
function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red},${green},${blue})`;
}

// Step-3 - Create click handler
function changeBgColor() {
    const root = document.getElementById('root');
    const changeColor = document.getElementById('change-color');

    changeColor.addEventListener('click', function () {
        const randomColor = generateRandomColor();
        root.style.backgroundColor = randomColor;
    })
}