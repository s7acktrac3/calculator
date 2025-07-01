

let operand1 = 0;
let operand2 = 0;
let operator = "";
const display = document.querySelector(".display");
const items = document.querySelectorAll(".item");


function addition(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function operate(operand1, operand2, operator) {
    switch(operator) {
        case "+":
        return addition(operand1, operand2);

        case "-":
        return subtract(operand1, operand2);

        case "*":
        return multiply(operand1, operand2);

        case "/":
        return divide(operand1, operand2);
    }
}


function processClicks(event) {
    let value = event.target.innerHTML;

    if (!isNaN(value) || value === ".") {
        // Number or decimal
        if (operator === "") {
            operand1 += value;
            display.innerHTML = operand1;
        } else {
            operand2 += value;
            display.innerHTML = operand2;
        }
    } else if (["+", "-", "*", "/"].includes(value)) {
        // Operator clicked
        if (operand1 !== "") {
            operator = value;
        }
    } else if (value === "=") {
        if (operand1 !== "" && operand2 !== "" && operator !== "") {
            const result = operate(operand1, operand2, operator);
            display.innerHTML = result;
            // Reset state for next operation
            operand1 = result.toString();
            operand2 = "";
            operator = "";
        }
    }
    else if (value == "C") {
        display.innerHTML = "";
    }
}

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(event) {
        processClicks(event);
    });
}