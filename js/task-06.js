"use strict";

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

const dataLength = input.getAttribute("data-length");
const totalLength = parseInt(dataLength);

function onInputBlur() {
  if (input.value.length === totalLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
  if (input.value.length !== totalLength) {
    input.classList.add("invalid");
  }
}
