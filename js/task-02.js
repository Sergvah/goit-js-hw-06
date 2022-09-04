"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let ulList = document.getElementById("ingredients");

// console.log(ulList);

const product = ingredients.forEach(function (item) {
  let itemsLi = document.createElement("li");
  itemsLi.classList.add("item");
  itemsLi.innerHTML = item;
  ulList.append(itemsLi);
  // console.log(itemsLi);
});

console.log(ulList);
