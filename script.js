"use strict";

const paragraph = document.getElementById("paragraph");
const username = document.getElementById("name");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", function () {
  if (username.value === "admin" && password.value === "1234") {
    paragraph.textContent = "warmatebulia";
  } else {
    paragraph.textContent = "ar aris warmatebuli";
  }
});
