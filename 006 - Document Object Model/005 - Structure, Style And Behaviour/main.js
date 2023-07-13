"use strict";

const btn = document.querySelector(".btn");
const title = document.querySelector("h1");

console.log(btn.classList);

btn.classList.add("yellow");
btn.classList.add("border");
btn.classList.remove("btn");
btn.classList.toggle("btn");

title.classList.add("huge");
