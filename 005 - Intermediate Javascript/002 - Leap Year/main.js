"use strict";

function isLeapYear(year) {
    const isDataValid = Number.isInteger(year) && year > 0;

    if (!isDataValid) {
        return false;
    }

    const leap =
        year % 4 === 0
            ? year % 100 !== 0
                ? true
                : year % 400 === 0
                ? true
                : false
            : false;

    return leap;
}

console.log(isLeapYear(2023));
console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2010));
console.log(isLeapYear(1999));
console.log(isLeapYear(1988));
