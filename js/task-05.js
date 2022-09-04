"use strict";

const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.span.textContent = event.currentTarget.value;
  if (refs.input.value === "") {
    refs.span.innerHTML = "Anonymous";
  } else {
    refs.span.innerHTML = event.currentTarget.value;
  }
}

// console.log(refs);
