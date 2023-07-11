"use strict";

console.log(document);
console.log(document.firstElementChild);
console.log(document.firstElementChild.firstElementChild);
console.log(document.firstElementChild.lastElementChild);
console.log(document.firstElementChild.lastElementChild.firstElementChild);
console.log(
    document.firstElementChild.lastElementChild.firstElementChild
        .nextElementSibling
);
console.log(
    document.firstElementChild.lastElementChild.firstElementChild
        .nextElementSibling.nextElementSibling
);
console.log(document.firstElementChild.lastElementChild.lastElementChild);

const ul = document.querySelector("ul");

setTimeout(function () {
    ul.lastElementChild.textContent = "Diego dos Santos Alexandre";
}, 5000);
