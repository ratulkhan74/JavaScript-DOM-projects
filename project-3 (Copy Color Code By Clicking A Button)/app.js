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
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// Step-3 - Create click handler
function changeBgColor() {
    const root = document.getElementById('root');
    const changeColorBtn = document.getElementById('change-color');
    const output = document.getElementById('output');

    changeColorBtn.addEventListener('click', function () {
        const randomColor = generateRandomColor();
        console.log(randomColor);
        root.style.backgroundColor = randomColor;
        output.value = randomColor;
    })
    // Copy color code
    copyColorCode();

}

// Copy color code by clicking copy button
function copyColorCode() {
    const copyCodeBtn = document.getElementById('copy-code');
    copyCodeBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
    });
}