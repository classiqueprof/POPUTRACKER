const PINmobile = document.querySelector(".PINmobile");
const menucontainer2 = document.querySelector("#pincontainer");

let showmobile = true;

PINmobile.onclick = function () {
  if (showmobile) {
    menucontainer2.style.display = "inherit";
    showmobile = false;
  } else {
    menucontainer2.style.display = "none";
    showmobile = true;
  }
};

const menucontainer1 = document.querySelector("#menucontainer");
const menubar = document.querySelector("#menubar");
const exit = document.querySelector("#menubar2");

exit.style.display = "none";

let menutoggle = true;
menubar.onclick = function () {
  if (menutoggle) {
    menucontainer1.style.visibility = "visible";
    menutoggle = false;
    menubar.style.display = "none";
    exit.style.display = "inherit";
  }
};
exit.onclick = function () {
  menucontainer1.style.visibility = "hidden";
  menutoggle = true;
  menubar.style.display = "inherit";
  exit.style.display = "none";
};
