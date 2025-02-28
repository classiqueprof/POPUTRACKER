"use strict";
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const email = document.querySelector("#email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const number = document.querySelector(".number");
const continuebtn = document.querySelector("#continuebtn");
const checkbox = document.querySelector("#checkbox");
const warn = document.querySelector("#warn");

continuebtn.onclick = function () {
  if (
    name1.value &&
    name2.value &&
    password1.value &&
    email.value &&
    password2.value &&
    number.value &&
    checkbox.checked
  ) {
    warn.style.visibility = "none";
    alert("hello hello");
  } else {
    warn.style.visibility = "visible";
  }
};
