"use strict";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const size = 10;
const randomNumbers = [];

let i = 0;

while (i < size) {
    const random = randomNumber(1, 100);

    if (randomNumbers.includes(random)) {
        continue;
    }

    randomNumbers.push(random);
    i++;
}

console.log(randomNumbers);
