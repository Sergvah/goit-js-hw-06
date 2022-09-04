"use strict";

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onSubmit);
const data = {};
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Все поля должны быть заполнены");
  }

  const el = event.currentTarget.elements;
  data[el.email.name] = el.email.value;
  data[el.password.name] = el.password.value;
  console.log(data);
  event.currentTarget.reset();
}
