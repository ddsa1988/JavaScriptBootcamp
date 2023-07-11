"use strict";

const greeting = document.querySelector("#greeting");

function print() {
    console.log(greeting);
    console.log(greeting.textContent);
    console.log(greeting.innerHTML);
}

print();

setTimeout(() => {
    greeting.textContent = "Welcome To The DOM!";

    setTimeout(print, 1000);
}, 2000);
