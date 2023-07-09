"use strict";

const names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function randomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function buyLunch(arr) {
    if (!(Array.isArray(arr) && arr.length > 0)) {
        return "";
    }

    const name = names[randomNumber(0, arr.length)];

    return `${name} is going to buy lunch today!`;
}

console.log(buyLunch(names));
