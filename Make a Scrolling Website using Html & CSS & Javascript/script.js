const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river = document.getElementById("river");
const boat = document.getElementById("boat");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value + "px";
  mountains3.style.top = value * 1.2 + "px";
  mountains4.style.top = value * 1.1 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value + "px";
};
