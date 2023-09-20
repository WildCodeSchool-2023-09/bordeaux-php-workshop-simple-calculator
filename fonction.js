// calculator function
function calculator(firstValue, secondValue, operator) {
    if (operator === '+') {
        //addition
        result = firstValue + secondValue;
    } else if (operator === '-') {
        result = firstValue - secondValue;
    } else if (operator === '*') {
        result = firstValue * secondValue;
    } else if (operator === '/') {
        result = firstValue / secondValue;
    } else {
        result = 'Invalid operator';
    }
    return result;
}

