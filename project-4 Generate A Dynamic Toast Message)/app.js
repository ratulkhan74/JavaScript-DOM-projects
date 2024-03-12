/**
 * Project Requirments:
 * - Generate random color by clicking generate button and change background color
 * - Show the color code in the input field
 * - Copy the color code from the input clicking by the copy button
 * - Add a toast message or notification when copied
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
        generateToastMessage(`${output.value} has been copied successfully`);
    });
}

// Show toast message
function generateToastMessage(message) {
    const div = document.createElement('div');
    div.innerText = message;
    div.className = 'toast-message message-in';
    document.body.appendChild(div);
    
    // Removing message by clicking on message popup;
    div.addEventListener('click', function () {
        div.classList.remove('message-in');
        div.classList.add('message-out');
        div.addEventListener('animationend', function () {
            this.remove();
        })
    });
    
    // Removing message after 5 sec showing the message;
    setTimeout(() => {
        div.classList.remove('message-in');
        div.classList.add('message-out');
        div.addEventListener('animationend', function () {
            this.remove();
        })
    }, 5000);
}