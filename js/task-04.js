"use strict";

const button = {
  minusBtn: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
  plusBtn: document.querySelector("[data-action='increment']"),
};
let counterValue = 0;

const decrement = () => {
  counterValue -= 1;

  button.span.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;

  button.span.textContent = counterValue;
};

button.plusBtn.addEventListener("click", increment);
button.minusBtn.addEventListener("click", decrement);
