"use strict";

const widg = document.querySelector(".widget");
const btnChangeColor = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", bodyBgcr);
function bodyBgcr() {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = getRandomHexColor();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
