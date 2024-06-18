/**
 * Project Requirments:
 * - Generate random color by clicking generate button and change background color
 * - Show the color code in the input field
 * - Copy the color code from the input clicking by the copy button
 * - Add a toast message or notification when copied
 * - Allow user type hex color code
 * - Add hash defult valur and remove hash from input value
 */


// Globals
const root = document.getElementById('root');
const generateColorBtn = document.getElementById('generate-color');
const outputHex = document.getElementById('output-hex');
const copyCodeBtn = document.getElementById('copy-hex');

let div = null;

// Loading click handler
window.onload = function () {
    changeBgColor();
}

// Hex code generator
function generateHexColorCode() {
    const hexCode = '0123456789ABCDEF';
    let hexColorCode = '';
    for (i = 0; i < 6; i++) {
        hexColorCode += hexCode[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
}

// Color change handler
function changeBgColor() {
    generateColorBtn.addEventListener('click', function () {
        const randomHexColor = generateHexColorCode();
        root.style.backgroundColor = `#${randomHexColor}`;
        outputHex.value = `${randomHexColor}`;
    });
    copyColorCode();
    typeHexCode();
}

// Change background color by typing color code in input field
function typeHexCode() {
    outputHex.addEventListener('keyup', function () {
        const color = this.value;
        if (color && isHexCodeValid(color)) {
            root.style.backgroundColor = `#${color}`;
        }
    });
}

// Copy color code by clicking copy button
function copyColorCode() {
    copyCodeBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(`#${outputHex.value}`);
        if (div !== null) {
            div.remove();
            div = null;
        }
        if (isHexCodeValid(outputHex.value)) {
            generateToastMessage(`#${outputHex.value} has been copied successfully`);
        } else {
            alert('Invalid color code. Cannot copy!');
        }
    });
}

// Show toast message
function generateToastMessage(message) {
    div = document.createElement('div');
    div.innerText = message;
    div.className = 'toast-message message-in';
    div.style.color = `#${outputHex.value}`;
    document.body.appendChild(div);

    // Removing message by clicking on message popup;
    div.addEventListener('click', function () {
        div.classList.remove('message-in');
        div.classList.add('message-out');
        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        });
    });

    // Removing message after 5 sec showing the message;
    setTimeout(() => {
        div.classList.remove('message-in');
        div.classList.add('message-out');
        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        });
    }, 5000);
}
/**
 * 
 * @param {string} color 
 */
function isHexCodeValid(color) {
    if (color.length !== 6) {
        return false;
    }
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}