"use strict";

/*
Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
*/

function lifeInWeeks(age) {
    const yearsLeft = 90 - age;
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;

    return `You have ${daysLeft} days, ${weeksLeft} weeks and ${monthsLeft} months left.`;
}

console.log(lifeInWeeks(56));
console.log(lifeInWeeks(12));
