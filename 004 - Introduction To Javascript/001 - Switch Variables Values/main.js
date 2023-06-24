"use strict";

//Switch the variables values
let a = 3;
let b = 8;

console.log(`a:${a} and b:${b}`);
console.log();

//Switching without a third variable
a = a + b;
b = a - b;
a = a - b;

console.log(`a:${a} and b:${b}`);
