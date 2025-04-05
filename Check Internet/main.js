const title = document.querySelector(".title");
const ul = document.querySelector("ul");
const reload = document.querySelector(".reload");

function online() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
  ul.classList.add("hide");
  reload.classList.add("hide");
}

function offline() {
  title.innerHTML = "Offline Now";
  title.style.color = "#666";
  ul.classList.remove("hide");
  reload.classList.remove("hide");
}

window.onload = () => {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};
window.addEventListener("online", () => {
  online();
});
window.addEventListener("offline", () => {
  offline();
});

reload.onclick = () => {
  window.location.reload();
};
