"use strict";

function fibonacci(number) {
    if (!(Number.isInteger(number) && number > 0)) {
        return [];
    }

    const fibonacci = [0, 1];

    if (number === 1) {
        return fibonacci.slice(0, 1);
    } else if (number === 2) {
        return fibonacci;
    } else {
        for (let i = 2; i < number; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }

        return fibonacci;
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(13));
