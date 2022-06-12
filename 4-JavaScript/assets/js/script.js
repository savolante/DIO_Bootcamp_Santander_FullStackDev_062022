var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.classList.remove('negative-number');
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.classList.add('negative-number');
    }
}


