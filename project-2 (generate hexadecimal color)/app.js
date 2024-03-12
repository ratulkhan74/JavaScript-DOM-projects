/**
 * Project Requirments:
 * - Generate random color by clicking generate button and change background color
 * - Show the color code in the input field
 */

// Step-1 - Load click handler
window.onload = function () {
    changeBgColor();
}
// Step-2 - Generate random color
function generateRandomColor(number) {
    const red = Math.floor(Math.random() * number);
    const green = Math.floor(Math.random() * number);
    const blue = Math.floor(Math.random() * number);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Step-3 - Create click handler
function changeBgColor() {
    const root = document.getElementById('root');
    const changeColor = document.getElementById('change-color');
    const output = document.getElementById('output');

    changeColor.addEventListener('click', function () {
        const randomColor = generateRandomColor(255);
        root.style.backgroundColor = randomColor;
        output.value = randomColor;
    });
}