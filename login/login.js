const email = document.querySelector("#email");
const emailwarn = document.querySelector(".emailwarn");
const passwordwarn = document.querySelector(".passwordwarn");
const password = document.querySelector("#Password");
const continuebtn = document.querySelector("#continuebtn");
const viewpasswordicon = document.querySelector("#viewpassword");
const hidepassword = document.querySelector("#hidepassword");

viewpasswordicon.style.display = "none";
continuebtn.onclick = function () {
  if (email.value && password.value) {
    emailwarn.style.visibility = "hidden";
    passwordwarn.style.visibility = "hidden";
  } else {
    emailwarn.style.visibility = "visible";
    passwordwarn.style.visibility = "visible";
  }
  if (email.value && password.value === "") {
    passwordwarn.style.visibility = "visible";
    emailwarn.style.visibility = "hidden";
  } else if (password.value && email.value === "") {
    emailwarn.style.visibility = "visible";
    passwordwarn.style.visibility = "hidden";
  }
};
hidepassword.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    viewpasswordicon.style.display = "inherit";
    hidepassword.style.display = "none";
  }
};
viewpasswordicon.onclick = function () {
  password.type = "password";
  viewpasswordicon.style.display = "none";
  hidepassword.style.display = "inherit";
};
