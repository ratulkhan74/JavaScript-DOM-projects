/**
 * Project Requirments:
 * - Generate random color by clicking generate button and change background color
 * - Show the color code in the input field
 * - Copy the color code from the input clicking by the copy button
 */

// Step-1 - Load click handler
window.onload = function () {
    changeBgColor();
}

// Step-2 - Generate random color

// Hex code generator
function generateHexColorCode() {
    const hexCode = '0123456789ABCDEF';
    let hexColorCode = '#';
    for (i = 0; i < 6; i++) {
        hexColorCode += hexCode[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
}

// Step-3 - Create click handler
function changeBgColor() {
    const root = document.getElementById('root');
    const changeColorBtn = document.getElementById('change-color');
    const output = document.getElementById('output');

    changeColorBtn.addEventListener('click', function () {
        const randomColor = generateHexColorCode();
        root.style.backgroundColor = randomColor;
        output.value = randomColor;
    });
    copyColorCode(); // Copy color code

}

// Copy color code by clicking copy button
function copyColorCode() {
    const copyCodeBtn = document.getElementById('copy-code');
    copyCodeBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value);
    });
}