const phones = [
  {
    id: "img1",
    path: "images/0.png",
    color: "#000",
  },
  {
    id: "img2",
    path: "images/1.png",
    color: "#247ec8",
  },
  {
    id: "img3",
    path: "images/2.png",
    color: "#1e1e1e",
  },
  {
    id: "img4",
    path: "images/3.png",
    color: "#c79b53",
  },
  {
    id: "img5",
    path: "images/4.png",
    color: "#c82525",
  },
];
function _changePicture(path) {
  const picture = document.getElementById("defalutImg");
  picture.src = path;
}
function _changeBackground(color) {
  const container = document.querySelector(".container");
  container.style.background = color;
}

document.querySelectorAll(".icons img").forEach((img) => {
  img.addEventListener("click", (event) => {
    const phoneId = event.target.id;
    const selectedPhone = phones.find((phone) => phone.id === phoneId);

    if (selectedPhone) {
      _changePicture(selectedPhone.path);
      _changeBackground(selectedPhone.color);
    }
  });
});
