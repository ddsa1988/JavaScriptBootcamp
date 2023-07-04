"use strict";

// Calculate the BMI = weight (kg) / height * height (m)

function bmiCalculator(weight, height) {
    const isDataValid =
        Number.isFinite(weight) &&
        weight > 0 &&
        Number.isFinite(height) &&
        height > 0;

    return isDataValid
        ? Number(String(weight / Math.pow(height, 2))).toFixed(2)
        : 0;
}

console.log(bmiCalculator(65, 1.8));
console.log(bmiCalculator(-65, 1.8));
console.log(bmiCalculator(65, -1.8));
console.log(bmiCalculator(0, 10));
console.log(bmiCalculator(10, 0));
