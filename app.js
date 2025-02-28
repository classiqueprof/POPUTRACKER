const body = document.querySelector("#body");
const down = document.querySelector("#down");
const down2 = document.querySelector("#down2");
const down3 = document.querySelector("#down3");
const down4 = document.querySelector("#down4");
const down5 = document.querySelector("#down5");
const Answertono1 = document.querySelector("#Answertono1");
const Ans1 = document.querySelector("#Ans1");
const Ans2 = document.querySelector("#Ans2");
const Ans3 = document.querySelector("#Ans3");
const Ans4 = document.querySelector("#Ans4");
const Ans5 = document.querySelector("#Ans5");
const Firstquestionbar = document.querySelector(".Firstquestionbar");
const Secondquestionbar = document.querySelector(".Secondquestionbar");
const Thirdquestionbar = document.querySelector(".Thirdquestionbar");
const Fourthquestionbar = document.querySelector(".Fourthquestionbar");
const Fifthquestionbar = document.querySelector(".Fifthquestionbar");
const official = document.querySelector("#record-options");
const drop4 = document.querySelector(".drop4");
const pin = document.querySelector("#pin-link-dropdown");
const about = document.querySelector("#about");
const home = document.querySelector("#homelink");
const patnership = document.querySelector("#partnership");
const job = document.querySelector("#job");
const contact = document.querySelector("#contact");
const drop3 = document.querySelector(".drop3");
const drop2 = document.querySelector(".drop2");
const drop1 = document.querySelector(".drop1");
const pindropDown = document.querySelector("#pin-link-dropdown");
const pinoption = document.querySelector("#pinoption");
pindropDown.addEventListener("mouseenter", function () {
  pinoption.style.visibility = "visible";
  pinoption.style.opacity = "1";
  pinoption.style.transition = ".5s";
});
drop3.addEventListener("mouseenter", function () {
  official.style.visibility = "visible";
  official.style.opacity = "1";
  official.style.transition = ".5s";
});
drop2.addEventListener("mouseenter", function () {
  official.style.visibility = "hidden";
  official.style.opacity = "0";
  official.style.transition = "none";
});
drop1.addEventListener("mouseenter", function () {
  official.style.visibility = "hidden";
  official.style.opacity = "0";
  official.style.transition = "none";
});

body.onclick = function () {
  pinoption.style.visibility = "hidden";
  official.style.visibility = "hidden";
  pinoption.style.opacity = "0";
  pinoption.style.transition = "none";
  official.style.opacity = "0";
  official.style.transition = "none";
};
drop3.addEventListener("mouseenter", function () {
  drop4.style.color = "rgb(255, 115, 0)";
});
drop4.addEventListener("mouseenter", function () {
  drop4.style.color = "rgb(255, 115, 0)";
});
drop4.addEventListener("mouseout", function () {
  drop4.style.color = "green";
});

home.addEventListener("mouseenter", function () {
  pinoption.style.visibility = "hidden";
  official.style.visibility = "hidden";
  pinoption.style.opacity = "0";
  pinoption.style.transition = "none";
  official.style.opacity = "0";
  official.style.transition = "none";
});
job.addEventListener("mouseenter", function () {
  pinoption.style.visibility = "hidden";
  official.style.visibility = "hidden";
  pinoption.style.opacity = "0";
  pinoption.style.transition = "none";
  official.style.opacity = "0";
  official.style.transition = "none";
});
patnership.addEventListener("mouseenter", function () {
  pinoption.style.visibility = "hidden";
  official.style.visibility = "hidden";
  pinoption.style.opacity = "0";
  pinoption.style.transition = "none";
  official.style.opacity = "0";
  official.style.transition = "none";
});
about.addEventListener("mouseenter", function () {
  pinoption.style.visibility = "hidden";
  official.style.visibility = "hidden";
  pinoption.style.opacity = "0";
  pinoption.style.transition = "none";
  official.style.opacity = "0";
  official.style.transition = "none";
});
contact.addEventListener("mouseenter", function () {
  pinoption.style.visibility = "hidden";
  official.style.visibility = "hidden";
  pinoption.style.opacity = "0";
  pinoption.style.transition = "none";
  official.style.opacity = "0";
  official.style.transition = "none";
});

let show = "true";
Firstquestionbar.onclick = function () {
  if (show) {
    Ans1.style.display = "inherit";
    show = false;
    Firstquestionbar.style.backgroundColor = "transparent";
    Firstquestionbar.style.transition = ".5s";
    down.style.transition = ".5s";
    down.style.transform = "rotateX(140deg)";
    Ans1.style.animation = " ans1 .5s reverse ease-in 1";
  } else {
    Ans1.style.display = "none";
    show = true;
    Firstquestionbar.style.backgroundColor = "rgba(5, 157, 5, 0.315)";
    down.style.transform = "rotateX(0deg)";
    Ans1.style.animation = "none";
  }
};
Secondquestionbar.onclick = function () {
  if (show) {
    Ans2.style.display = "inherit";
    show = false;
    Secondquestionbar.style.backgroundColor = "transparent";
    Secondquestionbar.style.transition = ".5s";
    down2.style.transition = ".5s";
    down2.style.transform = "rotateX(140deg)";
    Ans2.style.animation = " ans1 .5s reverse ease-in 1";
  } else {
    Ans2.style.display = "none";
    show = true;
    Secondquestionbar.style.backgroundColor = "rgba(5, 157, 5, 0.315)";
    down2.style.transform = "rotateX(0deg)";
    Ans2.style.animation = "none";
  }
};
Thirdquestionbar.onclick = function () {
  if (show) {
    Ans3.style.display = "inherit";
    show = false;
    Thirdquestionbar.style.backgroundColor = "transparent";
    Thirdquestionbar.style.transition = ".5s";
    down3.style.transition = ".5s";
    down3.style.transform = "rotateX(140deg)";
    Ans3.style.animation = " ans1 .5s reverse ease-in 1";
  } else {
    Ans3.style.display = "none";
    show = true;
    Thirdquestionbar.style.backgroundColor = "rgba(5, 157, 5, 0.315)";
    down3.style.transform = "rotateX(0deg)";
    Ans3.style.animation = "none";
  }
};
Fourthquestionbar.onclick = function () {
  if (show) {
    Ans4.style.display = "inherit";
    show = false;
    Fourthquestionbar.style.backgroundColor = "transparent";
    Fourthquestionbar.style.transition = ".5s";
    down4.style.transition = ".5s";
    down4.style.transform = "rotateX(140deg)";
    Ans4.style.animation = " ans1 .5s reverse ease-in 1";
  } else {
    Ans4.style.display = "none";
    show = true;
    Fourthquestionbar.style.backgroundColor = "rgba(5, 157, 5, 0.315)";
    down4.style.transform = "rotateX(0deg)";
    Ans4.style.animation = "none";
  }
};
Fifthquestionbar.onclick = function () {
  if (show) {
    Ans5.style.display = "inherit";
    show = false;
    Fifthquestionbar.style.backgroundColor = "transparent";
    Fifthquestionbar.style.transition = ".5s";
    down5.style.transition = ".5s";
    down5.style.transform = "rotateX(140deg)";
    Ans5.style.animation = " ans1 .5s reverse ease-in 1";
  } else {
    Ans5.style.display = "none";
    show = true;
    Fifthquestionbar.style.backgroundColor = "rgba(5, 157, 5, 0.315)";
    down5.style.transform = "rotateX(0deg)";
    Ans5.style.animation = "none";
  }
};
