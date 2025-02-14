let result = document.getElementById('result');

function appendNumber(number) {
    result.value += number;
}

function appendOperator(operator) {
    result.value += operator;
}

function clearDisplay() {
    result.value = "";
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch {
        result.value = "Error";
    }
}

function squareRoot() {
    result.value = Math.sqrt(parseFloat(result.value)).toFixed(2);
}

document.addEventListener('keydown', function(event) {
    if (!isNaN(event.key) || "+-*/.%".includes(event.key)) {
        appendNumber(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});