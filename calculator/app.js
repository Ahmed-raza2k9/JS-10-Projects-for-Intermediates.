let display = document.getElementById('display');

function appendToDisplay(key) {
    display.value += key;
}
function clearDisplay() {
    display.value = '';
}

function calculate() {
    display.value = eval(display.value);
}
function clearOne() {
    display.value = display.value.slice(0, -1);
}