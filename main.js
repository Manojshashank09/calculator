function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        var result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
