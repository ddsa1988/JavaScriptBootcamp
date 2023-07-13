"use strict";

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByTagName("li")[0]);
console.log(document.getElementsByClassName("btn"));
console.log(document.getElementsByClassName("btn")[0]);
console.log(document.getElementById("title"));
console.log(document.querySelector("li a"));
console.log(document.querySelector("#list .item"));
console.log(document.querySelectorAll("#list .item"));

console.log(document.querySelector("#list .item a"));
document.querySelector("#list .item a").style.color = "blue";
