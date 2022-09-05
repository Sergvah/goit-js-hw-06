"use strict";

const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const counterInput = document.querySelector("input");

const divBoxes = document.querySelector("#boxes");

const arr = [];
let firstDivWidth = 20;
let firstDivHeight = 20;
let box = 0;

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
console.log(btnDestroy.addEventListener);

function createBoxes(amount) {
  for (let index = 1; index <= Number(counterInput.value); index++) {
    const divEl = document.createElement("div");
    if (box !== Number(counterInput.value)) {
      firstDivWidth = 20;
      firstDivHeight = 20;
    }
    divEl.classList.add(`div${index}`);
    firstDivWidth += 10;
    firstDivHeight += 10;
    divEl.style.width = firstDivWidth + "px";
    divEl.style.height = firstDivHeight + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    arr.push(divEl);
    box = Number(counterInput.value);
    console.log(divEl);
  }
  divBoxes.append(...arr);
  console.log(divBoxes);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
  arr.splice(0, arr.length);
  firstDivWidth = 20;
  firstDivHeight = 20;
  counterInput.value = "";
}
