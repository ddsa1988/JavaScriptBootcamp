"use strict";

"use strict";

function fibonacci(number) {
    if (!Number.isInteger(number)) {
        return [];
    }

    if (number <= 1) {
        return number;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(9));
