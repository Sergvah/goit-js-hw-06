"use strict";

const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};
refs.input.addEventListener("input", onInputChange);

function onInputChange() {
  refs.span.style.fontSize = refs.input.value + "px";
}
